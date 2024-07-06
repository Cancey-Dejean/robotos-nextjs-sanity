import { groq } from "next-sanity"
import { HERO_FIELDS } from "./heroFields"

export const ALL_SECTIONS_QUERY = groq`
  // pageBuilder {
  //   sections[] {
  //     _type == "hero" {
  //
  //     }
  //   }

  // }
  // slug,
  // metaTitle,
  // metaDescription,
  // "slug": slug.current,
  // "ogImage": ogImage.asset->url,
  // "ogImageAlt": ogImage.alt,

  pageBuilder {
    sections [] {
      _type,
      // Hero
      _type == "hero" => {
        ${HERO_FIELDS}
      },
    }
  }
`
