import { GROUPS } from "@/constants"
import { IoHomeOutline } from "react-icons/io5"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "homepage",
  title: "HomePage",
  type: "document",
  icon: IoHomeOutline,
  groups: GROUPS,
  fields: [
    defineField({
      type: "string",
      name: "metaTitle",
      title: "Title",
      validation: (rule) => rule.required(),
      group: "seo",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "metaTitle",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
      group: "seo",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      description:
        "Used both for the <meta> description tag for SEO, and the personal website subheader.",
      type: "text",
      validation: (rule) => rule.max(155).required(),
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "customImage",
      group: "seo",
    }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "pageSections",
      group: "pageBuilder",
    }),
  ],
  preview: {
    select: {
      title: "metaTitle",
    },
    prepare({ title }) {
      return {
        subtitle: "Home",
        title,
      }
    },
  },
})
