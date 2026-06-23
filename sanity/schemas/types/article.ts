import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string', description: 'e.g. Nigeria · Governance' }),
    defineField({ name: 'standfirst', title: 'Standfirst', type: 'text', rows: 3, description: 'The italic summary shown under the headline' }),
    defineField({ name: 'featuredImage', title: 'Featured Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'isFeatured', title: 'Feature on homepage', type: 'boolean', initialValue: false }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block', styles: [{ title: 'Normal', value: 'normal' }, { title: 'H2', value: 'h2' }, { title: 'H3', value: 'h3' }, { title: 'Quote', value: 'blockquote' }] },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string', description: 'e.g. 12 min read' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
  orderings: [{ title: 'Newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
