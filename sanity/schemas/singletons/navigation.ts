import { IoHomeOutline } from "react-icons/io5"
import { Rule, defineField, defineType } from "sanity"

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
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "menuList",
      type: "array",
      title: "Title",
      of: [{ type: "navItem" }],
      validation: (rule) => rule.required(),
    }),
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
