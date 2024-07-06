import { groq } from "next-sanity"
import { ALL_SECTIONS_QUERY } from "../sections"

// Get all pages
export const PAGES_QUERY = groq`*[_type == "page"] {
  ...,
}`

// Get Single Page
export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  ...,
  ${ALL_SECTIONS_QUERY}
}`
