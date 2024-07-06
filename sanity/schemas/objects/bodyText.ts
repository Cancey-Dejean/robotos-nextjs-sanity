import { defineType } from "sanity"

import { GrNotes } from "react-icons/gr"

export const bodyText = defineType({
  name: "bodyText",
  type: "array",
  title: "Post Body",
  icon: GrNotes,
  of: [
    { type: "block", title: "Block" },
    {
      type: "customImage",
      title: "Image",
    },
  ],
})
