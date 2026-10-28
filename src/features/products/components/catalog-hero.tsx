'use client';

import React from 'react';
import { Container, Box, Badge, Title, Text, rem } from '@mantine/core';
import { FadeIn } from '@/components/motion/fade-in';

export function CatalogHero() {
  return (
    <Container size="lg" mb={rem(48)}>
      <FadeIn>
        <Box ta="center" maw={rem(720)} mx="auto">
          <Badge color="primaryGreen" radius="xl" size="lg" mb="sm">
            Katalog Lengkap
          </Badge>
          <Title
            order={1}
            style={{
              fontFamily: 'var(--font-playfair)',
              color: '#1C2A16',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              lineHeight: 1.2,
              marginBottom: rem(12),
            }}
          >
            Koleksi Teh Nusantara
          </Title>
          <Text fz={{ base: 'md', sm: 'lg' }} c="#4E5549">
            Temukan teh favoritmu dari kebun-kebun terbaik Indonesia. Dipetik segar, diproses higienis, dan dikemas kedap udara.
          </Text>
        </Box>
      </FadeIn>
    </Container>
  );
}

