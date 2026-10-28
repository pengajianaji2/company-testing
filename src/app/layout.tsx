import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import React from 'react';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { ColorSchemeScript } from '@mantine/core';
import { AppProviders } from '@/components/providers/app-providers';
import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Teh Nusantara | Teh Premium dari Kebun Indonesia',
  description:
    'Teh hitam, hijau, melati, dan herbal pilihan dari petani lokal Jawa Barat. Menghadirkan cita rasa teh terbaik dari kebun ke cangkir.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  keywords: [
    'Teh Nusantara',
    'Teh Jawa Barat',
    'Teh Hitam Priangan',
    'Teh Hijau Puntang',
    'Teh Melati',
    'Gift Set Teh',
    'Teh Organik',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable}`}
        style={{
          margin: 0,
          backgroundColor: '#F5F0E1',
          color: '#2C3328',
          fontFamily: 'var(--font-poppins), -apple-system, BlinkMacSystemFont, sans-serif',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AppProviders>
          <AppHeader />
          <main style={{ flex: 1 }}>{children}</main>
          <AppFooter />
        </AppProviders>
      </body>
    </html>
  );
}
