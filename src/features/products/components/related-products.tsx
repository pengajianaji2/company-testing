'use client';

import React from 'react';
import { Box, Title, SimpleGrid, rem } from '@mantine/core';
import { FadeIn } from '@/components/motion/fade-in';
import { Product } from '@/types';
import { ProductCard } from './product-card';

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <Box
      component="section"
      mt={rem(64)}
      pt={rem(48)}
      style={{ borderTop: '1px solid #E2D9C8' }}
    >
      <FadeIn>
        <Title
          order={2}
          style={{
            fontFamily: 'var(--font-playfair)',
            color: '#1C2A16',
            fontSize: rem(28),
            marginBottom: rem(24),
          }}
        >
          Varian Teh Terkait
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={rem(24)}>
          {products.map((rel) => (
            <ProductCard key={rel.id} product={rel} />
          ))}
        </SimpleGrid>
      </FadeIn>
    </Box>
  );
}

