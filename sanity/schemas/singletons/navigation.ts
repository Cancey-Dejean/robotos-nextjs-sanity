import { IoHomeOutline } from "react-icons/io5"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: IoHomeOutline,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Menu Title",
      validation: (rule) => rule.error("Title is required").required(),
    }),
    {
      name: "menuList",
      type: "array",
      title: "Menu List",
      of: [{ type: "navItem" }],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "Navigation",
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || "Title needs to be set",
        subtitle: subtitle,
        media: IoHomeOutline,
      }
    },
  },
})
