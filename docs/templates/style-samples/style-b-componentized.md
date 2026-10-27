# Contoh gaya B: "Componentized"

> Contoh gaya satu developer. Pakai ini HANYA kalau kamu tidak punya kode sendiri.
> Lebih baik: tempel satu halaman atau komponen dari final project-mu sendiri.

**Convention di gaya ini**
- Halaman hanya menyusun; bagian UI tinggal di `app/<route>/_components/`
- Komponen berupa `const Xxx = ({ ... }: XxxProps) => { ... }` dengan `type XxxProps` yang di-export
- Named export untuk komponen, default export hanya untuk halaman
- HTML semantik: `<section aria-labelledby="...">`, `<ul>` untuk daftar
- Helper formatting datang dari `lib/` (jangan pernah format tanggal/waktu di dalam JSX)
- Tidak ada komentar yang cuma mengulang kode

```tsx
// app/faq/_components/FaqItem.tsx
export type FaqItemProps = { question: string; answer: string };

export const FaqItem = ({ question, answer }: FaqItemProps) => (
  <li className="card">
    <h3>{question}</h3>
    <p>{answer}</p>
  </li>
);
```

```tsx
// app/faq/page.tsx
import { OPEN_HOUR, CLOSE_HOUR } from "@/lib/config";
import { hourLabel } from "@/lib/time";
import { FaqItem } from "./_components/FaqItem";

const items = [
  { question: "Berapa lama satu booking?", answer: "Tepat satu jam." },
  { question: "Bisa bayar online?", answer: "Belum bisa. Bayar cash atau transfer di front desk." },
];

const FaqPage = () => (
  <section aria-labelledby="faq-title">
    <h1 id="faq-title">Pertanyaan yang sering ditanyakan</h1>
    <p>
      Buka setiap hari, {hourLabel(OPEN_HOUR)}–{hourLabel(CLOSE_HOUR)} WIB.
    </p>
    <ul>
      {items.map((item) => (
        <FaqItem key={item.question} {...item} />
      ))}
    </ul>
  </section>
);

export default FaqPage;
```
