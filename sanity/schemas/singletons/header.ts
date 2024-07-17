import { defineField, defineType } from "sanity"

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "logoImage",
      title: "Logo Image",
      type: "customImage",
    }),
    {
      name: "menu",
      type: "reference",
      to: [{ type: "navigation" }],
    },
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
    title: "Header",
  },
})
