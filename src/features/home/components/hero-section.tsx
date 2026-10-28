'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Badge,
  Box,
  rem,
} from '@mantine/core';
import { IconLeaf, IconArrowRight, IconPlant } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { companyProfile } from '@/data/company';

export function HeroSection() {
  return (
    <Box
      component="section"
      style={{
        position: 'relative',
        paddingTop: rem(40),
        paddingBottom: rem(70),
      }}
    >
      <Container size="lg">
        <Box
          style={{
            position: 'relative',
            borderRadius: rem(24),
            overflow: 'hidden',
            backgroundColor: '#1E2B18',
            minHeight: rem(540),
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(44, 51, 40, 0.15)',
          }}
        >
          {/* Hero Background Image (next/image 1920x800) */}
          <Image
            src="/images/hero/hero.webp"
            alt="Perkebunan Teh Nusantara Lembang Jawa Barat"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              opacity: 0.42,
            }}
          />

          {/* Gradient Overlay for Text Readability */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(20, 31, 16, 0.92) 0%, rgba(20, 31, 16, 0.65) 55%, rgba(20, 31, 16, 0.2) 100%)',
            }}
          />

          {/* Hero Content */}
          <Box
            style={{
              position: 'relative',
              zIndex: 2,
              padding: `${rem(48)} ${rem(40)}`,
              maxWidth: rem(700),
            }}
          >
            <FadeIn delay={0.1}>
              <Badge
                leftSection={<IconLeaf size={14} />}
                size="lg"
                radius="xl"
                variant="filled"
                color="primaryGreen"
                mb="md"
                style={{
                  backgroundColor: '#4A6B3A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Teh Alami Asal Jawa Barat
              </Badge>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Title
                order={1}
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  lineHeight: 1.18,
                  marginBottom: rem(16),
                }}
              >
                {companyProfile.tagline}
              </Title>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Text
                fz={{ base: 'md', sm: 'lg' }}
                style={{
                  color: '#E8EFE3',
                  lineHeight: 1.7,
                  marginBottom: rem(32),
                }}
              >
                {companyProfile.subtitle}
              </Text>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Group gap="md">
                <Button
                  component={Link}
                  href="/products"
                  size="lg"
                  radius="xl"
                  color="primaryGreen"
                  rightSection={<IconArrowRight size={18} />}
                  style={{
                    boxShadow: '0 8px 24px rgba(74, 107, 58, 0.4)',
                  }}
                >
                  Lihat Produk
                </Button>
                <Button
                  component={Link}
                  href="/about"
                  size="lg"
                  radius="xl"
                  variant="outline"
                  color="cream"
                  style={{
                    color: '#F5F0E1',
                    borderColor: 'rgba(245, 240, 225, 0.6)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  }}
                >
                  Kenali Kami
                </Button>
              </Group>
            </FadeIn>
          </Box>

          {/* Floating Metric Card (Inspired by Reference R-2) */}
          <Box
            visibleFrom="md"
            style={{
              position: 'absolute',
              bottom: rem(32),
              right: rem(32),
              zIndex: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(8px)',
              borderRadius: rem(16),
              padding: `${rem(16)} ${rem(24)}`,
              border: '1px solid rgba(226, 217, 200, 0.8)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: rem(16),
            }}
          >
            <Box
              style={{
                width: rem(44),
                height: rem(44),
                borderRadius: rem(12),
                backgroundColor: '#4A6B3A',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconPlant size={26} />
            </Box>
            <Box>
              <Text fw={700} fz="md" c="#1C2A16">
                40+ Mitra Petani
              </Text>
              <Text fz="xs" c="#4E5549">
                100% Kebun Lokal Jawa Barat
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

