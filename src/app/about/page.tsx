import React from 'react';
import type { Metadata } from 'next';
import { Box, rem } from '@mantine/core';
import {
  AboutHero,
  AboutStory,
  VisionMission,
  CompanyTimeline,
  TeamSection,
  PartnershipCert,
} from '@/features/about/components';

export const metadata: Metadata = {
  title: 'Tentang Kami | Teh Nusantara',
  description:
    'Mengenal kisah berdirinya Teh Nusantara, komitmen petani lokal Jawa Barat, visi misi, timeline sejarah, dan profil tim kami.',
};

export default function AboutPage() {
  return (
    <Box py={rem(48)}>
      {/* 1. Hero Banner */}
      <AboutHero />

      {/* 2. Cerita Kami */}
      <AboutStory />

      {/* 3. Visi & Misi */}
      <VisionMission />

      {/* 4. Timeline Sejarah */}
      <CompanyTimeline />

      {/* 5. Tim Kami (Struktur Piramida 1 + 3) */}
      <TeamSection />

      {/* 6. Mitra Petani & Sertifikasi */}
      <PartnershipCert />
    </Box>
  );
}
