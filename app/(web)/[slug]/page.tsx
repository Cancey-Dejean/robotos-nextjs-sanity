import { QueryParams, SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Metadata } from "next";
import { PageContent } from "@/components/PageContent";
import { PAGE_QUERY, PAGES_QUERY } from "@/sanity/lib/queries/pages/page";
import AddContent from "@/components/AddContent";
import { PageProps } from "@/types/Page";

export async function generateMetadata({ params }: { params: QueryParams }): Promise<Metadata> {
  const page = await sanityFetch<SanityDocument>({
    query: PAGE_QUERY,
    params
  });

  if (!page) return notFound();

  return {
    title: page.metaTitle ?? `This is the ${page.metaTitle} Page`,
    description:
      page.metaDescription ?? `This is the ${page.metaTitle} description`,
    openGraph: {
      title: page.metaTitle ?? `This is the ${page.metaTitle} OG Title`,
      images: [{ url: page.ogImage ?? "" }]
    }
  };
}

export async function generateStaticParams() {
  const pages = await sanityFetch<SanityDocument[]>({
    query: PAGES_QUERY,
    perspective: "published",
    stega: false
  });

  return pages.map((page) => ({
    slug: page.currentSlug
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const slug = params.slug || "home";

  const page = await sanityFetch<SanityDocument>({ query: PAGE_QUERY, params });

  const pageBuilder = page.pageBuilder;
  if (!page) {
    return notFound();
  }

  if (pageBuilder === null) {
    return <AddContent />;
  }

  return <>{pageBuilder.map(PageContent)}</>;
}
