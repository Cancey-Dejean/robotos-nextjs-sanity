import { CategoryProps } from "@/types/Category"
import CategoryCard from "./CategoryCard"
import { SanityDocument } from "next-sanity"

export default function Categories({
  categories,
}: {
  categories: CategoryProps[]
}) {
  return (
    <div className="max-w-3xl mx-auto py-20">
      <ul className="grid grid-cols-3 gap-8">
        {categories?.length > 0 ? (
          categories.map((category) => (
            <li key={category._id}>
              <CategoryCard {...category} />
            </li>
          ))
        ) : (
          <div className="p-4 text-red-500">No categories found</div>
        )}
      </ul>
    </div>
  )
}
