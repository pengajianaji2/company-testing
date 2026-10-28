'use client';

import React from 'react';
import {
  Container,
  Title,
  Text,
  Badge,
  Box,
  SimpleGrid,
  Skeleton,
  Stack,
  Button,
  rem,
} from '@mantine/core';
import { IconCup, IconRotate } from '@tabler/icons-react';
import { useProductsStore } from '@/stores/products-store';
import { useProducts } from '@/features/products/hooks/use-products';
import { ProductCard } from '@/features/products/components/product-card';
import { ProductFilter } from '@/features/products/components/product-filter';
import { FadeIn } from '@/components/motion/fade-in';

export default function ProductsPage() {
  const { category, searchQuery, resetFilters } = useProductsStore();
  const { data: products, isLoading } = useProducts(category, searchQuery);

  return (
    <Box py={rem(48)}>
      {/* 1. BANNER */}
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

      {/* 2. FILTER & CATALOG GRID */}
      <Container size="lg">
        <ProductFilter />

        {/* Loading State */}
        {isLoading && (
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={rem(24)}>
            {[...Array(8)].map((_, i) => (
              <Box
                key={i}
                p="md"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: rem(16),
                  border: '1px solid #E2D9C8',
                }}
              >
                <Skeleton height={200} radius="md" mb="md" />
                <Skeleton height={20} radius="sm" mb="xs" width="40%" />
                <Skeleton height={24} radius="sm" mb="xs" width="80%" />
                <Skeleton height={14} radius="sm" mb={6} />
                <Skeleton height={14} radius="sm" mb="md" width="70%" />
                <Skeleton height={36} radius="md" />
              </Box>
            ))}
          </SimpleGrid>
        )}

        {/* Empty State */}
        {!isLoading && (!products || products.length === 0) && (
          <Box
            ta="center"
            py={rem(80)}
            px="md"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: rem(20),
              border: '1px solid #E2D9C8',
              maxWidth: rem(520),
              margin: '0 auto',
            }}
          >
            <Box
              style={{
                width: rem(64),
                height: rem(64),
                borderRadius: '50%',
                backgroundColor: '#F1F7ED',
                color: '#4A6B3A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <IconCup size={32} />
            </Box>
            <Title order={3} fz="xl" c="#1C2A16" style={{ fontFamily: 'var(--font-playfair)' }} mb={8}>
              Tidak Ada Produk yang Cocok
            </Title>
            <Text fz="sm" c="#4E5549" mb="lg">
              Kami tidak menemukan varian teh untuk kata kunci &quot;{searchQuery}&quot; pada kategori &quot;{category}&quot;.
            </Text>
            <Button
              onClick={resetFilters}
              color="primaryGreen"
              radius="xl"
              leftSection={<IconRotate size={16} />}
            >
              Reset Filter & Pencarian
            </Button>
          </Box>
        )}

        {/* Products Grid */}
        {!isLoading && products && products.length > 0 && (
          <Box>
            <Text fz="xs" c="#4E5549" mb="md">
              Menampilkan {products.length} varian teh pilihan
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={rem(24)}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Container>
    </Box>
  );
}

