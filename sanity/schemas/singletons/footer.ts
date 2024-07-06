import { defineField, defineType } from "sanity"

export default defineType({
  name: "footer",
  title: "footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
  initialValue: {
    title: "Footer",
  },
})
