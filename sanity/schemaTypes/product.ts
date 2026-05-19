import { defineField, defineType } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'nameEn', title: 'Name (English)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'nameUr', title: 'Name (Urdu)', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nameEn', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      options: { list: ['cassia', 'malapine'] },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'descriptionEn', title: 'Description (English)', type: 'text', rows: 4 }),
    defineField({ name: 'descriptionUr', title: 'Description (Urdu)', type: 'text', rows: 4 }),
    defineField({ name: 'weight', title: 'Net Weight', type: 'string' }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'youtubeUrl', title: 'YouTube Demo URL', type: 'url' }),
    defineField({ name: 'featured', title: 'Featured on Landing Page', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
