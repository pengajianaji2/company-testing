# 🏭 Skill Factory — Antigravity Edition (Stack-Agnostic)
> Framework pembuatan dan orkestrasi **Antigravity AI Skills** berbasis materi *Spec-Driven Development*.

Framework ini **stack-agnostic** (tidak terkunci pada Express/Node.js saja) dan bisa dipakai oleh dua tipe user:

- **Developer yang sudah tahu stack-nya** → Jalur A: wawancara teknis lebih dulu (Fase 0), lalu PRD.
- **Orang yang hanya punya ide/cerita, tanpa PRD dan tanpa latar teknis** → Jalur B: cukup bercerita. Agent menggali
  ceritamu, menulis PRD, lalu **merekomendasikan** stack, gaya koding, dan format commit beserta alasannya.
  Kamu tinggal menyetujui atau mengganti.

> [!CAUTION]
> **ATURAN MUTLAK INSTALASI DEPENDENSI (HUMAN-EXECUTED):**
> Kapan pun proyek membutuhkan instalasi package, library, atau framework, **AGENT DILARANG MENGINSTALL OTOMATIS**.
> Agent wajib berhenti, memberikan baris perintah terminal (`npm i <package>` / `pnpm add <package>`), dan menunggu
> Anda menjalankannya di terminal. Di Jalur B, tiap perintah dijelaskan: di mana menjalankannya, fungsinya, tanda berhasil,
> dan apa yang dilakukan jika error.

> [!CAUTION]
> **ATURAN MUTLAK GIT (COMMIT & PUSH = MANUSIA):**
> Agent hanya boleh **membaca** repository dan **membuat branch lokal baru** (setelah Anda `approve`).
> `git add`, `git commit`, `git push`, `git pull`, `git merge`, dan penghapusan branch **selalu Anda yang menjalankan**.
> Agent menyiapkan pesan commit, perintah persisnya, dan draf Pull Request.

---

## 📦 Isi Paket Zip

```text
skill-factory-antigravity/
│
├── README.md                               ← Panduan utama (file ini)
│
├── docs/                                   ← Panduan SOP & Template
│   ├── SOP-Skill-Factory.md                ← SOP lengkap (pintu masuk + 5 fase)
│   ├── Master-Workflow-Architecture.md     ← Diagram alur Jalur A / Jalur B
│   ├── CHANGELOG.md                        ← Daftar perubahan versi ini
│   └── templates/
│       ├── code-conventions-template.md    ← Template profil koding & tech stack
│       ├── prd-template.md                 ← Template PRD 1 halaman (dengan Open Questions)
│       ├── research-synthesis.md           ← Template ringkasan berbukti dari cerita
│       ├── design-prompt.md                ← Prompt cadangan manual untuk deskripsi UI
│       ├── skill-template.md               ← Template untuk membuat skill baru
│       └── style-samples/                  ← Contoh kode referensi (Style A & Style B)
│
├── .agents/skills/                         ← 12 SKILL (10 alur kerja + 1 pendukung desain + 1 utilitas manual)
│   ├── setup-project/                      ← Fase 0: Mode Mandiri / Mode Rekomendasi
│   │   └── references/stack-recommendation-guide.md
│   ├── research-to-prd/                    ← Fase 1: Cerita → Discovery → PRD berbukti
│   │   └── references/ (prd-template.md, research-synthesis-template.md)
│   ├── prd-to-design/                      ← Fase 1b: PRD → docs/design.md + design system (jika ada UI)
│   │   └── references/design-template.md
│   ├── ui-ux-pro-max/                      ← PENDUKUNG DESAIN: aturan UI/UX, design system, checklist sebelum serah terima
│   │   ├── references/ (priority-rules, pre-delivery-checklist, design-system-method, domain-lookup, skill-factory-integration)
│   │   └── assets/MASTER.template.md       ← Dipanggil oleh prd-to-design, code-development, review-code
│   ├── create-feature-branch/              ← Fase 2: Satu branch per US (Mulai) + serah terima push/PR (Selesai)
│   │   └── references/branch-naming-guide.md
│   ├── code-development/                   ← Fase 2: Implementasi 1 fitur (Plan first)
│   │   └── references/code-conventions.md
│   ├── write-tests/                        ← Fase 2: Test pengunci perilaku (PASS)
│   ├── debug-fix/                          ← Fase 2: Diagnosis & fix kode (bukan test)
│   ├── generate-commit/                    ← Fase 2: Pesan commit + perintah (manusia yang commit)
│   ├── review-code/                        ← Fase 3: Audit kualitas (Report only)
│   │   └── references/review-checklist.md
│   ├── generate-docs/                      ← Fase 3: Inline comments & update README
│   └── generate-postman-collection/        ← UTILITAS MANUAL: baca API proyek → collection Postman
│       └── references/ (panduan discovery, katalog worst case, format, validator, contoh collection)
│
└── orchestrator/.agents/skills/            ← ORCHESTRATOR TERPISAH (Cara 2)
    └── build-app-workflow/SKILL.md         ← Triage Jalur A/B + mengorkestrasi semua fase
```

---

## 🚀 Cara Menggunakan di Proyek Anda

### Pilihan B — Master Orchestrator (disarankan untuk pemula / hanya punya cerita)
1. Salin folder `.agents/` ke root proyek Anda.
2. Salin folder `build-app-workflow` dari `orchestrator/.agents/skills/` ke `.agents/skills/` proyek Anda.
3. Di chat Antigravity cukup katakan, misalnya:
   > *"Mulai project baru dari nol"* atau *"Aku punya ide aplikasi, tolong bantu dari awal"*

   Agent akan bertanya satu hal: apakah kamu sudah tahu stack atau baru punya cerita. Lalu ia memandu sisanya:
   - **Jalur B (cerita):** bercerita bebas → agent bertanya hal yang kurang (maks 6 pertanyaan, satu per satu) →
     ringkasan pemahaman → PRD → rekomendasi stack → desain UI (jika ada) → bangun fitur satu per satu.
   - **Jalur A (sudah tahu stack):** wawancara stack → PRD → desain UI (jika ada) → bangun fitur.

### Pilihan A — Pemanggilan Manual (kontrol penuh)
Panggil skill sesuai tahap. Urutan Jalur B: `research-to-prd` → `setup-project` → `prd-to-design` → build loop.
Urutan Jalur A: `setup-project` → `research-to-prd` → `prd-to-design` → build loop.
Build loop per User Story: `create-feature-branch` → `code-development` → `write-tests` → `generate-commit` → `create-feature-branch` (Selesai).

- *"Gunakan skill research-to-prd"* — ceritakan idemu; agent menggali dan menyusun PRD.
- *"Gunakan skill setup-project"* — jawab sendiri, atau katakan *"belum tahu, rekomendasikan saja"*.
- *"Gunakan skill prd-to-design"* — deskripsi tampilan setiap halaman dan design system-nya (dilewati bila tidak ada UI).
- *"Gunakan skill create-feature-branch untuk US-1"* — agent mengusulkan nama (misal `feat/us-1-pilih-slot-booking`) dan membuat branch lokal setelah kamu approve.
- *"Gunakan skill code-development untuk US-1"* — mulai koding (agent berhenti dan memberi `npm i <pkg>` jika perlu).
- *"Gunakan skill write-tests untuk US-1"* — kunci perilaku dengan test.
- *"Gunakan skill generate-commit"* — agent menyusun pesan dan perintah; **kamu** yang menjalankan `git commit`.
- *"US-1 selesai, siapkan push"* — agent memverifikasi lalu memberi perintah push, draf Pull Request, dan langkah merge untuk kamu jalankan.
- *"Gunakan skill review-code"* — audit kualitas.
- *"Gunakan skill generate-docs"* — dokumentasi.

### Pendukung Desain — `ui-ux-pro-max`
Bukan fase tersendiri; ia membantu tiga skill di alur kerja:
- **`prd-to-design` (Fase 1b):** menurunkan satu design system (gaya, token warna dengan kontras terverifikasi, huruf, spasi) dari PRD dan
  preset halaman. Disetujui bersama daftar halaman, lalu disimpan ke `docs/design-system/<project-slug>/MASTER.md`.
- **`code-development` (Fase 2):** untuk fitur ber-UI, kode memakai token Master (bukan hex mentah), set ikon SVG, dan state lengkap;
  lalu menjalankan *pre-delivery checklist* dan melaporkan butir yang tidak bisa diverifikasi.
- **`review-code` (Fase 3):** bila diff menyentuh UI, ada Pass 4 (audit UI/UX, report only).

Kamu juga boleh memanggilnya langsung (*"Gunakan skill ui-ux-pro-max untuk merapikan halaman login"*); di proyek Skill Factory ia tetap
mengikuti Plan first dan `docs/design.md`. Dark mode, animasi dekoratif, dan ikon dekoratif **tidak** ditambahkan tanpa dasar di PRD.
Skill ini berjalan dalam *Native mode* (tanpa database pencarian); lihat `.agents/skills/ui-ux-pro-max/scripts/README.md` bila ingin *Database mode*.

### Utilitas Manual — Collection Postman (kapan pun kamu minta)
Di luar alur otomatis. Katakan: *"Gunakan skill generate-postman-collection"*. Agent **hanya membaca** proyekmu
(tidak mengubah kode, tidak menjalankan server, tidak mengirim request, tidak menginstal apa pun), menampilkan inventaris
endpoint dan rencana test untuk kamu setujui, lalu menulis file di folder `postman/`:
`*.postman_collection.json`, `*.postman_environment.json`, dan `README.md`.
Di Postman: **Import** kedua file → pilih environment → isi nilai yang sengaja dikosongkan → **Run collection** di lingkungan dev/test.
Urutan run: **1. Happy Path → 2. Worst Case → 3. Cleanup**. Setiap Worst Case juga menegaskan "tidak boleh 5xx", sehingga bug server langsung terlihat.

### Catatan Penting
- Satu User Story = satu branch (`<type>/us-<N>-<slug>`). Commit dan push selalu oleh manusia.
- `code-development` **berhenti** jika `docs/prd.md` tidak ada, atau jika fitur ber-UI tidak punya `docs/design.md`.
  Ia tidak akan menebak.
- Semua rekomendasi agent (stack, gaya koding, tampilan) **baru berlaku setelah kamu `approve`**.
- Urutan prioritas tampilan: PRD > `docs/design.md` > `docs/design-system/<slug>/MASTER.md` > override per halaman.
- Persona dan bukti di PRD hanya berasal dari ceritamu; hal yang disimpulkan agent ditandai `[Asumsi]` dan masuk Open Questions.
