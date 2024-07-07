import { FaLink, FaLinkSlash } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const link = defineType({
  name: "link",
  type: "object",
  title: "Link",
  icon: FaLink,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      title: "Internal Url",
      name: "internalLink",
      description: "Select page for navigation",
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
  initialValue: {
    label: "Button",
    newTab: false,
  },
  preview: {
    select: {
      title: "label",
      subtitle: "customUrl",
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle,
        media: FaLinkSlash,
      }
    },
  },
})
