'use client';

import { useQuery } from '@tanstack/react-query';
import { articlesData } from '@/data/articles';
import { Article, ArticleCategory } from '@/types';

interface ArticlesResult {
  articles: Article[];
  totalArticles: number;
  totalPages: number;
}

/**
 * Hook untuk mengambil daftar artikel jurnal teh dengan filter kategori dan pagination (US-3 / AC-6).
 *
 * @param category Kategori artikel yang dipilih ('Semua', 'Tips Seduh', dll.)
 * @param page Nomor halaman pagination aktif (dimulai dari 1)
 * @param pageSize Jumlah artikel per halaman (default: 6 artikel)
 * @returns Query object berisi daftar artikel, total kuantitas, dan total halaman
 */
export function useArticles(category: ArticleCategory = 'Semua', page: number = 1, pageSize: number = 6) {
  return useQuery({
    queryKey: ['articles', category, page, pageSize],
    queryFn: async (): Promise<ArticlesResult> => {
      await new Promise((resolve) => setTimeout(resolve, 50));

      const filtered = articlesData.filter((art) => {
        return category === 'Semua' || art.category === category;
      });

      const totalArticles = filtered.length;
      const totalPages = Math.max(1, Math.ceil(totalArticles / pageSize));
      const startIndex = (page - 1) * pageSize;
      const paginated = filtered.slice(startIndex, startIndex + pageSize);

      return {
        articles: paginated,
        totalArticles,
        totalPages,
      };
    },
  });
}

/**
 * Hook untuk mengambil detail konten editorial artikel berdasarkan slug unik (US-3 / AC-7).
 *
 * @param slug Identifier URL artikel (contoh: 'rahasia-seduh-teh-bebas-pahit')
 * @returns Query object berisi data artikel lengkap atau null jika tidak ditemukan
 */
export function useArticleBySlug(slug: string) {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async (): Promise<Article | null> => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      const found = articlesData.find((a) => a.slug === slug);
      return found || null;
    },
  });
}

/**
 * Hook untuk mengambil daftar artikel terkait berdasarkan array slug (US-3 / AC-7).
 *
 * @param relatedSlugs Array slug artikel rekomendasi
 * @returns Query object berisi daftar artikel terkait
 */
export function useRelatedArticles(relatedSlugs: string[]) {
  return useQuery({
    queryKey: ['related-articles', relatedSlugs],
    queryFn: async (): Promise<Article[]> => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      return articlesData.filter((a) => relatedSlugs.includes(a.slug));
    },
  });
}
