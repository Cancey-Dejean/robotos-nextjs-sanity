import { type SchemaTypeDefinition } from "sanity"

import page from "./schemas/documents/page"
import blog from "./schemas/documents/blog"
import rarityList from "./schemas/documents/rarityList"

import { customImage } from "./schemas/objects/customImage"
import { bodyText } from "./schemas/objects/bodyText"
import { excerpt } from "./schemas/objects/excerpt"
import { navItem } from "./schemas/objects/navItem"
import { button } from "./schemas/objects/button"
import { buttonGroup } from "./schemas/objects/buttonGroup"
import { pageSections } from "./schemas/objects/pageSections"
import { hideSection } from "./schemas/objects/hideSection"

import siteSettings from "./schemas/singletons/siteSettings"
import header from "./schemas/singletons/header"
import navigation from "./schemas/singletons/navigation"
import footer from "./schemas/singletons/footer"
import category from "./schemas/singletons/category"
import author from "./schemas/singletons/author"

import { hero } from "./schemas/sections/hero"
import { getRobots } from "./schemas/sections/getRobots"
import { sectionGlobals } from "./schemas/objects/sectionGlobals"
import { showAvailability } from "./schemas/objects/showAvailability"
import { intermission } from "./schemas/sections/intermission"
import { rarity } from "./schemas/sections/rarity"
import { rarityTextRow } from "./schemas/objects/rarityTextRow"
import { recentBlogs } from "./schemas/sections/recentBlogs"
import { faqSection } from "./schemas/sections/faqSection"
import faqList from "./schemas/documents/faqList"
import { faqItem } from "./schemas/objects/faqItem"
import { robotGrid } from "./schemas/sections/robotGrid"
import { robotGridItem } from "./schemas/objects/robotGridItem"
import { newsletter } from "./schemas/sections/newsletter"
import { socialMediaLinks } from "./schemas/objects/socialMediaLinks"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    blog,
    navigation,
    rarityList,
    faqList,

    // Objects
    customImage,
    bodyText,
    excerpt,
    hideSection,
    showAvailability,
    navItem,
    buttonGroup,
    pageSections,
    sectionGlobals,
    hero,
    getRobots,
    intermission,
    rarity,
    rarityTextRow,
    recentBlogs,
    faqSection,
    robotGrid,
    faqItem,
    robotGridItem,
    newsletter,
    socialMediaLinks,

    // Singletons
    category,
    author,
    siteSettings,
    header,
    footer,
    button,
  ],
}
