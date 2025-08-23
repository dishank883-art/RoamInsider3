import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Train, Plane, Car, Clock, DollarSign, MapPin, ExternalLink, Users, Star } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface CityConnectionsProps {
  city: CityWithDetails;
}

export default function CityConnections({ city }: CityConnectionsProps) {
  // City-specific connectivity data
  const getCitySpecificConnections = (cityName: string) => {
    const connectionsByCity: { [key: string]: any } = {
      "Goa": {
        trainConnections: [
          { city: "Mumbai", duration: "12h", price: "₹450-2,200", frequency: "Daily", type: "Konkan Railway Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Delhi", duration: "28h", price: "₹800-3,500", frequency: "Daily", type: "Rajdhani Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Bangalore", duration: "11h", price: "₹600-2,800", frequency: "Daily", type: "Goa Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Pune", duration: "12h", price: "₹400-1,800", frequency: "Daily", type: "Mandovi Express", bookingUrl: "https://www.irctc.co.in/" }
        ],
        flightConnections: [
          { city: "Mumbai", duration: "1h 30m", price: "₹3,500-12,000", frequency: "20+ daily", airlines: "IndiGo, Air India, Vistara", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Delhi", duration: "2h 15m", price: "₹4,200-15,000", frequency: "25+ daily", airlines: "IndiGo, SpiceJet, Vistara", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Bangalore", duration: "1h 45m", price: "₹3,800-13,500", frequency: "18+ daily", airlines: "IndiGo, Air India, Akasa", bookingUrl: "https://www.makemytrip.com/" }
        ],
        busConnections: [
          { city: "Mumbai", duration: "14h 30m", price: "₹800-2,500", frequency: "15+ daily", type: "Volvo AC Sleeper", operator: "Paulo Travels, Neeta", bookingUrl: "https://www.redbus.in/" },
          { city: "Pune", duration: "10h 15m", price: "₹600-1,800", frequency: "20+ daily", type: "AC Semi-Sleeper", operator: "Paulo Travels, Orange", bookingUrl: "https://www.redbus.in/" },
          { city: "Bangalore", duration: "13h 45m", price: "₹900-2,800", frequency: "12+ daily", type: "Volvo Multi-Axle", operator: "VRL, SRS Travels", bookingUrl: "https://www.redbus.in/" }
        ]
      },
      "Mumbai": {
        trainConnections: [
          { city: "Delhi", duration: "16h", price: "₹500-3,000", frequency: "Multiple daily", type: "Rajdhani Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Bangalore", duration: "21h", price: "₹600-2,800", frequency: "Daily", type: "Udyan Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Chennai", duration: "23h", price: "₹700-3,200", frequency: "Daily", type: "Chennai Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Kolkata", duration: "27h", price: "₹800-3,800", frequency: "Daily", type: "Howrah Express", bookingUrl: "https://www.irctc.co.in/" }
        ],
        flightConnections: [
          { city: "Delhi", duration: "2h 15m", price: "₹4,000-15,000", frequency: "30+ daily", airlines: "All major airlines", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Bangalore", duration: "1h 55m", price: "₹3,500-12,000", frequency: "25+ daily", airlines: "IndiGo, Air India, Vistara", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Chennai", duration: "2h", price: "₹4,200-14,000", frequency: "20+ daily", airlines: "IndiGo, Air India, SpiceJet", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Kolkata", duration: "2h 30m", price: "₹4,500-16,000", frequency: "15+ daily", airlines: "IndiGo, Air India, Vistara", bookingUrl: "https://www.makemytrip.com/" }
        ],
        busConnections: [
          { city: "Pune", duration: "3h 30m", price: "₹300-800", frequency: "30+ daily", type: "AC Semi-Sleeper", operator: "Shivneri, Orange", bookingUrl: "https://www.redbus.in/" },
          { city: "Goa", duration: "14h", price: "₹800-2,500", frequency: "15+ daily", type: "Volvo AC Sleeper", operator: "Paulo Travels", bookingUrl: "https://www.redbus.in/" },
          { city: "Nashik", duration: "4h", price: "₹400-1,000", frequency: "20+ daily", type: "AC Bus", operator: "MSRTC, Private", bookingUrl: "https://www.redbus.in/" }
        ]
      },
      "Bangalore": {
        trainConnections: [
          { city: "Chennai", duration: "5h", price: "₹200-1,200", frequency: "Multiple daily", type: "Shatabdi Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Mumbai", duration: "21h", price: "₹600-2,800", frequency: "Daily", type: "Udyan Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Delhi", duration: "31h", price: "₹800-4,000", frequency: "Daily", type: "Rajdhani Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Hyderabad", duration: "12h", price: "₹400-2,000", frequency: "Daily", type: "Intercity Express", bookingUrl: "https://www.irctc.co.in/" }
        ],
        flightConnections: [
          { city: "Mumbai", duration: "1h 55m", price: "₹3,500-12,000", frequency: "25+ daily", airlines: "IndiGo, Air India, Vistara", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Delhi", duration: "2h 45m", price: "₹4,500-16,000", frequency: "30+ daily", airlines: "All major airlines", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Chennai", duration: "1h 15m", price: "₹3,000-10,000", frequency: "20+ daily", airlines: "IndiGo, Air India, SpiceJet", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Hyderabad", duration: "1h 30m", price: "₹3,200-11,000", frequency: "15+ daily", airlines: "IndiGo, Air India, Vistara", bookingUrl: "https://www.makemytrip.com/" }
        ],
        busConnections: [
          { city: "Chennai", duration: "6h", price: "₹500-1,200", frequency: "25+ daily", type: "Volvo AC", operator: "KPN, SRS Travels", bookingUrl: "https://www.redbus.in/" },
          { city: "Hyderabad", duration: "9h", price: "₹600-1,500", frequency: "20+ daily", type: "AC Sleeper", operator: "Orange, VRL", bookingUrl: "https://www.redbus.in/" },
          { city: "Mysore", duration: "3h", price: "₹200-500", frequency: "30+ daily", type: "AC Bus", operator: "KSRTC, Private", bookingUrl: "https://www.redbus.in/" }
        ]
      },
      "New Delhi": {
        trainConnections: [
          { city: "Mumbai", duration: "16h", price: "₹500-3,000", frequency: "Multiple daily", type: "Rajdhani Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Kolkata", duration: "17h", price: "₹600-3,200", frequency: "Multiple daily", type: "Rajdhani Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Chennai", duration: "28h", price: "₹800-3,800", frequency: "Daily", type: "Grand Trunk Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Bangalore", duration: "31h", price: "₹800-4,000", frequency: "Daily", type: "Karnataka Express", bookingUrl: "https://www.irctc.co.in/" }
        ],
        flightConnections: [
          { city: "Mumbai", duration: "2h 15m", price: "₹4,000-15,000", frequency: "30+ daily", airlines: "All major airlines", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Bangalore", duration: "2h 45m", price: "₹4,500-16,000", frequency: "25+ daily", airlines: "IndiGo, Air India, Vistara", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Chennai", duration: "2h 30m", price: "₹4,200-14,000", frequency: "20+ daily", airlines: "IndiGo, Air India, SpiceJet", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Kolkata", duration: "2h", price: "₹3,800-13,000", frequency: "18+ daily", airlines: "IndiGo, Air India, Vistara", bookingUrl: "https://www.makemytrip.com/" }
        ],
        busConnections: [
          { city: "Jaipur", duration: "5h", price: "₹400-1,000", frequency: "25+ daily", type: "AC Bus", operator: "RSRTC, Private", bookingUrl: "https://www.redbus.in/" },
          { city: "Agra", duration: "4h", price: "₹300-700", frequency: "20+ daily", type: "AC Bus", operator: "UP Roadways", bookingUrl: "https://www.redbus.in/" },
          { city: "Chandigarh", duration: "5h", price: "₹500-1,200", frequency: "15+ daily", type: "Volvo AC", operator: "Pepsu, Private", bookingUrl: "https://www.redbus.in/" }
        ]
      },
      "Alleppey": {
        trainConnections: [
          { city: "Kochi", duration: "1h 30m", price: "₹30-150", frequency: "Multiple daily", type: "Passenger trains", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Trivandrum", duration: "3h", price: "₹80-400", frequency: "Multiple daily", type: "Express trains", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Chennai", duration: "12h", price: "₹300-1,500", frequency: "Daily", type: "Mail Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Bangalore", duration: "14h", price: "₹400-1,800", frequency: "Daily", type: "Express trains", bookingUrl: "https://www.irctc.co.in/" }
        ],
        flightConnections: [
          { city: "Mumbai", duration: "1h 45m", price: "₹4,000-12,000", frequency: "8+ daily", airlines: "IndiGo, Air India", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Delhi", duration: "3h", price: "₹5,000-15,000", frequency: "6+ daily", airlines: "IndiGo, Air India", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Bangalore", duration: "1h 30m", price: "₹3,500-10,000", frequency: "5+ daily", airlines: "IndiGo, Air India", bookingUrl: "https://www.makemytrip.com/" }
        ],
        busConnections: [
          { city: "Kochi", duration: "1h 30m", price: "₹50-150", frequency: "30+ daily", type: "AC Bus", operator: "KSRTC", bookingUrl: "https://www.redbus.in/" },
          { city: "Trivandrum", duration: "3h 30m", price: "₹150-400", frequency: "20+ daily", type: "AC Bus", operator: "KSRTC", bookingUrl: "https://www.redbus.in/" },
          { city: "Munnar", duration: "4h", price: "₹200-500", frequency: "10+ daily", type: "Tourist Bus", operator: "Private operators", bookingUrl: "https://www.redbus.in/" }
        ]
      },
      "Varkala": {
        trainConnections: [
          { city: "Trivandrum", duration: "1h", price: "₹25-120", frequency: "Multiple daily", type: "Passenger/Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Kochi", duration: "2h 30m", price: "₹60-300", frequency: "Multiple daily", type: "Express trains", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Chennai", duration: "13h", price: "₹300-1,500", frequency: "Daily", type: "Mail Express", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Bangalore", duration: "15h", price: "₹400-1,800", frequency: "Daily", type: "Express trains", bookingUrl: "https://www.irctc.co.in/" }
        ],
        flightConnections: [
          { city: "Mumbai", duration: "1h 50m", price: "₹4,200-13,000", frequency: "6+ daily", airlines: "IndiGo, Air India", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Delhi", duration: "3h 15m", price: "₹5,200-16,000", frequency: "4+ daily", airlines: "IndiGo, Air India", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Bangalore", duration: "1h 35m", price: "₹3,800-11,000", frequency: "3+ daily", airlines: "IndiGo, Air India", bookingUrl: "https://www.makemytrip.com/" }
        ],
        busConnections: [
          { city: "Trivandrum", duration: "1h 30m", price: "₹40-120", frequency: "25+ daily", type: "AC Bus", operator: "KSRTC", bookingUrl: "https://www.redbus.in/" },
          { city: "Kochi", duration: "3h", price: "₹120-300", frequency: "15+ daily", type: "AC Bus", operator: "KSRTC", bookingUrl: "https://www.redbus.in/" },
          { city: "Kovalam", duration: "45m", price: "₹30-80", frequency: "20+ daily", type: "Local Bus", operator: "KSRTC", bookingUrl: "Local booking" }
        ]
      },
      "Kasol": {
        trainConnections: [
          { city: "Delhi", duration: "12h + 5h drive", price: "₹300-1,500 + ₹500", frequency: "Daily to Chandigarh", type: "Shatabdi to Chandigarh + Bus", bookingUrl: "https://www.irctc.co.in/" },
          { city: "Chandigarh", duration: "5h drive", price: "₹500-1,200", frequency: "Multiple daily buses", type: "Bus from Chandigarh", bookingUrl: "https://www.redbus.in/" },
          { city: "Manali", duration: "3h drive", price: "₹200-600", frequency: "6+ daily", type: "Local bus", bookingUrl: "Local booking" }
        ],
        flightConnections: [
          { city: "Delhi", duration: "1h 30m + 1h drive", price: "₹4,000-12,000 + ₹800", frequency: "2+ daily", airlines: "Air India, Alliance Air", bookingUrl: "https://www.makemytrip.com/" },
          { city: "Mumbai", duration: "2h + 1h drive", price: "₹6,000-18,000 + ₹800", frequency: "1+ daily", airlines: "Alliance Air", bookingUrl: "https://www.makemytrip.com/" }
        ],
        busConnections: [
          { city: "Delhi", duration: "12h", price: "₹800-2,000", frequency: "5+ daily", type: "Volvo AC", operator: "HRTC, Private", bookingUrl: "https://www.redbus.in/" },
          { city: "Chandigarh", duration: "5h", price: "₹400-1,000", frequency: "10+ daily", type: "AC Bus", operator: "HRTC", bookingUrl: "https://www.redbus.in/" },
          { city: "Manali", duration: "3h", price: "₹200-500", frequency: "8+ daily", type: "Local bus", operator: "HRTC", bookingUrl: "Local booking" }
        ]
      }
    };

    return connectionsByCity[cityName] || connectionsByCity["Goa"];
  };

  const connections = getCitySpecificConnections(city.name);
  const trainConnections = connections.trainConnections || [];
  const flightConnections = connections.flightConnections || [];
  const busConnections = connections.busConnections || [];

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Train className="mr-3 h-8 w-8 text-vintage-gold" />
          Connectivity from {city.name}
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Complete guide to traveling from {city.name} to major Indian cities with real-time booking links and travel tips.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Train Connections */}
        {trainConnections.length > 0 && (
          <div>
            <h3 className="font-semibold text-xl text-travel-blue mb-6 flex items-center">
              <Train className="mr-2 h-5 w-5" />
              Train Connections
            </h3>
            <div className="grid gap-4">
              {trainConnections.map((train, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-travel-blue text-lg">{city.name} → {train.city}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-navy mt-1">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {train.duration}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {train.price}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {train.frequency}
                        </div>
                      </div>
                      <Badge className="bg-vintage-gold/10 text-vintage-gold mt-2">{train.type}</Badge>
                    </div>
                    <Button size="sm" asChild>
                      <a href={train.bookingUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Book Now
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Flight Connections */}
        {flightConnections.length > 0 && (
          <div>
            <h3 className="font-semibold text-xl text-travel-blue mb-6 flex items-center">
              <Plane className="mr-2 h-5 w-5" />
              Flight Connections
            </h3>
            <div className="grid gap-4">
              {flightConnections.map((flight, index) => (
                <div key={index} className="bg-gradient-to-r from-travel-blue/5 to-vintage-gold/5 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-travel-blue text-lg">{city.name} → {flight.city}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-navy mt-1">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {flight.duration}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {flight.price}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {flight.frequency}
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-xs text-muted-navy">Airlines: </span>
                        <span className="text-xs font-medium text-travel-blue">{flight.airlines}</span>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <a href={flight.bookingUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Book Flight
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bus Connections */}
        {busConnections.length > 0 && (
          <div>
            <h3 className="font-semibold text-xl text-travel-blue mb-6 flex items-center">
              <Car className="mr-2 h-5 w-5" />
              Bus Connections
            </h3>
            <div className="grid gap-4">
              {busConnections.map((bus, index) => (
                <div key={index} className="bg-gradient-to-r from-sage-green/5 to-vintage-gold/5 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-travel-blue text-lg">{city.name} → {bus.city}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-navy mt-1">
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {bus.duration}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {bus.price}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {bus.frequency}
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <Badge className="bg-sage-green/10 text-sage-green">{bus.type}</Badge>
                        <span className="text-xs text-muted-navy">by {bus.operator}</span>
                      </div>
                    </div>
                    <Button size="sm" asChild>
                      <a href={bus.bookingUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Book Bus
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Travel Tips */}
        <div className="bg-gradient-to-r from-vintage-gold/10 to-travel-blue/10 rounded-lg p-6">
          <h3 className="font-semibold text-travel-blue mb-4">Travel Tips from {city.name}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-travel-blue mb-2">Booking Tips</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Book trains 120 days in advance for best prices</li>
                <li>• Flight prices are lowest on Tuesday/Wednesday</li>
                <li>• Bus booking 2-7 days ahead gets good seats</li>
                <li>• Compare prices across multiple platforms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-travel-blue mb-2">Travel Advice</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Carry ID proof for all bookings</li>
                <li>• Check weather conditions before travel</li>
                <li>• Keep digital and physical tickets</li>
                <li>• Arrive 30min early for buses, 2h for flights</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}