'use client';

import React from 'react';
import Image from 'next/image';
import { Container, SimpleGrid, Box, Badge, Title, Text, rem } from '@mantine/core';
import { FadeIn } from '@/components/motion/fade-in';
import { companyProfile } from '@/data/company';

export function AboutStory() {
  return (
    <Box component="section" mb={rem(80)}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(48)} style={{ alignItems: 'center' }}>
          <FadeIn>
            <Box
              style={{
                position: 'relative',
                width: '100%',
                height: rem(440),
                borderRadius: rem(20),
                overflow: 'hidden',
                boxShadow: '0 16px 36px rgba(44, 51, 40, 0.12)',
              }}
            >
              <Image
                src="/images/about/about-history.webp"
                alt="Kisah Berdirinya Teh Nusantara Lembang"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Badge color="teaBrown" radius="xl" size="md" mb={8}>
              Awal Mula
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: rem(30),
                marginBottom: rem(16),
                lineHeight: 1.3,
              }}
            >
              Cerita Kami
            </Title>
            <Text c="#2C3328" style={{ lineHeight: 1.8, marginBottom: rem(16) }}>
              {companyProfile.fullStory}
            </Text>
            <Text c="#4E5549" style={{ lineHeight: 1.7 }}>
              Kami percaya secangkir teh yang baik bukan sekadar soal rasa, melainkan ikatan kebersamaan, rasa hormat pada alam, dan kepedulian nyata pada kesejahteraan para petani yang merawatnya setiap fajar.
            </Text>
          </FadeIn>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

