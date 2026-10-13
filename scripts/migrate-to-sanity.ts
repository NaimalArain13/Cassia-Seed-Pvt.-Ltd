process.loadEnvFile?.('.env');

import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET / SANITY_API_TOKEN in .env'
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const ROOT = process.cwd();

interface CategorySeed {
  slug: string;
  nameEn: string;
  imagePath: string;
  count?: number;
  order: number;
}

interface ProductSeed {
  slug: string;
  category: string;
  nameEn: string;
  nameUr: string;
  descriptionEn: string;
  weight: string;
  brand: 'cassia' | 'malapine';
  imagePath: string;
  featured: boolean;
  order: number;
}

interface VarietySeed {
  slug: string;
  category: string;
  nameEn: string;
  imagePath: string;
  use: string;
  season: string;
  origin: string;
  brand: 'cassia' | 'malapine';
  order: number;
}

const CATEGORIES: CategorySeed[] = [
  { slug: 'tomatoes', nameEn: 'Tomatoes', imagePath: 'public/assets/categories/tomatoes/roma-tomato.jpeg', count: 12, order: 0 },
  { slug: 'peppers', nameEn: 'Peppers & Chillies', imagePath: 'public/assets/categories/peppers/serrano-pepper.jpeg', count: 9, order: 1 },
  { slug: 'gourds', nameEn: 'Gourds', imagePath: 'public/assets/categories/gourds/bottle-gourd.jpeg', count: 6, order: 2 },
  { slug: 'brinjals', nameEn: 'Brinjals', imagePath: 'public/assets/categories/brinjals/brinjal.jpeg', count: 6, order: 3 },
  { slug: 'root-vegetables', nameEn: 'Root Vegetables', imagePath: 'public/assets/products/cassia-beet-root.png', order: 4 },
];

const PRODUCTS: ProductSeed[] = [
  {
    slug: 'ahmer-f1',
    category: 'tomatoes',
    nameEn: 'Hybrid Tomato Ahmer F1',
    nameUr: 'ہائبرڈ ٹماٹر اَحمر ایف ون',
    descriptionEn: "Heat-tolerant, uniform fruit. Ideal for Pakistan's summer growing season.",
    weight: 'N.Wt 10g',
    brand: 'cassia',
    imagePath: 'public/assets/products/cassia-ahmer-tomato.png',
    featured: true,
    order: 0,
  },
  {
    slug: 'queen-f1',
    category: 'gourds',
    nameEn: 'Sponge Gourd Queen F1',
    nameUr: 'ہائبرڈ سپنج گوارد کوئین',
    descriptionEn: 'Long, tender, early harvest. High yield per acre.',
    weight: 'N.Wt 50g',
    brand: 'cassia',
    imagePath: 'public/assets/products/cassia-sponge-gourd-queen-2.png',
    featured: true,
    order: 1,
  },
  {
    slug: 'h-555-f1',
    category: 'peppers',
    nameEn: 'Hot Pepper H-555 F1',
    nameUr: 'ہاٹ پیپر ایچ-۵۵۵',
    descriptionEn: 'Deep red, high pungency, exporter favorite.',
    weight: 'N.Wt 10g',
    brand: 'cassia',
    imagePath: 'public/assets/products/cassia-hot-pepper-555.jpeg',
    featured: true,
    order: 2,
  },
  {
    slug: 'mino-early',
    category: 'root-vegetables',
    nameEn: 'Radish Mino Early',
    nameUr: 'مولی مینو ارلی',
    descriptionEn: 'Fast-growing, long, white, crisp variety.',
    weight: 'N.Wt 25g',
    brand: 'cassia',
    imagePath: 'public/assets/products/cassia-radish-mino-early.png',
    featured: false,
    order: 3,
  },
  {
    slug: 'purple-top',
    category: 'root-vegetables',
    nameEn: 'Turnip Purple Top',
    nameUr: 'شلجم پرپل ٹاپ',
    descriptionEn: 'Traditional variety with purple crown, sweet flavor.',
    weight: 'N.Wt 25g',
    brand: 'cassia',
    imagePath: 'public/assets/products/cassia-turnip-purple-top.png',
    featured: false,
    order: 4,
  },
  {
    slug: 'beet-root',
    category: 'root-vegetables',
    nameEn: 'Beet Root F1',
    nameUr: 'چقندر ایف ون',
    descriptionEn: 'Deep red, uniform globe shape, rich in nutrients.',
    weight: 'N.Wt 25g',
    brand: 'cassia',
    imagePath: 'public/assets/products/cassia-beet-root.png',
    featured: false,
    order: 5,
  },
  {
    slug: 'redo-f1',
    category: 'tomatoes',
    nameEn: 'Hybrid Tomato REDO F1',
    nameUr: 'ہائبرڈ ٹماٹر ریڈو ایف ون',
    descriptionEn: 'Export-grade, plum shape, long shelf life.',
    weight: 'N.Wt 10g',
    brand: 'malapine',
    imagePath: 'public/assets/products/malapine-tomato-redo.jpeg',
    featured: true,
    order: 6,
  },
  {
    slug: 'royal-f1',
    category: 'gourds',
    nameEn: 'Hybrid Papaya ROYAL F1',
    nameUr: 'ہائبرڈ پپیتا رائل ایف ون',
    descriptionEn: 'High-yield, sweet, uniform color. Export ready.',
    weight: 'N.Wt 10g',
    brand: 'malapine',
    imagePath: 'public/assets/products/malapine-papaya-royal.png',
    featured: true,
    order: 7,
  },
  {
    slug: 'redo-f1-bulk',
    category: 'tomatoes',
    nameEn: 'Hybrid Tomato REDO F1',
    nameUr: 'ہائبرڈ ٹماٹر ریڈو ایف ون',
    descriptionEn: 'Bestseller — uniform export grade.',
    weight: 'N.Wt 10g',
    brand: 'malapine',
    imagePath: 'public/assets/products/malapine-tomato-redo.jpeg',
    featured: true,
    order: 8,
  },
];

const VARIETIES: VarietySeed[] = [
  // gourds
  { slug: 'bottle-gourd', category: 'gourds', nameEn: 'Bottle Gourd', imagePath: 'public/assets/categories/gourds/bottle-gourd.jpeg', use: 'Curries/juice', season: 'Summer', origin: 'Africa/Asia', brand: 'cassia', order: 0 },
  { slug: 'ridge-gourd', category: 'gourds', nameEn: 'Ridge Gourd', imagePath: 'public/assets/categories/gourds/ridge-gourd.jpeg', use: 'Stir-fry/curries', season: 'Summer', origin: 'South Asia', brand: 'cassia', order: 1 },
  { slug: 'bitter-gourd', category: 'gourds', nameEn: 'Bitter Gourd', imagePath: 'public/assets/categories/gourds/bitter-gourd.jpeg', use: 'Stir-fry/medicinal', season: 'Summer', origin: 'South/Southeast Asia', brand: 'cassia', order: 2 },
  { slug: 'wax-gourd', category: 'gourds', nameEn: 'Wax Gourd', imagePath: 'public/assets/categories/gourds/wax-gourd.jpeg', use: 'Curries/sweets', season: 'Summer', origin: 'Asia', brand: 'cassia', order: 3 },
  { slug: 'sponge-gourd', category: 'gourds', nameEn: 'Sponge Gourd', imagePath: 'public/assets/categories/gourds/sponge-gourd.jpeg', use: 'Curries/stir-fry', season: 'Summer', origin: 'South Asia', brand: 'cassia', order: 4 },
  { slug: 'snake-gourd', category: 'gourds', nameEn: 'Snake Gourd', imagePath: 'public/assets/categories/gourds/snake-gourd.jpeg', use: 'Curries/stir-fry', season: 'Summer', origin: 'South/Southeast Asia', brand: 'cassia', order: 5 },
  // brinjals
  { slug: 'brinjal', category: 'brinjals', nameEn: 'Brinjal', imagePath: 'public/assets/categories/brinjals/brinjal.jpeg', use: 'Curries/stir-fry', season: 'Warm season', origin: 'South Asia', brand: 'cassia', order: 0 },
  { slug: 'long-purple-eggplant', category: 'brinjals', nameEn: 'Long Purple Eggplant', imagePath: 'public/assets/categories/brinjals/long-purple-eggplant.jpeg', use: 'Stir-fry/grilling', season: 'Warm season', origin: 'Asia', brand: 'cassia', order: 1 },
  { slug: 'japanese-eggplant', category: 'brinjals', nameEn: 'Japanese Eggplant', imagePath: 'public/assets/categories/brinjals/japanese-eggplant.jpeg', use: 'Stir-fry/miso dishes', season: 'Warm season', origin: 'Japan', brand: 'cassia', order: 2 },
  { slug: 'tango-eggplant', category: 'brinjals', nameEn: 'Tango Eggplant', imagePath: 'public/assets/categories/brinjals/tango-eggplant.jpeg', use: 'Fresh/salads', season: 'Warm season', origin: 'Hybrid type', brand: 'cassia', order: 3 },
  { slug: 'italian-eggplant', category: 'brinjals', nameEn: 'Italian Eggplant', imagePath: 'public/assets/categories/brinjals/italian-eggplant.jpeg', use: 'Roasting/pasta', season: 'Warm season', origin: 'Italy', brand: 'cassia', order: 4 },
  { slug: 'rosa-bianca-eggplant', category: 'brinjals', nameEn: 'Rosa Bianca Eggplant', imagePath: 'public/assets/categories/brinjals/rosa-bianca-eggplant.jpeg', use: 'Roasting/grilling', season: 'Warm season', origin: 'Italy', brand: 'cassia', order: 5 },
  // peppers
  { slug: 'serrano-pepper', category: 'peppers', nameEn: 'Serrano Pepper', imagePath: 'public/assets/categories/peppers/serrano-pepper.jpeg', use: 'Salsa', season: 'Warm season', origin: 'Mexico', brand: 'cassia', order: 0 },
  { slug: 'habanero-pepper', category: 'peppers', nameEn: 'Habanero Pepper', imagePath: 'public/assets/categories/peppers/habanero-pepper.jpeg', use: 'Very hot dishes', season: 'Warm season', origin: 'Caribbean', brand: 'cassia', order: 1 },
  { slug: 'chilli-pepper', category: 'peppers', nameEn: 'Chilli Pepper', imagePath: 'public/assets/categories/peppers/chilli-pepper.jpeg', use: 'Spice', season: 'Warm season', origin: 'Worldwide', brand: 'cassia', order: 2 },
  { slug: 'cherry-pepper', category: 'peppers', nameEn: 'Cherry Pepper', imagePath: 'public/assets/categories/peppers/cherry-pepper.jpeg', use: 'Stuffing/pickling', season: 'Warm season', origin: 'Worldwide', brand: 'cassia', order: 3 },
  { slug: 'banana-pepper', category: 'peppers', nameEn: 'Banana Pepper', imagePath: 'public/assets/categories/peppers/banana-pepper.jpeg', use: 'Pickling', season: 'Warm season', origin: 'Americas', brand: 'cassia', order: 4 },
  { slug: 'tabasco-pepper', category: 'peppers', nameEn: 'Tabasco Pepper', imagePath: 'public/assets/categories/peppers/tabasco-pepper.jpeg', use: 'Sauce', season: 'Warm season', origin: 'Mexico', brand: 'cassia', order: 5 },
  { slug: 'rocoto-pepper', category: 'peppers', nameEn: 'Rocoto Pepper', imagePath: 'public/assets/categories/peppers/rocoto-pepper.jpeg', use: 'Hot pepper dishes', season: 'Cool highlands', origin: 'South America', brand: 'cassia', order: 6 },
  { slug: 'ghost-pepper', category: 'peppers', nameEn: 'Ghost Pepper', imagePath: 'public/assets/categories/peppers/ghost-pepper.jpeg', use: 'Very hot dishes', season: 'Warm season', origin: 'India', brand: 'cassia', order: 7 },
  // tomatoes
  { slug: 'roma-tomato', category: 'tomatoes', nameEn: 'Roma Tomato', imagePath: 'public/assets/categories/tomatoes/roma-tomato.jpeg', use: 'Sauce/paste', season: 'Autumn–Spring', origin: 'Italy-style cultivar', brand: 'cassia', order: 0 },
  { slug: 'cherry-tomato', category: 'tomatoes', nameEn: 'Cherry Tomato', imagePath: 'public/assets/categories/tomatoes/cherry-tomato.jpeg', use: 'Salads/snacks', season: 'Autumn–Spring', origin: 'Andes/South America', brand: 'cassia', order: 1 },
  { slug: 'grape-tomato', category: 'tomatoes', nameEn: 'Grape Tomato', imagePath: 'public/assets/categories/tomatoes/grape-tomato.jpeg', use: 'Fresh eating', season: 'Autumn–Spring', origin: 'Commercial worldwide', brand: 'cassia', order: 2 },
  { slug: 'beefsteak-tomato', category: 'tomatoes', nameEn: 'Beefsteak Tomato', imagePath: 'public/assets/categories/tomatoes/beefsteak-tomato.jpeg', use: 'Slicing', season: 'Autumn–Spring', origin: 'Worldwide', brand: 'cassia', order: 3 },
  { slug: 'campari-tomato', category: 'tomatoes', nameEn: 'Campari Tomato', imagePath: 'public/assets/categories/tomatoes/campari-tomato.jpeg', use: 'Premium fresh', season: 'Autumn–Spring', origin: 'Hybrid type', brand: 'cassia', order: 4 },
  { slug: 'plum-tomato', category: 'tomatoes', nameEn: 'Plum Tomato', imagePath: 'public/assets/categories/tomatoes/plum-tomato.jpeg', use: 'Processing', season: 'Autumn–Spring', origin: 'Worldwide', brand: 'cassia', order: 5 },
  { slug: 'heirloom-tomato', category: 'tomatoes', nameEn: 'Heirloom Tomato', imagePath: 'public/assets/categories/tomatoes/heirloom-tomato.jpeg', use: 'Fresh', season: 'Autumn–Spring', origin: 'Traditional varieties', brand: 'cassia', order: 6 },
  { slug: 'san-marzano-tomato', category: 'tomatoes', nameEn: 'San Marzano', imagePath: 'public/assets/categories/tomatoes/san-marzano-tomato.jpeg', use: 'Sauces', season: 'Autumn–Spring', origin: 'Italy', brand: 'cassia', order: 7 },
  { slug: 'cocktail-tomato', category: 'tomatoes', nameEn: 'Cocktail Tomato', imagePath: 'public/assets/categories/tomatoes/cocktail-tomato.jpeg', use: 'Fresh', season: 'Autumn–Spring', origin: 'Worldwide', brand: 'cassia', order: 8 },
  { slug: 'green-tomato', category: 'tomatoes', nameEn: 'Green Tomato', imagePath: 'public/assets/categories/tomatoes/green-tomato.jpeg', use: 'Pickles/cooking', season: 'Autumn–Spring', origin: 'Worldwide', brand: 'cassia', order: 9 },
];

const uploadedAssets = new Map<string, string>();

async function uploadImage(relativePath: string): Promise<string> {
  const cached = uploadedAssets.get(relativePath);
  if (cached) return cached;

  const absolutePath = path.join(ROOT, relativePath);
  const buffer = fs.readFileSync(absolutePath);
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(relativePath),
  });
  uploadedAssets.set(relativePath, asset._id);
  return asset._id;
}

async function migrateCategories() {
  const idBySlug = new Map<string, string>();

  for (const cat of CATEGORIES) {
    const imageAssetId = await uploadImage(cat.imagePath);
    const _id = `category-${cat.slug}`;

    await client.createOrReplace({
      _id,
      _type: 'category',
      nameEn: cat.nameEn,
      slug: { _type: 'slug', current: cat.slug },
      image: { _type: 'image', asset: { _type: 'reference', _ref: imageAssetId } },
      ...(cat.count !== undefined ? { count: cat.count } : {}),
      order: cat.order,
    });

    idBySlug.set(cat.slug, _id);
    console.log(`✓ category: ${cat.slug} -> ${_id}`);
  }

  return idBySlug;
}

async function migrateProducts(categoryIdBySlug: Map<string, string>) {
  for (const product of PRODUCTS) {
    const categoryId = categoryIdBySlug.get(product.category);
    if (!categoryId) {
      throw new Error(`No category document for slug "${product.category}" (product ${product.slug})`);
    }

    const imageAssetId = await uploadImage(product.imagePath);
    const _id = `product-${product.slug}`;

    await client.createOrReplace({
      _id,
      _type: 'product',
      nameEn: product.nameEn,
      nameUr: product.nameUr,
      slug: { _type: 'slug', current: product.slug },
      category: { _type: 'reference', _ref: categoryId },
      brand: product.brand,
      descriptionEn: product.descriptionEn,
      weight: product.weight,
      images: [{ _type: 'image', _key: 'img-0', asset: { _type: 'reference', _ref: imageAssetId } }],
      featured: product.featured,
      order: product.order,
    });

    console.log(`✓ product: ${product.slug} -> ${_id}`);
  }
}

async function migrateVarieties(categoryIdBySlug: Map<string, string>) {
  for (const variety of VARIETIES) {
    const categoryId = categoryIdBySlug.get(variety.category);
    if (!categoryId) {
      throw new Error(`No category document for slug "${variety.category}" (variety ${variety.slug})`);
    }

    const imageAssetId = await uploadImage(variety.imagePath);
    const _id = `variety-${variety.category}-${variety.slug}`;

    await client.createOrReplace({
      _id,
      _type: 'variety',
      nameEn: variety.nameEn,
      slug: { _type: 'slug', current: variety.slug },
      category: { _type: 'reference', _ref: categoryId },
      image: { _type: 'image', asset: { _type: 'reference', _ref: imageAssetId } },
      use: variety.use,
      season: variety.season,
      origin: variety.origin,
      brand: variety.brand,
      order: variety.order,
    });

    console.log(`✓ variety: ${variety.category}/${variety.slug} -> ${_id}`);
  }
}

async function main() {
  console.log(`Migrating into Sanity project "${projectId}" (dataset "${dataset}")...\n`);
  const categoryIdBySlug = await migrateCategories();
  await migrateProducts(categoryIdBySlug);
  await migrateVarieties(categoryIdBySlug);
  console.log(
    `\nDone. ${CATEGORIES.length} categories, ${PRODUCTS.length} products, and ${VARIETIES.length} varieties migrated.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
