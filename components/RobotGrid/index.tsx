import Card from "../Cards/Card";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import CardSimple from "../Cards/CardSimple";
import { PortableText, PortableTextBlock } from "next-sanity";
import { RobotItem } from "@/types/RobotItem";

export default function RobotGrid({
  heading,
  text,
  bgImg,
  items,
}: {
  heading: string;
  bgImg?: string;
  text: PortableTextBlock;
  items: RobotItem[];
}) {
  return (
    <section
      className="bg-yellow-200 bg-fixed px-5 py-20 md:py-32"
      style={{
        backgroundImage: `url('${bgImg || "https://dummyimage.com/1920x1080.png/dddddd/ffffff"}')`,
      }}
    >
      <Container>
        <Card className="md:p-14">
          <div className="mb-8 flex flex-col items-center justify-center">
            {heading && (
              <SectionTitle as="h1" className="mb-4">
                {heading}
              </SectionTitle>
            )}

            {text && (
              <div className="prose max-w-full text-center">
                <PortableText value={text} />
              </div>
            )}
          </div>

          {items && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {items.map(({ mainImage, mainImageAlt, title }) => (
                <CardSimple
                  key={title}
                  mainImage={mainImage}
                  mainImageAlt={mainImageAlt}
                  title={title}
                />
              ))}
            </div>
          )}
        </Card>
      </Container>
    </section>
  );
}
