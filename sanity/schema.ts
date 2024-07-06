import { type SchemaTypeDefinition } from "sanity"

import page from "./schemas/documents/page"
import blog from "./schemas/documents/blog"

import { customImage } from "./schemas/objects/customImage"
import { bodyText } from "./schemas/objects/bodyText"
import { excerpt } from "./schemas/objects/excerpt"
import { navItem } from "./schemas/objects/navItem"
import { button } from "./schemas/objects/button"
import { buttonGroup } from "./schemas/objects/buttonGroup"
import { pageSections } from "./schemas/objects/pageSections"
import { hideSection } from "./schemas/objects/hideSection"
import homepage from "./schemas/singletons/homepage"
import siteSettings from "./schemas/singletons/siteSettings"
import header from "./schemas/singletons/header"
import navigation from "./schemas/singletons/navigation"
import footer from "./schemas/singletons/footer"
import category from "./schemas/singletons/category"
import author from "./schemas/singletons/author"

import { hero } from "./schemas/sections/hero"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    blog,
    navigation,

    // Objects
    customImage,
    bodyText,
    excerpt,
    hideSection,
    navItem,
    buttonGroup,
    pageSections,
    hero,

    // Singletons
    homepage,
    category,
    author,
    siteSettings,
    header,
    footer,
    button,
  ],
}