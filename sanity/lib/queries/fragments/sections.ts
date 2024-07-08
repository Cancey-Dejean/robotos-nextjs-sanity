import { groq } from "next-sanity"
import { HERO_FIELDS } from "./heroFields"
import { GET_ROBOT_FIELDS } from "./getRobotFields"

export const ALL_SECTIONS_QUERY = groq`
  ${HERO_FIELDS},
  ${GET_ROBOT_FIELDS},
`
