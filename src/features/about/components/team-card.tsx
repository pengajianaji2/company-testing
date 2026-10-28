'use client';

import React from 'react';
import Image from 'next/image';
import { Card, Box, Title, Text, rem } from '@mantine/core';
import { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
  sizes?: string;
}

export function TeamCard({
  member,
  sizes = '(max-width: 768px) 100vw, 280px',
}: TeamCardProps) {
  return (
    <Card
      p="md"
      radius="lg"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2D9C8',
        boxShadow: '0 8px 24px rgba(44, 51, 40, 0.06)',
        textAlign: 'center',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <Box
        style={{
          position: 'relative',
          width: '100%',
          height: rem(250),
          borderRadius: rem(12),
          overflow: 'hidden',
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes={sizes}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box pt="md" pb="xs">
        <Title
          order={4}
          fz="md"
          c="#1C2A16"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {member.name}
        </Title>
        <Text fz="xs" c="#6B4423" fw={500} mt={4}>
          {member.role}
        </Text>
      </Box>
    </Card>
  );
}

