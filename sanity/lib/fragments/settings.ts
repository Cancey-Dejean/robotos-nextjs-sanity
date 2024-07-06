import { groq } from "next-sanity"

// Get Header Settings
const HEADER_QUERY = groq`
  "header": *[_type == "header"][0] {
    "logoImage": logoImage.asset->url,
    "logoImageAlt": logoImage.alt,
    menu-> {
      menuList [] {
          label,
          cta,
          customUrl,
          internalUrl {
            url-> {
              _type,
              "currentSlug": slug.current
            }
          }
      }
    }
  }
`

// Get Footer Settings
const FOOTER_QUERY = groq`
  "footer": *[_type == "footer"][0] {
    text,
    _updatedAt,
  }
`

// Get All Settings
export const ALL_SETTINGS_QUERY = groq`{
  ${HEADER_QUERY},
  ${FOOTER_QUERY}
}`
