import Faq from "./Faq";
import GetRobots from "./GetRobots";
import Hero from "./Hero";
import Intermission from "./Intermission";
import Newsletter from "./Newsletter";
import Rarity from "./Rarity";
import RecentBlogs from "./RecentBlogs";
import RobotGrid from "./RobotGrid";

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
      );
    case "getRobots":
      return (
        <GetRobots
          key={section._type}
          buttonUrl={section.button.url}
          buttonLabel={section.button.label}
          buttonVariant={section.button.variant}
          {...section}
        />
      );

    case "intermission":
      return <Intermission key={section._type} {...section} />;

    case "rarity":
      return <Rarity key={section._type} {...section} />;

    case "recentBlogs":
      return <RecentBlogs key={section._type} {...section} />;

    case "faqSection":
      return (
        <Faq
          key={section._type}
          items={section.questions[0].items}
          {...section}
        />
      );

    case "robotGrid":
      return <RobotGrid key={section._type} {...section} />;

    case "newsletter":
      return <Newsletter key={section._type} {...section} />;

    default:
      return (
        <div className="py-10 text-center">
          <h1>Please add Section content to page in Sanity CMS</h1>
        </div>
      );
  }
};
