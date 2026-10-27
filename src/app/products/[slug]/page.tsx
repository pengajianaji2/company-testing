'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  Container,
  Grid,
  Box,
  Title,
  Text,
  Badge,
  Button,
  Group,
  Stack,
  Card,
  Breadcrumbs,
  Anchor,
  SimpleGrid,
  rem,
  ThemeIcon,
} from '@mantine/core';
import {
  IconBrandWhatsapp,
  IconMapPin,
  IconMountain,
  IconDroplet,
  IconClock,
  IconThermometer,
  IconCoffee,
  IconArrowLeft,
  IconSparkles,
} from '@tabler/icons-react';
import { useProductBySlug, useRelatedProducts } from '@/features/products/hooks/use-products';
import { ProductCard } from '@/features/products/components/product-card';
import { FadeIn } from '@/components/motion/fade-in';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const { data: product, isLoading } = useProductBySlug(slug);
  const { data: relatedProducts } = useRelatedProducts(product?.relatedSlugs || []);

  if (isLoading) {
    return (
      <Container size="lg" py={rem(80)}>
        <Text ta="center" c="#6B7365">
          Memuat data produk...
        </Text>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container size="sm" py={rem(100)} ta="center">
        <Box
          p="xl"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: rem(20),
            border: '1px solid #E2D9C8',
          }}
        >
          <Title order={2} c="#1C2A16" style={{ fontFamily: 'var(--font-playfair)' }} mb="sm">
            Produk Tidak Ditemukan
          </Title>
          <Text fz="sm" c="#6B7365" mb="lg">
            Varian teh yang Anda cari mungkin telah berganti nama atau belum tersedia di katalog kami.
          </Text>
          <Button
            component={Link}
            href="/products"
            color="primaryGreen"
            radius="xl"
            leftSection={<IconArrowLeft size={16} />}
          >
            Kembali ke Katalog Produk
          </Button>
        </Box>
      </Container>
    );
  }

  const waMessage = encodeURIComponent(
    `Halo Teh Nusantara, saya tertarik memesan ${product.name}. Apakah stoknya tersedia?`
  );
  const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;

  const breadcrumbItems = [
    { title: 'Beranda', href: '/' },
    { title: 'Produk', href: '/products' },
    { title: product.name, href: '#' },
  ].map((item, index) => (
    <Anchor
      component={Link}
      href={item.href}
      key={index}
      fz="xs"
      c={index === 2 ? '#4A6B3A' : '#6B7365'}
      fw={index === 2 ? 600 : 400}
      style={{ textDecoration: 'none' }}
    >
      {item.title}
    </Anchor>
  ));

  return (
    <Box py={rem(32)}>
      <Container size="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs separator="→" mb={rem(32)}>
          {breadcrumbItems}
        </Breadcrumbs>

        {/* Main Product Layout (2 Columns on Desktop) */}
        <Grid gutter={rem(48)} mb={rem(72)}>
          {/* Left Column: Image 800x800 */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn>
              <Box
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: rem(24),
                  overflow: 'hidden',
                  border: '1px solid #E2D9C8',
                  boxShadow: '0 12px 36px rgba(44, 51, 40, 0.1)',
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </FadeIn>
          </Grid.Col>

          {/* Right Column: Info & Brew Guide */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <FadeIn delay={0.15}>
              <Stack gap="md">
                <Badge color="primaryGreen" size="md" radius="sm" w="fit-content">
                  {product.category}
                </Badge>

                <Title
                  order={1}
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    color: '#1C2A16',
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    lineHeight: 1.2,
                  }}
                >
                  {product.name}
                </Title>

                {/* Price & Packaging info */}
                <Box
                  p="md"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: rem(12),
                    border: '1px solid #E2D9C8',
                  }}
                >
                  <Text fw={700} fz="xl" c="#6B4423">
                    {product.price}
                  </Text>
                  <Text fz="xs" c="dimmed">
                    Pilihan kemasan: {product.packaging} (Harga sebagai informasi, pemesanan langsung via WhatsApp)
                  </Text>
                </Box>

                {/* Description */}
                <Text fz="md" c="#2C3328" style={{ lineHeight: 1.8 }}>
                  {product.description}
                </Text>

                {/* Origin & Elevation */}
                <Group gap="lg" mt="xs">
                  <Group gap={6}>
                    <IconMapPin size={18} color="#4A6B3A" />
                    <Text fz="sm" c="#2C3328">
                      {product.origin}
                    </Text>
                  </Group>
                  <Group gap={6}>
                    <IconMountain size={18} color="#6B4423" />
                    <Text fz="sm" c="#2C3328">
                      {product.elevation}
                    </Text>
                  </Group>
                </Group>

                {/* Tasting Notes */}
                <Box mt="xs">
                  <Text fw={600} fz="xs" c="#6B4423" tt="uppercase" mb={6}>
                    Catatan Rasa (Tasting Notes):
                  </Text>
                  <Group gap={6}>
                    {product.tastingNotes.map((note) => (
                      <Badge
                        key={note}
                        size="md"
                        color="cream"
                        variant="filled"
                        style={{ color: '#4A6B3A', backgroundColor: '#FDFCF9', border: '1px solid #D9C9A0' }}
                        leftSection={<IconSparkles size={12} />}
                      >
                        {note}
                      </Badge>
                    ))}
                  </Group>
                </Box>

                {/* Cara Menyeduh Card */}
                <Card
                  p="md"
                  radius="md"
                  mt="sm"
                  style={{
                    backgroundColor: '#FDFBF7',
                    border: '1px solid #E2D9C8',
                  }}
                >
                  <Text fw={600} fz="sm" c="#1C2A16" mb="xs" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Panduan Menyeduh Ideal
                  </Text>
                  <SimpleGrid cols={2} spacing="xs" mb="xs">
                    <Group gap={6}>
                      <IconThermometer size={16} color="#6B4423" />
                      <Text fz="xs" c="#2C3328">
                        Suhu: {product.brewGuide.temp}
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <IconCoffee size={16} color="#6B4423" />
                      <Text fz="xs" c="#2C3328">
                        Takaran: {product.brewGuide.amount}
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <IconDroplet size={16} color="#6B4423" />
                      <Text fz="xs" c="#2C3328">
                        Air: {product.brewGuide.water}
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <IconClock size={16} color="#6B4423" />
                      <Text fz="xs" c="#2C3328">
                        Waktu: {product.brewGuide.time}
                      </Text>
                    </Group>
                  </SimpleGrid>
                  <Text fz="xs" c="#6B7365" style={{ fontStyle: 'italic' }}>
                    Tip: {product.brewGuide.note}
                  </Text>
                </Card>

                {/* WhatsApp Order Button */}
                <Button
                  component="a"
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  color="primaryGreen"
                  leftSection={<IconBrandWhatsapp size={20} />}
                  mt="md"
                  style={{
                    boxShadow: '0 8px 24px rgba(74, 107, 58, 0.35)',
                    fontWeight: 600,
                  }}
                >
                  Pesan via WhatsApp
                </Button>
              </Stack>
            </FadeIn>
          </Grid.Col>
        </Grid>

        {/* Bottom Section: Related Products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <Box component="section" mt={rem(64)} pt={rem(48)} style={{ borderTop: '1px solid #E2D9C8' }}>
            <FadeIn>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(28),
                  marginBottom: rem(24),
                }}
              >
                Varian Teh Terkait
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={rem(24)}>
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </SimpleGrid>
            </FadeIn>
          </Box>
        )}
      </Container>
    </Box>
  );
}

