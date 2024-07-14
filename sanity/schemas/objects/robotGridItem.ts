import { FaRegImage } from "react-icons/fa6"
import { IoIosLink } from "react-icons/io"
import { defineField, defineType } from "sanity"

export const robotGridItem = defineType({
  name: "robotGridItem",
  title: "Robot Grid Item",
  type: "object",
  icon: IoIosLink,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
    }),
  ],
  initialValue: {
    title: "Title",
  },
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || "Label needs to be set",
        subtitle: "Grid Item",
        media: media || FaRegImage,
      }
    },
  },
})
