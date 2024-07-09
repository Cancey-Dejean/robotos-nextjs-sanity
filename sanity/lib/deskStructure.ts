import { TfiLayersAlt } from "react-icons/tfi"
import { RxHome } from "react-icons/rx"
import { FiLayers } from "react-icons/fi"
import { FaGears } from "react-icons/fa6"
import { IoMenuOutline } from "react-icons/io5"
import { FaPenToSquare } from "react-icons/fa6"

export const SideBarList = (S: any, context: any) =>
  S.list()
    .title("Base")
    .items([
      S.divider(),

      // List of Pages
      S.listItem()
        .title("Pages")
        .icon(TfiLayersAlt)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.divider(),

              S.listItem()
                .title("Homepage")
                .icon(RxHome)
                .child(
                  S.document().schemaType("homepage").documentId("homepage")
                ),

              S.divider(),

              S.listItem()
                .title("Inner Pages")
                .icon(FiLayers)
                .child(
                  S.documentList().title("All Pages").filter('_type == "page"')
                ),

              S.divider(),
            ])
        ),

      S.divider(),

      // List the Blog Posts
      S.listItem()
        .title("Posts")
        .icon(FaPenToSquare)
        .child(
          S.list()
            .title("Filters")
            .items([
              S.divider(),

              S.listItem().title("All Posts").child(
                /* Create a list of all posts */
                S.documentList().title("All Posts").filter('_type == "blog"')
              ),

              S.divider(),

              S.listItem()
                .title("Posts By Author")
                .child(
                  S.documentTypeList("author")
                    .title("Posts by Author")
                    .child((authorId: any) =>
                      S.documentList()
                        .title("Posts")
                        .filter('_type == "blog" && $authorId == author._ref')
                        .params({ authorId })
                    )
                ),

              S.divider(),

              S.listItem()
                .title("Posts By Category")
                .child(
                  S.documentTypeList("category")
                    .title("Posts by Category")
                    .child((categoryId: any) =>
                      S.documentList()
                        .title("Posts")
                        .filter(
                          '_type == "blog" && $categoryId in categories[]._ref'
                        )
                        .params({ categoryId })
                    )
                ),

              S.divider(),
            ])
        ),

      S.divider(),

      // List of Menus
      S.listItem()
        .title("Menus")
        .icon(IoMenuOutline)
        .child(
          S.documentList().title("All Menus").filter('_type == "navigation"')
        ),

      S.divider(),
      // List the site settings
      S.listItem()
        .title("Settings")
        .icon(FaGears)
        .child(
          S.list()
            // Sets a title for our new list
            .title("Global Settings")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Site Settings")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),

              S.divider(),

              S.listItem()
                .title("Header")
                .child(S.document().schemaType("header").documentId("header")),

              S.divider(),

              S.listItem()
                .title("Footer")
                .child(S.document().schemaType("footer").documentId("footer")),

              S.divider(),
            ])
        ),

        S.divider(),

        S.listItem()
        .title('Rarity List')
        .icon(IoMenuOutline)
        .child(
          S.documentList()
            .title('All Rarity Groups')
            .filter('_type == "rarityList"')
        ),

        S.divider(),
    ])
