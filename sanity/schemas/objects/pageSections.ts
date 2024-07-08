import { defineType } from "sanity"

export const pageSections = defineType({
  name: "pageSections",
  type: "array",
  of: [
    { name: "hero", type: "hero" },
    { name: "getRobot", type: "getRobot" },
  ],
})
