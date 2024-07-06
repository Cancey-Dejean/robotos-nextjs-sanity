import { ButtonProps } from "@/components/ui/button"

export type HeroProps = {
  /**
   * Description goes here
   */
  title: string
  description?: any
  mainImage?: string
  mainImageAlt?: string
  ctaButtons: ButtonProps[]
}
