import { GROUPS } from "@/constants"
import { IoHomeOutline } from "react-icons/io5"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "rarityList",
  title: "Rarity List",
  type: "document",
  icon: IoHomeOutline,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'rarityTextRow' }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "image",
      type: "customImage",
      title: "Image",
    }),
  ],
  initialValue: {
    title: "Title",
  },
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title || "Label needs to be set",
      }
    },
  },
})
