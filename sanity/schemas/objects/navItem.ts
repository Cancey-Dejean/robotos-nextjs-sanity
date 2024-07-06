import { IoIosLink } from "react-icons/io"
import { defineField, defineType } from "sanity"

export const navItem = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  icon: IoIosLink, // Use the imported icon here
  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Label",
    }),
    defineField({
      name: "internalUrl",
      title: "Internal Url",
      type: "object",
      fields: [
        {
          title: "Url",
          name: "url",
          description: "Select pages for navigation",
          type: "reference",
          to: [{ type: "page" }, { type: "homepage" }, { type: "blog" }],
        },
      ],
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
    defineField({
      name: "cta",
      type: "boolean",
      title: "Call to action",
    }),
  ],
  initialValue: {
    label: "Button",
    cta: false,
    newTab: false,
  },
  preview: {
    select: {
      title: "label",
      subtitle: "customUrl",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? subtitle : "No custom URL",
        media: IoIosLink, // Use the imported icon in the preview
      }
    },
  },
})
