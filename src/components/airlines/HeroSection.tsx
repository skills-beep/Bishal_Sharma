
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?q=80&w=1000&auto=format&fit=crop"
          alt="Bhutan Landscape with Mountains and Traditional Architecture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-druk-900/60 to-druk-900/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block text-saffron-400">Fly with us</span>
            <span className="block">to the land of happiness</span>
          </h1>
          <p className="mt-6 text-xl text-gray-100">
            Experience the magic of Bhutan with our comfortable flights and exceptional service.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg" className="bg-saffron-600 hover:bg-saffron-700 text-white">
              <Link to="/book">Book Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/destinations">View Destinations</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
