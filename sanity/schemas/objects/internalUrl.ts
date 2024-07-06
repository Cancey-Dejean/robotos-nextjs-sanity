import { defineField, defineType } from "sanity"

export const internalUrl = defineType({
  name: "internal",
  type: "object",
  fields: [
    defineField({
      title: "Url",
      name: "url",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "page" }, { type: "homepage" }, { type: "blog" }],
    }),
  ],
})
