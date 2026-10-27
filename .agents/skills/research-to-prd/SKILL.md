---
name: research-to-prd
description: >-
  Use this skill to turn a raw idea, a story, or loose notes from a user who has NO
  prior PRD into a structured one-page Product Requirements Document (PRD) with user
  stories and Given/When/Then acceptance criteria. It first interviews the user to fill
  gaps in the story (one question at a time, plain language), never invents facts
  (every persona and pain point is tagged as coming from the story or as an assumption),
  and stops for user approval before saving. Activate when the user says "buat PRD",
  "sintesis riset", "draft requirements", "aku punya ide", "aku cuma punya cerita",
  or simply describes a product idea in their own words.
---

# Research to PRD

Mengubah cerita mentah, ide, atau catatan observasi menjadi dokumen spesifikasi produk (PRD)
satu halaman yang siap menjadi kontrak kerja koding. Skill ini dirancang untuk user yang
**belum punya PRD** dan mungkin **tidak punya latar belakang teknis** — cukup bercerita.

Template ada di [references/prd-template.md](./references/prd-template.md) (PRD) dan
[references/research-synthesis-template.md](./references/research-synthesis-template.md)
(bukti dari cerita).

## Inputs

- Cerita, ide, atau catatan mentah dari user (dalam bahasa apa pun yang user pakai).
- Opsional: `docs/project-config.md` (jika `setup-project` sudah dijalankan lebih dulu).
- Opsional: `docs/prd.md` yang sudah ada (jika ada, tanyakan: revisi atau tulis ulang?).

## Steps

1. **Terima Cerita Apa Adanya (jangan langsung menulis PRD).**
   - Baca cerita user dan susun **Catatan Cerita** internal: kalimat-kalimat penting user
     dikelompokkan per topik (siapa, masalah, keinginan, tempat pakai, batasan).
   - Jangan mengoreksi, menilai, atau menambahkan fitur pada tahap ini.

2. **Discovery — Gali Bagian yang Masih Kosong.**
   Cek kecukupan cerita terhadap 6 topik berikut:

   | # | Topik | Pertanyaan awam yang boleh diajukan |
   |---|-------|--------------------------------------|
   | a | Siapa pemakainya | "Siapa yang akan memakai ini? Ceritakan satu orang nyata." |
   | b | Masalah sekarang | "Sekarang mereka mengatasinya bagaimana? Bagian mana yang paling merepotkan?" |
   | c | Hasil yang diinginkan | "Kalau ini jadi, apa yang bisa dilakukan pemakai yang tadinya tidak bisa?" |
   | d | Di mana dipakai | "Dipakai lewat HP, laptop, atau chat? Di rumah, di toko, di jalan?" |
   | e | Yang BUKAN prioritas | "Dari semua ide tadi, mana yang boleh menunggu versi berikutnya?" |
   | f | Tanda berhasil | "Bagaimana kamu tahu ini berhasil? Contoh kejadian konkret." |

   Aturan wawancara:
   - **Hanya tanyakan topik yang belum terjawab** oleh cerita. Jika cerita sudah cukup, lewati.
   - **Satu pertanyaan per giliran**, bahasa sehari-hari, tanpa istilah teknis. Boleh beri 1–2 contoh jawaban.
   - **Maksimal 6 pertanyaan** secara total. Setelah itu lanjut dengan apa yang ada.
   - Jawaban "belum tahu", "terserah", atau "bingung" adalah jawaban sah: **catat sebagai
     Open Question** dan lanjut. Jangan memaksa dan **jangan mengisinya sendiri**.
   - Jangan tanyakan hal teknis (framework, database, hosting). Itu tugas `setup-project`.

3. **Sintesis Berbukti (Ringkasan Pemahaman).**
   Susun ringkasan menggunakan [references/research-synthesis-template.md](./references/research-synthesis-template.md):
   - 1 kalimat problem statement.
   - **Sampai 2** persona. Pakai label peran ("Pemilik warung", "Admin gudang"), bukan nama karangan.
     Jika cerita hanya menyebut satu jenis pemakai, buat satu persona.
   - Daftar friksi/pain point (sampai 5). **Setiap poin wajib memuat kutipan atau parafrase dekat
     dari cerita user** dan diberi tag `[Dari cerita]`. Jika tidak ada dasar di cerita, **jangan tulis**.
   - Hal yang agent simpulkan sendiri diberi tag `[Asumsi — perlu konfirmasi]` dan dikumpulkan
     di daftar "Belum diketahui / Perlu dikonfirmasi".
   - Jika cerita user saling bertentangan, tampilkan keduanya dan tanyakan mana yang berlaku.
   - Tampilkan dalam bahasa user, lalu tanyakan:
     *"Apakah ringkasan ini sudah menggambarkan ceritamu? Ada yang salah atau terlewat?"*
   - **BERHENTI** dan tunggu jawaban. Jangan menyusun PRD sebelum ringkasan ini dikonfirmasi.

4. **Plan First — Susun Draft PRD.**
   - Isi PRD memakai [references/prd-template.md](./references/prd-template.md):
     Problem, Goals, Non-goals, Personas, User Stories (maks 4, semua Must), Acceptance Criteria
     (Given/When/Then), Out of Scope, Open Questions.
   - Fitur dari cerita user yang tidak masuk 4 story dipindahkan ke **Out of Scope** beserta alasannya
     — jangan dibuang diam-diam.
   - Setiap item yang bukan berasal dari cerita ditandai `[Asumsi]`.
   - Isi **Open Questions** dengan semua hal "belum tahu" dan semua `[Asumsi]` yang butuh konfirmasi.
   - **BERHENTI.** Tampilkan draft lengkap dan tanyakan:
     *"Apakah ada fitur yang ingin dipotong atau disesuaikan sebelum saya simpan sebagai docs/prd.md?"*
   - Dilarang menyimpan file sebelum ada konfirmasi `approve`.

5. **Simpan Dokumen.**
   - Simpan `docs/prd.md` dan `docs/research-synthesis.md` (buat folder `docs/` jika belum ada).

6. **Konfirmasi & Arahkan.**
   - Tampilkan ringkasan: jumlah User Story, jumlah Acceptance Criteria, jumlah Open Questions.
   - Tentukan langkah berikutnya secara kondisional:
     - Jika `docs/project-config.md` **belum ada** → skill `setup-project` (gunakan Mode Rekomendasi
       bila user belum tahu stack).
     - Jika sudah ada dan produk punya antarmuka/halaman → skill `prd-to-design`.
     - Jika sudah ada dan tidak ada UI → skill `code-development` untuk `US-1`.

## Output format

```text
✅ PRD Successfully Drafted & Saved to docs/prd.md

Summary:
- Must-have Stories: US-1 s/d US-<N>
- Total Acceptance Criteria: <M> criteria
- Non-goals: <list non-goals yang disepakati>
- Open Questions: <K> (lihat bagian 8 di docs/prd.md)

Suggested Next Step:
<setup-project | prd-to-design | code-development — sesuai kondisi langkah 6>
```

## Rules

- **Jangan mengarang.** Dilarang menciptakan nama, angka, harga, kebijakan, atau kebiasaan pemakai
  yang tidak disebut user. Jika perlu, tulis "tidak ada di cerita" atau tandai `[Asumsi]`.
- Jangan menyimpan `docs/prd.md` sebelum user menyetujui draft.
- Jangan menyusun PRD sebelum Ringkasan Pemahaman (langkah 3) dikonfirmasi user.
- Batasi cakupan MVP maksimal 4 user stories agar fokus.
- Seluruh Acceptance Criteria harus objektif dan dapat diverifikasi biner (pass/fail).
- Jangan memasukkan fitur seperti login atau payment jika tidak secara eksplisit diminta.
- Jangan memilih teknologi (framework, database, hosting) di PRD.
- Tulis dokumen dalam bahasa yang dipakai user.
