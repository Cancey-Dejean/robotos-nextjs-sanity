import React, { ReactNode } from "react"
import Paragraph from "./Paragraph"
import SectionTitle from "./SectionTitle"

const SectionHeader = ({
  topTitle,
  title = <SectionTitle tag="h1">Section Title</SectionTitle>,
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}: {
  topTitle?: string
  title?: ReactNode
  desc?: string
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      {topTitle === "" ? (
        <Paragraph className="mb-4 font-semibold">{topTitle}</Paragraph>
      ) : null}

      <div className="flex flex-col gap-6">
        {title}

        {desc === "" ? null : desc}
      </div>
    </div>
  )
}

export default SectionHeader
