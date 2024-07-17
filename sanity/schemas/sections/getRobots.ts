import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const getRobots = defineType({
  name: "getRobots",
  type: "object",
  title: "Get Robots",
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
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block", title: "Block" }],
    },
    defineField({
      name: "button",
      title: "Button",
      type: "button",
    }),
    defineField({
      name: "availability",
      title: "Show Availability?",
      type: "showAvailability",
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
