import { FaRegHandPointer } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const sectionGlobals = defineType({
  name: "sectionGlobals",
  type: "object",
  icon: FaRegHandPointer,
  description: "Global settings for sections",
  fields: [
    defineField({
      name: "hideSection",
      title: "Hide Section",
      type: "hideSection",
    }),
  ],
  options: {
    collapsed: true,
  },
  preview: {
    select: {
      title: "label",
      subtitle: "url",
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || "Label needs to be set",
        subtitle: subtitle || "No URL present",
        media: FaRegHandPointer, // Use the imported icon here
      }
    },
  },
})
