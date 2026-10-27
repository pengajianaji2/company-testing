'use client';

import React, { useState } from 'react';
import {
  Paper,
  TextInput,
  Textarea,
  Button,
  Stack,
  Alert,
  Title,
  Text,
  rem,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  IconUser,
  IconMail,
  IconNote,
  IconMessageDots,
  IconSend,
  IconCheck,
} from '@tabler/icons-react';
import { contactSchema } from '../schemas/contact-schema';
import { ContactFormData } from '@/types';

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Hapus pesan error field yang sedang diubah jika sebelumnya ada error
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);

    const validation = contactSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulasi pengiriman form
    setTimeout(() => {
      setIsSubmitting(false);
      const successText =
        'Terima kasih! Pesanmu sudah kami terima dan akan dibalas dalam 1 x 24 jam.';
      setSuccessMessage(successText);
      setFormData(INITIAL_FORM);

      notifications.show({
        title: 'Pesan Terkirim',
        message: successText,
        color: 'green',
        icon: <IconCheck size={18} />,
        autoClose: 5000,
      });
    }, 600);
  };

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
      <Title
        order={3}
        style={{
          fontFamily: 'var(--font-playfair)',
          color: '#1C2A16',
          marginBottom: rem(8),
        }}
      >
        Kirim Pesan
      </Title>
      <Text fz="sm" c="#6B7365" mb="lg">
        Punya pertanyaan seputar produk, kemitraan petani, atau peluang reseller? Tuliskan pesanmu di sini.
      </Text>

      {successMessage && (
        <Alert
          icon={<IconCheck size={18} />}
          title="Berhasil Terkirim"
          color="green"
          radius="md"
          mb="lg"
          withCloseButton
          onClose={() => setSuccessMessage(null)}
          aria-live="polite"
        >
          {successMessage}
        </Alert>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <Stack gap="md">
          <TextInput
            label="Nama Lengkap"
            placeholder="Contoh: Andi Pratama"
            required
            leftSection={<IconUser size={18} color="#6B7365" />}
            value={formData.name}
            onChange={(e) => handleChange('name', e.currentTarget.value)}
            error={errors.name}
            data-testid="input-name"
            radius="md"
            styles={{
              input: {
                borderColor: errors.name ? undefined : '#E2D9C8',
                '&:focus': { borderColor: '#4A6B3A' },
              },
              label: { color: '#1C2A16', fontWeight: 500, marginBottom: rem(4) },
            }}
          />

          <TextInput
            label="Alamat Email"
            placeholder="nama@email.com"
            type="email"
            required
            leftSection={<IconMail size={18} color="#6B7365" />}
            value={formData.email}
            onChange={(e) => handleChange('email', e.currentTarget.value)}
            error={errors.email}
            data-testid="input-email"
            radius="md"
            styles={{
              input: {
                borderColor: errors.email ? undefined : '#E2D9C8',
                '&:focus': { borderColor: '#4A6B3A' },
              },
              label: { color: '#1C2A16', fontWeight: 500, marginBottom: rem(4) },
            }}
          />

          <TextInput
            label="Subjek Pesan"
            placeholder="Contoh: Informasi Kerja Sama Reseller"
            required
            leftSection={<IconNote size={18} color="#6B7365" />}
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.currentTarget.value)}
            error={errors.subject}
            data-testid="input-subject"
            radius="md"
            styles={{
              input: {
                borderColor: errors.subject ? undefined : '#E2D9C8',
                '&:focus': { borderColor: '#4A6B3A' },
              },
              label: { color: '#1C2A16', fontWeight: 500, marginBottom: rem(4) },
            }}
          />

          <Textarea
            label="Pesan Anda"
            placeholder="Tuliskan detail pertanyaan atau kebutuhan kerja sama Anda..."
            required
            minRows={4}
            leftSection={
              <IconMessageDots
                size={18}
                color="#6B7365"
                style={{ alignSelf: 'flex-start', marginTop: rem(10) }}
              />
            }
            value={formData.message}
            onChange={(e) => handleChange('message', e.currentTarget.value)}
            error={errors.message}
            data-testid="input-message"
            radius="md"
            styles={{
              input: {
                borderColor: errors.message ? undefined : '#E2D9C8',
                '&:focus': { borderColor: '#4A6B3A' },
              },
              label: { color: '#1C2A16', fontWeight: 500, marginBottom: rem(4) },
            }}
          />

          <Button
            type="submit"
            color="primaryGreen"
            radius="md"
            size="md"
            loading={isSubmitting}
            leftSection={<IconSend size={18} />}
            mt="xs"
            data-testid="button-submit"
            style={{
              backgroundColor: '#4A6B3A',
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(74, 107, 58, 0.25)',
            }}
          >
            Kirim Pesan
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

