// ./components/Post.tsx

import Image from "next/image"
import { PortableText } from "next-sanity"
import { SanityDocument } from "next-sanity"
import { format } from "date-fns"
import { blockImageRenderer } from "@/utils"
import DynamicImage from "../DynamicImage"
import { dateFormat } from "@/constants"
import Link from "next/link"
import Container from "../Container"
import Card from "../Cards/Card"

export default function Post({ post }: { post: SanityDocument }) {
  const {
    title,
    featuredImg,
    featuredImgAlt,
    body,
    excerpt,
    _createdAt,
    _updatedAt,
    categories,
    author: { name },
  } = post

  return (
    <section
      className="h-full bg-yellow-200 bg-fixed px-5 pb-20 pt-28 md:py-32"
      style={{
        backgroundImage: `url("/images/get-robots-bg.png")`,
      }}
    >
      <Container>
        <Card>
          <article className="prose max-w-3xl mx-auto py-20">
            {title ? <h1>{title}</h1> : null}
            <div>By: {name ? <p>{name}</p> : null}</div>
            {excerpt ? <p>{excerpt}</p> : null}
            {featuredImg && (
              <DynamicImage
                url={
                  featuredImg ||
                  "https://dummyimage.com/618x618.png/dddddd/ffffff"
                }
                alt={featuredImgAlt.alt}
              />
            )}

            {categories.map((category) => (
              <Link
                href={`/blog/category/${category.slug.current}`}
                key={category._id}
              >
                {category.title}
              </Link>
            ))}

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
        </Card>
      </Container>
    </section>
  )
}
