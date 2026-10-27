'use client';

import React from 'react';
import Link from 'next/link';
import {
  Container,
  Grid,
  Stack,
  Group,
  Text,
  Title,
  Box,
  ActionIcon,
  rem,
} from '@mantine/core';
import {
  IconLeaf,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconClock,
} from '@tabler/icons-react';
import { companyProfile } from '@/data/company';

export function AppFooter() {
  return (
    <Box
      component="footer"
      mt={rem(80)}
      style={{
        backgroundColor: '#1E2B18', // Deep forest green
        color: '#F5F0E1',
        borderTop: '3px solid #4A6B3A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Watermark Typography inspired by R-2 */}
      <Box
        style={{
          position: 'absolute',
          bottom: rem(-20),
          right: rem(-10),
          fontSize: rem(130),
          fontWeight: 900,
          fontFamily: 'var(--font-playfair)',
          color: 'rgba(255, 255, 255, 0.02)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        TEH NUSANTARA
      </Box>

      <Container size="lg" py={rem(64)} style={{ position: 'relative', zIndex: 1 }}>
        <Grid gutter={rem(40)}>
          {/* Brand & Story */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Group gap="xs">
                <Box
                  style={{
                    width: rem(36),
                    height: rem(36),
                    borderRadius: '50%',
                    backgroundColor: '#4A6B3A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  <IconLeaf size={20} />
                </Box>
                <Title
                  order={3}
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    color: '#FFFFFF',
                    fontSize: rem(22),
                  }}
                >
                  {companyProfile.name}
                </Title>
              </Group>

              <Text fz="sm" style={{ color: '#D5DFC9', lineHeight: 1.7 }}>
                {companyProfile.shortAbout}
              </Text>

              <Group gap="xs" mt="xs">
                <ActionIcon
                  component="a"
                  href={companyProfile.contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  variant="subtle"
                  color="gray"
                  aria-label="Instagram Teh Nusantara"
                  style={{ color: '#F5F0E1' }}
                >
                  <IconBrandInstagram size={20} />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  href={companyProfile.contact.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  variant="subtle"
                  color="gray"
                  aria-label="Facebook Teh Nusantara"
                  style={{ color: '#F5F0E1' }}
                >
                  <IconBrandFacebook size={20} />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  href={companyProfile.contact.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  variant="subtle"
                  color="gray"
                  aria-label="TikTok Teh Nusantara"
                  style={{ color: '#F5F0E1' }}
                >
                  <IconBrandTiktok size={20} />
                </ActionIcon>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Quick Menu */}
          <Grid.Col span={{ base: 6, sm: 6, md: 2 }}>
            <Stack gap="sm">
              <Text fw={600} fz="md" c="#FFFFFF" style={{ fontFamily: 'var(--font-playfair)' }}>
                Menu
              </Text>
              <Stack gap={8}>
                {[
                  { label: 'Beranda', href: '/' },
                  { label: 'Katalog Produk', href: '/products' },
                  { label: 'Tentang Kami', href: '/about' },
                  { label: 'Proses & Kebun', href: '/process' },
                  { label: 'Jurnal Teh', href: '/blog' },
                  { label: 'Hubungi Kami', href: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      color: '#C4D4B5',
                      textDecoration: 'none',
                      fontSize: rem(14),
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C4D4B5')}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Categories */}
          <Grid.Col span={{ base: 6, sm: 6, md: 2 }}>
            <Stack gap="sm">
              <Text fw={600} fz="md" c="#FFFFFF" style={{ fontFamily: 'var(--font-playfair)' }}>
                Koleksi Teh
              </Text>
              <Stack gap={8}>
                {[
                  'Teh Hitam Priangan',
                  'Teh Hijau Puntang',
                  'Teh Melati Premium',
                  'Teh Herbal Rempah',
                  'Gift Set Nusantara',
                ].map((cat) => (
                  <Link
                    key={cat}
                    href="/products"
                    style={{
                      color: '#C4D4B5',
                      textDecoration: 'none',
                      fontSize: rem(14),
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C4D4B5')}
                  >
                    {cat}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Contact Details */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="sm">
              <Text fw={600} fz="md" c="#FFFFFF" style={{ fontFamily: 'var(--font-playfair)' }}>
                Kantor & Kebun
              </Text>

              <Group align="flex-start" gap="xs">
                <IconMapPin size={18} color="#89B366" style={{ marginTop: 3, flexShrink: 0 }} />
                <Text fz="sm" style={{ color: '#D5DFC9' }}>
                  {companyProfile.contact.address}
                </Text>
              </Group>

              <Group align="center" gap="xs">
                <IconBrandWhatsapp size={18} color="#89B366" style={{ flexShrink: 0 }} />
                <Text
                  component="a"
                  href={`https://wa.me/6281234567890`}
                  target="_blank"
                  rel="noopener noreferrer"
                  fz="sm"
                  style={{ color: '#D5DFC9', textDecoration: 'none' }}
                >
                  WhatsApp: {companyProfile.contact.whatsapp}
                </Text>
              </Group>

              <Group align="center" gap="xs">
                <IconMail size={18} color="#89B366" style={{ flexShrink: 0 }} />
                <Text
                  component="a"
                  href={`mailto:${companyProfile.contact.email}`}
                  fz="sm"
                  style={{ color: '#D5DFC9', textDecoration: 'none' }}
                >
                  Email: {companyProfile.contact.email}
                </Text>
              </Group>

              <Group align="center" gap="xs">
                <IconClock size={18} color="#89B366" style={{ flexShrink: 0 }} />
                <Text fz="xs" style={{ color: '#A5C68B' }}>
                  {companyProfile.contact.operatingHours}
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Box
          mt={rem(48)}
          pt={rem(24)}
          style={{
            borderTop: '1px solid rgba(226, 217, 200, 0.15)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: rem(12),
          }}
        >
          <Text fz="xs" style={{ color: '#97A88B' }}>
            © 2026 {companyProfile.name}. Hak cipta dilindungi undang-undang.
          </Text>
          <Text fz="xs" style={{ color: '#97A88B' }}>
            Dari Kebun ke Cangkir • Dipetik Langsung di Jawa Barat
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

