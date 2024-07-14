import { CategoryProps } from "@/types/Category";
import CategoryCard from "./CategoryCard";
import { SanityDocument } from "next-sanity";

export default function Categories({
  categories,
}: {
  categories: CategoryProps[];
}) {
  return (
    <div className="mx-auto max-w-3xl py-20">
      <ul className="grid grid-cols-3 gap-8">
        {categories?.length > 0 ? (
          categories.map((category) => (
            <li key={category._id}>
              <CategoryCard {...category} />
            </li>
          ))
        ) : (
          <div className="text-red-500 p-4">No categories found</div>
        )}
      </ul>
    </div>
  );
}
