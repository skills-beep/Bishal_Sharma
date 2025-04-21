
import { Link } from "react-router-dom";
import { products } from "@/data/mockData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  // Get 4 random products for featured section
  const featuredProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <Button asChild variant="outline">
            <Link to="/products">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-md transition-shadow duration-300 dark:bg-gray-800"
            >
              <Link to={`/products/${product.id}`} className="block h-48 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <CardContent className="p-4">
                <Link 
                  to={`/products/${product.id}`} 
                  className="text-lg font-medium text-gray-900 dark:text-white hover:text-druk-600 dark:hover:text-druk-400 transition-colors"
                >
                  {product.title}
                </Link>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {product.description}
                </p>
                <p className="mt-2 text-lg font-semibold text-druk-600 dark:text-druk-400">
                  Nu. {product.price.toLocaleString()}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  By {product.seller.name}
                </span>
                <Button asChild size="sm">
                  <Link to={`/products/${product.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
