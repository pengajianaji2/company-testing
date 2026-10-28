'use client';

import React from 'react';
import Link from 'next/link';
import {
  Container,
  Box,
  Title,
  Text,
  SimpleGrid,
  Card,
  rem,
} from '@mantine/core';
import { IconLeaf } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import styles from '@/app/page.module.css';

export function TeaCategories() {
  const categories = [
    { name: 'Teh Hitam', desc: 'Pekat & Hangat' },
    { name: 'Teh Hijau', desc: 'Segar & Kaya Antioksidan' },
    { name: 'Teh Melati', desc: 'Harum Alami Menenangkan' },
    { name: 'Teh Herbal', desc: 'Rempah Bebas Kafein' },
    { name: 'Gift Set', desc: 'Bingkisan Eksklusif' },
  ];

  return (
    <Box component="section" py={rem(48)} style={{ backgroundColor: '#ECE3CD' }}>
      <Container size="lg">
        <FadeIn>
          <Box ta="center" mb={rem(32)}>
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: rem(28),
              }}
            >
              Jelajahi Berdasarkan Kategori
            </Title>
            <Text c="#6B4423" mt={4} fz="sm">
              Temukan seduhan yang sesuai dengan selera dan momen Anda.
            </Text>
          </Box>
        </FadeIn>

        <SimpleGrid cols={{ base: 2, sm: 3, md: 5 }} spacing={rem(16)}>
          {categories.map((cat, idx) => (
            <FadeIn key={cat.name} delay={idx * 0.08}>
              <Link href="/products" style={{ textDecoration: 'none' }}>
                <Card p="md" radius="md" ta="center" className={styles.categoryCard}>
                  <IconLeaf size={24} color="#6B4423" style={{ margin: '0 auto 8px' }} />
                  <Title order={3} fz="sm" c="#1C2A16" className={styles.categoryTitle}>
                    {cat.name}
                  </Title>
                  <Text fz="xs" c="#4E5549" mt={4} className={styles.categoryDesc}>
                    {cat.desc}
                  </Text>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

