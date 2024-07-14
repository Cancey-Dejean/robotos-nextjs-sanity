import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const robotGrid = defineType({
  name: "robotGrid",
  type: "object",
  title: "Robot Grid",
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
    defineField({
      name: "text",
      type: "array",
      title: "Text",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "items",
      type: "array",
      title: "Items",
      of: [{ type: "robotGridItem" }],
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
        title: title || "Robot Grid",
        subtitle: "Robot Grid",
        media: media || FaRegImage,
      }
    },
  },
})
