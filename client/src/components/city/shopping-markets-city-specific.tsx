import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, MapPin, Clock, Star, ExternalLink, CreditCard, Truck } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface ShoppingMarketsProps {
  city: CityWithDetails;
}

export default function ShoppingMarkets({ city }: ShoppingMarketsProps) {
  // Get city-specific available platforms based on location and infrastructure
  const getCitySpecificPlatforms = (cityName: string) => {
    const allPlatforms = [
      // Major E-commerce Platforms
      {
        name: "Amazon India",
        category: "Everything Store",
        description: "Largest online retailer with same-day delivery in major cities",
        url: "https://amazon.in",
        specialties: ["Electronics", "Books", "Fashion", "Home & Kitchen", "Groceries"],
        deliveryTime: "Same day/Next day",
        paymentMethods: ["Cards", "UPI", "EMI", "Cash on Delivery"],
        benefits: ["Prime membership", "Easy returns", "Customer service"]
      },
      {
        name: "Flipkart",
        category: "Multi-category",
        description: "India's homegrown e-commerce giant with excellent customer service",
        url: "https://flipkart.com",
        specialties: ["Electronics", "Fashion", "Mobile phones", "Appliances", "Books"],
        deliveryTime: "1-7 days",
        paymentMethods: ["Cards", "UPI", "EMI", "Cash on Delivery"],
        benefits: ["Plus membership", "Exchange offers", "No-cost EMI"]
      },
      {
        name: "Myntra",
        category: "Fashion & Lifestyle",
        description: "Leading fashion platform with latest trends and brands",
        url: "https://myntra.com",
        specialties: ["Fashion", "Beauty", "Home decor", "Personal care"],
        deliveryTime: "2-7 days",
        paymentMethods: ["Cards", "UPI", "Wallets", "EMI"],
        benefits: ["Try & Buy", "Free returns", "Style recommendations"]
      },
      {
        name: "Nykaa",
        category: "Beauty & Wellness",
        description: "Premium beauty and wellness products",
        url: "https://nykaa.com",
        specialties: ["Cosmetics", "Skincare", "Hair care", "Fragrances", "Wellness"],
        deliveryTime: "2-5 days",
        paymentMethods: ["Cards", "UPI", "Wallets", "EMI"],
        benefits: ["Beauty consultations", "Authentic products", "Loyalty rewards"]
      },
      {
        name: "BigBasket",
        category: "Groceries",
        description: "Leading online grocery platform",
        url: "https://bigbasket.com",
        specialties: ["Groceries", "Fresh produce", "Gourmet food", "Personal care"],
        deliveryTime: "Same day/Next day",
        paymentMethods: ["Cards", "UPI", "Wallets", "COD"],
        benefits: ["Fresh guarantee", "Subscription discounts", "Express delivery"]
      },
      {
        name: "Grofers (Blinkit)",
        category: "Quick Commerce",
        description: "Ultra-fast grocery delivery in minutes",
        url: "https://blinkit.com",
        specialties: ["Groceries", "Fruits & vegetables", "Daily essentials", "Medicine"],
        deliveryTime: "8-15 minutes",
        paymentMethods: ["Cards", "UPI", "Wallets"],
        benefits: ["Ultra-fast delivery", "Fresh products", "No minimum order"]
      },
      {
        name: "JioMart",
        category: "Groceries & More",
        description: "Reliance's digital marketplace",
        url: "https://jiomart.com",
        specialties: ["Groceries", "Electronics", "Fashion", "Pharmacy"],
        deliveryTime: "Same day/Next day",
        paymentMethods: ["JioMoney", "Cards", "UPI", "COD"],
        benefits: ["No delivery charges", "WhatsApp ordering", "JioCoins rewards"]
      },
      {
        name: "Swiggy",
        category: "Food Delivery",
        description: "Food delivery and quick commerce platform",
        url: "https://swiggy.com",
        specialties: ["Restaurant delivery", "Groceries", "Medicine", "Alcohol"],
        deliveryTime: "30-45 minutes",
        paymentMethods: ["Cards", "UPI", "Wallets", "COD"],
        benefits: ["Live tracking", "Multiple cuisines", "Super membership"]
      },
      {
        name: "Zomato",
        category: "Food Delivery",
        description: "Restaurant discovery and food delivery",
        url: "https://zomato.com",
        specialties: ["Food delivery", "Dining out", "Pro membership"],
        deliveryTime: "30-45 minutes",
        paymentMethods: ["Cards", "UPI", "Wallets", "COD"],
        benefits: ["Restaurant reviews", "Gold membership", "Live tracking"]
      },
      {
        name: "1mg",
        category: "Healthcare",
        description: "Online pharmacy and health platform",
        url: "https://1mg.com",
        specialties: ["Medicines", "Health tests", "Consultations", "Wellness"],
        deliveryTime: "Same day/Next day",
        paymentMethods: ["Cards", "UPI", "Wallets", "COD"],
        benefits: ["Medicine reminders", "Doctor consultations", "Health records"]
      },
      {
        name: "PharmEasy",
        category: "Healthcare",
        description: "Online medicine delivery platform",
        url: "https://pharmeasy.in",
        specialties: ["Medicines", "Healthcare products", "Lab tests"],
        deliveryTime: "Same day/Next day",
        paymentMethods: ["Cards", "UPI", "Wallets", "COD"],
        benefits: ["Prescription management", "Medicine reminder", "Health wallet"]
      },
      {
        name: "Ajio",
        category: "Fashion & Lifestyle",
        description: "Reliance's fashion platform with trendy collections",
        url: "https://ajio.com",
        specialties: ["Fashion", "Accessories", "Home decor", "Beauty"],
        deliveryTime: "3-7 days",
        paymentMethods: ["Cards", "UPI", "JioMoney", "EMI"],
        benefits: ["Exclusive brands", "Seasonal sales", "Easy exchanges"]
      },
      {
        name: "Meesho",
        category: "Social Commerce",
        description: "Social selling platform with affordable products",
        url: "https://meesho.com",
        specialties: ["Fashion", "Home & Kitchen", "Electronics", "Beauty"],
        deliveryTime: "3-7 days",
        paymentMethods: ["UPI", "Cards", "Cash on Delivery"],
        benefits: ["No shipping charges", "Supplier prices", "Return policy"]
      },
      {
        name: "Snapdeal",
        category: "Value Commerce",
        description: "Value-focused platform with competitive prices",
        url: "https://snapdeal.com",
        specialties: ["Electronics", "Fashion", "Home", "Sports", "Automotive"],
        deliveryTime: "2-7 days",
        paymentMethods: ["Cards", "UPI", "Wallets", "COD"],
        benefits: ["Daily deals", "Brand warranty", "Easy returns"]
      },
      {
        name: "Croma",
        category: "Electronics",
        description: "Electronics retail chain with online presence",
        url: "https://croma.com",
        specialties: ["Electronics", "Appliances", "Mobile phones", "Gaming"],
        deliveryTime: "1-3 days",
        paymentMethods: ["Cards", "UPI", "EMI", "COD"],
        benefits: ["Extended warranty", "Installation service", "Tech support"]
      },
      {
        name: "Lenskart",
        category: "Eyewear",
        description: "Online eyewear retailer with home eye checkup",
        url: "https://lenskart.com",
        specialties: ["Eyeglasses", "Sunglasses", "Contact lenses", "Eye checkup"],
        deliveryTime: "3-7 days",
        paymentMethods: ["Cards", "UPI", "EMI", "COD"],
        benefits: ["Home eye test", "3D try-on", "Free delivery"]
      },
      {
        name: "FirstCry",
        category: "Kids & Baby",
        description: "Baby and kids products specialist",
        url: "https://firstcry.com",
        specialties: ["Baby products", "Kids clothing", "Toys", "Maternity"],
        deliveryTime: "2-7 days",
        paymentMethods: ["Cards", "UPI", "EMI", "COD"],
        benefits: ["Expert advice", "Easy returns", "Loyalty rewards"]
      },
      {
        name: "Tata CLiQ",
        category: "Multi-category",
        description: "Tata Group's omnichannel marketplace",
        url: "https://tatacliq.com",
        specialties: ["Electronics", "Fashion", "Home", "Luxury brands"],
        deliveryTime: "1-7 days",
        paymentMethods: ["Cards", "UPI", "EMI", "COD"],
        benefits: ["Authentic products", "NeuCoins rewards", "Tata brand trust"]
      },
      {
        name: "BookMyShow",
        category: "Entertainment",
        description: "Movie tickets and event bookings",
        url: "https://bookmyshow.com",
        specialties: ["Movie tickets", "Events", "Plays", "Sports"],
        deliveryTime: "Instant booking",
        paymentMethods: ["Cards", "UPI", "Wallets", "Net banking"],
        benefits: ["Advance booking", "Seat selection", "Instant confirmation"]
      },
      {
        name: "Urban Ladder",
        category: "Furniture",
        description: "Premium furniture and home decor",
        url: "https://urbanladder.com",
        specialties: ["Furniture", "Home decor", "Furnishing", "Lighting"],
        deliveryTime: "7-21 days",
        paymentMethods: ["Cards", "UPI", "EMI", "COD"],
        benefits: ["Design consultation", "Installation service", "Warranty"]
      }
    ];

    // City categorization for platform availability
    const majorMetros = ['mumbai', 'delhi', 'new-delhi', 'bangalore', 'kolkata', 'chennai', 'pune', 'hyderabad'];
    const tier2Cities = ['goa', 'kochi', 'udaipur', 'pondicherry', 'dehradun', 'mussoorie', 'rishikesh'];
    const hillStations = ['mussoorie', 'dehradun', 'dharamkot', 'kasol', 'bir', 'darjeeling', 'tosh', 'wayanad'];
    const coastalCities = ['goa', 'mumbai', 'kochi', 'pondicherry', 'varkala', 'alleppey'];
    const remoteCities = ['ziro', 'tosh', 'dharamkot', 'kasol'];
    
    const cityLower = cityName.toLowerCase().replace(/\s+/g, '-');

    // Filter platforms based on city type and infrastructure
    let availablePlatforms = allPlatforms.filter(platform => {
      // All platforms available in major metros
      if (majorMetros.includes(cityLower)) {
        return true;
      }
      
      // Most platforms available in tier-2 cities, except ultra-fast delivery
      if (tier2Cities.includes(cityLower)) {
        if (platform.name === "Grofers (Blinkit)") {
          return false; // Ultra-fast delivery not available in smaller cities
        }
        return true;
      }
      
      // Limited platforms in hill stations and remote areas
      if (hillStations.includes(cityLower) || remoteCities.includes(cityLower)) {
        const limitedPlatforms = [
          "Amazon India", "Flipkart", "BigBasket", "1mg", "PharmEasy", 
          "JioMart", "Swiggy", "Zomato"
        ];
        return limitedPlatforms.includes(platform.name);
      }
      
      // Default for other cities - most platforms available
      return platform.name !== "Grofers (Blinkit)"; // Ultra-fast delivery limited
    });

    // Adjust delivery times based on city location
    availablePlatforms = availablePlatforms.map(platform => {
      let adjustedDeliveryTime = platform.deliveryTime;
      let citySpecificNote = "";

      if (majorMetros.includes(cityLower)) {
        // Keep original fast delivery times
        adjustedDeliveryTime = platform.deliveryTime;
      } else if (tier2Cities.includes(cityLower)) {
        if (platform.deliveryTime.includes("Same day")) {
          adjustedDeliveryTime = "Next day delivery";
        } else if (platform.deliveryTime.includes("8-15 minutes")) {
          adjustedDeliveryTime = "2-4 hours";
        }
      } else if (hillStations.includes(cityLower) || remoteCities.includes(cityLower)) {
        if (platform.deliveryTime.includes("Same day") || platform.deliveryTime.includes("Next day")) {
          adjustedDeliveryTime = "2-5 days";
        } else if (platform.deliveryTime.includes("30-45 minutes")) {
          adjustedDeliveryTime = "1-2 hours";
        } else if (platform.deliveryTime.includes("minutes")) {
          adjustedDeliveryTime = "Same day";
        }
      }

      // Add city-specific notes
      if (platform.name === "BigBasket" && coastalCities.includes(cityLower)) {
        citySpecificNote = "Fresh seafood and coconut products available";
      }
      if (platform.name === "Amazon India" && hillStations.includes(cityLower)) {
        citySpecificNote = "Mountain delivery available but weather dependent";
      }
      if (platform.name === "Swiggy" && hillStations.includes(cityLower)) {
        citySpecificNote = "Limited restaurant options, focus on local cuisine";
      }

      return {
        ...platform,
        deliveryTime: adjustedDeliveryTime,
        citySpecificNote
      };
    });

    return availablePlatforms;
  };

  // Get city-specific platforms
  const onlineShoppingPortals = getCitySpecificPlatforms(city.name);

  const getCityAvailabilityNote = (cityName: string) => {
    const cityLower = cityName.toLowerCase().replace(/\s+/g, '-');
    const majorMetros = ['mumbai', 'delhi', 'new-delhi', 'bangalore', 'kolkata', 'chennai', 'pune', 'hyderabad'];
    const tier2Cities = ['goa', 'kochi', 'udaipur', 'pondicherry', 'dehradun', 'mussoorie', 'rishikesh'];
    const hillStations = ['mussoorie', 'dehradun', 'dharamkot', 'kasol', 'bir', 'darjeeling', 'tosh', 'wayanad'];
    const remoteCities = ['ziro', 'tosh', 'dharamkot', 'kasol'];

    if (majorMetros.includes(cityLower)) {
      return "All major platforms available with fastest delivery options including 10-minute delivery services.";
    } else if (tier2Cities.includes(cityLower)) {
      return "Most platforms available with standard delivery. Ultra-fast delivery services may be limited.";
    } else if (hillStations.includes(cityLower) || remoteCities.includes(cityLower)) {
      return "Essential platforms available. Delivery times may be extended due to terrain and weather conditions.";
    }
    return "Most platforms available with standard delivery times for this region.";
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <ShoppingBag className="mr-3 h-8 w-8 text-vintage-gold" />
          Shopping & Markets in {city.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">

        {/* City-Specific Online Shopping Platforms */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Truck className="mr-2 h-5 w-5" />
            Online Shopping Platforms Available in {city.name}
          </h3>
          <div className="mb-4 p-3 bg-travel-blue/5 rounded-lg border border-travel-blue/20">
            <p className="text-sm text-muted-navy">
              <strong>{onlineShoppingPortals.length} platforms available</strong> with delivery to {city.name}. 
              Delivery times may vary based on location and weather conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {onlineShoppingPortals.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-travel-blue/20 hover:shadow-md transition-all duration-200 hover:border-vintage-gold/50">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="font-semibold text-travel-blue text-sm">{platform.name}</h5>
                    <span className="text-xs text-vintage-gold bg-vintage-gold/10 rounded-full px-2 py-1">
                      {platform.category}
                    </span>
                  </div>
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-vintage-gold hover:text-vintage-gold/80 text-xs flex items-center"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Visit
                  </a>
                </div>
                <p className="text-xs text-muted-navy mb-3 line-clamp-2">{platform.description}</p>
                
                {/* Specialties */}
                <div className="mb-2">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {platform.specialties.slice(0, 3).map((specialty, i) => (
                      <span key={i} className="text-xs bg-sage-green/10 text-sage-green rounded px-2 py-1">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center text-xs text-muted-navy mb-2">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{platform.deliveryTime}</span>
                </div>

                {/* City-specific note */}
                {(platform as any).citySpecificNote && (
                  <div className="text-xs text-travel-blue bg-travel-blue/10 rounded px-2 py-1 mb-2">
                    📍 {(platform as any).citySpecificNote}
                  </div>
                )}

                {/* Benefits */}
                <div className="text-xs text-sage-green bg-sage-green/10 rounded px-2 py-1">
                  💡 {platform.benefits.slice(0, 2).join(", ")}
                </div>
              </div>
            ))}
          </div>
          
          {/* City-specific platform availability note */}
          <div className="mt-4 p-3 bg-vintage-gold/5 rounded-lg border-l-4 border-vintage-gold">
            <p className="text-sm text-muted-navy">
              <strong>Platform Availability:</strong> {getCityAvailabilityNote(city.name)}
            </p>
          </div>
        </div>

        {/* Shopping Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <Star className="mr-2 h-4 w-4" />
            Smart Shopping Tips for {city.name}
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-navy">
            <ul className="space-y-1">
              <li>• Compare prices across multiple platforms before buying</li>
              <li>• Use digital payments for cashback and exclusive offers</li>
              <li>• Check for platform-specific membership benefits</li>
              <li>• Track delivery status and keep contact numbers handy</li>
            </ul>
            <ul className="space-y-1">
              <li>• Subscribe to newsletters for early access to sales</li>
              <li>• Use wishlist features to track price drops</li>
              <li>• Read reviews and ratings before purchasing</li>
              <li>• Keep alternative delivery addresses ready</li>
            </ul>
          </div>
        </div>
        {/* Traditional Markets & Local Shopping */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            Traditional Markets & Local Shopping
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              {
                name: "Main Bazaar Market",
                type: "Traditional Market",
                specialties: ["Textiles", "Spices", "Handicrafts", "Jewelry"],
                hours: "6:00 AM - 9:00 PM",
                bestTime: "Early morning or evening",
                priceRange: "₹50-5000 ($0.60-60)",
                bargaining: "Expected",
                tips: "Start negotiating at 50% of quoted price",
                location: "City center, near main temple",
                highlights: ["Authentic local products", "Best prices for bulk buying", "Cultural experience"]
              },
              {
                name: "Spice Market",
                type: "Specialty Market",
                specialties: ["Whole spices", "Tea", "Dry fruits", "Ayurvedic herbs"],
                hours: "7:00 AM - 8:00 PM",
                bestTime: "Morning for freshest selection",
                priceRange: "₹20-2000 ($0.24-24)",
                bargaining: "Moderate",
                tips: "Ask for small samples to taste quality",
                location: "Old city area",
                highlights: ["Organic options available", "Expert spice mixing", "Export quality products"]
              },
              {
                name: "Handicrafts Emporium",
                type: "Artisan Market",
                specialties: ["Handwoven textiles", "Pottery", "Wood carvings", "Paintings"],
                hours: "10:00 AM - 8:00 PM",
                bestTime: "Afternoon to interact with artisans",
                priceRange: "₹100-15000 ($1.20-180)",
                bargaining: "Limited",
                tips: "Look for authenticity certificates",
                location: "Cultural district",
                highlights: ["Direct from artisans", "Unique pieces", "Cultural authenticity"]
              }
            ].map((market, index) => (
              <div key={index} className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-sage-green">{market.name}</h4>
                    <Badge variant="outline" className="text-xs">{market.type}</Badge>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-navy">
                  <div><strong>Specialties:</strong> {market.specialties.join(", ")}</div>
                  <div><strong>Hours:</strong> {market.hours}</div>
                  <div><strong>Best Time:</strong> {market.bestTime}</div>
                  <div><strong>Price Range:</strong> {market.priceRange}</div>
                  <div><strong>Bargaining:</strong> {market.bargaining}</div>
                  <div><strong>Location:</strong> {market.location}</div>
                  <div className="bg-vintage-gold/10 rounded px-2 py-1 text-xs">
                    💡 {market.tips}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Shopping Centers */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Modern Shopping Centers & Malls
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                name: "City Center Mall",
                type: "Shopping Mall",
                brands: ["International", "National", "Local"],
                floors: 4,
                hours: "10:00 AM - 10:00 PM",
                priceRange: "₹500-50000 ($6-600)",
                bargaining: "No bargaining",
                tips: "Look for end-of-season sales",
                location: "CBD area",
                highlights: ["AC comfort", "Brand guarantees", "Fixed pricing"],
                facilities: ["Food court", "Parking", "ATM", "Rest areas"]
              },
              {
                name: "Electronics Hub",
                type: "Electronics Market",
                specialties: ["Mobile phones", "Laptops", "Accessories", "Repairs"],
                hours: "10:00 AM - 8:00 PM",
                bestTime: "Weekdays for better deals",
                priceRange: "₹200-100000 ($2.40-1200)",
                bargaining: "Moderate to high",
                tips: "Compare prices across multiple shops",
                location: "Commercial district",
                highlights: ["Latest tech", "Service centers nearby", "Competitive pricing"],
                facilities: ["Warranty service", "Tech support", "Installation"]
              }
            ].map((center, index) => (
              <div key={index} className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-travel-blue">{center.name}</h4>
                    <Badge variant="outline" className="text-xs">{center.type}</Badge>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-navy">
                  <div><strong>Hours:</strong> {center.hours}</div>
                  <div><strong>Price Range:</strong> {center.priceRange}</div>
                  <div><strong>Location:</strong> {center.location}</div>
                  {center.facilities && (
                    <div><strong>Facilities:</strong> {center.facilities.join(", ")}</div>
                  )}
                  <div className="bg-vintage-gold/10 rounded px-2 py-1 text-xs">
                    💡 {center.tips}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {center.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-sage-green/10 text-sage-green rounded px-2 py-1">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Categories & Pricing */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            Price Guide by Category
          </h3>
          <div className="space-y-6">
            {[
              {
                category: "Clothing & Textiles",
                items: [
                  { item: "Cotton kurtas", priceRange: "₹300-1500 ($3.60-18)", bestPlace: "Local boutiques" },
                  { item: "Silk sarees", priceRange: "₹2000-25000 ($24-300)", bestPlace: "Traditional markets" },
                  { item: "Branded jeans", priceRange: "₹1500-5000 ($18-60)", bestPlace: "Malls" },
                  { item: "Handloom fabrics", priceRange: "₹200-2000 per meter ($2.40-24)", bestPlace: "Weaver cooperatives" }
                ]
              },
              {
                category: "Spices & Food Items",
                items: [
                  { item: "Turmeric powder (1kg)", priceRange: "₹150-300 ($1.80-3.60)", bestPlace: "Spice markets" },
                  { item: "Premium tea (250g)", priceRange: "₹200-800 ($2.40-9.60)", bestPlace: "Tea estates" },
                  { item: "Organic honey (500g)", priceRange: "₹250-600 ($3-7.20)", bestPlace: "Organic stores" },
                  { item: "Dry fruits mix (1kg)", priceRange: "₹800-2000 ($9.60-24)", bestPlace: "Wholesale markets" }
                ]
              },
              {
                category: "Handicrafts & Souvenirs",
                items: [
                  { item: "Wooden sculptures", priceRange: "₹500-5000 ($6-60)", bestPlace: "Artisan workshops" },
                  { item: "Brass items", priceRange: "₹200-2000 ($2.40-24)", bestPlace: "Metal craft centers" },
                  { item: "Paintings", priceRange: "₹800-8000 ($9.60-96)", bestPlace: "Art galleries" },
                  { item: "Pottery items", priceRange: "₹100-1500 ($1.20-18)", bestPlace: "Potter villages" }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-travel-blue mb-3">{category.category}</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <div>
                        <div className="font-medium text-muted-navy">{item.item}</div>
                        <div className="text-xs text-gray-500">{item.bestPlace}</div>
                      </div>
                      <div className="font-semibold text-vintage-gold text-sm">{item.priceRange}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Shopping */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Star className="mr-2 h-5 w-5" />
            Seasonal Shopping Guide
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { season: "Festival Season (Oct-Nov)", discounts: "20-50%", bestFor: "Clothing, jewelry, home decor" },
              { season: "Wedding Season (Nov-Feb)", discounts: "10-30%", bestFor: "Silk, gold, gift items" },
              { season: "Summer Sale (Apr-Jun)", discounts: "30-60%", bestFor: "Electronics, branded clothing" },
              { season: "Monsoon (Jul-Sep)", discounts: "15-40%", bestFor: "Indoor items, books, crafts" }
            ].map((season, index) => (
              <div key={index} className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
                <h4 className="font-semibold text-vintage-gold mb-2">{season.season}</h4>
                <div className="space-y-1 text-sm text-muted-navy">
                  <div><strong>Discounts:</strong> {season.discounts}</div>
                  <div><strong>Best for:</strong> {season.bestFor}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </CardContent>
    </Card>
  );
}