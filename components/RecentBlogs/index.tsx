"use client"
import { useRef } from "react"
import CardBlog from "../Cards/CardBlog"
import Container from "../Container"
import SectionTitle from "../SectionTitle"
import { containerStaggerVariants, itemVariants } from "@/lib/animations"
import { motion, useInView } from "framer-motion"
import { blogs } from "@/constants"

export default function RecentBlogs({ heading }: { heading: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="bg-white px-5 py-16 md:py-32">
      <Container>
        <SectionTitle as={"h2"} className="mb-5">
          {heading}
        </SectionTitle>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerStaggerVariants}
          className="flex flex-col gap-6 md:flex-row"
        >
          {blogs.slice(0, 3).map(({ image, title, excerpt, slug }, index) => (
            <motion.div key={index} variants={itemVariants} className="grow">
              <CardBlog
                url={`/blog/${slug}`}
                image={image}
                title={title}
                excerpt={excerpt}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
