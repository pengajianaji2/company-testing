---
name: generate-commit
description: >-
  Use this skill to prepare a well-crafted git commit message and the exact commands for committing.
  It inspects git diff (read-only), checks that work is on a feature branch (not directly on the base
  branch), aligns the message with the project's commit convention (Conventional Commits, Plain English,
  ticket-prefixed, etc.) from code-conventions.md, and then hands the commands to the human.
  The agent NEVER runs git add, git commit, or git push — the human executes them.
  Activate when a feature or fix is verified and ready to be committed.
---

# Generate Commit

Menganalisis perubahan git (diff) dan menyusun pesan commit yang bermakna sesuai konvensi proyek di
[references/code-conventions.md](../code-development/references/code-conventions.md).

Skill ini **hanya membaca repository dan menyiapkan perintah**. Eksekusi `git add` dan `git commit`
(serta `git push`) **selalu dilakukan oleh manusia**.

> [!IMPORTANT]
> **COMMIT & PUSH = TUGAS MANUSIA.** Agent hanya boleh menjalankan perintah baca (`git status`, `git diff`,
> `git log`, `git branch --show-current`). Agent menyajikan perintah commit, menjelaskannya, lalu berhenti
> dan menunggu user mengeksekusinya di terminal.

## Inputs

- Status git repository saat ini (`git status`, `git diff`, `git diff --staged`, `git branch --show-current`).
- Konvensi format commit proyek (Conventional Commits, Plain English, format ticket, dll.).
- Opsional: catatan konteks fitur atau bug fix dari user.

## Steps

1. **Inspeksi (hanya membaca).**
   - Periksa status dan branch aktif:
     ```bash
     git status --short
     git branch --show-current
     ```
   - Baca diff perubahan (staged maupun unstaged):
     ```bash
     git diff --staged
     git diff
     ```
   - Jika tidak ada perubahan, beri tahu user bahwa working tree bersih.
   - **Cek branch:** jika branch aktif adalah base branch (`main`/`master`/`develop`) dan commit ini adalah
     pekerjaan fitur (bukan commit awal atau dokumen persiapan), **BERHENTI** dan sarankan skill
     `create-feature-branch` lebih dulu. Lanjut di base branch hanya jika user eksplisit memintanya.

2. **Susun Draft Pesan Commit.**
   - Sesuaikan format dengan preferensi proyek di `code-conventions.md`:
     - **Conventional Commits**: `<type>(<scope>): <summary>` (misal: `feat(booking): implement slot validation`)
     - **Plain English**: `<Imperative verb> <what was changed>` (misal: `Add validation for booking slot overlap`)
     - **Ticket Prefix**: `[<TICKET-ID>] <type/description>`
   - Pisahkan penjelasan *kenapa* ke commit body jika perubahan kompleks.
   - Siapkan daftar file yang akan masuk ke commit. Jangan sertakan file rahasia/artefak build.

3. **Plan First (Konfirmasi Pesan).**
   - Tampilkan usulan:
     ```text
     📦 Proposed Commit:
     Branch: <branch aktif>

     Message:
     <judul commit>

     <body commit jika ada>

     Files included:
     - <list file>
     ```
   - **BERHENTI.** Tanyakan: *"Apakah pesan commit di atas sudah sesuai? Balas 'approve' atau berikan revisi."*

4. **Serahkan ke Manusia (Tidak Dieksekusi Agent).**
   - Setelah `approve`, sajikan perintah dalam satu blok. Untuk pesan dengan body, gunakan `-m` berulang
     (satu `-m` per paragraf):
     ```bash
     # Jalankan di terminal, di folder proyek ini:
     git add <file-1> <file-2>
     git commit -m "<judul commit>" -m "<body commit>"
     ```
   - Jelaskan singkat: `git add` memilih file yang masuk ke commit; `git commit` menyimpannya ke riwayat.
     **Tanda berhasil:** muncul ringkasan "N files changed". **Jika error:** salin seluruh pesan error ke chat.
   - Tutup dengan: *"Balas 'sudah' (boleh sertakan hash commit-nya) jika selesai."* Lalu **BERHENTI**.

5. **Arahkan Langkah Selanjutnya (setelah user membalas sudah).**
   - Opsional: jalankan `git log -1 --oneline` (baca saja) untuk memastikan commit tercatat.
   - Jika US ini **belum selesai** (masih ada pekerjaan di branch ini): kembali ke `code-development`.
   - Jika US ini **selesai**: jalankan skill `create-feature-branch` dalam **Mode Selesai**. Skill itu menyiapkan perintah
     `git push`, draf Pull Request, dan merge untuk dieksekusi manusia.
   - Jika seluruh milestone selesai: sarankan `review-code`.

## Output format

```text
📦 Commit Siap Dieksekusi (oleh kamu)
   Branch : <branch aktif>
   Message: <commit message>

Files:
- <file 1>
- <file 2>

Perintah (jalankan di terminal):
   git add <file-1> <file-2>
   git commit -m "<pesan>"

Setelah selesai, balas "sudah".

Suggested Next Step:
- US belum selesai → `code-development` (Story ID: <US-X>)
- US selesai → `create-feature-branch` (Mode Selesai) untuk serah terima push/PR
- Seluruh milestone selesai → `review-code`
```

## Rules

- **DILARANG KERAS** menjalankan `git add`, `git commit`, `git commit --amend`, `git push`, atau perintah git lain yang mengubah
  repository. Hanya perintah baca yang boleh dijalankan agent.
- Jangan menyajikan perintah commit sebelum pesan disetujui user.
- Jangan menyertakan file yang tidak berhubungan dengan fitur/fix saat ini (misal `.env`, `dist/`, `.next/`).
- Pesan commit harus bersumber dari diff nyata, tidak mengarang perubahan yang tidak ada.
- Ikuti konvensi proyek yang disepakati (bahasa, kapitalisasi, dan format prefix).
- Jangan menyarankan `--no-verify` atau `--force`.
