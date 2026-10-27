'use client';

import React from 'react';
import Image from 'next/image';
import {
  Container,
  Title,
  Text,
  Badge,
  Box,
  SimpleGrid,
  Card,
  Stack,
  Group,
  ThemeIcon,
  Timeline,
  rem,
} from '@mantine/core';
import {
  IconLeaf,
  IconCheck,
  IconAward,
  IconPlant,
  IconUsers,
  IconMapPin,
  IconCertificate,
} from '@tabler/icons-react';
import {
  companyProfile,
  timelineMilestones,
  teamMembers,
  farmerPartnership,
  certifications,
} from '@/data/company';
import { FadeIn } from '@/components/motion/fade-in';

export default function AboutPage() {
  return (
    <Box py={rem(48)}>
      {/* 1. HERO BANNER TENTANG KAMI */}
      <Container size="lg" mb={rem(64)}>
        <FadeIn>
          <Box ta="center" maw={rem(760)} mx="auto">
            <Badge color="primaryGreen" radius="xl" size="lg" mb="sm">
              Tentang Kami
            </Badge>
            <Title
              order={1}
              style={{
                fontFamily: 'var(--font-playfair)',
                color: '#1C2A16',
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                lineHeight: 1.2,
                marginBottom: rem(16),
              }}
            >
              Menghidupkan Kembali Budaya Teh Asli Nusantara
            </Title>
            <Text fz={{ base: 'md', sm: 'lg' }} c="#6B7365" style={{ lineHeight: 1.8 }}>
              Kisah perjalanan kami berakar dari tanah subur Jawa Barat, dedikasi petani lokal, dan semangat mempersembahkan seduhan teh murni terbaik.
            </Text>
          </Box>
        </FadeIn>
      </Container>

      {/* 2. CERITA KAMI SECTION */}
      <Box component="section" mb={rem(80)}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(48)} style={{ alignItems: 'center' }}>
            <FadeIn>
              <Box
                style={{
                  position: 'relative',
                  width: '100%',
                  height: rem(440),
                  borderRadius: rem(20),
                  overflow: 'hidden',
                  boxShadow: '0 16px 36px rgba(44, 51, 40, 0.12)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&h=667&q=80"
                  alt="Kisah Berdirinya Teh Nusantara Lembang"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Badge color="teaBrown" radius="xl" size="md" mb={8}>
                Awal Mula
              </Badge>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(30),
                  marginBottom: rem(16),
                  lineHeight: 1.3,
                }}
              >
                Cerita Kami
              </Title>
              <Text c="#2C3328" style={{ lineHeight: 1.8, marginBottom: rem(16) }}>
                {companyProfile.fullStory}
              </Text>
              <Text c="#6B7365" style={{ lineHeight: 1.7 }}>
                Kami percaya secangkir teh yang baik bukan sekadar soal rasa, melainkan ikatan kebersamaan, rasa hormat pada alam, dan kepedulian nyata pada kesejahteraan para petani yang merawatnya setiap fajar.
              </Text>
            </FadeIn>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 3. VISI & MISI */}
      <Box component="section" py={rem(64)} style={{ backgroundColor: '#FDFBF7' }} mb={rem(80)}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(32)}>
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

      {/* 4. TIMELINE SEJARAH PERJALANAN */}
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
              <Text c="#6B7365" mt={4}>
                Tonggak sejarah dedikasi kami dari tahun ke tahun.
              </Text>
            </Box>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card p={{ base: 'lg', sm: 'xl' }} radius="lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2D9C8' }}>
              <Timeline active={timelineMilestones.length - 1} bulletSize={32} lineWidth={2} color="primaryGreen">
                {timelineMilestones.map((item) => (
                  <Timeline.Item
                    key={item.year}
                    title={
                      <Text fw={700} fz="md" c="#4A6B3A" style={{ fontFamily: 'var(--font-playfair)' }}>
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

      {/* 5. TIM KAMI */}
      <Box component="section" py={rem(64)} style={{ backgroundColor: '#FDFBF7' }} mb={rem(80)}>
        <Container size="lg">
          <FadeIn>
            <Box ta="center" mb={rem(48)}>
              <Badge color="primaryGreen" radius="xl" size="md" mb={8}>
                Orang di Balik Layar
              </Badge>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(32),
                }}
              >
                Tim Teh Nusantara
              </Title>
              <Text c="#6B7365" mt={4}>
                Para pecinta teh yang mendedikasikan keahlian mereka demi kualitas cangkir Anda.
              </Text>
            </Box>
          </FadeIn>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={rem(24)}>
            {teamMembers.map((member, idx) => (
              <FadeIn key={member.name} delay={idx * 0.1}>
                <Card
                  p={0}
                  radius="lg"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2D9C8',
                    overflow: 'hidden',
                    textAlign: 'center',
                  }}
                >
                  <Box style={{ position: 'relative', width: '100%', height: rem(260) }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <Box p="md">
                    <Title order={4} fz="md" c="#1C2A16" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {member.name}
                    </Title>
                    <Text fz="xs" c="#6B4423" fw={500} mt={4}>
                      {member.role}
                    </Text>
                  </Box>
                </Card>
              </FadeIn>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 6. MITRA PETANI & SERTIFIKASI */}
      <Box component="section">
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(32)}>
            {/* Mitra Petani */}
            <FadeIn>
              <Card p="xl" radius="lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2D9C8', height: '100%' }}>
                <Group gap="xs" mb="md">
                  <IconUsers size={24} color="#4A6B3A" />
                  <Title order={3} fz="xl" c="#1C2A16" style={{ fontFamily: 'var(--font-playfair)' }}>
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
              <Card p="xl" radius="lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2D9C8', height: '100%' }}>
                <Group gap="xs" mb="md">
                  <IconCertificate size={24} color="#6B4423" />
                  <Title order={3} fz="xl" c="#1C2A16" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Sertifikasi & Penghargaan
                  </Title>
                </Group>
                <Stack gap="md">
                  {certifications.map((item, i) => (
                    <Box key={i}>
                      <Text fw={600} fz="sm" c="#1C2A16">
                        {item.title}
                      </Text>
                      <Text fz="xs" c="#6B7365">
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
    </Box>
  );
}

