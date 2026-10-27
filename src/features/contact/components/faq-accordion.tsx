'use client';

import React from 'react';
import {
  Accordion,
  Paper,
  Title,
  Text,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconHelpCircle, IconChevronDown } from '@tabler/icons-react';
import { faqList } from '@/data/company';

export const FAQAccordion = () => {
  return (
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
      <div style={{ display: 'flex', alignItems: 'center', gap: rem(12), marginBottom: rem(8) }}>
        <ThemeIcon
          size={36}
          radius="md"
          style={{ backgroundColor: '#F1F7ED', color: '#4A6B3A' }}
        >
          <IconHelpCircle size={20} />
        </ThemeIcon>
        <Title
          order={3}
          style={{
            fontFamily: 'var(--font-playfair)',
            color: '#1C2A16',
          }}
        >
          Pertanyaan Umum (FAQ)
        </Title>
      </div>

      <Text fz="sm" c="#6B7365" mb="xl">
        Jawaban cepat seputar cara pemesanan, pengiriman ke seluruh Nusantara, hingga peluang kemitraan grosir.
      </Text>

      <Accordion
        variant="separated"
        radius="md"
        chevron={<IconChevronDown size={18} color="#4A6B3A" />}
        styles={{
          item: {
            backgroundColor: '#FDFCFA',
            borderColor: '#E2D9C8',
            transition: 'border-color 200ms ease, box-shadow 200ms ease',
            '&[data-active]': {
              borderColor: '#4A6B3A',
              backgroundColor: '#FFFFFF',
            },
          },
          control: {
            padding: `${rem(16)} ${rem(20)}`,
            '&:hover': {
              backgroundColor: '#F5F0E1',
            },
          },
          label: {
            fontWeight: 600,
            fontSize: rem(15),
            color: '#1C2A16',
          },
          panel: {
            padding: `${rem(8)} ${rem(20)} ${rem(18)}`,
          },
          content: {
            color: '#2C3328',
            lineHeight: 1.6,
            fontSize: rem(14),
          },
        }}
      >
        {faqList.map((faq, index) => (
          <Accordion.Item key={index} value={`faq-${index}`}>
            <Accordion.Control>{faq.question}</Accordion.Control>
            <Accordion.Panel>
              <Text fz="sm" c="#2C3328">
                {faq.answer}
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Paper>
  );
};

