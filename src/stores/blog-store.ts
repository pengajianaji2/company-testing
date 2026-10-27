import { create } from 'zustand';
import { ArticleCategory } from '@/types';

interface BlogState {
  category: ArticleCategory;
  currentPage: number;
  pageSize: number;
  setCategory: (category: ArticleCategory) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  category: 'Semua',
  currentPage: 1,
  pageSize: 6,
  setCategory: (category) => set({ category, currentPage: 1 }),
  setPage: (currentPage) => set({ currentPage }),
  resetFilters: () => set({ category: 'Semua', currentPage: 1 }),
}));

