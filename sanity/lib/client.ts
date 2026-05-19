import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function getProducts(brand?: string) {
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
      featured,
    }`,
    brand ? { brand } : {}
  );
}

export async function getFeaturedProducts(brand?: string) {
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
      images,
    }`,
    brand ? { brand } : {}
  );
}

export async function getCategories() {
  return client.fetch(
    `*[_type == "category"] | order(order asc) {
      _id,
      nameEn, nameUr,
      "slug": slug.current,
      image,
      count,
    }`
  );
}

export async function getProduct(slug: string) {
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
      youtubeUrl,
    }`,
    { slug }
  );
}
