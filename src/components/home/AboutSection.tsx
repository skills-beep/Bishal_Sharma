
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              About DrukBazaar
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              DrukBazaar is Bhutan's first online marketplace dedicated to connecting local artisans, 
              craftspeople, and small businesses with customers both within Bhutan and around the world.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our mission is to preserve and promote Bhutanese cultural heritage while providing sustainable 
              economic opportunities for local communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/register">Become a Seller</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/categories">Start Shopping</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1610809027249-86c649feacd5?q=80&w=1000&auto=format&fit=crop" 
              alt="Traditional Bhutanese crafts" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg">
              <p className="text-lg font-bold text-druk-600 dark:text-druk-400">
                Support Local Artisans
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Every purchase directly supports the creator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
