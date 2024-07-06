import { groq } from "next-sanity"
import { ALL_SECTIONS_QUERY } from "../sections"

// Get Homepage
export const HOME_QUERY = groq`*[_type == "homepage"] {
  ...,
  ${ALL_SECTIONS_QUERY}
}`
