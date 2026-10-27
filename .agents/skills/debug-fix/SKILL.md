---
name: debug-fix
description: >-
  Use this skill when an automated test fails, a compiler/type error occurs, or
  a runtime bug is encountered. It diagnoses the root cause and fixes the
  implementation code. Strict rule: NEVER weakens or modifies test expectations
  to force a test to pass. Activate when user provides an error trace or reports
  a failing test.
---

# Debug & Fix

Mendiagnosis dan memperbaiki bug, error runtime, kegagalan build/compile, atau test yang gagal.
Skill ini beroperasi di bawah prinsip integritas pengujian: **perbaiki kodenya, bukan test-nya**.

## Inputs

- Pesan error terminal, compiler output, stack trace, atau laporan kegagalan test.
- File implementasi dan file test yang bersangkutan.
- `docs/prd.md` untuk memverifikasi perilaku yang semestinya.

## Steps

1. **Diagnosis Akar Masalah (Root Cause Analysis).**
   - Analisis pesan error dan stack trace.
   - Telusuri lokasi persis (file dan nomor baris).
   - Tentukan jenis masalah:
     - Bug logika bisnis (salah kalkulasi, kondisi if/else terbalik, dll.)
     - Validasi data (input tidak ditangani, tipe data meleset)
     - Asynchronous/timing issue (promise belum di-await, race condition)
     - Dependency / environment mismatch
   - Jelaskan diagnosis secara ringkas kepada user:
     ```text
     🔍 Diagnosis Masalah:
     - Root Cause: <penjelasan mengapa error terjadi>
     - Location: <file>:<baris>
     - Problem Type: <Logic / Validation / Type / Runtime>
     ```

2. **Plan Fix (Wajib Berhenti).**
   - Rancang perbaikan minimal yang presisi tanpa menimbulkan efek samping (side effects) ke bagian lain.
   - Tampilkan rencana perbaikan:
     ```text
     Proposed Fix:
     - File to edit: <path file>
     - Changes: <apa yang akan diubah>
     - Risk Assessment: <potensi dampak ke fitur lain>
     ```
   - **BERHENTI.** Tunggu konfirmasi user sebelum menyunting file.

3. **Terapkan Perbaikan.**
   - Lakukan pengeditan HANYA pada file implementasi yang direncanakan.
   - **DILARANG MENGUBAH FILE TEST** kecuali jika ditemukan bahwa file test tidak sesuai dengan Acceptance Criteria di PRD.

4. **Verifikasi Ulang.**
   - Jalankan perintah test proyek yang sesuai (misal: `npm test`, `pnpm test`, `pytest`, dll.).
   - Pastikan test yang sebelumnya gagal kini berhasil LULUS (PASS).
   - Pastikan seluruh test suite lainnya tetap lulus (tidak ada regresi).

5. **Laporkan Hasil.**
   - Berikan laporan perbaikan singkat dan arahkan langkah selanjutnya.

## Output format

```text
🐛 Bug Fixed: <deskripsi masalah>

Summary:
- Root cause: <penjelasan>
- Fix applied: <file:baris> (<detail singkat perubahan>)
- Test result: ✅ All tests passing (<N> passed, 0 failed)

Suggested Next Step:
Lanjutkan ke skill `generate-commit` untuk menyimpan perbaikan ini secara aman.
```

## Rules

- **DILARANG KERAS** melonggarkan, mengubah assertion, menghapus, atau men-skip test agar tampak "lulus".
- Jangan mengedit file apa pun sebelum user mengonfirmasi rencana diagnosis dan fix.
- Jangan melakukan perombakan besar (refactor) di luar cakupan bug yang sedang diperbaiki.
- Jika akar masalah bersumber dari PRD yang rancu, minta klarifikasi kepada user terlebih dahulu.
