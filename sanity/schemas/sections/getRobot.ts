import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const getRobot = defineType({
  name: "getRobot",
  type: "object",
  title: "Get Robot",
  fields: [
    defineField({
      name: "globals",
      type: "sectionGlobals",
      title: "Section Globals",
    }),
    defineField({
      name: "image",
      type: "customImage",
      title: "Top Image",
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
    defineField({
      name: "button",
      title: "Button",
      type: "button",
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
        subtitle: "Get Robot",
        media: media || FaRegImage,
      }
    },
  },
})
