# Panduan Ekstraksi Referensi

> Dipakai skill `reference-intake`. Tujuan: mengubah contoh dari user menjadi aturan konkret, tanpa menebak.
> Label wajib: `[Terlihat]` / `[Estimasi]` / `[Tidak terlihat]`.

## A. Tujuan `kode` — gaya koding

Ideal: **2-3 file** dari tempat yang sama. Dengan satu file, pola yang muncul hanya sekali ditandai
*"belum tentu aturan"* dan ditanyakan ke user.

| Aspek | Yang dicari | Dituju ke (code-conventions) |
|---|---|---|
| Deklarasi fungsi | arrow function vs `function`; named vs default export | 3. Aturan Spesifik → Deklarasi Fungsi |
| Penamaan | file, variabel, fungsi, tipe, konstanta, komponen | 3. Aturan Spesifik → Penamaan |
| Tipe | strict, hindari `any`, `interface` vs `type`, return type eksplisit | Type Safety |
| Impor | alias (`@/`) vs relatif, urutan impor | Imports |
| Struktur & lapisan | di mana logika bisnis, di mana handler/UI, ukuran file, kapan dipecah | Preset (A/B/Custom) + Struktur Direktori |
| Error handling | throw vs result type, pesan error, validasi di mana | Error Handling |
| Komentar | seberapa banyak, "kenapa" vs "apa", bahasa komentar | Aturan Spesifik |
| Gaya penulisan | tanda kutip, titik koma, indentasi, panjang baris | usulkan formatter (lihat catatan) |
| Styling (jika UI) | Tailwind / CSS Modules / CSS biasa; cara menamai class | Styling |
| Test | lokasi file, pola penamaan, gaya assert | untuk `write-tests` |

**Hasil:** ringkasan aturan (daftar pendek) + **Golden Sample** (1-2 potongan terbaik, dibersihkan dari rahasia dan
logika yang tidak relevan) untuk bagian 6 `code-conventions.md`. Golden Sample dipakai agent untuk meniru **gaya**, bukan isi.

**Catatan formatter:** aturan murni format (kutip, titik koma, indentasi) lebih andal ditegakkan oleh alat (Prettier/ESLint)
daripada oleh agent. Usulkan sebagai paket dev; instalasinya lewat gate (manusia menjalankan).

**Ambigu?** Contoh: satu file arrow function, satu lagi `function`. Tampilkan keduanya, tanya mana yang jadi aturan.

## B. Tujuan `tampilan` — desain UI

### Dari gambar / screenshot

| Aspek | Yang dicari | Label biasanya |
|---|---|---|
| Pola halaman | landing, dashboard, daftar+detail, form, alat/workspace | Terlihat |
| Layout | jumlah kolom, header/sidebar/tab bawah, lebar konten, urutan zona | Terlihat |
| Komponen | kartu, tabel, tombol (bentuk), input, tab, modal, chip | Terlihat |
| Palet | primary, netral/latar, aksen, status (sukses/peringatan/bahaya) | **Estimasi** (hex dari piksel) |
| Huruf | serif/sans/mono, geometris/humanis, kontras bobot, hierarki ukuran | Estimasi (nama font hanya bila jelas) |
| Spasi & kepadatan | rapat / sedang / lega | Estimasi |
| Radius, garis, bayangan | tajam/membulat/pill; garis tipis vs bayangan | Estimasi |
| Ikon & gambar | outline/filled, ilustrasi/foto/tanpa | Terlihat |
| Nada | formal, ramah, teknis, playful | Estimasi |
| State (kosong/loading/error/hover) | **jarang terlihat dari satu gambar** | Tidak terlihat |
| Desktop vs HP | hanya satu ukuran yang terlihat | Tidak terlihat untuk ukuran lain |

Sketsa tangan: ambil **struktur** (zona, urutan, komponen), bukan gaya visual.

### Dari URL (bila bisa dibuka)

Semua aspek gambar di atas, ditambah bila browser tool bisa memeriksanya:
nilai CSS yang sebenarnya (warna, font-family, ukuran, radius) → `[Terlihat]` (bukan estimasi), perilaku pada lebar 375/768/1280,
dan font yang dimuat. Tetap dilarang: login, mengisi form, klik aksi yang mengubah data.
Tidak bisa dibuka → minta screenshot atau kode.

### Dari kode UI (HTML/CSS/komponen)

| Yang dicari | Dituju ke |
|---|---|
| CSS variable, tema (Tailwind config, token) | token Master (nama semantik: primary, surface, text, ...) |
| Skala spasi, radius, bayangan | Spacing and radius, Effects |
| Struktur komponen & penamaan class | aturan gaya (bagian A) bila user juga ingin gaya kodenya |
| Font & ikon yang dipakai | Typography; "Perlu dipasang" |

Hasil berupa **kata dan tabel token**. `prd-to-design` dilarang menulis kode; kode referensi tidak disalin ke `design.md`.

## C. Pemetaan hasil `tampilan` ke dokumen

| Temuan | Masuk ke |
|---|---|
| Pola halaman, layout, komponen per halaman | `docs/design.md` (bagian halaman terkait; baris **Referensi: R-n**) |
| Palet, huruf, spasi, radius, efek, anti-pattern | `docs/design-system/<slug>/MASTER.md` (kolom Light) |
| Preset | Referensi **menang** atas preset default; preset hanya mengisi yang tidak tercakup referensi |
| Elemen yang tidak ada di PRD | "Usulan di Luar PRD — butuh keputusan" |
| Palet estimasi | diverifikasi kontras; disesuaikan ke nilai terdekat yang lulus; ditandai *penyesuaian* |

## D. Hal yang selalu dicatat, tidak dikerjakan

- Font/pustaka ikon/pustaka UI yang terdeteksi → "Perlu dipasang" → gate instalasi.
- Dark mode, animasi, atau ikon dekoratif yang tampak di referensi → "Usulan di Luar PRD" (butuh dasar di PRD).
- Teks, logo, foto, atau merek di referensi → tidak ditiru.
