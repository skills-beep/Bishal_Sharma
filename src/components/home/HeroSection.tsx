
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Traditional Bhutanese crafts now online
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
              Support local artisans and discover authentic Bhutanese products directly from the makers.
            </p>
          </div>
          <div className="mt-10">
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-druk-600 text-white hover:bg-druk-700">
                <Link to="/categories">Explore Categories</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-druk-600 text-druk-600 hover:bg-druk-50 dark:hover:bg-druk-900">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
            <div className="mt-6 animate-fade-in">
              <p className="inline-block text-sm font-semibold text-gray-500 dark:text-gray-400">
                Proudly showcasing Bhutanese cultural heritage
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-1/2 sm:block">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?q=80&w=1000&auto=format&fit=crop"
          alt="Bhutanese landscape and traditional architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white dark:to-gray-900"></div>
      </div>
    </div>
  );
}
