'use client';

import React from 'react';
import { Card, Text, SimpleGrid, Group } from '@mantine/core';
import {
  IconThermometer,
  IconCoffee,
  IconDroplet,
  IconClock,
} from '@tabler/icons-react';
import { Product } from '@/types';

interface BrewGuideCardProps {
  brewGuide: Product['brewGuide'];
}

export function BrewGuideCard({ brewGuide }: BrewGuideCardProps) {
  return (
    <Card
      p="md"
      radius="md"
      mt="sm"
      style={{
        backgroundColor: '#FDFBF7',
        border: '1px solid #E2D9C8',
      }}
    >
      <Text
        fw={600}
        fz="sm"
        c="#1C2A16"
        mb="xs"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Panduan Menyeduh Ideal
      </Text>
      <SimpleGrid cols={2} spacing="xs" mb="xs">
        <Group gap={6}>
          <IconThermometer size={16} color="#6B4423" />
          <Text fz="xs" c="#2C3328">
            Suhu: {brewGuide.temp}
          </Text>
        </Group>
        <Group gap={6}>
          <IconCoffee size={16} color="#6B4423" />
          <Text fz="xs" c="#2C3328">
            Takaran: {brewGuide.amount}
          </Text>
        </Group>
        <Group gap={6}>
          <IconDroplet size={16} color="#6B4423" />
          <Text fz="xs" c="#2C3328">
            Air: {brewGuide.water}
          </Text>
        </Group>
        <Group gap={6}>
          <IconClock size={16} color="#6B4423" />
          <Text fz="xs" c="#2C3328">
            Waktu: {brewGuide.time}
          </Text>
        </Group>
      </SimpleGrid>
      <Text fz="xs" c="#6B7365" style={{ fontStyle: 'italic' }}>
        Tip: {brewGuide.note}
      </Text>
    </Card>
  );
}
