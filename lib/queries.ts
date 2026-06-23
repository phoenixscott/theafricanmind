import { groq } from 'next-sanity'

export const allArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id, title, slug, category, standfirst, readTime, publishedAt, isFeatured,
    featuredImage
  }
`

export const featuredArticleQuery = groq`
  *[_type == "article" && isFeatured == true] | order(publishedAt desc)[0] {
    _id, title, slug, category, standfirst, readTime, publishedAt, featuredImage
  }
`

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id, title, slug, category, subcategory, standfirst, readTime, publishedAt, featuredImage, body
  }
`

export const articlesByCategoryQuery = groq`
  *[_type == "article" && category == $category] | order(publishedAt desc) {
    _id, title, slug, category, subcategory, standfirst, readTime, publishedAt, featuredImage
  }
`
