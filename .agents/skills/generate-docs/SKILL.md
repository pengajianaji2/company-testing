---
name: generate-docs
description: >-
  Use this skill to create or update project documentation, including README.md
  sections and code comments / docstrings / JSDoc for public functions and APIs.
  Operates on verified code only — never documents non-existent features.
  Activate when user says "buat dokumentasi", "update readme", or "generate docs".
---

# Generate Documentation

Menghasilkan atau memperbarui dokumentasi proyek berdasarkan kode yang sudah selesai
dibangun dan lolos peninjauan: memperbarui `README.md` dan menambahkan dokumentasi fungsi
(JSDoc/TSDoc/Docstrings) pada antarmuka publik proyek.

Skill ini membaca struktur aktual proyek dan `references/code-conventions.md`.

## Inputs

- File atau folder yang ingin didokumentasikan.
- Bagian `README.md` yang ingin diperbarui (Installation, Architecture, API/Usage, Testing).
- `docs/prd.md` untuk menyelaraskan penjelasan dengan tujuan produk.

## Steps

1. **Plan First (Wajib Berhenti).**
   - Pindai file publik (routes, services, components, atau modules).
   - Identifikasi fungsi atau modul yang belum memiliki dokumentasi inline.
   - Siapkan rencana bagian `README.md` yang perlu ditambah atau dimutakhirkan.
   - Tampilkan rencana kepada user:
     ```text
     📚 Documentation Plan:
     - Target Code Files: <list file>
     - README Updates: <Installation, Usage, Testing, dll.>
     ```
   - **BERHENTI.** Tunggu konfirmasi persetujuan user.

2. **Dokumentasi Kode (Inline Comments / JSDoc / Docstrings).**
   - Tambahkan dokumentasi standar pada fungsi/method publik (menjelaskan parameter, return value, dan potential errors).
   - Jangan menulis komentar yang sekadar mengulang baris kode; jelaskan tujuan dan perilakunya.

3. **Mutakhirkan README.md.**
   - Susun panduan yang akurat:
     - **Setup & Installation**: Cara install dependensi dari nol sesuai package manager proyek.
     - **Running the App**: Cara menjalankan development server / build.
     - **Architecture & Directory**: Penjelasan singkat susunan folder.
     - **Testing**: Cara menjalankan test suite proyek.
     - **Features & API**: Daftar fitur yang sudah dibangun (mengacu pada PRD).

4. **Verifikasi Integritas Kode.**
   - Pastikan penambahan dokumentasi sama sekali tidak mengubah perilaku kode atau memicu error syntax/typecheck.
   - Jalankan build check atau typecheck jika diperlukan.

5. **Laporkan Hasil.**
   - Tampilkan ringkasan dokumentasi yang diperbarui.

## Output format

```text
✅ Documentation Successfully Updated!

Code Documented:
- <file path>: <N> public functions documented

README.md Sections Updated:
- <Section 1>
- <Section 2>

Suggested Next Step:
Gunakan skill `generate-commit` untuk menyimpan pembaruan dokumentasi ini (`docs: update README and API references`).
```

## Rules

- **DILARANG** mengubah logika bisnis atau kode eksekusi — hanya tambahkan komentar atau file dokumentasi markdown.
- Dokumentasikan HANYA apa yang benar-benar ada di kode. Jangan mengarang fitur, parameter, atau endpoint yang belum dibangun.
- Bahasa dokumentasi disesuaikan dengan preferensi tim (default: Bahasa Indonesia atau Bahasa Inggris sesuai instruksi user).
