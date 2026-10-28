'use client';

import { useQuery } from '@tanstack/react-query';
import { productsData } from '@/data/products';
import { Product, ProductCategory } from '@/types';

/**
 * Hook untuk mengambil daftar produk dengan filter kategori dan pencarian reaktif (US-2 / AC-3).
 *
 * @param category Kategori produk yang dipilih ('Semua', 'Teh Hitam', dll.)
 * @param searchQuery Kata kunci pencarian pada nama, deskripsi, atau tasting notes
 * @returns Query object TanStack Query dengan data produk yang terfilter
 */
export function useProducts(category: ProductCategory = 'Semua', searchQuery: string = '') {
  return useQuery({
    queryKey: ['products', category, searchQuery],
    queryFn: async (): Promise<Product[]> => {
      // Simulasi delay asinkron ringan untuk siklus TanStack Query
      await new Promise((resolve) => setTimeout(resolve, 50));

      return productsData.filter((product) => {
        const matchesCategory =
          category === 'Semua' || product.category === category;

        const cleanQuery = searchQuery.trim().toLowerCase();
        const matchesSearch =
          cleanQuery === '' ||
          product.name.toLowerCase().includes(cleanQuery) ||
          product.description.toLowerCase().includes(cleanQuery) ||
          product.tastingNotes.some((t) => t.toLowerCase().includes(cleanQuery));

        return matchesCategory && matchesSearch;
      });
    },
  });
}

/**
 * Hook untuk mengambil detail spesifikasi satu produk berdasarkan slug unik (US-2 / AC-5).
 *
 * @param slug Identifier URL produk (contoh: 'teh-hitam-priangan')
 * @returns Query object berisi data produk spesifik atau null jika tidak ditemukan
 */
export function useProductBySlug(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async (): Promise<Product | null> => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      const found = productsData.find((p) => p.slug === slug);
      return found || null;
    },
  });
}

/**
 * Hook untuk mengambil daftar produk terkait berdasarkan array slug (US-2 / AC-5).
 *
 * @param relatedSlugs Array slug produk yang direkomendasikan
 * @returns Query object berisi daftar produk terkait
 */
export function useRelatedProducts(relatedSlugs: string[]) {
  return useQuery({
    queryKey: ['related-products', relatedSlugs],
    queryFn: async (): Promise<Product[]> => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      return productsData.filter((p) => relatedSlugs.includes(p.slug));
    },
  });
}
