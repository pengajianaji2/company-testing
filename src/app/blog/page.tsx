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
  Pagination,
  Group,
  Button,
  rem,
} from '@mantine/core';
import { IconBook, IconRotate } from '@tabler/icons-react';
import { useBlogStore } from '@/stores/blog-store';
import { useArticles } from '@/features/blog/hooks/use-articles';
import { BlogCard } from '@/features/blog/components/blog-card';
import { BlogFilter } from '@/features/blog/components/blog-filter';
import { FadeIn } from '@/components/motion/fade-in';

export default function BlogPage() {
  const { category, currentPage, pageSize, setPage, resetFilters } =
    useBlogStore();
  const { data, isLoading } = useArticles(category, currentPage, pageSize);

  return (
    <Box py={rem(48)}>
      {/* 1. BANNER */}
      <Container size="lg" mb={rem(48)}>
        <FadeIn>
          <Box ta="center" maw={rem(720)} mx="auto">
            <Badge color="teaBrown" radius="xl" size="lg" mb="sm">
              Jurnal Teh
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
              Cerita, Tips, & Inspirasi
            </Title>
            <Text fz={{ base: 'md', sm: 'lg' }} c="#4E5549">
              Menjelajahi kehangatan dunia teh nusantara. Dari teknik seduh ideal, rahasia kesehatan daun teh, hingga resep racikan segar.
            </Text>
          </Box>
        </FadeIn>
      </Container>

      {/* 2. FILTER & GRID */}
      <Container size="lg">
        <BlogFilter />

        {/* Loading State */}
        {isLoading && (
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
        )}

        {/* Empty State */}
        {!isLoading && (!data || data.articles.length === 0) && (
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
            <Title order={3} fz="xl" c="#1C2A16" style={{ fontFamily: 'var(--font-playfair)' }} mb={8}>
              Belum Ada Artikel di Kategori Ini
            </Title>
            <Text fz="sm" c="#4E5549" mb="lg">
              Kami sedang menyiapkan tulisan-tulisan menarik untuk kategori &quot;{category}&quot;.
            </Text>
            <Button
              onClick={resetFilters}
              color="primaryGreen"
              radius="xl"
              leftSection={<IconRotate size={16} />}
            >
              Tampilkan Semua Artikel
            </Button>
          </Box>
        )}

        {/* Articles Grid */}
        {!isLoading && data && data.articles.length > 0 && (
          <Box>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={rem(24)}>
              {data.articles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </SimpleGrid>

            {/* Pagination Controls */}
            {data.totalPages > 1 && (
              <Group justify="center" mt={rem(48)}>
                <Pagination
                  value={currentPage}
                  onChange={setPage}
                  total={data.totalPages}
                  color="primaryGreen"
                  radius="xl"
                  size="md"
                />
              </Group>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}

