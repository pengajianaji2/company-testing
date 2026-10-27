# Project Configuration & Code Conventions: Teh Nusantara

> Konfigurasi proyek dan panduan standar koding untuk Teh Nusantara.
> Menjadi sumber kebenaran (source of truth) bagi seluruh skill pengembangan.

## 1. Tech Stack & Environment
- **Project Structure**: Standalone Frontend App (Feature-based structure)
- **Language & Runtime**: TypeScript 5+ (Node.js 24+)
- **Framework**: Next.js (App Router)
- **UI Library**: Mantine UI v7 (`@mantine/core`, `@mantine/hooks`, `@mantine/notifications`, `@tabler/icons-react`)
- **Animation**: Framer Motion (`framer-motion`)
- **Data & Server State**: TanStack Query (`@tanstack/react-query`)
- **Client UI State**: Zustand (`zustand`)
- **Schema Validation**: Zod (`zod`)
- **Image Handling**: `next/image` dengan aturan wajib melapor dimensi `panjang x lebar` (piksel) untuk setiap kebutuhan visual.
- **Test Runner & Tools**: Vitest
- **Package Manager & Commands**:
  - Install: `npm install`
  - Dev: `npm run dev`
  - Test: `npm test`
  - Build: `npm run build`

---

## 2. Struktur Direktori Proyek
```text
src/
├── app/                        # Next.js App Router (layout, rute, pages)
│   ├── layout.tsx              # Root layout (MantineProvider, QueryClientProvider, fonts)
│   ├── page.tsx                # Beranda (Hero, Produk Unggulan, Tentang Singkat, Kenapa Kami, Kategori, Testimoni, Artikel Terbaru, Newsletter)
│   ├── products/
│   │   ├── page.tsx            # Katalog Produk (/products)
│   │   └── [slug]/
│   │       └── page.tsx        # Detail Produk (/products/[slug])
│   ├── about/
│   │   └── page.tsx            # Tentang Kami (/about)
│   ├── process/
│   │   └── page.tsx            # Proses & Kebun (/process)
│   ├── blog/
│   │   ├── page.tsx            # Jurnal Teh (/blog)
│   │   └── [slug]/
│   │       └── page.tsx        # Detail Artikel (/blog/[slug])
│   ├── contact/
│   │   └── page.tsx            # Kontak (/contact)
│   └── not-found.tsx           # Halaman 404 Kustom
├── components/                 # Shared UI & Layout Components
│   ├── layout/                 # Header, Footer, MobileNav
│   ├── providers/              # MantineProvider, TanStack QueryProvider
│   └── motion/                 # Framer Motion animated wrappers
├── features/                   # Feature-based domain modules
│   ├── products/               # ProductCard, ProductFilter, useProducts hook
│   ├── blog/                   # BlogCard, BlogFilter, ShareButtons
│   └── contact/                # ContactForm, FAQAccordion, contactSchema
├── data/                       # Data lokal dummy
│   ├── products.ts             # Data 8 produk teh & gift set
│   ├── articles.ts             # Data 6 artikel jurnal teh
│   └── company.ts              # Data profil, timeline, tim, kebun, FAQ
├── stores/                     # Zustand stores (UI state: search, filter, drawer)
├── theme/                      # Mantine theme configuration (colors #4A6B3A, #F5F0E1, #6B4423, typography)
└── types/                      # TypeScript definitions (Product, Article, ContactForm, etc.)
```

---

## 3. Gaya Koding & Arsitektur (Code Convention)

### Preset yang Dipilih:
- **Style B (Componentized / Layered)**: Pemisahan modular antara komponen tampilan (Mantine UI), state logic (Zustand & TanStack Query), data mock (`data/`), dan schema validasi (`zod`).

### Aturan Spesifik:
- **Deklarasi Fungsi**: Arrow functions `const ComponentName = () => {}` atau standard function component.
- **Penamaan**:
  - File komponen: `kebab-case.tsx` atau `PascalCase.tsx` (konsisten kebab-case untuk file: `product-card.tsx`).
  - Variabel & Fungsi: `camelCase`
  - Types / Interfaces: `PascalCase`
  - Konstanta: `UPPER_SNAKE_CASE`
- **Type Safety**: Strict TypeScript, dilarang memakai `any`.
- **Imports**: Absolute path dengan alias `@/*` (`@/components/...`, `@/features/...`, `@/data/...`).
- **Styling**: Mantine UI style props & CSS modules/classes bila diperlukan, dengan palet kustom:
  - Hijau Daun: `#4A6B3A`
  - Krem: `#F5F0E1`
  - Cokelat Teh: `#6B4423`
- **Image Assets**: Setiap kali memerlukan gambar baru, deskripsikan kegunaan dan resolusi terukurnya (`lebar x tinggi` px).

---

## 4. Alur Kerja Pembangunan (Preferred Build Flow)
- **UI & Component-First Flow**:
  1. Setup fondasi (Providers Mantine + TanStack Query, Theme tokens, layout Header/Footer).
  2. Implementasi data mock lokal (`data/`).
  3. Pembangunan fitur per User Story (US-1 s/d US-4) secara berurutan.

---

## 5. Konvensi Commit Message & Git Workflow
- **Format Commit**: Conventional Commits (`feat:`, `fix:`, `style:`, `test:`, `docs:`, `chore:`).
- **Bahasa**: Bahasa Indonesia atau Bahasa Inggris lugas.
- **Git Workflow**:
  - Base branch: `main`
  - Pola branch per User Story: `feat/us-<N>-<slug>`
  - Commit & Push: **Dieksekusi manual oleh manusia** (agent menyiapkan pesan dan instruksi terminal).

