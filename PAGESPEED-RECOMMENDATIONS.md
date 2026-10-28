# Laporan Audit PageSpeed & Rekomendasi Optimasi

> **Tanggal Audit:** 27 Oktober 2026  
> **Target:** `http://localhost:3000`  
> **Tool:** Google Lighthouse (Desktop Preset, 1350×940)  
> **Laporan PDF:** [`pagespeed-report-2026-10-27T16-51-17.pdf`](./pagespeed-report-2026-10-27T16-51-17.pdf)

---

## 1. Ringkasan Skor Audit

| Pilar | Skor | Status | Catatan Utama |
| :--- | :---: | :---: | :--- |
| **Performance** | **26** | 🔴 Buruk | LCP tinggi (19.9s), TBT (4.88s), render-blocking external Google Fonts, serta bundle unminified (Next dev). |
| **Accessibility** | **94** | 🟡 Baik | Masalah kontras warna teks sekunder (4.32:1) dan loncatan urutan heading (`h2` langsung ke `h4`). |
| **Best Practices** | **96** | 🟡 Baik | Ada console error HTTP 404 akibat file `/favicon.ico` belum tersedia. |
| **SEO** | **100** | 🟢 Sempurna | Metadata, title tag, description, dan OpenGraph sudah optimal. |
| **Agentic Browsing** | **100** | 🟢 Sempurna | Struktur semantik dan keterbacaan data AI-agent sudah sangat baik. |

---

## 2. Metrik Core Web Vitals & Lab Data

| Metrik | Hasil Audit | Target Ideal (Good) | Evaluasi |
| :--- | :---: | :---: | :--- |
| **First Contentful Paint (FCP)** | **3.0 s** | < 1.8 s | 🔴 Lambat (terhambat render-blocking CSS font) |
| **Largest Contentful Paint (LCP)** | **19.9 s** | < 2.5 s | 🔴 Sangat Lambat (hero background image Unsplash via dev proxy) |
| **Total Blocking Time (TBT)** | **4,880 ms** | < 200 ms | 🔴 Sangat Tinggi (main-thread 9.0s akibat `'use client'` satu halaman penuh) |
| **Cumulative Layout Shift (CLS)** | **0.001** | < 0.1 | 🟢 Sangat Stabil (hampir tidak ada pergeseran tata letak) |
| **Speed Index (SI)** | **3.0 s** | < 3.4 s | 🟡 Cukup baik |
| **Time to Interactive (TTI)** | **30.0 s** | < 3.8 s | 🔴 Lambat |
| **Server Response Time (TTFB)** | **110 ms** | < 800 ms | 🟢 Sangat Cepat (respons root document optimal) |

---

## 3. Matriks Risiko & Prioritas Perbaikan

| ID | Item Perbaikan | Pilar Terkait | Dampak Estimasi | Risiko | Prioritas |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **F1** | Ganti external Google Fonts dengan `next/font/google` | Performance | FCP turun ~1.9s, hapus render-blocking | 🟢 Rendah | **P1** |
| **F2** | Tambahkan file `favicon.ico` di folder `/public/` | Best Practices | Best Practices 96 → 100 (hapus console error 404) | 🟢 Rendah | **P1** |
| **F3** | Perbaiki kontras warna teks subtitle (`#6B7365` → `#4E5549`) | Accessibility | Rasio naik dari 4.32:1 ke > 5.5:1 | 🟢 Rendah | **P1** |
| **F4** | Perbaiki urutan heading (`h4` card diubah ke `h3`) | Accessibility | Heading hierarchy valid (Accessibility → 100) | 🟢 Rendah | **P1** |
| **F5** | Aktifkan format modern `AVIF` & `WebP` di `next.config.mjs` | Performance | Ukuran file gambar turun 30–50% | 🟢 Rendah | **P2** |
| **F6** | Tambahkan properti `sizes="100vw"` pada Hero `<Image>` | Performance | Optimasi LCP candidate image | 🟢 Rendah | **P2** |
| **F7** | Pisahkan interaktivitas (`'use client'`) dari konten statis | Performance | TBT turun drastis, bundle client lebih ramping | 🟡 Sedang | **P2** |
| **F8** | Verifikasi performa pada **Production Build** (`next build`) | Performance | Skor Performance naik signifikan (assets minified & tree-shaken) | 🟢 Rendah | **P1** |

---

## 4. Panduan Perbaikan Langkah-demi-Langkah (Code Diffs)

### Perbaikan 1: Optimasi Font Menggunakan `next/font/google`
**Lokasi File:** `src/app/layout.tsx`  
**Tujuan:** Menghilangkan round-trip HTTP external ke `fonts.googleapis.com` dan `fonts.gstatic.com` yang menunda rendering awal (Render-blocking request: ~1,970 ms).

#### Sebelum:
```tsx
// src/app/layout.tsx
<head>
  <ColorSchemeScript defaultColorScheme="light" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Poppins:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</head>
```

#### Sesudah:
```tsx
// src/app/layout.tsx
import { Playfair_Display, Poppins } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body
        style={{
          margin: 0,
          backgroundColor: '#F5F0E1',
          color: '#2C3328',
          fontFamily: 'var(--font-poppins), -apple-system, BlinkMacSystemFont, sans-serif',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AppProviders>
          <AppHeader />
          <main style={{ flex: 1 }}>{children}</main>
          <AppFooter />
        </AppProviders>
      </body>
    </html>
  );
}
```

---

### Perbaikan 2: Konfigurasi Image & Font di `next.config.mjs`
**Lokasi File:** `next.config.mjs`  
**Tujuan:** Menghapus `optimizeFonts: false` dan mengaktifkan kompresi format gambar modern (AVIF dan WebP).

#### Sebelum:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
};

export default nextConfig;
```

#### Sesudah:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
};

export default nextConfig;
```

---

### Perbaikan 3: Kontras Warna & Heading Order di `src/app/page.tsx`
**Lokasi File:** `src/app/page.tsx`  
**Tujuan:**
1. Memenuhi standar WCAG AA (rasio kontras minimal 4.5:1 untuk teks normal).
2. Memperbaiki urutan heading agar tidak melompati tingkat hirarki (dari `h2` ke `h3`, bukan langsung ke `h4`).

#### 3.1 Kontras Warna Subtitle
Cari elemen subtitle dengan warna `#6B7365` dan ubah menjadi `#4E5549`:
```tsx
// Sebelum:
<Text fz={{ base: 'md', sm: 'lg' }} c="#6B7365" maw={600} mx="auto" mt="xs">
  Komitmen kami menjaga kemurnian rasa dari tanah Priangan hingga ke setiap seduhan...
</Text>

// Sesudah:
<Text fz={{ base: 'md', sm: 'lg' }} c="#4E5549" maw={600} mx="auto" mt="xs">
  Komitmen kami menjaga kemurnian rasa dari tanah Priangan hingga ke setiap seduhan...
</Text>
```

#### 3.2 Heading Hierarchy pada Card Produk & Artikel
Ubah heading judul kartu dari `order={4}` (`<h4>`) menjadi `order={3}` (`<h3>`):
```tsx
// Pada Kartu Produk Unggulan & Artikel Blog:
// Sebelum:
<Title order={4} size="h4" ...>
  {product.name}
</Title>

// Sesudah:
<Title order={3} size="h4" ...>
  {product.name}
</Title>
```

---

### Perbaikan 4: Tambahkan Favicon untuk Menghilangkan Console Error
**Lokasi:** Folder `public/favicon.ico` atau `src/app/favicon.ico`  
**Tujuan:** Menghilangkan error browser `404 Not Found` yang menurunkan skor Best Practices.

Cukup letakkan file `favicon.ico` ke dalam folder `public/` atau `src/app/`.

---

### Perbaikan 5: Tambahkan `sizes` pada Hero Image
**Lokasi File:** `src/app/page.tsx` (baris ~105)  
**Tujuan:** Memberikan petunjuk kepada browser untuk memilih ukuran gambar yang tepat sesuai viewport, mempercepat LCP.

#### Sebelum:
```tsx
<Image
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&h=800&q=80"
  alt="Perkebunan Teh Nusantara Lembang Jawa Barat"
  fill
  priority
  style={{
    objectFit: 'cover',
    opacity: 0.42,
  }}
/>
```

#### Sesudah:
```tsx
<Image
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&h=800&q=80"
  alt="Perkebunan Teh Nusantara Lembang Jawa Barat"
  fill
  priority
  sizes="100vw"
  style={{
    objectFit: 'cover',
    opacity: 0.42,
  }}
/>
```

---

### Perbaikan 6: Optimasi Arsitektur Client vs Server Component
**Lokasi File:** `src/app/page.tsx`  
**Tujuan:** Menurunkan `Total Blocking Time (TBT)` dan `Unused JavaScript`.

Saat ini `src/app/page.tsx` memiliki direktif `'use client'` di baris paling atas, yang menyebabkan seluruh halaman (870+ baris) beserta library animasi di-bundle ke browser:
- **Rekomendasi:** Lepas `'use client'` dari `src/app/page.tsx` agar halaman utama menjadi **Server Component**.
- Bagian yang membutuhkan state client (seperti Form Newsletter pada section bawah) dipisahkan ke dalam komponen terisolasi: `src/features/home/components/newsletter-form.tsx` yang memiliki `'use client'`.

---

## 5. Catatan Mengenai Audit di Mode Development vs Production

> [!NOTE]
> Audit di atas dijalankan pada server pengembangan (`next dev`). 
> Server dev Next.js secara sengaja menyertakan:
> 1. Source maps lengkap yang tidak di-minify
> 2. React DevTools & Hot Module Replacement (HMR) runtime overhead
> 3. Dynamic compilation on-the-fly untuk asset dan gambar
>
> **Langkah Pengujian yang Direkomendasikan untuk Hasil Riil:**
> Jalankan audit pada production build:
> ```bash
> npm run build
> npm run start
> ```
> Lalu jalankan audit PageSpeed pada port produksi tersebut. Skor Performance biasanya melonjak drastis (dari 20-an menjadi 85–95+) karena Next.js secara otomatis melakukan minification, tree-shaking, code splitting, dan static page generation.

---

## 6. Checklist Verifikasi Setelah Perbaikan

Setelah menerapkan rekomendasi di atas:
- [ ] `npm run build` berhasil tanpa error TypeScript / Linting
- [ ] Jalankan audit Lighthouse ulang:
  - [ ] Skor **Accessibility** mencapai 100
  - [ ] Skor **Best Practices** mencapai 100
  - [ ] Skor **SEO** tetap 100
  - [ ] Render-blocking font hilang dari daftar audit Performance
  - [ ] Tidak ada error 404 pada browser console

