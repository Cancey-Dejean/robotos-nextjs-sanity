import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { urlForImage } from "@/sanity/lib/image"

import Image from "next/image"
import { Link } from "next-view-transitions"
import { CategoryProps } from "@/types/Category"
import { PortableText } from "next-sanity"
import { blockImageRenderer } from "@/utils"

export default function CategoryCard({
  title,
  categorySlug,
  image,
  description,
  postCount,
}: CategoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <PortableText value={description} components={blockImageRenderer} />
        {/* {description ? (
          <PortableText value={description} components={blockImageRenderer} />
        ) : null} */}
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video">
          <Image
            src={urlForImage(image as any)}
            alt="Category image"
            fill
            className="object-cover"
          />
        </div>
        <Link href={`/category/${categorySlug}`}> See More</Link>

        <p>Post Count: {postCount}</p>
      </CardContent>
    </Card>
  )
}
