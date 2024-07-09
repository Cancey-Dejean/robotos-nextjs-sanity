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
  ],
})
