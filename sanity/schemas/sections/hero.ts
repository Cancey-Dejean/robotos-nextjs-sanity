import { defineField, defineType } from "sanity"
import { Rule } from "sanity"

export const hero = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
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
      validation: (rule) => rule.max(7).required(),
    }),

    defineField({
      name: "buttonLabel",
      title: "Button Label",
      type: "text",
    }),
    defineField({
      name: "buttonUrl",
      title: "Button URL",
      type: "url",
    }),
  ],
  initialValue: {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
})
