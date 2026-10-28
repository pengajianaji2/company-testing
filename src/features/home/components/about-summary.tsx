'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  Box,
  Badge,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { companyProfile } from '@/data/company';

export function AboutSummary() {
  return (
    <Box component="section" py={rem(64)}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(48)} style={{ alignItems: 'center' }}>
          <FadeIn>
            <Box
              style={{
                position: 'relative',
                width: '100%',
                height: rem(400),
                borderRadius: rem(20),
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(44, 51, 40, 0.12)',
              }}
            >
              <Image
                src="/images/hero/farmer.webp"
                alt="Petani Teh Nusantara Lembang"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Badge color="teaBrown" radius="xl" size="md" mb={8}>
              Cerita Kami
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: rem(32),
                lineHeight: 1.25,
                marginBottom: rem(16),
              }}
            >
              Dari Kebun Kecil Hingga ke Cangkir Seluruh Nusantara
            </Title>
            <Text c="#2C3328" style={{ lineHeight: 1.8, marginBottom: rem(20) }}>
              {companyProfile.shortAbout}
            </Text>
            <Text c="#4E5549" style={{ lineHeight: 1.7, marginBottom: rem(28) }}>
              Bermitra langsung dengan kelompok tani di Lembang, Pangalengan, Garut, dan Puncak, kami memastikan setiap helai daun dipanen secara adil dan diproses dengan standar mutu tertinggi.
            </Text>
            <Button
              component={Link}
              href="/about"
              radius="xl"
              size="md"
              color="primaryGreen"
              rightSection={<IconArrowRight size={16} />}
            >
              Selengkapnya Tentang Kami
            </Button>
          </FadeIn>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

