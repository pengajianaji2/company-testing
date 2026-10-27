# Code Conventions & Project Preferences: Teh Nusantara

> Disinkronkan dari `docs/project-config.md`.
> Menjadi panduan utama untuk skill `code-development`, `write-tests`, `review-code`, dan `generate-commit`.

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
│   ├── page.tsx                # Beranda
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
### Preset: Style B (Componentized / Layered)
- Komponen UI terpisah dan modular di `src/components/` atau `src/features/<feature>/components/`.
- Logic fetching menggunakan TanStack Query custom hooks di `src/features/<feature>/hooks/`.
- State UI interaktif (pencarian, filter aktif, drawer navigasi) dikelola via Zustand store di `src/stores/`.
- Schema input form divalidasi dengan Zod di `src/features/<feature>/schemas/`.
- Penamaan file kebab-case, types/interfaces PascalCase, variabel/fungsi camelCase.
- Import path menggunakan alias `@/*`.
- Komponen UI dibangun menggunakan komponen Mantine UI v7 (`Container`, `Grid`, `Card`, `Text`, `Title`, `Button`, `Badge`, `TextInput`, `Textarea`, `Modal`, `Drawer`, dll.).

---

## 4. Alur Kerja Pembangunan (Preferred Build Flow)
- Urutan kerja per User Story:
  1. Definisi model data & mock di `src/data/` dan `src/types/`.
  2. Implementasi komponen UI dan interaksi dengan Mantine UI + Framer Motion.
  3. Integrasi state dengan TanStack Query dan Zustand.
  4. Pengujian verifikasi Acceptance Criteria dengan Vitest.

---

## 5. Konvensi Commit & Git
- Conventional Commits: `feat:`, `fix:`, `style:`, `test:`, `docs:`, `chore:`.
- Branch per User Story: `feat/us-<N>-<slug>`.
- Commit, branch switch, dan push dijalankan oleh **manusia**.
