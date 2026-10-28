'use client';

import React from 'react';
import { Container, Box, SimpleGrid, Text, rem } from '@mantine/core';
import { useProductsStore } from '@/stores/products-store';
import { useProducts } from '@/features/products/hooks/use-products';
import {
  CatalogHero,
  ProductFilter,
  ProductCard,
  ProductGridSkeleton,
  ProductEmptyState,
} from '@/features/products/components';

export default function ProductsPage() {
  const { category, searchQuery, resetFilters } = useProductsStore();
  const { data: products, isLoading } = useProducts(category, searchQuery);

  return (
    <Box py={rem(48)}>
      {/* 1. Header Banner */}
      <CatalogHero />

      {/* 2. Filter & Catalog Grid */}
      <Container size="lg">
        <ProductFilter />

        {/* Loading State Skeleton */}
        {isLoading && <ProductGridSkeleton />}

        {/* Empty State */}
        {!isLoading && (!products || products.length === 0) && (
          <ProductEmptyState
            category={category}
            searchQuery={searchQuery}
            onReset={resetFilters}
          />
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
