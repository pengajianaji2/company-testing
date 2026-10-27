import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import React from 'react';
import type { Metadata } from 'next';
import { ColorSchemeScript } from '@mantine/core';
import { AppProviders } from '@/components/providers/app-providers';
import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';

export const metadata: Metadata = {
  title: 'Teh Nusantara | Teh Premium dari Kebun Indonesia',
  description:
    'Teh hitam, hijau, melati, dan herbal pilihan dari petani lokal Jawa Barat. Menghadirkan cita rasa teh terbaik dari kebun ke cangkir.',
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
    <html lang="id">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          backgroundColor: '#F5F0E1',
          color: '#2C3328',
          fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // @ts-expect-error CSS variables defined for font inheritance
          '--font-playfair': "'Playfair Display', Georgia, serif",
          '--font-poppins': "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
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

