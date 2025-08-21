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
      "Bir": {
        traditionalMarkets: [
          {
            name: "Tuesday Village Market",
            type: "Local Market",
            specialties: ["Fresh vegetables", "Local produce", "Tibetan goods", "Handmade items"],
            hours: "Tuesdays 7:00 AM - 12:00 PM",
            bestTime: "Early morning for fresh vegetables",
            priceRange: "₹20-500",
            bargaining: "Minimal bargaining, fair prices",
            tips: "Best place for fresh organic vegetables from local farms",
            location: "Main Bir village",
            highlights: ["Organic produce", "Local community", "Authentic items"]
          },
          {
            name: "Tibetan Craft Market",
            type: "Handicraft Market",
            specialties: ["Prayer flags", "Singing bowls", "Handicrafts", "Local art"],
            hours: "Daily 9:00 AM - 6:00 PM",
            bestTime: "Afternoon when most shops are open",
            priceRange: "₹50-2000",
            bargaining: "Polite bargaining acceptable",
            tips: "Support local Tibetan artisans and authentic crafts",
            location: "Near monasteries",
            highlights: ["Authentic Tibetan items", "Cultural significance", "Handmade quality"]
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
            specialties: ["Local food", "Clothing", "Electronics", "Household items"],
            hours: "10:00 AM - 9:00 PM (Closed Monday)",
            bestTime: "Evening hours for street food",
            priceRange: "₹50-5000",
            bargaining: "Expected and encouraged",
            tips: "Great for local flavors and authentic shopping experience",
            location: "City center, Dehradun",
            highlights: ["Local atmosphere", "Street food", "Variety"]
          },
          {
            name: "Tibetan Market",
            type: "Specialty Market",
            specialties: ["Tibetan crafts", "Woolen items", "Prayer items", "Local art"],
            hours: "10:00 AM - 8:00 PM",
            bestTime: "Afternoon for best selection",
            priceRange: "₹100-3000",
            bargaining: "Moderate bargaining",
            tips: "Authentic Tibetan goods from local refugees",
            location: "Near Clock Tower",
            highlights: ["Cultural items", "Handmade goods", "Supporting community"]
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
      "Mussoorie": {
        traditionalMarkets: [
          {
            name: "Landour Bazaar",
            type: "Hill Market",
            specialties: ["Local goods", "Handicrafts", "Woolens", "Hill station souvenirs"],
            hours: "10:00 AM - 8:00 PM",
            bestTime: "Morning before crowds arrive",
            priceRange: "₹100-3000",
            bargaining: "Expected in most shops",
            tips: "More authentic and cheaper than Mall Road shops",
            location: "Landour area",
            highlights: ["Local flavor", "Better prices", "Authentic items"]
          },
          {
            name: "Mall Road Market",
            type: "Tourist Market",
            specialties: ["Souvenirs", "Clothing", "Shoes", "Tourist items"],
            hours: "10:00 AM - 10:00 PM",
            bestTime: "Early morning or late evening",
            priceRange: "₹200-5000",
            bargaining: "Standard practice",
            tips: "Tourist prices, but convenient location",
            location: "Main Mall Road",
            highlights: ["Convenient", "Tourist-friendly", "Wide variety"]
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
      "Ziro": {
        traditionalMarkets: [
          {
            name: "Hapoli Weekly Market",
            type: "Tribal Market",
            specialties: ["Organic vegetables", "Traditional items", "Bamboo crafts", "Local produce"],
            hours: "Saturdays 6:00 AM - 2:00 PM",
            bestTime: "Morning for fresh produce",
            priceRange: "₹20-1000",
            bargaining: "Fair pricing, minimal bargaining",
            tips: "Only major commercial area, stock up on essentials",
            location: "Hapoli town center",
            highlights: ["Organic produce", "Tribal crafts", "Community gathering"]
          },
          {
            name: "Apatani Craft Center",
            type: "Cultural Market",
            specialties: ["Traditional textiles", "Bamboo products", "Handwoven items", "Tribal art"],
            hours: "9:00 AM - 6:00 PM (by appointment)",
            bestTime: "Morning when artisans are working",
            priceRange: "₹100-5000",
            bargaining: "Supporting artisans, fair pricing",
            tips: "Authentic tribal crafts directly from makers",
            location: "Various village locations",
            highlights: ["Authentic items", "Cultural significance", "Supporting locals"]
          }
        ],
        modernShopping: [
          {
            name: "Basic Supplies Shop",
            type: "General Store",
            specialties: ["Essentials", "Basic food items", "Batteries", "Basic medicines"],
            hours: "8:00 AM - 8:00 PM",
            priceRange: "₹10-500",
            bargaining: "Fixed prices",
            tips: "Very limited options, bring essentials from outside",
            highlights: ["Remote area necessities", "Basic supplies only"]
          }
        ]
      },
      "Kolkata": {
        traditionalMarkets: [
          {
            name: "New Market",
            type: "Historic Market",
            specialties: ["Fashion", "Accessories", "Leather goods", "Local items"],
            hours: "10:00 AM - 8:30 PM (Closed Sunday)",
            bestTime: "Weekday mornings less crowded",
            priceRange: "₹100-5000",
            bargaining: "Essential skill required",
            tips: "Historic market with good variety, bargain well",
            location: "Park Street area",
            highlights: ["Historic significance", "Wide variety", "Cultural experience"]
          },
          {
            name: "Gariahat Market",
            type: "Local Market",
            specialties: ["Bengali sarees", "Local fashion", "Home goods", "Fresh produce"],
            hours: "10:00 AM - 9:00 PM",
            bestTime: "Evening for better deals",
            priceRange: "₹50-3000",
            bargaining: "Expected and encouraged",
            tips: "Best place for authentic Bengali items",
            location: "South Kolkata",
            highlights: ["Local culture", "Authentic items", "Good prices"]
          },
          {
            name: "College Street Book Market",
            type: "Book Market",
            specialties: ["Books", "Academic materials", "Old books", "Manuscripts"],
            hours: "11:00 AM - 8:00 PM (Closed Sunday)",
            bestTime: "Afternoon for quiet browsing",
            priceRange: "₹20-2000",
            bargaining: "Moderate bargaining for old books",
            tips: "Largest book market in India, great for students",
            location: "College Street",
            highlights: ["Intellectual hub", "Rare books", "Academic resources"]
          }
        ],
        modernShopping: [
          {
            name: "South City Mall",
            type: "Premium Mall",
            brands: ["International", "National", "Designer"],
            floors: 5,
            facilities: ["Food court", "Cinema", "Events", "Parking"],
            hours: "11:00 AM - 10:00 PM",
            priceRange: "₹500-20000",
            paymentMethods: ["Card", "UPI", "Cash", "Digital wallets"],
            highlights: ["Premium shopping", "Entertainment", "Dining"]
          },
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
      ],
      "Udaipur": [
        {
          traditionalMarkets: [
            {
              name: "Hathi Pol Bazaar",
              type: "Traditional Market",
              specialties: ["Miniature paintings", "Rajasthani handicrafts", "Textiles", "Jewelry"],
              hours: "10:00 AM - 8:00 PM",
              bestTime: "Morning for better selection",
              priceRange: "₹100-5000",
              bargaining: "Expected and encouraged",
              tips: "Famous for authentic Rajasthani miniature paintings",
              location: "Near City Palace, Udaipur",
              highlights: ["Authentic art", "Royal heritage items", "Traditional crafts"]
            },
            {
              name: "Bada Bazaar",
              type: "Local Market",
              specialties: ["Daily essentials", "Spices", "Textiles", "Local goods"],
              hours: "9:00 AM - 9:00 PM",
              bestTime: "Evening for street food along with shopping",
              priceRange: "₹50-2000",
              bargaining: "Standard practice",
              tips: "Best for local prices on daily essentials and spices",
              location: "City center, Udaipur",
              highlights: ["Local atmosphere", "Authentic prices", "Wide variety"]
            },
            {
              name: "Shilpgram Market",
              type: "Craft Market",
              specialties: ["Rural handicrafts", "Folk art", "Traditional items", "Tribal crafts"],
              hours: "9:00 AM - 6:00 PM",
              bestTime: "During craft festivals for best selection",
              priceRange: "₹200-8000",
              bargaining: "Moderate bargaining",
              tips: "Authentic rural Rajasthani crafts directly from artisans",
              location: "Shilpgram, Udaipur",
              highlights: ["Direct from artisans", "Rural crafts", "Cultural significance"]
            }
          ],
          modernShopping: [
            {
              name: "Celebration Mall",
              type: "Shopping Mall",
              brands: ["National", "Regional", "Local brands"],
              floors: 3,
              facilities: ["Food court", "Cinema", "Kids zone", "Parking"],
              hours: "10:00 AM - 10:00 PM",
              priceRange: "₹500-15000",
              paymentMethods: ["Card", "UPI", "Cash", "Digital wallets"],
              highlights: ["AC comfort", "Entertainment", "Family-friendly"]
            },
            {
              name: "Chetak Centre",
              type: "Shopping Complex",
              specialties: ["Clothing", "Electronics", "Accessories", "Local brands"],
              hours: "10:00 AM - 9:00 PM",
              priceRange: "₹300-8000",
              bargaining: "Fixed prices, seasonal sales",
              tips: "Good for standard shopping needs in AC comfort",
              highlights: ["Central location", "Standard brands", "Fixed prices"]
            }
          ]
        }
      ],
      "Gangtok": [
        {
          traditionalMarkets: [
            {
              name: "MG Marg Market",
              type: "Pedestrian Market",
              specialties: ["Tibetan handicrafts", "Woolens", "Souvenirs", "Local products"],
              hours: "10:00 AM - 8:00 PM",
              bestTime: "Evening for street atmosphere",
              priceRange: "₹100-3000",
              bargaining: "Light bargaining acceptable",
              tips: "Main shopping street, vehicle-free zone",
              location: "MG Marg, Gangtok",
              highlights: ["Pedestrian-only", "Mountain atmosphere", "Tourist-friendly"]
            },
            {
              name: "Lal Market",
              type: "Local Market",
              specialties: ["Fresh produce", "Spices", "Local vegetables", "Daily essentials"],
              hours: "6:00 AM - 7:00 PM",
              bestTime: "Morning for fresh produce",
              priceRange: "₹20-500",
              bargaining: "Minimal",
              tips: "Local market with authentic Sikkimese products",
              location: "Below MG Marg, Gangtok",
              highlights: ["Local prices", "Fresh produce", "Authentic experience"]
            },
            {
              name: "Tibet Road Market",
              type: "Tibetan Market",
              specialties: ["Tibetan crafts", "Prayer items", "Traditional clothes", "Monastery goods"],
              hours: "9:00 AM - 7:00 PM",
              bestTime: "Afternoon",
              priceRange: "₹150-4000",
              bargaining: "Respectful bargaining",
              tips: "Authentic Tibetan items, respect cultural significance",
              location: "Tibet Road, Gangtok",
              highlights: ["Tibetan culture", "Religious items", "Authentic crafts"]
            }
          ],
          modernShopping: [
            {
              name: "Metro Point Mall",
              type: "Shopping Mall",
              brands: ["National", "Regional brands"],
              floors: 4,
              facilities: ["Food court", "Gaming", "Entertainment", "Parking"],
              hours: "10:00 AM - 9:00 PM",
              priceRange: "₹500-10000",
              paymentMethods: ["All payment methods"],
              highlights: ["Modern amenities", "Entertainment", "AC comfort"]
            }
          ]
        }
      },
      "McLeodganj": {
        traditionalMarkets: [
            {
              name: "Main Square Market",
              type: "Tibetan Market",
              specialties: ["Tibetan handicrafts", "Prayer flags", "Buddhist items", "Woolens"],
              hours: "9:00 AM - 8:00 PM",
              bestTime: "Afternoon for relaxed shopping",
              priceRange: "₹100-2500",
              bargaining: "Gentle bargaining",
              tips: "Authentic Tibetan items, support refugee community",
              location: "Main Square, McLeodganj",
              highlights: ["Tibetan culture", "Refugee support", "Spiritual items"]
            },
            {
              name: "Temple Road Shops",
              type: "Street Market",
              specialties: ["Books", "Spiritual items", "Clothing", "Local crafts"],
              hours: "8:00 AM - 9:00 PM",
              bestTime: "Evening after temple visits",
              priceRange: "₹50-1500",
              bargaining: "Acceptable",
              tips: "Good for spiritual books and meditation items",
              location: "Temple Road, McLeodganj",
              highlights: ["Spiritual focus", "Book selection", "Meditation items"]
            },
            {
              name: "Kotwali Bazaar",
              type: "Refugee Market",
              specialties: ["Tibetan handicrafts", "Carpets", "Traditional clothes", "Monastery items"],
              hours: "10:00 AM - 6:00 PM (Closed Sunday)",
              bestTime: "Morning for better selection",
              priceRange: "₹200-5000",
              bargaining: "Fair bargaining",
              tips: "Authentic refugee-made items, fair trade practices",
              location: "Lower McLeodganj",
              highlights: ["Refugee support", "Fair trade", "Authentic crafts"]
            }
          ],
          modernShopping: [
            {
              name: "Dharamkot Shops",
              type: "Boutique Shopping",
              specialties: ["Organic products", "Yoga items", "Wellness products", "Eco-friendly goods"],
              hours: "9:00 AM - 8:00 PM",
              priceRange: "₹300-3000",
              bargaining: "Limited bargaining",
              tips: "Focus on wellness and organic products",
              highlights: ["Organic focus", "Wellness items", "Eco-friendly"]
            }
          ]
        }
      },
      "Pune": {
        traditionalMarkets: [
            {
              name: "Laxmi Road",
              type: "Traditional Shopping Street",
              specialties: ["Traditional wear", "Jewelry", "Accessories", "Wedding items"],
              hours: "10:00 AM - 9:00 PM (Closed Monday)",
              bestTime: "Evening for full street experience",
              priceRange: "₹200-10000",
              bargaining: "Expected",
              tips: "Historic shopping street, great for traditional Marathi items",
              location: "Central Pune",
              highlights: ["Historic street", "Traditional items", "Cultural significance"]
            },
            {
              name: "Pune Central (FC Road)",
              type: "Shopping District",
              specialties: ["Books", "Fashion", "Electronics", "Student items"],
              hours: "10:00 AM - 9:00 PM",
              bestTime: "Afternoon and evening",
              priceRange: "₹100-5000",
              bargaining: "Moderate bargaining",
              tips: "Popular among students and young professionals",
              location: "Fergusson College Road, Pune",
              highlights: ["Student hub", "Books and electronics", "Young crowd"]
            },
            {
              name: "Mandai Market",
              type: "Wholesale Market",
              specialties: ["Fresh vegetables", "Fruits", "Grains", "Wholesale goods"],
              hours: "5:00 AM - 2:00 PM",
              bestTime: "Early morning for wholesale prices",
              priceRange: "₹20-1000",
              bargaining: "Standard for bulk purchases",
              tips: "Best wholesale prices, bring bags and cash",
              location: "Mandai, Pune",
              highlights: ["Wholesale prices", "Fresh produce", "Bulk buying"]
            }
          ],
          modernShopping: [
            {
              name: "Phoenix MarketCity",
              type: "Premium Mall",
              brands: ["International", "Luxury", "Premium"],
              floors: 5,
              facilities: ["Food court", "Cinema", "Events", "Kids zone", "Parking"],
              hours: "11:00 AM - 11:00 PM",
              priceRange: "₹800-25000",
              paymentMethods: ["All payment methods"],
              highlights: ["Premium shopping", "Entertainment hub", "International brands"]
            },
            {
              name: "Amanora Mall",
              type: "Shopping Mall",
              specialties: ["Fashion", "Electronics", "Home goods", "Entertainment"],
              hours: "11:00 AM - 10:00 PM",
              priceRange: "₹500-15000",
              bargaining: "Fixed prices, seasonal sales",
              tips: "Good for comprehensive shopping with entertainment",
              highlights: ["All categories", "Family entertainment", "Good food court"]
            }
          ]
        }
      },
      "Shillong": {
        traditionalMarkets: [
            {
              name: "Bara Bazaar (Iewduh)",
              type: "Traditional Market",
              specialties: ["Local produce", "Khasi handicrafts", "Traditional items", "Local food"],
              hours: "6:00 AM - 6:00 PM (Closed Sunday)",
              bestTime: "Morning for fresh produce",
              priceRange: "₹20-2000",
              bargaining: "Standard practice",
              tips: "One of Asia's largest traditional markets",
              location: "Iewduh, Shillong",
              highlights: ["Largest traditional market", "Local culture", "Authentic prices"]
            },
            {
              name: "Police Bazaar",
              type: "Commercial Market",
              specialties: ["Clothing", "Electronics", "Accessories", "Modern goods"],
              hours: "9:00 AM - 8:00 PM",
              bestTime: "Afternoon and evening",
              priceRange: "₹100-5000",
              bargaining: "Moderate bargaining",
              tips: "Main commercial area, good for modern shopping needs",
              location: "Police Bazaar, Shillong",
              highlights: ["Commercial hub", "Modern goods", "Central location"]
            },
            {
              name: "Khasi Hills Handicrafts",
              type: "Handicraft Market",
              specialties: ["Bamboo items", "Cane products", "Traditional crafts", "Local art"],
              hours: "10:00 AM - 6:00 PM",
              bestTime: "Afternoon",
              priceRange: "₹150-3000",
              bargaining: "Gentle bargaining",
              tips: "Authentic Khasi handicrafts, support local artisans",
              location: "Various locations, Shillong",
              highlights: ["Local crafts", "Bamboo specialties", "Artisan support"]
            }
          ],
          modernShopping: [
            {
              name: "Polo Towers",
              type: "Shopping Complex",
              specialties: ["Fashion", "Electronics", "Dining", "Entertainment"],
              hours: "10:00 AM - 9:00 PM",
              priceRange: "₹300-8000",
              bargaining: "Fixed prices",
              tips: "Modern shopping with entertainment options",
              highlights: ["Modern amenities", "Central location", "Entertainment"]
            }
          ]
        }
      }
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