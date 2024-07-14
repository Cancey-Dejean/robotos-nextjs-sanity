import { groq } from "next-sanity"
import { PAGE_FIELDS } from "../fragments/pageFields"
import { ALL_SECTIONS_QUERY } from "../fragments/sections"

// Get Homepage
// export const HOME_QUERY = groq`*[_type == "homepage"][0] {
//   ${PAGE_FIELDS},
//   pageBuilder [] {
//     _type,
//     ${ALL_SECTIONS_QUERY}
//   }
// }`
