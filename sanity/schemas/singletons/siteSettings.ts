import { defineType } from "sanity"

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "socialMediaLinks",
      options: {
        collapsable: true,
      }
    },
  ],
})
