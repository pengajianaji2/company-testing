# Design: [Nama Proyek]

> Template `docs/design.md`. Satu bagian per halaman. Setiap elemen harus ditelusuri ke US/AC di `docs/prd.md`.

## Preset Siap Pakai

| Preset | Device priority | Visual style |
|---|---|---|
| **Mobile-first** (default bila pemakai utama memakai HP) | HP dulu, desktop menyesuaikan | Minimal: kartu polos, satu warna aksen, tanpa ikon |
| **Desktop/admin-first** | Layar lebar dulu (halaman admin/dashboard) | Dense: tabel padat, teks kecil, dibuat untuk dipindai cepat |
| **Friendly** | — | Sudut membulat, satu ilustrasi/emoji per empty state, palet lembut |

Preset boleh berbeda per halaman (misal halaman pelanggan Mobile-first + Friendly, halaman admin Desktop-first + Dense).

## Referensi Tampilan (opsional, dari `reference-intake`)

Contoh dari user berupa **gambar/screenshot, kode UI, atau URL**. Referensi **menang atas preset default**; preset hanya mengisi
bagian yang tidak tercakup referensi. Referensi = gaya, bukan isi (tanpa menyalin teks, logo, merek, foto). Log lengkap: `docs/references/index.md`.

| ID | Jenis | Sumber | Dipakai di halaman | Yang diambil | Yang tidak diambil / tidak terlihat |
|---|---|---|---|---|---|
| R-1 | gambar / kode / URL | lampiran chat / path / link | <halaman> | <layout, palet, huruf, ...> | <elemen di luar PRD, state yang tidak terlihat> |

Tanpa referensi: tulis *"Referensi: tidak ada, memakai preset"*.

## Design System (opsional, dari `ui-ux-pro-max`)

- **Master:** `docs/design-system/<project-slug>/MASTER.md` (token warna, huruf, spasi, anti-pattern)
- **Override halaman:** `docs/design-system/<project-slug>/pages/<halaman>.md` (hanya bila halaman berbeda dari Master)
- Preset di atas dipetakan ke gaya awal dan dial lewat `../../ui-ux-pro-max/references/skill-factory-integration.md` (bagian 5).
- Urutan prioritas bila bertentangan: PRD > halaman ini (`docs/design.md`) > Master > override halaman.

---

## Halaman: [Nama Halaman]

- **Jejak:** US-<X>, AC-<Y>
- **Tujuan halaman:** (1 kalimat)

**1. Layout** — zona dari atas ke bawah (header, bagian utama, footer) dalam kata-kata.

**2. Elemen utama per zona**
- Form: field + urutannya
- Daftar/tabel: kolom
- Tombol: label + apa yang terjadi saat diklik

**3. State**
| State | Yang dilihat pemakai |
|---|---|
| Kosong (belum ada data) | |
| Loading | |
| Error | |
| Sukses | |

**4. Navigasi** — bagaimana pemakai tiba di halaman ini dan ke mana setelahnya.

**5. Device priority:** <preset>

**6. Visual style:** <preset, atau "mengikuti R-n" bila ada referensi>

**7. Referensi:** <R-n + apa yang diambil / "tidak ada, memakai preset">

---

## Usulan di Luar PRD — butuh keputusan
| # | Elemen/fitur yang tampaknya dibutuhkan | Alasan | Keputusan |
|---|---|---|---|
| | | | Tambah ke PRD / Abaikan |

### ✅ Cek sebelum lanjut
- [ ] Setiap halaman menyebut US/AC yang mendasarinya
- [ ] Setiap halaman punya 4 state (kosong, loading, error, sukses)
- [ ] Tidak ada fitur yang tidak ada di PRD
- [ ] Pertanyaan referensi tampilan sudah ditanyakan; jika ada referensi, tiap halaman menyebut R-n dan apa yang diambil
- [ ] Warna dari gambar (estimasi) sudah diverifikasi kontrasnya; penyesuaian ditandai
- [ ] Tidak ada teks, logo, atau merek dari referensi yang ditiru; elemen di luar PRD masuk "Usulan di Luar PRD"
- [ ] Tidak ada kode, HTML, atau CSS
- [ ] Jika memakai design system: disetujui bersama halaman, kontras teks/latar terverifikasi, kolom Dark kosong kecuali diminta
- [ ] Dark mode, animasi dekoratif, dan ikon dekoratif hanya ada bila PRD atau user memintanya
