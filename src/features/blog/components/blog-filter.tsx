'use client';

import React from 'react';
import { Group, Button, Box, rem } from '@mantine/core';
import { useBlogStore } from '@/stores/blog-store';
import { ArticleCategory } from '@/types';

const categories: ArticleCategory[] = [
  'Semua',
  'Tips Seduh',
  'Manfaat Teh',
  'Resep',
  'Berita',
];

export function BlogFilter() {
  const { category, setCategory } = useBlogStore();

  return (
    <Box mb={rem(32)}>
      <Group gap={8} justify="center" style={{ flexWrap: 'wrap' }}>
        {categories.map((cat) => {
          const isActive = category === cat;

          return (
            <Button
              key={cat}
              onClick={() => setCategory(cat)}
              variant={isActive ? 'filled' : 'outline'}
              color="primaryGreen"
              radius="xl"
              size="sm"
              style={{
                backgroundColor: isActive ? '#4A6B3A' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#2C3328',
                borderColor: isActive ? '#4A6B3A' : '#D9C9A0',
                fontWeight: isActive ? 600 : 500,
                transition: 'all 0.15s ease',
              }}
            >
              {cat}
            </Button>
          );
        })}
      </Group>
    </Box>
  );
}

