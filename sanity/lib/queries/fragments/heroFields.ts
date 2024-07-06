import { groq } from "next-sanity"

export const HERO_FIELDS = groq`
 title,
 buttonLabel,
 buttonUrl,
 buttonVariant,
//  newTab
`
