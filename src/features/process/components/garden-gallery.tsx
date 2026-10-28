'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Box, Badge, Title, Text, SimpleGrid, Card, rem } from '@mantine/core';
import { FadeIn } from '@/components/motion/fade-in';
import { gardenGallery } from '@/data/company';

export function GardenGallery() {
  return (
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
            <Text c="#4E5549" mt={4}>
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Box p="md">
                  <Title order={4} fz="md" c="#1C2A16" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {item.title}
                  </Title>
                  <Text fz="xs" c="#4E5549" mt={4}>
                    {item.description}
                  </Text>
                </Box>
              </Card>
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

