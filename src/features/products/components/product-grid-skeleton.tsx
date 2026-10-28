'use client';

import React from 'react';
import { SimpleGrid, Box, Skeleton, rem } from '@mantine/core';

export function ProductGridSkeleton() {
  return (
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
  );
}

