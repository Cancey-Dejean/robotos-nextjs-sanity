export type NavItem = {
  className?: string
  url?: string | null
  newTab?: boolean
  label: string
  cta?: boolean
  handleMobileMenu?: () => void
}

export type NavItemProps = {
  menuList: NavItem[]
}
