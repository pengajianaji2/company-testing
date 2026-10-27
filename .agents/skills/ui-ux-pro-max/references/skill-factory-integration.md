# Integrasi dengan Skill Factory

Baca file ini hanya bila workspace adalah proyek Skill Factory (tanda: `docs/prd.md` atau `docs/project-config.md` ada).
Jika keduanya tidak ada, skill berjalan standalone dan file ini diabaikan.

Isi: prinsip, titik panggil, lokasi file, preset → gaya, hal yang butuh PRD, instalasi, audit UI, verifikasi.

---

## 1. Prinsip

- `ui-ux-pro-max` adalah **design intelligence**: panduan keputusan visual dan standar kualitas UI.
  Ia **bukan fase** dan **tidak menggantikan** `prd-to-design`, `code-development`, atau `review-code`.
  Skill-skill itulah yang memanggilnya pada titik tertentu (bagian 2).
- **Urutan sumber kebenaran** (yang di atas menang bila bertentangan):
  1. `docs/prd.md` — apa yang dibangun
  2. `docs/design.md` — halaman, elemen, dan state
  3. `docs/design-system/<project-slug>/MASTER.md` — token visual global
  4. `docs/design-system/<project-slug>/pages/<page>.md` — override per halaman
- `ui-ux-pro-max` **tidak boleh** menambah halaman, fitur, atau elemen yang tidak ada di PRD. Usulan semacam itu masuk
  tabel "Usulan di Luar PRD — butuh keputusan" di `docs/design.md`.
- Semua gate Skill Factory tetap berlaku: **Plan First**, **tanpa instalasi otomatis**, **tanpa git pengubah**.
  Menyimpan file apa pun (termasuk `MASTER.md`) hanya setelah user membalas `approve`.

## 2. Titik panggil

| Skill pemanggil | Tahap | Yang dipakai dari ui-ux-pro-max | Hasil |
|---|---|---|---|
| `prd-to-design` | Fase 1b, saat menyusun draft | `design-system-method.md`, `priority-rules.md` (tier 1, 4, 5, 6) | Ringkasan design system dalam draft; setelah `approve` disimpan sebagai `MASTER.md` |
| `code-development` | Fase 2, fitur ber-UI | `MASTER.md` (+ override halaman), `priority-rules.md`, `pre-delivery-checklist.md` | Kode memakai token; hasil checklist dilaporkan di explain-back |
| `review-code` | Fase 3, hanya jika diff menyentuh UI | `priority-rules.md`, `pre-delivery-checklist.md` | Pass 4 (UI/UX), report only |
| User langsung | Kapan saja | Seluruh skill | Tetap tunduk pada bagian 1; jika perubahan menyentuh file, tampilkan rencana dan tunggu `approve` |

## 3. Lokasi file

- **Folder skill** (urutan pencarian): `<workspace>/.agents/skills/ui-ux-pro-max/` → `<workspace>/.agent/skills/ui-ux-pro-max/`
  → `~/.gemini/antigravity/skills/ui-ux-pro-max/`.
- **Design system**: `docs/design-system/<project-slug>/MASTER.md` dan `docs/design-system/<project-slug>/pages/<page>.md`.
  `<project-slug>` = nama proyek di `docs/project-config.md` (atau nama folder proyek), huruf kecil dengan tanda hubung.
  Jangan menulis ke `design-system/` di root proyek.
- **Database mode** (bila `scripts/search.py` ada): pakai `--persist --output-dir "<project-root>/docs"` agar hasilnya
  jatuh di `docs/design-system/<project-slug>/`. Jangan pakai `--force` tanpa izin eksplisit setelah membaca `MASTER.md` yang ada.
- Jika `MASTER.md` sudah ada: baca dulu, jangan menimpa. Tawarkan revisi dan tunggu `approve`.

## 4. Stack

- Ambil stack dari `docs/project-config.md`; jangan mendeteksi ulang dan jangan bertanya lagi ke user.
- Jika `docs/project-config.md` belum ada (alur manual), buat design system **netral stack** (hanya token dan aturan) dan
  jangan memilih pustaka komponen. Pemilihan pustaka adalah ranah `setup-project`.
- Simpan token memakai mekanisme tema bawaan stack itu saat implementasi (CSS variables, theme config, dsb.), di `code-development`.

## 5. Preset `design.md` → gaya awal dan dial

`prd-to-design` merekomendasikan preset per halaman. Gunakan tabel ini sebagai titik awal, lalu sebutkan alasannya dalam satu kalimat.

| Preset (dari `design-template.md`) | Keluarga gaya awal | variance | density | motion |
|---|---|---|---|---|
| Mobile-first + Minimal | Minimalism | 2-3 | 3-4 | tidak diatur |
| Desktop/admin-first + Dense | Dashboard / data-dense | 2-3 | 8-9 | tidak diatur |
| Friendly | Soft / pastel | 4-5 | 4-5 | tidak diatur |

- Dial `motion` dibiarkan **tidak diatur** kecuali PRD atau user memintanya (bagian 6).

**Jika user memberi referensi (gambar, kode UI, URL):** hasil `reference-intake` yang sudah disetujui menjadi titik awal
gaya, palet, huruf, dan spasi; **tabel preset di atas hanya fallback** untuk bagian yang tidak tercakup referensi.
Aturan tambahan: warna dari gambar berstatus estimasi dan wajib lolos verifikasi kontras sebelum menjadi token
(sesuaikan ke nilai terdekat yang lulus, tandai sebagai penyesuaian); referensi tidak membuka izin untuk dark mode,
animasi, atau ikon dekoratif (bagian 6); referensi bukan sumber kebenaran dan tidak menggeser urutan di bagian 1.
- **Mobile-first**: verifikasi lebar 375 lebih dulu; target sentuh 44x44px wajib.
  **Desktop/admin-first**: verifikasi lebar 1280 lebih dulu. Lebar 375 ditandai *tidak berlaku* hanya jika `design.md`
  secara eksplisit menyatakan halaman itu khusus desktop.

## 6. Hal yang membutuhkan PRD (jangan ditambahkan diam-diam)

`prd-to-design` melarang menambah fitur di luar PRD. Karena itu:

| Perlu dasar di PRD atau persetujuan user | Tetap wajib (bukan fitur tambahan) |
|---|---|
| Dark mode (kolom Dark di `MASTER.md` diisi `-` jika di luar cakupan; beri nama token semantik agar bisa ditambah kelak) | Kontras teks 4.5:1 dan batas komponen 3:1 |
| Animasi dekoratif atau koreografi (dial motion di atas 3) | Focus ring yang terlihat dan navigasi keyboard |
| Ikon dekoratif, ilustrasi, halaman atau elemen baru | Umpan balik interaksi dasar: hover, pressed, disabled, loading |
| Pustaka komponen atau animasi baru | Label form yang terlihat, error di dekat field, alt text, nama aksesibel untuk tombol ikon |
| | `prefers-reduced-motion` bila ada animasi apa pun |

## 7. Instalasi dan dependensi eksternal

- `ui-ux-pro-max` tidak menginstal apa pun.
- Jika desain membutuhkan paket (set ikon, font lewat npm, pustaka komponen atau animasi), tulis di rencana `code-development`
  pada baris `Required New Packages`, lalu ikuti **gate instalasi**: agent berhenti, memberi `npm i <package>`, dan **manusia** menjalankannya.
- Font atau CSS dari CDN eksternal adalah ketergantungan jaringan. Sebutkan di rencana dan minta persetujuan; sediakan fallback
  system font stack.
- Database mode: menyalin `scripts/` dan `data/` upstream dilakukan **manusia**. Agent tidak mengunduhnya.

## 8. Audit UI untuk `review-code` (Pass 4)

- Jalankan hanya jika diff menyentuh file UI (komponen, halaman, stylesheet, template). Report only: tidak mengedit file.
- Sumber: `priority-rules.md` dan `pre-delivery-checklist.md`. Tulis kolom *Masalah* dengan menyebut tier-nya, misalnya "Tier 1: tombol ikon tanpa nama aksesibel".
- Pemetaan keparahan:

| Dampak tier di `priority-rules.md` | Keparahan di laporan |
|---|---|
| CRITICAL (tier 1-2) | High |
| HIGH (tier 3, 4, 5, 9) | Medium |
| MEDIUM dan LOW (tier 6, 7, 8, 10) | Low |

  Naikkan satu tingkat bila pelanggaran itu juga melanggar Acceptance Criteria di PRD.
- Hanya laporkan yang bisa ditunjuk ke `file:baris` pada diff. Hal yang butuh tampilan nyata (kontras aktual, lebar 375, urutan fokus)
  ditulis di **"Tidak terverifikasi"** sebagai saran uji manual, bukan sebagai temuan.
- `review-code` tidak menjalankan server sendiri. Jika user sudah menjalankan aplikasi dan browser tool tersedia, halaman boleh diamati (baca saja).

## 9. Verifikasi di `code-development`

- Jalankan `pre-delivery-checklist.md` pada fitur ber-UI. Tandai tiap butir: lulus, gagal lalu diperbaiki, atau tidak terverifikasi (sebut alasannya).
- Verifikasi browser (lebar 375, 768, 1280; keyboard; reduced-motion) hanya bila ada browser tool dan aplikasi sudah berjalan.
  Jika dev server belum berjalan, minta user menjalankannya; agent tidak menjalankannya diam-diam.
- Butir yang tidak bisa diverifikasi masuk ke bagian akhir explain-back sebagai daftar uji manual.
