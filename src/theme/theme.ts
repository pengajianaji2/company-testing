import { createTheme, MantineColorsTuple } from '@mantine/core';

// Palet Hijau Daun (#4A6B3A sebagai warna utama / primary[6])
const primaryGreen: MantineColorsTuple = [
  '#f1f7ed',
  '#e2ecd9',
  '#c4d9b4',
  '#a5c68b',
  '#89b366',
  '#689940',
  '#4A6B3A',
  '#3d582f',
  '#2f4424',
  '#203019',
];

// Palet Cokelat Teh (#6B4423 sebagai secondary / teaBrown[6])
const teaBrown: MantineColorsTuple = [
  '#f8f2ec',
  '#eee3d8',
  '#ddc6b1',
  '#cca988',
  '#bd8d60',
  '#995f32',
  '#6B4423',
  '#56361c',
  '#412915',
  '#2c1b0e',
];

// Palet Krem Alami (#F5F0E1)
const cream: MantineColorsTuple = [
  '#fdfcf9',
  '#F5F0E1',
  '#ece3cd',
  '#e2d6b7',
  '#d9c9a0',
  '#cfbc8a',
  '#bfa76f',
  '#a99056',
  '#8d7847',
  '#716037',
];

export const theme = createTheme({
  colors: {
    primaryGreen,
    teaBrown,
    cream,
  },
  primaryColor: 'primaryGreen',
  primaryShade: 6,
  fontFamily: 'var(--font-poppins), sans-serif',
  headings: {
    fontFamily: 'var(--font-playfair), Georgia, serif',
    sizes: {
      h1: { fontSize: '2.75rem', lineHeight: '1.2', fontWeight: '700' },
      h2: { fontSize: '2.125rem', lineHeight: '1.3', fontWeight: '600' },
      h3: { fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '600' },
      h4: { fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600' },
    },
  },
  defaultRadius: 'md',
  cursorType: 'pointer',
});

