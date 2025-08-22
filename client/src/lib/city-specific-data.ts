// Import the complete data at the top level
import { getCitySpecificDataComplete } from './city-data-complete';

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
    ],
    transportationTips: [
      "Use local buses and shared autos for intercity travel - very affordable",
      "Book private taxis for day trips to Chittorgarh and Kumbhalgarh",
      "Rent scooters from local providers for ₹300-500/day",
      "Use app-based rides during early morning and late evening for better rates",
      "Walk around Lake Pichola area - most attractions within walking distance",
      "Join group tours for cost-effective visits to multiple attractions"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant winter mornings (Oct-Mar) perfect for lakeside coworking",
        "Extreme summer heat (Apr-Jun) requires indoor AC workspaces",
        "Monsoon season (Jul-Sep) brings humidity and occasional power cuts"
      ],
      healthConsiderations: [
        "High temperatures in summer (up to 45°C) - heat exhaustion risk",
        "Dry desert air requires increased water intake year-round",
        "Low humidity in winter can cause skin and respiratory dryness"
      ],
      equipmentNeeds: [
        "Essential air conditioning during summer months (Apr-Jun)",
        "Desert coolers insufficient during peak summer",
        "Minimal heating needed - light woolens for Dec-Jan nights only"
      ],
      bestMonths: "October to March for comfortable working conditions"
    }
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
    ],
    transportationTips: [
      "Use shared jeeps to Darjeeling and nearby towns for budget travel",
      "Book helicopter rides to remote areas during clear weather windows",
      "Rent bikes for exploring nearby villages and tea gardens",
      "Join shared taxi services to Bagdogra airport booked in advance",
      "Use local bus services for very economical travel to surrounding areas"
    ],
    climateImpact: {
      workingConditions: [
        "Cool mountain climate year-round requires warm clothing for work",
        "Monsoon season (Jun-Sep) brings frequent rain and connectivity issues",
        "Clear winter days (Oct-Mar) perfect for outdoor coworking with mountain views"
      ],
      healthConsiderations: [
        "High altitude (1,650m) may cause initial breathlessness for some",
        "Cold and dry air requires increased water intake and lip protection",
        "UV exposure higher at altitude - sunscreen essential year-round"
      ],
      equipmentNeeds: [
        "Essential heating during winter months (Dec-Feb)",
        "Backup power solutions for frequent power cuts during monsoon",
        "Warm clothing and blankets necessary for comfortable work environment"
      ],
      bestMonths: "March to May and October to December for optimal working conditions"
    }
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
    ],
    transportationTips: [
      "Use local buses between Dharamshala and McLeodganj for ₹10 rides",
      "Share taxis to Delhi or Chandigarh with other travelers",
      "Rent bikes for exploring nearby villages and monasteries",
      "Join trekking groups for shared transportation to trail heads",
      "Use app-based rides during monsoon when local transport is limited"
    ],
    climateImpact: {
      workingConditions: [
        "Cool mountain climate requires warm clothing for comfortable work",
        "Monsoon season (Jun-Sep) brings heavy rains affecting outdoor work",
        "Clear post-monsoon period (Oct-Nov) ideal for outdoor coworking"
      ],
      healthConsiderations: [
        "High altitude (2,082m) may cause initial breathlessness",
        "Cold and dry air requires increased hydration and skin protection",
        "UV exposure higher at altitude - sunscreen essential"
      ],
      equipmentNeeds: [
        "Essential heating during winter months (Dec-Feb)",
        "Backup power solutions for monsoon power cuts",
        "Warm blankets and clothing necessary for year-round comfort"
      ],
      bestMonths: "March to May and October to December for optimal conditions"
    }
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
    ],
    transportationTips: [
      "Use shared jeeps from Siliguri and NJP railway station to reach Gangtok",
      "Book helicopter rides to Tsomgo Lake during peak season for time-saving",
      "Use local taxis for point-to-point travel within Gangtok - negotiate fares",
      "Take shared vehicles to Rumtek Monastery and Tsomgo Lake for lower costs",
      "Walk along MG Marg - most cafes and shops are within walking distance",
      "Use government buses for intercity travel to nearby towns like Pelling"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant spring/fall weather (Mar-May, Sep-Nov) ideal for outdoor work",
        "Cold winters (Dec-Feb) require heated spaces - many cafes have heaters", 
        "Monsoon season (Jun-Aug) brings heavy rains and frequent internet disruptions"
      ],
      healthConsiderations: [
        "High altitude (5,500 ft) may cause initial breathing adjustments",
        "Clean mountain air excellent for health and mental clarity",
        "Cold winters require warm clothing - temperatures can drop to 2°C"
      ],
      equipmentNeeds: [
        "Room heaters essential during winter months for comfortable working",
        "Backup power solutions recommended during monsoon season",
        "Warm clothing and blankets necessary from December to February"
      ],
      bestMonths: "March to May and September to November for optimal conditions"
    }
  },
  kasol: {
    moneyTips: [
      "Stay in budget guesthouses and Israeli-run cafes in main Kasol area",
      "Eat at local dhabas and Pakistani/Israeli fusion restaurants",
      "Trek to nearby villages like Tosh and Malana for authentic experiences",
      "Shop for local handicrafts and charas-themed items at reasonable prices",
      "Use shared jeeps and local buses for cost-effective regional travel"
    ],
    streetFood: [
      { item: "Momos", price: "₹80-120 ($1-1.5)" },
      { item: "Maggi with Vegetables", price: "₹60-100 ($0.70-1.20)" },
      { item: "Israeli Hummus", price: "₹150-200 ($1.8-2.4)" },
      { item: "Pancakes", price: "₹120-180 ($1.4-2.2)" },
      { item: "Lemon Honey Ginger Tea", price: "₹50-80 ($0.60-1)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Stone Garden Café", speed: "20-35 Mbps", quality: "Fair" },
        { name: "Moon Dance Café", speed: "15-30 Mbps", quality: "Fair" },
        { name: "Evergreen Café", speed: "25-40 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Main Market Area", speed: "10-20 Mbps", quality: "Fair" },
        { name: "Bus Stand WiFi", speed: "15-25 Mbps", quality: "Fair" },
        { name: "Some Hotels/Guesthouses", speed: "20-35 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Parvati Valley Digital Nomads",
        address: "Old Kasol Road",
        pricing: "₹2,000/month",
        speedMbps: 30,
        amenities: ["Mountain Views", "Chillout Areas", "Backpacker Community", "Music"]
      },
      {
        name: "Tosh Village Workspace",
        address: "Tosh Village (30min trek from Kasol)",
        pricing: "₹1,500/month",
        speedMbps: 25,
        amenities: ["Complete Isolation", "Mountain Air", "Spiritual Environment", "Hiking"]
      }
    ],
    localExperienceTips: [
      "Trek to Tosh village for spectacular Parvati Valley views and hippie culture",
      "Visit Malana village for ancient culture (respect local customs - no photography)",
      "Attend full moon parties and jam sessions at riverside cafes",
      "Explore hot springs at Kheerganga after 3-hour moderate trek",
      "Experience Israeli-influenced culture and cuisine throughout the valley",
      "Join meditation and yoga sessions offered at various cafes and guesthouses"
    ],
    transportationTips: [
      "Use shared taxis and buses from Delhi (₹800-1,200) or Chandigarh (₹400-600)",
      "Local buses connect Kasol to nearby villages like Tosh and Malana",
      "Trek between villages - most destinations are 2-4 hours walking distance",
      "Rent bikes in Kasol for exploring the valley at your own pace",
      "Use app-based rides only for short local distances - limited availability",
      "Join group treks to remote areas for safety and cost-sharing"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant summer months (Apr-Jun) perfect for outdoor riverside coworking",
        "Cold winters (Dec-Mar) require warm indoor spaces - many cafes have heaters",
        "Monsoon season (Jul-Sep) brings heavy rains and potential landslides"
      ],
      healthConsiderations: [
        "High altitude (5,200 ft) may cause initial adjustment period",
        "Pure mountain air excellent for respiratory health and mental clarity",
        "Cold winters and monsoons can affect internet connectivity frequently"
      ],
      equipmentNeeds: [
        "Warm winter clothing essential - temperatures drop below 0°C",
        "Waterproof gear during monsoon season for electronics protection",
        "Power banks and backup charging as electricity can be unreliable"
      ],
      bestMonths: "March to June and September to November for optimal conditions"
    },
    insiderHacks: {
      accommodation: [
        "Stay in Israeli-run guesthouses for authentic Middle Eastern vibe",
        "Book rooms with valley views - worth the extra cost for inspiration",
        "Negotiate monthly rates during off-season for significant savings",
        "Consider staying in Tosh or Pulga for quieter, more authentic experience",
        "Look for places with backup generators during power outage season"
      ],
      food: [
        "Try Israeli dishes like shakshuka and hummus at authentic cafes",
        "Eat at local Himachali dhabas for traditional mountain cuisine",
        "Join communal dinners at backpacker hostels for social experience",
        "Buy fresh fruits from local orchards during season (apples, cherries)",
        "Learn to cook local dishes - many places offer cooking sessions"
      ],
      transport: [
        "Use overnight buses from Delhi to save on accommodation costs",
        "Trek between villages instead of taking expensive taxis",
        "Join group transportation with other backpackers and digital nomads",
        "Rent bikes for valley exploration - cheaper than constant taxi rides",
        "Use local bus services for budget-friendly regional connectivity"
      ]
    },
    secretSpots: [
      {
        name: "Hidden Riverside Spot",
        location: "Between Kasol and Tosh",
        tip: "Trek 45 minutes from main road for secluded riverside workspace",
        coordinates: "32.01°N, 77.34°E"
      },
      {
        name: "Quiet Café with WiFi",
        location: "Pulga Village", 
        tip: "Less crowded alternative to main Kasol strip with reliable internet",
        timing: "9 AM - 8 PM"
      },
      {
        name: "Ancient Temple Complex",
        location: "Malana Village",
        tip: "Respect photography restrictions but stunning views for peaceful work - Follow local customs strictly"
      }
    ]
  },

  "bir": {
    coworkingSpaces: [
      {
        name: "The Hideout Café & Co-working",
        location: "Bir Road, near Landing Zone",
        pricing: "₹2,500/month",
        description: "Paragliding pilots' favorite co-working space with mountain views and reliable WiFi for remote work sessions",
        amenities: ["Mountain View", "Pilot Community", "Equipment Storage", "Strong WiFi"],
        openHours: "7:00 AM - 9:00 PM"
      },
      {
        name: "Zostel Bir Co-work", 
        location: "Bir Village Center",
        pricing: "₹2,000/month",
        description: "Backpacker-friendly co-working space with communal vibes and regular nomad networking events",
        amenities: ["Community Events", "Budget-Friendly", "Social Environment", "Power Backup"],
        openHours: "24/7"
      }
    ],
    nomadCommunity: {
      size: "50-80 active nomads",
      platforms: ["WhatsApp: Bir Digital Nomads", "Instagram: @birparagliding"],
      events: ["Weekly Pilot Meetups", "Monthly Networking", "Seasonal Flying Events"],
      description: "Close-knit community of adventure-seeking nomads and pilots with regular social gatherings"
    },
    climateInsights: {
      workingConditions: [
        "Perfect flying weather (Apr-Jun, Sep-Nov) brings high energy and motivation",
        "Mountain air and 2,500ft altitude ideal for clear thinking and productivity",
        "Monsoon season (Jul-Aug) requires indoor workspaces and backup power solutions"
      ],
      healthConsiderations: [
        "Moderate altitude (2,500 ft) - no acclimatization needed for most people",
        "Clean mountain air excellent for respiratory health and mental clarity", 
        "Cold winters require proper heating for comfortable work environment"
      ],
      equipmentNeeds: [
        "Light jacket for morning/evening temperatures year-round",
        "Power banks essential during monsoon season electricity fluctuations",
        "Good quality headphones for video calls due to occasional wind noise"
      ],
      bestMonths: "March to June and September to November for optimal flying and working conditions"
    },
    insiderHacks: {
      accommodation: [
        "Book rooms with takeoff view for daily paragliding inspiration",
        "Stay near Billing for easier access to launch sites and pilot community",
        "Negotiate monthly rates in off-season (Dec-Feb) for 40-50% savings",
        "Consider homestays in Chaugan for authentic local experience",
        "Look for places with backup generators for reliable power during storms"
      ],
      food: [
        "Try Tibetan momos and thukpa at local monastery kitchens",
        "Eat at pilot hangouts for adventure stories and local flying tips",
        "Buy fresh vegetables from weekly village markets (Wednesdays/Saturdays)",
        "Learn basic Tibetan cooking from monastery volunteers",
        "Join communal dinners at backpacker hostels for social networking"
      ],
      transport: [
        "Use local buses to Billing for budget-friendly mountain access",
        "Join group taxis with other pilots/tourists to share costs",
        "Rent bikes for valley exploration and independent mobility",
        "Take overnight buses from Delhi/Chandigarh to save accommodation costs",
        "Walk between Bir and Billing for daily exercise and scenic views"
      ]
    },
    secretSpots: [
      {
        name: "Sunrise Workspace Rock",
        location: "Billing takeoff area",
        tip: "Early morning workspace with panoramic Dhauladhar views - arrive by 6 AM",
        coordinates: "32.05°N, 76.73°E"
      },
      {
        name: "Monastery Library",
        location: "Chokling Monastery",
        tip: "Quiet study space with WiFi, meditation vibes, and respectful silence policy",
        timing: "9 AM - 5 PM (closed Sundays)"
      },
      {
        name: "Forest Trail Office",
        location: "Bir-Billing trek path", 
        tip: "Mobile workstation spots along forest trail with natural shade and mountain views"
      }
    ]
  },

  "dehradun": {
    coworkingSpaces: [
      {
        name: "91springboard Dehradun",
        location: "Rajpur Road, IT Park",
        pricing: "₹4,500/month",
        description: "Professional tech hub with startup community and regular networking events",
        amenities: ["Startup Ecosystem", "Mentorship Programs", "Events", "Meeting Rooms"],
        openHours: "9:00 AM - 9:00 PM"
      },
      {
        name: "The Workspace Café",
        location: "Clock Tower, Paltan Bazaar",
        pricing: "₹3,500/month", 
        description: "City center co-working with café culture and young professional community",
        amenities: ["Central Location", "Café Culture", "High-Speed WiFi", "Phone Booths"],
        openHours: "8:00 AM - 10:00 PM"
      }
    ],
    nomadCommunity: {
      size: "150-200 active nomads",
      platforms: ["WhatsApp: Dehradun Tech Community", "Meetup: DehraDun Digital Nomads"],
      events: ["Tech Meetups", "Startup Events", "Weekend Treks", "Cultural Evenings"],
      description: "Growing tech community with mix of local entrepreneurs and digital nomads"
    },
    climateInsights: {
      workingConditions: [
        "Pleasant year-round climate (20-30°C) ideal for consistent productivity",
        "Fresh mountain air from nearby Himalayas enhances mental clarity",
        "Monsoon season (Jul-Sep) brings greenery but occasional power cuts"
      ],
      healthConsiderations: [
        "Moderate altitude (700m) - comfortable for all fitness levels",
        "Excellent air quality compared to plains cities like Delhi",
        "Winter fog (Dec-Jan) may affect morning commutes and mood"
      ],
      equipmentNeeds: [
        "Light sweater for winter evenings and air-conditioned spaces",
        "Umbrella or raincoat during monsoon season",
        "Power surge protectors for electronic equipment during storms"
      ],
      bestMonths: "October to April for optimal weather and outdoor activities"
    },
    insiderHacks: {
      accommodation: [
        "Stay near IT Park for tech community access and modern amenities",
        "Consider areas like Race Course or Dalanwala for quieter environments",
        "Look for furnished apartments with WiFi and power backup",
        "Negotiate long-term rates with property owners for significant savings",
        "Choose places near main markets for convenience and local food access"
      ],
      food: [
        "Try local Garhwali cuisine at authentic mountain restaurants",
        "Explore Tibetan food in nearby Clement Town area",
        "Visit Saharanpur Road for diverse North Indian street food",
        "Join local cooking classes to learn regional mountain cuisine",
        "Eat at IMA (Indian Military Academy) canteen for subsidized quality meals"
      ],
      transport: [
        "Use city buses and shared auto-rickshaws for daily commuting",
        "Rent bikes for independent exploration of nearby hill stations", 
        "Take advantage of proximity to Delhi (4-5 hours) for business trips",
        "Use train connectivity for budget travel to other Indian cities",
        "Join group trips to nearby attractions like Mussoorie and Rishikesh"
      ]
    },
    secretSpots: [
      {
        name: "Forest Research Institute Grounds",
        location: "FRI Campus",
        tip: "Peaceful outdoor workspace in colonial-era campus with historic architecture",
        coordinates: "30.32°N, 78.05°E"
      },
      {
        name: "Malsi Deer Park Café",
        location: "Mussoorie Road",
        tip: "Nature workspace with deer sightings and mountain views - ideal for creative work",
        timing: "9 AM - 6 PM"
      },
      {
        name: "Robber's Cave Stream Side",
        location: "Anarwala Village",
        tip: "Natural cave workspace by flowing stream - unique environment for inspiration"
      }
    ]
  },

  "mussoorie": {
    coworkingSpaces: [
      {
        name: "The Writer's Den",
        location: "Mall Road, near Library Point",
        pricing: "₹4,000/month",
        description: "Literary-focused co-working space popular with writers and creative professionals",
        amenities: ["Library Access", "Writing Workshops", "Author Events", "Mountain Views"],
        openHours: "8:00 AM - 8:00 PM"
      },
      {
        name: "Himalayan Co-work Hub",
        location: "Landour, near Char Dukan",
        pricing: "₹3,500/month",
        description: "Quiet hill station workspace with colonial charm and inspiring mountain vistas",
        amenities: ["Colonial Architecture", "Peaceful Environment", "High-Speed WiFi", "Terrace Workspace"],
        openHours: "9:00 AM - 7:00 PM"
      }
    ],
    nomadCommunity: {
      size: "80-120 active nomads",
      platforms: ["Facebook: Mussoorie Digital Nomads", "WhatsApp: Hill Station Workers"],
      events: ["Literary Evenings", "Photography Walks", "Weekend Treks", "Writer Meetups"],
      description: "Creative community of writers, artists, and digital nomads seeking inspiration in the hills"
    },
    climateInsights: {
      workingConditions: [
        "Cool mountain climate (15-25°C) perfect for focused work and creativity",
        "Fresh Himalayan air enhances mental clarity and reduces stress levels",
        "Winter snow (Dec-Feb) creates magical but cold working environment"
      ],
      healthConsiderations: [
        "High altitude (6,000 ft) requires initial acclimatization for some people",
        "Pure mountain air excellent for respiratory health and mental wellness",
        "Cold winters may aggravate joint problems - proper heating essential"
      ],
      equipmentNeeds: [
        "Warm winter clothing essential - temperatures can drop below freezing",
        "Room heaters for comfortable winter working conditions",
        "Waterproof gear for monsoon season equipment protection"
      ],
      bestMonths: "March to June and September to November for comfortable working weather"
    },
    insiderHacks: {
      accommodation: [
        "Stay in Landour for quieter, more authentic hill station experience",
        "Book heritage hotels during off-season for luxury at budget prices",
        "Look for places with valley views and morning sunlight for natural lighting",
        "Consider writer's retreats and residential programs for creative immersion",
        "Choose accommodations with fireplaces for cozy winter working sessions"
      ],
      food: [
        "Try local Garhwali cuisine at mountain restaurants and local homes",
        "Visit Char Dukan for famous bun-omelette and mountain tea",
        "Explore Mall Road for diverse food options and people-watching",
        "Join cooking classes to learn traditional hill station recipes",
        "Buy fresh produce from local markets for healthy mountain living"
      ],
      transport: [
        "Use local taxi services for convenient hill station transportation",
        "Walk along Mall Road for daily exercise and scenic commutes", 
        "Take cable car rides for unique aerial workspace perspectives",
        "Join group tours to nearby attractions like Kempty Falls",
        "Use train connectivity to Delhi via Dehradun for business travel"
      ]
    },
    secretSpots: [
      {
        name: "Camel's Back Road Benches",
        location: "Camel's Back Road",
        tip: "Sunrise workspace with Doon Valley views - perfect for morning productivity sessions",
        coordinates: "30.46°N, 78.08°E"
      },
      {
        name: "St. Paul's Church Grounds",
        location: "Landour",
        tip: "Historic church campus with peaceful gardens and colonial architecture inspiration",
        timing: "6 AM - 6 PM"
      },
      {
        name: "Cloud's End Forest",
        location: "Beyond Happy Valley",
        tip: "Forest trail workspace surrounded by oak and deodar trees - ultimate nature office"
      }
    ]
  },

  "ziro": {
    coworkingSpaces: [
      {
        name: "Apatani Cultural Hub",
        location: "Ziro Town Center",
        pricing: "₹2,500/month",
        description: "Community space celebrating local Apatani culture with modern amenities for digital nomads",
        amenities: ["Cultural Events", "Local Art", "Community Kitchen", "Mountain Views"],
        openHours: "8:00 AM - 8:00 PM"
      },
      {
        name: "Music Valley Co-work",
        location: "Near Festival Grounds",
        pricing: "₹2,000/month",
        description: "Creative workspace popular during festival season with musicians and artists",
        amenities: ["Music Rooms", "Festival Events", "Creative Community", "Natural Lighting"],
        openHours: "9:00 AM - 7:00 PM"
      }
    ],
    nomadCommunity: {
      size: "30-50 active nomads",
      platforms: ["Instagram: @zirofestival", "WhatsApp: Ziro Valley Travelers"],
      events: ["Ziro Music Festival", "Cultural Exchange Programs", "Nature Walks", "Tribal Art Workshops"],
      description: "Small but passionate community of culture enthusiasts and nature lovers"
    },
    climateInsights: {
      workingConditions: [
        "Cool mountain climate (10-20°C) ideal for productive work sessions",
        "Festival season (September) brings high energy and creative inspiration",
        "Winter frost (Dec-Feb) requires proper heating for comfortable work"
      ],
      healthConsiderations: [
        "High altitude (5,000 ft) may require acclimatization period for some visitors",
        "Pristine air quality excellent for respiratory health and mental clarity",
        "Remote location requires good health preparation and basic medical supplies"
      ],
      equipmentNeeds: [
        "Warm clothing essential year-round due to mountain altitude",
        "Power banks and solar chargers for reliable equipment power",
        "Satellite internet backup for important connectivity requirements"
      ],
      bestMonths: "March to May and September to November for optimal weather and cultural events"
    },
    insiderHacks: {
      accommodation: [
        "Stay with Apatani families for authentic cultural immersion experience",
        "Book early for Ziro Music Festival season (September) - accommodations fill quickly",
        "Consider camping options during festival for budget and community experience",
        "Look for eco-lodges that support local sustainability initiatives",
        "Choose places with backup power for reliable equipment charging"
      ],
      food: [
        "Try traditional Apatani cuisine including bamboo shoot and local fish dishes",
        "Participate in community cooking sessions to learn tribal recipes",
        "Buy fresh organic vegetables from local Apatani farms",
        "Respect local customs around food sharing and community meals",
        "Stock up on packaged foods during supply runs to nearby towns"
      ],
      transport: [
        "Fly to Ziro via Tezpur airport for quickest access to remote valley",
        "Use local transport cooperatives for sustainable travel within valley",
        "Join group transportation for supply runs to larger towns",
        "Walk or cycle for daily transportation - valley is compact and scenic",
        "Plan travel carefully during monsoon season due to landslide risks"
      ]
    },
    secretSpots: [
      {
        name: "Talley Valley Wildlife Sanctuary",
        location: "20km from Ziro",
        tip: "Pristine nature workspace with rare wildlife spotting and complete silence",
        coordinates: "27.58°N, 93.78°E"
      },
      {
        name: "Apatani Rice Fields",
        location: "Ziro Valley Floor",
        tip: "UNESCO heritage rice terraces - perfect outdoor office with cultural significance",
        timing: "Best in early morning or late afternoon"
      },
      {
        name: "Dolo Mando Sunrise Point",
        location: "Ziro Valley Ridge",
        tip: "Panoramic valley views for morning meditation and inspiring work sessions"
      }
    ]
  },

  "kolkata": {
    coworkingSpaces: [
      {
        name: "91springboard Salt Lake",
        address: "Salt Lake City, Sector V",
        pricing: "₹7,500/month",
        speedMbps: 100,
        amenities: ["Startup Community", "Mentorship", "Events", "High-Speed WiFi"]
      },
      {
        name: "The Culture Canvas",
        address: "Park Street Area",
        pricing: "₹6,000/month",
        speedMbps: 80,
        amenities: ["Cultural Events", "Art Exhibitions", "Library", "Café Culture"]
      }
    ],
    nomadCommunity: {
      size: "200-300 active nomads",
      platforms: ["Meetup: Kolkata Digital Nomads", "Facebook: Calcutta Creative Community"],
      events: ["Literary Meets", "Cultural Festivals", "Startup Events", "Art Exhibitions"],
      description: "Vibrant intellectual community with strong emphasis on arts, literature, and cultural exchange"
    },
    climateInsights: {
      workingConditions: [
        "Tropical climate requires air conditioning for comfortable summer work (Apr-Jun)",
        "Monsoon season (Jul-Sep) brings relief but humid conditions and power cuts",
        "Pleasant winter months (Nov-Feb) ideal for outdoor and natural light workspaces"
      ],
      healthConsiderations: [
        "High humidity year-round requires good ventilation and hydration",
        "Air quality concerns during winter months - consider air purifiers",
        "Monsoon season may affect commuting and internet connectivity"
      ],
      equipmentNeeds: [
        "Dehumidifiers for electronics protection during humid months",
        "Power surge protectors essential during monsoon thunderstorms",
        "Air purifiers recommended for cleaner indoor air quality"
      ],
      bestMonths: "October to March for comfortable weather and optimal productivity"
    },
    insiderHacks: {
      accommodation: [
        "Stay in Park Street or New Market area for cultural immersion and convenience",
        "Consider Kolkata University area for intellectual community and budget options",
        "Look for places with backup power and air conditioning for summer comfort",
        "Choose heritage accommodations in North Kolkata for authentic cultural experience",
        "Select modern apartments in Salt Lake for tech community access"
      ],
      food: [
        "Explore authentic Bengali cuisine at local family restaurants and street stalls",
        "Try intellectual café culture at Indian Coffee House and Oxford Bookstore Café",
        "Join cooking classes to learn traditional Bengali fish and rice preparations",
        "Visit local markets like New Market and Gariahat for fresh ingredients",
        "Experience adda (intellectual conversation) culture over tea and snacks"
      ],
      transport: [
        "Use extensive metro network for convenient and affordable city transportation",
        "Take iconic yellow taxis for cultural experience and local navigation",
        "Walk along Ganges riverfront for daily exercise and cultural inspiration",
        "Use app-based ride sharing for convenient door-to-door transportation",
        "Join group cultural tours to explore city's rich historical heritage"
      ]
    },
    secretSpots: [
      {
        name: "Prinsep Ghat Riverside",
        location: "Strand Road, River Hooghly",
        tip: "Peaceful river workspace with colonial architecture and boat watching",
        coordinates: "22.56°N, 88.34°E"
      },
      {
        name: "Coffee House Adda Culture",
        location: "Indian Coffee House, College Street",
        tip: "Historic intellectual café perfect for writing and cultural conversations",
        timing: "8 AM - 11 PM"
      },
      {
        name: "Academy of Fine Arts Garden",
        location: "Cathedral Road",
        tip: "Art-filled environment with galleries and peaceful gardens for creative work"
      }
    ]
  },
  dehradun: {
    moneyTips: [
      "Stay in student-friendly areas like Patel Nagar for affordable long-term accommodation",
      "Eat at local Garhwali restaurants and student hangouts for meals under ₹100",
      "Use city bus system and share autos for economical daily transportation",
      "Shop at wholesale markets like Paltan Bazaar for groceries and supplies",
      "Take advantage of educational city discounts with proximity to universities"
    ],
    streetFood: [
      { item: "Aloo Ke Gutke", price: "₹60-90 ($0.70-1.10)" },
      { item: "Bal Mithai", price: "₹200-300/kg ($2.4-3.6)" },
      { item: "Kafuli", price: "₹80-120 ($1-1.5)" },
      { item: "Singori", price: "₹150-250/kg ($1.8-3)" },
      { item: "Jhangora Kheer", price: "₹50-80 ($0.60-1)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Café Coffee Day (Multiple locations)", speed: "30-50 Mbps", quality: "Good" },
        { name: "The Clock Tower Café", speed: "40-60 Mbps", quality: "Excellent" },
        { name: "Ellora's Melting Moments", speed: "25-45 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Pacific Mall", speed: "50-80 Mbps", quality: "Excellent" },
        { name: "Railway Station", speed: "30-50 Mbps", quality: "Good" },
        { name: "University Campuses", speed: "60-100 Mbps", quality: "Excellent" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Doon Co-working Hub",
        address: "Rajpur Road, Dehradun",
        pricing: "₹4,000/month",
        speedMbps: 75,
        amenities: ["Mountain Views", "24/7 Access", "Conference Rooms", "Student Community"]
      },
      {
        name: "Valley Workspace",
        address: "Patel Nagar, Dehradun", 
        pricing: "₹3,200/month",
        speedMbps: 60,
        amenities: ["Budget-Friendly", "Study Groups", "Printing Services", "Cafeteria"]
      }
    ],
    localExperienceTips: [
      "Explore nearby hill stations like Mussoorie and Chakrata on weekends",
      "Visit Robber's Cave and Tapkeshwar Temple for local natural attractions",
      "Experience Garhwali culture through local festivals and traditional cuisine",
      "Take day trips to Rishikesh for yoga and adventure sports experiences",
      "Join trekking groups for Himalayan foothills exploration from the city",
      "Attend cultural events at Forest Research Institute's colonial campus"
    ],
    insiderHacks: {
      accommodation: [
        "Stay near educational institutions for student-friendly pricing and community",
        "Look for PG accommodations in Patel Nagar and Rajpur Road areas",
        "Consider family accommodations for authentic Garhwali cultural experience",
        "Choose places with mountain views - many available at reasonable prices",
        "Select accommodations near main roads for better connectivity and amenities"
      ],
      food: [
        "Try authentic Garhwali thalis at local family restaurants",
        "Visit Tibetan refugee colony for momos and Tibetan cuisine",
        "Explore student food joints near universities for budget-friendly meals",
        "Shop at Gandhi Park market for fresh local produce and hill vegetables",
        "Experience traditional Garhwali sweets and preparations at local sweet shops"
      ],
      transport: [
        "Use extensive city bus network for affordable daily commuting",
        "Share auto-rickshaws with students for economical short-distance travel",
        "Rent bikes for exploring nearby attractions and hill station day trips",
        "Use app-based rides for convenience - good availability throughout city",
        "Join group tours to nearby destinations for cost-effective weekend trips"
      ]
    },
    secretSpots: [
      {
        name: "Forest Research Institute Grounds",
        location: "FRI Campus",
        tip: "Colonial architecture campus perfect for peaceful outdoor work",
        coordinates: "30.37°N, 78.05°E"
      },
      {
        name: "Malsi Deer Park",
        location: "Mussoorie Road",
        tip: "Quiet natural setting with deer and peacocks - great for nature work",
        timing: "9 AM - 5 PM"
      },
      {
        name: "Tapovan Temple Complex",
        location: "Tapkeshwar Road",
        tip: "Spiritual riverside location with natural caves and temple atmosphere"
      }
    ],
    transportationTips: [
      "Use extensive city bus network for affordable daily commuting",
      "Share auto-rickshaws with students for economical short-distance travel", 
      "Rent bikes for exploring nearby attractions and hill station day trips",
      "Use app-based rides for convenience - good availability throughout city",
      "Join group tours to nearby destinations for cost-effective weekend trips"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant spring and autumn weather ideal for outdoor and coworking spaces",
        "Hot summers (Apr-Jun) require air-conditioned spaces for comfortable work",
        "Cool winters (Dec-Feb) perfect for focused indoor work with heating"
      ],
      healthConsiderations: [
        "Clean mountain air beneficial for health compared to major metros",
        "Moderate pollution levels during winter months due to vehicular traffic",
        "Pleasant climate year-round with few extreme weather challenges"
      ],
      equipmentNeeds: [
        "Air conditioning or cooling solutions necessary during summer months",
        "Heating arrangements helpful during cool winter evenings",
        "Rain protection during monsoon season for outdoor commuting"
      ],
      bestMonths: "March to May and September to November for optimal conditions"
    }
  },
  mussoorie: {
    moneyTips: [
      "Stay in budget hotels near Library or Landour area away from main Mall Road",
      "Eat at local cafes and Tibetan restaurants for authentic hill station cuisine",
      "Walk along Mall Road and avoid taxi rides for short distances within town",
      "Shop for woolens and local handicrafts at wholesale prices in off-season",
      "Book accommodations in advance during peak season for better rates"
    ],
    streetFood: [
      { item: "Momos", price: "₹100-150 ($1.2-1.8)" },
      { item: "Maggi Noodles", price: "₹80-120 ($1-1.5)" },
      { item: "Aloo Tikki", price: "₹40-60 ($0.50-0.70)" },
      { item: "Hot Chocolate", price: "₹60-100 ($0.70-1.20)" },
      { item: "Pancakes", price: "₹150-250 ($1.8-3)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Landour Bakehouse", speed: "40-60 Mbps", quality: "Excellent" },
        { name: "Char Dukan", speed: "30-50 Mbps", quality: "Good" },
        { name: "Café Ivy", speed: "35-55 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Library Point", speed: "25-45 Mbps", quality: "Good" },
        { name: "Mall Road Area", speed: "30-50 Mbps", quality: "Good" },
        { name: "Hotel Lobbies", speed: "40-70 Mbps", quality: "Excellent" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Mountain View Workspace",
        address: "Landour, Mussoorie",
        pricing: "₹3,500/month",
        speedMbps: 50,
        amenities: ["Valley Views", "Colonial Architecture", "Peaceful Environment", "Library Access"]
      },
      {
        name: "Mall Road Co-work",
        address: "Mall Road, Mussoorie",
        pricing: "₹4,200/month", 
        speedMbps: 45,
        amenities: ["Central Location", "Tourist Hub Access", "Networking Events", "Modern Facilities"]
      }
    ],
    localExperienceTips: [
      "Take early morning walks along Mall Road before tourist crowds arrive",
      "Visit Gun Hill via cable car for spectacular Himalayan mountain views",
      "Explore Landour area for colonial heritage and peaceful walking trails", 
      "Experience British colonial history at various heritage buildings and churches",
      "Take day trips to nearby Dhanaulti and Chamba for nature and tranquility",
      "Attend local cultural events and festivals during tourist season"
    ],
    insiderHacks: {
      accommodation: [
        "Stay in Landour area for authentic colonial experience and lower prices",
        "Book heritage hotels during off-season for luxury at budget prices",
        "Consider homestays with local families for cultural immersion",
        "Look for accommodations with valley views - many available at reasonable rates",
        "Choose places away from Mall Road for quieter environment and better prices"
      ],
      food: [
        "Try colonial-era bakeries and cafes for authentic hill station cuisine",
        "Visit local markets for fresh mountain produce and regional specialties",
        "Experience high tea culture at heritage hotels and colonial cafes",
        "Explore Tibetan cuisine at refugee-run restaurants in the area",
        "Join cooking classes to learn traditional Garhwali mountain cuisine"
      ],
      transport: [
        "Walk along Mall Road - most attractions within comfortable walking distance",
        "Use shared taxis for trips to nearby attractions and viewpoints",
        "Take cable car to Gun Hill for convenience and scenic mountain views",
        "Hire bikes for exploring Landour and surrounding colonial-era areas",
        "Join group tours for day trips to Kempty Falls and nearby destinations"
      ]
    },
    secretSpots: [
      {
        name: "Sister's Bazaar",
        location: "Landour",
        tip: "Quiet colonial area perfect for writing and peaceful work",
        coordinates: "30.45°N, 78.08°E"
      },
      {
        name: "Camel's Back Road",
        location: "Circular Walking Path",
        tip: "Scenic walking trail with mountain views - perfect for thinking walks",
        timing: "Best during sunrise and sunset"
      },
      {
        name: "St. Paul's Church",
        location: "Landour",
        tip: "Historic colonial church with peaceful grounds for quiet contemplation"
      }
    ],
    transportationTips: [
      "Walk along Mall Road - most attractions within comfortable walking distance",
      "Use shared taxis for trips to nearby attractions and viewpoints",
      "Take cable car to Gun Hill for convenience and scenic mountain views",
      "Hire bikes for exploring Landour and surrounding colonial-era areas",
      "Join group tours for day trips to Kempty Falls and nearby destinations"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant summer weather (Apr-Jun) perfect for outdoor coworking and cafes",
        "Cool winter months (Dec-Mar) require heated indoor spaces for comfort",
        "Monsoon season (Jul-Sep) brings heavy rains - indoor work spaces essential"
      ],
      healthConsiderations: [
        "Cool mountain air excellent for health and mental clarity",
        "High altitude may cause initial breathing adjustments for some visitors",
        "Clean environment beneficial for respiratory health and stress reduction"
      ],
      equipmentNeeds: [
        "Warm clothing essential during winter months for comfortable outdoor work",
        "Rain gear necessary during monsoon season for daily commuting",
        "Heating solutions helpful for indoor work during cold winter evenings"
      ],
      bestMonths: "April to June and September to November for optimal conditions"
    }
  },
  ziro: {
    moneyTips: [
      "Stay in local Apatani family homestays for authentic cultural experience",
      "Eat traditional Apatani cuisine and local organic produce for budget meals",
      "Use shared vehicles and local transport for economical regional travel",
      "Shop for traditional handicrafts and organic products directly from villages",
      "Time visits during Ziro Music Festival for vibrant cultural experiences"
    ],
    streetFood: [
      { item: "Apong (Rice Wine)", price: "₹50-100 ($0.60-1.20)" },
      { item: "Fish Curry", price: "₹120-180 ($1.4-2.2)" },
      { item: "Bamboo Shoot Dishes", price: "₹80-150 ($1-1.8)" },
      { item: "Smoked Fish", price: "₹100-200 ($1.2-2.4)" },
      { item: "Traditional Rice Meals", price: "₹60-100 ($0.70-1.20)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Ziro Music Café", speed: "20-35 Mbps", quality: "Fair" },
        { name: "Blue Pine Resort", speed: "25-40 Mbps", quality: "Good" },
        { name: "Local Restaurants", speed: "15-30 Mbps", quality: "Fair" }
      ],
      publicSpaces: [
        { name: "Main Market Area", speed: "15-25 Mbps", quality: "Fair" },
        { name: "Government Offices", speed: "30-50 Mbps", quality: "Good" },
        { name: "Festival Grounds", speed: "10-25 Mbps", quality: "Fair" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Ziro Valley Workspace",
        address: "Old Ziro, Arunachal Pradesh",
        pricing: "₹2,000/month",
        speedMbps: 25,
        amenities: ["Valley Views", "Cultural Immersion", "Music Community", "Organic Food"]
      }
    ],
    localExperienceTips: [
      "Experience authentic Apatani tribal culture through homestay accommodations",
      "Attend Ziro Music Festival in September for indie music and cultural celebration",
      "Explore traditional Apatani villages and sustainable agricultural practices",
      "Trek to Talley Valley Wildlife Sanctuary for pristine nature experiences",
      "Learn about traditional crafts and sustainable living from local Apatani families",
      "Participate in local festivals like Myoko, Murung, and Dree throughout the year"
    ],
    insiderHacks: {
      accommodation: [
        "Stay with Apatani families for authentic cultural immersion and lower costs",
        "Book early for Ziro Music Festival period - accommodation fills quickly",
        "Consider bamboo cottages and eco-friendly accommodations in the valley",
        "Look for places offering traditional meals as part of accommodation package",
        "Choose locations within walking distance of main village and cultural sites"
      ],
      food: [
        "Experience traditional Apatani cuisine through family meals and homestays",
        "Try local organic produce and traditional fermented foods",
        "Learn about sustainable farming practices from local Apatani families",
        "Sample traditional rice wine (apong) and local fish preparations",
        "Join community feasts during festivals for authentic cultural food experiences"
      ],
      transport: [
        "Use shared vehicles from Ziro to nearby destinations and trekking points",
        "Walk within villages - most Apatani settlements are compact and walkable",
        "Hire local guides for trekking and cultural village exploration",
        "Join group transportation during festival times for shared costs",
        "Use local knowledge for accessing remote areas and hidden natural spots"
      ]
    },
    secretSpots: [
      {
        name: "Talley Valley Sanctuary",
        location: "30km from Ziro",
        tip: "Pristine cloud forest perfect for nature-focused work and contemplation",
        coordinates: "27.58°N, 93.92°E"
      },
      {
        name: "Traditional Apatani Village",
        location: "Hong Village",
        tip: "Experience authentic tribal culture and sustainable living practices",
        timing: "Best during harvest season (Oct-Nov)"
      },
      {
        name: "Pine Grove Camping",
        location: "Near Old Ziro",
        tip: "Peaceful pine forest ideal for outdoor work and music sessions"
      }
    ],
    transportationTips: [
      "Use shared vehicles from Ziro to nearby destinations and trekking points",
      "Walk within villages - most Apatani settlements are compact and walkable",
      "Hire local guides for trekking and cultural village exploration",
      "Join group transportation during festival times for shared costs",
      "Use local knowledge for accessing remote areas and hidden natural spots"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant temperate climate year-round ideal for outdoor and nature-based work",
        "Monsoon season (Jun-Sep) brings heavy rains - indoor spaces necessary",
        "Cool winters (Dec-Feb) perfect for cozy indoor work with local heating"
      ],
      healthConsiderations: [
        "Clean mountain air and organic environment excellent for health",
        "High altitude requires gradual acclimatization for some visitors",
        "Traditional lifestyle and diet beneficial for physical and mental well-being"
      ],
      equipmentNeeds: [
        "Warm clothing necessary for cool evenings and winter months",
        "Rain gear essential during monsoon season for outdoor activities",
        "Portable power solutions helpful as electricity can be intermittent"
      ],
      bestMonths: "March to May and September to November for optimal conditions"
    }
  },
  goa: {
    moneyTips: [
      "Stay in North Goa guest houses near Anjuna/Arambol for ₹800-1,500/night",
      "Eat at local Goan family restaurants for authentic fish curry rice ₹150-250", 
      "Rent monthly scooters for ₹3,000-4,000 to explore all beaches freely",
      "Shop at Mapusa Friday Market for cheapest groceries and local produce",
      "Book accommodation during off-season (June-September) for 50% discounts",
      "Join beach shacks for co-working - many offer WiFi + workspace deals"
    ],
    streetFood: [
      { item: "Fish Curry Rice", price: "₹120-180 ($1.50-2.20)" },
      { item: "Bebinca (Sweet)", price: "₹50-80 ($0.60-1)" },
      { item: "Prawn Balchão", price: "₹200-300 ($2.40-3.60)" },
      { item: "Pork Vindaloo", price: "₹250-350 ($3-4.20)" },
      { item: "Sol Kadhi", price: "₹30-50 ($0.40-0.60)" },
      { item: "Goan Sausage Pav", price: "₹60-100 ($0.75-1.20)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Artjuna (Anjuna)", speed: "40-60 Mbps", quality: "Excellent" },
        { name: "Café Lilliput (Anjuna)", speed: "35-50 Mbps", quality: "Good" },
        { name: "Sublime (Morjim)", speed: "50-80 Mbps", quality: "Excellent" },
        { name: "Baba Au Rhum (Anjuna)", speed: "30-45 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Panaji City Center", speed: "25-40 Mbps", quality: "Good" },
        { name: "Dabolim Airport", speed: "60-100 Mbps", quality: "Excellent" },
        { name: "Mapusa Market Area", speed: "20-35 Mbps", quality: "Fair" },
        { name: "Beach Shacks (Anjuna/Arambol)", speed: "25-45 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "COWRKS Goa",
        address: "Porvorim, North Goa",
        pricing: "₹6,000/month",
        speedMbps: 100,
        amenities: ["Modern Design", "Meeting Rooms", "Events", "Cafe", "24/7 Access"]
      },
      {
        name: "Drishti Marine",
        address: "Arambol Beach",
        pricing: "₹4,500/month",
        speedMbps: 60,
        amenities: ["Beach Views", "Yoga Classes", "Community", "Wellness Focus"]
      },
      {
        name: "91springboard Goa",
        address: "Panaji",
        pricing: "₹5,500/month", 
        speedMbps: 80,
        amenities: ["Central Location", "Networking", "Events", "Professional Environment"]
      }
    ],
    localExperienceTips: [
      "Explore Old Goa churches and Portuguese colonial architecture on heritage walks",
      "Take sunset boat cruises on Mandovi River with live Goan folk music",
      "Visit spice plantations in Ponda for authentic Goan agricultural experiences",
      "Experience Saturday Night Market in Arpora for shopping and live entertainment",
      "Join Goan cooking classes to learn traditional recipes using coconut and spices",
      "Attend local festivals like Carnival (February) and Festa celebrations throughout year"
    ],
    transportationTips: [
      "Rent scooters for beach hopping - most convenient way to explore Goa",
      "Use Kadamba buses for budget travel between North and South Goa (₹15-30)",
      "Book prepaid taxis at Dabolim Airport to avoid overcharging by drivers",
      "Try river ferries between North and South Goa for scenic and cheap transport",
      "Use ride-hailing apps like Ola/Uber in main areas, limited in remote beaches",
      "Negotiate auto-rickshaw fares beforehand or insist on meter usage"
    ],
    climateImpact: {
      workingConditions: [
        "Peak season (Nov-Mar): Perfect weather for beach-side coworking and outdoor cafes",
        "Monsoon season (Jun-Sep): Heavy rains require indoor workspaces with good ventilation", 
        "Hot season (Apr-May): Air conditioning essential for comfortable indoor work"
      ],
      healthConsiderations: [
        "High humidity year-round - stay hydrated and use dehumidifiers indoors",
        "Monsoon brings increased risk of water-borne diseases - stick to bottled water",
        "Strong sun exposure on beaches - use sunscreen and protective clothing"
      ],
      equipmentNeeds: [
        "Moisture protection for electronics during monsoon season",
        "Reliable internet backup solutions for weather-related outages",
        "Cooling solutions for laptops in high humidity and heat"
      ],
      bestMonths: "November to March for optimal working conditions and weather"
    },
    insiderHacks: {
      accommodation: [
        "Stay in Portuguese heritage homes converted to guesthouses in Fontainhas",
        "Book monthly beach house rentals in Arambol/Mandrem for long-term stays",
        "Consider homestays with Goan families for cultural immersion and better prices",
        "Look for places with backup generators - power cuts common during monsoons",
        "Choose accommodations walking distance to beaches for daily swim breaks"
      ],
      food: [
        "Eat at family-run restaurants in villages for authentic Goan home cooking",
        "Try cashew feni (local spirit) and fresh seafood at beach shacks",
        "Visit Margao market for fresh fish and traditional Goan ingredients",
        "Join locals for traditional fish curry rice meals served on banana leaves",
        "Experience Goan-Portuguese fusion cuisine at heritage restaurants in Panaji"
      ],
      transport: [
        "Use motorcycle taxis (pilots) for quick rides through narrow village roads",
        "Download GoaMiles app for reliable local taxi booking and fair pricing",
        "Take early morning buses to avoid crowds and get better seats",
        "Rent bicycles in quieter areas like Divar Island for eco-friendly exploration",
        "Book shared cabs to airport in advance for better rates than individual taxis"
      ]
    },
    secretSpots: [
      {
        name: "Divar Island", 
        location: "Old Goa Ferry Route",
        tip: "Peaceful Portuguese village perfect for quiet work with rural charm",
        coordinates: "15.5058°N, 73.9196°E",
        timing: "Best during early morning and sunset"
      },
      {
        name: "Fontainhas Quarter",
        location: "Panaji Latin Quarter", 
        tip: "Colorful Portuguese heritage area with charming cafes for creative work",
        website: "goa-tourism.com"
      },
      {
        name: "Hollant Beach",
        location: "South Goa",
        tip: "Secluded black sand beach perfect for peaceful work sessions",
        coordinates: "15.0074°N, 74.0296°E"
      },
      {
        name: "Sahakari Spice Farm",
        location: "Ponda",
        tip: "Organic spice plantation with peaceful environment for nature-focused work",
        timing: "Morning tours best for cool weather"
      }
    ]
  },
  tosh: {
    moneyTips: [
      "Book accommodation in advance during peak trekking seasons (April-June, September-October)",
      "Carry sufficient cash - ATMs not available, nearest in Barshaini",
      "Stock up on essentials in Barshaini before the final trek to Tosh",
      "Share accommodation costs by booking dormitory-style rooms in guesthouses",
      "Negotiate longer stay discounts for extended remote work periods"
    ],
    streetFood: [
      { item: "Dal Rice", price: "₹80-120 ($1-1.50)" },
      { item: "Maggi Noodles", price: "₹40-60 ($0.50-0.75)" },
      { item: "Momos", price: "₹60-80 ($0.75-1)" },
      { item: "Chai", price: "₹20-30 ($0.25-0.40)" },
      { item: "Thukpa", price: "₹100-150 ($1.20-1.80)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Pink Floyd Café", speed: "15-25 Mbps", quality: "Fair" },
        { name: "Stone Garden Café", speed: "20-30 Mbps", quality: "Good" },
        { name: "Local Dhabas", speed: "10-20 Mbps", quality: "Fair" }
      ],
      publicSpaces: [
        { name: "Village Center", speed: "15-25 Mbps", quality: "Fair" },
        { name: "Guesthouses Common Areas", speed: "20-35 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Mountain View Guesthouse",
        address: "Tosh Village, Parvati Valley",
        pricing: "₹1,500/month (with stay)",
        speedMbps: 25,
        amenities: ["Mountain Views", "Basic WiFi", "Common Area", "Peaceful Environment"]
      }
    ],
    localExperienceTips: [
      "Experience authentic Himalayan village life in remote mountain setting",
      "Trek to nearby villages like Malana and Chalal for cultural exploration",
      "Practice sunrise and sunset meditation with panoramic mountain views",
      "Learn about local farming practices and traditional mountain lifestyle",
      "Connect with international backpacker community in village cafes",
      "Explore the Parvati River and surrounding natural hot springs"
    ],
    insiderHacks: {
      accommodation: [
        "Book rooms facing the mountains for inspirational work views",
        "Choose guesthouses with generators for reliable power backup",
        "Negotiate weekly/monthly rates for extended digital nomad stays",
        "Opt for places with common kitchens to save on meal costs",
        "Book early for peak seasons - limited accommodation options available"
      ],
      food: [
        "Cook your own meals to save money and eat healthier",
        "Try local mountain honey and organic vegetables from village gardens",
        "Stock up on packaged foods and essentials during supply runs",
        "Enjoy fresh trout from local streams at village restaurants",
        "Share meals with other travelers to reduce costs and socialize"
      ],
      transport: [
        "Take bus to Barshaini, then 30-minute trek to reach Tosh village",
        "Carry light backpack for comfortable trek to village",
        "Use shared taxis from Kasol to Barshaini for convenient access",
        "Plan travel during good weather - monsoon makes trails difficult",
        "Keep emergency transportation contacts for medical or urgent situations"
      ]
    },
    secretSpots: [
      {
        name: "Tosh Glacier Point",
        location: "2-hour trek from village",
        tip: "Hidden glacier viewpoint with spectacular mountain panoramas and perfect meditation spot"
      },
      {
        name: "Stone Circle Sunrise Point",
        location: "20 minutes above village",
        tip: "Ancient stone formations perfect for sunrise meditation and mountain photography"
      }
    ],
    transportationTips: [
      "Take bus from Delhi/Chandigarh to Bhuntar, then taxi to Barshaini",
      "Trek final 2km from Barshaini to Tosh - no vehicles beyond this point",
      "Carry sturdy trekking shoes for mountain paths and village exploration",
      "Plan for weather delays during monsoon - roads can be blocked",
      "Keep backup transportation plans for emergency medical access"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant summer months (April-June) ideal for outdoor work and exploration",
        "Cold winter conditions (December-March) require heated indoor spaces",
        "Monsoon season (July-September) brings heavy rains affecting internet connectivity"
      ],
      healthConsiderations: [
        "High altitude (2400m) may cause initial acclimatization challenges",
        "Clean mountain air excellent for respiratory health and mental clarity",
        "Cold weather requires warm clothing and proper heating arrangements"
      ],
      equipmentNeeds: [
        "Warm clothes and sleeping bags essential for cold mountain nights",
        "Power banks and backup battery solutions for unreliable electricity",
        "Rain gear necessary during monsoon season for daily activities"
      ],
      bestMonths: "April to June and September to November for optimal conditions"
    }
  },
  rishikesh: {
    moneyTips: [
      "Stay in yoga ashrams for affordable accommodation and authentic spiritual experience",
      "Eat at local dhabas near Ganga for budget-friendly meals (₹80-150)",
      "Use shared auto-rickshaws and buses for economical local transportation",
      "Shop at Laxman Jhula market for reasonably priced yoga and spiritual items",
      "Take advantage of free yoga classes at various ashrams and community centers"
    ],
    streetFood: [
      { item: "Chole Bhature", price: "₹60-100 ($0.75-1.20)" },
      { item: "Aloo Puri", price: "₹40-70 ($0.50-0.85)" },
      { item: "Lassi", price: "₹30-60 ($0.40-0.75)" },
      { item: "Fruit Chat", price: "₹40-80 ($0.50-1)" },
      { item: "Ganga Aarti Prasad", price: "₹20-50 ($0.25-0.60)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "The Beatles Café", speed: "40-60 Mbps", quality: "Excellent" },
        { name: "Little Buddha Café", speed: "35-50 Mbps", quality: "Good" },
        { name: "German Bakery", speed: "30-45 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Laxman Jhula Area", speed: "25-40 Mbps", quality: "Good" },
        { name: "Ram Jhula Market", speed: "30-50 Mbps", quality: "Good" },
        { name: "Parmarth Niketan Ashram", speed: "35-55 Mbps", quality: "Excellent" }
      ]
    },
    coworkingSpaces: [
      {
        name: "The Hosteller Rishikesh",
        address: "Tapovan, Rishikesh",
        pricing: "₹8,000/month",
        speedMbps: 60,
        amenities: ["River Views", "Yoga Classes", "Community Events", "24/7 Access"]
      },
      {
        name: "Zostel Rishikesh",
        address: "Jonk, Rishikesh",
        pricing: "₹7,500/month",
        speedMbps: 50,
        amenities: ["Ganga Views", "Cafe", "Library", "Activity Room"]
      }
    ],
    localExperienceTips: [
      "Attend daily Ganga Aarti ceremony at sunset for spiritual inspiration",
      "Practice yoga and meditation at world-renowned ashrams and schools",
      "Experience white water rafting on the Ganges for adventure and team building",
      "Explore Beatles Ashram ruins for creative inspiration and historical insight",
      "Join international yoga teacher training courses for skill development",
      "Visit local markets for authentic Ayurvedic products and spiritual books"
    ],
    insiderHacks: {
      accommodation: [
        "Stay in Tapovan area for quieter environment away from main tourist crowds",
        "Book ashram accommodation for authentic spiritual experience at lower costs",
        "Choose places near suspension bridges for easy access to both sides",
        "Look for rooms with Ganga views for daily inspiration and meditation",
        "Negotiate monthly rates during off-season periods for better deals"
      ],
      food: [
        "Eat at ashram dining halls for pure vegetarian meals at budget prices",
        "Try organic cafes in Tapovan area for healthy international cuisine",
        "Visit local fruit vendors near ghats for fresh seasonal produce",
        "Enjoy traditional North Indian thalis at family-run restaurants",
        "Sample street food near Laxman Jhula but be mindful of hygiene standards"
      ],
      transport: [
        "Walk or cycle across suspension bridges - beautiful and free transportation",
        "Use shared rickshaws for longer distances within Rishikesh area",
        "Take local buses to nearby attractions like Haridwar and Dehradun",
        "Rent scooters for independent exploration of surrounding Himalayan foothills",
        "Book advance train tickets from Haridwar (30min drive) for major cities"
      ]
    },
    secretSpots: [
      {
        name: "Neer Garh Waterfall",
        location: "6km from Laxman Jhula",
        tip: "Hidden waterfall perfect for meditation and swimming, accessible by short trek through forest"
      },
      {
        name: "Kunjapuri Temple",
        location: "20km from Rishikesh",
        tip: "Sunrise temple visit with Himalayan views - perfect for morning meditation and inspiration"
      }
    ],
    transportationTips: [
      "Take train to Haridwar (30 minutes) then taxi/bus to Rishikesh",
      "Walk across iconic suspension bridges - Laxman Jhula and Ram Jhula",
      "Use local buses for budget travel to nearby hill stations and Delhi",
      "Rent motorcycles for exploring surrounding Himalayan foothills independently",
      "Book shared taxis for group trips to nearby attractions and airports"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant weather October-March ideal for outdoor yoga and riverside work",
        "Hot summer months (April-June) require air-conditioned spaces for comfort",
        "Monsoon season (July-September) brings heavy rains but lush green surroundings"
      ],
      healthConsiderations: [
        "River air beneficial for respiratory health and stress reduction",
        "Spiritual atmosphere promotes mental well-being and work-life balance",
        "Hot weather may require adjustment period for some visitors"
      ],
      equipmentNeeds: [
        "Light cotton clothing for hot weather and yoga practice",
        "Rain gear essential during monsoon season for daily activities",
        "Comfortable walking shoes for exploring riverfront areas and markets"
      ],
      bestMonths: "October to March for optimal weather and spiritual activities"
    }
  },
  pondicherry: {
    moneyTips: [
      "Stay in French Quarter heritage guesthouses for authentic colonial experience",
      "Eat at local Tamil restaurants for authentic South Indian meals (₹50-100)",
      "Use bicycles for eco-friendly and economical transportation around the city",
      "Shop at local markets in Tamil Quarter for better prices than tourist areas",
      "Visit Auroville community for affordable organic food and spiritual experiences"
    ],
    streetFood: [
      { item: "Masala Dosa", price: "₹40-80 ($0.50-1)" },
      { item: "French Baguette", price: "₹60-120 ($0.75-1.50)" },
      { item: "Idli Sambar", price: "₹30-60 ($0.40-0.75)" },
      { item: "Croissant", price: "₹80-150 ($1-1.80)" },
      { item: "Filter Coffee", price: "₹20-40 ($0.25-0.50)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Café Coffee Day (French Quarter)", speed: "40-60 Mbps", quality: "Excellent" },
        { name: "Baker Street", speed: "35-55 Mbps", quality: "Good" },
        { name: "Café Xtasi", speed: "30-50 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "French Institute", speed: "50-80 Mbps", quality: "Excellent" },
        { name: "Alliance Française", speed: "45-70 Mbps", quality: "Excellent" },
        { name: "Bharathi Park", speed: "25-40 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Work Café Pondy",
        address: "French Quarter, Pondicherry",
        pricing: "₹10,000/month",
        speedMbps: 75,
        amenities: ["Colonial Ambiance", "Café", "Meeting Rooms", "Heritage Building"]
      },
      {
        name: "The Heritage Co-working",
        address: "Mission Street, Pondicherry",
        pricing: "₹8,500/month",
        speedMbps: 60,
        amenities: ["French Architecture", "Library", "Event Space", "Cultural Programs"]
      }
    ],
    localExperienceTips: [
      "Explore French colonial architecture and heritage buildings in White Town",
      "Experience unique blend of Tamil and French cultures through food and festivals",
      "Visit Auroville international community for spiritual and sustainable living insights",
      "Enjoy beachfront cafes and restaurants along the scenic Promenade Beach",
      "Learn French language at Alliance Française for cultural immersion",
      "Participate in local art and cultural events at French Institute"
    ],
    insiderHacks: {
      accommodation: [
        "Stay in heritage hotels in French Quarter for authentic colonial experience",
        "Book guesthouses in Tamil Quarter for more affordable local atmosphere",
        "Choose seaside accommodations for morning beach walks and sunset views",
        "Look for places with traditional French windows and colonial architecture",
        "Negotiate long-term stays for better rates in heritage properties"
      ],
      food: [
        "Try French bakeries for authentic pastries and European breakfast options",
        "Eat at Tamil restaurants for traditional South Indian meals at local prices",
        "Visit Auroville for organic and international cuisine options",
        "Sample French-Indian fusion dishes unique to Pondicherry culture",
        "Enjoy beachfront dining with fresh seafood and sunset views"
      ],
      transport: [
        "Rent bicycles for eco-friendly exploration of compact French Quarter",
        "Use auto-rickshaws for longer distances and trips to Auroville",
        "Walk along the Promenade for scenic coastal routes and exercise",
        "Take local buses for budget travel to nearby beaches and attractions",
        "Rent scooters for independent exploration of surrounding Tamil villages"
      ]
    },
    secretSpots: [
      {
        name: "Paradise Beach",
        location: "Chunnambar, 30min by boat",
        tip: "Hidden pristine beach accessible only by boat - perfect for peaceful work sessions away from crowds"
      },
      {
        name: "Sacred Grove Auroville",
        location: "Auroville community",
        tip: "Meditation forest perfect for outdoor work sessions and spiritual inspiration"
      }
    ],
    transportationTips: [
      "Fly to Chennai (160km) then take bus or taxi to Pondicherry",
      "Use local buses for economical travel within city and to nearby towns",
      "Rent bicycles for exploring compact French Quarter and beachfront areas",
      "Take boats to nearby islands and secluded beaches for day trips",
      "Use shared autos for group travel to Auroville and surrounding attractions"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant winter months (November-February) ideal for outdoor work and exploration",
        "Hot summer weather (March-June) requires air-conditioned spaces for comfort",
        "Monsoon season (October-December) brings refreshing rains and cooler temperatures"
      ],
      healthConsiderations: [
        "Coastal sea breeze beneficial for health and mental well-being",
        "High humidity during summer months may require adjustment period",
        "French colonial architecture provides naturally cool indoor spaces"
      ],
      equipmentNeeds: [
        "Light breathable clothing suitable for hot and humid coastal weather",
        "Rain gear necessary during monsoon season for comfortable travel",
        "Sun protection essential for beach activities and outdoor exploration"
      ],
      bestMonths: "November to February for optimal weather and outdoor activities"
    }
  },
  kochi: {
    moneyTips: [
      "Stay in Fort Kochi heritage homestays for authentic local experience at good value",
      "Eat at local fish markets and toddy shops for budget-friendly authentic Kerala meals",
      "Use public ferries for economical and scenic transportation between islands",
      "Shop at spice markets in Mattancherry for direct prices on Kerala spices",
      "Take advantage of government backwater tours for affordable Kerala experiences"
    ],
    streetFood: [
      { item: "Fish Curry Rice", price: "₹80-150 ($1-1.80)" },
      { item: "Appam & Stew", price: "₹60-120 ($0.75-1.50)" },
      { item: "Banana Chips", price: "₹30-60 ($0.40-0.75)" },
      { item: "Fresh Coconut Water", price: "₹20-40 ($0.25-0.50)" },
      { item: "Prawn Koliwada", price: "₹100-180 ($1.20-2.20)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Kashi Art Café", speed: "50-70 Mbps", quality: "Excellent" },
        { name: "Tea Pot Café", speed: "40-60 Mbps", quality: "Good" },
        { name: "Café Mocha", speed: "35-55 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Fort Kochi Beach", speed: "30-50 Mbps", quality: "Good" },
        { name: "Marine Drive", speed: "40-65 Mbps", quality: "Excellent" },
        { name: "Lulu Mall", speed: "60-100 Mbps", quality: "Excellent" }
      ]
    },
    coworkingSpaces: [
      {
        name: "WorkSpace Kochi",
        address: "Marine Drive, Kochi",
        pricing: "₹12,000/month",
        speedMbps: 100,
        amenities: ["Harbor Views", "Meeting Rooms", "Café", "Networking Events"]
      },
      {
        name: "The Office Pass",
        address: "Kakkanad, Kochi",
        pricing: "₹9,000/month",
        speedMbps: 80,
        amenities: ["IT Hub Location", "24/7 Access", "Conference Rooms", "Parking"]
      }
    ],
    localExperienceTips: [
      "Explore historic Fort Kochi with colonial architecture and Chinese fishing nets",
      "Experience traditional Kerala backwaters through houseboat stays and village tours",
      "Learn about spice trading history at Mattancherry spice markets and warehouses",
      "Enjoy authentic Kerala cuisine featuring coconut, seafood, and aromatic spices",
      "Attend Kathakali dance performances for traditional Kerala cultural immersion",
      "Visit local art galleries and studios in Fort Kochi heritage district"
    ],
    insiderHacks: {
      accommodation: [
        "Stay in heritage homestays in Fort Kochi for authentic colonial experience",
        "Choose waterfront properties for harbor views and sea breeze comfort",
        "Book houseboat stays in backwaters for unique Kerala accommodation experience",
        "Look for places near ferry terminals for easy island-hopping access",
        "Negotiate long-term rates in residential areas like Panampilly for better value"
      ],
      food: [
        "Eat at local fish markets for freshest seafood at authentic prices",
        "Try toddy shops for traditional Kerala drinks and local atmosphere",
        "Visit spice markets to buy authentic Kerala spices at wholesale prices",
        "Sample street food near ferry terminals for local flavors and budget meals",
        "Enjoy backwater village meals for traditional home-cooked Kerala cuisine"
      ],
      transport: [
        "Use public ferries for scenic and economical travel between Kochi islands",
        "Rent scooters for independent exploration of Fort Kochi and surrounding areas",
        "Take auto-rickshaws for convenient door-to-door transportation within city",
        "Use app-based cabs for reliable transport to IT hubs and business districts",
        "Join backwater boat tours for group travel and sightseeing at shared costs"
      ]
    },
    secretSpots: [
      {
        name: "Kumbakonam Backwaters",
        location: "45 minutes from Kochi",
        tip: "Less touristy backwater village perfect for remote work with authentic Kerala village life"
      },
      {
        name: "Cherai Beach",
        location: "25km from Fort Kochi",
        tip: "Pristine beach with golden sand, perfect for morning work sessions with ocean views"
      }
    ],
    transportationTips: [
      "Fly directly to Kochi International Airport with excellent connectivity",
      "Use metro rail system for fast travel between major city areas",
      "Take public ferries for scenic routes between Ernakulam and Fort Kochi",
      "Rent two-wheelers for flexible exploration of narrow heritage streets",
      "Use app-based transportation for reliable service to IT parks and business areas"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant winter months (December-February) ideal for outdoor work and exploration",
        "Hot and humid summer (March-May) requires air-conditioned indoor spaces",
        "Monsoon season (June-September) brings heavy rains but lush green landscapes"
      ],
      healthConsiderations: [
        "Coastal sea breeze provides natural cooling and fresh air quality",
        "High humidity year-round may require adjustment period for some visitors",
        "Monsoon rains beneficial for air quality but require waterproof preparations"
      ],
      equipmentNeeds: [
        "Light, breathable clothing suitable for hot and humid tropical climate",
        "Waterproof bags and rain gear essential during lengthy monsoon season",
        "Dehumidifiers or moisture control helpful for electronics and documents"
      ],
      bestMonths: "December to February for optimal weather and comfortable working conditions"
    }
  },
  wayanad: {
    moneyTips: [
      "Stay in tea plantation homestays for authentic experience and reasonable rates",
      "Buy tea, coffee, and spices directly from plantations for best prices",
      "Use local buses and shared taxis for economical transportation between attractions",
      "Shop at Kalpetta and Sultan Bathery markets for local produce and crafts",
      "Book wildlife safaris through government offices for official rates"
    ],
    streetFood: [
      { item: "Kerala Meals", price: "₹80-150 ($1-1.80)" },
      { item: "Puttu & Kadala", price: "₹40-80 ($0.50-1)" },
      { item: "Fresh Tea", price: "₹10-30 ($0.12-0.40)" },
      { item: "Banana Fritters", price: "₹30-60 ($0.40-0.75)" },
      { item: "Spiced Coffee", price: "₹20-50 ($0.25-0.60)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Green Gates Hotel", speed: "40-60 Mbps", quality: "Good" },
        { name: "Woodlands Hotel", speed: "35-50 Mbps", quality: "Good" },
        { name: "Local Tea Shops", speed: "20-35 Mbps", quality: "Fair" }
      ],
      publicSpaces: [
        { name: "Kalpetta Town Center", speed: "30-50 Mbps", quality: "Good" },
        { name: "Sultan Bathery Market", speed: "25-45 Mbps", quality: "Good" },
        { name: "Resort Common Areas", speed: "40-70 Mbps", quality: "Excellent" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Mountain View Resort",
        address: "Kalpetta, Wayanad",
        pricing: "₹8,000/month (with accommodation)",
        speedMbps: 50,
        amenities: ["Mountain Views", "Tea Plantation Tours", "Nature Walks", "Organic Food"]
      },
      {
        name: "Wayanad WorkSpace",
        address: "Sultan Bathery, Wayanad",
        pricing: "₹6,000/month",
        speedMbps: 40,
        amenities: ["Quiet Environment", "Spice Garden", "Wildlife Tours", "Local Culture"]
      }
    ],
    localExperienceTips: [
      "Experience tea and coffee plantation life through guided tours and homestays",
      "Explore Wayanad Wildlife Sanctuary for elephant sightings and nature photography",
      "Trek to Chembra Peak for panoramic views and heart-shaped lake discovery",
      "Visit Edakkal Caves for ancient rock art and archaeological significance",
      "Learn about sustainable farming practices from local tribal communities",
      "Enjoy bamboo rafting and nature walks in pristine forest environments"
    ],
    insiderHacks: {
      accommodation: [
        "Stay in plantation bungalows for authentic colonial-era experience",
        "Book tree houses and eco-resorts for unique nature accommodation",
        "Choose homestays with families for authentic local culture immersion",
        "Look for properties offering guided plantation and spice tours",
        "Negotiate weekly rates during monsoon season for extended stays"
      ],
      food: [
        "Try plantation-to-table meals with fresh organic ingredients",
        "Sample traditional Kerala cuisine prepared by homestay families",
        "Visit spice plantations to learn cooking with fresh local spices",
        "Enjoy fresh mountain honey and homemade preserves from local producers",
        "Taste traditional tribal cuisine through cultural exchange programs"
      ],
      transport: [
        "Use local buses for economical travel between main towns and attractions",
        "Hire jeeps for wildlife safaris and rough terrain exploration",
        "Join group tours for shared transportation costs to remote trekking points",
        "Rent motorcycles for flexible exploration of mountain roads and plantations",
        "Book homestay pickup services from nearest bus stops and transportation hubs"
      ]
    },
    secretSpots: [
      {
        name: "Banasura Hill",
        location: "Near Banasura Dam",
        tip: "Less crowded peak with 360-degree mountain views, perfect for morning meditation and work sessions"
      },
      {
        name: "Thirunelli Temple Forest",
        location: "Thirunelli, Wayanad",
        tip: "Ancient temple in pristine forest setting - spiritual and peaceful environment for contemplative work"
      }
    ],
    transportationTips: [
      "Fly to Kozhikode (100km) then take bus or taxi to Wayanad",
      "Use KSRTC buses for reliable and economical travel within Kerala",
      "Hire local guides with vehicles for exploring remote plantations and tribal areas",
      "Book jeep safaris for wildlife sanctuary visits and rough terrain exploration",
      "Plan extra travel time during monsoon season due to mountain road conditions"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant weather year-round due to high altitude and forest cover",
        "Cool mornings and evenings ideal for outdoor work and plantation visits",
        "Monsoon season (June-September) brings heavy rains but spectacular green landscapes"
      ],
      healthConsiderations: [
        "Cool mountain climate beneficial for health and mental well-being",
        "Clean air quality excellent for respiratory health and stress relief",
        "High altitude provides natural cooling without need for air conditioning"
      ],
      equipmentNeeds: [
        "Light rain gear essential during monsoon months for outdoor activities",
        "Comfortable trekking shoes necessary for plantation walks and nature exploration",
        "Insect repellent helpful for forest areas and wildlife sanctuary visits"
      ],
      bestMonths: "October to May for optimal weather and outdoor activities"
    }
  },
  dharamkot: {
    moneyTips: [
      "Stay in shared accommodations with other digital nomads for community and cost savings",
      "Eat at local Tibetan restaurants for authentic meals at reasonable prices",
      "Join group treks and activities to share transportation and guide costs",
      "Shop at McLeod Ganj markets but negotiate prices - tourist area markup expected",
      "Use co-living spaces for inclusive packages with accommodation, meals, and internet"
    ],
    streetFood: [
      { item: "Momos", price: "₹60-100 ($0.75-1.20)" },
      { item: "Thukpa", price: "₹80-150 ($1-1.80)" },
      { item: "Tibetan Bread", price: "₹40-80 ($0.50-1)" },
      { item: "Butter Tea", price: "₹30-60 ($0.40-0.75)" },
      { item: "Dal Bhat", price: "₹100-180 ($1.20-2.20)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Moonpeak Espresso", speed: "60-80 Mbps", quality: "Excellent" },
        { name: "Tibet Kitchen", speed: "50-70 Mbps", quality: "Good" },
        { name: "Common Ground Café", speed: "45-65 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "McLeod Ganj Library", speed: "40-60 Mbps", quality: "Good" },
        { name: "Namgyal Monastery", speed: "30-50 Mbps", quality: "Good" },
        { name: "Main Square Dharamkot", speed: "35-55 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "NomadGao Dharamkot",
        address: "Upper Dharamkot, Himachal Pradesh",
        pricing: "₹15,000/month (inclusive)",
        speedMbps: 80,
        amenities: ["Mountain Views", "Community Events", "Rooftop Restaurant", "Coworking Space"]
      },
      {
        name: "Alt Life Hostel",
        address: "McLeod Ganj, Dharamshala",
        pricing: "₹12,000/month",
        speedMbps: 70,
        amenities: ["70-Person Workspace", "Music Sessions", "Bonfire Nights", "Community Kitchen"]
      }
    ],
    localExperienceTips: [
      "Experience Tibetan Buddhist culture through monastery visits and teachings",
      "Learn meditation and mindfulness practices from resident monks and teachers",
      "Explore the home of Dalai Lama and Tibetan government in exile",
      "Trek to nearby villages like Bhagsu and Naddi for scenic mountain views",
      "Connect with international digital nomad community in village cafes",
      "Participate in local festivals and cultural events throughout the year"
    ],
    insiderHacks: {
      accommodation: [
        "Book co-living spaces for all-inclusive packages with meals and internet",
        "Choose upper Dharamkot for quieter environment away from tourist crowds",
        "Stay in Tibetan-run guesthouses for authentic cultural experience",
        "Look for places with mountain views to inspire daily work sessions",
        "Negotiate monthly rates for extended digital nomad stays"
      ],
      food: [
        "Eat at Tibetan restaurants for authentic momos, thukpa, and butter tea",
        "Try local dhabas for budget-friendly Indian meals and regional specialties",
        "Join community kitchens in co-living spaces for social cooking experiences",
        "Sample Israeli cuisine - popular due to large Israeli traveler community",
        "Shop at local markets for fresh produce and cook your own healthy meals"
      ],
      transport: [
        "Walk between Dharamkot and McLeod Ganj - scenic 15-minute mountain path",
        "Use shared taxis for trips to Dharamshala town and regional attractions",
        "Join group treks to share guide costs and meet fellow travelers",
        "Rent motorcycles for independent exploration of surrounding Himalayan valleys",
        "Take local buses for budget travel to nearby hill stations and Delhi"
      ]
    },
    secretSpots: [
      {
        name: "Bhagsu Waterfall Upper Pools",
        location: "30-minute trek above main falls",
        tip: "Hidden natural pools above crowded main waterfall - perfect for peaceful work sessions"
      },
      {
        name: "Triund Ridge Sunrise Point",
        location: "2.5km trek from Dharamkot",
        tip: "Spectacular sunrise views over Dhauladhar mountains - inspiring location for morning work"
      }
    ],
    transportationTips: [
      "Fly to Kangra Airport (15km) or take train to Pathankot then bus to Dharamshala",
      "Use local buses from Delhi/Chandigarh for economical mountain transportation",
      "Walk mountain paths between villages for exercise and scenic commuting",
      "Hire taxis for group transportation to trekking points and regional attractions",
      "Keep emergency contacts for medical evacuation from remote mountain locations"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant summer months (April-June) ideal for outdoor work and mountain exploration",
        "Cold winter weather (December-March) requires heated indoor workspaces",
        "Monsoon season (July-September) brings heavy mountain rains affecting connectivity"
      ],
      healthConsiderations: [
        "Clean mountain air excellent for respiratory health and mental clarity",
        "High altitude (2100m) may require brief acclimatization period",
        "Peaceful environment ideal for stress reduction and work-life balance"
      ],
      equipmentNeeds: [
        "Warm clothing essential for cold mountain nights and winter months",
        "Rain gear necessary during monsoon season for comfortable outdoor activities",
        "Sturdy footwear required for mountain trekking and village exploration"
      ],
      bestMonths: "March to June and September to November for optimal conditions"
    }
  },
  darjeeling: {
    moneyTips: [
      "Stay in budget hotels near Mall Road for convenient access and reasonable rates",
      "Buy famous Darjeeling tea directly from gardens for authentic quality and fair prices",
      "Use shared jeeps and local buses for economical transportation around hill station",
      "Shop at Chowk Bazaar for local crafts and woolens at better prices than tourist shops",
      "Take toy train during off-season for lower fares and fewer crowds"
    ],
    streetFood: [
      { item: "Darjeeling Tea", price: "₹20-50 ($0.25-0.60)" },
      { item: "Momos", price: "₹50-100 ($0.60-1.20)" },
      { item: "Thukpa", price: "₹80-150 ($1-1.80)" },
      { item: "Churpee (Yak Cheese)", price: "₹100-200 ($1.20-2.40)" },
      { item: "Gundruk Soup", price: "₹60-120 ($0.75-1.50)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Glenary's Bakery", speed: "40-60 Mbps", quality: "Good" },
        { name: "Keventers", speed: "35-55 Mbps", quality: "Good" },
        { name: "Café Coffee Day", speed: "30-50 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Mall Road Area", speed: "25-45 Mbps", quality: "Good" },
        { name: "Chowrasta (Mall)", speed: "30-50 Mbps", quality: "Good" },
        { name: "Hotels Common Areas", speed: "35-60 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Hidden Monkey Hostel",
        address: "Gandhi Road, Darjeeling",
        pricing: "₹8,000/month",
        speedMbps: 50,
        amenities: ["Mountain Views", "Café", "Rooftop Workspace", "Networking Meetups"]
      },
      {
        name: "Tara Circle Hostel",
        address: "Mall Road, Darjeeling",
        pricing: "₹7,500/month",
        speedMbps: 45,
        amenities: ["Central Location", "Heritage Building", "Work Areas", "Cultural Programs"]
      }
    ],
    localExperienceTips: [
      "Experience world-famous Darjeeling tea culture through garden visits and tastings",
      "Ride the historic toy train (UNESCO World Heritage) for scenic mountain views",
      "Watch spectacular sunrise over Kanchenjunga from Tiger Hill viewpoint",
      "Explore Tibetan Buddhist monasteries and learn about local spiritual practices",
      "Learn about colonial British hill station history through heritage walks",
      "Trek to nearby attractions like Sandakphu for Himalayan mountain adventures"
    ],
    insiderHacks: {
      accommodation: [
        "Stay in heritage hotels for authentic colonial hill station experience",
        "Choose accommodations with Kanchenjunga views for daily mountain inspiration",
        "Book places near Mall Road for easy access to cafes and cultural sites",
        "Look for hotels with fireplaces for cozy winter working conditions",
        "Negotiate off-season rates during monsoon months for budget stays"
      ],
      food: [
        "Try traditional Tibetan and Nepali cuisine at local family restaurants",
        "Sample authentic Darjeeling tea at gardens and specialty tea houses",
        "Eat at local markets for budget-friendly traditional hill station meals",
        "Visit bakeries on Mall Road for British-era style pastries and breakfast",
        "Experience momos and thukpa - popular among locals and visitors alike"
      ],
      transport: [
        "Use shared jeeps for economical travel to nearby attractions and viewpoints",
        "Walk along Mall Road - most attractions within comfortable distance",
        "Take toy train for scenic journey but book advance during peak season",
        "Hire private taxis for day trips to tea gardens and mountain viewpoints",
        "Join group treks for shared guide costs and transportation to trekking points"
      ]
    },
    secretSpots: [
      {
        name: "Tinchuley Village",
        location: "28km from Darjeeling",
        tip: "Organic village with homestays, perfect for remote work with authentic hill life experience"
      },
      {
        name: "Rock Garden Waterfall",
        location: "Chunnu Summer Falls",
        tip: "Hidden waterfall garden perfect for peaceful work sessions away from tourist crowds"
      }
    ],
    transportationTips: [
      "Fly to Bagdogra Airport (90km) then take taxi or bus to Darjeeling",
      "Take train to New Jalpaiguri then toy train or taxi for scenic hill journey",
      "Use shared jeeps for budget travel within Darjeeling and surrounding hill areas",
      "Book toy train rides in advance during peak tourist seasons",
      "Plan extra time for mountain travel due to winding roads and weather delays"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant summer months (April-June) ideal for outdoor work and sightseeing",
        "Cool winter weather (December-March) requires heated spaces for comfortable work",
        "Monsoon season (July-September) brings heavy rains but lush green tea gardens"
      ],
      healthConsiderations: [
        "Cool mountain climate beneficial for health and mental clarity",
        "High altitude (2050m) may require brief adjustment period for some visitors",
        "Clean air quality excellent for respiratory health compared to plains"
      ],
      equipmentNeeds: [
        "Warm clothing essential for cold mountain evenings and winter months",
        "Rain gear necessary during heavy monsoon season for comfortable travel",
        "Good walking shoes required for exploring steep hill station streets"
      ],
      bestMonths: "March to May and October to December for optimal weather and visibility"
    }
  }
};

export function getCitySpecificData(citySlug: string): CitySpecificData | null {
  return getCitySpecificDataComplete(citySlug) || citySpecificData[citySlug] || null;
}