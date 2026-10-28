'use client';

import React from 'react';
import { Container, Box, SimpleGrid, Pagination, Group, rem } from '@mantine/core';
import { useBlogStore } from '@/stores/blog-store';
import { useArticles } from '@/features/blog/hooks/use-articles';
import {
  BlogHero,
  BlogFilter,
  BlogCard,
  BlogGridSkeleton,
  BlogEmptyState,
} from '@/features/blog/components';

export default function BlogPage() {
  const { category, currentPage, pageSize, setPage, resetFilters } =
    useBlogStore();
  const { data, isLoading } = useArticles(category, currentPage, pageSize);

  return (
    <Box py={rem(48)}>
      {/* 1. Header Banner */}
      <BlogHero />

      {/* 2. Filter & Grid */}
      <Container size="lg">
        <BlogFilter />

        {/* Loading State */}
        {isLoading && <BlogGridSkeleton />}

        {/* Empty State */}
        {!isLoading && (!data || data.articles.length === 0) && (
          <BlogEmptyState category={category} onReset={resetFilters} />
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
