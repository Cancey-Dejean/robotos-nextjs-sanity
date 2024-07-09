import { defineField, defineType } from 'sanity';

export const rarityTextRow = defineType({
  name: 'rarityTextRow',
  title: 'Text Row',
  type: 'object',
  fields: [
    defineField({
      name: 'boldText',
      title: 'Bold Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  initialValue: {
    boldText: "Bold Text",
    title: "Title",
  },
  preview: {
    select: {
      title: "boldText",
      subtitle: "title",
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || "Label needs to be set",
        subtitle: subtitle || "No URL present",
      }
    },
  },
});
