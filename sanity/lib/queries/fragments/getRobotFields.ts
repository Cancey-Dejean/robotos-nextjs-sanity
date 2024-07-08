import { groq } from "next-sanity"

export const GET_ROBOT_FIELDS = groq`
  _type == "getRobot" => {
    ...
  },
`
