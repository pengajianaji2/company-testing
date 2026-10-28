'use client';

import React from 'react';
import {
  Container,
  Box,
  Badge,
  Title,
  Text,
  SimpleGrid,
  Card,
  Stack,
  rem,
} from '@mantine/core';
import { IconUsers, IconRecycle, IconCheck } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';

export function CommitmentSection() {
  return (
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
  );
}

