import { defineField, defineType } from "sanity"
import { CiUser } from "react-icons/ci"

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: CiUser,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "bodyText",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
})
