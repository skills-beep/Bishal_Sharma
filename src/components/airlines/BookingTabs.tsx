
import { Plane, Monitor, Ticket } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function BookingTabs({ activeTab, setActiveTab }: BookingTabsProps) {
  const tabs = [
    { id: "flights", label: "Flights", icon: Plane },
    { id: "checkin", label: "Online Check-In", icon: Monitor },
    { id: "booking", label: "Your Booking", icon: Ticket },
  ];

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="-mb-px flex gap-2" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "group inline-flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2",
              activeTab === tab.id
                ? "border-druk-600 text-druk-600 dark:border-druk-500 dark:text-druk-500"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200"
            )}
            aria-current={activeTab === tab.id ? "page" : undefined}
          >
            <tab.icon className="h-5 w-5" />
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
