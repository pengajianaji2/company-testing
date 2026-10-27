---
name: write-tests
description: >-
  Use this skill to write automated tests for a feature that has ALREADY been
  implemented and approved. It adapts to the project's configured test runner
  (Vitest, Jest, Pytest, Playwright, etc.). If test runner or helper packages are
  missing, it stops and provides the terminal install command for the human.
  Operates on the rule: one test per AC, testing behavior not internals.
  Activate after code-development finishes a feature.
---

# Write Tests

Menulis automated test untuk fitur yang **sudah diimplementasikan dan disetujui**.
Bukan test-first — skill ini mengunci perilaku fitur yang sudah benar sebagai
jaring pengaman regresi (regression safety net).

Skill ini membaca framework test runner dan perintah uji proyek dari
`references/code-conventions.md` atau `docs/project-config.md`.

> [!IMPORTANT]
> **GATE INSTALASI DEPENDENSI TEST:** Jika framework test runner atau utility library
> pengujian (misal Vitest, Jest, Supertest, @testing-library) belum terpasang di proyek,
> agent **DILARANG** menginstallnya sendiri. Agent wajib berhenti, memberikan baris perintah
> instalasi (misal: `npm i -D vitest`), dan menunggu user menjalankannya di terminal.

## Inputs

- Story ID fitur yang baru saja selesai diimplementasikan (misal "US-1").
- File implementasi yang baru dibuat/diubah.
- `docs/prd.md` untuk membaca seluruh Acceptance Criteria (AC).
- `references/code-conventions.md` (informasi test runner & test style).

## Steps

1. **Plan First (Wajib Berhenti).**
   - Baca Acceptance Criteria untuk User Story terkait di `docs/prd.md`.
   - Periksa file implementasi yang sudah ada untuk memahami interface publiknya (fungsi, endpoint, atau method).
   - Kenali test runner proyek (misal: Vitest, Jest, Pytest, dll.).
   - Periksa apakah test runner dan dependensi pengujian sudah terpasang.
   - Rancang struktur test:
     ```text
     Feature: <Judul User Story>
     Test File Target: <path file test yang akan dibuat/diupdate>
     Test Runner: <Vitest / Jest / Pytest / dll.>
     Missing Test Packages: <Tidak ada / sebutkan jika belum terinstall>

     Planned Test Cases (1 test per AC):
     - AC-1: "<deskripsi skenario>" → Given: ... When: ... Then: ...
     - AC-2: "<deskripsi skenario>" → Given: ... When: ... Then: ...

     ⚠ Review Celah: <catat jika ada AC yang tampak belum ter-handle di implementasi>
     ```
   - **BERHENTI.** Tampilkan rancangan test kepada user dan tunggu konfirmasi `approve`.

2. **Gate Instalasi Dependensi Test (Jika Belum Terpasang).**
   - Jika dependensi test belum ada di `package.json`:
     - Berikan perintah terminal kepada user:
       ```bash
       # Silakan jalankan perintah ini di terminal Anda:
       npm install -D <test-package-name>
       # atau: pnpm add -D <test-package-name>
       ```
     - Tanyakan: *"Silakan jalankan instalasi dependensi pengujian di atas. Balas 'sudah' setelah selesai."*
     - **BERHENTI.** Tunggu konfirmasi sebelum membuat file test.

3. **Tulis Test Suite.**
   - Buat atau update file test sesuai konvensi proyek.
   - Buat minimal satu test case untuk setiap Acceptance Criterion.
   - Uji **perilaku eksternal** (input apa yang diberikan, output apa yang diharapkan), JANGAN menguji detail variabel privat atau fungsi internal.
   - **Dilarang keras memakai `.skip` atau `todo`** untuk test yang diwajibkan.

4. **Jalankan & Verifikasi Test.**
   - Jalankan perintah test proyek (misal `pnpm test`, `npm test`, `pytest`).
   - Seluruh test baru HARUS langsung lulus (PASS).
   - Pastikan juga tidak ada test lama yang rusak (no regression).

5. **Laporkan Hasil.**
   - Tampilkan ringkasan eksekusi test.
   - Sarankan langkah selanjutnya: jalankan skill `generate-commit`.

## Output format

```text
✅ Automated Tests Created: <path file test>
   Total tests: <N> passing, 0 failing

AC Mapping:
- AC-1: [PASS] "<nama test case>"
- AC-2: [PASS] "<nama test case>"

Suggested Next Step:
Gunakan skill `generate-commit` untuk membuat commit message yang rapi dan mengunci progres ini.
```

## Rules

- Jangan menulis file test sebelum rencana test diapprove user.
- **DILARANG KERAS** bagi agent menginstall test runner / packages secara otomatis. Berikan command kepada user untuk dieksekusi di terminal.
- Test harus langsung lulus karena mendeskripsikan kode yang sudah disetujui.
- **DILARANG mengubah atau melonggarkan ekspektasi test agar "lulus".** Jika test gagal, perbaiki kodenya menggunakan skill `debug-fix`.
- Jangan gunakan `.skip` tanpa persetujuan eksplisit user.
