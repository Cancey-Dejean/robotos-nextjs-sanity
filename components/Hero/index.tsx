"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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
} from "@/constants/images";
import { Button, ButtonProps } from "../ui/button";
import Availability from "../Availability";
import { robots } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { NavItem } from "@/types/NavItem";

export default function Hero({
  heading,
  buttonUrl,
  buttonVariant,
  buttonLabel,
  availability,
}: {
  heading?: string;
  buttonUrl?: string;
  buttonLabel?: string;
  buttonVariant?: ButtonProps["variant"];
  availability?: boolean;
} & NavItem) {
  const { scrollY } = useScroll();
  const imageContainerStyles = "absolute";

  const imageStyles =
    "relative h-[100px] w-[150px] sm:h-[150px] sm:w-[200px] lg:h-[213px] lg:w-[250px]";

  // Paralax Hero Effect
  const textBoxY = useTransform(scrollY, [0, 500], [0, 250]);
  const image1Y = useTransform(scrollY, [0, 500], [0, 300]);
  const image2Y = useTransform(scrollY, [0, 500], [0, 200]);
  const image3Y = useTransform(scrollY, [0, 500], [0, -100]);
  const image4Y = useTransform(scrollY, [0, -250], [0, 250]);
  const image5Y = useTransform(scrollY, [0, 500], [0, 50]);
  const image6Y = useTransform(scrollY, [0, 500], [0, 300]);
  const image7Y = useTransform(scrollY, [0, 500], [0, 350]);
  const image8Y = useTransform(scrollY, [0, 10], [0, -10]);
  const image9Y = useTransform(scrollY, [0, -500], [0, 450]);
  const image10Y = useTransform(scrollY, [0, 500], [0, 500]);
  const image11Y = useTransform(scrollY, [0, 500], [0, 550]);

  return (
    <motion.section className="relative flex h-[450px] flex-col justify-center overflow-hidden bg-red sm:h-[800px] md:h-[1048px]">
      {/* Text */}
      <motion.div
        className="z-[4] flex flex-col items-center gap-4 sm:gap-6"
        style={{ y: textBoxY }}
      >
        <h1
          className={cn(
            "hero-text text-center font-heading text-[12vw] uppercase leading-none text-white md:text-[15vw] 3xl:text-[270px] [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out",
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
        {buttonLabel && (
          <Button variant={buttonVariant} asChild>
            <Link href={buttonUrl || "url-not-set"}>{buttonLabel}</Link>
          </Button>
        )}

        {/* Availability */}
        {availability && (
          <div className="hidden sm:block">
            <Availability />
          </div>
        )}
      </motion.div>

      {/* Images */}
      <motion.div initial="hidden" animate="show" variants={robots}>
        {/* Image One */}
        <motion.div
          className={cn(
            "-left-[1%] top-[23%] z-[1] hidden rotate-[10deg] 3xl:block",
            imageContainerStyles,
          )}
          style={{ y: image1Y, rotate: "10deg" }}
          variants={robots}
        >
          <div className={cn("2xl:h-[213px] 2xl:w-[250px]", imageStyles)}>
            <Image src={Image2} alt="image 1" fill />
          </div>
        </motion.div>

        {/* Image Two */}
        <motion.div
          className={cn(
            "-left-[10%] top-[15%] rotate-[20deg] lg:left-[12%] lg:top-[4%]",
            imageContainerStyles,
          )}
          style={{ y: image2Y, rotate: "20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image4} alt="image 2" fill />
          </div>
        </motion.div>

        {/* Image Three */}
        <motion.div
          className={cn(
            "left-[25%] top-[5%] -rotate-[20deg] md:left-[40%] xl:left-[28%] xl:top-[20%]",
            imageContainerStyles,
          )}
          style={{ y: image3Y, rotate: "-20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image6} alt="image 3" fill />
          </div>
        </motion.div>

        {/* Image Four */}
        <motion.div
          className={cn(
            "right-[24%] top-[15%] z-[3] hidden -rotate-[20deg] 2xl:block",
            imageContainerStyles,
          )}
          style={{ y: image4Y, rotate: "-20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image5} alt="image 4" fill />
          </div>
        </motion.div>

        {/* Image Five */}
        <motion.div
          className={cn(
            "-right-[8%] top-[13%] rotate-[8deg] sm:right-4 sm:top-[5%]",
            imageContainerStyles,
          )}
          style={{ y: image5Y, rotate: "8deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image3} alt="image 5" fill />
          </div>
        </motion.div>

        {/* Image Six */}
        <motion.div
          className={cn(
            "-right-[1%] top-[30%] hidden rotate-[10deg] 3xl:block",
            imageContainerStyles,
          )}
          style={{ y: image6Y, rotate: "10deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image1} alt="image 6" fill />
          </div>
        </motion.div>

        {/* Image Seven */}
        <motion.div
          className={cn(
            "-left-[1%] bottom-[3%] hidden -rotate-[23deg] 2xl:block",
            imageContainerStyles,
          )}
          style={{ y: image7Y, rotate: "-23deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image11} alt="image 7" fill />
          </div>
        </motion.div>

        {/* Image Eight */}
        <motion.div
          className={cn(
            "z-[3] -rotate-[20deg] lg:bottom-[25%] lg:left-[15vw] lg:rotate-[20deg]",
            imageContainerStyles,
          )}
          style={{ y: image8Y, rotate: "20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image7} alt="image 8" fill />
          </div>
        </motion.div>

        {/* Image Nine */}
        <motion.div
          className={cn(
            "bottom-[5%] right-[35%] hidden -rotate-[11deg] 3xl:block",
            imageContainerStyles,
          )}
          style={{ y: image9Y, rotate: "-11deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image10} alt="image 9" fill />
          </div>
        </motion.div>

        {/* Image Ten */}
        <motion.div
          className={cn(
            "bottom-[32%] right-[10vw] hidden -rotate-[20deg] xl:block",
            imageContainerStyles,
          )}
          style={{ y: image10Y, rotate: "-20deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image8} alt="image 10" fill />
          </div>
        </motion.div>

        {/* Image Eleven */}
        <motion.div
          className={cn(
            "bottom-[10%] right-0 rotate-[14deg] md:bottom-[5%]",
            imageContainerStyles,
          )}
          style={{ y: image11Y, rotate: "14deg" }}
          variants={robots}
        >
          <div className={cn(imageStyles)}>
            <Image src={Image9} alt="image 11" fill />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
