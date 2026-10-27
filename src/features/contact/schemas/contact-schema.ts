import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Nama harus minimal 3 karakter' }),
  email: z
    .string()
    .email({ message: 'Format email tidak valid' }),
  subject: z
    .string()
    .min(3, { message: 'Subjek harus minimal 3 karakter' }),
  message: z
    .string()
    .min(10, { message: 'Pesan harus minimal 10 karakter' }),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;

