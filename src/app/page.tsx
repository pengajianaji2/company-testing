import React from 'react';
import type { Metadata } from 'next';
import { Box } from '@mantine/core';
import { productsData } from '@/data/products';
import { articlesData } from '@/data/articles';
import {
  HeroSection,
  BentoFeatures,
  FeaturedProducts,
  AboutSummary,
  TeaCategories,
  TestimonialsSection,
  LatestArticles,
  NewsletterSection,
} from '@/features/home/components';

export const metadata: Metadata = {
  title: 'Teh Nusantara | Teh Premium dari Kebun Indonesia',
  description:
    'Secangkir ketenangan dari kebun Jawa Barat. Menghadirkan teh hitam, hijau, melati, dan herbal pilihan langsung dari petani lokal.',
};

/**
 * Standard Kepatuhan Aksesibilitas WCAG AA:
 * - Warna teks sekunder: #4E5549 (kontras > 5.5:1 terhadap latar krem #F5F0E1)
 * - Hirarki heading kartu produk & artikel menggunakan order={3} (h3 semantik)
 */

export default function HomePage() {
  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 4);
  const latestArticles = articlesData.slice(0, 3);

  return (
    <Box>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Bento Grid Keunggulan */}
      <BentoFeatures />

      {/* 3. Produk Unggulan */}
      <FeaturedProducts products={featuredProducts} />

      {/* 4. Cerita Kemitraan Petani */}
      <AboutSummary />

      {/* 5. Kategori Teh */}
      <TeaCategories />

      {/* 6. Testimoni Pelanggan */}
      <TestimonialsSection />

      {/* 7. Artikel & Edukasi Terbaru */}
      <LatestArticles articles={latestArticles} />

      {/* 8. Newsletter Kebun */}
      <NewsletterSection />
    </Box>
  );
}
