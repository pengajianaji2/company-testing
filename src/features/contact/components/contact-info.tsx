'use client';

import React from 'react';
import {
  Paper,
  Title,
  Text,
  Group,
  Stack,
  ThemeIcon,
  Box,
  Anchor,
  rem,
} from '@mantine/core';
import {
  IconMapPin,
  IconBrandWhatsapp,
  IconMail,
  IconClock,
} from '@tabler/icons-react';
import { companyProfile } from '@/data/company';

export const ContactInfo = () => {
  const { contact } = companyProfile;

  return (
    <Stack gap="lg">
      <Paper
        withBorder
        p={{ base: 'md', sm: 'xl' }}
        radius="lg"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#E2D9C8',
          boxShadow: '0 4px 20px rgba(44, 51, 40, 0.06)',
        }}
      >
        <Title
          order={3}
          style={{
            fontFamily: 'var(--font-playfair)',
            color: '#1C2A16',
            marginBottom: rem(8),
          }}
        >
          Informasi Operasional
        </Title>
        <Text fz="sm" c="#6B7365" mb="xl">
          Kami siap menyambut Anda untuk berkonsultasi seputar pesanan khusus, pasokan teh, maupun kunjungan kebun.
        </Text>

        <Stack gap="lg">
          <Group align="flex-start" wrap="nowrap">
            <ThemeIcon
              size={40}
              radius="md"
              style={{ backgroundColor: '#F1F7ED', color: '#4A6B3A', flexShrink: 0 }}
            >
              <IconMapPin size={22} />
            </ThemeIcon>
            <Box>
              <Text fw={600} fz="sm" c="#1C2A16">
                Kantor & Rumah Produksi
              </Text>
              <Text fz="sm" c="#2C3328" lh={1.5}>
                {contact.address}
              </Text>
            </Box>
          </Group>

          <Group align="flex-start" wrap="nowrap">
            <ThemeIcon
              size={40}
              radius="md"
              style={{ backgroundColor: '#F1F7ED', color: '#4A6B3A', flexShrink: 0 }}
            >
              <IconBrandWhatsapp size={22} />
            </ThemeIcon>
            <Box>
              <Text fw={600} fz="sm" c="#1C2A16">
                WhatsApp Resmi
              </Text>
              <Anchor
                href={`https://wa.me/6281234567890`}
                target="_blank"
                rel="noopener noreferrer"
                fz="sm"
                fw={500}
                c="#4A6B3A"
                underline="hover"
              >
                {contact.whatsapp}
              </Anchor>
              <Text fz="xs" c="#6B7365">
                (Respon cepat untuk tanya jawab & pesanan)
              </Text>
            </Box>
          </Group>

          <Group align="flex-start" wrap="nowrap">
            <ThemeIcon
              size={40}
              radius="md"
              style={{ backgroundColor: '#F1F7ED', color: '#4A6B3A', flexShrink: 0 }}
            >
              <IconMail size={22} />
            </ThemeIcon>
            <Box>
              <Text fw={600} fz="sm" c="#1C2A16">
                Email Korespondensi
              </Text>
              <Anchor
                href={`mailto:${contact.email}`}
                fz="sm"
                fw={500}
                c="#4A6B3A"
                underline="hover"
              >
                {contact.email}
              </Anchor>
            </Box>
          </Group>

          <Group align="flex-start" wrap="nowrap">
            <ThemeIcon
              size={40}
              radius="md"
              style={{ backgroundColor: '#F1F7ED', color: '#4A6B3A', flexShrink: 0 }}
            >
              <IconClock size={22} />
            </ThemeIcon>
            <Box>
              <Text fw={600} fz="sm" c="#1C2A16">
                Jam Operasional
              </Text>
              <Text fz="sm" c="#2C3328">
                {contact.operatingHours}
              </Text>
              <Text fz="xs" c="#6B7365">
                Minggu & Hari Libur Nasional: Tutup
              </Text>
            </Box>
          </Group>
        </Stack>
      </Paper>

      {/* Embed Google Maps */}
      <Paper
        withBorder
        radius="lg"
        style={{
          borderColor: '#E2D9C8',
          boxShadow: '0 4px 20px rgba(44, 51, 40, 0.06)',
          height: rem(260),
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={contact.googleMapsEmbedUrl}
          title="Peta Lokasi Kantor Teh Nusantara di Lembang"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Paper>
    </Stack>
  );
};

