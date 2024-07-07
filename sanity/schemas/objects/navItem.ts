import { IoIosLink } from "react-icons/io"
import { defineField, defineType } from "sanity"

export const navItem = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  icon: IoIosLink,
  fields: [
    defineField({
      name: "link",
      title: "Link",
      type: "link",
    }),
    defineField({
      name: "cta",
      type: "boolean",
      title: "Call to action",
    }),
  ],
  initialValue: {
    cta: false,
  },
  preview: {
    select: {
      title: "link.label",
      subtitle: "link.customUrl",
      internalLink: "link.internalLink",
    },
    prepare({ title, subtitle, internalLink }) {
      return {
        title: title || "Label needs to be set",
        subtitle:
          subtitle || (internalLink ? "Internal link set" : "No URL present"),
        media: IoIosLink,
      }
    },
  },
})
