import { groq } from "next-sanity"

export const LINK_FIELDS = groq`
  label,
  newTab,
  url,
  variant
`
