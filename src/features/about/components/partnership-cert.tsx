'use client';

import React from 'react';
import {
  Container,
  SimpleGrid,
  Card,
  Group,
  Stack,
  Title,
  Text,
  Badge,
  Box,
  rem,
} from '@mantine/core';
import { IconUsers, IconCertificate, IconMapPin } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { farmerPartnership, certifications } from '@/data/company';

export function PartnershipCert() {
  return (
    <Box component="section">
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(32)}>
          {/* Mitra Petani */}
          <FadeIn>
            <Card
              p="xl"
              radius="lg"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2D9C8',
                height: '100%',
              }}
            >
              <Group gap="xs" mb="md">
                <IconUsers size={24} color="#4A6B3A" />
                <Title
                  order={3}
                  fz="xl"
                  c="#1C2A16"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Mitra Petani Kami
                </Title>
              </Group>
              <Text fz="sm" c="#2C3328" style={{ lineHeight: 1.7, marginBottom: rem(16) }}>
                {farmerPartnership.description}
              </Text>
              <Text fw={600} fz="xs" c="#6B4423" tt="uppercase" mb={8}>
                Wilayah Kemitraan:
              </Text>
              <Group gap="xs">
                {farmerPartnership.regions.map((region) => (
                  <Badge
                    key={region}
                    leftSection={<IconMapPin size={12} />}
                    color="primaryGreen"
                    variant="light"
                    radius="sm"
                  >
                    {region}
                  </Badge>
                ))}
              </Group>
            </Card>
          </FadeIn>

          {/* Sertifikasi & Penghargaan */}
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
              <Group gap="xs" mb="md">
                <IconCertificate size={24} color="#6B4423" />
                <Title
                  order={3}
                  fz="xl"
                  c="#1C2A16"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Sertifikasi & Penghargaan
                </Title>
              </Group>
              <Stack gap="md">
                {certifications.map((item, i) => (
                  <Box key={i}>
                    <Text fw={600} fz="sm" c="#1C2A16">
                      {item.title}
                    </Text>
                    <Text fz="xs" c="#4E5549">
                      {item.description}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Card>
          </FadeIn>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

