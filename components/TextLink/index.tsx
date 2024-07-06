import React, { ReactNode } from "react"
import { Link } from "next-view-transitions"
import { twMerge } from "tailwind-merge"

const TextLink = ({
  url = "#",
  label = "Link",
  icon,
  className = "",
}: {
  /**
   * Description goes here
   */
  url: string
  /**
   * Description goes here
   */
  className?: string
  /**
   * Description goes here
   */
  label: string
  /**
   * Description goes here
   */
  icon?: ReactNode
}) => {
  return (
    <Link href={url} className={twMerge("flex items-center gap-3", className)}>
      {icon ? <span>{icon}</span> : null}
      {label}
    </Link>
  )
}

export default TextLink
