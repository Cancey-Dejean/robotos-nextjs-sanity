import Image from "next/image"
import { Link } from "next-view-transitions"
import { cn } from "@/lib/utils"

const Logo = ({
  className,
  url = "/",

  logoSrc,
  imgAlt,
}: {
  className?: string
  url?: string

  logoSrc?: string
  imgAlt: string
}) => {
  return (
    <Link href={url} className={cn("flex items-center gap-[7px]", className)}>
      <div className="relative h-[31px] w-[34px]">
        <span className="sr-only">{imgAlt}</span>
        <Image
          src={logoSrc as any}
          className={cn("object-contain", className)}
          alt={imgAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Link>
  )
}

export default Logo
