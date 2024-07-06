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
  className?: string
  internalUrl: InternalUrl | null
  customUrl?: string
  handleMobileMenu?: () => void
}

export type NavItemProps = {
  menuList: NavItem[]
}
