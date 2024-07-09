import React from "react"
import Card from "../Card"
import Link from "next/link"
import Image from "next/image"

export default function CardBlog({
  image,
  imageAlt,
  title,
  excerpt,
  buttonText,
  url,
}: {
  image?: string
  imageAlt?: string
  title: string
  excerpt?: string
  buttonText?: string
  url: string
}) {
  return (
    <Card className="relative flex flex-col items-start gap-5 p-4 md:p-5">
      <div className="relative size-[200px] w-full overflow-hidden rounded-[20px]">
        <Image
          src={image || "https://dummyimage.com/200x200.png/eb0d18/ffffff"}
          alt={imageAlt || "Card"}
          className="object-cover"
          fill
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">{title}</h3>
        <div className="line-clamp-3">{excerpt}</div>
      </div>

      <div className="mt-auto flex items-center gap-2 justify-between w-full">
        <Link href={url} className="after:absolute after:inset-0">
          {buttonText || "Read More"} →
        </Link>

        <Image
          src="https://dummyimage.com/50x50.png/eb0d18/ffffff"
          width={50}
          height={50}
          alt=""
          className="object-cover rounded-full"
        />
      </div>
    </Card>
  )
}
