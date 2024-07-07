export type NavItem = {
  className?: string
  url?: string
  newTab?: boolean
  label: string
  cta?: boolean
  handleMobileMenu?: () => void
}

export type NavItemProps = {
  menuList: NavItem[]
}
