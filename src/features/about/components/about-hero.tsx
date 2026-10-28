'use client';

import React from 'react';
import { Container, Box, Badge, Title, Text, rem } from '@mantine/core';
import { FadeIn } from '@/components/motion/fade-in';

export function AboutHero() {
  return (
    <Container size="lg" mb={rem(64)}>
      <FadeIn>
        <Box ta="center" maw={rem(760)} mx="auto">
          <Badge color="primaryGreen" radius="xl" size="lg" mb="sm">
            Tentang Kami
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
            Menghidupkan Kembali Budaya Teh Asli Nusantara
          </Title>
          <Text fz={{ base: 'md', sm: 'lg' }} c="#4E5549" style={{ lineHeight: 1.8 }}>
            Kisah perjalanan kami berakar dari tanah subur Jawa Barat, dedikasi petani lokal, dan semangat mempersembahkan seduhan teh murni terbaik.
          </Text>
        </Box>
      </FadeIn>
    </Container>
  );
}

