# Review Checklist: Kualitas Kode & Arsitektur Proyek

Gunakan checklist 10 poin ini untuk mengevaluasi diff kode sebelum merge atau commit milestone.
Poin-poin ini berlaku untuk berbagai arsitektur dan framework (Next.js, Express, FastAPI, Monorepo, dll.).

| # | Check Item | Cara Memeriksa |
|---|------------|----------------|
| 1 | **Kesesuaian PRD**: Tidak ada yang tertinggal, tidak ada fitur "bonus" tanpa izin | Bandingkan `git diff` dengan User Story & AC di `docs/prd.md` |
| 2 | **Test Jujur & Bersih**: Tidak ada `.skip`, tidak ada assertion yang dilonggarkan | Periksa diff pada folder test |
| 3 | **Semua Test Lulus**: Test suite berjalan hijau tanpa error | Jalankan test runner proyek (`pnpm test`, `npm test`, dll.) |
| 4 | **Validasi di Layer Batas (Boundary Validation)**: Input salah ditolak sebelum masuk ke domain logic / database | Cek validasi skema / DTO di service / controller layer |
| 5 | **Pemisahan Tanggung Jawab (Separation of Concerns)**: Handler/Route/UI tipis, logika bisnis ada di service/lib | Pastikan route handler atau UI component tidak memuat query DB atau kalkulasi bisnis langsung |
| 6 | **Penanganan Error Terstruktur**: Error ditangani rapi dan tidak membocorkan stack trace sensitif ke pengguna | Periksa try/catch, exception filters, atau error middleware |
| 7 | **Bebas API / Module Khayalan**: Seluruh package terdaftar di dependencies, fungsi dan import benar-benar ada | Jalankan perintah build / typecheck (`pnpm build` atau `tsc --noEmit`) |
| 8 | **Timezone, Concurrency & State**: Menangani timezone secara eksplisit, mencegah race condition/double-submit | Cek handling waktu (WIB/UTC) dan transaksi data |
| 9 | **Tidak Ada Rahasia Hardcoded**: Tidak ada API key, token, credential, atau data pribadi mentah di kode | Cari string mencurigakan, pastikan membaca dari environment variables |
| 10 | **Kepatuhan Konvensi Proyek**: Penamaan, struktur folder, dan format kode mematuhi konvensi yang disepakati | Bandingkan diff dengan `references/code-conventions.md` |

---

## Log Temuan Review
| # | File:Baris | Deskripsi Masalah | Tingkat Dampak (High / Med / Low) | Rekomendasi Solusi | Status Perbaikan |
|---|------------|-------------------|-----------------------------------|--------------------|------------------|
|   |            |                   |                                   |                    |                  |
