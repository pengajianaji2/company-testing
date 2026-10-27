'use client';

import React from 'react';
import Image from 'next/image';
import {
  Container,
  Title,
  Text,
  Badge,
  Box,
  SimpleGrid,
  Card,
  Stack,
  rem,
} from '@mantine/core';
import {
  IconLeaf,
  IconCheck,
  IconUsers,
  IconRecycle,
} from '@tabler/icons-react';
import { processSteps, gardenGallery } from '@/data/company';
import { FadeIn } from '@/components/motion/fade-in';

export default function ProcessPage() {
  return (
    <Box py={rem(48)}>
      {/* 1. HERO BANNER */}
      <Container size="lg" mb={rem(64)}>
        <FadeIn>
          <Box ta="center" maw={rem(760)} mx="auto">
            <Badge color="primaryGreen" radius="xl" size="lg" mb="sm">
              Proses & Kebun
            </Badge>
            <Title
              order={1}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                lineHeight: 1.2,
                marginBottom: rem(16),
              }}
            >
              Dari Kebun ke Cangkir
            </Title>
            <Text fz={{ base: 'md', sm: 'lg' }} c="#6B7365" style={{ lineHeight: 1.8 }}>
              Setiap cangkir punya perjalanan panjang. Mengolah daun teh dengan perpaduan kearifan petani lokal dan standar higienis modern.
            </Text>
          </Box>
        </FadeIn>
      </Container>

      {/* 2. ALUR 6 TAHAPAN PRODUKSI (Step Progression inspired by Reference R-2) */}
      <Box component="section" mb={rem(80)}>
        <Container size="lg">
          <FadeIn>
            <Box ta="center" mb={rem(48)}>
              <Badge color="teaBrown" radius="xl" size="md" mb={8}>
                Tahapan Produksi
              </Badge>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(32),
                }}
              >
                6 Langkah Menjaga Kemurnian Rasa
              </Title>
              <Text c="#6B7365" mt={4}>
                Proses teliti dari fajar pertama hingga daun teh siap diseduh.
              </Text>
            </Box>
          </FadeIn>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={rem(28)}>
            {processSteps.map((step, idx) => (
              <FadeIn key={step.number} delay={idx * 0.1}>
                <Card
                  p={0}
                  radius="lg"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2D9C8',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 16px rgba(44, 51, 40, 0.05)',
                  }}
                >
                  {/* Photo Container (800x533 px) */}
                  <Box style={{ position: 'relative', width: '100%', height: rem(200) }}>
                    <Image
                      src={step.image}
                      alt={`Proses ${step.title} Teh Nusantara`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <Badge
                      size="lg"
                      radius="sm"
                      style={{
                        position: 'absolute',
                        top: rem(12),
                        left: rem(12),
                        backgroundColor: '#4A6B3A',
                        color: '#FFFFFF',
                        fontWeight: 700,
                      }}
                    >
                      Tahap {step.number}
                    </Badge>
                  </Box>

                  <Stack p="lg" gap="xs" style={{ flex: 1 }}>
                    <Title
                      order={3}
                      fz="xl"
                      c="#1C2A16"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {step.title}
                    </Title>
                    <Text fz="sm" c="#6B7365" style={{ lineHeight: 1.7 }}>
                      {step.description}
                    </Text>
                  </Stack>
                </Card>
              </FadeIn>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 3. GALERI KEBUN */}
      <Box component="section" py={rem(64)} style={{ backgroundColor: '#FDFBF7' }} mb={rem(80)}>
        <Container size="lg">
          <FadeIn>
            <Box ta="center" mb={rem(48)}>
              <Badge color="primaryGreen" radius="xl" size="md" mb={8}>
                Dokumentasi
              </Badge>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(32),
                }}
              >
                Galeri Kebun Nusantara
              </Title>
              <Text c="#6B7365" mt={4}>
                Panorama alam dataran tinggi Jawa Barat dan kehangatan dedikasi petani kami.
              </Text>
            </Box>
          </FadeIn>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={rem(24)}>
            {gardenGallery.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.12}>
                <Card
                  p={0}
                  radius="lg"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2D9C8',
                    overflow: 'hidden',
                  }}
                >
                  {/* Photo Container (1200x800 px) */}
                  <Box style={{ position: 'relative', width: '100%', height: rem(280) }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <Box p="md">
                    <Title order={4} fz="md" c="#1C2A16" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {item.title}
                    </Title>
                    <Text fz="xs" c="#6B7365" mt={4}>
                      {item.description}
                    </Text>
                  </Box>
                </Card>
              </FadeIn>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 4. KOMITMEN KAMI (Petani & Lingkungan) */}
      <Box component="section">
        <Container size="lg">
          <FadeIn>
            <Box ta="center" mb={rem(40)}>
              <Badge color="teaBrown" radius="xl" size="md" mb={8}>
                Tanggung Jawab Berkelanjutan
              </Badge>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(32),
                }}
              >
                Komitmen Kami
              </Title>
            </Box>
          </FadeIn>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(32)}>
            {/* Untuk Petani */}
            <FadeIn>
              <Card
                p="xl"
                radius="lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2D9C8',
                  height: '100%',
                }}
              >
                <Box
                  style={{
                    width: rem(48),
                    height: rem(48),
                    borderRadius: rem(12),
                    backgroundColor: '#F1F7ED',
                    color: '#4A6B3A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: rem(16),
                  }}
                >
                  <IconUsers size={26} />
                </Box>
                <Title
                  order={3}
                  fz="xl"
                  c="#1C2A16"
                  style={{ fontFamily: 'var(--font-playfair)', marginBottom: rem(12) }}
                >
                  Untuk Petani Lokal
                </Title>
                <Stack gap="sm">
                  {[
                    'Harga Beli Adil: Memberikan kompensasi panen yang layak di atas rata-rata pasar.',
                    'Pelatihan & Edukasi: Pendampingan teknik pemetikan dan perawatan kebun organik.',
                    'Kepastian Pembelian: Kontrak kemitraan jangka panjang untuk stabilitas pendapatan keluarga petani.',
                  ].map((text, i) => (
                    <Box key={i} style={{ display: 'flex', gap: rem(8), alignItems: 'flex-start' }}>
                      <IconCheck size={16} color="#4A6B3A" style={{ marginTop: 3, flexShrink: 0 }} />
                      <Text fz="sm" c="#2C3328" style={{ lineHeight: 1.6 }}>
                        {text}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </FadeIn>

            {/* Untuk Lingkungan */}
            <FadeIn delay={0.15}>
              <Card
                p="xl"
                radius="lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2D9C8',
                  height: '100%',
                }}
              >
                <Box
                  style={{
                    width: rem(48),
                    height: rem(48),
                    borderRadius: rem(12),
                    backgroundColor: '#F8F2EC',
                    color: '#6B4423',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: rem(16),
                  }}
                >
                  <IconRecycle size={26} />
                </Box>
                <Title
                  order={3}
                  fz="xl"
                  c="#1C2A16"
                  style={{ fontFamily: 'var(--font-playfair)', marginBottom: rem(12) }}
                >
                  Untuk Kelestarian Lingkungan
                </Title>
                <Stack gap="sm">
                  {[
                    'Bebas Pestisida Berbahaya: Memprioritaskan pupuk kompos alami dan pengendalian hama hayati.',
                    'Konservasi Air Pegunungan: Mengelola limpasan air hujan untuk mencegah erosi lereng perkebunan.',
                    'Kemasan Daur Ulang: Mendorong pengurangan plastik dengan kemasan kaleng dan kardus ramah daur ulang.',
                  ].map((text, i) => (
                    <Box key={i} style={{ display: 'flex', gap: rem(8), alignItems: 'flex-start' }}>
                      <IconCheck size={16} color="#6B4423" style={{ marginTop: 3, flexShrink: 0 }} />
                      <Text fz="sm" c="#2C3328" style={{ lineHeight: 1.6 }}>
                        {text}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </FadeIn>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

