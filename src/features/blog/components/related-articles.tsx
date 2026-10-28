'use client';

import React from 'react';
import { Box, Title, SimpleGrid, rem } from '@mantine/core';
import { Article } from '@/types';
import { BlogCard } from './blog-card';

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <Box mt={rem(64)}>
      <Title
        order={2}
        style={{
          fontFamily: 'var(--font-playfair)',
          color: '#1C2A16',
          fontSize: rem(26),
          marginBottom: rem(24),
        }}
      >
        Artikel Terkait
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={rem(24)}>
        {articles.map((rel) => (
          <BlogCard key={rel.id} article={rel} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

