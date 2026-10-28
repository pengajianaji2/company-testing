'use client';

import React from 'react';
import { SimpleGrid, Box, Skeleton, rem } from '@mantine/core';

export function BlogGridSkeleton() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={rem(24)}>
      {[...Array(6)].map((_, i) => (
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
          <Skeleton height={16} radius="sm" mb="xs" width="50%" />
          <Skeleton height={24} radius="sm" mb="xs" width="85%" />
          <Skeleton height={14} radius="sm" mb="md" width="100%" />
          <Skeleton height={14} radius="sm" mb="md" width="70%" />
        </Box>
      ))}
    </SimpleGrid>
  );
}

