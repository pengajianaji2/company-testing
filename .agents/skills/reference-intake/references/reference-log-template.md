# Template Log Referensi — `docs/references/index.md`

> Ditulis `reference-intake` setelah `approve`. Menjadi jejak: dari mana gaya/tampilan berasal.
> Bukan sumber kebenaran; sumber kebenaran tetap PRD > `docs/design.md` > Master > override halaman,
> dan `docs/project-config.md` / `code-conventions.md` untuk gaya koding.

```markdown
# Referensi Proyek: [Nama Proyek]

| ID | Jenis | Tujuan | Sumber | Dipakai untuk | Tanggal | Status |
|---|---|---|---|---|---|---|
| R-1 | gambar | tampilan | lampiran chat (docs/references/login.png bila disimpan) | Halaman Login | YYYY-MM-DD | Disetujui |
| R-2 | kode | kode | src/lib/booking.ts | Golden Sample, gaya koding | YYYY-MM-DD | Disetujui |
| R-3 | URL | tampilan | https://… (dibuka: tidak, diganti screenshot R-4) | Palet & huruf | YYYY-MM-DD | Disetujui |

## Apa yang diambil dari tiap referensi
- **R-1:** layout satu kolom, tombol pill, palet hangat [Estimasi → disesuaikan agar kontras lulus]
- **R-2:** arrow function + named export, error lewat custom error, komentar hanya "kenapa"

## Yang sengaja tidak diambil
- R-1: logo dan teks merek; ikon dekoratif (di luar PRD)

## Belum terjawab
- State error halaman Login tidak terlihat di R-1 → memakai preset
```
