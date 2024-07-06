import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const SectionTitle = ({
  children,
  tag,
  className = "",
}: {
  children: ReactNode
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}) => {
  const TagName = tag || "h1"
  return (
    <TagName
      className={twMerge(
        "text-[48px] font-bold leading-[58px] max-sm:text-[32px] max-sm:leading-[42px]",
        className
      )}
    >
      {children}
    </TagName>
  )
}

export default SectionTitle
