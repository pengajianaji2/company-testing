'use client';

import React from 'react';
import {
  Container,
  SimpleGrid,
  Card,
  ThemeIcon,
  Title,
  Text,
  Stack,
  Group,
  Box,
  rem,
} from '@mantine/core';
import { IconLeaf, IconAward, IconCheck } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { companyProfile } from '@/data/company';

export function VisionMission() {
  return (
    <Box component="section" py={rem(64)} style={{ backgroundColor: '#FDFBF7' }} mb={rem(80)}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(32)}>
          {/* Visi */}
          <FadeIn>
            <Card
              p="xl"
              radius="lg"
              style={{
                backgroundColor: '#4A6B3A',
                color: '#FFFFFF',
                height: '100%',
                boxShadow: '0 12px 28px rgba(74, 107, 58, 0.2)',
              }}
            >
              <ThemeIcon size={48} radius="md" color="cream" variant="white" mb="lg">
                <IconLeaf size={28} color="#4A6B3A" />
              </ThemeIcon>
              <Title
                order={3}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#FFFFFF',
                  fontSize: rem(26),
                  marginBottom: rem(12),
                }}
              >
                Visi Kami
              </Title>
              <Text fz="md" style={{ color: '#E2ECD9', lineHeight: 1.8 }}>
                &quot;{companyProfile.vision}&quot;
              </Text>
            </Card>
          </FadeIn>

          {/* Misi */}
          <FadeIn delay={0.15}>
            <Card
              p="xl"
              radius="lg"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2D9C8',
                height: '100%',
              }}
            >
              <ThemeIcon size={48} radius="md" color="teaBrown" variant="light" mb="lg">
                <IconAward size={28} color="#6B4423" />
              </ThemeIcon>
              <Title
                order={3}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(26),
                  marginBottom: rem(16),
                }}
              >
                Misi Kami
              </Title>
              <Stack gap="sm">
                {companyProfile.missions.map((misi, i) => (
                  <Group key={i} align="flex-start" gap="xs">
                    <Box
                      style={{
                        width: rem(20),
                        height: rem(20),
                        borderRadius: '50%',
                        backgroundColor: '#F1F7ED',
                        color: '#4A6B3A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: rem(2),
                        flexShrink: 0,
                      }}
                    >
                      <IconCheck size={12} stroke={3} />
                    </Box>
                    <Text fz="sm" c="#2C3328" style={{ lineHeight: 1.6 }}>
                      {misi}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Card>
          </FadeIn>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

