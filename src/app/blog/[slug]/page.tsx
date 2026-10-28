'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Container, Box, Title, Text, Button, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  useArticleBySlug,
  useRelatedArticles,
} from '@/features/blog/hooks/use-articles';
import {
  ArticleHeader,
  ArticleContent,
  RelatedArticles,
} from '@/features/blog/components';
import { FadeIn } from '@/components/motion/fade-in';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const { data: article, isLoading } = useArticleBySlug(slug);
  const { data: relatedArticles } = useRelatedArticles(
    article?.relatedSlugs || []
  );

  if (isLoading) {
    return (
      <Container size="md" py={rem(80)}>
        <Text ta="center" c="#6B7365">
          Memuat artikel...
        </Text>
      </Container>
    );
  }

  if (!article) {
    return (
      <Container size="sm" py={rem(100)} ta="center">
        <Box
          p="xl"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: rem(20),
            border: '1px solid #E2D9C8',
          }}
        >
          <Title
            order={2}
            c="#1C2A16"
            style={{ fontFamily: 'var(--font-playfair)' }}
            mb="sm"
          >
            Artikel Tidak Ditemukan
          </Title>
          <Text fz="sm" c="#6B7365" mb="lg">
            Artikel yang Anda tuju mungkin sudah dipindahkan atau URL yang dimasukkan kurang tepat.
          </Text>
          <Button
            component={Link}
            href="/blog"
            color="primaryGreen"
            radius="xl"
            leftSection={<IconArrowLeft size={16} />}
          >
            Kembali ke Jurnal Teh
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Box py={rem(32)}>
      <Container size="md">
        <FadeIn>
          {/* 1. Header Section (Breadcrumbs, Title, Meta) */}
          <ArticleHeader article={article} />

          {/* 2. Featured Image (16:9) */}
          <Box
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: rem(20),
              overflow: 'hidden',
              marginBottom: rem(40),
              boxShadow: '0 12px 32px rgba(44, 51, 40, 0.1)',
            }}
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ objectFit: 'cover' }}
            />
          </Box>

          {/* 3. Editorial Content & Social Share */}
          <ArticleContent title={article.title} content={article.content} />

          {/* 4. Related Articles */}
          {relatedArticles && relatedArticles.length > 0 && (
            <RelatedArticles articles={relatedArticles} />
          )}
        </FadeIn>
      </Container>
    </Box>
  );
}
