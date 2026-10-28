import { create } from 'zustand';
import { ProductCategory } from '@/types';

interface ProductsState {
  category: ProductCategory;
  searchQuery: string;
  setCategory: (category: ProductCategory) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

/**
 * Zustand Store untuk mengelola state filter dan pencarian katalog produk (US-2 / AC-3).
 */
export const useProductsStore = create<ProductsState>((set) => ({
  category: 'Semua',
  searchQuery: '',
  setCategory: (category) => set({ category }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  resetFilters: () => set({ category: 'Semua', searchQuery: '' }),
}));
