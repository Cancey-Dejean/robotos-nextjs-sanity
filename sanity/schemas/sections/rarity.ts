import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const rarity = defineType({
  name: "rarity",
  type: "object",
  title: "Rarity",
  fields: [
    defineField({
      name: "globals",
      type: "sectionGlobals",
      title: "Globals",
    }),
    defineField({
      name: "bgImage",
      type: "image",
      title: "Background Image",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block", title: "Block" }],
    }),
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
        title: title || "Robotos",
        subtitle: "Block",
        media: media || FaRegImage,
      }
    },
  },
})
