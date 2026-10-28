# 🍃 Teh Nusantara — Company Profile Website

> **Secangkir Ketenangan dari Kebun Nusantara**  
> Website profil perusahaan modern, estetik, responsif, dan berperforma tinggi untuk brand teh artisanal dataran tinggi Jawa Barat.

---

## 🌟 Tentang Proyek

**Teh Nusantara** didirikan sejak tahun 2015 di Lembang, Jawa Barat, dengan dedikasi mengolah daun teh terbaik dari perkebunan pegunungan Indonesia melalui kemitraan berkelanjutan bersama 40+ petani lokal.

Website ini dibangun menggunakan arsitektur **Next.js 14 App Router** dan **Mantine UI v7** dengan fokus pada **kecepatan muat (*fast performance*)**, **aksesibilitas tinggi**, serta alur belanja praktis tanpa e-commerce checkout yang rumit (*Direct Order via WhatsApp*).

---

## 🚀 Fitur Utama (Core User Stories)

### 🌿 US-1: Brand & Profil Perusahaan
- **Halaman Beranda (`/`)**: Hero banner lanskap kebun teh Lembang, showcase produk unggulan, bento grid 4 pilar keunggulan, ulasan pelanggan (*testimonials*), artikel pilihan, serta form pendaftaran newsletter.
- **Halaman Tentang Kami (`/about`)**: Kisah persahabatan pendiri sejak 2015, visi & misi, profil tim inti, komitmen 4 wilayah kemitraan petani (Lembang, Pangalengan, Garut, Puncak), dan sertifikasi Halal/PIRT.
- **Halaman Proses & Kebun (`/process`)**: Transparansi produksi *"Dari Kebun ke Cangkir"* melalui alur bernomor 6 tahapan (Petik, Layu, Giling, Fermentasi, Pengeringan, Kemas) dan galeri visual kebun teh Priangan.
- **Halaman 404 Kustom (`/_not-found`)**: Halaman ramah bertema kebun teh *"Ups, Halaman Tidak Ditemukan"* dengan tombol navigasi kembali ke Beranda.

### 🍵 US-2: Katalog Produk & WhatsApp Ordering
- **Katalog Produk (`/products`)**: Koleksi 8 varian teh (Teh Hitam, Teh Hijau, Teh Melati, Teh Herbal, Gift Set) dengan filter kategori reaktif dan pencarian kata kunci instan.
- **Detail Produk (`/products/[slug]`)**: Menampilkan foto produk rasio 1:1, asal kebun, ketinggian mdpl, profil rasa (*tasting notes*), panduan menyeduh (*temperature, water, steeping time*), pilihan harga kemasan, dan rekomendasi produk terkait.
- **Direct WhatsApp Ordering**: Tombol CTA *"Pesan via WhatsApp"* otomatis mengarahkan ke nomor admin resmi (`0812-3456-7890`) dengan format pesan pesanan terstruktur.

### 📰 US-3: Jurnal Teh & Berbagi Edukasi
- **Jurnal Teh (`/blog`)**: Artikel edukasi seputar tips seduh teh, resep racikan, manfaat kesehatan, dan berita kegiatan dengan filter tabs kategori serta pagination maksimal 6 artikel per halaman.
- **Detail Artikel (`/blog/[slug]`)**: Tampilan editorial yang nyaman dibaca dengan estimasi waktu baca (*read time*), tanggal publikasi, dan rekomendasi artikel terkait.
- **Fitur Berbagi Sosial**: Integrasi tombol berbagi instan ke WhatsApp, Facebook, dan fitur Salin Tautan ke clipboard dengan feedback visual.

### 📬 US-4: Kontak, Informasi Operasional & FAQ
- **Formulir Kontak Tervalidasi (`/contact`)**: Formulir interaktif dengan validasi skema **Zod** (nama, format email, subjek, dan pesan), indikator pesan error di bawah field, tombol kirim dengan loading state, dan konfirmasi sukses 1x24 jam.
- **Informasi Operasional**: Alamat kantor & rumah produksi Lembang, link WhatsApp & email resmi, jam operasional, serta embed interaktif Google Maps.
- **Pertanyaan Umum (FAQ)**: Akordeon interaktif untuk 4 pertanyaan umum seputar cara pemesanan, pengiriman nasional, reseller/grosir, dan penyimpanan daun teh.

---

## 🛠️ Tech Stack & Library

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Components)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (Strict Type-Safety)
- **UI Component Library**: [Mantine UI v7](https://mantine.dev/) (`@mantine/core`, `@mantine/hooks`, `@mantine/notifications`)
- **Icons**: [Tabler Icons React](https://tabler.io/icons) (`@tabler/icons-react`)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (`framer-motion`)
- **Schema Validation**: [Zod](https://zod.dev/) (`zod`)
- **Client State**: [Zustand](https://zustand-demo.pmnd.rs/) (`zustand`)
- **Server Cache & Query**: [TanStack React Query v5](https://tanstack.com/query/latest)
- **Automated Testing**: [Vitest](https://vitest.dev/) (`vitest`)

---

## 📂 Struktur Direktori Proyek

```text
src/
├── app/                        # Next.js App Router (Rute & Layouts)
│   ├── layout.tsx              # Root Layout & Mantine Providers
│   ├── page.tsx                # Beranda (Hero, Bento Grid, Testimoni, Newsletter)
│   ├── about/page.tsx          # Halaman Tentang Kami
│   ├── process/page.tsx        # Halaman Alur 6 Tahap Proses & Galeri Kebun
│   ├── products/
│   │   ├── page.tsx            # Katalog Produk & Filter Reaktif
│   │   └── [slug]/page.tsx     # Detail Produk & WhatsApp CTA
│   ├── blog/
│   │   ├── page.tsx            # Jurnal Teh & Pagination
│   │   └── [slug]/page.tsx     # Detail Artikel & Social Share
│   ├── contact/page.tsx        # Kontak, Form Zod, Google Maps, FAQ
│   └── not-found.tsx           # Halaman 404 Fallback Kustom
├── components/                 # Shared Layout & Motion Components
│   ├── layout/                 # Header & Footer konsisten
│   ├── motion/                 # FadeIn animated wrapper
│   └── providers/              # Mantine & TanStack Query Providers
├── features/                   # Modul Domain Fitur (Feature-driven)
│   ├── products/               # ProductCard, ProductFilter, useProducts hook
│   ├── blog/                   # BlogCard, BlogFilter, ShareButtons, useArticles hook
│   └── contact/                # ContactForm, ContactInfo, FAQAccordion, contactSchema
├── data/                       # Mock Data Lokal
│   ├── products.ts             # 8 Koleksi varian teh & spesifikasi seduh
│   ├── articles.ts             # 6 Artikel edukasi teh
│   └── company.ts              # Profil Lembang, timeline, proses, FAQ
├── stores/                     # Zustand UI Stores (Filter & Pagination)
├── theme/                      # Mantine Theme (Palet #4A6B3A, #F5F0E1, #6B4423)
└── types/                      # TypeScript Interface Definitions
```

---

## ⚡ Panduan Menjalankan Proyek

### 1. Prasyarat Sistem
- Node.js versi 18.17+ atau 20+
- NPM / PNPM / Yarn

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```
Buka browser Anda dan akses tautan: [http://localhost:3000](http://localhost:3000)

### 4. Menjalankan Pengujian Otomatis (Unit Tests)
```bash
npm test
```
*Menguji 10 Acceptance Criteria fungsional (AC-1 s/d AC-10) menggunakan Vitest.*

### 5. Membangun Versi Produksi (Production Build)
```bash
npm run build
npm start
```
*Menghasilkan bundle statis yang teroptimasi dengan ukuran shared JS hanya ~87 kB.*

---

## 🎨 Palet Desain & Tipografi (Design System)

- **Warna Utama (Primary Green)**: `#4A6B3A` (Daun teh segar Priangan)
- **Warna Kanvas (Canvas Cream)**: `#F5F0E1` (Krem hangat alami)
- **Warna Aksen (Tea Brown)**: `#6B4423` (Cokelat seduhan teh hitam)
- **Warna Judul**: `#1C2A16` (Hijau gelap kontras tinggi WCAG AA)
- **Font Judul**: `Playfair Display` (Serif elegan & otentik)
- **Font Isi**: `Poppins` (Sans-serif modern & nyaman dibaca)

---

## 📄 Lisensi

Hak Cipta © 2026 **Teh Nusantara**. Seluruh hak cipta dilindungi undang-undang.
