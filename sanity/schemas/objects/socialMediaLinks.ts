import { IoIosLink } from "react-icons/io"
import { defineType } from "sanity"

export const socialMediaLinks = defineType({
  name: "socialMediaLinks",
  title: "Social Links",
  type: "object",
  icon: IoIosLink,
  fields: [
    {
      name: "youtube",
      title: "YouTube",
      type: "url",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }).optional(),
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "url",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }).optional()
    },
    {
      name: "tikTok",
      title: "TikTok",
      type: "url",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }).optional()
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }).optional()
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "url",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }).optional()
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "url",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }).optional()
    },
  ],
})
