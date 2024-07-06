import { groq } from "next-sanity"

export const POST_FIELDS = groq`
  _id,
  "seoImage": ogImage.asset->url,
  "seoImageAlt": ogImage.alt,
  "currentSlug": slug.current,
  excerpt,
  "featuredImg": featuredImage.asset->url,
  "featuredImgAlt": featuredImage.alt,
  "currentSlug": slug.current,

  "author": author-> {
    _id,
    "authorImage": image.asset->url,
    "authorImageAlt": image.alt,
    "authorSlug": slug.current,
    bio,
  },
  "categories": categories[]-> {
    ...,
    "categoryImage": image.asset->url,
    "categoryImageAlt": image.alt,
    "currentSlug": slug.current
  }
`
