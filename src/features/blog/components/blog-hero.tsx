'use client';

import React from 'react';
import { Container, Box, Badge, Title, Text, rem } from '@mantine/core';
import { FadeIn } from '@/components/motion/fade-in';

export function BlogHero() {
  return (
    <Container size="lg" mb={rem(48)}>
      <FadeIn>
        <Box ta="center" maw={rem(720)} mx="auto">
          <Badge color="teaBrown" radius="xl" size="lg" mb="sm">
            Jurnal Teh
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
            Cerita, Tips, & Inspirasi
          </Title>
          <Text fz={{ base: 'md', sm: 'lg' }} c="#4E5549">
            Menjelajahi kehangatan dunia teh nusantara. Dari teknik seduh ideal, rahasia kesehatan daun teh, hingga resep racikan segar.
          </Text>
        </Box>
      </FadeIn>
    </Container>
  );
}

