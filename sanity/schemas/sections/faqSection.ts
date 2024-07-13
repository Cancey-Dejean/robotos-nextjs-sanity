import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const faqSection = defineType({
  name: "faqSection",
  type: "object",
  title: "FAQ Section",
  fields: [
    defineField({
      name: "globals",
      type: "sectionGlobals",
      title: "Globals",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (rule) => rule.required(),
    }),
    {
      name: "questions",
      type: "reference",
      to: [{ type: "faqList" }],
      title: "Questions",
    },
  ],
  initialValue: {
    heading: "Title",
  },
  preview: {
    select: {
      title: "heading",
      media: "globals.previewImage",
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || "FAQ Section",
        subtitle: "FAQ Section",
        media: media || FaRegImage,
      }
    },
  },
})
