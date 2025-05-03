
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  activeTab: string;
}

export function BookingForm({ activeTab }: BookingFormProps) {
  const [tripType, setTripType] = useState("round");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [showPassengers, setShowPassengers] = useState(false);

  // Handler for the search button
  const handleSearch = () => {
    console.log("Search clicked", {
      tripType,
      departureDate,
      returnDate,
      passengers,
    });
    // Implement search functionality
  };

  return (
    <div className="mt-6">
      <Tabs value={activeTab} className="w-full">
        <TabsContent value="flights" className="mt-0">
          <div className="space-y-6">
            {/* Trip Type Selection */}
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tripType"
                  value="oneway"
                  checked={tripType === "oneway"}
                  onChange={() => setTripType("oneway")}
                  className="h-4 w-4 text-druk-600 focus:ring-druk-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">One way</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tripType"
                  value="round"
                  checked={tripType === "round"}
                  onChange={() => setTripType("round")}
                  className="h-4 w-4 text-druk-600 focus:ring-druk-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">Round trip</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tripType"
                  value="multi"
                  checked={tripType === "multi"}
                  onChange={() => setTripType("multi")}
                  className="h-4 w-4 text-druk-600 focus:ring-druk-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">Multi city</span>
              </label>
            </div>

            {/* Flight Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* From */}
              <div className="space-y-2">
                <Label htmlFor="departure">Departure</Label>
                <Input 
                  id="departure" 
                  placeholder="Airport or country" 
                  className="w-full"
                />
              </div>
              
              {/* To */}
              <div className="space-y-2">
                <Label htmlFor="arrival">Arrival</Label>
                <Input 
                  id="arrival" 
                  placeholder="Airport or country" 
                  className="w-full"
                />
              </div>
              
              {/* Departure Date */}
              <div className="space-y-2">
                <Label>Outbound</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Return Date - Only shown for round trips */}
              {tripType === "round" && (
                <div className="space-y-2">
                  <Label>Return</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                        className="pointer-events-auto"
                        disabled={(date) => 
                          departureDate ? date < departureDate : false
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}
              
              {/* Passengers */}
              <div className="space-y-2 relative">
                <Label>Passengers</Label>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-between text-left font-normal"
                  onClick={() => setShowPassengers(!showPassengers)}
                >
                  <span>
                    {passengers.adults} {passengers.adults === 1 ? 'Adult' : 'Adults'}
                    {passengers.children > 0 && `, ${passengers.children} ${passengers.children === 1 ? 'Child' : 'Children'}`}
                    {passengers.infants > 0 && `, ${passengers.infants} ${passengers.infants === 1 ? 'Infant' : 'Infants'}`}
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
                
                {showPassengers && (
                  <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Adults</span>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setPassengers({ ...passengers, adults: Math.max(1, passengers.adults - 1) })}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{passengers.adults}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setPassengers({ ...passengers, adults: passengers.adults + 1 })}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Children</span>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setPassengers({ ...passengers, children: Math.max(0, passengers.children - 1) })}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{passengers.children}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setPassengers({ ...passengers, children: passengers.children + 1 })}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Infants</span>
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setPassengers({ ...passengers, infants: Math.max(0, passengers.infants - 1) })}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{passengers.infants}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setPassengers({ ...passengers, infants: Math.min(passengers.adults, passengers.infants + 1) })}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      
                      <Button 
                        variant="default" 
                        className="w-full"
                        onClick={() => setShowPassengers(false)}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Promo Code */}
              <div className="space-y-2">
                <Label htmlFor="promo">Promotional Code</Label>
                <Input 
                  id="promo" 
                  placeholder="Enter code (if any)" 
                  className="w-full"
                />
              </div>
              
              {/* Search Button - Full width in mobile, normal in desktop */}
              <div className="col-span-1 md:col-span-2 lg:col-span-1 flex items-end">
                <Button 
                  onClick={handleSearch} 
                  className="w-full bg-saffron-600 hover:bg-saffron-700 text-white"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="checkin" className="mt-0">
          <div className="space-y-6 p-6 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-center">Online Check-In</h3>
            <p className="text-center text-muted-foreground">Check in for your flight 48 hours before departure.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
              <div className="space-y-2">
                <Label htmlFor="booking-reference">Booking Reference</Label>
                <Input id="booking-reference" placeholder="e.g., ABC123" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Enter last name" />
              </div>
            </div>
            <Button className="bg-druk-600 hover:bg-druk-700 text-white">
              Check In
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="booking" className="mt-0">
          <div className="space-y-6 p-6 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-center">Manage Your Booking</h3>
            <p className="text-center text-muted-foreground">View, change or cancel your booking.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
              <div className="space-y-2">
                <Label htmlFor="booking-ref">Booking Reference</Label>
                <Input id="booking-ref" placeholder="e.g., ABC123" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name-booking">Last Name</Label>
                <Input id="last-name-booking" placeholder="Enter last name" />
              </div>
            </div>
            <Button className="bg-druk-600 hover:bg-druk-700 text-white">
              View Booking
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
