import { ImageRow1, ImageRow2, ImageRow3 } from "./images"
import { NavItem } from "@/types/NavItem";

export const menuList: NavItem[] = [
  {
    label: "Your Stuff",
    url: "/your-stuff",
    cta: false,
  },
  {
    label: "Rarity",
    url: "/#rarity",
    cta: false,
  },
  {
    label: "Faq",
    url: "/#faq",
    cta: false,
  },
  {
    label: "Connect",
    url: null,
    cta: true,
  },
]

export const rowImages = [
  {
    src: ImageRow1,
    alt: "",
  },
  {
    src: ImageRow2,
    alt: "",
  },
  {
    src: ImageRow3,
    alt: "",
  },
]

export const faqs = [
  {
    question: "What Are Robotos?",
    answer:
      "Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔",
    image: "/images/80s-Pop.svg",
    imageAlt: "Icon",
    imgHeight: 44,
    imgWidth: 120,
  },
  {
    question: "What Do I Get?",
    answer:
      "You get different image assets of your Roboto, including an animated GIF, PNG, and SVG file (which is resolution free.)",
    image: "/images/Body.svg",
    imageAlt: "Icon",
    imgHeight: 76,
    imgWidth: 120,
  },
  {
    question: "How Do I Get My Stuff?",
    answer:
      "The images & Roboto metadata will be released after Robotos NFTs sell out. We will update collectors via our Discord with the date/time of when the content will be available. Once the metadata is updated, your Roboto GIF will appear on OpenSea, and you will be able to download the additional file formats from our website.",
    image: "/images/Gradient-Shades.svg",
    imageAlt: "Icon",
    imgWidth: 120,
    imgHeight: 34,
  },
  {
    question: "Why Robotos?",
    answer:
      "By collecting Robotos you'll have a voice in the community and help guide the direction of the project and development of the story. Already some great ideas have come from the community. Working together we can continue the grow the Robotos ecosystem!",
    image: "/images/light.svg",
    imageAlt: "Icon",
    imgWidth: 94,
    imgHeight: 94,
  },
  {
    question: "What's On The Roadmap?",
    answer: "Join our Discord to have a voice on our roadmap.",
    image: "/images/Helmet.svg",
    imageAlt: "Icon",
    imgWidth: 112,
    imgHeight: 100,
  },
  {
    question: "What's An NFT?",
    answer:
      "NFT stands for  which means that it's a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFT's fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a  card. Robotos works like this.",
    image: "/images/Ear.svg",
    imageAlt: "Icon",
    imgWidth: 79,
    imgHeight: 77,
  },
  {
    question: "How Do I NFT?",
    answer:
      "New to NFTs? No worries, here are some steps on what you need to do to get your Roboto.",
    image: "/images/Exploded-Head.svg",
    imageAlt: "Icon",
    imgWidth: 93,
    imgHeight: 86,
  },
]

export const itemsGrid = [
  {
    image: "/images/animated-roboto.gif",
    text: "roboto#1234",
  },
  {
    image: "/images/animated-roboto2.gif",
    text: "roboto#1234",
  },
  {
    image: "/images/animated-roboto3.gif",
    text: "roboto#1234",
  },
  {
    image: "/images/animated-roboto2.gif",
    text: "roboto#1234",
  },
]

export const columns = [
  {
    name: "Types",
    image: "/images/rarity-type.svg",
    items: [
      {
        boldText: "9,999",
        title: "Total Robots",
      },
      {
        boldText: "Common",
        title: "Robotos",
      },
      {
        boldText: "Less Common",
        title: "Helmetos",
      },
      {
        boldText: "Rare",
        title: "Computos",
      },
      {
        boldText: "Super Rare",
        title: "Cyborgos",
      },
    ],
  },
  {
    name: "Variations",
    image: null,
    items: [
      {
        boldText: "38",
        title: "Head Tops",
      },
      {
        boldText: "32",
        title: "Eyes",
      },
      {
        boldText: "18",
        title: "Helmets",
      },
      {
        boldText: "16",
        title: "Mouth",
      },
      {
        boldText: "18",
        title: "Ears",
      },
      {
        boldText: "12",
        title: "Arms",
      },
      {
        boldText: "10",
        title: "Chassis Colors",
      },
      {
        boldText: "9",
        title: "Backpacks",
      },
      {
        boldText: "6",
        title: "Computo Heads",
      },
      {
        boldText: "6",
        title: "Chest Screens",
      },
      {
        boldText: "5",
        title: "Bodies",
      },
      {
        boldText: "4",
        title: "Head Types",
      },
      {
        boldText: "4",
        title: "Human Faces",
      },
    ],
  },
]

export const blogs = [
  {
    slug: "first-post",
    image: "/images/blog/blog-1.jpg",
    title: "Blog 1",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    slug: "second-post",
    image: "/images/blog/blog-2.jpg",
    title: "Blog 2",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    slug: "third-post",
    image: "/images/blog/blog-3.jpg",
    title: "Blog 3",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    slug: "fourth-post",
    image: "/images/blog/blog-2.jpg",
    title: "Blog 4",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]
