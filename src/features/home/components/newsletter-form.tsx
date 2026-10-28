'use client';

import React, { useState } from 'react';
import { Group, TextInput, Button, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconMail, IconCheck } from '@tabler/icons-react';

export function NewsletterForm() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      notifications.show({
        title: 'Email Tidak Valid',
        message: 'Mohon masukkan alamat email yang benar.',
        color: 'red',
      });
      return;
    }

    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setNewsletterEmail('');
      notifications.show({
        title: 'Berhasil Berlangganan!',
        message: 'Terima kasih, Anda akan menerima kabar terbaru dari kebun kami.',
        color: 'primaryGreen',
        icon: <IconCheck size={18} />,
      });
    }, 400);
  };

  return (
    <form onSubmit={handleSubscribe}>
      <Group
        justify="center"
        gap="xs"
        style={{ maxWidth: rem(480), margin: '0 auto' }}
      >
        <TextInput
          placeholder="Masukkan alamat email kamu"
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.currentTarget.value)}
          radius="xl"
          size="md"
          leftSection={<IconMail size={18} color="#4E5549" />}
          style={{ flex: 1 }}
          aria-label="Email untuk berlangganan newsletter"
        />
        <Button
          type="submit"
          loading={isSubscribing}
          radius="xl"
          size="md"
          color="teaBrown"
          style={{
            backgroundColor: '#6B4423',
            fontWeight: 600,
          }}
        >
          Berlangganan
        </Button>
      </Group>
    </form>
  );
}

