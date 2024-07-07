import { groq } from "next-sanity"
import { PAGE_FIELDS } from "../fragments/pageFields"
import { ALL_SECTIONS_QUERY } from "../fragments/sections"
import { HERO_FIELDS } from "../fragments/heroFields"

// Get Homepage
export const HOME_QUERY = groq`*[_type == "homepage"] {
  ${PAGE_FIELDS},
  pageBuilder [] {
    _type,
    ${ALL_SECTIONS_QUERY}
  }
}`
