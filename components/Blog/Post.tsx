// ./components/Post.tsx

import Image from "next/image"
import { PortableText } from "next-sanity"
import { SanityDocument } from "next-sanity"
import { format } from "date-fns"
import { blockImageRenderer } from "@/utils"
import DynamicImage from "../DynamicImage"
import { dateFormat } from "@/constants"

export default function Post({ post }: { post: SanityDocument }) {
  const { title, featuredImage, body, excerpt, _createdAt, _updatedAt } = post

  return (
    <article className="prose max-w-3xl mx-auto py-20">
      {title ? <h1>{title}</h1> : null}
      {excerpt ? <p>{excerpt}</p> : null}
      {featuredImage && (
        // <DynamicImage url={featuredImage} alt={featuredImage.alt} />
        <DynamicImage
          url={
            featuredImage || "https://dummyimage.com/618x618.png/dddddd/ffffff"
          }
          alt={featuredImage.alt}
        />
      )}

      <div className="flex items-center gap-3 justify-between">
        {/* Created */}
        <div>
          <strong></strong> {format(_createdAt, dateFormat)}
        </div>
        {/* Updated */}
        <div className="sr-only">
          <strong></strong> {format(_updatedAt, dateFormat)}
        </div>
      </div>

      {body ? (
        <PortableText value={body} components={blockImageRenderer} />
      ) : null}
    </article>
  )
}
