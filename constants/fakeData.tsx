import { BsFillBoxFill } from "react-icons/bs"

export const menuListFake = [
  { label: "Link 1", url: "/#link-1" },
  { label: "Link 2", url: "/#link-2" },
  { label: "Link 3", url: "/#link-3" },
  { label: "Link 4", url: "/#link-4" },
]

export const selectOptions = [
  "Aardvark",
  "Cat",
  "Dog",
  "Kangaroo",
  "Panda",
  "Snake",
]

export const reviewsFakeData = [
  {
    imgSrc: "https://dummyimage.com/572x594.png/dddddd/ffffff",
    imgAlt: "Placeholder image",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "First Middle Last",
    stars: 5,
  },
  {
    imgSrc: "https://dummyimage.com/572x594.png/dddddd/ffffff",
    imgAlt: "Placeholder image",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "First Last",
    stars: 4,
  },
  {
    imgSrc: "https://dummyimage.com/572x594.png/dddddd/ffffff",
    imgAlt: "Placeholder image",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    reviewer: "Last First",
    stars: 3,
  },
]

export type CTAButtonTypes = {
  url: string
  variant?: string
  label: string
}[]

export const headerButtonsFake: CTAButtonTypes = [
  {
    url: "#",
    variant: "outline",
    label: "Link",
  },
  {
    url: "#",
    variant: "default",
    label: "Link",
  },
]

export const featuresDataFake = [
  {
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: <BsFillBoxFill />,
  },
  {
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: <BsFillBoxFill />,
  },
  {
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: <BsFillBoxFill />,
  },
  {
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: <BsFillBoxFill />,
  },
]

export const heroButtonsFake = [
  {
    url: "/",
    variant: "btn-inverted",
    label: "Link",
  },
  {
    url: "/",
    variant: "btn-border-light",
    label: "Link",
  },
]

export const vacationButtonsFake = [
  {
    url: "/",
    variant: "btn-primary",
    label: "Link",
  },
  {
    url: "/",
    variant: "btn-border-dark",
    label: "Link",
  },
]

export const perksButtonsFake = [
  {
    url: "#",
    variant: "btn-border-dark",
    label: "Link",
  },
  {
    url: "#",
    variant: "btn-border-none",
    label: "Link",
    icon: true,
  },
]

export const roomOptionsFake = [
  {
    imgSrc: "https://dummyimage.com/640x488.png/dddddd/ffffff",
    title: "Featured Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    smallCard: false,
  },
  {
    imgSrc: "https://dummyimage.com/640x488.png/dddddd/ffffff",
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    smallCard: true,
  },
  {
    imgSrc: "https://dummyimage.com/640x488.png/dddddd/ffffff",
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    smallCard: true,
  },
  {
    imgSrc: "https://dummyimage.com/640x488.png/dddddd/ffffff",
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    smallCard: true,
  },
  {
    imgSrc: "https://dummyimage.com/640x488.png/dddddd/ffffff",
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    smallCard: true,
  },
]
