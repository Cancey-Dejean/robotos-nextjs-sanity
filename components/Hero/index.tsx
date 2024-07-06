import { HeroProps } from "@/types/HeroProps"
import { Button, ButtonProps } from "../ui/button"
import { Link } from "next-view-transitions"
import DynamicImage from "../DynamicImage"

export default function Hero({
  title,
  description,
  mainImage,
  mainImageAlt,
  ctaButtons,
}: {
  title: string
  description?: any
  mainImage?: string
  mainImageAlt?: string
  ctaButtons: ButtonProps[]
}) {
  return (
    <section>
      <h1>{title}</h1>
      <div className="text-2xl">{description}</div>

      <DynamicImage
        url={mainImage || "https://dummyimage.com/618x618.png/dddddd/ffffff"}
        alt={mainImageAlt}
      />

      {ctaButtons &&
        ctaButtons.map(({ variant, label }) => (
          <Button key={label} asChild variant={variant}>
            <Link href="/">{label}</Link>
          </Button>
        ))}
    </section>
  )
}
