import { groq } from "next-sanity"
import { HERO_FIELDS } from "./heroFields"
import { GET_ROBOTS_FIELDS } from "./getRobotFields"
import { RARITY_LIST_FIELDS } from "./rarityListFields"

export const ALL_SECTIONS_QUERY = groq`
  _type == "hero" => {
    ${HERO_FIELDS}
  },

  _type == "getRobots" => {
    ${GET_ROBOTS_FIELDS}
  },

  _type == "intermission" => {
    ...
  },

  _type == "rarity" => {
    heading,
    text,
    "rarityList": *[_type == "rarityList"] {
        ${RARITY_LIST_FIELDS}
    }
  },
`
