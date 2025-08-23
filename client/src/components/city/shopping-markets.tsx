import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, MapPin, Clock, Star, ExternalLink, CreditCard, Truck } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface ShoppingMarketsProps {
  city: CityWithDetails;
}

export default function ShoppingMarkets({ city }: ShoppingMarketsProps) {
  const traditionalMarkets = [
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
  ];

  const modernShopping = [
    {
      name: "City Center Mall",
      type: "Shopping Mall",
      brands: ["International", "National", "Local"],
      floors: 4,
      facilities: ["Food court", "Cinema", "Gaming zone", "Parking"],
      hours: "10:00 AM - 10:00 PM",
      priceRange: "₹500-20000 ($6-240)",
      paymentMethods: ["Card", "UPI", "Cash", "Digital wallets"],
      highlights: ["AC comfort", "Fixed prices", "Brand warranties"]
    },
    {
      name: "Electronics Market",
      type: "Tech Hub",
      specialties: ["Smartphones", "Laptops", "Accessories", "Repairs"],
      hours: "10:00 AM - 9:00 PM",
      priceRange: "₹200-80000 ($2.40-960)",
      bargaining: "Moderate on accessories",
      tips: "Compare prices across 3-4 shops",
      highlights: ["Latest tech", "Service centers nearby", "Competitive pricing"]
    }
  ];

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
    
    // Specialized Platforms
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
    
    // Grocery & Daily Essentials
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
    
    // Electronics & Tech
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
      name: "Vijay Sales",
      category: "Electronics",
      description: "Electronics retailer with competitive prices",
      url: "https://vijaysales.com",
      specialties: ["Electronics", "Home appliances", "Mobile", "Computing"],
      deliveryTime: "2-5 days",
      paymentMethods: ["Cards", "UPI", "EMI", "COD"],
      benefits: ["Price matching", "Extended warranty", "Expert advice"]
    },
    
    // Books & Education
    {
      name: "Amazon Kindle",
      category: "Books & eBooks",
      description: "Digital books and audiobooks platform",
      url: "https://kindle.amazon.in",
      specialties: ["eBooks", "Audiobooks", "Magazines", "Comics"],
      deliveryTime: "Instant download",
      paymentMethods: ["Cards", "UPI", "Amazon Pay"],
      benefits: ["Unlimited reading", "Whispersync", "X-Ray feature"]
    },
    
    // Health & Medicine
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
    
    // Home & Furniture
    {
      name: "Urban Ladder",
      category: "Furniture",
      description: "Premium furniture and home decor",
      url: "https://urbanladder.com",
      specialties: ["Furniture", "Home decor", "Furnishing", "Lighting"],
      deliveryTime: "7-21 days",
      paymentMethods: ["Cards", "UPI", "EMI", "COD"],
      benefits: ["Design consultation", "Installation service", "Warranty"]
    },
    {
      name: "Pepperfry",
      category: "Furniture & Home",
      description: "Online furniture and home products marketplace",
      url: "https://pepperfry.com",
      specialties: ["Furniture", "Home decor", "Kitchenware", "Lighting"],
      deliveryTime: "7-15 days",
      paymentMethods: ["Cards", "UPI", "EMI", "COD"],
      benefits: ["Studio experience", "Installation support", "Return policy"]
    },
    
    // Food Delivery
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
    
    // Additional Popular Platforms
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
      name: "Paytm Mall",
      category: "Multi-category",
      description: "Paytm's e-commerce platform with cashbacks",
      url: "https://paytmmall.com",
      specialties: ["Electronics", "Fashion", "Home appliances", "Groceries"],
      deliveryTime: "1-7 days",
      paymentMethods: ["Paytm Wallet", "Cards", "UPI", "COD"],
      benefits: ["Paytm cashback", "Same-day delivery", "Easy returns"]
    },
    {
      name: "Reliance Digital",
      category: "Electronics",
      description: "Electronics and appliances from Reliance",
      url: "https://reliancedigital.in",
      specialties: ["Electronics", "Appliances", "Mobile phones", "Computing"],
      deliveryTime: "2-5 days",
      paymentMethods: ["Cards", "UPI", "EMI", "COD"],
      benefits: ["ResQ services", "Extended warranty", "Installation"]
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
      name: "Shoppers Stop",
      category: "Fashion & Lifestyle",
      description: "Premium fashion and lifestyle destination",
      url: "https://shoppersstop.com",
      specialties: ["Premium fashion", "Beauty", "Accessories", "Home"],
      deliveryTime: "3-7 days",
      paymentMethods: ["Cards", "UPI", "EMI", "COD"],
      benefits: ["First Citizen loyalty", "Personal shopping", "Premium brands"]
    },
    {
      name: "Bewakoof",
      category: "Fashion",
      description: "Trendy casual wear and accessories",
      url: "https://bewakoof.com",
      specialties: ["T-shirts", "Casual wear", "Accessories", "Plus size"],
      deliveryTime: "3-7 days",
      paymentMethods: ["Cards", "UPI", "Wallets", "COD"],
      benefits: ["Unique designs", "Plus size options", "Affordable fashion"]
    },
    {
      name: "Boat Lifestyle",
      category: "Electronics",
      description: "Audio and wearables from Indian brand",
      url: "https://boat-lifestyle.com",
      specialties: ["Headphones", "Earbuds", "Speakers", "Smartwatches"],
      deliveryTime: "3-7 days",
      paymentMethods: ["Cards", "UPI", "EMI", "COD"],
      benefits: ["Indian brand", "Warranty", "Latest designs"]
    }];

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
        if (platform.name === "Grofers (Blinkit)" || platform.name === "Zepto") {
          return false; // Ultra-fast delivery not available in smaller cities
        }
        return true;
      }
      
      // Limited platforms in hill stations and remote areas
      if (hillStations.includes(cityLower) || remoteCities.includes(cityLower)) {
        const limitedPlatforms = [
          "Amazon India", "Flipkart", "BigBasket", "1mg", "PharmEasy", 
          "JioMart", "Swiggy", "Zomato", "Amazon Kindle"
        ];
        return limitedPlatforms.includes(platform.name);
      }
      
      // Default for other cities - most platforms available
      return platform.name !== "Grofers (Blinkit)"; // Ultra-fast delivery limited
    });

    // Adjust delivery times based on city location
    availablePlatforms = availablePlatforms.map(platform => ({
      ...platform,
      deliveryTime: getAdjustedDeliveryTime(platform.deliveryTime, cityLower, majorMetros, tier2Cities, hillStations, remoteCities),
      citySpecificNote: getCitySpecificNote(platform.name, cityLower, coastalCities, hillStations)
    }));

    return availablePlatforms;
  };

  const getAdjustedDeliveryTime = (originalTime: string, cityLower: string, majorMetros: string[], tier2Cities: string[], hillStations: string[], remoteCities: string[]) => {
    if (majorMetros.includes(cityLower)) {
      return originalTime; // Original fast delivery times
    } else if (tier2Cities.includes(cityLower)) {
      if (originalTime.includes("Same day")) {
        return "Next day delivery";
      } else if (originalTime.includes("8-15 minutes")) {
        return "2-4 hours";
      }
      return originalTime;
    } else if (hillStations.includes(cityLower) || remoteCities.includes(cityLower)) {
      if (originalTime.includes("Same day") || originalTime.includes("Next day")) {
        return "2-5 days";
      } else if (originalTime.includes("30-45 minutes")) {
        return "1-2 hours";
      } else if (originalTime.includes("minutes")) {
        return "Same day";
      }
      return originalTime.replace(/(\d+)-(\d+) days/, (match, p1, p2) => `${parseInt(p1) + 2}-${parseInt(p2) + 3} days`);
    }
    return originalTime;
  };

  const getCitySpecificNote = (platformName: string, cityLower: string, coastalCities: string[], hillStations: string[]) => {
    if (platformName === "BigBasket" && coastalCities.includes(cityLower)) {
      return "Fresh seafood and coconut products available";
    }
    if (platformName === "Amazon India" && hillStations.includes(cityLower)) {
      return "Mountain delivery available but weather dependent";
    }
    if (platformName === "Swiggy" && hillStations.includes(cityLower)) {
      return "Limited restaurant options, focus on local cuisine";
    }
    if (platformName === "1mg" && cityLower === "ziro") {
      return "Essential medicines only, limited healthcare products";
    }
    return "";
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

  // City-specific price guide function
  const getCitySpecificPriceGuide = (cityName: string) => {
    console.log("getCitySpecificPriceGuide called with:", cityName);
    
    const cityLower = cityName.toLowerCase();
    
    if (cityLower === "ziro") {
      return [
        {
          category: "Tribal Handicrafts & Artifacts",
          items: [
            { item: "Apatani bamboo crafts", priceRange: "₹300-2000 ($3.60-24)", bestPlace: "Tribal artisan cooperatives" },
            { item: "Traditional cane baskets", priceRange: "₹200-1500 ($2.40-18)", bestPlace: "Local weavers" },
            { item: "Tribal jewelry (beads)", priceRange: "₹150-800 ($1.80-9.60)", bestPlace: "Village markets" },
            { item: "Apatani textiles", priceRange: "₹500-3000 ($6-36)", bestPlace: "Women's weaving groups" }
          ]
        },
        {
          category: "Natural & Organic Products",
          items: [
            { item: "Wild honey (500g)", priceRange: "₹400-1000 ($4.80-12)", bestPlace: "Tribal honey collectors" },
            { item: "Local rice varieties", priceRange: "₹100-400 ($1.20-4.80)", bestPlace: "Village farms" },
            { item: "Forest herbs & medicines", priceRange: "₹200-800 ($2.40-9.60)", bestPlace: "Traditional healers" },
            { item: "Bamboo shoot pickles", priceRange: "₹150-500 ($1.80-6)", bestPlace: "Local homes" }
          ]
        },
        {
          category: "Adventure & Survival Gear",
          items: [
            { item: "Basic trekking supplies", priceRange: "₹300-1500 ($3.60-18)", bestPlace: "Small local shops" },
            { item: "Rain protection gear", priceRange: "₹200-800 ($2.40-9.60)", bestPlace: "Practical stores" },
            { item: "Traditional fishing gear", priceRange: "₹100-600 ($1.20-7.20)", bestPlace: "Local fishermen" },
            { item: "Warm tribal blankets", priceRange: "₹800-2500 ($9.60-30)", bestPlace: "Handloom centers" }
          ]
        }
      ];
    }
    
    if (cityLower === "mumbai") {
      return [
        {
          category: "Bollywood & Entertainment",
          items: [
            { item: "Vintage Bollywood posters", priceRange: "₹200-2000 ($2.40-24)", bestPlace: "Lamington Road" },
            { item: "Film memorabilia", priceRange: "₹500-5000 ($6-60)", bestPlace: "Chor Bazaar" },
            { item: "Music instruments", priceRange: "₹1000-10000 ($12-120)", bestPlace: "Mohammed Ali Road" },
            { item: "Dance costumes", priceRange: "₹800-4000 ($9.60-48)", bestPlace: "Crawford Market" }
          ]
        },
        {
          category: "Street Food & Specialties",
          items: [
            { item: "Vada pav ingredients", priceRange: "₹50-200 ($0.60-2.40)", bestPlace: "Local vendors" },
            { item: "Mumbai street snacks", priceRange: "₹100-500 ($1.20-6)", bestPlace: "Mohammed Ali Road" },
            { item: "Bombay duck pickle", priceRange: "₹300-600 ($3.60-7.20)", bestPlace: "Crawford Market" },
            { item: "Alphonso mangoes (1kg)", priceRange: "₹400-1200 ($4.80-14.40)", bestPlace: "Dadar Market" }
          ]
        },
        {
          category: "Fashion & Textiles",
          items: [
            { item: "Designer kurtas", priceRange: "₹800-3000 ($9.60-36)", bestPlace: "Linking Road, Bandra" },
            { item: "Cotton sarees", priceRange: "₹1500-15000 ($18-180)", bestPlace: "Crawford Market" },
            { item: "Vintage clothes", priceRange: "₹500-2500 ($6-30)", bestPlace: "Chor Bazaar" },
            { item: "Branded accessories", priceRange: "₹300-2000 ($3.60-24)", bestPlace: "Palladium Mall" }
          ]
        }
      ];
    }
    
    if (cityLower === "bangalore") {
      return [
        {
          category: "Tech & Electronics",
          items: [
            { item: "Laptop accessories", priceRange: "₹500-3000 ($6-36)", bestPlace: "SP Road Electronics Market" },
            { item: "Gaming peripherals", priceRange: "₹800-8000 ($9.60-96)", bestPlace: "Forum Mall, Brigade Road" },
            { item: "Software & tech books", priceRange: "₹300-1500 ($3.60-18)", bestPlace: "Gangaram Book Bureau" },
            { item: "Mobile accessories", priceRange: "₹100-2000 ($1.20-24)", bestPlace: "National Market" }
          ]
        },
        {
          category: "Pub Culture & Lifestyle",
          items: [
            { item: "Craft beer merchandise", priceRange: "₹300-1200 ($3.60-14.40)", bestPlace: "Indiranagar breweries" },
            { item: "Band merchandise", priceRange: "₹500-2000 ($6-24)", bestPlace: "Commercial Street" },
            { item: "Coffee culture items", priceRange: "₹200-1000 ($2.40-12)", bestPlace: "Third Wave Coffee stores" },
            { item: "Used books", priceRange: "₹50-500 ($0.60-6)", bestPlace: "Blossoms Book House" }
          ]
        },
        {
          category: "Traditional Karnataka Items",
          items: [
            { item: "Mysore silk sarees", priceRange: "₹3000-25000 ($36-300)", bestPlace: "Chickpet Market" },
            { item: "Sandalwood products", priceRange: "₹200-5000 ($2.40-60)", bestPlace: "Cauvery Arts & Crafts" },
            { item: "Filter coffee powder (1kg)", priceRange: "₹400-800 ($4.80-9.60)", bestPlace: "VV Puram Food Street" },
            { item: "Ragi products", priceRange: "₹100-400 ($1.20-4.80)", bestPlace: "Organic stores, Jayanagar" }
          ]
        }
      ];
    }
    
    if (cityLower === "goa") {
      return [
        {
          category: "Beach & Portuguese Heritage",
          items: [
            { item: "Feni bottles", priceRange: "₹300-800 ($3.60-9.60)", bestPlace: "Government shops" },
            { item: "Cashew nuts (1kg)", priceRange: "₹800-1500 ($9.60-18)", bestPlace: "Local farms" },
            { item: "Azulejo tiles", priceRange: "₹500-2000 per piece ($6-24)", bestPlace: "Fontainhas, Panjim" },
            { item: "Portuguese pastries", priceRange: "₹50-200 ($0.60-2.40)", bestPlace: "Confeitaria 31 de Janeiro" }
          ]
        },
        {
          category: "Beach Lifestyle",
          items: [
            { item: "Beach wear", priceRange: "₹200-1500 ($2.40-18)", bestPlace: "Anjuna Flea Market" },
            { item: "Coconut oil (500ml)", priceRange: "₹150-400 ($1.80-4.80)", bestPlace: "Local coconut farms" },
            { item: "Seashell jewelry", priceRange: "₹100-800 ($1.20-9.60)", bestPlace: "Beach shacks" },
            { item: "Hammocks", priceRange: "₹800-2500 ($9.60-30)", bestPlace: "Hippie markets" }
          ]
        },
        {
          category: "Spices & Local Products",
          items: [
            { item: "Kokum syrup (500ml)", priceRange: "₹200-400 ($2.40-4.80)", bestPlace: "Local markets" },
            { item: "Goan spice mix", priceRange: "₹100-300 ($1.20-3.60)", bestPlace: "Mapusa Market" },
            { item: "Palm jaggery", priceRange: "₹80-200 ($0.96-2.40)", bestPlace: "Village cooperatives" },
            { item: "Goan chorizo", priceRange: "₹400-800 ($4.80-9.60)", bestPlace: "Local meat shops" }
          ]
        }
      ];
    }
    
    // Default fallback for other cities
    return [
      {
        category: "Local Specialties",
        items: [
          { item: "Regional handicrafts", priceRange: "₹200-2000 ($2.40-24)", bestPlace: "Local artisan shops" },
          { item: "Traditional textiles", priceRange: "₹500-5000 ($6-60)", bestPlace: "Main market" },
          { item: "Local spices & food", priceRange: "₹100-800 ($1.20-9.60)", bestPlace: "Spice markets" },
          { item: "Souvenir items", priceRange: "₹150-1000 ($1.80-12)", bestPlace: "Tourist areas" }
        ]
      },
      {
        category: "Clothing & Accessories",
        items: [
          { item: "Cotton wear", priceRange: "₹300-1500 ($3.60-18)", bestPlace: "Local boutiques" },
          { item: "Footwear", priceRange: "₹400-2000 ($4.80-24)", bestPlace: "Shoe markets" },
          { item: "Jewelry", priceRange: "₹500-5000 ($6-60)", bestPlace: "Jewelry stores" },
          { item: "Bags & accessories", priceRange: "₹200-1500 ($2.40-18)", bestPlace: "Fashion streets" }
        ]
      },
      {
        category: "Food & Beverages",
        items: [
          { item: "Local snacks", priceRange: "₹50-300 ($0.60-3.60)", bestPlace: "Street vendors" },
          { item: "Regional tea/coffee", priceRange: "₹200-600 ($2.40-7.20)", bestPlace: "Local plantations" },
          { item: "Packaged specialties", priceRange: "₹150-800 ($1.80-9.60)", bestPlace: "Grocery stores" },
          { item: "Sweets & desserts", priceRange: "₹100-500 ($1.20-6)", bestPlace: "Sweet shops" }
        ]
      }
    ];
  };

  const shoppingCategories = getCitySpecificPriceGuide(city.name);

  const shoppingSeason = [
    { season: "Festival Season (Oct-Nov)", discounts: "20-50%", bestFor: "Clothing, jewelry, home decor" },
    { season: "Wedding Season (Nov-Feb)", discounts: "10-30%", bestFor: "Silk, gold, gift items" },
    { season: "Summer Sale (Apr-Jun)", discounts: "30-60%", bestFor: "Electronics, branded clothing" },
    { season: "Monsoon (Jul-Sep)", discounts: "15-40%", bestFor: "Indoor items, books, crafts" }
  ];

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <ShoppingBag className="mr-3 h-8 w-8 text-vintage-gold" />
          Shopping & Markets
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Discover the best shopping experiences in {city.name}, from vibrant traditional markets to modern malls and specialty stores.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Traditional Markets */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            🏪 Traditional Markets & Bazaars
          </h3>
          <div className="grid gap-6">
            {traditionalMarkets.map((market, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-xl text-travel-blue">{market.name}</h4>
                    <div className="flex items-center text-muted-navy text-sm mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {market.location}
                    </div>
                  </div>
                  <Badge className="bg-sage-green/10 text-sage-green">{market.type}</Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-travel-blue mb-2">Specialties</h5>
                    <div className="flex flex-wrap gap-1">
                      {market.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-vintage-gold/10 text-vintage-gold">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-3 space-y-1 text-sm text-muted-navy">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {market.hours}
                      </div>
                      <div><strong>Best time:</strong> {market.bestTime}</div>
                      <div><strong>Price range:</strong> {market.priceRange}</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-warm-terracotta mb-2">Shopping Tips</h5>
                    <ul className="space-y-1 text-sm text-muted-navy">
                      <li>• <strong>Bargaining:</strong> {market.bargaining}</li>
                      <li>• {market.tips}</li>
                      {market.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Shopping */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            🏬 Modern Shopping Centers
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {modernShopping.map((venue, index) => (
              <div key={index} className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-travel-blue">{venue.name}</h4>
                  <Badge className="bg-travel-blue/10 text-travel-blue">{venue.type}</Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-navy">
                  <div><strong>Hours:</strong> {venue.hours}</div>
                  <div><strong>Price Range:</strong> {venue.priceRange}</div>
                  {venue.facilities && (
                    <div><strong>Facilities:</strong> {venue.facilities.join(", ")}</div>
                  )}
                  {venue.paymentMethods && (
                    <div><strong>Payment:</strong> {venue.paymentMethods.join(", ")}</div>
                  )}
                  {venue.bargaining && (
                    <div><strong>Bargaining:</strong> {venue.bargaining}</div>
                  )}
                </div>
                
                <div className="mt-3">
                  <h5 className="font-semibold text-sage-green text-sm mb-1">Highlights</h5>
                  <ul className="space-y-1 text-xs text-muted-navy">
                    {venue.highlights.map((highlight, i) => (
                      <li key={i}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Categories & Pricing */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            💰 Price Guide by Category - {city.name}
          </h3>
          <div className="space-y-6">
            {shoppingCategories.map((category, index) => (
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
            🗓️ Seasonal Shopping Guide
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {shoppingSeason.map((season, index) => (
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

        {/* City-Specific Online Shopping Platforms */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Truck className="mr-2 h-5 w-5" />
            🛒 Online Shopping Platforms in {city.name}
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

        {/* Shopping Etiquette & Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <Star className="mr-2 h-4 w-4" />
            Shopping Etiquette & Money-Saving Tips
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-navy">
            <ul className="space-y-1">
              <li>• Always negotiate in traditional markets - it's expected</li>
              <li>• Check for authenticity certificates for expensive items</li>
              <li>• Carry small denomination notes for easier transactions</li>
              <li>• Compare prices across 3-4 shops before buying</li>
              <li>• Shop during weekdays for better attention and deals</li>
            </ul>
            <ul className="space-y-1">
              <li>• Ask for GST bills for warranty and returns</li>
              <li>• Use digital payments for cashback and offers</li>
              <li>• Buy in bulk for better prices on spices and grains</li>
              <li>• Follow local shopping apps for exclusive discounts</li>
              <li>• Avoid shopping during major festivals due to price surge</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}