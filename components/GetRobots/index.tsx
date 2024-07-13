import Image from "next/image"
import { PortableText, PortableTextBlock } from "next-sanity"
import Availability from "../Availability"
import Container from "../Container"
import SectionTitle from "../SectionTitle"
import { Button, ButtonProps } from "../ui/button"
import Link from "next/link"
import Card from "../Cards/Card"

export default function GetRobots({
  heading,
  bgImg,
  text,
  topImage,
  topImageAlt,
  buttonUrl,
  buttonVariant,
  buttonLabel,
  availability,
}: {
  text: PortableTextBlock
  bgImg?: string
  heading?: string
  topImage?: string
  topImageAlt?: string
  availability?: boolean
  buttonUrl?: string
  buttonLabel?: string
  buttonVariant?: ButtonProps["variant"]
}) {
  return (
    <section
      className="bg-yellow-200 bg-fixed pb-20 pt-28 md:py-32"
      style={{
        backgroundImage: `url('${bgImg || "https://dummyimage.com/1920x1080.png/dddddd/ffffff"}')`,
      }}
    >
      <Container className="flex justify-center">
        <Card className="items-center text-center md:px-14">
          {/* Image */}
          <div className="relative mx-auto -mt-[80px] mb-4 size-28 overflow-hidden rounded-full border-[5px] border-gray-900 md:size-[190px]">
            <Image
              src={
                topImage || "https://dummyimage.com/190x190.png/dddddd/ffffff"
              }
              className="scale-[1.1]"
              alt={topImageAlt || "Robot Head"}
              fill
            />
          </div>

          {/* Card */}
          <div className="mb-6 flex flex-col gap-4">
            {heading && <SectionTitle>{heading}</SectionTitle>}

            {text && (
              <div className="mb-4">
                <PortableText value={text} />
              </div>
            )}

            {buttonLabel && (
              <Button variant={buttonVariant} asChild>
                <Link href={buttonUrl || "url-not-set"}>{buttonLabel}</Link>
              </Button>
            )}
          </div>

          {/* Availability */}
          {availability && <Availability />}
        </Card>
      </Container>
    </section>
  )
}
