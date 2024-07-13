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
    author: { name, bio, authorImage, authorSlug },
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
          <article className="prose max-w-3xl mx-auto py-10 md:py-20">
            {title ? (
              <h1 className="text-xl sm:text-4xl mb-0">{title}</h1>
            ) : null}
            {excerpt ? <p>{excerpt}</p> : null}

            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2 relative">
                <Link
                  href={`/blog/author/${authorSlug}`}
                  className=" after:absolute after:inset-0"
                >
                  <Image
                    src={authorImage}
                    alt={name}
                    height={50}
                    width={50}
                    className="m-0 rounded-full border border-black"
                  />
                </Link>

                <p className="m-0">{name ? <strong>{name}</strong> : null}</p>
              </div>

              <div className="flex flex-col">
                {/* Created */}
                <div>{format(_createdAt, dateFormat)}</div>
                {/* Updated */}
                <div className="sr-only">{format(_updatedAt, dateFormat)}</div>
              </div>
            </div>

            {featuredImg && (
              <DynamicImage
                url={
                  featuredImg ||
                  "https://dummyimage.com/618x618.png/dddddd/ffffff"
                }
                alt={featuredImgAlt.alt}
              />
            )}

            {body ? (
              <PortableText value={body} components={blockImageRenderer} />
            ) : null}

            <div className="flex gap-2">
              <strong>Categories:</strong>
              {categories.map((category) => (
                <Link
                  href={`/blog/category/${category.slug.current}`}
                  key={category._id}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </article>
        </Card>
      </Container>
    </section>
  )
}
