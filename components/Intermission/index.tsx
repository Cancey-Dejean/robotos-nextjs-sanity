import Image from "next/image";
import { rowImages } from "@/constants";

export default function Intermission() {
  return (
    <section className="bg-gray-900">
      <div className="flex flex-col md:-space-y-[160px]">
        {rowImages.map(({ src, alt }, index) => (
          <div
            className="relative -mt-[40px] h-[100px] w-full sm:h-[250px] md:h-[550px] first:md:-mt-[100px]"
            key={index}
          >
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
