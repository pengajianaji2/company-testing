'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Container,
  Group,
  Button,
  Burger,
  Drawer,
  Stack,
  Text,
  Box,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLeaf,
  IconBrandWhatsapp,
  IconHome,
  IconCup,
  IconInfoCircle,
  IconPlant2,
  IconBook,
  IconMail,
} from '@tabler/icons-react';

const navLinks = [
  { href: '/', label: 'Beranda', icon: IconHome },
  { href: '/products', label: 'Produk', icon: IconCup },
  { href: '/about', label: 'Tentang Kami', icon: IconInfoCircle },
  { href: '/process', label: 'Proses & Kebun', icon: IconPlant2 },
  { href: '/blog', label: 'Blog', icon: IconBook },
  { href: '/contact', label: 'Kontak', icon: IconMail },
];

export function AppHeader() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

  const waLink =
    'https://wa.me/6281234567890?text=Halo%20Teh%20Nusantara,%20saya%20tertarik%20dengan%20produk%20teh%20Anda.';

  return (
    <Box
      component="header"
      style={{
        position: 'sticky',
        top: rem(16),
        zIndex: 1000,
        paddingLeft: rem(16),
        paddingRight: rem(16),
      }}
    >
      <Container size="lg" p={0}>
        <Box
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: rem(9999),
            border: '1px solid rgba(226, 217, 200, 0.8)',
            boxShadow: '0 8px 30px rgba(44, 51, 40, 0.08)',
            padding: `${rem(10)} ${rem(24)}`,
            transition: 'box-shadow 0.2s ease',
          }}
        >
          <Group justify="space-between" align="center">
            {/* Logo */}
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: rem(8),
              }}
            >
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
                <IconLeaf size={20} stroke={2} />
              </Box>
              <Box>
                <Text
                  fw={700}
                  fz={{ base: 'md', sm: 'lg' }}
                  style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    color: '#1C2A16',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.1,
                  }}
                >
                  Teh Nusantara
                </Text>
                <Text
                  fz={10}
                  fw={500}
                  style={{
                    color: '#6B4423',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                  }}
                >
                  Kebun Jawa Barat
                </Text>
              </Box>
            </Link>

            {/* Desktop Navigation Links */}
            <Group gap={rem(6)} visibleFrom="md">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      style={{
                        padding: `${rem(6)} ${rem(14)}`,
                        borderRadius: rem(9999),
                        fontSize: rem(14),
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? '#FFFFFF' : '#2C3328',
                        backgroundColor: isActive ? '#4A6B3A' : 'transparent',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = '#F5F0E1';
                          e.currentTarget.style.color = '#4A6B3A';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#2C3328';
                        }
                      }}
                    >
                      {link.label}
                    </Box>
                  </Link>
                );
              })}
            </Group>

            {/* Desktop CTA Button */}
            <Group gap="xs" visibleFrom="sm">
              <Button
                component="a"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                leftSection={<IconBrandWhatsapp size={18} />}
                radius="xl"
                color="primaryGreen"
                size="sm"
                style={{
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(74, 107, 58, 0.25)',
                }}
              >
                Pesan WhatsApp
              </Button>
            </Group>

            {/* Mobile Hamburger Burger */}
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              size="sm"
              color="#1C2A16"
              aria-label="Buka navigasi menu"
            />
          </Group>
        </Box>
      </Container>

      {/* Mobile Drawer Navigation */}
      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        position="right"
        title={
          <Group gap={8}>
            <IconLeaf size={22} color="#4A6B3A" />
            <Text fw={700} fz="md" style={{ fontFamily: 'var(--font-playfair)' }}>
              Teh Nusantara
            </Text>
          </Group>
        }
        styles={{
          content: { backgroundColor: '#FDFBF7' },
          header: { backgroundColor: '#FDFBF7', borderBottom: '1px solid #E2D9C8' },
        }}
      >
        <Stack gap="xs" pt="sm">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                style={{ textDecoration: 'none' }}
              >
                <Group
                  p="sm"
                  style={{
                    borderRadius: rem(8),
                    backgroundColor: isActive ? '#4A6B3A' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#2C3328',
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  <IconComponent size={20} />
                  <Text fz="sm">{link.label}</Text>
                </Group>
              </Link>
            );
          })}

          <Box mt="md" pt="md" style={{ borderTop: '1px solid #E2D9C8' }}>
            <Button
              component="a"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              leftSection={<IconBrandWhatsapp size={18} />}
              radius="md"
              color="primaryGreen"
              size="md"
            >
              Pesan via WhatsApp
            </Button>
            <Text ta="center" fz="xs" c="dimmed" mt="xs">
              0812-3456-7890 (Lembang, Jawa Barat)
            </Text>
          </Box>
        </Stack>
      </Drawer>
    </Box>
  );
}

