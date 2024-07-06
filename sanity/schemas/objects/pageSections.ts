export const pageSections = {
  name: "pageSections",
  type: "array",
  of: [{ name: "hero", type: "hero" }],
  insertMenu: {
    groups: [
      {
        name: "intro",
        title: "Intro",
        of: ["hero"],
      },
      {
        name: "storytelling",
        title: "Storytelling",
      },
      {
        name: "upsell",
        title: "Upsell",
        of: ["testimonials", "hero"],
      },
    ],
    views: [
      { name: "list" },
      {
        name: "grid",
        previewImageUrl: (schemaTypeName: string) =>
          `/public/thumbnails/${schemaTypeName}.jpg`,
      },
    ],
  },
}
