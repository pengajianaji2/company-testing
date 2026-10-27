# Katalog Worst Case

> Dipakai skill `generate-postman-collection`. Pilih hanya kategori yang **relevan** dengan endpoint (lihat kolom "Berlaku bila").
> Setiap request worst case wajib punya dua assertion: **status yang diharapkan** (atau rentang `4xx` bila tidak pasti, tandai `[Asumsi]`)
> dan **"tidak boleh 5xx"**. Respons 5xx berarti API gagal menangani input dengan baik = temuan bug.
>
> Ini uji validasi & ketahanan input, **bukan serangan**: tanpa brute force, tanpa beban/DoS, tanpa payload merusak.

## 1. Autentikasi & otorisasi

| Kasus | Cara | Ekspektasi umum | Berlaku bila |
|---|---|---|---|
| Tanpa token | Auth request = `noauth` | 401 | Endpoint terproteksi |
| Token sampah | `Authorization: Bearer invalid.token.value` | 401 | Endpoint terproteksi |
| Skema auth salah | `Authorization: Basic abc` / tanpa kata `Bearer` | 401 | Endpoint terproteksi |
| Peran tidak cukup | Token user biasa ke endpoint admin | 403 | Ada role/guard |
| Mengakses milik orang lain | Token user A ke resource milik user B | 403 atau 404 | Resource per-pemilik |
| Login salah | Password salah / email tidak terdaftar | 401 (jangan membedakan pesan) | Ada login |

## 2. Validasi body

| Kasus | Contoh | Ekspektasi umum | Berlaku bila |
|---|---|---|---|
| Body kosong | `{}` | 400/422 | Ada body wajib |
| Tanpa body | (tidak ada body) | 400/415/422 | Ada body wajib |
| Field wajib hilang | hapus satu field wajib (satu request per field penting) | 400/422 | |
| Tipe salah | angka di field string, string di field angka, array di field objek | 400/422 | |
| `null` pada field wajib | `{"name": null}` | 400/422 | |
| Format salah | email tanpa `@`, tanggal `31-31-2025`, UUID acak salah format | 400/422 | Ada field berformat |
| Nilai di luar enum | `{"status": "bukan-enum"}` | 400/422 | Ada enum |
| JSON rusak | raw body `{"name": ` dengan Content-Type JSON | 400 | Endpoint menerima JSON |
| Content-Type salah | kirim teks biasa ke endpoint JSON | 400/415 | |
| Field tak dikenal / mass assignment | tambahkan `"role":"admin"`, `"id":"x"`, `"isAdmin":true` | Field diabaikan atau 400; **tidak boleh** berhasil mengubah hak | Ada pembuatan/ubah resource |

## 3. Batas nilai (boundary)

| Kasus | Contoh | Ekspektasi umum | Berlaku bila |
|---|---|---|---|
| String terlalu pendek | `""` atau di bawah `min` | 400/422 | Ada `min length` |
| String terlalu panjang | `max + 1` karakter | 400/422 | Ada `max length` |
| Angka di bawah/atas batas | `-1`, `0`, `max + 1` | 400/422 | Ada `min/max` |
| String berisi karakter khusus | `<script>alert(1)</script>`, `' OR '1'='1`, emoji, karakter Unicode, `\u0000` | Diterima sebagai data atau 400; **bukan 5xx** | Field teks bebas |
| Spasi saja | `"   "` | 400/422 (jika field wajib) | Field teks wajib |

## 4. Parameter path & query

| Kasus | Contoh | Ekspektasi umum | Berlaku bila |
|---|---|---|---|
| ID tidak ada | UUID/angka acak yang valid formatnya | 404 | Ada `/:id` |
| ID format salah | `abc`, `-1`, `0`, `99999999999999999999` | 400/404 | Ada `/:id` |
| Pagination liar | `page=-1`, `page=0`, `limit=0`, `limit=100000`, `limit=abc` | 400, atau nilai dikoreksi; **bukan 5xx** | Ada list berhalaman |
| Sort/filter liar | `sort=kolom_tidak_ada`, `filter[x]=y` | 400 atau diabaikan | Ada filter/sort |

## 5. Keadaan resource & metode

| Kasus | Cara | Ekspektasi umum | Berlaku bila |
|---|---|---|---|
| Duplikat | Buat resource unik dua kali (email/slug sama) | 409 (atau 400/422) | Ada constraint unik |
| Hapus dua kali | `DELETE` id yang sama lagi (di folder Cleanup) | 404 | Ada delete |
| Akses setelah hapus | `GET` id yang baru dihapus | 404 | Ada delete |
| Ubah resource tidak ada | `PUT/PATCH` ke id acak | 404 | Ada update |
| Metode tidak diizinkan | `PATCH`/`DELETE` ke endpoint yang tidak mendukungnya | 404/405 | |

## 6. Aturan penulisan test worst case

- Nama request: `[WC] <Resource> - <kasus singkat>` (misal `[WC] Items - nama lebih dari 50 karakter`).
- Jika kode menegaskan status (misal validator melempar 422), pakai status itu. Jika tidak, pakai `4xx` dan tulis `[Asumsi]` di deskripsi.
- Request worst case yang butuh resource valid memakai id dari Happy Path (`{{itemId}}`), tapi **tidak mengubah state** yang dibutuhkan test lain.
- Satu request = satu kasus. Jangan menggabungkan beberapa kesalahan dalam satu body kecuali kasusnya memang "banyak field salah".
- Batasi jumlah: utamakan kasus yang paling mungkin menemukan bug. Untuk body dengan banyak field, uji field wajib yang paling penting
  dan satu kasus "semua salah"; jangan menghasilkan kombinasi ratusan request.
