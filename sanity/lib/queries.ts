import { groq } from "next-sanity"
import { client } from "./client"

// Get settings
// export const settingsQuery = groq`
//  *[_type == "siteSettings"] {
//     companyName
//   }
// `

// Get all categories
// export const ALL_CATEGORIES_QUERY = groq`*[_type == "category"] {
//   title,
//   description,
//   "currentSlug": slug.current,
//   "categoryImage": image.asset->url,
//   "categoryImageAlt": image.alt
// }`

// export const getTotalPosts = async () => {
//   const query = groq`count(*[_type == 'blog'])`
//   return client.fetch(query)
// }
