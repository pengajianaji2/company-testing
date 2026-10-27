'use client';

import React, { useState, useEffect } from 'react';
import { Group, Button, Text, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconCopy,
  IconCheck,
} from '@tabler/icons-react';

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl || window.location.href);
      notifications.show({
        title: 'Tautan Berhasil Disalin!',
        message: 'Tautan artikel telah tersimpan di clipboard Anda.',
        color: 'primaryGreen',
        icon: <IconCheck size={18} />,
      });
    }
  };

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const waShareUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  return (
    <Group gap="sm" align="center" wrap="wrap">
      <Text fw={600} fz="sm" c="#1C2A16">
        Bagikan Artikel:
      </Text>

      <Button
        component="a"
        href={waShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        size="xs"
        radius="xl"
        color="primaryGreen"
        leftSection={<IconBrandWhatsapp size={16} />}
        style={{ fontWeight: 600 }}
      >
        WhatsApp
      </Button>

      <Button
        component="a"
        href={fbShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        size="xs"
        radius="xl"
        color="blue"
        leftSection={<IconBrandFacebook size={16} />}
        style={{ fontWeight: 600 }}
      >
        Facebook
      </Button>

      <Button
        onClick={handleCopyLink}
        size="xs"
        radius="xl"
        variant="outline"
        color="primaryGreen"
        leftSection={<IconCopy size={16} />}
        style={{ fontWeight: 600, backgroundColor: '#FFFFFF' }}
      >
        Salin Tautan
      </Button>
    </Group>
  );
}

