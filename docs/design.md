# Design: Teh Nusantara

> Dokumen spesifikasi desain antarmuka `docs/design.md`.
> Menjadi panduan visual untuk skill `code-development`. Setiap halaman terhubung langsung ke `docs/prd.md`.
> Rujukan Design System: [docs/design-system/teh-nusantara/MASTER.md](./design-system/teh-nusantara/MASTER.md).

## Preset Siap Pakai & Referensi
- **Device Priority:** Mobile-first (Responsif 375px hingga 1280px+).
- **Visual Style:** Organic Elegance / Botanical Craft (Mantine UI v7 + Framer Motion).
- **Referensi:**
  - `R-1`: Identitas visual dari brief user (palet `#4A6B3A`, `#F5F0E1`, `#6B4423` + Playfair Display/Poppins).
  - `R-2`: Gambar inspirasi layout desktop dari user (Floating pill navbar, bento grid, alur step bernomor, minimal clean testimonial).

---

## Roadmap Asset Gambar & Dimensi Target
| Kebutuhan Visual | Lokasi Halaman | Dimensi Target (px) | Rasio Aspek |
|---|---|---|---|
| Hero Banner Kebun Teh | Beranda (`/`) | `1920 x 800` | 12:5 |
| Foto Produk Katalog (8 Varian) | Produk (`/products`) & Detail | `800 x 800` | 1:1 |
| Foto Tahapan Proses (6 Langkah) | Proses & Kebun (`/process`) | `800 x 533` | 3:2 |
| Foto Galeri Kebun (4 Foto) | Proses & Kebun (`/process`) | `1200 x 800` | 3:2 |
| Foto Cerita Perusahaan | Tentang Kami (`/about`) | `1000 x 667` | 3:2 |
| Foto Tim (4 Anggota) | Tentang Kami (`/about`) | `400 x 400` | 1:1 |
| Thumbnail Jurnal Blog (6 Artikel) | Blog (`/blog`) & Detail | `800 x 450` | 16:9 |
| Logo Teh Nusantara | Header & Footer | `400 x 120` | ~3:1 |

---

## Halaman 1: Beranda (`/`)
- **Jejak:** US-1 (AC-1), US-4 (AC-10)
- **Tujuan Halaman:** Mengenalkan brand Teh Nusantara, memikat pengunjung dengan kualitas teh Jawa Barat, menampilkan produk unggulan, keunggulan mitra petani, testimoni, dan ajakan berlangganan newsletter.
- **1. Layout:**
  - Header melayang (*Floating Pill Navbar*) dengan navigasi link dan tombol CTA WhatsApp.
  - Hero Section: Foto lanskap kebun teh Lembang, judul H1 "Secangkir Ketenangan dari Kebun Nusantara", subjudul, 2 tombol CTA ("Lihat Produk" dan "Kenali Kami"), serta floating badge stats ("40+ Mitra Petani").
  - Produk Unggulan: 4 kartu produk pilihan (Teh Hitam Priangan, Teh Hijau Gunung Puntang, Teh Melati Premium, Gift Set).
  - Tentang Singkat: Ringkasan sejarah 2015 + tombol "Selengkapnya".
  - Kenapa Teh Nusantara: Bento grid 4 pilar (Petani Lokal, Ramah Lingkungan, Kualitas Pilihan, Dikemas Segar).
  - Kategori Teh: Grid 5 kategori (Teh Hitam, Hijau, Melati, Herbal, Gift Set).
  - Testimoni: 3 ulasan pelanggan bergaya editorial minimalis.
  - Artikel Terbaru: 3 kartu artikel blog terkini.
  - Newsletter: Form input email dan tombol "Berlangganan" dengan konfirmasi instan.
  - Footer: Alamat Lembang, kontak WhatsApp/Email, navigasi, copyright 2026.
- **2. State:**
  - Loading: Mantine Skeleton cards.
  - Sukses: Seluruh section tampil fluid dengan Framer Motion fade-up.
- **3. Device Priority:** Mobile-first (1 kolom di HP, Bento grid dan multi-kolom di desktop).
- **4. Referensi:** R-1 (Palet & Font), R-2 (Floating nav, bento grid, testimoni layout).

---

## Halaman 2: Katalog Produk (`/products`)
- **Jejak:** US-2 (AC-3, AC-4)
- **Tujuan Halaman:** Menampilkan seluruh koleksi 8 varian teh dengan fitur filter kategori instan, pencarian nama, dan tombol pemesanan WhatsApp.
- **1. Layout:**
  - Banner: "Koleksi Teh Nusantara".
  - Toolbar: Segmented control filter kategori (Semua, Teh Hitam, Teh Hijau, Teh Melati, Teh Herbal, Gift Set) dan kolom pencarian `TextInput` dengan ikon cari.
  - Product Grid: Grid kartu produk (Foto 1:1, badge kategori, nama produk, pilihan kemasan, harga, dan tombol "Pesan via WhatsApp").
- **2. State:**
  - Kosong: Pesan "Tidak ada produk yang cocok dengan pencarianmu" + tombol reset.
  - Loading: Skeleton kartu produk.
  - Sukses: Daftar produk terfilter secara reaktif.
- **3. Interaksi WhatsApp:**
  - Tombol membuka `https://wa.me/6281234567890?text=Halo%20Teh%20Nusantara,%20saya%20tertarik%20memesan%20[Nama%20Produk].%20Apakah%20stoknya%20tersedia?`
- **4. Device Priority:** Mobile-first (1 kolom mobile, 2 kolom tablet, 3-4 kolom desktop).

---

## Halaman 3: Detail Produk (`/products/[slug]`)
- **Jejak:** US-2 (AC-4, AC-5)
- **Tujuan Halaman:** Menyajikan spesifikasi lengkap teh (asal kebun, catatan rasa, panduan seduh, opsi kemasan & harga) serta rekomendasi produk terkait.
- **1. Layout:**
  - Breadcrumbs navigasi.
  - Grid 2 Kolom (Desktop):
    - Kolom Kiri: Foto produk besar 800x800px.
    - Kolom Kanan: Kategori badge, Nama produk H1, Harga per kemasan, Asal kebun (ketinggian mdpl), Catatan rasa (*tasting notes*), Panduan menyeduh (suhu, takaran, durasi waktu), dan Tombol CTA "Pesan via WhatsApp".
  - Section Bawah: Grid 3 produk terkait.
- **2. State:**
  - Error: Jika slug tidak ditemukan, tampilkan notifikasi produk tidak tersedia + tombol kembali ke katalog.
  - Sukses: Halaman detail termuat lengkap.

---

## Halaman 4: Tentang Kami (`/about`)
- **Jejak:** US-1 (AC-1)
- **Tujuan Halaman:** Memperkuat kredibilitas brand, menyampaikan sejarah persahabatan 2015, visi & misi, profil tim pendiri, komitmen mitra petani lokal di 4 daerah, serta sertifikasi halal/PIRT.
- **1. Layout:**
  - Banner Cerita Kami.
  - Timeline Sejarah (2015, 2017, 2019, 2021, 2024, 2026).
  - Visi & Misi Card.
  - Tim Kami: Grid 4 profil tim inti (Andi, Siti, Budi, Nadia) dengan foto 400x400px.
  - Mitra Petani: Wilayah kemitraan Lembang, Pangalengan, Garut, Puncak.
  - Sertifikasi & Penghargaan: PIRT, Halal, UMKM Berkelanjutan 2023, Finalis 2024.
- **2. Device Priority:** Mobile-first.

---

## Halaman 5: Proses & Kebun (`/process`)
- **Jejak:** US-1 (AC-1)
- **Tujuan Halaman:** Mengedukasi transparansi produksi "Dari Kebun ke Cangkir" dan komitmen ramah lingkungan.
- **1. Layout:**
  - Banner "Dari Kebun ke Cangkir".
  - Alur 6 Tahapan: Step card bernomor (01 Petik, 02 Layu, 03 Giling, 04 Fermentasi, 05 Pengeringan, 06 Kemas).
  - Galeri Kebun: Grid 4 foto lanskap kebun dan aktivitas petani.
  - Komitmen Kami: Komitmen Petani & Komitmen Lingkungan.
- **2. Referensi:** R-2 (Layout step progression bernomor).

---

## Halaman 6: Jurnal Teh / Blog (`/blog`)
- **Jejak:** US-3 (AC-6)
- **Tujuan Halaman:** Menyajikan artikel edukasi seputar tips menyeduh, resep teh, wawasan kesehatan, dan berita kegiatan.
- **1. Layout:**
  - Banner "Jurnal Teh".
  - Filter Tabs Kategori (Semua, Tips Seduh, Manfaat Teh, Resep, Berita).
  - Grid 6 Artikel: Kartu artikel dengan foto 16:9, badge kategori, tanggal, waktu baca, judul, cuplikan isi, dan tombol "Baca Selengkapnya".
  - Pagination Mantine UI: Pengatur halaman navigasi (maks 6 per halaman).
- **2. State:**
  - Kosong: Pesan artikel tidak ditemukan.
  - Sukses: Daftar artikel terorganisir per halaman.

---

## Halaman 7: Detail Artikel (`/blog/[slug]`)
- **Jejak:** US-3 (AC-7)
- **Tujuan Halaman:** Menyajikan teks artikel editorial mendalam, panduan seduh bebas rasa pahit, tombol bagikan media sosial, dan rekomendasi artikel terkait.
- **1. Layout:**
  - Header Artikel: Kategori, Tanggal, Waktu Baca, Penulis, Judul H1.
  - Gambar Utama 16:9.
  - Isi Teks Editorial: Tipografi nyaman dengan poin-poin terstruktur.
  - Bar Tombol Bagikan: Tombol WhatsApp, Facebook, dan Salin Tautan (dengan notifikasi sukses tersalin).
  - Artikel Terkait: 3 kartu artikel rekomendasi.
- **2. State:**
  - Error: Pesan artikel tidak ditemukan bila slug keliru.
  - Sukses: Konten artikel lengkap.

---

## Halaman 8: Kontak (`/contact`)
- **Jejak:** US-4 (AC-8, AC-9, AC-10)
- **Tujuan Halaman:** Memfasilitasi komunikasi pelanggan & calon mitra lewat formulir kontak tervalidasi Zod, memajang info kantor Lembang, embed Google Maps, dan FAQ akordeon.
- **1. Layout:**
  - Banner "Hubungi Kami".
  - Dua Kolom Grid:
    - Kiri: Form kontak (Nama, Email, Subjek, Pesan, Tombol "Kirim Pesan").
    - Kanan: Info operasional (Alamat Lembang, WhatsApp, Email, Jam Operasional) + Embed Google Maps interaktif.
  - Section FAQ: Akordeon 4 pertanyaan seputar cara pesan, pengiriman se-Indonesia, grosir/reseller, dan daya tahan teh.
- **2. State & Validasi (Zod):**
  - Error: Teks error merah di bawah input yang tidak valid (nama < 3 karakter, format email salah, pesan < 10 karakter).
  - Sukses: Notifikasi hijau *"Terima kasih! Pesanmu sudah kami terima dan akan dibalas dalam 1 x 24 jam."* dan form di-reset.

---

## Halaman 9: 404 Not Found (`/not-found`)
- **Jejak:** US-1 (AC-2)
- **Tujuan Halaman:** Menangani rute tidak terdaftar dengan visual ramah kebun teh.
- **1. Layout:**
  - Ilustrasi cangkir teh.
  - Judul: "Ups, Halaman Tidak Ditemukan".
  - Deskripsi: "Sepertinya halaman yang kamu cari sudah tersesat di tengah kebun teh. Yuk, kembali ke beranda."
  - Tombol: "Kembali ke Beranda" (Primary Green button).

---

## Usulan di Luar PRD
*Tidak ada usulan di luar PRD. Seluruh kebutuhan telah selaras dengan spesifikasi fungsional.*

