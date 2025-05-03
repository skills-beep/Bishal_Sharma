
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/airlines/BookingForm";
import { BookingTabs } from "@/components/airlines/BookingTabs";
import { HeroSection } from "@/components/airlines/HeroSection";
import { PopularDestinations } from "@/components/airlines/PopularDestinations";
import { SpecialOffers } from "@/components/airlines/SpecialOffers";

export default function DrukAirPage() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="relative -mt-20 z-20 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <BookingForm activeTab={activeTab} />
          </div>
          
          <PopularDestinations />
          <SpecialOffers />
        </div>
      </main>
      <Footer />
    </div>
  );
}
