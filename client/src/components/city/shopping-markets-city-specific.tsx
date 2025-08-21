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
          },
          {
            name: "Mapusa Friday Market",
            type: "Local Market",
            specialties: ["Fresh produce", "Spices", "Goan specialties", "Feni"],
            hours: "Fridays 6:00 AM - 8:00 PM",
            bestTime: "Early morning for fresh items",
            priceRange: "₹20-2000",
            bargaining: "Light bargaining acceptable",
            tips: "Best place for authentic Goan spices and cashews",
            location: "Mapusa, 13km from Panaji",
            highlights: ["Local atmosphere", "Authentic items", "Direct-from-producer pricing"]
          },
          {
            name: "Arpora Saturday Night Market",
            type: "Night Market",
            specialties: ["International cuisines", "Live music", "Handicrafts", "Souvenirs"],
            hours: "Saturdays 6:00 PM - late night",
            bestTime: "Evening atmosphere",
            priceRange: "₹100-3000",
            bargaining: "Moderate bargaining",
            tips: "Great for dinner and entertainment with shopping",
            location: "Arpora, North Goa",
            highlights: ["Live entertainment", "Food variety", "Night market vibes"]
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
            name: "Crawford Market (Mahatma Jyotiba Phule Mandai)",
            type: "Historic Market",
            specialties: ["Fresh fruits", "Imported cheeses", "Handmade chocolates", "Toys", "Flowers"],
            hours: "9:00 AM - 10:30 PM (Closed Sunday)",
            bestTime: "Morning for fresh items",
            priceRange: "₹50-5000",
            bargaining: "Expected",
            tips: "First market in India to get electricity (1869), historic colonial building",
            location: "Near Chhatrapati Shivaji Terminus",
            highlights: ["Colonial architecture", "Historic significance", "Variety"]
          },
          {
            name: "Chor Bazaar (Thieves Market)",
            type: "Antique Market",
            specialties: ["Antiques", "Vintage items", "Old furniture", "Brass lamps", "Collectibles"],
            hours: "11:00 AM - 7:30 PM (Closed Friday)",
            bestTime: "Afternoon for better browsing",
            priceRange: "₹100-50000",
            bargaining: "Essential skill required",
            tips: "Legend says if you lose anything in Mumbai, you can buy it back here",
            location: "Mutton Street, near Mohammed Ali Road",
            highlights: ["Unique finds", "Historical items", "Adventure shopping"]
          },
          {
            name: "Colaba Causeway",
            type: "Street Market",
            specialties: ["Clothes", "Accessories", "Souvenirs", "Handicrafts", "Jewelry"],
            hours: "10:00 AM - 10:00 PM daily",
            bestTime: "Evening for cooler shopping",
            priceRange: "₹100-3000",
            bargaining: "Great bargaining opportunities",
            tips: "Tourist-friendly with good variety of items",
            location: "Colaba, South Mumbai",
            highlights: ["Tourist popular", "Good variety", "Easy access"]
          },
          {
            name: "Fashion Street",
            type: "Fashion Market",
            specialties: ["Latest fashion trends", "Affordable clothes", "Accessories", "Footwear"],
            hours: "11:00 AM - 9:00 PM daily",
            bestTime: "Weekday evenings",
            priceRange: "₹50-1500",
            bargaining: "Expected and effective",
            tips: "390 street shops selling trendy clothes at cheap prices",
            location: "MG Road, Fort",
            highlights: ["Trendy fashion", "Budget-friendly", "Large selection"]
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
            specialties: ["Export surplus clothing", "Affordable shoes", "Trendy jewelry", "Electronics"],
            hours: "10:00 AM - 9:00 PM (Closed Monday)",
            bestTime: "Weekday afternoons",
            priceRange: "₹100-5000",
            bargaining: "Excellent bargaining opportunities",
            tips: "Hole-in-the-wall retailers with great deals",
            location: "Shivaji Nagar, Central Bangalore",
            highlights: ["Export quality clothes", "Budget shopping", "Variety"]
          },
          {
            name: "Brigade Road",
            type: "Street Shopping Area",
            specialties: ["Street fashion", "Accessories", "Books", "Food"],
            hours: "10:00 AM - 10:00 PM daily",
            bestTime: "Evening hours",
            priceRange: "₹50-3000",
            bargaining: "Expected",
            tips: "CBD area with mix of street vendors and branded stores",
            location: "Off MG Road, Central Bangalore",
            highlights: ["Central location", "Mix of options", "Good food nearby"]
          },
          {
            name: "Chickpet Market",
            type: "Wholesale Market",
            specialties: ["Textiles", "Silk sarees", "Traditional wear", "Wholesale goods"],
            hours: "10:00 AM - 8:00 PM (Closed Sunday)",
            bestTime: "Morning for better selection",
            priceRange: "₹200-15000",
            bargaining: "Essential for good deals",
            tips: "Best place for traditional South Indian clothing",
            location: "Chickpet, Central Bangalore",
            highlights: ["Wholesale prices", "Traditional items", "Bulk buying"]
          },
          {
            name: "Gandhi Bazaar",
            type: "Local Market",
            specialties: ["Fresh produce", "Spices", "Condiments", "Local goods"],
            hours: "6:00 AM - 9:00 PM daily",
            bestTime: "Early morning",
            priceRange: "₹20-1000",
            bargaining: "Common practice",
            tips: "Local market experience with fresh ingredients",
            location: "Basavanagudi, South Bangalore",
            highlights: ["Fresh produce", "Local experience", "Authentic"]
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
      },
      "Kolkata": {
        traditionalMarkets: [
          {
            name: "New Market",
            type: "Historic Market",
            specialties: ["Clothes", "Shoes", "Gifts", "Traditional items", "Electronics"],
            hours: "10:00 AM - 8:00 PM (Closed Sunday)",
            bestTime: "Weekday mornings",
            priceRange: "₹100-3000",
            bargaining: "Expected but aggressive vendors",
            tips: "Better experience with local guide, be prepared for persistent vendors",
            location: "Lindsay Street, Central Kolkata",
            highlights: ["Historic significance", "Bargain prices", "Variety"]
          },
          {
            name: "College Street Book Market",
            type: "Book Market",
            specialties: ["Books", "Academic texts", "Rare books", "Manuscripts"],
            hours: "10:00 AM - 8:00 PM daily",
            bestTime: "Afternoon browsing",
            priceRange: "₹20-5000",
            bargaining: "Limited bargaining",
            tips: "World's largest second-hand book market",
            location: "College Street, Central Kolkata",
            highlights: ["Largest book market", "Academic hub", "Rare finds"]
          },
          {
            name: "Gariahat Market",
            type: "Shopping Market",
            specialties: ["Sarees", "Bengali handicrafts", "Traditional wear", "Accessories"],
            hours: "10:00 AM - 9:00 PM daily",
            bestTime: "Evening hours",
            priceRange: "₹200-8000",
            bargaining: "Expected",
            tips: "Great for traditional Bengali clothing and handicrafts",
            location: "Gariahat, South Kolkata",
            highlights: ["Bengali culture", "Traditional items", "Local atmosphere"]
          }
        ],
        modernShopping: [
          {
            name: "Quest Mall",
            type: "Modern Mall",
            specialties: ["Fashion", "Electronics", "Food", "Entertainment"],
            hours: "11:00 AM - 10:00 PM",
            priceRange: "₹300-15000",
            bargaining: "Fixed prices",
            tips: "Modern shopping experience with good food options",
            highlights: ["Central location", "Good brands", "Family-friendly"]
          }
        ]
      },
      "New Delhi": {
        traditionalMarkets: [
          {
            name: "Chandni Chowk",
            type: "Historic Bazaar",
            specialties: ["Silver jewelry", "Traditional wear", "Electronics", "Spices", "Books"],
            hours: "9:00 AM - 7:30 PM (Closed Sunday)",
            bestTime: "Morning hours",
            priceRange: "₹50-10000",
            bargaining: "Essential and expected",
            tips: "Founded in 1650 by Shah Jahan, explore sub-markets like Dariba Kalan",
            location: "Old Delhi, Metro: Chandni Chowk",
            highlights: ["Historic significance", "Cultural experience", "Authentic Delhi"]
          },
          {
            name: "Karol Bagh Market",
            type: "Shopping Hub",
            specialties: ["Affordable jewelry", "Wedding wear", "Electronics", "Clothing"],
            hours: "10:00 AM - 9:00 PM daily",
            bestTime: "Evening hours",
            priceRange: "₹100-5000",
            bargaining: "Standard practice",
            tips: "Mix of branded stores and street stalls, famous for chole bhature",
            location: "Central Delhi, Metro: Karol Bagh",
            highlights: ["Budget shopping", "Wedding preparations", "Electronics"]
          },
          {
            name: "Khari Baoli",
            type: "Spice Market",
            specialties: ["Spices", "Dried fruits", "Nuts", "Herbs", "Condiments"],
            hours: "9:00 AM - 7:00 PM (Closed Sunday)",
            bestTime: "Morning for freshest items",
            priceRange: "₹20-2000",
            bargaining: "Expected",
            tips: "Asia's largest spice market, part of Chandni Chowk area",
            location: "Old Delhi, near Red Fort",
            highlights: ["Aromatic experience", "Wholesale prices", "Authentic spices"]
          }
        ],
        modernShopping: [
          {
            name: "Khan Market",
            type: "Upscale Market",
            specialties: ["High-end brands", "Boutiques", "Books", "Fine dining"],
            hours: "10:00 AM - 8:00 PM daily",
            priceRange: "₹1000-50000",
            bargaining: "Limited, premium pricing",
            tips: "World's 20th most expensive retail location, expat favorite",
            highlights: ["Premium brands", "International crowd", "Upscale dining"]
          }
        ]
      },
      "Udaipur": {
        traditionalMarkets: [
          {
            name: "Hathi Pol Bazaar",
            type: "Art & Craft Market",
            specialties: ["Pichwai paintings", "Phad art", "Bandhej fabrics", "Wooden handicrafts"],
            hours: "10:00 AM - 9:00 PM daily",
            bestTime: "Evening hours",
            priceRange: "₹200-15000",
            bargaining: "Negotiable prices",
            tips: "Named after historic Elephant Gate, near City Palace",
            location: "Near City Palace, Old City",
            highlights: ["Traditional art", "Rajasthani culture", "Authentic crafts"]
          },
          {
            name: "Bapu Bazaar",
            type: "General Market",
            specialties: ["Bandhani textiles", "Leather goods", "Electronics", "Khadi products"],
            hours: "9:00 AM - 10:00 PM (Closed Sunday)",
            bestTime: "Evening hours",
            priceRange: "₹100-5000",
            bargaining: "Expected",
            tips: "Everything under one roof, great for budget shopping",
            location: "Central Udaipur",
            highlights: ["Budget-friendly", "Variety", "Local atmosphere"]
          },
          {
            name: "Jagdish Temple Street",
            type: "Silver Market",
            specialties: ["Silver jewelry", "Antique pieces", "Metal artifacts", "Religious items"],
            hours: "10:00 AM - 8:00 PM daily",
            bestTime: "Afternoon browsing",
            priceRange: "₹500-25000",
            bargaining: "Standard practice",
            tips: "Near famous Jagdish Temple, mix of traditional and contemporary",
            location: "Near Jagdish Temple, Old City",
            highlights: ["Silver crafts", "Temple vicinity", "Antique finds"]
          }
        ],
        modernShopping: [
          {
            name: "Celebration Mall",
            type: "Modern Mall",
            specialties: ["Fashion", "Electronics", "Food court", "Entertainment"],
            hours: "11:00 AM - 10:00 PM",
            priceRange: "₹500-8000",
            bargaining: "Fixed prices",
            tips: "Modern shopping with AC comfort",
            highlights: ["Modern amenities", "Entertainment", "Family-friendly"]
          }
        ]
      },
      "Pune": {
        traditionalMarkets: [
          {
            name: "Laxmi Road",
            type: "Traditional Shopping Street",
            specialties: ["Paithani sarees", "Silk sarees", "Traditional jewelry", "Footwear"],
            hours: "10:00 AM - 11:00 PM (Closed Monday)",
            bestTime: "Evening hours",
            priceRange: "₹500-50000",
            bargaining: "Expected",
            tips: "4km stretch in heart of old city, famous for traditional Maharashtrian items",
            location: "Old City Pune",
            highlights: ["Traditional sarees", "Authentic culture", "Historic area"]
          },
          {
            name: "Tulsi Baug",
            type: "General Market",
            specialties: ["Ready-made garments", "Household items", "Bargain shopping"],
            hours: "9:00 AM - 11:00 PM daily",
            bestTime: "Weekday evenings",
            priceRange: "₹100-3000",
            bargaining: "Standard practice",
            tips: "Great for budget shopping and everyday items",
            location: "Tulshibaug, Budhwar Peth",
            highlights: ["Budget shopping", "Local items", "Convenient"]
          }
        ],
        modernShopping: [
          {
            name: "Phoenix MarketCity",
            type: "Premium Mall",
            specialties: ["Fashion", "Electronics", "Entertainment", "Fine dining"],
            hours: "11:00 AM - 11:00 PM",
            priceRange: "₹1000-25000",
            bargaining: "Fixed premium pricing",
            tips: "Modern mall with premium brands and entertainment",
            highlights: ["Premium brands", "Entertainment complex", "Fine dining"]
          }
        ]
      },
      "McLeodganj": {
        traditionalMarkets: [
          {
            name: "Kotwali Bazaar",
            type: "Tibetan Market",
            specialties: ["Tibetan rugs", "Woolen shawls", "Buddha statues", "Prayer flags"],
            hours: "9:00 AM - 8:00 PM daily",
            bestTime: "Afternoon browsing",
            priceRange: "₹200-8000",
            bargaining: "Expected and common",
            tips: "Support Tibetan refugee communities with authentic handicrafts",
            location: "Main McLeodganj area",
            highlights: ["Tibetan culture", "Authentic handicrafts", "Cultural significance"]
          },
          {
            name: "Temple Road Market",
            type: "Spiritual Market",
            specialties: ["Thangka paintings", "Singing bowls", "Traditional clothing", "Incense"],
            hours: "10:00 AM - 7:00 PM daily",
            bestTime: "Morning hours",
            priceRange: "₹300-12000",
            bargaining: "Moderate bargaining",
            tips: "Near Dalai Lama Temple, authentic spiritual items",
            location: "Temple Road, McLeodganj",
            highlights: ["Spiritual items", "Buddhist culture", "Unique finds"]
          }
        ],
        modernShopping: [
          {
            name: "Mall Road Shops",
            type: "Tourist Shopping",
            specialties: ["Branded clothes", "Shoes", "Accessories", "Souvenirs"],
            hours: "10:00 AM - 10:00 PM",
            priceRange: "₹500-8000",
            bargaining: "Limited bargaining",
            tips: "Higher prices but quality assured",
            highlights: ["Brand options", "Quality items", "Tourist convenience"]
          }
        ]
      },
      "Alleppey": {
        traditionalMarkets: [
          {
            name: "Mullakkal Street Market",
            type: "Traditional Kerala Market",
            specialties: ["Spices", "Coir products", "Handicrafts", "Traditional jewelry"],
            hours: "9:00 AM - 9:00 PM daily",
            bestTime: "Morning for fresh items",
            priceRange: "₹50-5000",
            bargaining: "Expected",
            tips: "Oldest market in Alleppey, known for pure spices and traditional Kerala items",
            location: "Mullakkal Street, Central Alleppey",
            highlights: ["Authentic spices", "Coir crafts", "Local culture"]
          },
          {
            name: "Canal Bazaar",
            type: "Waterside Market",
            specialties: ["Fresh vegetables", "Spices", "Handicrafts", "Local produce"],
            hours: "6:00 AM - 8:00 PM daily",
            bestTime: "Early morning",
            priceRange: "₹20-1500",
            bargaining: "Light bargaining",
            tips: "Located along beautiful canals, fresh produce from backwaters",
            location: "Along the canals, Alleppey",
            highlights: ["Scenic location", "Fresh produce", "Backwater culture"]
          }
        ],
        modernShopping: [
          {
            name: "Alleppey Shopping Complex",
            type: "Local Shopping Center",
            specialties: ["Textiles", "Electronics", "Local goods", "Souvenirs"],
            hours: "10:00 AM - 9:00 PM",
            priceRange: "₹200-3000",
            bargaining: "Limited",
            tips: "Modern shopping in traditional town setting",
            highlights: ["Modern facilities", "Local products", "Convenient"]
          }
        ]
      },
      "Kasol": {
        traditionalMarkets: [
          {
            name: "Kasol Flea Market",
            type: "Hippie Market",
            specialties: ["Himachali caps", "Dream catchers", "Hippie accessories", "Local handicrafts"],
            hours: "10:00 AM - 8:00 PM daily",
            bestTime: "Afternoon hours",
            priceRange: "₹100-2000",
            bargaining: "Must bargain, prices negotiable",
            tips: "Vibrant market with authentic Himachali handicrafts and hippie culture",
            location: "Main Kasol area, Parvati Valley",
            highlights: ["Hippie culture", "Mountain crafts", "Unique atmosphere"]
          }
        ],
        modernShopping: [
          {
            name: "Local Shops",
            type: "General Stores",
            specialties: ["Trekking gear", "Basic supplies", "Snacks", "Essentials"],
            hours: "8:00 AM - 10:00 PM",
            priceRange: "₹50-1500",
            bargaining: "Limited",
            tips: "Stock up on trekking essentials and basic supplies",
            highlights: ["Trekking supplies", "Mountain essentials", "Convenient"]
          }
        ]
      }
    };

    return (marketsByCity as any)[cityName] || marketsByCity["Goa"];
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
              {traditionalMarkets.map((market: any, index: any) => (
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
                        {market.specialties.map((specialty: any, idx: any) => (
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
              {modernShopping.map((mall: any, index: any) => (
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
                        {(mall.specialties || mall.brands || []).map((feature: any, idx: any) => (
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
                        {mall.facilities.map((facility: any, idx: any) => (
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