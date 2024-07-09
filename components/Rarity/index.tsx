import React from "react";
import Image from "next/image";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import Card from "../Cards/Card";
import { columns } from "@/constants";
import { PortableText, PortableTextBlock } from "next-sanity"

type ColumnItem = {
  boldText: string;
  title?: string;
};

export type ColumnImageProps = {
  title?: string;
  mainImage?: string | null;
  mainImageAlt?: string;
  items?: ColumnItem[];
};


export default function Rarity({heading, text,rarityList}: {heading: string, text: PortableTextBlock, rarityList: ColumnImageProps[]}) {
  return (
    <section
      className="border-[16px] border-gray-900 bg-blue-300 bg-cover bg-fixed bg-center py-0 [background-image:none] md:py-32 md:[background-image:url('/images/diagrams.png')]"
      id="rarity"
    >
      <Container>
        <Card className="mx-auto flex max-w-[740px] flex-col items-start gap-5 max-sm:rounded-none">
          <div className="flex flex-col gap-2">
            <SectionTitle>{heading}</SectionTitle>

            <PortableText value={text}  />
          </div>

          <div className="flex w-full flex-col-reverse items-stretch gap-6 md:flex-row-reverse">
            {rarityList.map(({ title, mainImage, mainImageAlt, items }: ColumnImageProps) => (
              <ColumnImage
                key={`column-${title}`}
                title={title}
                items={items}
                mainImage={mainImage}
                mainImageAlt={mainImageAlt}
              />
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}

const ColumnImage = ({ title, mainImage, mainImageAlt, items }: ColumnImageProps) => {
  return (
    <div className="flex-1">
      <p className="mb-3 font-heading">{title}</p>

      <div className="flex h-full flex-col gap-2">
        {items?.map(({ boldText, title }, index) => (
          <div
            key={`item-${index}`}
            className="grid grid-cols-2 items-start rounded p-2 odd:bg-blue-50"
          >
            <p className="font-bold">{boldText}</p>
            <p>{title}</p>
          </div>
        ))}

        <div className="hidden h-full items-center justify-center md:flex">
          {mainImage && (
            <div className="relative h-[270px] w-[318px]">
              <Image
                src={mainImage || "No Image Provided"}
                alt={mainImageAlt || "No Alt Provided"}
                fill
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};