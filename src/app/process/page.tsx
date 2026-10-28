import React from 'react';
import type { Metadata } from 'next';
import { Box, rem } from '@mantine/core';
import {
  ProcessHero,
  ProcessSteps,
  GardenGallery,
  CommitmentSection,
} from '@/features/process/components';

export const metadata: Metadata = {
  title: 'Proses & Kebun | Teh Nusantara',
  description:
    'Eksplorasi alur produksi 5 langkah pembuatan teh berkualitas dari kebun ke cangkir, serta dokumentasi galeri lanskap pegunungan Jawa Barat.',
};

export default function ProcessPage() {
  return (
    <Box py={rem(48)}>
      {/* 1. Hero Banner */}
      <ProcessHero />

      {/* 2. Alur 5 Tahap Produksi */}
      <ProcessSteps />

      {/* 3. Galeri Kebun Nusantara */}
      <GardenGallery />

      {/* 4. Komitmen Kami */}
      <CommitmentSection />
    </Box>
  );
}
