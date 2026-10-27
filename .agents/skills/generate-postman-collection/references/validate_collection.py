#!/usr/bin/env python3
"""Validator untuk hasil skill generate-postman-collection.

Hanya membaca file yang diberikan, tanpa jaringan dan tanpa dependensi (stdlib saja).
Pemakaian:
    python3 validate_collection.py <collection.json> [<environment.json>]
Exit code 0 = tidak ada ERROR; 1 = ada ERROR.
"""
import json, os, re, shutil, subprocess, sys, tempfile

SET_RE = re.compile(r"pm\.(?:collectionVariables|environment|variables|globals)\.set\(\s*['\"]([^'\"]+)['\"]")
VAR_RE = re.compile(r"\{\{\s*([^}\s]+)\s*\}\}")
SECRET_PATTERNS = [
    (re.compile(r"eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\."), "JWT asli"),
    (re.compile(r"AKIA[0-9A-Z]{16}"), "AWS access key"),
    (re.compile(r"sk-[A-Za-z0-9]{20,}"), "API key bergaya sk-"),
    (re.compile(r"-----BEGIN [A-Z ]*PRIVATE KEY-----"), "private key"),
]
SECTION_ORDER = [("happy", 1), ("worst", 2), ("cleanup", 3)]


def section_of(name):
    low = name.lower()
    for key, idx in SECTION_ORDER:
        if key in low:
            return key, idx
    return None, None


def script_text(event):
    return "\n".join(event.get("script", {}).get("exec", []) or [])


def walk(items, path, section, out):
    for it in items:
        if "item" in it:
            sec = section
            if not path:  # folder level atas
                sec, _ = section_of(it.get("name", ""))
            walk(it["item"], path + [it.get("name", "?")], sec, out)
        else:
            out.append((path + [it.get("name", "?")], section, it))


def request_strings(req):
    parts = []
    url = req.get("url", {})
    parts.append(url if isinstance(url, str) else url.get("raw", ""))
    for h in req.get("header", []) or []:
        parts += [str(h.get("key", "")), str(h.get("value", ""))]
    body = req.get("body") or {}
    parts.append(body.get("raw", "") or "")
    for k in ("formdata", "urlencoded"):
        for f in body.get(k, []) or []:
            parts.append(str(f.get("value", "")))
    auth = req.get("auth") or {}
    for v in (auth.get(auth.get("type", ""), []) or []):
        parts.append(str(v.get("value", "")))
    return "\n".join(parts)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    errors, warns, infos = [], [], []
    try:
        with open(sys.argv[1], encoding="utf-8") as f:
            raw = f.read()
        col = json.loads(raw)
    except Exception as e:
        print("ERROR: collection bukan JSON valid:", e)
        return 1

    env_vars = {}
    env_raw = ""
    have_env = len(sys.argv) > 2
    unresolved_no_env = set()
    if len(sys.argv) > 2:
        try:
            with open(sys.argv[2], encoding="utf-8") as f:
                env_raw = f.read()
            env = json.loads(env_raw)
            for v in env.get("values", []):
                env_vars[v["key"]] = v
        except Exception as e:
            errors.append(f"environment bukan JSON valid: {e}")

    schema = col.get("info", {}).get("schema", "")
    if "v2.1" not in schema:
        errors.append("info.schema harus Postman Collection v2.1")
    if not col.get("item"):
        errors.append("collection tidak punya item")

    col_vars = {v["key"]: v.get("value", "") for v in col.get("variable", [])}
    reqs = []
    walk(col.get("item", []), [], None, reqs)

    # urutan folder level atas
    last = 0
    for top in col.get("item", []):
        key, idx = section_of(top.get("name", ""))
        if idx is None:
            warns.append(f"folder level atas '{top.get('name')}' bukan Happy/Worst/Cleanup")
            continue
        if idx < last:
            errors.append(f"urutan folder salah: '{top.get('name')}' harus sebelum folder sebelumnya (Happy → Worst → Cleanup)")
        last = max(last, idx)

    # variabel didefinisikan sebelum dipakai (urutan eksekusi)
    defined = set(env_vars) | set(col_vars)
    scripted = set()
    for p in [(p, s, r) for p, s, r in reqs]:
        for ev in p[2].get("event", []) or []:
            scripted |= set(SET_RE.findall(script_text(ev)))
    never_set_empty = []
    seen_set = set()
    syntax_targets = []
    counts = {"happy": 0, "worst": 0, "cleanup": 0, None: 0}
    for path, section, it in reqs:
        label = " > ".join(path)
        req = it.get("request")
        counts[section] = counts.get(section, 0) + 1
        if not req:
            errors.append(f"{label}: item tanpa 'request'")
            continue
        if not req.get("method"):
            errors.append(f"{label}: method kosong")
        url = req.get("url", {})
        if not (url if isinstance(url, str) else url.get("raw")):
            errors.append(f"{label}: url kosong")
        # skrip: variabel yang di-set oleh prerequest request ini dianggap tersedia untuk request ini
        events = it.get("event", []) or []
        for ev in events:
            if ev.get("listen") == "prerequest":
                seen_set |= set(SET_RE.findall(script_text(ev)))
        for name in VAR_RE.findall(request_strings(req)):
            if name.startswith("$"):
                continue
            if name in env_vars or name in col_vars or name in seen_set:
                if name in col_vars and not col_vars[name] and name not in seen_set and name not in env_vars:
                    errors.append(f"{label}: variabel '{{{{{name}}}}}' dipakai sebelum ada request/script yang mengisinya")
                continue
            if not have_env:
                unresolved_no_env.add(name)
                continue
            errors.append(f"{label}: variabel '{{{{{name}}}}}' tidak terdefinisi (environment/collection/script sebelumnya)")
        for ev in events:
            if ev.get("listen") == "test":
                seen_set |= set(SET_RE.findall(script_text(ev)))
        # assertions
        tests = [script_text(ev) for ev in events if ev.get("listen") == "test"]
        joined = "\n".join(tests)
        if "pm.test(" not in joined:
            errors.append(f"{label}: tidak punya assertion pm.test")
        if section == "worst" and not re.search(r"below\(\s*500\s*\)|<\s*500", joined):
            errors.append(f"{label}: request Worst Case wajib punya assertion 'bukan 5xx' (below(500))")
        for ev in events:
            syntax_targets.append((label, script_text(ev)))

    if unresolved_no_env:
        warns.append("file environment tidak diberikan; variabel ini tidak bisa diverifikasi: " + ", ".join(sorted(unresolved_no_env)))

    # variabel kosong yang tak pernah di-set script dan tak ada di env berisi nilai
    for k, v in col_vars.items():
        if not v and k not in scripted and k not in env_vars:
            warns.append(f"variabel collection '{k}' kosong dan tidak pernah di-set oleh script")
    for k, v in env_vars.items():
        if not str(v.get("value", "")) :
            infos.append(f"environment '{k}' kosong: manusia perlu mengisinya sebelum Run")

    # rahasia
    blob = raw + "\n" + env_raw
    for pat, name in SECRET_PATTERNS:
        if pat.search(blob):
            errors.append(f"terdeteksi {name} di file hasil — hapus, jangan menyimpan rahasia")
    for k, v in env_vars.items():
        if re.search(r"pass|secret|token|key", k, re.I) and str(v.get("value", "")):
            warns.append(f"environment '{k}' berisi nilai: pastikan itu placeholder, bukan rahasia nyata")

    # sintaks JS (bila node tersedia)
    node = shutil.which("node")
    if node:
        bad = 0
        for label, code in syntax_targets:
            if not code.strip():
                continue
            with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as tf:
                tf.write(code)
                tmp = tf.name
            r = subprocess.run([node, "--check", tmp], capture_output=True, text=True)
            os.unlink(tmp)
            if r.returncode != 0:
                bad += 1
                lines = [l for l in r.stderr.strip().splitlines() if l.strip()]
                msg = next((l for l in lines if "Error" in l), lines[-1] if lines else "?")
                errors.append(f"{label}: sintaks script JS salah: {msg.strip()}")
        infos.append("sintaks script diperiksa dengan node" + ("" if not bad else f" ({bad} bermasalah)"))
    else:
        infos.append("node tidak tersedia: sintaks script JS tidak diperiksa otomatis")

    print(f"Request: Happy {counts['happy']} | Worst {counts['worst']} | Cleanup {counts['cleanup']} | Lainnya {counts[None]}")
    for m in infos:
        print("INFO :", m)
    for m in warns:
        print("WARN :", m)
    for m in errors:
        print("ERROR:", m)
    print("HASIL:", "GAGAL" if errors else "LULUS", f"({len(errors)} error, {len(warns)} warning)")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
