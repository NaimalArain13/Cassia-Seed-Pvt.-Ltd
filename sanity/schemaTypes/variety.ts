import { defineField, defineType } from 'sanity';

export const variety = defineType({
  name: 'variety',
  title: 'Variety',
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
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'use', title: 'Common Use', type: 'string' }),
    defineField({ name: 'season', title: 'Growing Season', type: 'string' }),
    defineField({ name: 'origin', title: 'Origin', type: 'string' }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      options: { list: ['cassia', 'malapine'] },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'nameEn', subtitle: 'use', media: 'image' },
  },
});
