import { groq } from "next-sanity"
import { HERO_FIELDS } from "./heroFields"
import { GET_ROBOTS_FIELDS } from "./getRobotFields"

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
`
