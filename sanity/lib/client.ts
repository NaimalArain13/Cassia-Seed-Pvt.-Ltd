import { createClient } from 'next-sanity';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const FETCH_OPTIONS = { next: { revalidate: 60 } };

export interface SanityCategory {
  _id: string;
  nameEn: string;
  nameUr?: string;
  slug: string;
  image?: SanityImageSource;
  count?: number;
}

export interface SanityProduct {
  _id: string;
  nameEn: string;
  nameUr?: string;
  slug: string;
  category: string;
  brand: 'cassia' | 'malapine';
  descriptionEn?: string;
  descriptionUr?: string;
  weight?: string;
  images?: SanityImageSource[];
  youtubeUrl?: string;
  featured?: boolean;
}

export async function getProducts(brand?: string): Promise<SanityProduct[]> {
  const brandFilter = brand ? `&& brand == $brand` : '';
  return client.fetch(
    `*[_type == "product" ${brandFilter}] | order(order asc) {
      _id,
      nameEn, nameUr,
      "slug": slug.current,
      "category": category->slug.current,
      brand,
      descriptionEn, descriptionUr,
      weight,
      images,
      youtubeUrl,
      featured
    }`,
    brand ? { brand } : {},
    FETCH_OPTIONS
  );
}

export async function getFeaturedProducts(brand?: string): Promise<SanityProduct[]> {
  const brandFilter = brand ? `&& brand == $brand` : '';
  return client.fetch(
    `*[_type == "product" && featured == true ${brandFilter}] | order(order asc) {
      _id,
      nameEn, nameUr,
      "slug": slug.current,
      "category": category->slug.current,
      brand,
      descriptionEn, descriptionUr,
      weight,
      images
    }`,
    brand ? { brand } : {},
    FETCH_OPTIONS
  );
}

export async function getCategories(): Promise<SanityCategory[]> {
  return client.fetch(
    `*[_type == "category"] | order(order asc) {
      _id,
      nameEn, nameUr,
      "slug": slug.current,
      image,
      count
    }`,
    {},
    FETCH_OPTIONS
  );
}

export interface SanityVariety {
  _id: string;
  nameEn: string;
  nameUr?: string;
  slug: string;
  category: string;
  image?: SanityImageSource;
  use?: string;
  season?: string;
  origin?: string;
  brand: 'cassia' | 'malapine';
}

export async function getVarieties(categorySlug: string): Promise<SanityVariety[]> {
  return client.fetch(
    `*[_type == "variety" && category->slug.current == $categorySlug] | order(order asc) {
      _id,
      nameEn, nameUr,
      "slug": slug.current,
      "category": category->slug.current,
      image,
      use, season, origin,
      brand
    }`,
    { categorySlug },
    FETCH_OPTIONS
  );
}

export async function getVariety(categorySlug: string, slug: string): Promise<SanityVariety | null> {
  return client.fetch(
    `*[_type == "variety" && category->slug.current == $categorySlug && slug.current == $slug][0] {
      _id,
      nameEn, nameUr,
      "slug": slug.current,
      "category": category->slug.current,
      image,
      use, season, origin,
      brand
    }`,
    { categorySlug, slug },
    FETCH_OPTIONS
  );
}

export async function getProduct(slug: string): Promise<(SanityProduct & { category: { nameEn: string; slug: string } }) | null> {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      nameEn, nameUr,
      "slug": slug.current,
      "category": category->{ nameEn, "slug": slug.current },
      brand,
      descriptionEn, descriptionUr,
      weight,
      images,
      youtubeUrl
    }`,
    { slug },
    FETCH_OPTIONS
  );
}
