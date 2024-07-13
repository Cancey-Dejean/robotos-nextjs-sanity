"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Link } from "next-view-transitions"
import { NavItem } from "@/types/NavItem"
import { motion } from "framer-motion"
import Container from "../Container"
import useScrollDirection from "@/hooks/useScrollDirection"
import useBodyOverflow from "@/hooks/useBodyOverflow"
import useCloseMobileMenuOnResize from "@/hooks/useCloseMobileMenuOnResize"
import { NavlinkStyles } from "@/constants/styles"
import NavLink from "./NavLink"

export default function HeaderContent({
  menuList,
  logoSrc,
  logoAlt,
  companyName,
}: {
  logoSrc?: string
  logoAlt?: string
  menuList: NavItem[]
  companyName?: string
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hiddenMenu, setHiddenMenu] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    if (scrollDirection === "down") {
      setHiddenMenu(true)
    } else {
      setHiddenMenu(false)
    }
  }, [scrollDirection])

  // handle body overflow when menu is open
  useBodyOverflow(menuOpen)

  // Close mobile menu on window resize
  useCloseMobileMenuOnResize(() => setMenuOpen(false))

  // Handle mobile menu
  function handleMobileMenu() {
    setMenuOpen((prev) => !prev)
  }

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: hiddenMenu ? "-100%" : "0%" }}
      transition={{ duration: 0.1 }}
      className={cn(
        "fixed left-0 top-0 z-50 w-full p-2 transition-all duration-300 ease-in-out"
      )}
    >
      <Container className="flex items-center justify-between rounded-lg bg-gray-900 px-4 text-white sm:w-fit sm:justify-center">
        {/* Logo */}
        {logoSrc && (
          <div className="relative z-[52] flex items-center sm:border-r sm:border-r-[#494949]">
            <Image
              src={logoSrc || "https://dummyimage.com/28x28.png/dddddd/ffffff"}
              height={28}
              width={28}
              alt={logoAlt || "Logo Alt text"}
            />

            <Link
              href="/"
              className={`after:absolute after:inset-0 ${NavlinkStyles}`}
              onClick={menuOpen ? handleMobileMenu : undefined}
            >
              {companyName}
            </Link>
          </div>
        )}

        {/* Menu */}
        {menuList.length > 0 && (
          <nav className="flex items-center gap-4">
            <ul className="hidden items-center sm:flex">
              {menuList.map(({ label, cta, newTab, url }) => (
                <li key={label}>
                  <NavLink newTab={newTab} label={label} cta={cta} url={url} />
                </li>
              ))}
            </ul>

            <ul
              className={cn(
                "fixed left-0 top-0 z-[51] flex h-screen w-full max-w-full flex-col items-start justify-center bg-gray-900 px-5 transition-all duration-300 ease-in-out sm:hidden",
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              )}
            >
              {menuList.map(({ label, cta, newTab, url }) => (
                <li key={label} className="w-full">
                  <NavLink
                    newTab={newTab}
                    url={url}
                    label={label}
                    cta={cta}
                    className="w-full text-3xl"
                    handleMobileMenu={handleMobileMenu}
                  />
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              className={cn(
                "hamburger z-[52] flex size-10 cursor-pointer flex-col items-center justify-center gap-1 bg-transparent sm:hidden [&_span]:h-[1px] [&_span]:w-6 [&_span]:bg-white [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out [&_span]:sm:hover:bg-pink-100",
                menuOpen ? "[&_span]:bg-pink-100" : "[&_span]:bg-white"
              )}
              onClick={handleMobileMenu}
            >
              <span className="sr-only">Open Menu</span>
              <span
                className={cn(
                  menuOpen
                    ? "!w-[10px] -translate-x-[8px] translate-y-[1px] -rotate-45"
                    : ""
                )}
              />
              <span className="bar-two" />
              <span
                className={cn(
                  menuOpen
                    ? "!w-[10px] -translate-x-[8px] translate-y-[-1px] rotate-45"
                    : ""
                )}
              />
            </button>
          </nav>
        )}
      </Container>
    </motion.div>
  )
}
