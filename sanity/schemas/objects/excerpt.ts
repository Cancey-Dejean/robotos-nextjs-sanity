import { defineType } from "sanity"

export const excerpt = defineType({
  name: "excerpt",
  title: "Excerpt",
  type: "text",
  validation: (rule) => rule.max(155).required(),
})
