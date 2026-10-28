import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Card,
  SimpleGrid,
  Badge,
  Box,
  rem,
} from '@mantine/core';
import {
  IconLeaf,
  IconArrowRight,
  IconBrandWhatsapp,
  IconUsers,
  IconPlant,
  IconAward,
  IconPackage,
  IconStarFilled,
  IconCalendar,
} from '@tabler/icons-react';
import { companyProfile, bentoFeatures, testimonials } from '@/data/company';
import { productsData } from '@/data/products';
import { articlesData } from '@/data/articles';
import { FadeIn } from '@/components/motion/fade-in';
import { NewsletterForm } from '@/features/home/components/newsletter-form';
import styles from './page.module.css';

export default function HomePage() {
  // 4 Produk Unggulan
  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 4);

  // 3 Artikel Terbaru
  const latestArticles = articlesData.slice(0, 3);

  const getWaLink = (productName: string) => {
    const message = encodeURIComponent(
      `Halo Teh Nusantara, saya tertarik memesan ${productName}. Apakah stoknya tersedia?`
    );
    return `https://wa.me/6281234567890?text=${message}`;
  };

  return (
    <Box>
      {/* 1. HERO SECTION */}
      <Box
        component="section"
        style={{
          position: 'relative',
          paddingTop: rem(40),
          paddingBottom: rem(70),
        }}
      >
        <Container size="lg">
          <Box
            style={{
              position: 'relative',
              borderRadius: rem(24),
              overflow: 'hidden',
              backgroundColor: '#1E2B18',
              minHeight: rem(540),
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 20px 40px rgba(44, 51, 40, 0.15)',
            }}
          >
            {/* Hero Background Image (next/image 1920x800) */}
            <Image
              src="/images/hero/hero.webp"
              alt="Perkebunan Teh Nusantara Lembang Jawa Barat"
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: 'cover',
                opacity: 0.42,
              }}
            />

            {/* Gradient Overlay for Text Readability */}
            <Box
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(20, 31, 16, 0.92) 0%, rgba(20, 31, 16, 0.65) 55%, rgba(20, 31, 16, 0.2) 100%)',
              }}
            />

            {/* Hero Content */}
            <Box
              style={{
                position: 'relative',
                zIndex: 2,
                padding: `${rem(48)} ${rem(40)}`,
                maxWidth: rem(700),
              }}
            >
              <FadeIn delay={0.1}>
                <Badge
                  leftSection={<IconLeaf size={14} />}
                  size="lg"
                  radius="xl"
                  variant="filled"
                  color="primaryGreen"
                  mb="md"
                  style={{
                    backgroundColor: '#4A6B3A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Teh Alami Asal Jawa Barat
                </Badge>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Title
                  order={1}
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-playfair)',
                    fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                    lineHeight: 1.18,
                    marginBottom: rem(16),
                  }}
                >
                  {companyProfile.tagline}
                </Title>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Text
                  fz={{ base: 'md', sm: 'lg' }}
                  style={{
                    color: '#E8EFE3',
                    lineHeight: 1.7,
                    marginBottom: rem(32),
                  }}
                >
                  {companyProfile.subtitle}
                </Text>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Group gap="md">
                  <Button
                    component={Link}
                    href="/products"
                    size="lg"
                    radius="xl"
                    color="primaryGreen"
                    rightSection={<IconArrowRight size={18} />}
                    style={{
                      boxShadow: '0 8px 24px rgba(74, 107, 58, 0.4)',
                    }}
                  >
                    Lihat Produk
                  </Button>
                  <Button
                    component={Link}
                    href="/about"
                    size="lg"
                    radius="xl"
                    variant="outline"
                    color="cream"
                    style={{
                      color: '#F5F0E1',
                      borderColor: 'rgba(245, 240, 225, 0.6)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    Kenali Kami
                  </Button>
                </Group>
              </FadeIn>
            </Box>

            {/* Floating Metric Card (Inspired by Reference R-2) */}
            <Box
              visibleFrom="md"
              style={{
                position: 'absolute',
                bottom: rem(32),
                right: rem(32),
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(8px)',
                borderRadius: rem(16),
                padding: `${rem(16)} ${rem(24)}`,
                border: '1px solid rgba(226, 217, 200, 0.8)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: rem(16),
              }}
            >
              <Box
                style={{
                  width: rem(44),
                  height: rem(44),
                  borderRadius: rem(12),
                  backgroundColor: '#4A6B3A',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconPlant size={26} />
              </Box>
              <Box>
                <Text fw={700} fz="md" c="#1C2A16">
                  40+ Mitra Petani
                </Text>
                <Text fz="xs" c="#4E5549">
                  100% Kebun Lokal Jawa Barat
                </Text>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. BENTO GRID: KENAPA TEH NUSANTARA (Inspired by Reference R-2) */}
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
              const icons = [IconUsers, IconPlant, IconAward, IconPackage];
              const IconComp = icons[index % icons.length];

              return (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <Card
                    p="xl"
                    radius="lg"
                    className={styles.bentoCard}
                  >
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

      {/* 3. PRODUK UNGGULAN */}
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
            {featuredProducts.map((prod, idx) => (
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

      {/* 4. TENTANG SINGKAT SECTION */}
      <Box component="section" py={rem(64)}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(48)} style={{ alignItems: 'center' }}>
            <FadeIn>
              <Box
                style={{
                  position: 'relative',
                  width: '100%',
                  height: rem(400),
                  borderRadius: rem(20),
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(44, 51, 40, 0.12)',
                }}
              >
                <Image
                  src="/images/hero/farmer.webp"
                  alt="Petani Teh Nusantara Lembang"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Badge color="teaBrown" radius="xl" size="md" mb={8}>
                Cerita Kami
              </Badge>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(32),
                  lineHeight: 1.25,
                  marginBottom: rem(16),
                }}
              >
                Dari Kebun Kecil Hingga ke Cangkir Seluruh Nusantara
              </Title>
              <Text c="#2C3328" style={{ lineHeight: 1.8, marginBottom: rem(20) }}>
                {companyProfile.shortAbout}
              </Text>
              <Text c="#4E5549" style={{ lineHeight: 1.7, marginBottom: rem(28) }}>
                Bermitra langsung dengan kelompok tani di Lembang, Pangalengan, Garut, dan Puncak, kami memastikan setiap helai daun dipanen secara adil dan diproses dengan standar mutu tertinggi.
              </Text>
              <Button
                component={Link}
                href="/about"
                radius="xl"
                size="md"
                color="primaryGreen"
                rightSection={<IconArrowRight size={16} />}
              >
                Selengkapnya Tentang Kami
              </Button>
            </FadeIn>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 5. KATEGORI TEH */}
      <Box component="section" py={rem(48)} style={{ backgroundColor: '#ECE3CD' }}>
        <Container size="lg">
          <FadeIn>
            <Box ta="center" mb={rem(32)}>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(28),
                }}
              >
                Jelajahi Berdasarkan Kategori
              </Title>
              <Text c="#6B4423" mt={4} fz="sm">
                Temukan seduhan yang sesuai dengan selera dan momen Anda.
              </Text>
            </Box>
          </FadeIn>

          <SimpleGrid cols={{ base: 2, sm: 3, md: 5 }} spacing={rem(16)}>
            {[
              { name: 'Teh Hitam', desc: 'Pekat & Hangat' },
              { name: 'Teh Hijau', desc: 'Segar & Kaya Antioksidan' },
              { name: 'Teh Melati', desc: 'Harum Alami Menenangkan' },
              { name: 'Teh Herbal', desc: 'Rempah Bebas Kafein' },
              { name: 'Gift Set', desc: 'Bingkisan Eksklusif' },
            ].map((cat, idx) => (
              <FadeIn key={cat.name} delay={idx * 0.08}>
                <Link
                  href="/products"
                  style={{ textDecoration: 'none' }}
                >
                  <Card
                    p="md"
                    radius="md"
                    ta="center"
                    className={styles.categoryCard}
                  >
                    <IconLeaf size={24} color="#6B4423" style={{ margin: '0 auto 8px' }} />
                    <Title order={3} fz="sm" c="#1C2A16" className={styles.categoryTitle}>
                      {cat.name}
                    </Title>
                    <Text fz="xs" c="#4E5549" mt={4} className={styles.categoryDesc}>
                      {cat.desc}
                    </Text>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 6. TESTIMONI (Editorial Horizontal Minimalist Style inspired by R-2) */}
      <Box component="section" py={rem(64)}>
        <Container size="lg">
          <FadeIn>
            <Box ta="center" mb={rem(48)}>
              <Badge color="primaryGreen" radius="xl" size="md" mb={8}>
                Kata Mereka
              </Badge>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(34),
                }}
              >
                Secangkir Kepuasan Pelanggan
              </Title>
            </Box>
          </FadeIn>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={rem(24)}>
            {testimonials.map((item, idx) => (
              <FadeIn key={item.author} delay={idx * 0.1}>
                <Card
                  p="xl"
                  radius="lg"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2D9C8',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(44, 51, 40, 0.04)',
                  }}
                >
                  <Box>
                    <Group gap={4} mb="md">
                      {[...Array(item.rating)].map((_, i) => (
                        <IconStarFilled key={i} size={16} color="#CCA988" />
                      ))}
                    </Group>
                    <Text
                      fz="md"
                      c="#2C3328"
                      style={{
                        fontStyle: 'italic',
                        lineHeight: 1.7,
                      }}
                    >
                      &quot;{item.quote}&quot;
                    </Text>
                  </Box>

                  <Box mt="xl" pt="sm" style={{ borderTop: '1px solid #F0EAE1' }}>
                    <Text fw={600} fz="sm" c="#1C2A16">
                      {item.author}
                    </Text>
                    <Text fz="xs" c="dimmed">
                      {item.city}
                    </Text>
                  </Box>
                </Card>
              </FadeIn>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 7. ARTIKEL TERBARU */}
      <Box component="section" py={rem(60)} style={{ backgroundColor: '#FDFBF7' }}>
        <Container size="lg">
          <Group justify="space-between" align="flex-end" mb={rem(40)}>
            <FadeIn>
              <Badge color="teaBrown" radius="xl" size="md" mb={8}>
                Jurnal Teh
              </Badge>
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#1C2A16',
                  fontSize: rem(34),
                }}
              >
                Artikel & Edukasi Terbaru
              </Title>
              <Text c="#4E5549" mt={4}>
                Tips seduh, manfaat kesehatan, dan wawasan seputar dunia teh nusantara.
              </Text>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Button
                component={Link}
                href="/blog"
                variant="subtle"
                color="primaryGreen"
                rightSection={<IconArrowRight size={16} />}
              >
                Baca Jurnal Selengkapnya
              </Button>
            </FadeIn>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={rem(24)}>
            {latestArticles.map((art, idx) => (
              <FadeIn key={art.id} delay={idx * 0.1}>
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
                  }}
                >
                  <Box style={{ position: 'relative', width: '100%', height: rem(200) }}>
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <Badge
                      style={{
                        position: 'absolute',
                        top: rem(12),
                        left: rem(12),
                        backgroundColor: '#6B4423',
                      }}
                      color="teaBrown"
                      radius="sm"
                    >
                      {art.category}
                    </Badge>
                  </Box>

                  <Stack p="lg" gap="xs" style={{ flex: 1, justifyContent: 'space-between' }}>
                    <Box>
                      <Group gap="xs" mb={4}>
                        <IconCalendar size={14} color="#4E5549" />
                        <Text fz="xs" c="#4E5549">
                          {art.date} • {art.readTime}
                        </Text>
                      </Group>
                      <Link
                        href={`/blog/${art.slug}`}
                        className={styles.cardTitleLink}
                      >
                        <Title
                          order={3}
                          style={{
                            fontFamily: 'var(--font-playfair)',
                            fontSize: rem(18),
                            lineHeight: 1.35,
                          }}
                        >
                          {art.title}
                        </Title>
                      </Link>
                      <Text fz="xs" c="#4E5549" mt={8} lineClamp={2}>
                        {art.excerpt}
                      </Text>
                    </Box>

                    <Button
                      component={Link}
                      href={`/blog/${art.slug}`}
                      variant="light"
                      color="primaryGreen"
                      size="xs"
                      radius="md"
                      mt="md"
                      rightSection={<IconArrowRight size={14} />}
                    >
                      Baca Selengkapnya
                    </Button>
                  </Stack>
                </Card>
              </FadeIn>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 8. NEWSLETTER (Kabar Terbaru dari Kebun) */}
      <Box component="section" py={rem(64)}>
        <Container size="md">
          <FadeIn>
            <Card
              p={{ base: 'xl', md: rem(48) }}
              radius="xl"
              style={{
                backgroundColor: '#4A6B3A',
                color: '#FFFFFF',
                boxShadow: '0 16px 36px rgba(74, 107, 58, 0.25)',
                textAlign: 'center',
              }}
            >
              <IconLeaf size={40} color="#E2ECD9" style={{ margin: '0 auto 12px' }} />
              <Title
                order={2}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  color: '#FFFFFF',
                  fontSize: rem(30),
                  marginBottom: rem(10),
                }}
              >
                Kabar Terbaru dari Kebun
              </Title>
              <Text
                maw={rem(520)}
                mx="auto"
                fz="sm"
                style={{ color: '#E2ECD9', lineHeight: 1.7, marginBottom: rem(28) }}
              >
                Dapatkan tips menyeduh, cerita petani, dan info produk baru langsung di email kamu.
              </Text>

              <NewsletterForm />
            </Card>
          </FadeIn>
        </Container>
      </Box>
    </Box>
  );
}
