'use client';

import React from 'react';
import {
  Container,
  Box,
  Badge,
  Title,
  Text,
  Card,
  Timeline,
  rem,
} from '@mantine/core';
import { IconPlant } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { timelineMilestones } from '@/data/company';

export function CompanyTimeline() {
  return (
    <Box component="section" mb={rem(80)}>
      <Container size="md">
        <FadeIn>
          <Box ta="center" mb={rem(48)}>
            <Badge color="teaBrown" radius="xl" size="md" mb={8}>
              Jejak Langkah
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: rem(32),
              }}
            >
              Perjalanan Teh Nusantara
            </Title>
            <Text c="#4E5549" mt={4}>
              Tonggak sejarah dedikasi kami dari tahun ke tahun.
            </Text>
          </Box>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card
            p={{ base: 'lg', sm: 'xl' }}
            radius="lg"
            style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2D9C8' }}
          >
            <Timeline
              active={timelineMilestones.length - 1}
              bulletSize={32}
              lineWidth={2}
              color="primaryGreen"
            >
              {timelineMilestones.map((item) => (
                <Timeline.Item
                  key={item.year}
                  title={
                    <Text
                      fw={700}
                      fz="md"
                      c="#4A6B3A"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      Tahun {item.year}
                    </Text>
                  }
                  bullet={<IconPlant size={16} />}
                >
                  <Text c="#2C3328" fz="sm" mt={4} style={{ lineHeight: 1.6 }}>
                    {item.description}
                  </Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </FadeIn>
      </Container>
    </Box>
  );
}

