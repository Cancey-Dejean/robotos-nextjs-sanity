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
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "customImage",
    }),
    defineField({
      name: "ctaButtons",
      type: "buttonGroup",
      title: "CTA Buttons",
    }),
  ],
  initialValue: {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
})
