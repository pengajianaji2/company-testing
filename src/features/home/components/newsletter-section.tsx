'use client';

import React from 'react';
import { Container, Card, Title, Text, Box, rem } from '@mantine/core';
import { IconLeaf } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { NewsletterForm } from './newsletter-form';

export function NewsletterSection() {
  return (
    <Box component="section" py={rem(64)}>
      <Container size="md">
        <FadeIn>
          <Card
            p={{ base: 'xl', md: rem(48) }}
            radius="xl"
            style={{
              backgroundColor: '#4A6B3A',
              color: '#FFFFFF',
              boxShadow: '0 16px 36px rgba(74, 107, 58, 0.25)',
              textAlign: 'center',
            }}
          >
            <IconLeaf size={40} color="#E2ECD9" style={{ margin: '0 auto 12px' }} />
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#FFFFFF',
                fontSize: rem(30),
                marginBottom: rem(10),
              }}
            >
              Kabar Terbaru dari Kebun
            </Title>
            <Text
              maw={rem(520)}
              mx="auto"
              fz="sm"
              style={{ color: '#E2ECD9', lineHeight: 1.7, marginBottom: rem(28) }}
            >
              Dapatkan tips menyeduh, cerita petani, dan info produk baru langsung di email kamu.
            </Text>

            <NewsletterForm />
          </Card>
        </FadeIn>
      </Container>
    </Box>
  );
}

