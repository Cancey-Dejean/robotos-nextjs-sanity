import { groq } from "next-sanity"

// Get all posts
export const POSTS_QUERY = groq`*[_type == "blog"]  | order(_createdAt desc) {
  _id,
  title,
  excerpt,
  _createdAt,
  "currentSlug": slug.current,
  "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
}`

// Get single post
export const POST_QUERY = groq`*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  excerpt,
  body,
  "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  "currentSlug": slug.current,
  _createdAt,
  _updatedAt,
}`
