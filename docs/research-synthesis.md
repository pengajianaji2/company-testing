# Sintesis Cerita: Teh Nusantara

> Dokumen bukti untuk skill `research-to-prd`. Disimpan sebagai `docs/research-synthesis.md`.
> Aturan: HANYA memakai cerita user. Jika sesuatu tidak ada di cerita, tulis "tidak ada di cerita".

### Problem Statement
Calon pembeli, pecinta teh, dan calon mitra membutuhkan website frontend resmi yang elegan, cepat, dan kredibel untuk mengenal keaslian teh Jawa Barat dari Teh Nusantara, menjelajahi katalog produk lengkap (karakteristik rasa, kemasan, panduan seduh, harga), membaca artikel jurnal edukasi, serta melakukan pemesanan langsung via WhatsApp dan mengirim pesan kontak.

### Personas
| Persona (label peran) | Tujuan | Friksi utama | Sumber |
|---|---|---|---|
| **Pecinta Teh & Pembeli Retail** | Menemukan teh lokal berkualitas, membaca profil rasa & cara seduh, serta memesan dengan cepat via WhatsApp. | Kesulitan mengetahui rasa/karakteristik teh sebelum membeli dan malas dengan alur checkout belanja yang rumit. | `[Dari cerita]` |
| **Mitra Bisnis / Calon Reseller** | Mempelajari kredibilitas bisnis, komitmen petani, sertifikasi, serta menghubungi perusahaan untuk kerja sama grosir. | Membutuhkan profil resmi perusahaan yang kredibel dan kontak langsung yang jelas. | `[Dari cerita]` |

### Pain Points (maks 5)
| # | Pain point | Bukti (kutipan / parafrase dekat dari cerita) | Siapa | Tag |
|---|---|---|---|---|
| 1 | Kebutuhan membangun reputasi merek dan transparansi kebun | *"membangun citra merek yang profesional, memperkenalkan produk... dari kebun hingga cangkir... dipetik langsung oleh petani lokal"* | Perusahaan & Pelanggan | `[Dari cerita]` |
| 2 | Kebutuhan informasi katalog produk, rasa, kemasan, harga, dan seduhan | *"katalog produk teh... kemasan kedap udara... cara menyeduh, catatan rasa"* | Pecinta Teh | `[Dari cerita]` |
| 3 | Pemesanan cepat tanpa checkout e-commerce | *"Pengunjung dapat memesan produk melalui WhatsApp... tanpa fitur admin"* | Pecinta Teh / Pembeli | `[Dari cerita]` |
| 4 | Kanal pertanyaan & form kerja sama tervalidasi | *"menghubungi perusahaan lewat form kontak... validasi Zod... dibalas dalam 1 x 24 jam"* | Pengunjung & Mitra | `[Dari cerita]` |
| 5 | Akses bacaan seputar dunia teh yang rapi | *"artikel seputar dunia teh... tips seduh, cerita petani, dan resep"* | Pembaca & Komunitas Teh | `[Dari cerita]` |

### Pertentangan dalam Cerita
*(Tidak ditemukan pertentangan; seluruh kebutuhan konten, visual, dan arsitektur data lokal konsisten).*

### Belum Diketahui / Perlu Dikonfirmasi
| # | Hal yang belum jelas | Kenapa penting | Status |
|---|---|---|---|
| 1 | Penanganan form kontak & newsletter | Menentukan arsitektur interaksi form | Selesai (Divalidasi client-side Zod dengan feedback UI langsung; backend terpisah nanti) |
| 2 | Scope arsitektur proyek | Menentukan struktur proyek awal | Selesai (Standalone Next.js App Router dengan feature-based structure) |

### ✅ Cek sebelum lanjut
- [x] Setiap pain point punya bukti dari cerita
- [x] Semua hal yang disimpulkan diberi tag
- [x] Tidak ada ide fitur di dokumen ini

