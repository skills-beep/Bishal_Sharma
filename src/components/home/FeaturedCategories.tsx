
import { useNavigate } from "react-router-dom";
import { categories } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturedCategories() {
  const navigate = useNavigate();
  
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-10">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700"
              onClick={() => navigate(`/categories/${category.id}`)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-3 md:p-4">
                <h3 className="font-medium text-sm md:text-base text-center text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
