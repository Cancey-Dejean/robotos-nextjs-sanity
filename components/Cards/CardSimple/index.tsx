import Image from "next/image";
import Card from "../Card";

export default function CardSimple({
  image,
  text = "Title",
}: {
  image: string;
  text: string;
}) {
  return (
    <Card className="p-4 md:p-4">
      <Image
        width={494}
        height={494}
        src={image}
        alt="Card"
        className="rounded-[20px]"
      />

      <h3 className="mt-4 text-center uppercase">{text}</h3>
    </Card>
  );
}
