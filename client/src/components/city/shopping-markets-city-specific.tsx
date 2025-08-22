import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, MapPin, Clock, Star, ExternalLink, CreditCard, Truck } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface ShoppingMarketsProps {
  city: CityWithDetails;
}

export default function ShoppingMarkets({ city }: ShoppingMarketsProps) {
  
  // City-specific traditional markets data
  const getCitySpecificMarkets = (cityName: string) => {
    const cityLower = cityName.toLowerCase().replace(/\s+/g, '-');
    
    const marketsByCity: Record<string, any[]> = {
      mumbai: [
        {
          name: "Crawford Market",
          type: "Historic Market",
          specialties: ["Fresh fruits", "Vegetables", "Spices", "Imported goods"],
          hours: "6:00 AM - 8:00 PM",
          bestTime: "Early morning for freshest produce",
          priceRange: "₹20-2000 ($0.24-24)",
          bargaining: "Expected",
          tips: "Famous for exotic fruits and spices, bargain for bulk purchases",
          location: "Fort, South Mumbai",
          highlights: ["Victorian architecture", "Wholesale rates", "150+ years old"]
        },
        {
          name: "Colaba Causeway",
          type: "Street Market",
          specialties: ["Fashion accessories", "Jewelry", "Antiques", "Handicrafts"],
          hours: "10:00 AM - 10:00 PM",
          bestTime: "Evening for street shopping experience",
          priceRange: "₹100-5000 ($1.20-60)",
          bargaining: "High",
          tips: "Perfect for tourist souvenirs, negotiate prices heavily",
          location: "Colaba, South Mumbai",
          highlights: ["Tourist hub", "Antique finds", "Late night shopping"]
        },
        {
          name: "Linking Road Market",
          type: "Fashion Market",
          specialties: ["Trendy clothes", "Shoes", "Bags", "Fashion accessories"],
          hours: "11:00 AM - 10:00 PM",
          bestTime: "Weekday evenings to avoid crowds",
          priceRange: "₹200-3000 ($2.40-36)",
          bargaining: "Moderate to High",
          tips: "Check quality before buying, popular for Bollywood fashion",
          location: "Bandra West",
          highlights: ["Trendy fashion", "Celebrity shopping", "Instagram worthy"]
        }
      ],
      delhi: [
        {
          name: "Chandni Chowk",
          type: "Historic Bazaar",
          specialties: ["Textiles", "Jewelry", "Spices", "Traditional wear"],
          hours: "9:00 AM - 9:00 PM",
          bestTime: "Morning to avoid afternoon crowds",
          priceRange: "₹50-10000 ($0.60-120)",
          bargaining: "Essential",
          tips: "Oldest market in Delhi, start at 40% of quoted price",
          location: "Old Delhi",
          highlights: ["400+ years old", "Mughal heritage", "Wholesale hub"]
        },
        {
          name: "Karol Bagh Market",
          type: "Shopping District",
          specialties: ["Electronics", "Clothing", "Home goods", "Footwear"],
          hours: "10:00 AM - 9:00 PM",
          bestTime: "Weekday afternoons",
          priceRange: "₹100-15000 ($1.20-180)",
          bargaining: "Expected",
          tips: "Best for wedding shopping and electronics",
          location: "Central Delhi",
          highlights: ["Wedding shopping hub", "Electronics paradise", "Metro connected"]
        }
      ],
      bangalore: [
        {
          name: "Commercial Street",
          type: "Shopping Street",
          specialties: ["Fashion", "Footwear", "Accessories", "Books"],
          hours: "10:00 AM - 9:00 PM",
          bestTime: "Evening for vibrant atmosphere",
          priceRange: "₹200-5000 ($2.40-60)",
          bargaining: "Moderate",
          tips: "Mix of brands and street shopping, great for casual wear",
          location: "Central Bangalore",
          highlights: ["IT crowd favorite", "Brand outlets", "Café culture"]
        },
        {
          name: "Chickpet Market",
          type: "Traditional Wholesale Market",
          specialties: ["Sarees", "Silk fabrics", "Traditional wear", "Jewelry"],
          hours: "9:00 AM - 8:00 PM",
          bestTime: "Morning for wholesale rates",
          priceRange: "₹300-25000 ($3.60-300)",
          bargaining: "High",
          tips: "Famous for silk sarees, bring cash for best deals",
          location: "Central Bangalore",
          highlights: ["Silk capital", "Wholesale prices", "Traditional crafts"]
        }
      ],
      goa: [
        {
          name: "Mapusa Market",
          type: "Weekly Market",
          specialties: ["Fresh seafood", "Spices", "Cashews", "Local produce"],
          hours: "6:00 AM - 2:00 PM (Friday only)",
          bestTime: "Early morning for best selection",
          priceRange: "₹20-1000 ($0.24-12)",
          bargaining: "Moderate",
          tips: "Famous Friday market, try local cashews and feni",
          location: "Mapusa, North Goa",
          highlights: ["Weekly tradition", "Local seafood", "Authentic Goan products"]
        },
        {
          name: "Anjuna Flea Market",
          type: "Hippie Market",
          specialties: ["Hippie jewelry", "Clothes", "Souvenirs", "Tibetan items"],
          hours: "9:00 AM - 6:00 PM (Wednesday only)",
          bestTime: "Late morning for full selection",
          priceRange: "₹100-2000 ($1.20-24)",
          bargaining: "Expected",
          tips: "Iconic hippie market, unique finds and vintage items",
          location: "Anjuna Beach",
          highlights: ["Hippie culture", "Unique crafts", "Beach vibes"]
        }
      ],
      rishikesh: [
        {
          name: "Rishikesh Main Market",
          type: "Spiritual Market",
          specialties: ["Yoga equipment", "Rudraksha beads", "Ayurvedic herbs", "Spiritual books"],
          hours: "8:00 AM - 9:00 PM",
          bestTime: "Evening after yoga sessions",
          priceRange: "₹50-5000 ($0.60-60)",
          bargaining: "Moderate",
          tips: "Perfect for yoga and meditation supplies",
          location: "Near Ram Jhula",
          highlights: ["Yoga capital", "Spiritual items", "Ganges proximity"]
        },
        {
          name: "Laxman Jhula Market",
          type: "Tourist Market",
          specialties: ["Handicrafts", "Gemstones", "Incense", "Tibetan goods"],
          hours: "9:00 AM - 10:00 PM",
          bestTime: "Evening with Ganga aarti",
          priceRange: "₹30-3000 ($0.36-36)",
          bargaining: "High",
          tips: "Combine with Ganga aarti for cultural experience",
          location: "Laxman Jhula area",
          highlights: ["Ganga views", "Spiritual atmosphere", "Evening aarti"]
        }
      ],
      kochi: [
        {
          name: "Mattancherry Spice Market",
          type: "Historic Spice Market",
          specialties: ["Cardamom", "Black pepper", "Ginger", "Turmeric"],
          hours: "9:00 AM - 6:00 PM",
          bestTime: "Morning for aromatic experience",
          priceRange: "₹100-2000 per kg ($1.20-24)",
          bargaining: "Moderate",
          tips: "500+ year old spice trade center, buy in bulk",
          location: "Fort Kochi",
          highlights: ["Historic spice route", "Authentic spices", "Colonial architecture"]
        },
        {
          name: "Marine Drive Shopping",
          type: "Waterfront Market",
          specialties: ["Seafood", "Coconut products", "Local snacks", "Souvenirs"],
          hours: "6:00 AM - 10:00 PM",
          bestTime: "Evening with backwater views",
          priceRange: "₹50-1500 ($0.60-18)",
          bargaining: "Low to Moderate",
          tips: "Fresh catch of the day, enjoy backwater sunset",
          location: "Marine Drive",
          highlights: ["Backwater views", "Fresh seafood", "Local experience"]
        }
      ],
      pondicherry: [
        {
          name: "Mission Street Market",
          type: "French Quarter Market",
          specialties: ["French pastries", "Local crafts", "Antiques", "Textiles"],
          hours: "8:00 AM - 8:00 PM",
          bestTime: "Morning for French breakfast experience",
          priceRange: "₹100-3000 ($1.20-36)",
          bargaining: "Limited",
          tips: "French colonial influence, try local handmade paper",
          location: "French Quarter",
          highlights: ["French heritage", "Colonial architecture", "Artisan products"]
        }
      ],
      darjeeling: [
        {
          name: "Darjeeling Tea Market",
          type: "Tea Trading Center",
          specialties: ["Darjeeling tea", "Himalayan honey", "Yak cheese", "Woolen goods"],
          hours: "9:00 AM - 7:00 PM",
          bestTime: "Afternoon tea tasting sessions",
          priceRange: "₹200-5000 ($2.40-60)",
          bargaining: "Low",
          tips: "World's finest tea, ask for tasting before buying",
          location: "Mall Road",
          highlights: ["World famous tea", "Himalayan views", "Colonial charm"]
        }
      ],
      tosh: [
        {
          name: "Tosh Village Market",
          type: "Mountain Village Market",
          specialties: ["Local apples", "Herbs", "Woolen clothes", "Basic supplies"],
          hours: "8:00 AM - 6:00 PM",
          bestTime: "Morning before trekking",
          priceRange: "₹20-1000 ($0.24-12)",
          bargaining: "Minimal",
          tips: "Limited supplies, stock up for treks, organic apples in season",
          location: "Village center",
          highlights: ["Mountain produce", "Trek supplies", "Local community"]
        }
      ],
      dharamkot: [
        {
          name: "Dharamkot Local Market",
          type: "Hill Station Market",
          specialties: ["Tibetan handicrafts", "Trekking gear", "Local produce", "Meditation supplies"],
          hours: "8:00 AM - 8:00 PM",
          bestTime: "Evening after meditation sessions",
          priceRange: "₹50-2000 ($0.60-24)",
          bargaining: "Moderate",
          tips: "Tibetan refugee community, authentic Tibetan goods",
          location: "Main village road",
          highlights: ["Tibetan culture", "Mountain views", "Spiritual items"]
        }
      ],
      wayanad: [
        {
          name: "Wayanad Spice Plantation Market",
          type: "Plantation Market",
          specialties: ["Coffee beans", "Cardamom", "Pepper", "Vanilla"],
          hours: "9:00 AM - 6:00 PM",
          bestTime: "Morning plantation tours",
          priceRange: "₹200-3000 ($2.40-36)",
          bargaining: "Low",
          tips: "Direct from plantations, organic certified products",
          location: "Various plantation sites",
          highlights: ["Organic spices", "Plantation fresh", "Western Ghats"]
        }
      ]
    };

    // Default markets for cities not specifically listed
    const defaultMarkets = [
      {
        name: `${cityName} Central Market`,
        type: "City Market",
        specialties: ["Local produce", "Textiles", "Handicrafts", "Spices"],
        hours: "7:00 AM - 8:00 PM",
        bestTime: "Morning for freshest items",
        priceRange: "₹30-2000 ($0.36-24)",
        bargaining: "Expected",
        tips: "Ask locals for best stalls and seasonal specialties",
        location: "City center",
        highlights: ["Local flavors", "Community atmosphere", "Authentic experience"]
      },
      {
        name: `${cityName} Handicrafts Bazaar`,
        type: "Artisan Market",
        specialties: ["Local crafts", "Traditional items", "Souvenirs", "Textiles"],
        hours: "10:00 AM - 8:00 PM",
        bestTime: "Afternoon to meet artisans",
        priceRange: "₹100-5000 ($1.20-60)",
        bargaining: "Moderate",
        tips: "Support local artisans, look for authenticity marks",
        location: "Cultural district",
        highlights: ["Local artisans", "Unique crafts", "Cultural heritage"]
      }
    ];

    return marketsByCity[cityLower] || defaultMarkets;
  };

  // City-specific modern shopping centers and malls
  const getCitySpecificModernShopping = (cityName: string) => {
    const cityLower = cityName.toLowerCase().replace(/\s+/g, '-');
    
    const modernShoppingByCity: Record<string, any[]> = {
      mumbai: [
        {
          name: "Phoenix Marketcity",
          type: "Premium Mall",
          brands: ["International", "National", "Luxury"],
          floors: 4,
          hours: "11:00 AM - 11:00 PM",
          priceRange: "₹1000-100000 ($12-1200)",
          bargaining: "No bargaining",
          tips: "Visit during weekdays to avoid crowds, great food court",
          location: "Kurla West",
          highlights: ["IMAX theater", "Premium brands", "Fine dining"],
          facilities: ["Parking", "Food court", "Cinema", "ATM", "Rest areas", "Play zone"]
        },
        {
          name: "Palladium Mall",
          type: "Luxury Shopping",
          brands: ["Luxury", "International", "Premium"],
          floors: 6,
          hours: "11:00 AM - 11:00 PM",
          priceRange: "₹2000-200000 ($24-2400)",
          bargaining: "No bargaining",
          tips: "High-end shopping destination, valet parking available",
          location: "Lower Parel",
          highlights: ["Luxury brands", "Premium dining", "Art installations"],
          facilities: ["Valet parking", "Concierge", "Premium lounges", "Fine dining"]
        }
      ],
      delhi: [
        {
          name: "Select City Walk",
          type: "Premium Mall",
          brands: ["International", "National", "Luxury"],
          floors: 6,
          hours: "10:00 AM - 11:00 PM",
          priceRange: "₹500-150000 ($6-1800)",
          bargaining: "No bargaining",
          tips: "Connected to Saket metro station, excellent food court",
          location: "Saket",
          highlights: ["Metro connected", "Premium brands", "Multiplex"],
          facilities: ["Metro connectivity", "Multiplex", "Food court", "Parking", "ATM"]
        },
        {
          name: "DLF Mall of India",
          type: "Mega Mall",
          brands: ["International", "National", "Budget to Luxury"],
          floors: 5,
          hours: "10:00 AM - 11:00 PM",
          priceRange: "₹300-100000 ($3.60-1200)",
          bargaining: "No bargaining",
          tips: "Largest mall in India, plan for full day visit",
          location: "Noida",
          highlights: ["Largest mall", "Adventure sports", "Ice skating"],
          facilities: ["Adventure zone", "Ice rink", "Multiplex", "Hypermarket", "Food court"]
        }
      ],
      bangalore: [
        {
          name: "UB City Mall",
          type: "Luxury Mall",
          brands: ["Luxury", "International", "Premium"],
          floors: 5,
          hours: "11:00 AM - 11:00 PM",
          priceRange: "₹1500-200000 ($18-2400)",
          bargaining: "No bargaining",
          tips: "Most expensive mall in Bangalore, rooftop dining available",
          location: "Vittal Mallya Road",
          highlights: ["Luxury brands", "Rooftop dining", "Art galleries"],
          facilities: ["Valet parking", "Fine dining", "Art gallery", "Premium services"]
        },
        {
          name: "Forum Mall Koramangala",
          type: "Popular Mall",
          brands: ["National", "International", "Mid-range"],
          floors: 6,
          hours: "10:00 AM - 10:00 PM",
          priceRange: "₹500-50000 ($6-600)",
          bargaining: "No bargaining",
          tips: "IT crowd favorite, great for tech accessories",
          location: "Koramangala",
          highlights: ["Tech hub", "Young crowd", "Good connectivity"],
          facilities: ["Multiplex", "Food court", "Electronics stores", "Books", "Parking"]
        }
      ],
      goa: [
        {
          name: "Caculo Mall",
          type: "Regional Mall",
          brands: ["National", "Regional", "Local"],
          floors: 3,
          hours: "10:00 AM - 10:00 PM",
          priceRange: "₹300-15000 ($3.60-180)",
          bargaining: "No bargaining",
          tips: "Only major mall in Goa, good for essentials",
          location: "Panaji",
          highlights: ["AC comfort", "Local brands", "Central location"],
          facilities: ["Food court", "Supermarket", "Parking", "ATM", "Pharmacy"]
        },
        {
          name: "Mapusa Market Complex",
          type: "Modern Market",
          brands: ["Local", "Regional", "National"],
          floors: 2,
          hours: "9:00 AM - 9:00 PM",
          priceRange: "₹200-8000 ($2.40-96)",
          bargaining: "Limited",
          tips: "Mix of traditional and modern shopping",
          location: "Mapusa",
          highlights: ["Local products", "Tourist friendly", "Cultural mix"],
          facilities: ["Parking", "Local cuisine", "Tourist information"]
        }
      ],
      rishikesh: [
        {
          name: "Omaxe Celebration Mall",
          type: "Small Town Mall",
          brands: ["National", "Regional", "Local"],
          floors: 3,
          hours: "10:00 AM - 9:00 PM",
          priceRange: "₹300-10000 ($3.60-120)",
          bargaining: "No bargaining",
          tips: "Only modern mall in Rishikesh, limited brands",
          location: "Dehradun Road",
          highlights: ["AC shopping", "Brand stores", "Food court"],
          facilities: ["Food court", "Parking", "ATM", "Multiplex"]
        }
      ],
      kochi: [
        {
          name: "Lulu Mall",
          type: "Mega Mall",
          brands: ["International", "National", "Regional"],
          floors: 5,
          hours: "10:00 AM - 11:00 PM",
          priceRange: "₹300-80000 ($3.60-960)",
          bargaining: "No bargaining",
          tips: "Largest mall in India by total floor area",
          location: "Edapally",
          highlights: ["Largest mall", "Ice skating", "Hypermarket"],
          facilities: ["Ice rink", "Multiplex", "Hypermarket", "Food court", "Gaming zone"]
        },
        {
          name: "Oberon Mall",
          type: "Premium Mall",
          brands: ["National", "International", "Premium"],
          floors: 7,
          hours: "10:00 AM - 10:00 PM",
          priceRange: "₹500-50000 ($6-600)",
          bargaining: "No bargaining",
          tips: "First mall in Kochi, well-established brands",
          location: "Edapally",
          highlights: ["Pioneer mall", "Established brands", "Good connectivity"],
          facilities: ["Multiplex", "Food court", "Bookstore", "Parking"]
        }
      ],
      pune: [
        {
          name: "Phoenix MarketCity",
          type: "Premium Mall",
          brands: ["International", "National", "Premium"],
          floors: 4,
          hours: "11:00 AM - 11:00 PM",
          priceRange: "₹500-75000 ($6-900)",
          bargaining: "No bargaining",
          tips: "Popular weekend destination, great entertainment",
          location: "Viman Nagar",
          highlights: ["Entertainment hub", "Premium brands", "Food diversity"],
          facilities: ["Multiplex", "Gaming zone", "Food court", "Hypermarket", "Parking"]
        }
      ],
      pondicherry: [
        {
          name: "Brookefields Mall",
          type: "Regional Mall",
          brands: ["National", "Regional", "Local"],
          floors: 3,
          hours: "10:00 AM - 10:00 PM",
          priceRange: "₹400-20000 ($4.80-240)",
          bargaining: "No bargaining",
          tips: "Only major mall in Puducherry, French influence",
          location: "Kurumbapet",
          highlights: ["French architecture", "AC comfort", "Local brands"],
          facilities: ["Food court", "Parking", "ATM", "Supermarket"]
        }
      ],
      darjeeling: [
        {
          name: "Hong Kong Market",
          type: "Multi-level Market",
          brands: ["Local", "Regional", "Import goods"],
          floors: 4,
          hours: "9:00 AM - 8:00 PM",
          priceRange: "₹100-8000 ($1.20-96)",
          bargaining: "Moderate",
          tips: "Tibetan and Nepali goods, warm clothing available",
          location: "Mall Road",
          highlights: ["Himalayan goods", "Warm clothing", "Local crafts"],
          facilities: ["Mountain views", "Local cuisine", "Warm clothing"]
        }
      ]
    };

    // Default modern shopping for cities not specifically listed
    const defaultModernShopping = [
      {
        name: `${cityName} Shopping Complex`,
        type: "Local Shopping Center",
        brands: ["National", "Regional", "Local"],
        floors: 2,
        hours: "10:00 AM - 9:00 PM",
        priceRange: "₹300-15000 ($3.60-180)",
        bargaining: "No bargaining",
        tips: "Main shopping center for branded goods",
        location: "City center",
        highlights: ["Brand stores", "AC comfort", "Fixed pricing"],
        facilities: ["Parking", "Food court", "ATM"]
      }
    ];

    return modernShoppingByCity[cityLower] || defaultModernShopping;
  };

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

    // Detailed city-specific platform availability
    const cityLower = cityName.toLowerCase().replace(/\s+/g, '-');
    
    const platformAvailability: Record<string, string[]> = {
      // Tier 1 Cities - All platforms available
      mumbai: ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "Grofers (Blinkit)", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Croma", "Lenskart", "FirstCry", "Tata CLiQ", "BookMyShow", "Urban Ladder"],
      delhi: ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "Grofers (Blinkit)", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Croma", "Lenskart", "FirstCry", "Tata CLiQ", "BookMyShow", "Urban Ladder"],
      'new-delhi': ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "Grofers (Blinkit)", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Croma", "Lenskart", "FirstCry", "Tata CLiQ", "BookMyShow", "Urban Ladder"],
      bangalore: ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "Grofers (Blinkit)", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Croma", "Lenskart", "FirstCry", "Tata CLiQ", "BookMyShow", "Urban Ladder"],
      pune: ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "Grofers (Blinkit)", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Croma", "Lenskart", "FirstCry", "Tata CLiQ", "BookMyShow"],
      hyderabad: ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "Grofers (Blinkit)", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Croma", "Lenskart", "FirstCry", "Tata CLiQ", "BookMyShow"],
      chennai: ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "Grofers (Blinkit)", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Croma", "Lenskart", "FirstCry", "Tata CLiQ", "BookMyShow"],
      kolkata: ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Croma", "Lenskart", "FirstCry", "Tata CLiQ", "BookMyShow"],
      
      // Tier 2 Cities - Most platforms, limited ultra-fast delivery
      goa: ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Lenskart", "FirstCry", "BookMyShow"],
      kochi: ["Amazon India", "Flipkart", "Myntra", "Nykaa", "BigBasket", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Lenskart", "FirstCry", "Tata CLiQ", "BookMyShow"],
      udaipur: ["Amazon India", "Flipkart", "Myntra", "BigBasket", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Ajio", "Meesho", "Snapdeal", "Lenskart", "BookMyShow"],
      pondicherry: ["Amazon India", "Flipkart", "Myntra", "BigBasket", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Meesho", "Snapdeal", "Lenskart"],
      dehradun: ["Amazon India", "Flipkart", "BigBasket", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Meesho", "Snapdeal"],
      
      // Hill Stations - Essential platforms only
      rishikesh: ["Amazon India", "Flipkart", "BigBasket", "Swiggy", "Zomato", "1mg", "PharmEasy", "JioMart"],
      mussoorie: ["Amazon India", "Flipkart", "BigBasket", "Swiggy", "1mg", "PharmEasy", "JioMart"],
      darjeeling: ["Amazon India", "Flipkart", "BigBasket", "1mg", "PharmEasy", "Swiggy"],
      dharamkot: ["Amazon India", "Flipkart", "1mg", "Swiggy"],
      tosh: ["Amazon India", "Flipkart", "1mg"],
      kasol: ["Amazon India", "Flipkart", "1mg"],
      bir: ["Amazon India", "Flipkart", "1mg", "PharmEasy"],
      wayanad: ["Amazon India", "Flipkart", "BigBasket", "1mg", "PharmEasy", "JioMart"],
      
      // Remote areas - Very limited
      ziro: ["Amazon India", "Flipkart", "1mg"],
      
      // Coastal cities
      varkala: ["Amazon India", "Flipkart", "BigBasket", "Swiggy", "Zomato", "1mg", "PharmEasy"],
      alleppey: ["Amazon India", "Flipkart", "BigBasket", "Swiggy", "Zomato", "1mg", "PharmEasy", "JioMart"]
    };
    
    // Get available platforms for the city
    const availablePlatformNames = platformAvailability[cityLower] || [
      "Amazon India", "Flipkart", "BigBasket", "JioMart", "Swiggy", "Zomato", "1mg", "PharmEasy", "Meesho"
    ];
    
    // Filter platforms based on city availability
    let availablePlatforms = allPlatforms.filter(platform => 
      availablePlatformNames.includes(platform.name)
    );

    // Adjust delivery times and add city-specific notes based on city location
    availablePlatforms = availablePlatforms.map(platform => {
      let adjustedDeliveryTime = platform.deliveryTime;
      let citySpecificNote = "";

      // Delivery time adjustments based on city infrastructure
      if (['mumbai', 'delhi', 'new-delhi', 'bangalore', 'pune', 'hyderabad', 'chennai'].includes(cityLower)) {
        // Keep original fast delivery times for tier 1 cities
        adjustedDeliveryTime = platform.deliveryTime;
      } else if (['goa', 'kochi', 'udaipur', 'pondicherry', 'dehradun', 'kolkata'].includes(cityLower)) {
        // Tier 2 cities - slightly extended times
        if (platform.deliveryTime.includes("Same day")) {
          adjustedDeliveryTime = "Next day delivery";
        } else if (platform.deliveryTime.includes("8-15 minutes")) {
          adjustedDeliveryTime = "2-4 hours";
        }
      } else if (['rishikesh', 'mussoorie', 'darjeeling', 'bir', 'wayanad', 'dharamkot', 'tosh', 'kasol', 'ziro'].includes(cityLower)) {
        // Hill stations and remote areas - extended delivery times
        if (platform.deliveryTime.includes("Same day") || platform.deliveryTime.includes("Next day")) {
          adjustedDeliveryTime = "2-5 days";
        } else if (platform.deliveryTime.includes("30-45 minutes")) {
          adjustedDeliveryTime = "1-2 hours";
        } else if (platform.deliveryTime.includes("minutes")) {
          adjustedDeliveryTime = "Same day";
        } else if (platform.deliveryTime.includes("1-3 days")) {
          adjustedDeliveryTime = "3-7 days";
        }
      }

      // Add city-specific notes based on geography and local specialties
      const coastalCities = ['goa', 'mumbai', 'kochi', 'pondicherry', 'varkala', 'alleppey'];
      const hillStations = ['rishikesh', 'mussoorie', 'darjeeling', 'dharamkot', 'tosh', 'kasol', 'bir', 'wayanad'];
      
      if (platform.name === "BigBasket" && coastalCities.includes(cityLower)) {
        citySpecificNote = "Fresh seafood and coconut products available";
      }
      if (platform.name === "Amazon India" && hillStations.includes(cityLower)) {
        citySpecificNote = "Mountain delivery available but weather dependent";
      }
      if (platform.name === "Swiggy" && hillStations.includes(cityLower)) {
        citySpecificNote = "Limited restaurant options, focus on local cuisine";
      }
      if (platform.name === "1mg" && cityLower === "ziro") {
        citySpecificNote = "Essential medicines only, limited healthcare products";
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

  const getCityAvailabilityNote = (cityName: string, platformCount: number) => {
    const cityLower = cityName.toLowerCase().replace(/\s+/g, '-');
    
    // Tier 1 Cities
    if (['mumbai', 'delhi', 'new-delhi', 'bangalore', 'pune', 'hyderabad', 'chennai'].includes(cityLower)) {
      return `All ${platformCount} major platforms available with fastest delivery options including 10-minute delivery services like Blinkit.`;
    }
    
    // Tier 2 Cities
    if (['goa', 'kochi', 'udaipur', 'pondicherry', 'dehradun', 'kolkata'].includes(cityLower)) {
      return `${platformCount} major platforms available. Standard delivery services with some same-day options.`;
    }
    
    // Hill Stations
    if (['rishikesh', 'mussoorie', 'darjeeling', 'bir', 'wayanad'].includes(cityLower)) {
      return `${platformCount} essential platforms available. Delivery may take 2-5 days due to mountain terrain.`;
    }
    
    // Remote Hill Areas
    if (['dharamkot', 'tosh', 'kasol', 'ziro'].includes(cityLower)) {
      return `${platformCount} basic platforms available. Limited delivery due to remote location and weather dependency.`;
    }
    
    // Coastal Cities
    if (['varkala', 'alleppey'].includes(cityLower)) {
      return `${platformCount} platforms available with good connectivity. Fresh seafood and local products readily delivered.`;
    }
    
    return `${platformCount} platforms available with standard delivery times for this region.`;
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

        {/* Traditional Markets & Local Shopping */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            Traditional Markets & Local Shopping
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {getCitySpecificMarkets(city.name).map((market, index) => (
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
            {getCitySpecificModernShopping(city.name).map((center, index) => (
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
              <strong>Platform Availability:</strong> {getCityAvailabilityNote(city.name, onlineShoppingPortals.length)}
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