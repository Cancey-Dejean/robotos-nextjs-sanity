import { defineField, defineType } from "sanity"

export const newsletter = defineType({
  name: "newsletter",
  type: "object",
  title: "Newsletter",
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
    }),
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    defineField({
      name: "buttonText",
      type: "string",
      title: "Button Text",
    }),
  ],
  initialValue: {
    heading: "Title",
    buttonText: "Subscribe",
  },
  preview: {
    select: {
      title: "heading",
      media: "globals.previewImage",
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title || "Robotos",
        subtitle: "Newsletter",
      }
    },
  },
})
