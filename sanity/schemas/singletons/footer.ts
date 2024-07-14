import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "footer",
  title: "footer",
  type: "document",
  fields: [
    defineField({
      name: "titleLineOne",
      title: "Title Line One",
      type: "string",
    }),
    defineField({
      name: "titleLineTwo",
      title: "Title Line Two",
      type: "string",
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "button",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block", title: "Block" }],
    }),
    defineField({
      name: "newsletter",
      type: "newsletter",
      title: "Newsletter",
    }),
  ],
  initialValue: {
    title: "Footer",
  },
  preview: {
    select: {
      title: "titleLineOne + titleLineTwo || titleLineOne",
      media: "globals.previewImage",
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || "Robotos",
        subtitle: "Footer",
        media: media || FaRegImage,
      }
    },
  },
})
