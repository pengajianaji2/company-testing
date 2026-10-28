'use client';

import React from 'react';
import { Box, Title, Text, Button, rem } from '@mantine/core';
import { IconBook, IconRotate } from '@tabler/icons-react';

interface BlogEmptyStateProps {
  category: string;
  onReset: () => void;
}

export function BlogEmptyState({ category, onReset }: BlogEmptyStateProps) {
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
          backgroundColor: '#F8F2EC',
          color: '#6B4423',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
        }}
      >
        <IconBook size={32} />
      </Box>
      <Title
        order={3}
        fz="xl"
        c="#1C2A16"
        style={{ fontFamily: 'var(--font-playfair)' }}
        mb={8}
      >
        Belum Ada Artikel di Kategori Ini
      </Title>
      <Text fz="sm" c="#4E5549" mb="lg">
        Kami sedang menyiapkan tulisan-tulisan menarik untuk kategori &quot;{category}&quot;.
      </Text>
      <Button
        onClick={onReset}
        color="primaryGreen"
        radius="xl"
        leftSection={<IconRotate size={16} />}
      >
        Tampilkan Semua Artikel
      </Button>
    </Box>
  );
}

