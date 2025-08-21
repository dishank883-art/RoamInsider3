import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, MapPin, Clock, Star, ExternalLink, CreditCard, Truck } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface ShoppingMarketsProps {
  city: CityWithDetails;
}

export default function ShoppingMarkets({ city }: ShoppingMarketsProps) {
  // City-specific shopping and markets data
  const getCitySpecificMarkets = (cityName: string) => {
    const marketsByCity = {
      "Goa": {
        traditionalMarkets: [
          {
            name: "Anjuna Flea Market",
            type: "Beach Market",
            specialties: ["Hippie fashion", "Jewelry", "Souvenirs", "Handmade items"],
            hours: "Wednesdays 9:00 AM - 6:00 PM",
            bestTime: "Morning for best selection",
            priceRange: "₹50-3000",
            bargaining: "Expected and encouraged",
            tips: "Start at 30% of quoted price, cash preferred",
            location: "Anjuna Beach, North Goa",
            highlights: ["Beach setting", "International vendors", "Unique finds"]
          }
        ],
        modernShopping: [
          {
            name: "DB Mall Goa",
            type: "Shopping Center",
            specialties: ["Fashion", "Electronics", "Home goods", "Food court"],
            hours: "10:00 AM - 9:30 PM",
            priceRange: "₹300-10000",
            bargaining: "No bargaining, fixed prices",
            tips: "Check for seasonal sales and offers",
            highlights: ["Central location", "Local and national brands", "Good dining"]
          }
        ]
      },
      "Bir": {
        traditionalMarkets: [
          {
            name: "Bir Local Market",
            type: "Village Market",
            specialties: ["Local produce", "Basic supplies", "Trekking gear", "Handmade items"],
            hours: "8:00 AM - 6:00 PM",
            bestTime: "Morning for fresh items",
            priceRange: "₹20-800",
            bargaining: "Light bargaining acceptable",
            tips: "Limited options, bring essentials from outside",
            location: "Bir village center",
            highlights: ["Local atmosphere", "Basic necessities", "Traveler essentials"]
          }
        ],
        modernShopping: [
          {
            name: "Bir General Store",
            type: "Local Store",
            specialties: ["Basic supplies", "Trekking gear", "Snacks", "Essentials"],
            hours: "8:00 AM - 8:00 PM",
            priceRange: "₹20-1000",
            bargaining: "Fixed prices mostly",
            tips: "Stock up on essentials, limited options available",
            highlights: ["Convenient location", "Basic necessities", "Traveler-friendly"]
          }
        ]
      },
      "Dehradun": {
        traditionalMarkets: [
          {
            name: "Paltan Bazaar",
            type: "Traditional Market",
            specialties: ["Local goods", "Clothing", "Spices", "Handicrafts"],
            hours: "10:00 AM - 8:00 PM",
            bestTime: "Evening for cooler shopping",
            priceRange: "₹50-2000",
            bargaining: "Expected",
            tips: "Great place for local Garhwali items",
            location: "Central Dehradun",
            highlights: ["Local culture", "Traditional items", "Good prices"]
          }
        ],
        modernShopping: [
          {
            name: "Pacific Mall",
            type: "Shopping Mall",
            brands: ["National", "International", "Local brands"],
            floors: 4,
            facilities: ["Food court", "Cinema", "Gaming", "Parking"],
            hours: "11:00 AM - 10:00 PM",
            priceRange: "₹500-10000",
            paymentMethods: ["Card", "UPI", "Cash", "Wallets"],
            highlights: ["AC comfort", "Entertainment", "Dining options"]
          }
        ]
      },
      "Mumbai": {
        traditionalMarkets: [
          {
            name: "Crawford Market",
            type: "Historic Market",
            specialties: ["Fresh produce", "Imported goods", "Spices", "Dry fruits"],
            hours: "11:00 AM - 8:00 PM (Closed Sunday)",
            bestTime: "Morning for fresh items",
            priceRange: "₹50-5000",
            bargaining: "Expected",
            tips: "Historic market with colonial architecture",
            location: "Fort, South Mumbai",
            highlights: ["Historic architecture", "Variety", "Authentic Mumbai experience"]
          }
        ],
        modernShopping: [
          {
            name: "Phoenix Mills",
            type: "Premium Mall",
            brands: ["Luxury", "International", "Designer"],
            floors: 4,
            facilities: ["Fine dining", "Cinema", "Events", "Valet parking"],
            hours: "11:00 AM - 11:00 PM",
            priceRange: "₹1000-50000",
            paymentMethods: ["All cards", "UPI", "Digital wallets"],
            highlights: ["Luxury shopping", "Premium brands", "Entertainment"]
          }
        ]
      },
      "Bangalore": {
        traditionalMarkets: [
          {
            name: "Commercial Street",
            type: "Shopping Street",
            specialties: ["Fashion", "Accessories", "Electronics", "Local goods"],
            hours: "10:00 AM - 9:00 PM (Closed Monday)",
            bestTime: "Weekday afternoons",
            priceRange: "₹100-5000",
            bargaining: "Moderate bargaining",
            tips: "Mix of shops from budget to mid-range",
            location: "Shivaji Nagar, Central Bangalore",
            highlights: ["Historic shopping area", "Variety", "Good prices"]
          }
        ],
        modernShopping: [
          {
            name: "UB City Mall",
            type: "Luxury Mall",
            brands: ["International luxury", "Premium", "Designer"],
            floors: 5,
            facilities: ["Fine dining", "Rooftop", "Valet", "Events"],
            hours: "11:00 AM - 11:00 PM",
            priceRange: "₹1500-75000",
            paymentMethods: ["Premium cards", "UPI", "Digital wallets"],
            highlights: ["Luxury destination", "Premium brands", "Upscale dining"]
          }
        ]
      }
    };

    return marketsByCity[cityName] || marketsByCity["Goa"];
  };

  const cityMarkets = getCitySpecificMarkets(city.name);
  const traditionalMarkets = cityMarkets.traditionalMarkets || [];
  const modernShopping = cityMarkets.modernShopping || [];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center text-travel-blue">
          <ShoppingBag className="h-6 w-6 mr-2" />
          Shopping & Markets in {city.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Traditional Markets */}
        {traditionalMarkets.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-travel-blue mb-4">Traditional Markets</h3>
            <div className="grid gap-4">
              {traditionalMarkets.map((market, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-lg text-dark-navy">{market.name}</h4>
                      <div className="flex items-center text-muted-navy text-sm mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{market.type}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">{market.priceRange}</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-travel-blue mb-2">Specialties</h5>
                      <div className="flex flex-wrap gap-1">
                        {market.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{specialty}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-travel-blue mb-2">Timings</h5>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-1 text-muted-navy" />
                        <span>{market.hours}</span>
                      </div>
                    </div>
                  </div>

                  {market.tips && (
                    <div className="bg-vintage-gold/10 rounded-lg p-3 border border-vintage-gold/20">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-vintage-gold mr-1" />
                        <span className="font-semibold text-vintage-gold">Local Tip</span>
                      </div>
                      <p className="text-sm text-muted-navy">{market.tips}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modern Shopping */}
        {modernShopping.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-travel-blue mb-4">Modern Shopping</h3>
            <div className="grid gap-4">
              {modernShopping.map((mall, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-lg text-dark-navy">{mall.name}</h4>
                      <div className="flex items-center text-muted-navy text-sm mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{mall.type}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">{mall.priceRange}</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-travel-blue mb-2">Features</h5>
                      <div className="flex flex-wrap gap-1">
                        {(mall.specialties || mall.brands || []).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-travel-blue mb-2">Timings</h5>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-1 text-muted-navy" />
                        <span>{mall.hours}</span>
                      </div>
                    </div>
                  </div>

                  {mall.facilities && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-travel-blue mb-2">Facilities</h5>
                      <div className="flex flex-wrap gap-1">
                        {mall.facilities.map((facility, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{facility}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {mall.tips && (
                    <div className="bg-white rounded-lg p-3 border">
                      <div className="flex items-center mb-1">
                        <ShoppingBag className="h-4 w-4 text-travel-blue mr-1" />
                        <span className="font-semibold text-travel-blue">Shopping Tip</span>
                      </div>
                      <p className="text-sm text-muted-navy">{mall.tips}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shopping Tips for the City */}
        <div className="bg-gradient-to-r from-vintage-gold/10 to-travel-blue/10 rounded-lg p-6">
          <h3 className="font-semibold text-travel-blue mb-4">Shopping Guide for {city.name}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-travel-blue mb-2">Bargaining Tips</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Start at 40-50% of the quoted price</li>
                <li>• Be polite but persistent</li>
                <li>• Walk away if price doesn't match your budget</li>
                <li>• Cash payments often get better deals</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-travel-blue mb-2">Best Shopping Times</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Morning: Fresh items and better selection</li>
                <li>• Weekdays: Less crowded, better service</li>
                <li>• Evening: Cooler weather for street shopping</li>
                <li>• End of season: Best discounts and sales</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}