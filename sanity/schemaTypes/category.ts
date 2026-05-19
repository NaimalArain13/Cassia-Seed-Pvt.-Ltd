import { defineField, defineType } from 'sanity';

export const category = defineType({
  name: 'category',
  title: 'Category',
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
    defineField({ name: 'image', title: 'Category Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'count', title: 'Variety Count', type: 'number' }),
  ],
});
