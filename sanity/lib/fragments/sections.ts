import { groq } from "next-sanity"

export const ALL_SECTIONS_QUERY = groq`
  slug,
  metaTitle,
  metaDescription,
  "slug": slug.current,
  "ogImage": ogImage.asset->url,
  "ogImageAlt": ogImage.alt,

  pageBuilder {

    sections [] {
      // Hero
      _type == "hero" => {
        _key,
        _type,
        title,
        description,
        ctaButtons [] {
          _type == 'button'  => {
            _key,
            variant,
            label,
          }
        },
        "mainImage": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
      },

    }
  }
`
