import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Train, Plane, Car, Clock, DollarSign, MapPin, ExternalLink, Users, Star } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface CityConnectionsProps {
  city: CityWithDetails;
}

export default function CityConnections({ city }: CityConnectionsProps) {
  // Comprehensive Goa transportation connections with booking links
  const trainConnections = [
    { 
      city: "Mumbai", 
      duration: "12h", 
      price: "₹450-2,200", 
      frequency: "Daily", 
      type: "Konkan Railway Express",
      bookingUrl: "https://www.irctc.co.in/nget/train-search"
    },
    { 
      city: "Delhi", 
      duration: "26h", 
      price: "₹800-3,500", 
      frequency: "Daily", 
      type: "Rajdhani Express",
      bookingUrl: "https://www.irctc.co.in/nget/train-search"
    },
    { 
      city: "Bangalore", 
      duration: "15h", 
      price: "₹600-2,800", 
      frequency: "Daily", 
      type: "Goa Express",
      bookingUrl: "https://www.irctc.co.in/nget/train-search"
    },
    { 
      city: "Chennai", 
      duration: "14h", 
      price: "₹700-3,000", 
      frequency: "3x/week", 
      type: "Express",
      bookingUrl: "https://www.irctc.co.in/nget/train-search"
    },
    { 
      city: "Pune", 
      duration: "12h", 
      price: "₹400-1,800", 
      frequency: "Daily", 
      type: "Mandovi Express",
      bookingUrl: "https://www.irctc.co.in/nget/train-search"
    }
  ];

  const flightConnections = [
    { 
      city: "Mumbai", 
      duration: "1h 30m", 
      price: "₹3,500-12,000", 
      frequency: "20+ daily", 
      airlines: "IndiGo, Air India, Vistara",
      bookingUrl: "https://www.makemytrip.com/flight/search?itinerary=GOI-BOM"
    },
    { 
      city: "Delhi", 
      duration: "2h 15m", 
      price: "₹4,200-15,000", 
      frequency: "25+ daily", 
      airlines: "IndiGo, SpiceJet, Vistara",
      bookingUrl: "https://www.makemytrip.com/flight/search?itinerary=GOI-DEL"
    },
    { 
      city: "Bangalore", 
      duration: "1h 45m", 
      price: "₹3,800-13,500", 
      frequency: "18+ daily", 
      airlines: "IndiGo, Air India, Akasa",
      bookingUrl: "https://www.makemytrip.com/flight/search?itinerary=GOI-BLR"
    },
    { 
      city: "Chennai", 
      duration: "2h", 
      price: "₹4,000-14,000", 
      frequency: "15+ daily", 
      airlines: "IndiGo, Air India, Vistara",
      bookingUrl: "https://www.makemytrip.com/flight/search?itinerary=GOI-MAA"
    },
    { 
      city: "Kolkata", 
      duration: "2h 30m", 
      price: "₹4,500-16,000", 
      frequency: "12+ daily", 
      airlines: "IndiGo, SpiceJet, Air India",
      bookingUrl: "https://www.makemytrip.com/flight/search?itinerary=GOI-CCU"
    },
    { 
      city: "Hyderabad", 
      duration: "1h 40m", 
      price: "₹3,600-12,500", 
      frequency: "14+ daily", 
      airlines: "IndiGo, Air India, Vistara",
      bookingUrl: "https://www.makemytrip.com/flight/search?itinerary=GOI-HYD"
    }
  ];

  const busConnections = [
    { 
      city: "Mumbai", 
      duration: "14h 30m", 
      price: "₹800-2,500", 
      frequency: "15+ daily", 
      type: "Volvo AC Sleeper",
      operator: "Paulo Travels, Neeta",
      bookingUrl: "https://www.redbus.in/bus-tickets/goa-to-mumbai"
    },
    { 
      city: "Pune", 
      duration: "10h 15m", 
      price: "₹600-1,800", 
      frequency: "20+ daily", 
      type: "AC Semi-Sleeper",
      operator: "Paulo Travels, Orange",
      bookingUrl: "https://www.redbus.in/bus-tickets/goa-to-pune"
    },
    { 
      city: "Bangalore", 
      duration: "13h 45m", 
      price: "₹900-2,800", 
      frequency: "12+ daily", 
      type: "Volvo Multi-Axle",
      operator: "VRL, SRS Travels",
      bookingUrl: "https://www.redbus.in/bus-tickets/goa-to-bangalore"
    },
    { 
      city: "Hyderabad", 
      duration: "11h 20m", 
      price: "₹700-2,200", 
      frequency: "10+ daily", 
      type: "AC Sleeper",
      operator: "Orange Travels, VRL",
      bookingUrl: "https://www.redbus.in/bus-tickets/goa-to-hyderabad"
    }
  ];

  const internationalFlights = [
    { city: "Dubai", duration: "3h 15m", price: "₹15000-45000", frequency: "2-3 daily", airlines: "Emirates, IndiGo, Air India" },
    { city: "Singapore", duration: "5h 30m", price: "₹20000-60000", frequency: "1-2 daily", airlines: "Singapore Airlines, Air India" },
    { city: "Bangkok", duration: "4h 45m", price: "₹18000-55000", frequency: "1 daily", airlines: "Thai Airways, Air India" },
    { city: "Doha", duration: "4h 00m", price: "₹16000-50000", frequency: "1 daily", airlines: "Qatar Airways" },
    { city: "London", duration: "9h 30m", price: "₹35000-120000", frequency: "Direct/1-stop", airlines: "Air India, British Airways" },
    { city: "Frankfurt", duration: "8h 45m", price: "₹32000-110000", frequency: "3-4 weekly", airlines: "Lufthansa, Air India" }
  ];

  const nearbyWeekendSpots = [
    { name: "Lonavala", distance: "64 km", duration: "1.5h drive", attraction: "Hill station, caves", bestTime: "Monsoon" },
    { name: "Mahabaleshwar", distance: "120 km", duration: "2.5h drive", attraction: "Hill station, strawberries", bestTime: "Winter" },
    { name: "Alibaug", distance: "95 km", duration: "2h + ferry", attraction: "Beaches, forts", bestTime: "Winter/Summer" },
    { name: "Matheran", distance: "80 km", duration: "2h + toy train", attraction: "Car-free hill station", bestTime: "Winter" },
    { name: "Ajanta & Ellora", distance: "230 km", duration: "4h drive", attraction: "UNESCO cave temples", bestTime: "Winter" },
    { name: "Shirdi", distance: "185 km", duration: "3h drive", attraction: "Religious site", bestTime: "Year-round" }
  ];

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Train className="mr-3 h-8 w-8 text-vintage-gold" />
          City Connections & Travel Routes
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Comprehensive guide to traveling from {city.name} to other major Indian cities and international destinations.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Train Connections */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Train className="mr-2 h-5 w-5" />
            🚅 Train Connections
          </h3>
          <div className="grid gap-3">
            {trainConnections.map((route, index) => (
              <div key={index} className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sage-green/20 rounded-full flex items-center justify-center">
                      <Train className="h-5 w-5 text-sage-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-travel-blue">{route.city}</h4>
                      <p className="text-sm text-muted-navy">{route.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-vintage-gold">{route.price}</div>
                    <div className="text-sm text-muted-navy">{route.frequency}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-navy">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {route.duration}
                  </div>
                  <a href={route.bookingUrl} target="_blank" rel="noopener noreferrer">
                    <Badge className="bg-sage-green/10 text-sage-green hover:bg-sage-green/20 cursor-pointer">
                      Book Now
                    </Badge>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <a href="https://www.irctc.co.in/nget/train-search" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center p-3 bg-travel-blue/5 rounded-lg border border-travel-blue/20 text-travel-blue hover:bg-travel-blue/10 transition-colors">
              <ExternalLink className="h-4 w-4 mr-2" />
              IRCTC Official
            </a>
            <a href="https://www.makemytrip.com/railways/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center p-3 bg-vintage-gold/5 rounded-lg border border-vintage-gold/20 text-vintage-gold hover:bg-vintage-gold/10 transition-colors">
              <ExternalLink className="h-4 w-4 mr-2" />
              MakeMyTrip
            </a>
            <a href="https://www.ixigo.com/trains" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center p-3 bg-sage-green/5 rounded-lg border border-sage-green/20 text-sage-green hover:bg-sage-green/10 transition-colors">
              <ExternalLink className="h-4 w-4 mr-2" />
              Ixigo Trains
            </a>
          </div>
          <div className="mt-4 bg-vintage-gold/5 rounded-lg p-3 border-l-4 border-vintage-gold">
            <p className="text-sm text-muted-navy">
              <strong>Pro tip:</strong> Book train tickets 120 days in advance for best prices. Use Tatkal booking for last-minute travel (₹200-500 extra).
            </p>
          </div>
        </div>

        {/* Flight Connections */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Plane className="mr-2 h-5 w-5" />
            ✈️ Domestic Flights
          </h3>
          <div className="grid gap-3">
            {flightConnections.map((route, index) => (
              <div key={index} className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-travel-blue/20 rounded-full flex items-center justify-center">
                      <Plane className="h-5 w-5 text-travel-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-travel-blue">{route.city}</h4>
                      <p className="text-sm text-muted-navy">{route.airlines}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-vintage-gold">{route.price}</div>
                    <div className="text-sm text-muted-navy">{route.frequency}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-navy">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {route.duration}
                  </div>
                  <Badge className="bg-travel-blue/10 text-travel-blue">Check MakeMyTrip</Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-vintage-gold/5 rounded-lg p-3 border-l-4 border-vintage-gold">
            <p className="text-sm text-muted-navy">
              <strong>Pro tip:</strong> Book flights 6-8 weeks in advance for best domestic prices. Tuesday/Wednesday flights are typically 15-25% cheaper.
            </p>
          </div>
        </div>

        {/* Bus Connections */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Car className="mr-2 h-5 w-5" />
            🚌 Bus Routes
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {busConnections.map((route, index) => (
              <div key={index} className="bg-warm-terracotta/5 rounded-lg p-4 border border-warm-terracotta/20">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-travel-blue">{route.city}</h4>
                    <p className="text-sm text-muted-navy">{route.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-vintage-gold">{route.price}</div>
                    <div className="text-sm text-muted-navy">{route.frequency}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-navy">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {route.duration}
                  </div>
                  <Badge className="bg-warm-terracotta/10 text-warm-terracotta">RedBus/AbhiBus</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Flights */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Plane className="mr-2 h-5 w-5" />
            🌍 International Connections
          </h3>
          <div className="grid gap-3">
            {internationalFlights.map((route, index) => (
              <div key={index} className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                      <Plane className="h-5 w-5 text-vintage-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-travel-blue">{route.city}</h4>
                      <p className="text-sm text-muted-navy">{route.airlines}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-vintage-gold">{route.price}</div>
                    <div className="text-sm text-muted-navy">{route.frequency}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-navy">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {route.duration}
                  </div>
                  <Badge className="bg-vintage-gold/10 text-vintage-gold">International</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekend Getaways */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            🏞️ Weekend Getaways
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {nearbyWeekendSpots.map((spot, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-travel-blue">{spot.name}</h4>
                  <Badge className="bg-sage-green/10 text-sage-green">{spot.bestTime}</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-navy">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {spot.distance} • {spot.duration}
                  </div>
                  <p><strong>Attraction:</strong> {spot.attraction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation Tips */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4">💡 Smart Travel Tips</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Best Booking Times</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Trains: 120 days advance</li>
                <li>• Flights: 6-8 weeks ahead</li>
                <li>• Buses: 1-2 weeks prior</li>
                <li>• Avoid festival seasons</li>
              </ul>
            </div>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">Budget Options</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Tuesday/Wednesday flights</li>
                <li>• Sleeper class trains</li>
                <li>• State transport buses</li>
                <li>• Off-season travel</li>
              </ul>
            </div>
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">Comfort Options</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Premium economy flights</li>
                <li>• AC 2-tier train berths</li>
                <li>• Volvo AC buses</li>
                <li>• Private cab services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Apps & Booking Platforms */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2">📱 Essential Booking Apps</h4>
          <div className="grid md:grid-cols-4 gap-4 text-sm text-muted-navy">
            <div>
              <strong>Trains:</strong> IRCTC Connect, ConfirmTkt, RailYatri
            </div>
            <div>
              <strong>Flights:</strong> MakeMyTrip, Cleartrip, Goibibo, Skyscanner
            </div>
            <div>
              <strong>Buses:</strong> RedBus, AbhiBus, Paytm Bus
            </div>
            <div>
              <strong>Cabs:</strong> Ola, Uber, Savaari, BlaBlaCar
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}