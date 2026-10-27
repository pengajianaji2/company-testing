'use client';

import { useQuery } from '@tanstack/react-query';
import { productsData } from '@/data/products';
import { Product, ProductCategory } from '@/types';

export function useProducts(category: ProductCategory = 'Semua', searchQuery: string = '') {
  return useQuery({
    queryKey: ['products', category, searchQuery],
    queryFn: async (): Promise<Product[]> => {
      // Simulate light async fetching for standard TanStack Query lifecycle
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

export function useRelatedProducts(relatedSlugs: string[]) {
  return useQuery({
    queryKey: ['related-products', relatedSlugs],
    queryFn: async (): Promise<Product[]> => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      return productsData.filter((p) => relatedSlugs.includes(p.slug));
    },
  });
}

