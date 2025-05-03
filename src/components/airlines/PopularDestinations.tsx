
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Destination {
  id: number;
  name: string;
  image: string;
  price: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Paro, Bhutan",
    image: "https://images.unsplash.com/photo-1586867179680-fb3e1430ac54?q=80&w=1000&auto=format&fit=crop",
    price: "from $299",
  },
  {
    id: 2,
    name: "Thimphu, Bhutan",
    image: "https://images.unsplash.com/photo-1595813592283-ebbc1e0c824e?q=80&w=1000&auto=format&fit=crop",
    price: "from $249",
  },
  {
    id: 3,
    name: "Punakha, Bhutan",
    image: "https://images.unsplash.com/photo-1582561036693-5819damhamva?q=80&w=1000&auto=format&fit=crop",
    price: "from $289",
  },
  {
    id: 4,
    name: "Bumthang, Bhutan",
    image: "https://images.unsplash.com/photo-1608977224944-133df4970645?q=80&w=1000&auto=format&fit=crop",
    price: "from $329",
  },
];

export function PopularDestinations() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Popular Destinations</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover the most visited destinations across Bhutan
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-[4/3] relative">
              <img
                src={destination.image}
                alt={destination.name}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-lg">{destination.name}</h3>
                  <p className="text-sm text-druk-600 font-medium">{destination.price}</p>
                </div>
                <Button size="sm" variant="outline" className="text-druk-600 border-druk-600 hover:bg-druk-50 dark:hover:bg-druk-900">
                  Book
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="link" className="text-druk-600">
          View all destinations
        </Button>
      </div>
    </section>
  );
}
