import { groq } from "next-sanity"

export const RARITY_LIST_FIELDS = groq`
  title,
  "mainImage": image.asset->url,
  "mainImageAlt": image.alt,
  items []{
    boldText,
    title
  }
`
