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
  rem,
} from '@mantine/core';
import {
  IconUsers,
  IconPlant,
  IconAward,
  IconPackage,
} from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { bentoFeatures } from '@/data/company';
import styles from '@/app/page.module.css';

export function BentoFeatures() {
  const icons = [IconUsers, IconPlant, IconAward, IconPackage];

  return (
    <Box component="section" py={rem(48)}>
      <Container size="lg">
        <FadeIn>
          <Box ta="center" mb={rem(40)}>
            <Badge color="primaryGreen" radius="xl" size="md" mb={8}>
              Keunggulan Kami
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: rem(34),
              }}
            >
              Kenapa Teh Nusantara?
            </Title>
            <Text c="#4E5549" mt={8} maw={rem(600)} mx="auto">
              Komitmen kami menjaga kemurnian rasa dari tanah Priangan hingga ke setiap seduhan cangkir Anda.
            </Text>
          </Box>
        </FadeIn>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={rem(20)}>
          {bentoFeatures.map((item, index) => {
            const IconComp = icons[index % icons.length];

            return (
              <FadeIn key={item.title} delay={index * 0.1}>
                <Card p="xl" radius="lg" className={styles.bentoCard}>
                  <Box
                    style={{
                      width: rem(48),
                      height: rem(48),
                      borderRadius: rem(12),
                      backgroundColor: '#F1F7ED',
                      color: '#4A6B3A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: rem(16),
                    }}
                  >
                    <IconComp size={26} stroke={1.8} />
                  </Box>
                  <Badge color="teaBrown" variant="light" size="sm" mb={8} radius="sm">
                    {item.badge}
                  </Badge>
                  <Title order={3} fz="lg" c="#1C2A16" mb={8}>
                    {item.title}
                  </Title>
                  <Text fz="sm" c="#4E5549" style={{ lineHeight: 1.6 }}>
                    {item.description}
                  </Text>
                </Card>
              </FadeIn>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

