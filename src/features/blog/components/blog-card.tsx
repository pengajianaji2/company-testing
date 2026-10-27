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
import { IconCalendar, IconClock, IconArrowRight } from '@tabler/icons-react';
import { Article } from '@/types';

interface BlogCardProps {
  article: Article;
}

export function BlogCard({ article }: BlogCardProps) {
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
      {/* 16:9 Image Thumbnail (800x450) */}
      <Link href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
        <Box style={{ position: 'relative', width: '100%', height: rem(210) }}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
          <Badge
            style={{
              position: 'absolute',
              top: rem(12),
              left: rem(12),
              backgroundColor: '#6B4423',
              color: '#FFFFFF',
            }}
            size="sm"
            radius="sm"
          >
            {article.category}
          </Badge>
        </Box>
      </Link>

      {/* Content */}
      <Stack p="lg" gap="xs" style={{ flex: 1, justifyContent: 'space-between' }}>
        <Box>
          <Group gap="xs" mb={6}>
            <Group gap={4}>
              <IconCalendar size={13} color="#6B7365" />
              <Text fz="xs" c="#6B7365">
                {article.date}
              </Text>
            </Group>
            <Text fz="xs" c="#6B7365">
              •
            </Text>
            <Group gap={4}>
              <IconClock size={13} color="#6B7365" />
              <Text fz="xs" c="#6B7365">
                {article.readTime}
              </Text>
            </Group>
          </Group>

          <Link href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
            <Title
              order={3}
              c="#1C2A16"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: rem(18),
                lineHeight: 1.35,
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#4A6B3A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1C2A16')}
            >
              {article.title}
            </Title>
          </Link>

          <Text fz="xs" c="#6B7365" mt={8} lineClamp={3}>
            {article.excerpt}
          </Text>
        </Box>

        <Button
          component={Link}
          href={`/blog/${article.slug}`}
          variant="light"
          color="primaryGreen"
          size="xs"
          radius="md"
          mt="md"
          rightSection={<IconArrowRight size={14} />}
          style={{ width: 'fit-content' }}
        >
          Baca Selengkapnya
        </Button>
      </Stack>
    </Card>
  );
}

