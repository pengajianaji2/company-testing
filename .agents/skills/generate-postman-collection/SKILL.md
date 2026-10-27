---
name: generate-postman-collection
description: >-
  MANUAL utility skill, run only when the human explicitly asks (e.g. "buat postman collection",
  "generate collection untuk test API", "bikin test happy path dan worst case"). It READS the whole project
  (read-only), discovers every HTTP API endpoint, and generates an importable Postman Collection v2.1 plus an
  environment file, ordered so that "Run collection" works end to end: Happy Path first, then Worst Case
  (negative / boundary / auth / validation tests), then Cleanup. It never modifies project code, never starts
  the server, never sends requests, never installs anything, and never copies secrets. Not part of the
  automatic build-app-workflow pipeline; never invoke it unprompted.
---

# Generate Postman Collection

Membaca seluruh proyek (hanya membaca), menemukan semua endpoint API, lalu membuat **Postman Collection**
yang siap di-import dan dijalankan lewat **Run collection**. Urutan eksekusi:

1. **Happy Path** — alur normal dari awal sampai akhir (auth → buat → baca → ubah).
2. **Worst Case** — input salah, auth salah, batas nilai, data tidak ada, duplikat, dan sejenisnya.
3. **Cleanup** — menghapus data yang dibuat oleh test, lalu memastikan data itu benar-benar hilang.

> [!IMPORTANT]
> **SKILL MANUAL — HANYA ATAS PERMINTAAN MANUSIA.** Agent tidak boleh memanggil skill ini sendiri,
> tidak boleh menjadikannya langkah otomatis di alur kerja lain, dan hanya boleh menyebutnya sebagai opsi.
>
> **BATAS KEWENANGAN:**
> | Agent BOLEH | Agent DILARANG |
> |---|---|
> | Membaca file kode, konfigurasi, spesifikasi API, `.env.example` | Mengubah file kode/konfigurasi proyek |
> | Menulis file **hanya di folder `postman/`** | Menjalankan server, mengirim request ke API mana pun |
> | Menjalankan validator milik skill ini terhadap file hasil sendiri | Menginstal apa pun (`newman`, paket npm/pip) — manusia yang menginstal |
> | | Membaca atau menyalin nilai rahasia dari `.env`, kunci, token, kredensial |

Panduan pendukung:
- [references/endpoint-discovery-guide.md](./references/endpoint-discovery-guide.md) — cara menemukan endpoint per framework.
- [references/worst-case-catalog.md](./references/worst-case-catalog.md) — katalog test worst case.
- [references/postman-collection-format.md](./references/postman-collection-format.md) — format JSON & pola script.
- [references/validate_collection.py](./references/validate_collection.py) — validator hasil (hanya stdlib Python).
- [references/example-collection.json](./references/example-collection.json) dan
  [references/example-environment.json](./references/example-environment.json) — contoh nyata yang sudah diuji.

## Inputs

- Seluruh proyek (kode sumber, konfigurasi, spesifikasi API bila ada).
- Opsional tapi membantu: `docs/prd.md` (Acceptance Criteria → label test), `docs/project-config.md`.
- Dari user: cakupan (default: seluruh proyek), base URL lingkungan test, cara mendapatkan token/akun uji.

## Steps

1. **Tentukan Cakupan.**
   - Default: seluruh proyek. Pada monorepo, daftarkan layanan/paket yang punya API dan tanyakan apakah semuanya
     dimasukkan atau satu per satu (satu collection per layanan).
   - Abaikan: `node_modules`, `dist`, `build`, `.next`, `.git`, `venv`, `__pycache__`, `coverage`, file minified,
     lockfile. **Jangan membuka `.env`, `.env.local`, `*.pem`, `*.key`, atau file kredensial.** Boleh membaca
     `.env.example` untuk mengetahui *nama* variabel.

2. **Temukan Endpoint (hanya membaca).** Ikuti
   [references/endpoint-discovery-guide.md](./references/endpoint-discovery-guide.md):
   - Cek dulu spesifikasi OpenAPI/Swagger bila ada, lalu **verifikasi silang dengan kode** (kode adalah kebenaran).
   - Deteksi framework dari manifest, cari registrasi route, selesaikan prefix (`app.use('/api', router)`,
     `APIRouter(prefix=...)`, versioning), baca middleware auth, skema validasi, kode status dan bentuk respons yang
     terlihat di handler.
   - Setiap endpoint **wajib bisa ditunjuk ke `file:baris`**. Tidak ada endpoint karangan.
   - Yang tidak bisa dibuat dalam collection HTTP (WebSocket, SSE, gRPC) dicatat di bagian "Tidak tercakup".
   - Jika tidak ada API HTTP sama sekali: laporkan dan **berhenti**.

3. **Plan First — Inventaris & Rencana Test.** Tampilkan, lalu **BERHENTI**:
   ```text
   🧪 Inventaris API (<N> endpoint, <M> resource)
   | # | Method | Path lengkap | Auth | Body / parameter wajib | Status yang terlihat di kode | Sumber |
   |---|--------|--------------|------|------------------------|------------------------------|--------|

   Rencana test:
   - Happy Path : <X> request (alur: <ringkasan urutan>)
   - Worst Case : <Y> request (kategori: auth, validasi, batas nilai, tidak ditemukan, duplikat, ...)
   - Cleanup    : <Z> request

   Perlu keputusanmu:
   1. Base URL lingkungan test? (usulan: <http://localhost:PORT> dari <sumber>)
   2. Cara memperoleh token: <endpoint login/register yang ditemukan> atau akun uji yang kamu sediakan?
   3. Peran (role) yang ada: <daftar>. Perlu token terpisah untuk uji 403?
   4. Endpoint berisiko (hapus massal, reset, kirim email/pembayaran): <daftar> → dikecualikan kecuali kamu minta.
   Asumsi yang saya buat: <daftar bertanda [Asumsi]>
   ```
   - Tanya hanya yang tidak bisa dibaca dari kode. Jangan menebak kredensial.
   - Dilarang membuat file sebelum user menjawab/`approve`. User boleh mengecualikan endpoint atau kategori worst case.

4. **Generate File (hanya di folder `postman/`).**
   - `postman/<nama-proyek>.postman_collection.json` — Collection v2.1.
   - `postman/<nama-proyek>.postman_environment.json` — variabel lingkungan (`baseUrl`, kredensial uji **kosong**
     atau placeholder, bukan nilai rahasia nyata).
   - `postman/README.md` — cara import dan menjalankan (ringkas).
   - Struktur dan pola script: [references/postman-collection-format.md](./references/postman-collection-format.md).
     Katalog worst case: [references/worst-case-catalog.md](./references/worst-case-catalog.md).
   - Aturan penyusunan:
     - Folder level atas berurutan: `1. Happy Path` → `2. Worst Case` → `3. Cleanup`; di dalamnya subfolder per resource.
     - Data berantai (id, token) disimpan dengan `pm.collectionVariables.set(...)` supaya Run collection berjalan tanpa
       edit manual. Data unik (email, nama) dibuat di pre-request script dengan nilai acak.
     - Setiap request Worst Case punya **dua assertion**: status yang diharapkan (atau rentang 4xx bila kode tidak
       memastikan) **dan** "tidak boleh 5xx". Respons 5xx = temuan bug.
     - Ekspektasi yang berasal dari tebakan, bukan kode, ditandai `[Asumsi]` di deskripsi request.
     - Deskripsi request menyebut sumber (`file:baris`) dan AC/US di PRD bila ada kecocokan.
     - Jangan mengarang bentuk respons: assertion pada field hanya jika field itu terlihat di kode; selain itu cukup status +
       "respons JSON valid" bila API memang mengembalikan JSON.

5. **Validasi Hasil.**
   - Jalankan validator milik skill ini (membaca file hasil, tanpa jaringan):
     ```bash
     python3 .agents/skills/generate-postman-collection/references/validate_collection.py postman/<nama>.postman_collection.json postman/<nama>.postman_environment.json
     ```
     Jika Python tidak tersedia, lakukan pemeriksaan manual: JSON valid, urutan folder, semua `{{variabel}}` terdefinisi,
     setiap request Worst Case punya assertion "tidak 5xx".
   - Perbaiki semua temuan validator sebelum melapor. Sertakan ringkasan hasilnya di laporan.

6. **Serah Terima ke Manusia.** Sajikan langkah (agent tidak menjalankannya):
   1. Postman → **Import** → pilih kedua file di `postman/`.
   2. Pilih environment, isi nilai yang sengaja dikosongkan (misal `userPassword`, token admin).
   3. Pastikan server berjalan di lingkungan **dev/test** (bukan produksi), lalu klik kanan collection → **Run collection**
      (atau tombol Run), iterasi 1, jalankan semua folder berurutan.
   4. Opsional via CLI (manusia yang menginstal): `npm i -g newman` lalu
      `newman run postman/<nama>.postman_collection.json -e postman/<nama>.postman_environment.json`.
   - Peringatkan: Happy Path **membuat data**; Cleanup menghapus data yang dibuat test, tapi jika run terhenti di tengah,
     data bisa tersisa.

7. **Triage Hasil (opsional, jika user menempelkan hasil Run).**
   - Klasifikasikan tiap kegagalan: (a) **asumsi test salah** → perbaiki collection, (b) **bug API sungguhan** (5xx, validasi
     tidak ada, data bocor) → laporkan sebagai temuan dengan request & respons yang memicunya, (c) **masalah lingkungan**
     (server mati, token kosong, data sisa).
   - Jangan melemahkan assertion hanya agar lulus. Perbaikan kode API bukan tugas skill ini: arahkan ke `debug-fix` bila user
     meminta.

## Output format

```text
✅ Postman Collection Generated

Files (postman/):
- <nama>.postman_collection.json   (<N> request: Happy <X> | Worst <Y> | Cleanup <Z>)
- <nama>.postman_environment.json  (variabel: baseUrl, ...)
- README.md

Validasi: ✅ JSON valid | ✅ variabel terdefinisi | ✅ urutan folder | ✅ semua Worst Case punya assertion "bukan 5xx"

Asumsi yang perlu kamu cek: <daftar [Asumsi]>
Tidak tercakup: <WebSocket/SSE/gRPC/endpoint dikecualikan>

Langkah untukmu: import 2 file → pilih environment → isi nilai kosong → Run collection (di lingkungan test).
```

## Rules

- **Hanya membaca proyek.** Satu-satunya tempat menulis adalah folder `postman/`.
- **Jangan menjalankan server, mengirim request, atau menginstal apa pun.** Semua itu dilakukan manusia.
- **Jangan membaca atau menyalin rahasia** (`.env`, token, kunci, password nyata). Pakai variabel Postman dengan nilai kosong/placeholder.
- Setiap endpoint dan setiap ekspektasi harus bersumber dari kode/spesifikasi, atau ditandai `[Asumsi]`. Dilarang mengarang endpoint.
- Worst case adalah **uji validasi dan ketahanan input**, bukan serangan: tidak ada brute force, load/DoS, atau payload yang merusak.
  String uji injeksi hanya diperlakukan sebagai data biasa.
- Endpoint berisiko (hapus massal, reset, pembayaran, kirim email/SMS) dikecualikan kecuali user memintanya secara eksplisit.
- Jangan menimpa collection yang sudah ada tanpa konfirmasi; bila ada, buat versi baru (`-v2`) atau minta persetujuan.
- Skill ini manual: jangan menjadikannya langkah wajib di alur otomatis.
