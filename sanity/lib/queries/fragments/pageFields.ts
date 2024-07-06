import { groq } from "next-sanity"

export const PAGE_FIELDS = groq`
  metaTitle,
  metaDescription,
  "seoImage": ogImage.asset->url,
  "seoImageAlt": ogImage.alt,
  "currentSlug": slug.current
`
