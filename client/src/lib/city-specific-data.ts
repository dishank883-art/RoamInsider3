export interface CitySpecificData {
  moneyTips: string[];
  streetFood: Array<{
    item: string;
    price: string;
  }>;
  wifiHotspots: {
    cafes: Array<{
      name: string;
      speed: string;
      quality: string;
    }>;
    publicSpaces: Array<{
      name: string;
      speed: string;
      quality: string;
    }>;
  };
  coworkingSpaces: Array<{
    name: string;
    address: string;
    pricing: string;
    speedMbps: number;
    amenities: string[];
  }>;
  localExperienceTips: string[];
  transportationTips: string[];
  climateImpact: {
    workingConditions: string[];
    healthConsiderations: string[];
    equipmentNeeds: string[];
    bestMonths: string;
  };
  insiderHacks: {
    accommodation: string[];
    food: string[];
    transport: string[];
  };
  secretSpots: Array<{
    name: string;
    location: string;
    tip: string;
    coordinates?: string;
    website?: string;
    timing?: string;
  }>;
}

export const citySpecificData: Record<string, CitySpecificData> = {
  pune: {
    moneyTips: [
      "Share PG accommodation in Koregaon Park or Baner for ₹12,000-15,000/month",
      "Eat at Marathi thali restaurants for authentic meals at ₹100-150",
      "Use PMPML bus passes for unlimited local travel (₹400/month)",
      "Shop at wholesale markets in Camp area for groceries",
      "Take advantage of student city discounts with college ID proximity"
    ],
    streetFood: [
      { item: "Misal Pav", price: "₹40-60 ($0.50)" },
      { item: "Vada Pav", price: "₹15-25 ($0.20)" },
      { item: "Puran Poli", price: "₹30-50 ($0.40)" },
      { item: "Bhel Puri", price: "₹25-40 ($0.30)" },
      { item: "Pav Bhaji", price: "₹50-80 ($0.60-1)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Café Coffee Day (Multiple locations)", speed: "25-40 Mbps", quality: "Good" },
        { name: "Blue Tokai Coffee Roasters", speed: "50-80 Mbps", quality: "Excellent" },
        { name: "The Flour Works", speed: "30-50 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Phoenix MarketCity", speed: "40-70 Mbps", quality: "Excellent" },
        { name: "Pune Airport", speed: "60-100 Mbps", quality: "Excellent" },
        { name: "Pune Metro Stations", speed: "15-30 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "91springboard Pune",
        address: "Koregaon Park, Pune",
        pricing: "₹8,500/month",
        speedMbps: 100,
        amenities: ["Premium Location", "Events", "Networking", "Meeting Rooms"]
      },
      {
        name: "Workafella Pune",
        address: "Baner, Pune",
        pricing: "₹7,200/month",
        speedMbps: 90,
        amenities: ["Modern Design", "Cafe", "Gaming Zone", "24/7 Access"]
      },
      {
        name: "IndiQube Pune",
        address: "Viman Nagar, Pune",
        pricing: "₹6,800/month",
        speedMbps: 85,
        amenities: ["Corporate Grade", "Meeting Rooms", "Cafeteria", "Parking"]
      }
    ],
    localExperienceTips: [
      "Visit Shaniwar Wada early morning to avoid crowds and get better photos",
      "Take heritage walks in old Pune to understand Peshwa history",
      "Explore Koregaon Park for trendy cafes and international cuisine",
      "Attend cultural events at Balgandharva Theatre for authentic Marathi performances",
      "Join weekend treks to nearby Sahyadri mountains organized by local groups",
      "Experience Pune's famous Ganesh Chaturthi celebrations in August/September"
    ],
    transportationTips: [
      "Use Pune Metro Purple Line connecting PCMC to Swargate - covers IT hubs",
      "Book Rapido bikes for short distances during peak hours (₹25-50)",
      "PMPML Rainbow BRTS buses connect all major areas - get monthly pass ₹400",
      "Avoid Baner-Pashan Link Road during 8-10 AM and 7-9 PM rush",
      "Share auto-rickshaws from IT parks - negotiate group rates ₹100-150",
      "Rent monthly bikes in Baner/Hinjewadi for IT corridor commute (₹2,000-3,000)"
    ],
    climateImpact: {
      workingConditions: [
        "Monsoon season (June-September): Indoor coworking preferred due to heavy rains",
        "Summer heat (March-May): Air conditioning essential for home offices",
        "Pleasant winters (November-February): Perfect for outdoor meetings and balcony work"
      ],
      healthConsiderations: [
        "Air quality drops during winter months - consider air purifiers",
        "Monsoon brings dengue/malaria risk - use mosquito protection",
        "Stay hydrated during hot summers - temperature reaches 42°C"
      ],
      equipmentNeeds: [
        "Monsoon backup power solutions for frequent outages",
        "Dehumidifier for equipment protection during rains",
        "Air conditioning crucial for summer productivity"
      ],
      bestMonths: "November to February for optimal working conditions"
    },
    insiderHacks: {
      accommodation: [
        "Stay in Kothrud or Karve Nagar for better value than Koregaon Park",
        "Book serviced apartments for monthly stays - often cheaper than hotels",
        "Look for 'paying guest' accommodations near IT hubs for networking",
        "Negotiate monthly rates in Airbnb for 30+ day stays",
        "Consider co-living spaces like Zolo or Stanza Living for all-inclusive pricing"
      ],
      food: [
        "Eat at local 'katta' joints for authentic Pune street food experience",
        "Visit Goodluck Cafe for famous bun maska and Irani chai",
        "Try Marathi thali at Shabree or Malaka Spice for regional specialties",
        "Shop at Mahatma Phule Market for fresh produce at wholesale prices",
        "Order from Zomato/Swiggy during off-peak hours for better discounts"
      ],
      transport: [
        "Use Pune Metro for fastest travel between major areas",
        "Book Ola/Uber Share for cost-effective rides during peak hours",
        "Rent monthly bikes from Bounce or Yulu for ₹2,500-3,000",
        "Use PMPML Chalo app for real-time bus tracking and digital payments",
        "Share intercity travel costs with nomads through WhatsApp groups"
      ]
    },
    secretSpots: [
      {
        name: "Quieter Coworking at Symbiosis",
        location: "Lavale",
        tip: "Access library and campus cafes for peaceful work environment - visitor pass available",
        timing: "9 AM - 6 PM"
      },
      {
        name: "Hidden Sunset Point",
        location: "Sinhagad Fort",
        tip: "Trek during weekdays for empty fort and stunning valley views without crowds",
        coordinates: "18.366°N, 73.755°E"
      },
      {
        name: "Local Food Market",
        location: "Mandai Market",
        tip: "Visit early morning (6-8 AM) for wholesale vegetable prices and fresh selection",
        timing: "6 AM - 10 AM"
      }
    ]
  },
  udaipur: {
    moneyTips: [
      "Stay in old city areas like Jagdish Chowk for authentic experience at lower costs",
      "Eat at local dhabas outside tourist areas for meals under ₹100",
      "Use local buses and shared autos instead of tourist taxis",
      "Shop at Hathi Pol and Bada Bazaar for souvenirs at local prices",
      "Visit during shoulder season (Mar-May) for 40% lower accommodation rates"
    ],
    streetFood: [
      { item: "Dal Baati Churma", price: "₹80-120 ($1-1.5)" },
      { item: "Kachoris", price: "₹20-30 ($0.25)" },
      { item: "Pyaaz Kachori", price: "₹25-35 ($0.30)" },
      { item: "Mirchi Bada", price: "₹15-25 ($0.20)" },
      { item: "Rajasthani Thali", price: "₹150-250 ($2-3)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Café Edelweiss", speed: "35-50 Mbps", quality: "Good" },
        { name: "Jheel's Ginger Coffee Bar", speed: "25-40 Mbps", quality: "Good" },
        { name: "Lake Palace Hotel Café", speed: "40-60 Mbps", quality: "Excellent" }
      ],
      publicSpaces: [
        { name: "City Palace Complex", speed: "20-35 Mbps", quality: "Fair" },
        { name: "Maharana Pratap Airport", speed: "50-80 Mbps", quality: "Excellent" },
        { name: "Celebration Mall", speed: "30-50 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Lake Palace Co-work",
        address: "City Palace Road, Udaipur",
        pricing: "₹4,200/month",
        speedMbps: 60,
        amenities: ["Lake Views", "Heritage Setting", "Royal Ambiance", "Meeting Rooms"]
      },
      {
        name: "Udaipur Startup Hub",
        address: "Surajpole, Udaipur",
        pricing: "₹3,500/month",
        speedMbps: 50,
        amenities: ["Local Community", "Tourism Focus", "Cultural Events", "Mentorship"]
      }
    ],
    localExperienceTips: [
      "Take boat rides on Lake Pichola during sunset for magical royal city views",
      "Explore City Palace complex early morning before tourist buses arrive",
      "Attend traditional Rajasthani cultural shows at heritage hotels",
      "Visit local miniature painting workshops for authentic art experiences",
      "Take heritage walks through narrow lanes of old city with local guides",
      "Experience royal lifestyle at heritage hotels during happy hours"
    ],
    insiderHacks: {
      accommodation: [
        "Stay in heritage havelis converted to guesthouses for authentic experience",
        "Book palace hotels during off-season for royal experience at lower rates",
        "Look for rooftop accommodations overlooking City Palace for best views",
        "Negotiate long-term stays at family-run guesthouses near Jagdish Temple",
        "Consider lake-facing rooms for sunrise views worth the extra cost"
      ],
      food: [
        "Eat at local 'thali' places in old city for authentic Rajasthani cuisine",
        "Try street food at Chetak Circle for local flavors away from tourist areas",
        "Visit Nathdwara for famous pedas and traditional sweets",
        "Book cooking classes at heritage hotels to learn royal Rajasthani recipes",
        "Shop for spices at local markets rather than tourist spice shops"
      ],
      transport: [
        "Use shared autos and city buses for economical city travel",
        "Rent bikes to explore countryside and nearby villages independently",
        "Book private taxis for day trips to Chittorgarh and Kumbhalgarh",
        "Use app-based rides during early morning and late evening for better rates",
        "Join group tours for cost-effective visits to multiple attractions"
      ]
    },
    secretSpots: [
      {
        name: "Hidden Sunset Viewpoint",
        location: "Monsoon Palace Road",
        tip: "Stop halfway up the hill for panoramic city views without entry fee",
        coordinates: "24.629°N, 73.682°E"
      },
      {
        name: "Local Art District",
        location: "Shilpgram",
        tip: "Visit during non-festival times to interact directly with artisans at their workshops",
        timing: "10 AM - 5 PM"
      },
      {
        name: "Peaceful Lake Access",
        location: "Ambrai Ghat",
        tip: "Visit early morning (6-7 AM) for photography without crowds and better light",
        timing: "6 AM - 8 AM"
      }
    ]
  },
  gangtok: {
    moneyTips: [
      "Stay in local homestays around MG Marg for authentic Sikkimese experience",
      "Eat at local momos shops and Tibetan restaurants for hearty meals under ₹150",
      "Use shared jeeps for intercity travel - much cheaper than private taxis",
      "Shop at local markets like Lal Bazaar instead of tourist shops on MG Marg",
      "Book permits and tours through local agencies rather than hotel concierges"
    ],
    streetFood: [
      { item: "Momos (Steamed/Fried)", price: "₹60-100 ($0.70-1.20)" },
      { item: "Thukpa (Noodle Soup)", price: "₹80-120 ($1-1.5)" },
      { item: "Gundruk Soup", price: "₹40-60 ($0.50)" },
      { item: "Sel Roti", price: "₹20-30 ($0.25)" },
      { item: "Tibetan Bread", price: "₹25-40 ($0.30)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Café Live & Loud", speed: "25-35 Mbps", quality: "Good" },
        { name: "The Coffee Shop MG Marg", speed: "20-30 Mbps", quality: "Fair" },
        { name: "Hotel Tashi Delek Café", speed: "30-45 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "MG Marg Pedestrian Area", speed: "15-25 Mbps", quality: "Fair" },
        { name: "Palzor Stadium Area", speed: "20-35 Mbps", quality: "Good" },
        { name: "Government Buildings WiFi", speed: "25-40 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Mountain Co-work",
        address: "MG Marg, Gangtok",
        pricing: "₹3,500/month",
        speedMbps: 50,
        amenities: ["Mountain Views", "Meeting Room", "Cafe", "Heating"]
      },
      {
        name: "Sikkim Innovation Hub",
        address: "Ranipool, Gangtok",
        pricing: "₹2,800/month",
        speedMbps: 45,
        amenities: ["Government Support", "Mentorship", "Events", "Tech Focus"]
      }
    ],
    localExperienceTips: [
      "Visit monasteries during prayer times for authentic spiritual experiences",
      "Take the cable car early morning for clear Himalayan mountain views",
      "Explore Tibetan refugee camps to understand local culture and history",
      "Join local trekking groups for safer and more informative mountain adventures",
      "Attend traditional festivals at monasteries for cultural immersion",
      "Learn basic Nepali phrases - locals appreciate the effort greatly"
    ],
    insiderHacks: {
      accommodation: [
        "Stay with local families for authentic cultural exchange and lower costs",
        "Book government tourism accommodations for clean, affordable stays",
        "Look for monastery guesthouses for peaceful, spiritual environments",
        "Negotiate weekly/monthly rates at family-run hotels near MG Marg",
        "Consider Pelling or Namchi for cheaper alternatives with better mountain views"
      ],
      food: [
        "Eat at local Tibetan restaurants for authentic cuisine at honest prices",
        "Try chang (local barley beer) at traditional establishments",
        "Buy organic vegetables directly from local farmers in nearby villages",
        "Visit local kitchens during festivals for traditional feast experiences",
        "Learn to make momos from local families - often offer cooking classes"
      ],
      transport: [
        "Use shared jeeps to Darjeeling and nearby towns for budget travel",
        "Book helicopter rides to remote areas during clear weather windows",
        "Rent bikes for exploring nearby villages and tea gardens",
        "Join shared taxi services to Bagdogra airport booked in advance",
        "Use local bus services for very economical travel to surrounding areas"
      ]
    },
    secretSpots: [
      {
        name: "Hidden Monastery View",
        location: "Enchey Monastery Trail",
        tip: "Hike behind monastery for panoramic views of entire Gangtok valley",
        coordinates: "27.340°N, 88.630°E"
      },
      {
        name: "Local Hot Springs",
        location: "Reshi",
        tip: "Natural hot springs 78km from Gangtok - perfect for relaxation after treks",
        timing: "Best visited Oct-Mar"
      },
      {
        name: "Authentic Tibetan Quarter",
        location: "Tibet Road",
        tip: "Visit Tibetan refugee market for genuine handicrafts and traditional foods",
        timing: "9 AM - 6 PM"
      }
    ]
  },
  mcleodganj: {
    moneyTips: [
      "Stay in Dharamkot for better views and lower prices than McLeodganj center",
      "Eat at Tibetan refugee restaurants for authentic meals at local prices",
      "Use local buses to Dharamshala instead of expensive taxis",
      "Shop at Tibetan markets for genuine handicrafts at fair prices",
      "Join meditation courses at monasteries - often free or donation-based"
    ],
    streetFood: [
      { item: "Tibetan Momos", price: "₹80-120 ($1-1.5)" },
      { item: "Thukpa", price: "₹100-150 ($1.20-1.80)" },
      { item: "Tibetan Bread", price: "₹40-60 ($0.50)" },
      { item: "Butter Tea", price: "₹30-50 ($0.40)" },
      { item: "Shabhaley (Meat Pie)", price: "₹60-90 ($0.70-1.10)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Common Ground Café", speed: "30-45 Mbps", quality: "Good" },
        { name: "Tibet Kitchen", speed: "20-35 Mbps", quality: "Fair" },
        { name: "Moonpeak Espresso", speed: "25-40 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Main Square McLeodganj", speed: "15-25 Mbps", quality: "Fair" },
        { name: "Library of Tibetan Works", speed: "35-50 Mbps", quality: "Excellent" },
        { name: "Tibetan Reception Centre", speed: "20-30 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Tibet World Co-work",
        address: "Temple Road, McLeodganj",
        pricing: "₹3,000/month",
        speedMbps: 45,
        amenities: ["Mountain Views", "Meditation Room", "Tibetan Cafe", "Prayer Wheels"]
      },
      {
        name: "Himalaya Co-working",
        address: "Bhagsu Road, McLeodganj",
        pricing: "₹2,500/month",
        speedMbps: 40,
        amenities: ["Spiritual Atmosphere", "Quiet Zones", "Tea Garden", "Library Access"]
      }
    ],
    localExperienceTips: [
      "Attend Dalai Lama's teachings when he's in residence - check schedule online",
      "Trek to Triund for stunning Dhauladhar mountain range views",
      "Visit Tibetan Institute of Performing Arts for authentic cultural shows",
      "Explore Bhagsu waterfall early morning for peaceful meditation spots",
      "Join volunteer programs at Tibetan refugee centers for meaningful experiences",
      "Learn Tibetan language basics at local institutes offering free classes"
    ],
    insiderHacks: {
      accommodation: [
        "Stay in Dharamkot for mountain views and lower prices than McLeodganj",
        "Book monastery guesthouses for spiritual ambiance and budget rates",
        "Look for long-term yoga retreat accommodations with meal packages",
        "Consider homestays with Tibetan families for cultural immersion",
        "Negotiate monthly rates at guesthouses popular with spiritual seekers"
      ],
      food: [
        "Eat at Tibetan refugee-run restaurants for authentic and affordable meals",
        "Try traditional Tibetan butter tea and tsampa for authentic experience",
        "Visit local bakeries for fresh Tibetan bread and pastries",
        "Join community kitchens at meditation centers for shared meals",
        "Shop at weekend markets for fresh organic produce from local farmers"
      ],
      transport: [
        "Use local buses between Dharamshala and McLeodganj for ₹10 rides",
        "Share taxis to Delhi or Chandigarh with other travelers",
        "Rent bikes for exploring nearby villages and monasteries",
        "Join trekking groups for shared transportation to trail heads",
        "Use app-based rides during monsoon when local transport is limited"
      ]
    },
    secretSpots: [
      {
        name: "Secret Meditation Cave",
        location: "Above Dharamkot",
        tip: "Hike 45 minutes above village to natural caves used by meditators",
        coordinates: "32.254°N, 76.325°E"
      },
      {
        name: "Hidden Waterfall",
        location: "Beyond Bhagsu Falls",
        tip: "Continue hiking 30 minutes past main waterfall for secluded pools",
        timing: "Best after monsoons (Sep-Nov)"
      },
      {
        name: "Tibetan Handicraft Center",
        location: "Kotwali Bazaar",
        tip: "Visit refugee handicraft center for authentic items at wholesale prices",
        timing: "10 AM - 5 PM, closed Sundays"
      }
    ]
  },
  shillong: {
    moneyTips: [
      "Stay in local family accommodations in Laitumkhrah area for authentic Khasi experience",
      "Eat at local dhabas and Khasi restaurants for meals under ₹100",
      "Use shared Sumo vehicles for intercity travel - much cheaper than private cars",
      "Shop at Bara Bazaar and Iewduh Market for local products at genuine prices",
      "Attend free music concerts and festivals - Shillong has vibrant music scene"
    ],
    streetFood: [
      { item: "Jadoh (Rice dish)", price: "₹50-80 ($0.60-1)" },
      { item: "Tungrymbai", price: "₹40-60 ($0.50)" },
      { item: "Pumaloi (Rice cake)", price: "₹20-30 ($0.25)" },
      { item: "Dohneiiong (Pork curry)", price: "₹80-120 ($1-1.5)" },
      { item: "Pukhlein (Rice flour snack)", price: "₹25-40 ($0.30)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Café Shillong", speed: "40-60 Mbps", quality: "Excellent" },
        { name: "ML05 Café", speed: "35-50 Mbps", quality: "Good" },
        { name: "Café Hendrix", speed: "30-45 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Police Bazaar Area", speed: "25-40 Mbps", quality: "Good" },
        { name: "Umroi Airport", speed: "50-80 Mbps", quality: "Excellent" },
        { name: "NEHU Campus", speed: "60-100 Mbps", quality: "Excellent" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Shillong Co-working Hub",
        address: "Police Bazaar, Shillong",
        pricing: "₹4,500/month",
        speedMbps: 65,
        amenities: ["Music Room", "Recording Studio", "Hill Views", "24/7 Access"]
      },
      {
        name: "NE Digital Hub",
        address: "Laitumkhrah, Shillong",
        pricing: "₹3,800/month",
        speedMbps: 55,
        amenities: ["Tech Focus", "Startup Events", "Mentorship", "Conference Rooms"]
      }
    ],
    localExperienceTips: [
      "Explore living root bridges in nearby Meghalaya villages with local guides",
      "Attend live music performances at local venues - Shillong is India's rock capital",
      "Visit during autumn months for clearest views of surrounding hills",
      "Learn about Khasi matrilineal culture through homestay experiences",
      "Join local trekking groups for safer exploration of caves and waterfalls",
      "Experience traditional Khasi festivals and ceremonies when possible"
    ],
    insiderHacks: {
      accommodation: [
        "Stay with Khasi families for authentic cultural immersion and lower costs",
        "Book homestays in outlying villages for peaceful mountain experiences",
        "Look for accommodations near NEHU for student area pricing",
        "Consider Cherrapunji or Mawlynnong for unique village experiences",
        "Negotiate long-term rates at guesthouses popular with musicians and artists"
      ],
      food: [
        "Try traditional Khasi cuisine at local homes - often offer cooking experiences",
        "Visit local markets for organic vegetables and traditional Khasi ingredients",
        "Eat at student hangouts near universities for authentic and cheap meals",
        "Sample local rice beer (kyiad) at traditional establishments",
        "Join community feasts during festivals for authentic cultural food experiences"
      ],
      transport: [
        "Use shared Sumo services for travel to Guwahati and other NE cities",
        "Rent bikes for exploring nearby villages and natural attractions",
        "Join group tours for visiting living root bridges and remote waterfalls",
        "Use local buses for very economical travel within Meghalaya",
        "Share costs with other travelers for private vehicle hire to remote areas"
      ]
    },
    secretSpots: [
      {
        name: "Hidden Viewpoint",
        location: "Shillong Peak Road",
        tip: "Stop at unmarked viewpoints along the way for better views without crowds",
        coordinates: "25.570°N, 91.885°E"
      },
      {
        name: "Local Music Scene",
        location: "Cloud 9 or Café Shillong",
        tip: "Check local Facebook groups for underground music events and jam sessions",
        timing: "Evening shows typically 7-10 PM"
      },
      {
        name: "Authentic Market Experience",
        location: "Iewduh (Bara Bazaar)",
        tip: "Visit early morning (6-8 AM) to see authentic local trade and fresh produce",
        timing: "6 AM - 10 AM for best experience"
      }
    ]
  }
};

export function getCitySpecificData(citySlug: string): CitySpecificData | null {
  const { getCitySpecificDataComplete } = require('./city-data-complete');
  return getCitySpecificDataComplete(citySlug) || citySpecificData[citySlug] || null;
}