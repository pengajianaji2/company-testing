'use client';

import React from 'react';
import {
  Group,
  TextInput,
  Button,
  Box,
  rem,
  ActionIcon,
} from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { useProductsStore } from '@/stores/products-store';
import { ProductCategory } from '@/types';

const categories: ProductCategory[] = [
  'Semua',
  'Teh Hitam',
  'Teh Hijau',
  'Teh Melati',
  'Teh Herbal',
  'Gift Set',
];

export function ProductFilter() {
  const { category, searchQuery, setCategory, setSearchQuery } =
    useProductsStore();

  return (
    <Box mb={rem(32)}>
      <Group justify="space-between" align="center" gap="md">
        {/* Category Filter Pills */}
        <Group gap={8} style={{ overflowX: 'auto', flexWrap: 'wrap' }}>
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

        {/* Search Input */}
        <Box style={{ width: '100%', maxWidth: rem(280) }}>
          <TextInput
            placeholder="Cari teh..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            leftSection={<IconSearch size={16} color="#6B7365" />}
            rightSection={
              searchQuery ? (
                <ActionIcon
                  size="sm"
                  variant="subtle"
                  color="gray"
                  onClick={() => setSearchQuery('')}
                  aria-label="Bersihkan pencarian"
                >
                  <IconX size={14} />
                </ActionIcon>
              ) : null
            }
            radius="xl"
            size="sm"
            styles={{
              input: {
                backgroundColor: '#FFFFFF',
                borderColor: '#D9C9A0',
                '&:focus': { borderColor: '#4A6B3A' },
              },
            }}
            aria-label="Kolom pencarian produk teh"
          />
        </Box>
      </Group>
    </Box>
  );
}

