
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  validUntil: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Early Bird Special",
    description: "Book 60 days in advance and get 20% off on all international flights",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
    validUntil: "Valid until June 30, 2025",
  },
  {
    id: 2,
    title: "Family Package",
    description: "Travel with family and get special discounts and extra baggage allowance",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop",
    validUntil: "Valid until December 31, 2025",
  },
  {
    id: 3,
    title: "Cultural Tour Bundle",
    description: "Flight + Hotel + Tour guide package for exploring Bhutan's cultural heritage",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1000&auto=format&fit=crop",
    validUntil: "Limited time offer",
  },
];

export function SpecialOffers() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Special Offers</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Take advantage of our limited-time promotions and deals
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
            <div className="aspect-video relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white">{offer.title}</h3>
                <p className="text-sm text-white/80">{offer.validUntil}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-600 dark:text-gray-300">{offer.description}</p>
              <Button className="mt-4 w-full bg-saffron-600 hover:bg-saffron-700 text-white">
                View Offer Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
