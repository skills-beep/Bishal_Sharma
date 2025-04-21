
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
        <AboutSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
