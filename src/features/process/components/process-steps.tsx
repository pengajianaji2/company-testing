'use client';

import React from 'react';
import { Container, Box, Badge, Title, Text, SimpleGrid, rem } from '@mantine/core';
import { FadeIn } from '@/components/motion/fade-in';
import { processSteps } from '@/data/company';
import { ProcessStepCard } from './process-step-card';

export function ProcessSteps() {
  return (
    <Box component="section" mb={rem(80)}>
      <Container size="lg">
        <FadeIn>
          <Box ta="center" mb={rem(48)}>
            <Badge color="teaBrown" radius="xl" size="md" mb={8}>
              Tahapan Produksi
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: rem(32),
              }}
            >
              5 Langkah Menjaga Kemurnian Rasa
            </Title>
            <Text c="#4E5549" mt={4}>
              Proses teliti dari fajar pertama hingga daun teh siap diseduh.
            </Text>
          </Box>
        </FadeIn>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={rem(28)}>
          {processSteps.map((step, idx) => (
            <FadeIn key={step.number} delay={idx * 0.1}>
              <ProcessStepCard step={step} />
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

