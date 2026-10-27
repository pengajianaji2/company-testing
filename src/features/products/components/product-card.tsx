'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  Box,
  Badge,
  Title,
  Text,
  Button,
  Stack,
  Group,
  rem,
} from '@mantine/core';
import { IconBrandWhatsapp, IconArrowUpRight } from '@tabler/icons-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const waMessage = encodeURIComponent(
    `Halo Teh Nusantara, saya tertarik memesan ${product.name}. Apakah stoknya tersedia?`
  );
  const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

  return (
    <Card
      p={0}
      radius="lg"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2D9C8',
        boxShadow: '0 4px 16px rgba(44, 51, 40, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(74, 107, 58, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(44, 51, 40, 0.05)';
      }}
    >
      {/* Photo Container 800x800 */}
      <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
        <Box style={{ position: 'relative', width: '100%', height: rem(240) }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
          <Badge
            style={{
              position: 'absolute',
              top: rem(12),
              left: rem(12),
              backgroundColor: '#4A6B3A',
              color: '#FFFFFF',
            }}
            size="sm"
            radius="sm"
          >
            {product.category}
          </Badge>
        </Box>
      </Link>

      {/* Content */}
      <Stack p="lg" gap="xs" style={{ flex: 1, justifyContent: 'space-between' }}>
        <Box>
          <Group justify="space-between" align="flex-start" wrap="nowrap" mb={4}>
            <Link
              href={`/products/${product.slug}`}
              style={{ textDecoration: 'none', flex: 1 }}
            >
              <Title
                order={3}
                c="#1C2A16"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: rem(19),
                  lineHeight: 1.3,
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#4A6B3A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#1C2A16')}
              >
                {product.name}
              </Title>
            </Link>
            <Link href={`/products/${product.slug}`} aria-label={`Detail ${product.name}`}>
              <IconArrowUpRight size={18} color="#6B7365" />
            </Link>
          </Group>

          <Text fz="xs" c="#6B7365" lineClamp={2} mb="xs">
            {product.description}
          </Text>

          {/* Tasting Notes */}
          <Group gap={4} mb="xs">
            {product.tastingNotes.slice(0, 2).map((note) => (
              <Badge
                key={note}
                size="xs"
                variant="light"
                color="cream"
                style={{ color: '#6B4423', borderColor: '#E2D9C8' }}
              >
                {note}
              </Badge>
            ))}
          </Group>

          {/* Price & Packaging */}
          <Box pt="xs" style={{ borderTop: '1px solid #F5F0E1' }}>
            <Text fw={700} fz="md" c="#6B4423">
              {product.price}
            </Text>
            <Text fz="xs" c="dimmed">
              Kemasan: {product.packaging}
            </Text>
          </Box>
        </Box>

        {/* WhatsApp Order Button */}
        <Button
          component="a"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          radius="md"
          size="sm"
          color="primaryGreen"
          leftSection={<IconBrandWhatsapp size={16} />}
          mt="sm"
          style={{
            fontWeight: 600,
          }}
        >
          Pesan via WhatsApp
        </Button>
      </Stack>
    </Card>
  );
}

