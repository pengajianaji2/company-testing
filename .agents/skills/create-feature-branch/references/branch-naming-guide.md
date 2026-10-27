# Panduan Penamaan Branch

> Dipakai skill `create-feature-branch`. Jika `code-conventions.md` menetapkan pola lain (misalnya prefix ticket),
> **pola proyek menang** atas panduan ini.

## Pola default

```
<type>/us-<N>-<slug>
```

| Bagian | Aturan |
|---|---|
| `type` | `feat` (fitur baru, **default**), `fix` (perbaikan bug), `refactor`, `docs`, `chore`, `test`. Selaras dengan Conventional Commits. |
| `us-<N>` | Nomor User Story di `docs/prd.md` (huruf kecil), misal `us-1`. |
| `slug` | Diturunkan dari **tujuan story** ("I want to…") di PRD. |

## Aturan slug

1. Huruf kecil `a-z`, angka `0-9`, dan tanda hubung `-`. Tanpa spasi, aksen, garis miring tambahan, atau titik dua.
2. 2–5 kata kunci yang menggambarkan hasil, bukan kalimat penuh. Buang kata sambung ("yang", "untuk", "the", "to").
3. Maksimal 50 karakter untuk slug; total nama branch idealnya di bawah 70 karakter.
4. Bahasa mengikuti bahasa PRD dan konsisten di seluruh proyek. Karakter harus tetap ASCII.
5. Tidak boleh diawali atau diakhiri `-`, tidak ada `--`.

## Contoh

| Story di PRD | Branch |
|---|---|
| US-1: As a pelanggan, I want to memilih slot jam booking | `feat/us-1-pilih-slot-booking` |
| US-2: As an admin, I want to melihat daftar pesanan hari ini | `feat/us-2-daftar-pesanan-harian` |
| Bug pada validasi slot bentrok di US-1 (di luar story baru) | `fix/us-1-slot-bentrok` |
| US-3: As a user, I want to export data ke CSV | `feat/us-3-export-csv` |

## Variasi konvensi proyek

| Konvensi di `code-conventions.md` | Pola branch |
|---|---|
| Conventional Commits / Plain English (default) | `<type>/us-<N>-<slug>` |
| Ticket prefix (`PROJ-123`) | `<type>/PROJ-123-<slug>` (ticket mengganti `us-<N>`; sertakan `us-<N>` di slug bila perlu) |
| Tim menetapkan pola sendiri | Ikuti pola tim persis |

## Base branch

- Default: `main`. Gunakan `master` hanya jika itu yang ada di repo, atau `develop` jika konvensi proyek memakainya.
- Satu US = satu branch yang dibuat dari base terbaru (bukan dari branch US lain), kecuali US baru memang bergantung pada
  US sebelumnya yang belum di-merge — dan hanya dengan persetujuan user.

## Perbaikan setelah review

Temuan `review-code` untuk US yang belum di-merge diperbaiki di **branch US yang sama**. Bug yang ditemukan
setelah merge memakai branch baru `fix/<slug>`.
