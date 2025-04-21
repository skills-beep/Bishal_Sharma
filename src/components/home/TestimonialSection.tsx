
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    content: "DrukBazaar has allowed me to sell my handwoven textiles to people I would never have been able to reach before. My business has grown significantly!",
    author: "Tshering Yangzom",
    role: "Textile Artist, Thimphu"
  },
  {
    id: 2,
    content: "As a student in Australia, I love that I can still buy authentic Bhutanese products through DrukBazaar. It helps me stay connected to my culture.",
    author: "Kinley Dorji",
    role: "Customer, Melbourne"
  },
  {
    id: 3,
    content: "The platform is easy to use and has helped our family business reach customers across Bhutan. The support team is always helpful.",
    author: "Pema Wangchuk",
    role: "Handicraft Seller, Paro"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-10">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="dark:bg-gray-800 border-0 shadow">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <svg className="h-8 w-8 text-gray-400 dark:text-gray-500 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {testimonial.content}
                    </p>
                  </div>
                  <footer>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </footer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
