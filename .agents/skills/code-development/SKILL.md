---
name: code-development
description: >-
  Use this skill to implement a specific feature from docs/prd.md one at a time.
  It adapts to the project's chosen tech stack and coding conventions configured in
  references/code-conventions.md. Always plans first, verifies dependencies, and
  stops for human approval before creating or editing any files. If new packages
  are needed, it stops and provides the terminal install command for the human.
  For features with a UI it follows docs/design.md and the project design system, and runs
  the ui-ux-pro-max pre-delivery checklist before hand-off.
  Activate when user says "implement feature", "kerjakan US-X", or provides a story ID.
---

# Code Development

Mengimplementasikan **SATU fitur** dari `docs/prd.md` per iterasi sesuai dengan
tech stack, arsitektur, dan konvensi koding proyek yang tercatat di
[references/code-conventions.md](./references/code-conventions.md).

Skill ini mematuhi prinsip anti-vibe-coding: **wajib plan dulu**, tunggu persetujuan
manusia, baru melakukan perubahan kode, lalu melakukan explain-back.

> [!IMPORTANT]
> **GATE INSTALASI DEPENDENSI:** Agent **DILARANG** menginstall package/library pihak
> ketiga secara otomatis. Jika fitur ini membutuhkan package baru, agent wajib berhenti,
> memberikan baris perintah terminal (misal: `npm i <package>`), dan menunggu user
> menjalankannya secara manual.

## Inputs

- Story ID dari `docs/prd.md` (contoh: "US-1", "US-2") atau nama fitur spesifik.
- Dokumen pendukung yang ada di proyek:
  - `docs/prd.md` (wajib: membaca User Story & Acceptance Criteria)
  - `docs/design.md` (wajib jika fitur memiliki antarmuka pengguna / UI; dibuat oleh skill `prd-to-design`)
  - `references/code-conventions.md` atau `docs/project-config.md` (konvensi koding & tech stack proyek)
  - `docs/design-system/<project-slug>/MASTER.md` dan `pages/<halaman>.md` (opsional, token visual dari skill `prd-to-design`/`ui-ux-pro-max`)
  - `docs/references/index.md` (opsional, jejak referensi gambar/kode/URL yang sudah disetujui; konteks saja, bukan sumber kebenaran)

## Steps

1. **Plan First (Wajib Berhenti).**
   - Baca `docs/prd.md` untuk menemukan User Story dan seluruh Acceptance Criteria (AC) fitur yang diminta.
     **Jika `docs/prd.md` tidak ada: BERHENTI** dan arahkan user ke skill `research-to-prd`. Jangan menebak kebutuhan.
   - **Cek branch (hanya membaca):** jalankan `git branch --show-current`. Jika sedang di base branch
     (`main`/`master`/`develop`) dan proyek ini memakai git, peringatkan dan sarankan skill `create-feature-branch`
     (satu branch per User Story) sebelum mengubah file. Lanjut di base branch hanya jika user eksplisit memintanya.
     Jika folder ini bukan repo git, lewati pemeriksaan ini.
   - Baca `docs/design.md` jika fitur tersebut memiliki halaman atau komponen antarmuka.
     **Jika fitur punya UI tetapi `docs/design.md` tidak ada (atau tidak memuat halaman itu): BERHENTI.**
     Jangan menebak tampilan. Sarankan skill `prd-to-design`. Hanya jika user secara eksplisit memilih
     lanjut tanpa desain, tulis di rencana: *"UI minimal polos, tanpa gaya khusus (tanpa desain)"* dan
     minta `approve` untuk asumsi itu.
   - **Fitur ber-UI:** baca juga `docs/design-system/<project-slug>/MASTER.md` bila ada (dan `pages/<halaman>.md` bila ada;
    override halaman menang atas Master). Jika Master tidak ada, pakai preset visual dari `docs/design.md` dan sarankan
    skill `prd-to-design` untuk melengkapi design system; ini **tidak** menghentikan alur. Muat juga
    `../ui-ux-pro-max/references/priority-rules.md` dan `pre-delivery-checklist.md` bila skill itu terpasang.
  - Baca `references/code-conventions.md` untuk mengetahui tech stack, struktur folder, gaya penamaan, dan urutan pengerjaan yang disepakati.
    Jika bagian **Golden Samples** terisi, jadikan itu patokan gaya: tiru penamaan, struktur, error handling, dan komentar,
    **bukan** isi atau logika bisnisnya.
   - Cek dependency:
     - Apakah fitur ini membutuhkan tabel/model/fungsi dasar yang belum dibangun sebelumnya?
     - **Apakah fitur ini membutuhkan package/library baru?** Jika YA, sebutkan nama package dan alasannya.
   - Susun rencana terstruktur:
     ```text
     Feature: <Judul User Story> (ID: <US-X>)
     Tech Stack / Runtime: <yang terkonfigurasi di proyek>
     Required New Packages: <Tidak ada / sebutkan package jika butuh; termasuk set ikon, font, atau pustaka komponen>
     UI Design System: <Tidak berlaku (tanpa UI) / Master + override halaman dipakai / Master tidak ada, pakai preset design.md>
     Files to Change:
       NEW   <path file baru>
       EDIT  <path file yang diubah>
     Dependency Check: <Aman / Ada prasyarat>
     Build Flow Order: <mengikuti alur kerja yang dipilih di code-conventions>
     Plan Summary: <ringkasan implementasi>
     ```
   - **BERHENTI.** Tampilkan rencana di atas kepada user dan tunggu konfirmasi:
     *"Rencana implementasi di atas sudah sesuai? Balas 'approve' untuk mulai eksekusi."*
   - **DILARANG membuat atau mengedit file apa pun sebelum user memberikan persetujuan.**

2. **Gate Instalasi Library (Jika Membutuhkan Package Baru).**
   - Jika rencana mencakup library baru yang belum terinstall:
     - **AGENT DILARANG MENJALANKAN INSTALASI SECARA OTOMATIS.**
     - Berikan perintah terminal kepada user:
       ```bash
       # Silakan jalankan perintah ini di terminal Anda:
       npm install <package-name>
       # atau: pnpm add <package-name>
       ```
     - Tanyakan: *"Silakan jalankan instalasi package di atas di terminal Anda. Balas 'sudah' setelah selesai agar koding bisa dilanjutkan."*
     - **BERHENTI.** Tunggu konfirmasi user sebelum menulis kode yang mengimpor library tersebut.

3. **Eksekusi Implementasi (Hanya Setelah Diapprove & Dependensi Terinstall).**
   - Bangun kode HANYA untuk scope fitur yang disetujui.
   - Terapkan konvensi koding proyek secara konsisten (Style A / Style B / Custom; untuk Custom, ikuti aturan dan Golden Sample).
   - Pastikan pemisahan tanggung jawab (Separation of Concerns): business logic berada di service/lib mandiri, terpisah dari handler/UI.
   - Terapkan validasi input dan penanganan error sesuai standar proyek.
   - **Fitur ber-UI:** bangun hanya halaman dan elemen yang ada di `docs/design.md`. Pakai token semantik dari Master lewat
     mekanisme tema stack proyek (bukan hex atau angka ajaib di dalam komponen), satu set ikon SVG (bukan emoji), dan seluruh
     state yang tercantum di design.md. Setiap kontrol interaktif punya hover, pressed, focus-visible, disabled, dan loading
     sesuai kebutuhan. Ikuti `priority-rules.md` mulai dari tier 1 (aksesibilitas) ke bawah.

4. **Verifikasi Mandiri.**
   - Periksa perubahan yang baru dibuat (diff).
   - Pastikan tidak ada perubahan liar di luar lingkup fitur ini.
   - Pastikan setiap Acceptance Criterion dari story ini telah terpenuhi oleh kode.
   - **Fitur ber-UI:** jalankan `../ui-ux-pro-max/references/pre-delivery-checklist.md`. Tandai tiap butir: lulus, gagal lalu
     diperbaiki, atau tidak terverifikasi beserta alasannya. Verifikasi di browser (lebar 375/768/1280, keyboard) hanya bila ada
     browser tool dan aplikasi sudah berjalan; jika dev server belum berjalan, minta user menjalankannya. Jangan mengklaim
     pengecekan yang tidak dilakukan. Butir light/dark atau reduced-motion yang tidak relevan karena tidak ada di PRD ditandai
     *tidak berlaku (di luar PRD)*.

5. **Explain-Back & Hand-off.**
   - Jelaskan kembali dengan bahasa lugas apa saja yang dibangun dan bagaimana masing-masing AC terpenuhi.
   - Berikan rekomendasi langkah berikutnya: jalankan skill `write-tests` untuk mengunci perilaku fitur ini.

## Output format

```text
✅ Feature: <Judul User Story> (ID: <US-X>) — Selesai Diimplementasikan

What changed:
- <file path>: <ringkasan perubahan dan alasannya>

Why it satisfies the Acceptance Criteria:
- AC-1: <penjelasan bagaimana kode memenuhinya>
- AC-2: <penjelasan bagaimana kode memenuhinya>

UI Checklist (hanya fitur ber-UI): <N lulus / N diperbaiki / N tidak terverifikasi>
Perlu diuji manual: <daftar butir yang tidak terverifikasi, atau "tidak ada">

Suggested Next Step:
Gunakan skill `write-tests` untuk fitur <US-X> guna mengunci fungsionalitas ini dengan automated tests.
```

## Rules

- **DILARANG KERAS** mengedit atau membuat file sebelum rencana "Plan first" disetujui user.
- **DILARANG KERAS** bagi agent untuk menginstall package/library pihak ketiga secara otomatis di terminal. Agent wajib berhenti dan memberikan perintah instalasi (`npm i ...`) kepada user untuk dijalankan secara manual.
- Kerjakan satu fitur dalam satu waktu (satu User Story). Jangan menggabungkan beberapa fitur sekaligus.
- Jangan menjalankan `git add`, `git commit`, atau `git push`; commit dan push dilakukan manusia (lihat `generate-commit`).
- Jangan mengarang tampilan UI. Rujuk `docs/design.md`; jika tidak ada, ikuti langkah berhenti di Plan First.
- **Referensi baru di tengah jalan** (user melampirkan gambar/kode/URL: "buat halaman ini seperti itu"): jangan langsung
  menirunya. Hentikan, arahkan ke `prd-to-design` (untuk tampilan) atau `setup-project` (untuk gaya koding) agar dibaca lewat
  `reference-intake` dan disetujui lebih dulu. Referensi tidak boleh menambah halaman atau fitur di luar PRD.
- Fitur ber-UI mengikuti urutan prioritas: PRD > `docs/design.md` > Master design system > override halaman. Skill `ui-ux-pro-max`
  hanya membantu keputusan visual dan kualitas; ia tidak menambah halaman, elemen, atau fitur di luar design.md, dan tidak
  melewati gate Plan First maupun gate instalasi.
- Hormati tech stack dan struktur folder proyek (jangan berasumsi atau mengubah arsitektur tanpa izin).
- Setelah implementasi selesai, jangan langsung menulis test suite; serahkan kepada skill `write-tests`.
