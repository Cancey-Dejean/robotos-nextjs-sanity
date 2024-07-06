import { defineType } from "sanity"

import { GrNotes } from "react-icons/gr"

export const buttonGroup = defineType({
  name: "buttonGroup",
  type: "array",
  title: "Button Group",
  icon: GrNotes,
  of: [{ type: "button", title: "Button" }],
  // validation: (rule) => rule.max(2).error("Only 2 CTA buttons are allowed"),
})
