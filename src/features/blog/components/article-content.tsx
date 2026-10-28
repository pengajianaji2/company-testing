'use client';

import React from 'react';
import { Box, Stack, Text, Divider, rem } from '@mantine/core';
import { ShareButtons } from './share-buttons';

interface ArticleContentProps {
  title: string;
  content: string[];
}

export function ArticleContent({ title, content }: ArticleContentProps) {
  return (
    <Box
      p={{ base: 'md', sm: rem(36) }}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: rem(20),
        border: '1px solid #E2D9C8',
      }}
    >
      <Stack gap="lg">
        {content.map((paragraph, idx) => {
          const isNumbered = /^\d+\.\s/.test(paragraph);

          if (isNumbered) {
            const parts = paragraph.split('. ');
            const number = parts[0];
            const rest = parts.slice(1).join('. ');
            const boldPart = rest.split('. ')[0];
            const descPart = rest.substring(boldPart.length + 2);

            return (
              <Box
                key={idx}
                p="md"
                style={{
                  backgroundColor: '#FDFBF7',
                  borderRadius: rem(12),
                  borderLeft: '4px solid #4A6B3A',
                }}
              >
                <Text fz="md" c="#1C2A16" fw={700} mb={4}>
                  {number}. {boldPart}.
                </Text>
                {descPart && (
                  <Text fz="sm" c="#2C3328" style={{ lineHeight: 1.7 }}>
                    {descPart}
                  </Text>
                )}
              </Box>
            );
          }

          return (
            <Text
              key={idx}
              fz="md"
              c="#2C3328"
              style={{
                lineHeight: 1.85,
                fontSize: rem(17),
              }}
            >
              {paragraph}
            </Text>
          );
        })}
      </Stack>

      <Divider my={rem(32)} color="#F0EAE1" />

      {/* Social Share Buttons */}
      <ShareButtons title={title} />
    </Box>
  );
}

