import { cn } from "@/lib/utils"
import { Link } from "next-view-transitions"
import { Button, ButtonProps } from "../ui/button"
import { NavItem, NavItemProps } from "@/types/NavItem"

export default function MobileMenu({
  showMenu,
  toggleMenu,
  menuList,
  navCTA,
}: {
  showMenu: boolean
  toggleMenu: () => void
  menuList: NavItem[]
  navCTA: ButtonProps[]
}) {
  return (
    <ul
      className={cn(
        "bg-white flex justify-center flex-col duration-300 absolute px-8 right-0 z-50 h-screen w-screen md:hidden",
        showMenu ? "top-0" : "-top-[100vh]"
      )}
    >
      {menuList &&
        menuList.map((item) => (
          <li
            key={item._key}
            className={`${showMenu ? "opacity-100" : "opacity-0"}`}
          >
            <Link
              href={item.url || "/"}
              className="relative p-5 block text-center"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}

      <div
        className={`mt-5 flex flex-col gap-5 ${showMenu ? "opacity-100" : "opacity-0"}`}
      >
        {navCTA.map(({ variant, label }) => (
          <Button key={label} asChild variant={variant} onClick={toggleMenu}>
            <Link href="/">{label}</Link>
          </Button>
        ))}
      </div>
    </ul>
  )
}
