import { NavlinkStyles } from "@/constants/styles"
import { cn } from "@/lib/utils"
import Link from "next/link"

type UrlObject = {
  _type: string
  currentSlug?: string
}

type InternalUrl = {
  url: UrlObject
}

export type NavItem = {
  label: string
  cta?: boolean
  newTab?: boolean
  className?: string
  internalUrl: InternalUrl | null
  customUrl?: string
  handleMobileMenu?: () => void
}

const getHref = (
  internalUrl: InternalUrl | null,
  customUrl?: string
): string => {
  if (customUrl) {
    return customUrl
  }
  if (!internalUrl) {
    return ""
  }
  const { _type, currentSlug } = internalUrl.url
  switch (_type) {
    case "homepage":
      return "/"
    case "page":
      return `/${currentSlug}`
    case "blog":
      return `blog/${currentSlug}`
    default:
      return ""
  }
}

export default function NavLink({
  label,
  customUrl,
  internalUrl,
  newTab,
  cta,
  className,
  handleMobileMenu,
}: NavItem) {
  return (
    <Link
      href={getHref(internalUrl, customUrl)}
      className={cn(
        NavlinkStyles,
        cta &&
          "mt-4 bg-mint px-4 py-4 text-center font-bold text-gray-900 sm:mt-0 sm:py-2",
        className
      )}
      onClick={handleMobileMenu}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {label}
    </Link>
  )
}
