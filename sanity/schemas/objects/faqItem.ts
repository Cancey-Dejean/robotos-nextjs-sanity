import { FaRegImage } from "react-icons/fa6"
import { IoIosLink } from "react-icons/io"
import { defineField, defineType } from "sanity"

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "object",
  icon: IoIosLink,
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "customImage",
    }),
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "bodyText",
    }),
    defineField({
      name: "imgWidth",
      title: "Image Width",
      type: "number",
    }),
    defineField({
      name: "imgHeight",
      title: "Image Height",
      type: "number",
    }),
  ],
  initialValue: {
    question: "Question?",
  },
  preview: {
    select: {
      title: "question",
      media: "icon",
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || "Label needs to be set",
        subtitle: "Faq",
        media: media || FaRegImage,
      }
    },
  },
})
