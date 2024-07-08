import { FaRegHandPointer } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const sectionGlobals = defineType({
  name: "sectionGlobals",
  type: "object",
  icon: FaRegHandPointer,
  description: "Global settings for sections",
  fields: [
    defineField({
      name: "previewImage",
      type: "image",
      title: "Preview Image",
      description: "Image size: 1920x1080",
    }),
    defineField({
      name: "hideSection",
      title: "Hide Section",
      type: "hideSection",
    }),
  ],
  options: {
    collapsed: true,
  },
  initialValue: {
    label: "MINT ROBOTOS",
    variant: "default",
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
