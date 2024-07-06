import { sanityFetch } from "@/sanity/lib/fetch"
import { ALL_SETTINGS_QUERY } from "@/sanity/lib/queries/settings"

import { SanityDocument } from "next-sanity"

const Footer = async () => {
  const data = await sanityFetch<SanityDocument>({
    query: ALL_SETTINGS_QUERY,
  })

  const footer = data.footer

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16" role="contentinfo">
      {footer.text ? (
        <p>{footer.text}</p>
      ) : (
        <p>Add content to footer in admin</p>
      )}

      <p>&copy;{currentYear}</p>
    </footer>
  )
}

export default Footer
