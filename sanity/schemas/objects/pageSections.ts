import { defineType } from "sanity"

export const pageSections = defineType({
  name: "pageSections",
  type: "array",
  of: [
    { type: "hero" },
    { type: "getRobots" },
    { type: "intermission" },
    { type: "rarity" },
    { type: "recentBlogs" },
    { type: "faqSection" },
    { type: "robotGrid" },
    { type: "newsletter" },
  ],
  options: {
    insertMenu: {
      filter: true,
      showIcons: true,
      groups: [
        {
          name: 'heroes',
          title: 'Heroes',
          of: ['hero'],
        },
      ],
      views: [
        {name: 'grid', previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.jpg`},
        {name: 'list'},
      ],
    }
  },
})
