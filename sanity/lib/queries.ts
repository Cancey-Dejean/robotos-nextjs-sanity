import { groq } from "next-sanity"
import { client } from "./client"

// Get settings
// export const settingsQuery = groq`
//  *[_type == "settings"][0]{
//    footer,
//    menuItems[]->{
//      _type,
//      "slug": slug.current,
//      title
//    },
//    ogImage,
//  }
// `

// Get all categories
export const ALL_CATEGORIES_QUERY = groq`*[_type == "category"] {
  _id,
  title,
  "categorySlug": slug.current,
  image,
  description,
  "postCount": count(*[_type == 'blog' && references("categories", ^._id)])
}`

export const getTotalPosts = async () => {
  const query = groq`count(*[_type == 'blog'])`
  return client.fetch(query)
}
