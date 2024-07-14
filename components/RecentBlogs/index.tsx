"use client";
import { useRef } from "react";
import CardBlog from "../Cards/CardBlog";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import { containerStaggerVariants, itemVariants } from "@/lib/animations";
import { motion, useInView } from "framer-motion";

export default function RecentBlogs({
  heading,
  blogs,
}: {
  heading: string;
  blogs: any[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-white py-16 md:py-32">
      <Container>
        {heading && (
          <SectionTitle as={"h2"} className="mb-5">
            {heading}
          </SectionTitle>
        )}

        {blogs.length > 0 && (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerStaggerVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {blogs
              .slice(0, 3)
              .map(
                ({
                  featuredImg,
                  featuredImgAlt,
                  title,
                  excerpt,
                  currentSlug,
                  author,
                }) => (
                  <motion.div key={title} variants={itemVariants}>
                    <CardBlog
                      currentSlug={currentSlug}
                      featuredImgAlt={featuredImgAlt}
                      featuredImg={featuredImg}
                      title={title}
                      author={author}
                      excerpt={excerpt}
                      className="h-full"
                    />
                  </motion.div>
                ),
              )}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
