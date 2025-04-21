
import { Link } from "react-router-dom";
import { Category } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/categories/${category.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="aspect-square overflow-hidden">
          <img 
            src={category.image || "/placeholder.svg"} 
            alt={category.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-medium">{category.name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}
