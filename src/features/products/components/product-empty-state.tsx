'use client';

import React from 'react';
import { Box, Title, Text, Button, rem } from '@mantine/core';
import { IconCup, IconRotate } from '@tabler/icons-react';

interface ProductEmptyStateProps {
  category: string;
  searchQuery: string;
  onReset: () => void;
}

export function ProductEmptyState({
  category,
  searchQuery,
  onReset,
}: ProductEmptyStateProps) {
  return (
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
      <Title
        order={3}
        fz="xl"
        c="#1C2A16"
        style={{ fontFamily: 'var(--font-playfair)' }}
        mb={8}
      >
        Tidak Ada Produk yang Cocok
      </Title>
      <Text fz="sm" c="#4E5549" mb="lg">
        Kami tidak menemukan varian teh untuk kata kunci &quot;{searchQuery}&quot; pada kategori &quot;{category}&quot;.
      </Text>
      <Button
        onClick={onReset}
        color="primaryGreen"
        radius="xl"
        leftSection={<IconRotate size={16} />}
      >
        Reset Filter & Pencarian
      </Button>
    </Box>
  );
}

