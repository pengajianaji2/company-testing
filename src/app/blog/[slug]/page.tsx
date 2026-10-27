'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  Container,
  Box,
  Title,
  Text,
  Badge,
  Button,
  Group,
  Stack,
  Breadcrumbs,
  Anchor,
  SimpleGrid,
  rem,
  Divider,
} from '@mantine/core';
import {
  IconCalendar,
  IconClock,
  IconUser,
  IconArrowLeft,
} from '@tabler/icons-react';
import { useArticleBySlug, useRelatedArticles } from '@/features/blog/hooks/use-articles';
import { BlogCard } from '@/features/blog/components/blog-card';
import { ShareButtons } from '@/features/blog/components/share-buttons';
import { FadeIn } from '@/components/motion/fade-in';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const { data: article, isLoading } = useArticleBySlug(slug);
  const { data: relatedArticles } = useRelatedArticles(article?.relatedSlugs || []);

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
          <Title order={2} c="#1C2A16" style={{ fontFamily: 'var(--font-playfair)' }} mb="sm">
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

  const breadcrumbItems = [
    { title: 'Beranda', href: '/' },
    { title: 'Jurnal Teh', href: '/blog' },
    { title: article.title, href: '#' },
  ].map((item, index) => (
    <Anchor
      component={Link}
      href={item.href}
      key={index}
      fz="xs"
      c={index === 2 ? '#4A6B3A' : '#6B7365'}
      fw={index === 2 ? 600 : 400}
      style={{ textDecoration: 'none' }}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <Box py={rem(32)}>
      <Container size="md">
        {/* Breadcrumbs */}
        <Breadcrumbs separator="→" mb={rem(32)}>
          {breadcrumbItems}
        </Breadcrumbs>

        <FadeIn>
          {/* Header Section */}
          <Stack gap="sm" mb={rem(28)}>
            <Badge color="teaBrown" size="md" radius="sm" w="fit-content">
              {article.category}
            </Badge>

            <Title
              order={1}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                lineHeight: 1.25,
              }}
            >
              {article.title}
            </Title>

            <Group gap="md" mt="xs">
              <Group gap={6}>
                <IconCalendar size={16} color="#6B7365" />
                <Text fz="xs" c="#6B7365">
                  {article.date}
                </Text>
              </Group>
              <Text fz="xs" c="#6B7365">
                •
              </Text>
              <Group gap={6}>
                <IconClock size={16} color="#6B7365" />
                <Text fz="xs" c="#6B7365">
                  {article.readTime}
                </Text>
              </Group>
              <Text fz="xs" c="#6B7365">
                •
              </Text>
              <Group gap={6}>
                <IconUser size={16} color="#6B7365" />
                <Text fz="xs" c="#6B7365">
                  Oleh: {article.author}
                </Text>
              </Group>
            </Group>
          </Stack>

          {/* Featured Image (800x450, 16:9) */}
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
              style={{ objectFit: 'cover' }}
            />
          </Box>

          {/* Editorial Content */}
          <Box
            p={{ base: 'md', sm: rem(36) }}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: rem(20),
              border: '1px solid #E2D9C8',
            }}
          >
            <Stack gap="lg">
              {article.content.map((paragraph, idx) => {
                const isNumbered = /^\d+\.\s/.test(paragraph);

                if (isNumbered) {
                  const parts = paragraph.split('. ');
                  const number = parts[0];
                  const rest = parts.slice(1).join('. ');
                  const boldPart = rest.split('. ')[0];
                  const descPart = rest.substring(boldPart.length + 2);

                  return (
                    <Box
                      key={idx}
                      p="md"
                      style={{
                        backgroundColor: '#FDFBF7',
                        borderRadius: rem(12),
                        borderLeft: '4px solid #4A6B3A',
                      }}
                    >
                      <Text fz="md" c="#1C2A16" fw={700} mb={4}>
                        {number}. {boldPart}.
                      </Text>
                      {descPart && (
                        <Text fz="sm" c="#2C3328" style={{ lineHeight: 1.7 }}>
                          {descPart}
                        </Text>
                      )}
                    </Box>
                  );
                }

                return (
                  <Text
                    key={idx}
                    fz="md"
                    c="#2C3328"
                    style={{
                      lineHeight: 1.85,
                      fontSize: rem(17),
                    }}
                  >
                    {paragraph}
                  </Text>
                );
              })}
            </Stack>

            <Divider my={rem(32)} color="#F0EAE1" />

            {/* Social Share Buttons */}
            <ShareButtons title={article.title} />
          </Box>

          {/* Related Articles */}
          {relatedArticles && relatedArticles.length > 0 && (
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
                {relatedArticles.map((rel) => (
                  <BlogCard key={rel.id} article={rel} />
                ))}
              </SimpleGrid>
            </Box>
          )}
        </FadeIn>
      </Container>
    </Box>
  );
}

