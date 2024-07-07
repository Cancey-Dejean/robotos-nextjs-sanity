import { groq } from "next-sanity"

export const HERO_FIELDS = groq`
 _type,
 title,
 buttonLabel,
 buttonUrl,
 buttonVariant,
//  newTab
`
