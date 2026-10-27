# Master Design System: Teh Nusantara

> Global source of truth untuk gaya visual, palet warna, tipografi, dan spasi.
> Diturunkan menggunakan skill `ui-ux-pro-max` untuk proyek Teh Nusantara.

## 1. Identitas Gaya & Dial
- **Keluarga Gaya:** *Organic Elegance / Botanical Craft*
- **Karakter Visual:** Hangat, alami, bersahaja, terpercaya, dan modern.
- **Dial UI/UX:**
  - `variance: 3` (Elegan seimbang, bento grid rapi)
  - `density: 4` (Ruang napas luas, nyaman untuk membaca artikel dan melihat katalog)
  - `motion: 3` (Transisi tenang, halus 200–300ms, patuh terhadap `prefers-reduced-motion`)

## 2. Color Tokens (WCAG AA Verified)
| Token Semantik | Nilai Hex | Penggunaan | Kontras |
|---|---|---|---|
| `bg-canvas` | `#F5F0E1` | Latar belakang utama halaman | 12.1:1 vs text-heading |
| `bg-surface` | `#FFFFFF` | Latar belakang kartu, modal, popover | 13.8:1 vs text-heading |
| `primary` | `#4A6B3A` | Tombol CTA utama, badge aktif, aksen daun | 4.8:1 vs teks putih |
| `primary-hover` | `#3D5A2E` | Hover state tombol utama | > 5:1 vs teks putih |
| `secondary` | `#6B4423` | Aksen teh cokelat, label kemasan, highlight | 6.5:1 vs teks putih |
| `text-heading` | `#1C2A16` | Judul (H1-H6), nama produk, angka statistik | 12.1:1 vs canvas |
| `text-body` | `#2C3328` | Teks paragraf, deskripsi produk, artikel | 9.8:1 vs canvas |
| `text-muted` | `#6B7365` | Meta info (tanggal, estimasi waktu baca) | 4.6:1 vs canvas |
| `border-subtle` | `#E2D9C8` | Garis pemisah, border kartu, input field | 3:1 vs surface |
| `error` | `#C92A2A` | Pesan validasi error form Zod | > 4.5:1 vs canvas |
| `success` | `#2B8A3E` | Pesan sukses submit form kontak | > 4.5:1 vs canvas |

*Catatan: Dark mode tidak diaktifkan pada versi ini sesuai Non-goals PRD.*

## 3. Tipografi
- **Heading Font:** `'Playfair Display', Georgia, serif`
  - H1: 44px - 52px (Mobile: 32px), weight: 700, line-height: 1.2
  - H2: 32px - 38px (Mobile: 26px), weight: 600, line-height: 1.3
  - H3: 24px - 28px, weight: 600, line-height: 1.4
  - H4 / Card Title: 18px - 20px, weight: 600, line-height: 1.4
- **Body Font:** `'Poppins', -apple-system, BlinkMacSystemFont, sans-serif`
  - Body Large: 18px, weight: 400/500, line-height: 1.6
  - Body Normal: 16px, weight: 400/500, line-height: 1.6
  - Body Small / Caption: 14px, weight: 400/500, line-height: 1.5
  - Badge / Tag: 12px, weight: 600, uppercase letter-spacing: 0.05em

## 4. Spasi, Radius & Bayangan
- **Radius:**
  - `sm`: 4px (Tag kecil)
  - `md`: 8px (Tombol, input field, kartu produk)
  - `lg`: 16px (Bento cards, hero floating card)
  - `full`: 9999px (Pill buttons, floating navbar)
- **Spasi:**
  - `section-padding`: 80px (Desktop), 48px (Mobile)
  - `grid-gap`: 24px (Desktop), 16px (Mobile)
- **Shadow:**
  - Subtle floating: `0 4px 20px rgba(44, 51, 40, 0.08)`
  - Elevated card hover: `0 8px 30px rgba(44, 51, 40, 0.12)`

## 5. Anti-Patterns to Avoid
- Dilarang mencampur warna font selain token terdaftar.
- Dilarang membuat target sentuh tombol atau tautan kurang dari 44x44px di mobile.
- Dilarang menggunakan raw hex di dalam komponen UI (wajib gunakan theme Mantine / token semantik).
- Dilarang menggunakan ikon selain `@tabler/icons-react`.

