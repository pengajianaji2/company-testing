'use client';

import React from 'react';
import {
  Container,
  Box,
  Badge,
  Title,
  Text,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { FadeIn } from '@/components/motion/fade-in';
import { teamMembers } from '@/data/company';
import { TeamCard } from './team-card';

export function TeamSection() {
  const founder = teamMembers[0];
  const members = teamMembers.slice(1);

  return (
    <Box
      component="section"
      py={rem(64)}
      style={{ backgroundColor: '#FDFBF7' }}
      mb={rem(80)}
    >
      <Container size="lg">
        {/* Section Header */}
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
            <Text c="#4E5549" mt={4} maw={rem(600)} mx="auto">
              Para pecinta teh yang mendedikasikan keahlian mereka demi kualitas cangkir Anda.
            </Text>
          </Box>
        </FadeIn>

        {/* Baris 1: Pendiri (Kartu Tunggal di Tengah Sesuai Referensi Hierarkis 1 + 3) */}
        {founder && (
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: rem(28),
            }}
          >
            <Box style={{ width: '100%', maxWidth: rem(280) }}>
              <FadeIn delay={0.1}>
                <TeamCard
                  member={founder}
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </FadeIn>
            </Box>
          </Box>
        )}

        {/* Baris 2: Tiga Anggota Tim Utama Sejajar */}
        {members.length > 0 && (
          <Box style={{ maxWidth: rem(900), margin: '0 auto' }}>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={rem(24)}>
              {members.map((member, idx) => (
                <FadeIn key={member.name} delay={0.15 + idx * 0.1}>
                  <TeamCard
                    member={member}
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 280px"
                  />
                </FadeIn>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Container>
    </Box>
  );
}

