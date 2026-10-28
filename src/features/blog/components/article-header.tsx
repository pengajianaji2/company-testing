'use client';

import React from 'react';
import Link from 'next/link';
import {
  Stack,
  Badge,
  Title,
  Group,
  Text,
  Breadcrumbs,
  Anchor,
  rem,
} from '@mantine/core';
import { IconCalendar, IconClock, IconUser } from '@tabler/icons-react';
import { Article } from '@/types';

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
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
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs separator="→" mb={rem(32)}>
        {breadcrumbItems}
      </Breadcrumbs>

      {/* Meta and Title Stack */}
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
    </>
  );
}

