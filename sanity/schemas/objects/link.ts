import { defineField, defineType } from "sanity"

export const link = defineType({
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    defineField({
      title: "Internal Link",
      name: "internalLink",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "page" }, { type: "homepage" }, { type: "blog" }],
    }),
    defineField({
      name: "customUrl",
      title: "Custom Url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    }),
    defineField({
      name: "newTab",
      type: "boolean",
      title: "Open in new tab?",
    }),
  ],
})
