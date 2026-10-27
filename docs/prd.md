# PRD: Teh Nusantara — Company Profile Website (Frontend MVP)

> Spesifikasi produk untuk skill `research-to-prd`. Disimpan sebagai `docs/prd.md`.

## 1. Problem
Pelanggan, pecinta teh, dan mitra bisnis membutuhkan website resmi Teh Nusantara yang kredibel, responsif, dan estetik untuk mempelajari profil perusahaan dan asal kebun teh Jawa Barat, mengeksplorasi katalog produk lengkap beserta panduan seduh, membaca jurnal artikel edukasi teh, serta melakukan pemesanan langsung via WhatsApp tanpa alur belanja e-commerce yang rumit.

## 2. Goals
- Menampilkan profil perusahaan, komitmen petani lokal, timeline sejarah, dan proses produksi dari kebun ke cangkir.
- Menyajikan katalog produk teh terstruktur dengan filter kategori, pencarian, detail rasa, panduan seduh, dan pemesanan WhatsApp otomatis.
- Menyediakan publikasi jurnal artikel teh dengan filter kategori, pagination, dan fitur bagikan tautan.
- Menyediakan kanal kontak tervalidasi (Zod), informasi operasional lengkap, FAQ interaktif, serta formulir newsletter.

## 3. Non-goals (Secara eksplisit TIDAK ada di versi ini)
- Sistem otentikasi pengguna, login admin, dan dashboard CMS (konten dikelola via file data lokal).
- Sistem transaksi checkout e-commerce internal dan payment gateway otomatis (seluruh pembelian via WhatsApp).
- Penyimpanan database backend persisten di server (backend akan dibuat di proyek terpisah).
- Mode gelap (*Dark Mode*) dan animasi dekoratif yang tidak mendukung esensi konten.

## 4. Personas
- **Pecinta Teh & Pembeli Retail:** Ingin menemukan jenis teh yang cocok, membaca profil rasa dan panduan seduh, serta memesan dengan praktis lewat WhatsApp. [Dari cerita]
- **Mitra Bisnis / Calon Reseller:** Ingin mengecek kredibilitas perusahaan, komitmen ramah lingkungan, sertifikasi, serta mengajukan kontak kerja sama. [Dari cerita]

## 5. User Stories (4 Core Stories — Must Have)
| ID | As a… | I want to… | So that… | Priority |
|---|---|---|---|---|
| **US-1** | Pengunjung website | Menjelajahi halaman Beranda, Tentang Kami, Proses & Kebun, serta melihat halaman 404 jika tersesat | Saya memahami identitas brand Teh Nusantara, nilai kemitraan petani, dan alur produksinya secara utuh | Must |
| **US-2** | Calon pembeli teh | Melihat katalog produk dengan filter kategori, pencarian kata kunci, serta membuka halaman detail produk | Saya dapat memilih varian teh yang diinginkan dan langsung memesan via WhatsApp dengan pesan otomatis | Must |
| **US-3** | Pembaca / pecinta teh | Membaca daftar artikel jurnal teh, memfilter kategori, navigasi pagination, dan membuka detail artikel | Saya mendapatkan edukasi seputar tips seduh, resep, dan wawasan teh serta dapat membagikannya | Must |
| **US-4** | Pengunjung & calon mitra | Mengirim pesan melalui formulir kontak tervalidasi, membaca FAQ, melihat info operasional, dan berlangganan newsletter | Pertanyaan, kebutuhan kerja sama, atau langganan email saya tersampaikan dengan mudah | Must |

## 6. Acceptance Criteria (Format: Given / When / Then)
| ID | Story | Given | When | Then |
|---|---|---|---|---|
| **AC-1** | US-1 | Pengunjung membuka website di desktop atau mobile | Mengakses rute `/`, `/about`, atau `/process` | Menampilkan konten sesuai halaman (Hero, Nilai Brand, Timeline, Alur 6 Langkah Pembuatan, Galeri Kebun) dengan header dan footer konsisten |
| **AC-2** | US-1 | Pengunjung memasukkan URL yang tidak valid | Halaman memuat rute tidak dikenal | Sistem menampilkan halaman 404 bernuansa kebun teh ("Ups, Halaman Tidak Ditemukan") dan tombol kembali ke Beranda |
| **AC-3** | US-2 | Pengunjung berada di halaman `/products` | Memilih tombol filter kategori atau mengetik kata kunci di kolom pencarian | Daftar produk langsung tersaring secara reaktif sesuai kategori dan kata kunci yang cocok |
| **AC-4** | US-2 | Pengunjung melihat kartu produk atau halaman detail `/products/[slug]` | Menekan tombol "Pesan via WhatsApp" | Browser membuka tautan WhatsApp resmi (`0812-3456-7890`) dengan format pesan otomatis: `"Halo Teh Nusantara, saya tertarik memesan [nama produk]. Apakah stoknya tersedia?"` |
| **AC-5** | US-2 | Pengunjung membuka rute detail produk `/products/[slug]` | Halaman detail termuat | Menampilkan foto, asal kebun, catatan rasa, panduan seduh, pilihan kemasan/harga, serta rekomendasi produk terkait |
| **AC-6** | US-3 | Pengunjung berada di halaman `/blog` | Memilih kategori filter atau berpindah nomor halaman pagination | Daftar artikel menampilkan maksimal 6 artikel per halaman sesuai filter kategori yang dipilih |
| **AC-7** | US-3 | Pengunjung membaca detail artikel di `/blog/[slug]` | Menekan tombol bagikan (WhatsApp, Facebook, atau Salin Tautan) | Tautan artikel dibuka di media terkait atau tersalin ke clipboard dengan feedback visual bahwa link berhasil disalin |
| **AC-8** | US-4 | Pengunjung mengisi formulir di halaman `/contact` | Menginput data yang tidak valid (nama < 3 karakter, email salah format, atau pesan < 10 karakter) lalu menekan "Kirim Pesan" | Form menolak pengiriman dan menampilkan pesan error validasi Zod tepat di bawah field yang bermasalah |
| **AC-9** | US-4 | Pengunjung mengisi formulir kontak dengan data valid | Menekan tombol "Kirim Pesan" | Form menampilkan pesan sukses *"Terima kasih! Pesanmu sudah kami terima dan akan dibalas dalam 1 x 24 jam."* dan field formulir di-reset |
| **AC-10** | US-4 | Pengunjung berada di Beranda (newsletter) atau Kontak (FAQ) | Mengisi email valid untuk newsletter atau mengklik pertanyaan FAQ | Input newsletter memberikan feedback konfirmasi langganan, dan akordeon FAQ membuka/menutup jawaban dengan mulus |

## 7. Out of Scope / Rencana Nanti
| Fitur | Sumber Alasan | Kenapa Ditunda |
|---|---|---|
| Backend API & Database Persisten | Revisi kesepakatan scope | Backend akan dibangun di project terpisah di masa mendatang |
| Admin CMS & Dashboard Pengelolaan Data | Dokumen brief | Konten produk & blog dikelola langsung melalui file data lokal |
| E-Commerce Cart & Payment Gateway | Dokumen brief | Pemesanan dilakukan direct-order via WhatsApp |

## 8. Open Questions
*Tidak ada pertanyaan terbuka yang memblokir. Seluruh kebutuhan fungsional dan data lokal telah terdefinisi secara lengkap.*

---
### ✅ Checklist Evaluasi PRD
- [x] Maksimal 4 User Story, seluruhnya berstatus "Must"
- [x] Minimal 6 Acceptance Criteria spesifik (10 AC terdefinisi)
- [x] Fitur kompleks yang tidak esensial sudah masuk Non-goals
- [x] Setiap AC bisa ditelusuri ke User Story induknya
- [x] Tidak ada fakta karangan: semua item berasal dari cerita
- [x] Open Questions terisi
- [x] Tidak ada keputusan teknologi di dokumen ini

