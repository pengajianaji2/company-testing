# Panduan Rekomendasi Stack (Mode Rekomendasi)

> Dipakai skill `setup-project` saat user tidak tahu pilihan teknis. Ini **titik awal yang aman untuk MVP**,
> bukan aturan mutlak. Selalu sajikan sebagai rekomendasi dan tunggu `approve`.
> Verifikasi nama paket/perintah ke dokumentasi resmi sebelum menyajikan; versi dapat berubah.

## Cara memakai

1. Baca `docs/prd.md` → tentukan **jenis produk** (tabel 1) dan cek **pertanyaan penentu** (tabel 2).
2. Ambil default dari tabel 1. Jika jawaban pertanyaan penentu menggeser pilihan, ikuti kolom "Geser ke".
3. Sajikan: Rekomendasi → Alasan 1 kalimat awam → 1 alternatif → konsekuensi jika ganti nanti.

## 1. Default berdasarkan jenis produk

| Jenis produk (dari PRD) | Default stack | Alasan awam | Test runner |
|---|---|---|---|
| Aplikasi web dengan halaman + data (form, daftar, dashboard) | Next.js + TypeScript, satu proyek (standalone) | Satu proyek untuk tampilan dan logika, paling sedikit bagian yang harus dikelola | Vitest |
| Hanya API / layanan belakang (tanpa halaman) | Node.js + Express + TypeScript | Sederhana dan banyak contoh | Vitest atau Jest |
| Skrip otomasi, olah data, atau fitur berbasis Python | Python (+ FastAPI jika butuh API) | Paling natural untuk data dan skrip | Pytest |
| Bot chat | Pilih sesuai platform bot; default Node.js atau Python | Mengikuti pustaka resmi platform | Vitest / Pytest |
| Aplikasi HP | Web app responsif lebih dulu (Next.js) | Bisa dibuka di HP tanpa app store; lebih cepat divalidasi | Vitest |
| Alat baris perintah (CLI) | Node.js atau Python (ikuti keahlian user) | Ringan, tanpa UI | Vitest / Pytest |

Jika user atau timnya sudah menguasai bahasa tertentu, **utamakan bahasa itu** di atas default tabel.

## 2. Pertanyaan penentu (tanyakan hanya jika PRD tidak menjawab)

| Pertanyaan awam | Jika "ya" |
|---|---|
| Harus ada di App Store / Play Store? | Geser ke Next.js sebagai PWA dulu; catat native app sebagai Out of Scope, atau tandai Open Question |
| Harus tetap jalan tanpa internet? | Tandai Open Question; memengaruhi pilihan penyimpanan data |
| Data pemakai harus tersimpan permanen dan dipakai banyak orang? | Perlu database; rekomendasikan SQLite untuk MVP lokal atau database terkelola bila akan online. Pilihan database yang tepat dibahas bersama user, jangan diputuskan diam-diam |
| Ada lebih dari satu aplikasi yang saling berbagi kode (misal situs + admin terpisah)? | Pertimbangkan monorepo |
| Siapa yang akan merawat kode ini nanti? | Sesuaikan dengan bahasa yang dikuasai orang itu |

## 3. Default keputusan lain

| Keputusan | Default | Alasan awam | Kapan berubah |
|---|---|---|---|
| Struktur | Standalone | Satu folder, satu aplikasi, paling mudah dipahami | Ada 2+ aplikasi yang berbagi kode → monorepo |
| Coding style | **Style A (Compact)** | Sedikit file, cepat untuk MVP ≤ 4 fitur | Aplikasi diperkirakan tumbuh / dikerjakan beberapa orang → Style B (Componentized) |
| Build flow | Logic-first | Aturan inti dibuat dan diuji dulu, tampilan menyusul | Produk sangat visual dan aturan bisnisnya tipis → UI-first |
| Commit | Conventional Commits | Riwayat rapi dan bisa dibaca mesin; agent yang menuliskannya | User minta format lain |
| Branch & Git | Base `main`; satu branch per User Story berpola `<type>/us-<N>-<slug>`; digabung lewat Pull Request; commit & push oleh manusia | Fitur terpisah rapi, `main` tetap bersih, dan kamu tetap pegang kendali riwayat | Tidak memakai remote → merge lokal; tim punya pola sendiri → ikuti tim |
| Package manager | Ikuti yang sudah terdeteksi; jika belum ada, npm (paling umum) | Tidak perlu pasang alat tambahan | User/tim sudah memakai pnpm/yarn |

## 4. Format penyajian ke user (contoh)

```text
Rekomendasiku: Next.js (satu proyek).
Alasan: kamu butuh halaman untuk pelanggan dan halaman admin; ini cara paling sederhana
untuk membangun keduanya sekaligus.
Alternatif: Python + FastAPI, kalau kamu lebih nyaman dengan Python.
Kalau ganti nanti: bisa, tapi kode yang sudah ditulis harus ditulis ulang di bahasa lain.
```

## 5. Larangan

- Jangan merekomendasikan teknologi yang tidak diperlukan PRD (microservices, Kubernetes, GraphQL, dll.).
- Jangan menyodorkan lebih dari 1 alternatif per keputusan.
- Jangan menyatakan satu pilihan "yang terbaik"; katakan "paling cocok untuk kebutuhan yang kamu ceritakan".
