import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { urlForImage } from "@/sanity/lib/image"
import { PostProps } from "@/types/Post"
import Image from "next/image"
import { Link } from "next-view-transitions"

export default function PostCard({
  title,
  excerpt,
  featuredImage,
  featuredImageAlt,
  currentSlug,
}: PostProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-2">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        {featuredImage && (
          <div className="relative aspect-video">
            <Image
              src={urlForImage(featuredImage as any)}
              alt={featuredImageAlt}
              fill
              className="object-cover"
            />
          </div>
        )}

        <Link href={`/blog/${currentSlug}`}> Read More</Link>
      </CardContent>
    </Card>
  )
}
