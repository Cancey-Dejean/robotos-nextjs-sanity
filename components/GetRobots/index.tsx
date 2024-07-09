import Image from "next/image"
import { PortableText, PortableTextBlock } from "next-sanity"
import Availability from "../Availability"
import Container from "../Container"
import SectionTitle from "../SectionTitle"
import { Button } from "../ui/button"
import Link from "next/link"
import Card from "../Cards/Card"

export default function GetRobots({
  heading,
  bgImg,
  text,
  topImage,
  topImageAlt,
  availability,
}: {
  text: PortableTextBlock
  bgImg?: string
  heading?: string
  topImage?: string
  topImageAlt?: string
  availability?: boolean
}) {
  return (
    <section
      className="bg-yellow-200 bg-fixed px-5 pb-20 pt-28 [background-image:url('/images/get-robots-bg.png')] md:py-32"
      style={{ backgroundImage: `url('${bgImg}')` }}
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
            <SectionTitle>{heading}</SectionTitle>
            <div className="mb-4">
              <PortableText value={text} />
            </div>

            <Button asChild>
              <Link href="#">MINT ROBOTOS</Link>
            </Button>
          </div>

          {/* Availability */}
          {availability && <Availability />}
        </Card>
      </Container>
    </section>
  )
}
