import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const intermission = defineType({
  name: "intermission",
  type: "object",
  title: "Intermission",
  fields: [
    defineField({
      name: "globals",
      type: "sectionGlobals",
      title: "Globals",
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Section Name",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "globals.previewImage",
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || "Section name not set",
        subtitle: "Intermission",
        media: media || FaRegImage,
      }
    },
  },
})
