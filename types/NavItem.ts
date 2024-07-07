import { InternalUrl } from "."

export type NavItem = {
  className?: string
  internalUrl: InternalUrl | null
  customUrl?: string
  newTab?: boolean
  label: string
  cta?: boolean
  handleMobileMenu?: () => void
}

export type NavItemProps = {
  menuList: NavItem[]
}
