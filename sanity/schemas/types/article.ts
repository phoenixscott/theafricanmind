import { defineField, defineType } from 'sanity'

export const CATEGORIES = [
  { title: 'Nigeria', value: 'nigeria' },
  { title: 'Africa', value: 'africa' },
  { title: 'Solutions', value: 'solutions' },
  { title: 'Merit-Sovereignism', value: 'merit-sovereignism' },
  { title: 'Fact Check', value: 'fact-checks' },
]

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: CATEGORIES },
      validation: r => r.required(),
    }),
    defineField({ name: 'subcategory', title: 'Subcategory label', type: 'string', description: 'e.g. "Economy" — shown as "Nigeria · Economy"' }),
    defineField({ name: 'standfirst', title: 'Standfirst', type: 'text', rows: 3, description: 'The italic summary shown under the headline' }),
    defineField({ name: 'featuredImage', title: 'Featured Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'isFeatured', title: 'Feature on homepage', type: 'boolean', initialValue: false }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({ name: 'authorName', title: 'Author Name', type: 'string', description: 'Displayed on the article. Defaults to Jeremiah Nome if left blank.' }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string', description: 'e.g. 12 min read' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
  orderings: [{ title: 'Newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
})
