import { IoHomeOutline } from "react-icons/io5";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqList",
  title: "FAQ List",
  type: "document",
  icon: IoHomeOutline,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "faqItem" }],
      validation: (rule) => rule.required().min(1)
    }
  ],
  initialValue: {
    title: "Title"
  },
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || "Label needs to be set"

      };
    }
  }
});
