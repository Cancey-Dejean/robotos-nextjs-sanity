import { groq } from "next-sanity"

export const ROBOT_GRID_FIELDS = groq`
  heading,
  text,
  items [] {
    title,
    "mainImage": image.asset->url,
    "mainImageAlt": image.alt,
  }
`
