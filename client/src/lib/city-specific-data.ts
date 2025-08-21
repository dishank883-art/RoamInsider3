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
        location: "Salt Lake City, Sector V",
        pricing: "₹7,500/month",
        description: "Modern tech hub in IT corridor with startup ecosystem and networking events",
        amenities: ["Startup Community", "Mentorship", "Events", "High-Speed WiFi"],
        openHours: "9:00 AM - 9:00 PM"
      },
      {
        name: "The Culture Canvas",
        location: "Park Street Area",
        pricing: "₹6,000/month",
        description: "Creative co-working space in cultural heart of city with artist community",
        amenities: ["Cultural Events", "Art Exhibitions", "Library", "Café Culture"],
        openHours: "8:00 AM - 10:00 PM"
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
  bir: {
    moneyTips: [
      "Stay in budget guesthouses near the paragliding landing site for convenience",
      "Eat at Tibetan cafes and local dhabas for authentic meals under ₹150",
      "Book paragliding packages in advance for better rates during season",
      "Shop for Tibetan handicrafts and prayer flags at monastery gift shops",
      "Use shared taxis and local buses for economical travel around Dharamshala region"
    ],
    streetFood: [
      { item: "Tibetan Momos", price: "₹80-120 ($1-1.5)" },
      { item: "Thukpa (Soup)", price: "₹100-150 ($1.2-1.8)" },
      { item: "Butter Tea", price: "₹30-50 ($0.35-0.60)" },
      { item: "Tingmo (Steamed Bread)", price: "₹40-60 ($0.50-0.70)" },
      { item: "Tsampa", price: "₹50-80 ($0.60-1)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "The Hideout Café", speed: "35-50 Mbps", quality: "Good" },
        { name: "June 16th Café", speed: "25-40 Mbps", quality: "Good" },
        { name: "Avva's Café", speed: "30-45 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Paragliding Landing Site", speed: "20-35 Mbps", quality: "Fair" },
        { name: "Deer Park Institute", speed: "40-60 Mbps", quality: "Good" },
        { name: "Local Libraries", speed: "25-40 Mbps", quality: "Fair" }
      ]
    },
    coworkingSpaces: [
      {
        name: "The Hideout Café & Co-working",
        address: "Bir Road, near Landing Zone",
        pricing: "₹2,500/month",
        speedMbps: 40,
        amenities: ["Mountain View", "Pilot Community", "Equipment Storage", "Strong WiFi"]
      },
      {
        name: "Zostel Bir Co-work",
        address: "Bir Village Center",
        pricing: "₹2,000/month",
        speedMbps: 35,
        amenities: ["Community Events", "Budget-Friendly", "Social Environment", "Power Backup"]
      }
    ],
    localExperienceTips: [
      "Visit Chokling Monastery for meditation sessions and Tibetan Buddhist culture",
      "Try paragliding with certified instructors - one of world's best sites",
      "Explore nearby Billing for stunning Himalayan views and mountain biking",
      "Attend spiritual retreats and teachings at Deer Park Institute",
      "Join sunrise hikes to Rajgundha valley for spectacular mountain panoramas",
      "Experience traditional Tibetan festivals and ceremonies throughout the year"
    ],
    insiderHacks: {
      accommodation: [
        "Stay in Tibetan colony area for authentic cultural immersion",
        "Book accommodations with mountain views for best paragliding site access",
        "Consider monastery guesthouses for spiritual ambiance and budget rates",
        "Look for places with backup power - frequent outages during monsoon",
        "Choose locations within walking distance of landing site and cafes"
      ],
      food: [
        "Eat at Tibetan refugee family-run restaurants for authentic cuisine",
        "Try traditional butter tea and tsampa for genuine Tibetan experience",
        "Visit monastery kitchens during festival times for community meals",
        "Shop at local markets for fresh organic produce from nearby farms",
        "Join cooking classes with local Tibetan families to learn traditional dishes"
      ],
      transport: [
        "Use shared jeeps from Pathankot railway station (most economical route)",
        "Rent bikes in Bir for exploring Billing and nearby villages",
        "Join group transportation with paragliding schools for discounted rates",
        "Walk between main sites - Bir is very compact and pedestrian-friendly",
        "Share costs with other travelers for trips to Dharamshala and McLeodganj"
      ]
    },
    secretSpots: [
      {
        name: "Secret Meditation Cave",
        location: "Above Billing Road",
        tip: "Hike 1 hour beyond main paragliding takeoff for natural caves",
        coordinates: "32.02°N, 76.72°E"
      },
      {
        name: "Sunrise View Point",
        location: "Rajgundha Valley Trail",
        tip: "Start 5 AM hike for stunning sunrise over Dhauladhar range",
        timing: "Best in clear weather months"
      },
      {
        name: "Traditional Tibetan Workshop",
        location: "Tibetan Colony",
        tip: "Visit traditional carpet weaving and incense making workshops",
        timing: "9 AM - 5 PM, closed Sundays"
      }
    ],
    transportationTips: [
      "Use shared jeeps from Pathankot railway station (most economical route)",
      "Rent bikes in Bir for exploring Billing and nearby villages",
      "Join group transportation with paragliding schools for discounted rates",
      "Walk between main sites - Bir is very compact and pedestrian-friendly",
      "Share costs with other travelers for trips to Dharamshala and McLeodganj"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant mountain climate with cool mornings perfect for focused work",
        "Monsoon season (Jul-Sep) brings heavy rains affecting outdoor activities",
        "Clear post-monsoon period (Oct-Dec) ideal for outdoor coworking"
      ],
      healthConsiderations: [
        "Clean mountain air excellent for respiratory health and mental clarity",
        "Moderate altitude requires gradual acclimatization for some visitors",
        "UV exposure higher at altitude - sunscreen essential for outdoor work"
      ],
      equipmentNeeds: [
        "Warm clothing necessary for early mornings and winter months",
        "Power backup solutions recommended during monsoon power cuts",
        "Good hiking boots essential for exploring surrounding mountain trails"
      ],
      bestMonths: "March to June and October to December for optimal conditions"
    }
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
  }
};

export function getCitySpecificData(citySlug: string): CitySpecificData | null {
  return getCitySpecificDataComplete(citySlug) || citySpecificData[citySlug] || null;
}