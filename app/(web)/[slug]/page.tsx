// // ./app/(blog)/[slug]/page.tsx

// import { QueryParams, SanityDocument } from "next-sanity"
// import { notFound } from "next/navigation"

// // import Post from "@/components/Post"

// import { sanityFetch } from "@/sanity/lib/fetch"
// import { Metadata } from "next"
// import { PAGES_QUERY, PAGE_QUERY } from "@/sanity/lib/fragments/pages/page"
// import { PageContent } from "@/components/PageContent"

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string }
// }): Promise<Metadata> {
//   const page = await sanityFetch<SanityDocument>({ query: PAGE_QUERY, params })

//   if (!page) return notFound()

//   return {
//     title: page.metaTitle ?? `This is the ${page.metaTitle} Page`,
//     description:
//       page.metaDescription ?? `This is the ${page.metaTitle} description`,
//     openGraph: {
//       title: page.metaTitle ?? `This is the ${page.metaTitle} OG Title`,
//       images: [{ url: page.ogImage ?? "" }],
//     },
//   }
// }

// export async function generateStaticParams() {
//   const pages = await sanityFetch<SanityDocument[]>({
//     query: PAGES_QUERY,
//     perspective: "published",
//     stega: false,
//   })

//   return pages.map((page) => ({
//     slug: page.currentSlug,
//   }))
// }

// export default async function Page({ params }: { params: QueryParams }) {
//   const page = await sanityFetch<SanityDocument>({ query: PAGE_QUERY, params })
//   const pageBuilder = page.pageBuilder

//   if (!page) {
//     return notFound()
//   }

//   if (pageBuilder === null) {
//     return (
//       <div>
//         <h1 className="font-bold text-3xl">Add sections in CMS.</h1>
//       </div>
//     )
//   }

//   return <>{pageBuilder.sections.map(PageContent)}</>
// }
