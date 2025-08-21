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
    const marketsByCity: { [key: string]: any } = {
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
          },
          {
            name: "Mapusa Friday Market",
            type: "Local Market",
            specialties: ["Fresh produce", "Spices", "Local goods", "Goan specialties"],
            hours: "Fridays 6:00 AM - 2:00 PM",
            bestTime: "Early morning for fresh items",
            priceRange: "₹20-1000",
            bargaining: "Light bargaining acceptable",
            tips: "Best place for authentic Goan spices and cashews",
            location: "Mapusa town, North Goa",
            highlights: ["Local atmosphere", "Fresh produce", "Authentic items"]
          },
          {
            name: "Calangute Market Square",
            type: "Tourist Market",
            specialties: ["Beachwear", "Souvenirs", "Handicrafts", "T-shirts"],
            hours: "10:00 AM - 10:00 PM daily",
            bestTime: "Evening for cooler shopping",
            priceRange: "₹100-2000",
            bargaining: "Expected",
            tips: "Quality varies, check items carefully",
            location: "Calangute Beach Road",
            highlights: ["Convenient location", "Late hours", "Tourist-friendly"]
          }
        ],
        modernShopping: [
          {
            name: "DB Mall Goa",
            type: "Shopping Mall",
            brands: ["International", "National", "Local brands"],
            floors: 3,
            facilities: ["Food court", "Cinema", "Gaming zone", "Parking"],
            hours: "10:00 AM - 10:00 PM",
            priceRange: "₹500-15000",
            paymentMethods: ["Card", "UPI", "Cash", "Digital wallets"],
            highlights: ["AC comfort", "Fixed prices", "Entertainment"]
          },
          {
            name: "Caculo Mall",
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
      "Mumbai": [
        {
          traditionalMarkets: [
            {
              name: "Crawford Market",
              type: "Historic Market",
              specialties: ["Fresh produce", "Imported goods", "Spices", "Dry fruits"],
              hours: "11:00 AM - 8:00 PM (Closed Sunday)",
              bestTime: "Morning for fresh items",
              priceRange: "₹50-5000",
              bargaining: "Expected",
              tips: "Historic market, great for bulk buying",
              location: "Fort, South Mumbai",
              highlights: ["Colonial architecture", "Wide variety", "Wholesale rates"]
            },
            {
              name: "Colaba Causeway",
              type: "Street Market",
              specialties: ["Fashion accessories", "Jewelry", "Bags", "Souvenirs"],
              hours: "10:00 AM - 11:00 PM",
              bestTime: "Evening for street shopping",
              priceRange: "₹100-3000",
              bargaining: "Essential skill needed",
              tips: "Bargain hard, start at 40% of quoted price",
              location: "Colaba, South Mumbai",
              highlights: ["Tourist hub", "Variety", "Street food nearby"]
            },
            {
              name: "Linking Road",
              type: "Fashion Street",
              specialties: ["Trendy clothes", "Accessories", "Shoes", "Street fashion"],
              hours: "10:30 AM - 10:30 PM",
              bestTime: "Weekday evenings less crowded",
              priceRange: "₹200-2000",
              bargaining: "Standard practice",
              tips: "Great for trendy clothes at reasonable prices",
              location: "Bandra West",
              highlights: ["Fashion paradise", "Young crowd", "Good quality"]
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
            },
            {
              name: "Palladium Mall",
              type: "High-end Mall",
              specialties: ["International brands", "Luxury goods", "Fine dining"],
              hours: "11:00 AM - 11:00 PM",
              priceRange: "₹800-40000",
              bargaining: "No bargaining, fixed luxury prices",
              tips: "Check for brand sales and member discounts",
              highlights: ["Premium location", "International brands", "Upmarket crowd"]
            }
          ]
        }
      ],
      "Bangalore": [
        {
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
            },
            {
              name: "Chickpet Market",
              type: "Wholesale Market",
              specialties: ["Textiles", "Silk sarees", "Traditional wear", "Wholesale goods"],
              hours: "10:00 AM - 8:00 PM (Closed Sunday)",
              bestTime: "Morning for better selection",
              priceRange: "₹200-10000",
              bargaining: "Essential for good deals",
              tips: "Best place for traditional South Indian clothing",
              location: "Chickpet, Central Bangalore",
              highlights: ["Wholesale rates", "Traditional items", "Bulk buying"]
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
            },
            {
              name: "Forum Mall",
              type: "Family Mall",
              specialties: ["Family brands", "Electronics", "Food court", "Entertainment"],
              hours: "10:00 AM - 10:00 PM",
              priceRange: "₹500-20000",
              bargaining: "Fixed prices, check for sales",
              tips: "Good for families, multiple brand options",
              highlights: ["Family-friendly", "Entertainment", "Good food court"]
            }
          ]
        }
      ],
      "New Delhi": [
        {
          traditionalMarkets: [
            {
              name: "Chandni Chowk",
              type: "Historic Market",
              specialties: ["Traditional wear", "Jewelry", "Spices", "Street food"],
              hours: "10:00 AM - 8:00 PM (Closed Monday)",
              bestTime: "Morning to avoid crowds",
              priceRange: "₹50-15000",
              bargaining: "Essential and expected",
              tips: "Oldest market, great for authentic Delhi experience",
              location: "Old Delhi",
              highlights: ["Historic significance", "Authentic items", "Cultural experience"]
            },
            {
              name: "Karol Bagh Market",
              type: "Shopping District",
              specialties: ["Electronics", "Clothing", "Accessories", "Home goods"],
              hours: "10:00 AM - 9:00 PM",
              bestTime: "Weekday evenings",
              priceRange: "₹100-8000",
              bargaining: "Standard practice",
              tips: "Great for electronics and fashion at competitive prices",
              location: "Karol Bagh, Central Delhi",
              highlights: ["Electronics hub", "Good prices", "Wide variety"]
            },
            {
              name: "Lajpat Nagar Market",
              type: "Fashion Market",
              specialties: ["Trendy clothes", "Accessories", "Bags", "Footwear"],
              hours: "10:30 AM - 9:00 PM (Closed Monday)",
              bestTime: "Afternoon for better deals",
              priceRange: "₹150-3000",
              bargaining: "Highly recommended",
              tips: "Popular among young shoppers for affordable fashion",
              location: "Lajpat Nagar, South Delhi",
              highlights: ["Fashion hub", "Youth-oriented", "Affordable prices"]
            }
          ],
          modernShopping: [
            {
              name: "Select City Walk",
              type: "Premium Mall",
              brands: ["International", "Luxury", "Premium"],
              floors: 6,
              facilities: ["Fine dining", "Cinema", "Events", "Valet parking"],
              hours: "10:00 AM - 11:00 PM",
              priceRange: "₹800-40000",
              paymentMethods: ["All payment methods"],
              highlights: ["Premium location", "International brands", "Entertainment hub"]
            },
            {
              name: "DLF Malls",
              type: "Shopping Complex",
              specialties: ["All categories", "Food courts", "Entertainment", "Services"],
              hours: "10:00 AM - 10:00 PM",
              priceRange: "₹500-25000",
              bargaining: "Fixed prices, seasonal sales",
              tips: "Multiple locations, good for comprehensive shopping",
              highlights: ["Multiple locations", "All needs covered", "Good infrastructure"]
            }
          ]
        }
      ],
      "Alleppey": [
        {
          traditionalMarkets: [
            {
              name: "Alleppey Town Market",
              type: "Local Market",
              specialties: ["Fresh fish", "Spices", "Coconut products", "Local produce"],
              hours: "6:00 AM - 8:00 PM",
              bestTime: "Morning for fresh items",
              priceRange: "₹20-500",
              bargaining: "Light bargaining",
              tips: "Best place for authentic Kerala spices and coconut products",
              location: "Town center, Alleppey",
              highlights: ["Local atmosphere", "Fresh seafood", "Authentic Kerala products"]
            },
            {
              name: "Mullakkal Street Market",
              type: "Street Market",
              specialties: ["Handloom", "Souvenirs", "Local crafts", "Coir products"],
              hours: "9:00 AM - 7:00 PM",
              bestTime: "Afternoon",
              priceRange: "₹50-2000",
              bargaining: "Acceptable",
              tips: "Good for authentic Kerala handloom and coir items",
              location: "Mullakkal Street",
              highlights: ["Handmade items", "Local crafts", "Reasonable prices"]
            }
          ],
          modernShopping: [
            {
              name: "Alleppey Shopping Complex",
              type: "Local Mall",
              specialties: ["Basic goods", "Clothing", "Electronics", "Local brands"],
              hours: "10:00 AM - 9:00 PM",
              priceRange: "₹200-5000",
              bargaining: "Fixed prices",
              tips: "Limited but decent selection for basic needs",
              highlights: ["Central location", "AC comfort", "Local brands"]
            }
          ]
        }
      ],
      "Varkala": [
        {
          traditionalMarkets: [
            {
              name: "Varkala Cliff Market",
              type: "Tourist Market",
              specialties: ["Beachwear", "Jewelry", "Souvenirs", "Ayurvedic products"],
              hours: "9:00 AM - 10:00 PM",
              bestTime: "Evening for cooler shopping",
              priceRange: "₹100-3000",
              bargaining: "Expected",
              tips: "Tourist-oriented, prices higher but unique items",
              location: "North Cliff, Varkala",
              highlights: ["Cliff-top location", "Ocean views", "Tourist-friendly"]
            },
            {
              name: "Varkala Town Market",
              type: "Local Market",
              specialties: ["Fresh produce", "Spices", "Daily essentials", "Local goods"],
              hours: "6:00 AM - 8:00 PM",
              bestTime: "Morning",
              priceRange: "₹20-800",
              bargaining: "Minimal",
              tips: "Local prices, authentic Kerala products",
              location: "Varkala town",
              highlights: ["Local experience", "Fresh items", "Authentic"]
            }
          ],
          modernShopping: [
            {
              name: "Cliff Side Shops",
              type: "Boutique Shopping",
              specialties: ["Handmade clothes", "Accessories", "Art items", "Wellness products"],
              hours: "10:00 AM - 9:00 PM",
              priceRange: "₹300-5000",
              bargaining: "Light bargaining",
              tips: "Unique items, often handmade or artisanal",
              highlights: ["Unique finds", "Artisanal products", "Cliff setting"]
            }
          ]
        }
      ],
      "Kasol": [
        {
          traditionalMarkets: [
            {
              name: "Kasol Main Market",
              type: "Mountain Market",
              specialties: ["Woolens", "Trekking gear", "Local handicrafts", "Israeli food items"],
              hours: "8:00 AM - 8:00 PM",
              bestTime: "Afternoon",
              priceRange: "₹100-3000",
              bargaining: "Acceptable",
              tips: "Good for trekking supplies and mountain woolens",
              location: "Kasol main road",
              highlights: ["Trekking gear", "Mountain lifestyle", "Israeli influence"]
            },
            {
              name: "Malana Village Crafts",
              type: "Village Market",
              specialties: ["Local handicrafts", "Woolen items", "Traditional items", "Village products"],
              hours: "Day visits only",
              bestTime: "During village visit",
              priceRange: "₹200-5000",
              bargaining: "Respectful bargaining",
              tips: "Respect local customs, authentic village products",
              location: "Malana village",
              highlights: ["Authentic village crafts", "Traditional items", "Cultural significance"]
            }
          ],
          modernShopping: [
            {
              name: "Kasol Cafes & Shops",
              type: "Cafe Shopping",
              specialties: ["Books", "Accessories", "Music", "Lifestyle items"],
              hours: "9:00 AM - 10:00 PM",
              priceRange: "₹150-2000",
              bargaining: "Fixed prices mostly",
              tips: "Combined with cafe experience",
              highlights: ["Relaxed atmosphere", "Backpacker-friendly", "Unique finds"]
            }
          ]
        }
      ]
    };

    return marketsByCity[cityName] || marketsByCity["Goa"];
  };

  const cityMarkets = getCitySpecificMarkets(city.name);
  const traditionalMarkets = cityMarkets.traditionalMarkets || [];
  const modernShopping = cityMarkets.modernShopping || [];

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <ShoppingBag className="mr-3 h-8 w-8 text-vintage-gold" />
          Shopping & Markets in {city.name}
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Discover the best shopping experiences in {city.name}, from traditional markets with local flavors to modern malls with international brands.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Traditional Markets */}
        <div>
          <h3 className="font-semibold text-xl text-travel-blue mb-6">Traditional Markets & Local Shopping</h3>
          <div className="space-y-6">
            {traditionalMarkets.map((market, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-xl text-travel-blue mb-2">{market.name}</h4>
                    <div className="flex items-center space-x-4 text-muted-navy mb-2">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {market.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {market.hours}
                      </div>
                    </div>
                    <Badge className="bg-vintage-gold/10 text-vintage-gold">{market.type}</Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-travel-blue mb-2">Specialties</h5>
                    <div className="flex flex-wrap gap-2">
                      {market.specialties.map((specialty: string, idx: number) => (
                        <Badge key={idx} variant="secondary" className="bg-travel-blue/10 text-travel-blue">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-travel-blue mb-2">Key Info</h5>
                    <div className="space-y-1 text-sm text-muted-navy">
                      <div>💰 Price Range: {market.priceRange}</div>
                      <div>🤝 Bargaining: {market.bargaining}</div>
                      <div>⏰ Best Time: {market.bestTime}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex items-center mb-1">
                    <Star className="h-4 w-4 text-vintage-gold mr-1" />
                    <span className="font-semibold text-travel-blue">Shopping Tip</span>
                  </div>
                  <p className="text-sm text-muted-navy">{market.tips}</p>
                </div>

                {market.highlights && (
                  <div className="mt-4">
                    <h5 className="font-semibold text-travel-blue mb-2">Highlights</h5>
                    <div className="flex flex-wrap gap-2">
                      {market.highlights.map((highlight: string, idx: number) => (
                        <span key={idx} className="text-xs bg-sage-green/10 text-sage-green px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modern Shopping */}
        {modernShopping.length > 0 && (
          <div>
            <h3 className="font-semibold text-xl text-travel-blue mb-6">Modern Shopping Centers & Malls</h3>
            <div className="space-y-6">
              {modernShopping.map((mall, index) => (
                <div key={index} className="bg-gradient-to-r from-vintage-gold/5 to-travel-blue/5 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-xl text-travel-blue mb-2">{mall.name}</h4>
                      <Badge className="bg-sage-green/10 text-sage-green">{mall.type}</Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-travel-blue mb-2">Features</h5>
                      <div className="space-y-1 text-sm text-muted-navy">
                        <div>🕒 Hours: {mall.hours}</div>
                        <div>💳 Payment: {Array.isArray(mall.paymentMethods) ? mall.paymentMethods.join(", ") : mall.paymentMethods || "All methods"}</div>
                        <div>💰 Price Range: {mall.priceRange}</div>
                        {mall.floors && <div>🏢 Floors: {mall.floors}</div>}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-travel-blue mb-2">Facilities</h5>
                      <div className="flex flex-wrap gap-2">
                        {(mall.facilities || mall.specialties || []).map((facility: string, idx: number) => (
                          <Badge key={idx} variant="secondary" className="bg-vintage-gold/10 text-vintage-gold text-xs">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {mall.highlights && (
                    <div className="bg-white rounded-lg p-3 border">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-vintage-gold mr-1" />
                        <span className="font-semibold text-travel-blue">Highlights</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {mall.highlights.map((highlight: string, idx: number) => (
                          <span key={idx} className="text-xs bg-travel-blue/10 text-travel-blue px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {mall.tips && (
                    <div className="mt-4 bg-white rounded-lg p-3 border">
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