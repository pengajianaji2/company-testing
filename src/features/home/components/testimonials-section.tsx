'use client';

import React from 'react';
import {
  Container,
  Box,
  Badge,
  Title,
  Text,
  SimpleGrid,
  Card,
  Group,
  rem,
} from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { testimonials } from '@/data/company';

export function TestimonialsSection() {
  return (
    <Box component="section" py={rem(64)}>
      <Container size="lg">
        <FadeIn>
          <Box ta="center" mb={rem(48)}>
            <Badge color="primaryGreen" radius="xl" size="md" mb={8}>
              Kata Mereka
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: rem(34),
              }}
            >
              Secangkir Kepuasan Pelanggan
            </Title>
          </Box>
        </FadeIn>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={rem(24)}>
          {testimonials.map((item, idx) => (
            <FadeIn key={item.author} delay={idx * 0.1}>
              <Card
                p="xl"
                radius="lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2D9C8',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(44, 51, 40, 0.04)',
                }}
              >
                <Box>
                  <Group gap={4} mb="md">
                    {[...Array(item.rating)].map((_, i) => (
                      <IconStarFilled key={i} size={16} color="#CCA988" />
                    ))}
                  </Group>
                  <Text
                    fz="md"
                    c="#2C3328"
                    style={{
                      fontStyle: 'italic',
                      lineHeight: 1.7,
                    }}
                  >
                    &quot;{item.quote}&quot;
                  </Text>
                </Box>

                <Box mt="xl" pt="sm" style={{ borderTop: '1px solid #F0EAE1' }}>
                  <Text fw={600} fz="sm" c="#1C2A16">
                    {item.author}
                  </Text>
                  <Text fz="xs" c="dimmed">
                    {item.city}
                  </Text>
                </Box>
              </Card>
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

