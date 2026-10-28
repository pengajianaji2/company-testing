'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  Box,
  Badge,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Card,
  Stack,
  rem,
} from '@mantine/core';
import { IconArrowRight, IconCalendar } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { Article } from '@/types';
import styles from '@/app/page.module.css';

interface LatestArticlesProps {
  articles: Article[];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
  return (
    <Box component="section" py={rem(60)} style={{ backgroundColor: '#FDFBF7' }}>
      <Container size="lg">
        <Group justify="space-between" align="flex-end" mb={rem(40)}>
          <FadeIn>
            <Badge color="teaBrown" radius="xl" size="md" mb={8}>
              Jurnal Teh
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: rem(34),
              }}
            >
              Artikel & Edukasi Terbaru
            </Title>
            <Text c="#4E5549" mt={4}>
              Tips seduh, manfaat kesehatan, dan wawasan seputar dunia teh nusantara.
            </Text>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Button
              component={Link}
              href="/blog"
              variant="subtle"
              color="primaryGreen"
              rightSection={<IconArrowRight size={16} />}
            >
              Baca Jurnal Selengkapnya
            </Button>
          </FadeIn>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={rem(24)}>
          {articles.map((art, idx) => (
            <FadeIn key={art.id} delay={idx * 0.1}>
              <Card
                p={0}
                radius="lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2D9C8',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <Box style={{ position: 'relative', width: '100%', height: rem(200) }}>
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <Badge
                    style={{
                      position: 'absolute',
                      top: rem(12),
                      left: rem(12),
                      backgroundColor: '#6B4423',
                    }}
                    color="teaBrown"
                    radius="sm"
                  >
                    {art.category}
                  </Badge>
                </Box>

                <Stack p="lg" gap="xs" style={{ flex: 1, justifyContent: 'space-between' }}>
                  <Box>
                    <Group gap="xs" mb={4}>
                      <IconCalendar size={14} color="#4E5549" />
                      <Text fz="xs" c="#4E5549">
                        {art.date} • {art.readTime}
                      </Text>
                    </Group>
                    <Link
                      href={`/blog/${art.slug}`}
                      className={styles.cardTitleLink}
                    >
                      <Title
                        order={3}
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: rem(18),
                          lineHeight: 1.35,
                        }}
                      >
                        {art.title}
                      </Title>
                    </Link>
                    <Text fz="xs" c="#4E5549" mt={8} lineClamp={2}>
                      {art.excerpt}
                    </Text>
                  </Box>

                  <Button
                    component={Link}
                    href={`/blog/${art.slug}`}
                    variant="light"
                    color="primaryGreen"
                    size="xs"
                    radius="md"
                    mt="md"
                    rightSection={<IconArrowRight size={14} />}
                  >
                    Baca Selengkapnya
                  </Button>
                </Stack>
              </Card>
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

