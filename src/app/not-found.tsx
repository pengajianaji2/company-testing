'use client';

import React from 'react';
import Link from 'next/link';
import {
  Container,
  Title,
  Text,
  Button,
  Box,
  rem,
} from '@mantine/core';
import { IconCup, IconArrowLeft } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';

export default function NotFound() {
  return (
    <Container size="sm" py={rem(100)}>
      <FadeIn>
        <Box
          ta="center"
          p={{ base: 'xl', sm: rem(48) }}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: rem(24),
            border: '1px solid #E2D9C8',
            boxShadow: '0 16px 36px rgba(44, 51, 40, 0.08)',
          }}
        >
          <Box
            style={{
              width: rem(80),
              height: rem(80),
              borderRadius: '50%',
              backgroundColor: '#F1F7ED',
              color: '#4A6B3A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <IconCup size={44} stroke={1.5} />
          </Box>

          <Text fw={700} fz={rem(72)} c="#4A6B3A" style={{ lineHeight: 1, fontFamily: 'var(--font-playfair)' }}>
            404
          </Text>

          <Title
            order={1}
            style={{
              fontFamily: 'var(--font-playfair)',
              color: '#1C2A16',
              fontSize: rem(28),
              marginTop: rem(12),
              marginBottom: rem(12),
            }}
          >
            Ups, Halaman Tidak Ditemukan
          </Title>

          <Text c="#6B7365" fz="md" style={{ lineHeight: 1.7, marginBottom: rem(32) }}>
            Sepertinya halaman yang kamu cari sudah tersesat di tengah kebun teh. Yuk, kembali ke beranda untuk menikmati seduhan teh terbaik kami.
          </Text>

          <Button
            component={Link}
            href="/"
            size="md"
            radius="xl"
            color="primaryGreen"
            leftSection={<IconArrowLeft size={18} />}
          >
            Kembali ke Beranda
          </Button>
        </Box>
      </FadeIn>
    </Container>
  );
}

