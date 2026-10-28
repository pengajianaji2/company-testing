'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  Box,
  Badge,
  Title,
  Text,
  Button,
  Group,
  SimpleGrid,
  Card,
  Stack,
  rem,
} from '@mantine/core';
import { IconArrowRight, IconBrandWhatsapp } from '@tabler/icons-react';
import { FadeIn } from '@/components/motion/fade-in';
import { Product } from '@/types';
import styles from '@/app/page.module.css';

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const getWaLink = (productName: string) => {
    const message = encodeURIComponent(
      `Halo Teh Nusantara, saya tertarik memesan ${productName}. Apakah stoknya tersedia?`
    );
    return `https://wa.me/6281234567890?text=${message}`;
  };

  return (
    <Box component="section" py={rem(60)} style={{ backgroundColor: '#FDFBF7' }}>
      <Container size="lg">
        <Group justify="space-between" align="flex-end" mb={rem(40)}>
          <FadeIn>
            <Badge color="primaryGreen" radius="xl" size="md" mb={8}>
              Koleksi Pilihan
            </Badge>
            <Title
              order={2}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: rem(34),
              }}
            >
              Produk Unggulan
            </Title>
            <Text c="#4E5549" mt={4}>
              Empat varian teh terbaik yang paling dicintai pelanggan kami.
            </Text>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Button
              component={Link}
              href="/products"
              variant="subtle"
              color="primaryGreen"
              rightSection={<IconArrowRight size={16} />}
            >
              Lihat Semua Produk
            </Button>
          </FadeIn>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={rem(24)}>
          {products.map((prod, idx) => (
            <FadeIn key={prod.id} delay={idx * 0.1}>
              <Card
                p={0}
                radius="lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2D9C8',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: '0 4px 16px rgba(44, 51, 40, 0.05)',
                }}
              >
                {/* Photo Container (800x800 square) */}
                <Box style={{ position: 'relative', width: '100%', height: rem(220) }}>
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <Badge
                    style={{
                      position: 'absolute',
                      top: rem(12),
                      left: rem(12),
                      backgroundColor: '#4A6B3A',
                    }}
                    color="primaryGreen"
                    radius="sm"
                  >
                    {prod.category}
                  </Badge>
                </Box>

                {/* Card Content */}
                <Stack p="lg" gap="xs" style={{ flex: 1, justifyContent: 'space-between' }}>
                  <Box>
                    <Link
                      href={`/products/${prod.slug}`}
                      className={styles.cardTitleLink}
                    >
                      <Title
                        order={3}
                        style={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: rem(18),
                          lineHeight: 1.3,
                        }}
                      >
                        {prod.name}
                      </Title>
                    </Link>
                    <Text fz="xs" c="#4E5549" mt={4} lineClamp={2}>
                      {prod.description}
                    </Text>
                    <Text fw={600} fz="sm" c="#6B4423" mt={8}>
                      {prod.price}
                    </Text>
                    <Text fz="xs" c="dimmed">
                      Kemasan: {prod.packaging}
                    </Text>
                  </Box>

                  <Button
                    component="a"
                    href={getWaLink(prod.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    size="sm"
                    radius="md"
                    color="primaryGreen"
                    leftSection={<IconBrandWhatsapp size={16} />}
                    mt="md"
                  >
                    Pesan via WhatsApp
                  </Button>
                </Stack>
              </Card>
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

