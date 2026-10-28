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
  Breadcrumbs,
  Anchor,
  rem,
} from '@mantine/core';
import {
  IconBrandWhatsapp,
  IconMapPin,
  IconMountain,
  IconArrowLeft,
  IconSparkles,
} from '@tabler/icons-react';
import {
  useProductBySlug,
  useRelatedProducts,
} from '@/features/products/hooks/use-products';
import {
  BrewGuideCard,
  RelatedProducts,
} from '@/features/products/components';
import { FadeIn } from '@/components/motion/fade-in';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const { data: product, isLoading } = useProductBySlug(slug);
  const { data: relatedProducts } = useRelatedProducts(
    product?.relatedSlugs || []
  );

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
          <Title
            order={2}
            c="#1C2A16"
            style={{ fontFamily: 'var(--font-playfair)' }}
            mb="sm"
          >
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                        style={{
                          color: '#4A6B3A',
                          backgroundColor: '#FDFCF9',
                          border: '1px solid #D9C9A0',
                        }}
                        leftSection={<IconSparkles size={12} />}
                      >
                        {note}
                      </Badge>
                    ))}
                  </Group>
                </Box>

                {/* Cara Menyeduh Card (Modular Component) */}
                <BrewGuideCard brewGuide={product.brewGuide} />

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

        {/* Bottom Section: Related Products (Modular Component) */}
        {relatedProducts && relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </Container>
    </Box>
  );
}
