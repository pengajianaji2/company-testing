---
name: create-feature-branch
description: >-
  Use this skill to give every user story (US) its own git branch. In Mode Mulai it checks that
  the repository is ready (clean working tree, up-to-date base branch, no name collision),
  proposes a branch name derived from the feature (e.g. feat/us-1-booking-slot-validation),
  and creates it locally after user approval. In Mode Selesai it verifies the story is done and
  hands the human the exact push / pull-request / merge commands plus a drafted PR description.
  It NEVER runs git commit, git push, git merge, rebase, reset, or branch deletion — those are
  always executed by the human. Activate when the user says "buat branch", "mulai US-1",
  "branch baru untuk fitur", "US-1 selesai", or "siap push".
---

# Create Feature Branch

Setiap User Story dikerjakan di **branch sendiri** agar riwayat rapi, fitur bisa ditinjau terpisah,
dan `main` tetap bersih. Skill ini punya dua mode:

- **Mode Mulai** — dipanggil **sebelum** `code-development` untuk US-X: membuat branch lokal.
- **Mode Selesai** — dipanggil **setelah** semua commit US-X dibuat oleh manusia: menyiapkan serah terima
  untuk push, Pull Request, dan merge.

Aturan penamaan lengkap: [references/branch-naming-guide.md](./references/branch-naming-guide.md).

> [!IMPORTANT]
> **BATAS KEWENANGAN GIT (WAJIB):**
> | Agent BOLEH menjalankan | Hanya MANUSIA yang menjalankan |
> |---|---|
> | `git status`, `git diff`, `git log`, `git branch --list`, `git remote -v`, `git rev-parse` (hanya membaca) | `git add`, `git commit` |
> | `git switch -c <nama> <base>` (membuat branch lokal baru, **setelah approve**) | `git push`, `git pull`, `git fetch` |
> | | `git merge`, `git rebase`, `git reset`, `git stash`, `git checkout` ke branch lain |
> | | `git branch -d` / `-D` (menghapus branch) |
>
> Untuk yang hanya boleh manusia, agent menyajikan perintah persis, menjelaskannya, lalu **berhenti** dan menunggu
> user membalas selesai.

## Inputs

- `docs/prd.md` (daftar User Story, judul/tujuan US-X).
- `.agents/skills/code-development/references/code-conventions.md` (gaya commit; pola nama branch dan base branch bila ada).
- Status repository (`git status`, `git branch`, `git log`).
- Dari user: US yang akan dikerjakan (`US-X`), atau agent mengusulkan US berikutnya yang belum dikerjakan.

## Steps — Mode Mulai

1. **Periksa Kesiapan Repository (hanya membaca).**
   - Apakah folder ini repo git? Jika bukan: **BERHENTI**, minta user menjalankan `git init` sendiri
     (jelaskan fungsinya).
   - Apakah sudah ada commit? (`git rev-parse HEAD`). Jika belum (repo baru): **BERHENTI** dan berikan
     perintah untuk **commit awal oleh manusia**:
     ```bash
     git add .
     git commit -m "chore: initial commit"
     ```
     Branch tidak bisa dibuat sebelum ada commit pertama.
   - Catat branch aktif (`git branch --show-current`) dan tentukan **base branch** (dari konvensi proyek; jika
     tidak ada: `main`, atau `master` bila itu yang ada).
   - Cek `git status --short`.
     - **Working tree kotor** → **BERHENTI.** Perubahan yang belum di-commit biasanya milik US sebelumnya atau
       dokumen persiapan. Minta user mem-commit-nya dulu (gunakan `generate-commit`, user yang menjalankan)
       atau menanganinya sendiri. Agent **tidak** melakukan stash/reset.
       Pengecualian: jika user eksplisit memilih membawa perubahan itu ke branch baru, catat di rencana bahwa
       perubahan tersebut akan ikut terbawa dan masuk commit pertama fitur.
   - Jika branch aktif **bukan base branch**: periksa apakah punya commit yang belum di-merge
     (`git log <base>..HEAD --oneline`). Jika ada, peringatkan dan tanyakan: bercabang dari base (default,
     disarankan) atau dari branch ini (bertumpuk — hanya jika US baru bergantung pada US sebelumnya yang belum di-merge)?
   - Jika ada remote, ingatkan bahwa base branch lokal mungkin tertinggal. Berikan perintah **untuk manusia**:
     `git switch <base>` lalu `git pull`, dan tunggu konfirmasi. Agent tidak menjalankan `pull`.

2. **Susun Nama Branch.**
   - Ikuti [references/branch-naming-guide.md](./references/branch-naming-guide.md): `<type>/us-<N>-<slug>`.
   - `type` mengikuti sifat pekerjaan (default `feat`); `slug` diturunkan dari tujuan story di PRD.
   - Cek bentrok: `git branch --list "<nama>"`. Jika sudah ada, **jangan menimpanya**; usulkan nama lain
     atau tanyakan apakah user ingin melanjutkan di branch itu (hanya manusia yang berpindah branch).

3. **Plan First — Tampilkan Rencana.**
   ```text
   🌿 Rencana Branch:
   - User Story : US-<N> — <judul/tujuan story>
   - Nama Branch: <type>/us-<N>-<slug>
   - Dibuat dari: <base branch> (commit <hash pendek>)
   - Working tree: bersih ✅  (atau: membawa perubahan — jelaskan)
   - Perintah   : git switch -c <nama> <base>
   ```
   - **BERHENTI.** Tanyakan: *"Nama branch ini sudah sesuai? Balas 'approve' atau sebutkan nama yang kamu mau."*
   - Dilarang membuat branch sebelum `approve`.

4. **Buat Branch (lokal).**
   - Setelah `approve`, jalankan **hanya**:
     ```bash
     git switch -c <nama-yang-disetujui> <base>
     ```
   - Verifikasi: `git branch --show-current` harus menampilkan nama baru.

5. **Laporkan & Arahkan.**
   - Konfirmasi branch aktif, lalu arahkan ke `code-development` dengan `Feature: US-<N>`.
   - Ingatkan: semua commit US ini dilakukan manusia lewat perintah dari `generate-commit`.

## Steps — Mode Selesai (serah terima)

Dipanggil saat user menyatakan US-X selesai, atau oleh orchestrator pada akhir iterasi Build Loop.

1. **Verifikasi (hanya membaca).**
   - Branch aktif sesuai pola US-X? Jika tidak, hentikan dan beri tahu.
   - `git status --short` harus **bersih**. Jika masih ada perubahan: arahkan ke `generate-commit`
     (manusia yang commit), lalu panggil ulang mode ini.
   - Tampilkan commit milik US ini: `git log <base>..HEAD --oneline`. Jika kosong, tidak ada yang bisa di-push.
   - Pastikan test US ini lulus (laporan `write-tests` terakhir; tanyakan jika tidak terlihat).
   - Cek `git remote -v`: ada remote atau tidak.

2. **Susun Serah Terima untuk Manusia.** Sajikan perintah satu per satu, **masing-masing dengan**:
   di mana menjalankannya, fungsinya (1 kalimat), tanda berhasil, dan apa yang dilakukan jika error
   (salin pesan error ke chat, jangan diperbaiki sendiri).
   ```text
   🤝 Serah Terima — US-<N> (<nama-branch>)

   1) Kirim branch ke remote (manusia):
        git push -u origin <nama-branch>
      Fungsi: mengunggah branch dan commit-nya. Tanda berhasil: muncul "Branch '<nama>' set up to track ...".

   2) Buat Pull Request (di GitHub/GitLab) dari <nama-branch> ke <base>, lalu minta review & merge.

   3) Setelah PR di-merge (manusia):
        git switch <base>
        git pull
        git branch -d <nama-branch>
      Fungsi: pindah ke base terbaru dan merapikan branch yang sudah selesai.
   ```
   - Jika **tidak ada remote**: ganti langkah 1–2 dengan merge lokal oleh manusia
     (`git switch <base>` lalu `git merge --no-ff <nama-branch>`), dan sebutkan bahwa backup remote belum ada.
   - Sertakan **draf judul dan deskripsi PR** (teks saja): judul dari tujuan story, isi berupa daftar Acceptance Criteria
     US-X dengan status centang, serta ringkasan perubahan dari `git log`. Agent hanya menulis teksnya;
     user yang menempelkannya.

3. **Arahkan.**
   - Setelah user mengonfirmasi merge selesai: tanyakan US berikutnya, lalu jalankan Mode Mulai lagi.
   - Jika semua US selesai: lanjut ke Fase 3 (`review-code`; sarankan memakai `git diff <base>...<branch>`
     untuk review per branch).

## Output format

```text
🌿 Branch Ready: <type>/us-<N>-<slug>
   Dibuat dari: <base> (<hash>)
   Aktif sekarang: ✅

Suggested Next Step:
Gunakan skill `code-development` dengan "Feature: US-<N>".
(Commit & push dilakukan olehmu — agent hanya menyiapkan perintahnya.)
```

## Rules

- **DILARANG KERAS** menjalankan `git add`, `git commit`, `git push`, `git pull`, `git fetch`, `git merge`, `git rebase`,
  `git reset`, `git stash`, `git checkout`, atau menghapus branch. Semua itu hanya dilakukan manusia.
- Satu-satunya perintah yang mengubah repository dan boleh dijalankan agent adalah `git switch -c <nama> <base>`,
  dan hanya setelah `approve`.
- Satu User Story = satu branch. Jangan menggabungkan dua US dalam satu branch tanpa persetujuan eksplisit.
- Jangan membuat branch di atas working tree yang kotor tanpa persetujuan eksplisit user.
- Jangan menimpa atau menggunakan ulang nama branch yang sudah ada.
- Nama branch harus bersumber dari story di `docs/prd.md`, tidak dikarang.
- Jangan membuat branch jika repo belum punya commit pertama; berikan perintah commit awal untuk manusia.
- Verifikasi bahwa pola nama dan base branch sesuai konvensi proyek (`code-conventions.md`) sebelum mengusulkan.
