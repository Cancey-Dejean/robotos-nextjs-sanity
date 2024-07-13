import { SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

import { sanityFetch } from "@/sanity/lib/fetch"
import { PageContent } from "@/components/PageContent"
import { Metadata } from "next"
import { HOME_QUERY } from "@/sanity/lib/queries/pages/home"

export async function generateMetadata(): Promise<Metadata> {
  const homePage = await sanityFetch<SanityDocument>({ query: HOME_QUERY })

  const seo = homePage[0]

  if (!homePage) return notFound()

  return {
    title: seo.metaTitle ?? "This is the Home Title",
    description: seo.metaDescription ?? "This is the Home description",
    openGraph: {
      title: seo.metaTitle ?? "This is the OG Title",
      images: [{ url: seo.ogImage ?? "" }],
    },
  }
}

export default async function Home() {
  const page = await sanityFetch<SanityDocument>({ query: HOME_QUERY })
  const pageBuilder = page[0].pageBuilder

  console.log(pageBuilder[1])

  if (pageBuilder === null) {
    return (
      <div>
        <h1 className="font-bold text-3xl">Add sections in CMS.</h1>
      </div>
    )
  }

  return <>{pageBuilder.map(PageContent)}</>
}
