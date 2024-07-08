import { FaRegHandPointer } from "react-icons/fa6"
import { defineField, defineType } from "sanity"

export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  icon: FaRegHandPointer,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    }),
    defineField({
      name: "variant",
      type: "string",
      title: "Variant",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Default", value: "default" },
          { title: "Mint", value: "mint" },
          { title: "Purple", value: "purple" },
        ],
      },
    }),
    defineField({
      name: "newTab",
      type: "boolean",
      title: "Open in new tab?",
      initialValue: false,
    }),
  ],
  options: {
    collapsible: true,
  },
  initialValue: {
    label: "MINT ROBOTOS",
    variant: "default",
  },
  preview: {
    select: {
      title: "label",
      subtitle: "url",
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || "Label needs to be set",
        subtitle: subtitle || "No URL present",
        media: FaRegHandPointer, // Use the imported icon here
      }
    },
  },
})
