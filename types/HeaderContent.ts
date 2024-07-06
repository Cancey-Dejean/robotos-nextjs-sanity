import { ButtonProps } from "@/components/ui/button"
import { NavItem } from "./NavItem"

export type HeaderContentProps = {
  logoSrc?: string
  logoAlt?: string
  menuList: NavItem[]
  navCTA: ButtonProps[]
}
