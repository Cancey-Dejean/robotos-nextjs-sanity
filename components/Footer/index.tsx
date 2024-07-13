import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/fetch"
import { ALL_SETTINGS_QUERY } from "@/sanity/lib/queries/settings"
import { SanityDocument } from "next-sanity"
import { Button } from "../ui/button"
import { PortableText } from "next-sanity"

export default async function Footer() {
  const data = await sanityFetch<SanityDocument>({
    query: ALL_SETTINGS_QUERY,
  })

  const footer = data.footer

  return (
    <footer id="footer" className="bg-gray-900 px-5 py-10 text-center md:py-20">
      <h2 className="flex flex-col text-[16vw] uppercase leading-[.8] [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out text-white mb-10 lg:mb-14">
        {footer.titleLineOne && (
          <span className="hover:text-yellow-100">{footer.titleLineOne}</span>
        )}

        {footer.titleLineTwo && (
          <span className="hover:text-purple-100">{footer.titleLineTwo}</span>
        )}
      </h2>

      {footer.button.label && (
        <Button asChild variant={footer.button.variant} className="mb-6 mt-4">
          <Link href={footer.button.url}>{footer.button.label}</Link>
        </Button>
      )}

      {footer.text && (
        <div className="mx-auto w-full prose max-w-[386px] text-white [&_a]:text-white">
          <PortableText value={footer.text} />
        </div>
      )}
    </footer>
  )
}
