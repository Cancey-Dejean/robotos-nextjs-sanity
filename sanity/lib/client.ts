import { QueryParams, createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
})

// export async function sanityFetch<QueryResponse>({
//   query,
//   params = {},
//   tags,
// }: {
//   query: string
//   params?: QueryParams
//   tags?: string[]
// }) {
//   return client.fetch<QueryResponse>(query, params, {
//     next: {
//       revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
//       tags,
//     },
//   })
// }
