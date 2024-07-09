import { FaRegImage } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const recentBlogs = defineType({
  name: "recentBlogs",
  type: "object",
  title: "Recent Blogs",
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
        subtitle: "Recent Blogs",
        media: media || FaRegImage,
      }
    },
  },
})
