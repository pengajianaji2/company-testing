export type ProductCategory =
  | 'Semua'
  | 'Teh Hitam'
  | 'Teh Hijau'
  | 'Teh Melati'
  | 'Teh Herbal'
  | 'Gift Set';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Exclude<ProductCategory, 'Semua'>;
  packaging: string;
  price: string;
  priceNumeric: number;
  description: string;
  origin: string;
  elevation: string;
  tastingNotes: string[];
  brewGuide: {
    temp: string;
    amount: string;
    water: string;
    time: string;
    note: string;
  };
  image: string;
  featured?: boolean;
  relatedSlugs: string[];
}

export type ArticleCategory =
  | 'Semua'
  | 'Tips Seduh'
  | 'Manfaat Teh'
  | 'Resep'
  | 'Berita';

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ArticleCategory, 'Semua'>;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
  relatedSlugs?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TimelineMilestone {
  year: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  city: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

