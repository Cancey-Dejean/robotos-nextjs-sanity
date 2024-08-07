import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const hero = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "globals",
      type: "sectionGlobals",
      title: "Globals",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Title",
      validation: (rule) => rule.max(7),
    }),
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
        subtitle: "Hero",
        media: media || FaRegImage,
      }
    },
  },
})
