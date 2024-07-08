import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const hero = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "previewImage",
      type: "previewThumbnail",
      title: "Preview Image",
    }),
    defineField({
      name: "hideSection",
      title: "Hide Section",
      type: "hideSection",
    }),
    defineField({
      name: "heading",
      type: "string",
      description: "This field is the title of your project.",
      title: "Title",
      validation: (rule) => rule.max(7),
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
      media: "previewImage",
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
