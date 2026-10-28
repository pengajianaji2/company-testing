'use client';

import React from 'react';
import {
  Container,
  Title,
  Text,
  Badge,
  Box,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { ContactForm } from '@/features/contact/components/contact-form';
import { ContactInfo } from '@/features/contact/components/contact-info';
import { FAQAccordion } from '@/features/contact/components/faq-accordion';
import { FadeIn } from '@/components/motion/fade-in';

export default function ContactPage() {
  return (
    <Box py={rem(48)}>
      {/* 1. HERO BANNER */}
      <Container size="lg" mb={rem(48)}>
        <FadeIn>
          <Box ta="center" maw={rem(720)} mx="auto">
            <Badge color="teaBrown" radius="xl" size="lg" mb="sm">
              Hubungi Kami
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
              Mari Terhubung & Berbincang
            </Title>
            <Text fz={{ base: 'md', sm: 'lg' }} c="#4E5549">
              Apakah Anda ingin memesan teh dalam jumlah khusus, bermitra sebagai reseller, atau sekadar menyapa dan bertanya seputar kebun kami? Kami dengan senang hati siap mendengarkan.
            </Text>
          </Box>
        </FadeIn>
      </Container>

      {/* 2. GRID UTAMA (FORM & INFO KANTOR) */}
      <Container size="lg" mb={rem(56)}>
        <FadeIn delay={0.1}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(32)}>
            <ContactForm />
            <ContactInfo />
          </SimpleGrid>
        </FadeIn>
      </Container>

      {/* 3. SECTION FAQ */}
      <Container size="lg">
        <FadeIn delay={0.2}>
          <FAQAccordion />
        </FadeIn>
      </Container>
    </Box>
  );
}

