# Contoh gaya A: "Compact"

> Contoh gaya satu developer. Pakai ini HANYA kalau kamu tidak punya kode sendiri.
> Lebih baik: tempel satu halaman atau komponen dari final project-mu sendiri.

**Convention di gaya ini**
- Satu file per halaman; tidak ada komponen terpisah kecuali dipakai ulang 3+ kali
- `export default async function XxxPage()` (function declaration)
- Data datang dari `lib/` dan dibaca di bagian atas komponen
- Konstanta pakai UPPER_SNAKE_CASE di bagian atas file
- Styling pakai class yang sudah ada di `app/globals.css` (`card`); tanpa inline style
- Komentar singkat hanya di tempat "kenapa"-nya tidak jelas

```tsx
// app/faq/page.tsx
import { OPEN_HOUR, CLOSE_HOUR } from "@/lib/config";
import { hourLabel } from "@/lib/time";

const FAQ_ITEMS = [
  { q: "Berapa lama satu booking?", a: "Tepat satu jam." },
  { q: "Bisa bayar online?", a: "Belum bisa. Bayar cash atau transfer di front desk." },
];

export default async function FaqPage() {
  const hours = `${hourLabel(OPEN_HOUR)}–${hourLabel(CLOSE_HOUR)} WIB`;

  return (
    <>
      <h1>Pertanyaan yang sering ditanyakan</h1>
      <p>Buka setiap hari, {hours}.</p>
      {FAQ_ITEMS.map((item) => (
        <div key={item.q} className="card">
          <h2>{item.q}</h2>
          <p>{item.a}</p>
        </div>
      ))}
    </>
  );
}
```
