# CHANGELOG

## Versi UI/UX — skill pendukung `ui-ux-pro-max` (design intelligence)

### Ditambahkan
- **Skill baru `ui-ux-pro-max`** (Antigravity edition, adaptasi dari `nextlevelbuilder/ui-ux-pro-max-skill`, MIT; lihat `NOTICE.md`):
  10 tier aturan prioritas (aksesibilitas dulu), metode design system, *pre-delivery checklist*, template `MASTER.md`.
  Berjalan dalam *Native mode*; *Database mode* opsional (butuh `scripts/` dan `data/` upstream yang disalin manusia).
- **`ui-ux-pro-max/references/skill-factory-integration.md`**: urutan prioritas sumber kebenaran, lokasi file, titik panggil, pemetaan
  preset `design.md` → gaya dan dial, daftar hal yang butuh dasar PRD, aturan instalasi, pemetaan keparahan audit UI, aturan verifikasi.
- Lokasi design system: `docs/design-system/<project-slug>/MASTER.md` dan `pages/<halaman>.md`.
- **Pass 4 (UI/UX)** di `review-code`: aktif hanya jika diff menyentuh UI; report only; hal yang butuh tampilan nyata masuk "Tidak terverifikasi".

### Diubah
- **`prd-to-design`**: menurunkan design system dan menyajikannya bersama draft halaman dalam satu gate `approve`; menyimpan `MASTER.md`
  setelah approve; tidak menimpa `MASTER.md` yang ada. Template `design-template.md`: bagian Design System dan butir checklist baru.
- **`code-development`**: fitur ber-UI membaca Master (tidak menghentikan alur bila Master tidak ada), memakai token semantik dan
  state lengkap, menjalankan pre-delivery checklist, dan melaporkan butir yang tidak terverifikasi. Rencana memuat baris `UI Design System`.
- **Orchestrator `build-app-workflow`**: Fase 1b, 2.1, dan 3 menyebut peran `ui-ux-pro-max`; aturan bahwa ia pendukung, bukan fase.
- README, SOP, dan diagram arsitektur diperbarui (12 skill, prinsip 9 "Satu Sumber Kebenaran Visual").

### Penyesuaian pada skill `ui-ux-pro-max` saat digabung
- Pencarian folder skill: `.agents/skills/` lebih dulu (sebelumnya hanya `.agent/skills/`), lalu `.agent/skills/`, lalu folder global.
- Deskripsi frontmatter dan Section 7 "Skill Factory mode": di proyek Factory ia menjadi helper dan tidak melewati gate Plan First.
- Persist ke `docs/design-system/` (bukan `design-system/` di root); `--output-dir "<project-root>/docs"` untuk Database mode.
- Kolom Dark di `MASTER.md` diisi hanya bila PRD meminta dark mode; dial `motion` tidak diatur kecuali diminta.
- Paket (ikon, font, pustaka UI) selalu lewat gate instalasi yang dijalankan manusia.

## Versi Postman — utilitas manual untuk test API

### Ditambahkan
- **Skill baru `generate-postman-collection`** (manual, atas permintaan manusia): membaca seluruh proyek secara read-only,
  menemukan endpoint, lalu menghasilkan `postman/*.postman_collection.json` (v2.1), `*.postman_environment.json`, dan `README.md`.
  Urutan Run collection: Happy Path → Worst Case → Cleanup.
- Referensi: panduan discovery per framework, katalog worst case, format & pola script, `validate_collection.py`
  (cek JSON, urutan folder, variabel terdefinisi, assertion "bukan 5xx" di semua Worst Case, rahasia bocor, sintaks script),
  serta `example-collection.json` / `example-environment.json`.
- Orchestrator: aturan bahwa skill ini tidak pernah dipanggil otomatis (hanya boleh disebut sebagai opsi di akhir Fase 3).

### Verifikasi
- Collection contoh dijalankan dengan **newman** terhadap server tiruan: 28 request, 55 assertion, semua lulus.
  Dengan bug 500 yang disuntikkan, assertion "bukan 5xx" gagal tepat pada request yang memicunya.
- Validator diuji dengan 5 kontrol negatif (assertion 5xx hilang, variabel tak terdefinisi, urutan folder salah, JWT bocor, sintaks JS salah): semuanya tertangkap.

## Versi git-per-US — satu branch per User Story, commit & push oleh manusia

### Ditambahkan
- **Skill baru `create-feature-branch`** dengan dua mode:
  - *Mulai*: memeriksa repo (ada commit pertama, working tree bersih, base branch), mengusulkan nama dari fitur
    (`<type>/us-<N>-<slug>`), dan membuat branch lokal setelah `approve`.
  - *Selesai*: memverifikasi US, lalu menyajikan perintah `git push`, draf judul/isi Pull Request, dan langkah merge
    untuk dijalankan manusia.
  - Panduan nama: `references/branch-naming-guide.md`.
- **Langkah 2.0 dan 2.5 di orchestrator** (buat branch, serah terima), plus aturan mutlak git di orchestrator, README, dan diagram.
- Template konvensi: bagian *Branch & Git Workflow* (base branch, pola nama, siapa yang commit/push, cara menggabungkan).
  `setup-project` menanyakan/merekomendasikannya bersama gaya commit.

### Diubah
- **`generate-commit`**: tidak lagi menjalankan `git add`/`git commit`. Agent menyusun pesan, menunggu approve, lalu memberi perintah
  untuk dijalankan manusia. Juga menolak commit fitur langsung di base branch (mengarahkan ke `create-feature-branch`).
- `code-development`: memeriksa branch aktif (peringatan jika di base branch) dan melarang `git add/commit/push`.


## Versi ini — dukungan "mulai dari cerita, tanpa PRD"

### Ditambahkan
- **Pintu masuk (triage)** di `build-app-workflow`: Jalur A (sudah tahu stack) vs Jalur B (baru punya cerita).
  Jalur B mengubah urutan menjadi Fase 1 → Fase 0.
- **`research-to-prd`**: tahap Discovery (6 topik, satu pertanyaan per giliran, maks 6, "belum tahu" sah),
  Ringkasan Pemahaman berbukti dengan gate sendiri, tag `[Dari cerita]` / `[Asumsi]`, Open Questions terisi,
  dan penyimpanan `docs/research-synthesis.md`.
- **`setup-project` Mode Rekomendasi**: membaca PRD dan mengusulkan stack, gaya koding, build flow, commit,
  dan test runner beserta alasan awam. Panduan di `references/stack-recommendation-guide.md`. Berhenti dan
  mengarahkan ke `research-to-prd` bila PRD belum ada.
- **Skill baru `prd-to-design`** → `docs/design.md` (menggantikan prompt manual `design-prompt.md` yang berasal dari versi Copilot).
- **Fase 1b** (Desain UI) di orchestrator, SOP, dan diagram.
- **Mode Pendamping**: setiap perintah terminal dijelaskan (lokasi, fungsi, tanda berhasil, jika error).

### Diubah
- `code-development`: berhenti jika `docs/prd.md` tidak ada, atau fitur ber-UI tidak punya `docs/design.md`.
- Template PRD: bagian Open Questions berbentuk tabel; checklist anti-karang dan "tanpa keputusan teknologi".
- `docs/templates/research-synthesis.md`: diganti template bukti-dari-cerita (tanpa prompt Lab C).
- `docs/templates/design-prompt.md`: dijadikan prompt cadangan; referensi `docs/skill-recipes.md` yang tidak ada dihapus.
- README: jumlah skill dikoreksi (9), struktur dan panduan penggunaan diperbarui.

### Diperbaiki
- Arsip zip memakai pemisah path `/` (sebelumnya `\`, bermasalah di Linux/macOS).
- Folder kosong `setup-project/references/` kini berisi panduan rekomendasi.
