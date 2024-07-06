"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
} from "@/constants/images"
import { Button, ButtonProps } from "../ui/button"
import Availability from "../Availability"
import { robots } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { Link } from "next-view-transitions"

export default function Hero({
  heading,
  buttonLabel,
  buttonUrl,
  buttonVariant,
  // newTab,
  // mainImage,
  // mainImageAlt,
  // ctaButtons,
}: {
  heading?: string
  buttonLabel?: string
  buttonUrl?: string
  buttonVariant?: ButtonProps["variant"]
  // newTab?: boolean
  // mainImage?: string
  // mainImageAlt?: string
  // ctaButtons: ButtonProps[]
}) {
  const { scrollY } = useScroll()
  const imageContainerStyles = "absolute"

  const imageStyles =
    "relative h-[100px] w-[150px] sm:h-[150px] sm:w-[200px] lg:h-[213px] lg:w-[250px]"

  // Paralax Hero Effect
  const textBoxY = useTransform(scrollY, [0, 500], [0, 250])
  const image1Y = useTransform(scrollY, [0, 500], [0, 300])
  const image2Y = useTransform(scrollY, [0, 500], [0, 200])
  const image3Y = useTransform(scrollY, [0, 500], [0, -100])
  const image4Y = useTransform(scrollY, [0, -250], [0, 250])
  const image5Y = useTransform(scrollY, [0, 500], [0, 50])
  const image6Y = useTransform(scrollY, [0, 500], [0, 300])
  const image7Y = useTransform(scrollY, [0, 500], [0, 350])
  const image8Y = useTransform(scrollY, [0, 10], [0, -10])
  const image9Y = useTransform(scrollY, [0, -500], [0, 450])
  const image10Y = useTransform(scrollY, [0, 500], [0, 500])
  const image11Y = useTransform(scrollY, [0, 500], [0, 550])

  return (
    <motion.section>
      <h1
        className={cn(
          "hero-text text-center font-heading text-[12vw] uppercase leading-none text-white md:text-[15vw] 3xl:text-[270px] [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out"
        )}
      >
        {heading ? (
          <motion.span>{heading}</motion.span>
        ) : (
          <>
            <motion.span className="hover:text-yellow-100">RO</motion.span>

            <motion.span className="rotate-90 transform hover:text-blue-100">
              BOT
            </motion.span>

            <motion.span className="hover:text-magenta">OS</motion.span>
          </>
        )}
      </h1>

      {/* Button */}
      {buttonLabel}
      <Button variant={buttonVariant} asChild>
        <Link href={buttonUrl || "/"}>{buttonLabel}</Link>
      </Button>

      {/* Availability */}
      <div className="hidden sm:block">
        <Availability />
      </div>

      {/* <DynamicImage
        url={mainImage || "https://dummyimage.com/618x618.png/dddddd/ffffff"}
        alt={mainImageAlt}
      /> */}

      {/* {ctaButtons &&
        ctaButtons.map(({ variant, label }) => (
          <Button key={label} asChild variant={variant}>
            <Link href="/">{label}</Link>
          </Button>
        ))} */}
    </motion.section>
  )
}
