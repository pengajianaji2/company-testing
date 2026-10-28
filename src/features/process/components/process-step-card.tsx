'use client';

import React from 'react';
import Image from 'next/image';
import { Card, Box, Badge, Title, Text, Stack, rem } from '@mantine/core';
import { ProcessStep } from '@/types';

interface ProcessStepCardProps {
  step: ProcessStep;
}

export function ProcessStepCard({ step }: ProcessStepCardProps) {
  return (
    <Card
      p={0}
      radius="lg"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2D9C8',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 16px rgba(44, 51, 40, 0.05)',
      }}
    >
      {/* Photo Container (800x533 px) */}
      <Box style={{ position: 'relative', width: '100%', height: rem(200) }}>
        <Image
          src={step.image}
          alt={`Proses ${step.title} Teh Nusantara`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <Badge
          size="lg"
          radius="sm"
          style={{
            position: 'absolute',
            top: rem(12),
            left: rem(12),
            backgroundColor: '#4A6B3A',
            color: '#FFFFFF',
            fontWeight: 700,
          }}
        >
          Tahap {step.number}
        </Badge>
      </Box>

      <Stack p="lg" gap="xs" style={{ flex: 1 }}>
        <Title
          order={3}
          fz="xl"
          c="#1C2A16"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {step.title}
        </Title>
        <Text fz="sm" c="#4E5549" style={{ lineHeight: 1.7 }}>
          {step.description}
        </Text>
      </Stack>
    </Card>
  );
}

