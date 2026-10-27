---
name: review-code
description: >-
  Use this skill to perform a thorough, non-destructive code review against
  docs/prd.md, the project's code conventions, and a 10-point quality checklist.
  When the diff touches UI files it adds a UI/UX pass based on ui-ux-pro-max.
  Strict rule: REPORT ONLY. It never creates, edits, or deletes any code files.
  Activate when user says "review code", "review diff", "periksa kode", or
  before merging a feature/milestone.
---

# Review Code

Melakukan tinjauan kode secara ketat terhadap `docs/prd.md`, checklist kualitas di
[references/review-checklist.md](./references/review-checklist.md), dan konvensi koding di
[../code-development/references/code-conventions.md](../code-development/references/code-conventions.md).

**PRINSIP UTAMA: REPORT ONLY.** Skill ini hanya menganalisis dan menyajikan temuan dalam tabel.
Skill ini DILARANG KERAS mengedit, membuat, atau menghapus file kode apa pun.

## Inputs

- Git diff dari range commit yang ingin ditinjau (default: uncommitted changes atau `HEAD~1..HEAD`).
- `docs/prd.md` untuk memvalidasi kepatuhan spesifikasi dan batasan scope.
- `references/review-checklist.md` untuk 10 poin pengecekan standar.
- `references/code-conventions.md` untuk memeriksa kesesuaian arsitektur dan gaya koding.
- Hanya bila diff menyentuh file UI: `docs/design.md`, `docs/design-system/<project-slug>/MASTER.md` (bila ada), serta
  `../ui-ux-pro-max/references/priority-rules.md` dan `pre-delivery-checklist.md` (bila skill itu terpasang).

## Steps

1. **Ambil Git Diff.**
   - Periksa perubahan yang diminta oleh user:
     ```bash
     git diff <commit-range>
     ```
   - Jika tidak ada rentang commit yang ditentukan, tinjau perubahan aktif yang belum di-commit (`git diff`).

2. **Pass 1 — Kesesuaian Spesifikasi (PRD Compliance).**
   - Apakah semua Acceptance Criteria pada User Story yang dikerjakan sudah terpenuhi?
   - Apakah ada fitur tambahan yang tidak diminta (scope creep / "bonus features")?

3. **Pass 2 — Audit Checklist Kualitas (10 Poin).**
   - Periksa seluruh poin dalam `references/review-checklist.md` (validasi batas, penanganan error, tidak ada data rahasia hardcoded, test yang jujur).

4. **Pass 3 — Kepatuhan Konvensi Proyek.**
   - Periksa konsistensi struktur folder, penamaan, dan pemisahan logika bisnis (Separation of Concerns).

5. **Pass 4 — Audit UI/UX (hanya jika diff menyentuh file UI dan `ui-ux-pro-max` terpasang).**
   - Bandingkan diff dengan `docs/design.md` (halaman, elemen, state) dan Master design system (token, bukan hex mentah).
   - Periksa diff terhadap `priority-rules.md` dari tier 1 ke bawah dan butir `pre-delivery-checklist.md` yang bisa dinilai dari kode.
   - Pemetaan keparahan dan aturan "tidak terverifikasi": `../ui-ux-pro-max/references/skill-factory-integration.md` (bagian 8).
   - Hal yang butuh tampilan nyata (kontras aktual, lebar 375, urutan fokus) masuk daftar **Tidak terverifikasi**, bukan tabel temuan.
   - Tetap REPORT ONLY.

6. **Sajikan Laporan Tinjauan.**
   - Sajikan semua temuan dalam tabel terstruktur.
   - Kategorikan tingkat keparahan:
     - **High**: Bug nyata, security issue, kegagalan validasi kritis, atau pelanggaran PRD.
     - **Medium**: Pelanggaran konvensi arsitektur proyek, inefisiensi performa.
     - **Low**: Kerapian penamaan atau inkonsistensi minor.

## Output format

```text
📋 Code Review Report

Reviewed Against: docs/prd.md + review-checklist.md + code-conventions.md
Diff Range: <target diff>

| # | File:Baris | Masalah | Tingkat Keparahan | Rekomendasi Perbaikan |
|---|------------|---------|-------------------|-----------------------|
| 1 | <path:line> | <penjelasan issue> | High / Medium / Low | <langkah perbaikan> |

Ringkasan:
- High Issues: <N>
- Medium Issues: <N>
- Low Issues: <N>

Tidak terverifikasi (UI, uji manual): <daftar singkat, atau "tidak berlaku">

Catatan Verifikasi:
- Jalankan test suite proyek untuk memastikan semua test hijau.
- Perbaiki temuan berstatus 'High' terlebih dahulu secara mandiri atau dengan bantuan skill `debug-fix`.
```

## Rules

- **DILARANG KERAS** mengubah, menambah, atau menghapus file apa pun selama proses review.
- Hanya laporkan masalah nyata yang dapat ditunjuk secara spesifik pada baris kode di git diff.
- Jangan berasumsi atau mengarang masalah di luar kode yang sedang ditinjau.
- Pass 4 hanya berjalan bila diff menyentuh UI. Jangan melaporkan dugaan visual yang tidak bisa ditunjuk ke baris diff; taruh di "Tidak terverifikasi".
- Jika tidak ada masalah yang ditemukan, laporkan secara jujur: "✅ No issues found. Code is clean and meets all requirements."
