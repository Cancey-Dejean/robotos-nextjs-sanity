"use client";
import React, { useRef } from "react";
import Container from "../Container";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { containerStaggerVariants, faqVariants } from "@/lib/animations";
import { PortableText, PortableTextBlock } from "next-sanity";
import { blockImageRenderer } from "@/utils";

type Question = {
  question: string;
  answer: PortableTextBlock;
  iconImage?: string;
  iconImageAlt?: string;
  imgHeight?: number;
  imgWidth?: number;
};
export default function Faq({
  heading,
  items,
}: {
  heading: string;
  items: Question[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const imageStyles =
    "relative odd:rotate-[-10deg] even:rotate-[20deg] lg:max-w-[130px] w-[130px] h-[130px]";

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerStaggerVariants}
      className="relative bg-blue-50 pb-16 pt-32 md:py-52"
      id="faq"
    >
      <Container>
        {heading && (
          <SectionTitle as="h2" className="mb-14">
            {heading || "Frequently Asked Questions"}
          </SectionTitle>
        )}

        {items.length > 0 && (
          <div className="flex flex-col gap-12 md:gap-24">
            {items.map(
              ({
                question,
                answer,
                iconImage,
                iconImageAlt,
                imgHeight,
                imgWidth,
              }: Question) => (
                <motion.div key={question} variants={faqVariants}>
                  <Image
                    src={
                      iconImage ||
                      "https://dummyimage.com/160x160.png/dddddd/ffffff"
                    }
                    alt={iconImageAlt || "Icon"}
                    height={imgHeight || 160}
                    width={imgWidth || 160}
                    className="mb-3"
                  />

                  <h3 className="mb-3 text-2xl">{question}</h3>
                  {/* <div>{answer}</div> */}
                  <div className="prose max-w-full">
                    <PortableText
                      value={answer}
                      components={blockImageRenderer}
                    />
                  </div>
                </motion.div>
              ),
            )}
          </div>
        )}
      </Container>

      {/* Top */}
      <div className="absolute -top-[10px] left-1/2 flex w-[90%] -translate-x-1/2 justify-around gap-6 md:w-[68%]">
        {/* Top Image One */}
        <div className={cn(imageStyles, "hidden sm:block")}>
          <Image src="/images/head11.svg" className="-mt-[20px]" fill alt="" />
        </div>

        {/* Top Image Two */}
        <div className={cn(imageStyles, "hidden sm:block")}>
          <Image src="/images/head02.svg" fill alt="" />
        </div>

        {/* Top Image Three */}
        <div className={cn(imageStyles, "-mt-[40px] sm:mt-0")}>
          <Image src="/images/icon-256w.png" className="mt-2" fill alt="" />
        </div>
      </div>

      {/* Right */}
      <div className="absolute right-0 top-0 hidden h-full flex-col justify-around xl:flex">
        {/* Right Image One */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head23.svg" fill alt="" />
        </div>

        {/* Right Image Two */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head12.svg" className="ml-[30px]" fill alt="" />
        </div>

        {/* Right Image Three */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head21.svg" className="ml-[-30px]" fill alt="" />
        </div>

        {/* Right Image Four */}
        <div className={cn(imageStyles)}>
          <Image
            src="/images/head22.svg"
            className="ml-[10px] rotate-[-20deg]"
            fill
            alt=""
          />
        </div>

        {/* Right Image Five */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head20.svg" className="-ml-[40px]" fill alt="" />
        </div>

        {/* Right Image Six */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head14.svg" fill alt="" />
        </div>

        {/* Right Image Seven */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head18.svg" className="ml-[-40px]" fill alt="" />
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute -bottom-[10px] left-1/2 flex w-[90%] -translate-x-1/2 justify-around gap-6 md:w-[68%]">
        {/* Bottom Image One */}
        <div className={cn(imageStyles, "hidden sm:block")}>
          <Image src="/images/head27.svg" className="-mt-[20px]" fill alt="" />
        </div>

        {/* Bottom Image Two */}
        <div className={cn(imageStyles, "hidden sm:block")}>
          <Image src="/images/head17.svg" fill alt="" />
        </div>

        {/* Bottom Image Three */}
        <div className={cn(imageStyles, "hidden sm:block")}>
          <Image src="/images/head19.svg" className="mt-2" fill alt="" />
        </div>
      </div>

      {/* Left */}
      <div className="absolute left-0 top-0 hidden h-full flex-col justify-around xl:flex">
        {/* Left Image One */}
        <div className={cn(imageStyles)}>
          <Image
            src="/images/head04.svg"
            className="-rotate-[20deg]"
            fill
            alt=""
          />
        </div>

        {/* Left Image Two */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head26.svg" className="ml-[-40px]" fill alt="" />
        </div>

        {/* Left Image Three */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head29.svg" className="ml-[20px]" fill alt="" />
        </div>

        {/* Left Image Four */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head27.svg" fill alt="" />
        </div>

        {/* Left Image Five */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head25.svg" className="ml-[-40px]" fill alt="" />
        </div>

        {/* Left Image Six */}
        <div className={cn(imageStyles)}>
          <Image src="/images/head24.svg" fill alt="" />
        </div>
        <div className={cn(imageStyles)}>
          <Image src="/images/head05.svg" fill alt="" />
        </div>
      </div>
    </motion.section>
  );
}
