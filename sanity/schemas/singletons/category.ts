import { defineField, defineType } from "sanity"
import { BiCategory } from "react-icons/bi"

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: BiCategory,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "bodyText",
    }),
  ],
  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title,
        media: image,
      }
    },
  },
})
