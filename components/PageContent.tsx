import GetRobots from "./GetRobots"
import Hero from "./Hero"
import Intermission from "./Intermission"

export const PageContent = (section: any) => {
  switch (section._type) {
    case "hero":
      return (
        <Hero
          key={section._type}
          buttonUrl={section.button.url}
          buttonLabel={section.button.label}
          buttonVariant={section.button.variant}
          {...section}
        />
      )
    case "getRobots":
      return <GetRobots key={section._type} {...section} />

    case "intermission":
      return <Intermission key={section._type} {...section} />

    default:
      return (
        <div className="py-10 text-center">
          <h1>Please add Section content to page in Sanity CMS</h1>
        </div>
      )
  }
}
