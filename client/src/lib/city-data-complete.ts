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

export const citySpecificDataComplete: Record<string, CitySpecificData> = {
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
        { name: "Blue Tokai Coffee Roasters", speed: "50-80 Mbps", quality: "Excellent" },
        { name: "The Flour Works", speed: "30-50 Mbps", quality: "Good" },
        { name: "Café Coffee Day (Multiple)", speed: "25-40 Mbps", quality: "Good" }
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
      }
    ],
    localExperienceTips: [
      "Visit Shaniwar Wada early morning to avoid crowds",
      "Explore Koregaon Park for trendy cafes and international cuisine",
      "Take day trips to Lonavala and Khandala hill stations",
      "Join weekend treks to nearby Sahyadri mountains",
      "Experience Pune's famous Ganesh Chaturthi celebrations"
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
        "Negotiate monthly rates in Airbnb for 30+ day stays"
      ],
      food: [
        "Eat at local 'katta' joints for authentic Pune street food experience",
        "Visit Goodluck Cafe for famous bun maska and Irani chai",
        "Try Marathi thali at Shabree for regional specialties",
        "Shop at Mahatma Phule Market for fresh produce at wholesale prices"
      ],
      transport: [
        "Use Pune Metro for fastest travel between major areas",
        "Book Ola/Uber Share for cost-effective rides during peak hours",
        "Rent monthly bikes from Bounce for ₹2,500-3,000",
        "Use PMPML Chalo app for real-time bus tracking"
      ]
    },
    secretSpots: [
      {
        name: "Quieter Coworking at Symbiosis",
        location: "Lavale",
        tip: "Access library and campus cafes for peaceful work - visitor pass available",
        timing: "9 AM - 6 PM"
      },
      {
        name: "Hidden Sunset Point",
        location: "Sinhagad Fort",
        tip: "Trek during weekdays for empty fort and stunning valley views",
        coordinates: "18.366°N, 73.755°E"
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
      "Take boat rides on Lake Pichola during sunset for magical views",
      "Explore City Palace complex early morning before crowds",
      "Attend traditional Rajasthani cultural shows at heritage hotels",
      "Visit local miniature painting workshops for authentic art",
      "Take heritage walks through narrow lanes with local guides"
    ],
    transportationTips: [
      "Use auto-rickshaws for short distances - negotiate rates (₹50-100)",
      "Rent scooters from local shops for ₹300-500/day to explore city",
      "Take shared taxis to Udaipur Airport - cheaper than private cabs",
      "Walk around old city area - most attractions within 2km radius",
      "Book Uber/Ola for longer distances or night travel for safety",
      "Use bicycle rentals from guesthouses for eco-friendly exploration"
    ],
    climateImpact: {
      workingConditions: [
        "Hot summers (April-June): Work early morning/evening - too hot midday",
        "Pleasant winters (October-March): Perfect for outdoor workspaces and rooftop offices",
        "Monsoon season (July-September): Limited but refreshing - good for indoor work"
      ],
      healthConsiderations: [
        "Extreme summer heat reaches 45°C - heat stroke risk during outdoor activities",
        "Dry climate year-round - stay hydrated and use moisturizers",
        "Low pollution levels compared to metros - good for respiratory health"
      ],
      equipmentNeeds: [
        "Desert coolers more effective than AC during dry summers",
        "Backup power essential - frequent outages in summer",
        "UV protection for outdoor work - strong desert sun"
      ],
      bestMonths: "October to March for comfortable working temperatures"
    },
    insiderHacks: {
      accommodation: [
        "Stay in heritage havelis converted to guesthouses for authentic experience",
        "Book palace hotels during off-season for royal experience at lower rates",
        "Look for rooftop accommodations overlooking City Palace",
        "Negotiate long-term stays at family-run guesthouses near Jagdish Temple"
      ],
      food: [
        "Eat at local 'thali' places in old city for authentic Rajasthani cuisine",
        "Try street food at Chetak Circle for local flavors away from tourists",
        "Visit Nathdwara for famous pedas and traditional sweets",
        "Book cooking classes at heritage hotels for royal recipes"
      ],
      transport: [
        "Use shared autos and city buses for economical city travel",
        "Rent bikes to explore countryside and nearby villages",
        "Book private taxis for day trips to Chittorgarh and Kumbhalgarh",
        "Use app-based rides during early morning for better rates"
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
        tip: "Visit during non-festival times to interact directly with artisans",
        timing: "10 AM - 5 PM"
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
        { name: "Gangtok Airport", speed: "40-60 Mbps", quality: "Good" },
        { name: "Palzor Stadium Area", speed: "20-30 Mbps", quality: "Fair" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Mountain View Coworking",
        address: "MG Marg, Gangtok",
        pricing: "₹3,800/month",
        speedMbps: 45,
        amenities: ["Mountain Views", "Tibetan Culture", "Local Community", "Tea Service"]
      },
      {
        name: "Himalayan Hub",
        address: "Development Area, Gangtok",
        pricing: "₹3,200/month", 
        speedMbps: 40,
        amenities: ["Peaceful Environment", "Local Networking", "Cultural Events", "Meditation Space"]
      }
    ],
    localExperienceTips: [
      "Visit Rumtek Monastery for peaceful meditation and mountain views",
      "Take cable car rides for panoramic Kanchenjunga mountain views",
      "Explore local markets for authentic Sikkimese handicrafts and teas",
      "Join Buddhist meditation sessions at local monasteries",
      "Experience traditional Sikkimese cuisine at family-run restaurants"
    ],
    transportationTips: [
      "Use shared jeeps (shared taxis) for intercity travel - ₹50-100 per person",
      "Book private taxis for day trips to Tsomgo Lake and Nathula Pass",
      "Walk around MG Marg area - most attractions within walking distance",
      "Use local buses for budget travel to nearby towns (₹20-50)",
      "Rent bikes carefully - mountain roads require experience",
      "Keep permits ready - required for many tourist destinations"
    ],
    climateImpact: {
      workingConditions: [
        "Cool temperatures year-round perfect for focused work - rarely exceeds 25°C",
        "Monsoon season (June-September): Indoor work preferred due to heavy rains and landslides",
        "Clear winter mornings (December-February) offer stunning mountain views for motivation"
      ],
      healthConsiderations: [
        "High altitude (5,410 ft) may cause initial breathlessness - acclimatize gradually",
        "Clean mountain air excellent for respiratory health and mental clarity",
        "Strong UV rays at altitude - use sunscreen even on cloudy days"
      ],
      equipmentNeeds: [
        "Warm clothing essential - temperatures drop to 2°C in winter",
        "Backup power advisable during monsoon season due to landslides affecting electricity",
        "Humidifier may be needed during dry winter months"
      ],
      bestMonths: "March to May and September to November for optimal conditions"
    },
    insiderHacks: {
      accommodation: [
        "Stay in homestays for authentic Sikkimese family experience and home-cooked meals",
        "Book accommodations with mountain views - worth the slight extra cost",
        "Look for places near MG Marg for easy access to cafes and services",
        "Negotiate weekly/monthly rates for extended stays in guest houses"
      ],
      food: [
        "Try authentic Sikkimese momos at local joints rather than tourist restaurants",
        "Visit local tea gardens and buy fresh Sikkim tea directly from producers",
        "Eat at Tibetan refugee community restaurants for authentic Tibetan cuisine",
        "Try local fermented foods like gundruk and sinki for unique flavors"
      ],
      transport: [
        "Share costs with other travelers for expensive permit-required destinations",
        "Use government buses for budget travel to nearby hill stations",
        "Book jeeps through local travel agents for better rates than hotels",
        "Walk whenever possible - the city is compact and pedestrian-friendly"
      ]
    },
    secretSpots: [
      {
        name: "Peaceful Monastery Work Spot",
        location: "Enchey Monastery",
        tip: "Visit during prayer times for spiritual ambiance while working on laptop",
        timing: "6 AM - 6 PM",
        coordinates: "27.341°N, 88.625°E"
      },
      {
        name: "Hidden Valley View",
        location: "Tashi View Point",
        tip: "Early morning visits offer solitude and perfect lighting for video calls",
        timing: "5:30 AM - 7 AM"
      }
    ]
  },
  mcleodganj: {
    moneyTips: [
      "Stay in Tibetan refugee-run guesthouses for authentic experience and lower costs",
      "Eat at local Tibetan restaurants instead of Western cafes - much cheaper and authentic",
      "Use local buses to Dharamshala instead of expensive taxis (₹20 vs ₹200)",
      "Shop for Tibetan handicrafts directly from monasteries and refugee cooperatives",
      "Book meditation retreats and yoga courses directly with teachers, not through agencies"
    ],
    streetFood: [
      { item: "Tibetan Momos", price: "₹80-120 ($1-1.5)" },
      { item: "Thukpa", price: "₹100-150 ($1.2-1.8)" },
      { item: "Tibetan Bread with Yak Cheese", price: "₹60-90 ($0.7-1.1)" },
      { item: "Tingmo (Steamed Bread)", price: "₹40-60 ($0.5)" },
      { item: "Butter Tea", price: "₹30-50 ($0.4)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Common Ground Café", speed: "30-50 Mbps", quality: "Good" },
        { name: "Moonpeak Espresso", speed: "25-40 Mbps", quality: "Good" },
        { name: "Tibet Kitchen Café", speed: "20-35 Mbps", quality: "Fair" }
      ],
      publicSpaces: [
        { name: "Main Temple Complex", speed: "15-25 Mbps", quality: "Fair" },
        { name: "McLeod Square", speed: "10-20 Mbps", quality: "Fair" },
        { name: "Library of Tibetan Works", speed: "35-50 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Dharamkot Digital Nomad Hub",
        address: "Dharamkot Village, McLeodganj",
        pricing: "₹2,800/month",
        speedMbps: 35,
        amenities: ["Mountain Views", "Meditation Space", "Community Garden", "Library"]
      },
      {
        name: "Bhagsu Cowork Mountain",
        address: "Bhagsunag Road, McLeodganj",
        pricing: "₹2,200/month",
        speedMbps: 30,
        amenities: ["Himalayan Views", "Yoga Studio", "Organic Café", "Spiritual Community"]
      }
    ],
    localExperienceTips: [
      "Attend teachings by Dalai Lama (when in residence) - register early online",
      "Join meditation courses at Tushita Meditation Centre for inner peace",
      "Trek to Triund for spectacular Dhauladhar mountain views",
      "Visit Library of Tibetan Works for deep dive into Buddhist philosophy",
      "Experience authentic Tibetan culture at refugee settlements"
    ],
    transportationTips: [
      "Use shared taxis from Dharamshala bus stand - ₹25 per person vs ₹300 private",
      "Walk between McLeodganj and Dharamkot (2km) for daily exercise and views",
      "Take local buses to nearby hill stations like Palampur and Bir",
      "Rent motorcycles for exploring Kangra Valley (₹600-800/day)",
      "Use auto-rickshaws for short distances within McLeodganj (₹50-100)",
      "Book Volvo buses online for comfortable overnight travel to Delhi/Chandigarh"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant summers (April-June): Perfect working weather 15-25°C with cool breezes",
        "Monsoon season (July-September): Heavy rains may disrupt internet, indoor work advised",
        "Cold winters (December-February): Snow possible, heating essential, stunning views"
      ],
      healthConsiderations: [
        "High altitude (6,831 ft) may cause initial adjustment issues - drink water, rest",
        "Excellent air quality benefits respiratory health and mental clarity",
        "Strong mountain UV rays - sunscreen essential even in winter"
      ],
      equipmentNeeds: [
        "Warm winter clothing essential - temperatures can drop below freezing",
        "Reliable heating for winter months - room heaters or hot water bottles",
        "Backup internet dongles - mountain weather can affect connectivity"
      ],
      bestMonths: "March to June and September to November for ideal working conditions"
    },
    insiderHacks: {
      accommodation: [
        "Stay in Dharamkot village for mountain views and peaceful environment",
        "Book guesthouses run by Tibetan refugees for cultural immersion",
        "Look for places with sunrise mountain views - magical for morning work",
        "Negotiate monthly rates - significant discounts for 30+ day stays"
      ],
      food: [
        "Eat at local Tibetan family restaurants for authentic home-cooked meals",
        "Try yak cheese and Tibetan butter tea for unique mountain experience", 
        "Buy organic vegetables from local farms in Dharamkot village",
        "Order from Common Ground Café for healthy Western options when needed"
      ],
      transport: [
        "Share trek costs with other nomads for weekend mountain adventures",
        "Use government buses for budget travel to nearby destinations",
        "Walk to Bhagsu waterfall and beyond for free mountain exercise",
        "Join group travels to Spiti Valley and Ladakh organized by local agencies"
      ]
    },
    secretSpots: [
      {
        name: "Hidden Meditation Cave",
        location: "Dharamkot Forest",
        tip: "Trek 30 minutes beyond Dharamkot village for quiet work space in nature",
        coordinates: "32.248°N, 76.325°E"
      },
      {
        name: "Sunrise Point Office",
        location: "Naddi Village",
        tip: "Work during sunrise with panoramic Dhauladhar range views - bring warm clothes",
        timing: "5:30 AM - 8 AM"
      }
    ]
  },
  shillong: {
    moneyTips: [
      "Stay in local Khasi family homestays in Laitumkhrah for authentic experience",
      "Eat at local Khasi restaurants for traditional meals under ₹150",
      "Use shared taxis (shared sumos) for intercity travel - very economical",
      "Shop at Bara Bazaar for local produce and handmade items at wholesale prices",
      "Book music lessons with local musicians - Shillong is known as 'Rock Capital of India'"
    ],
    streetFood: [
      { item: "Jadoh (Khasi Rice Dish)", price: "₹80-120 ($1-1.5)" },
      { item: "Tungrymbai (Fermented Soybean)", price: "₹60-90 ($0.7-1.1)" },
      { item: "Dohneiiong (Pork Curry)", price: "₹120-180 ($1.5-2.2)" },
      { item: "Pukhlein (Rice Cake)", price: "₹30-50 ($0.4)" },
      { item: "Local Momos", price: "₹70-100 ($0.8-1.2)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Café Shillong Heritage", speed: "25-40 Mbps", quality: "Good" },
        { name: "ML 05 Café", speed: "30-45 Mbps", quality: "Good" },
        { name: "Café Umbir", speed: "20-35 Mbps", quality: "Fair" }
      ],
      publicSpaces: [
        { name: "Ward's Lake Area", speed: "15-25 Mbps", quality: "Fair" },
        { name: "Police Bazaar", speed: "20-30 Mbps", quality: "Fair" },
        { name: "Don Bosco Centre", speed: "35-50 Mbps", quality: "Good" }
      ]
    },
    coworkingSpaces: [
      {
        name: "Northeast Digital Hub",
        address: "Police Bazaar, Shillong",
        pricing: "₹3,200/month",
        speedMbps: 40,
        amenities: ["Local Community", "Cultural Events", "Music Studio", "Startup Support"]
      },
      {
        name: "Shillong Innovation Centre",
        address: "Laitumkhrah, Shillong",
        pricing: "₹2,800/month",
        speedMbps: 35,
        amenities: ["Pine Forest Views", "Quiet Environment", "Local Networking", "Mentorship"]
      }
    ],
    localExperienceTips: [
      "Experience live music scene - Shillong has incredible rock and blues culture",
      "Visit living root bridges in nearby Cherrapunji - UNESCO World Heritage site",
      "Explore Khasi Hills for waterfalls and pristine natural beauty",
      "Learn about matrilineal society and Khasi culture from local families",
      "Attend traditional Khasi festivals and ceremonies when possible"
    ],
    transportationTips: [
      "Use shared sumos (shared taxis) for long-distance travel - ₹100-200 vs ₹1500+ private",
      "Local taxis for city travel - negotiate fixed rates (₹200-500 for full day)",
      "Walk around city center - Police Bazaar to Ward's Lake area is very walkable",
      "Rent bikes for exploring nearby villages and waterfalls (₹400-600/day)",
      "Use government buses for budget travel to Guwahati and other cities",
      "Book helicopter rides to remote areas during good weather seasons"
    ],
    climateImpact: {
      workingConditions: [
        "Pleasant year-round climate (15-25°C) - one of India's most comfortable cities",
        "Heavy monsoon (June-September) - very high rainfall but lush green environment",
        "Cool summers perfect for productivity - rarely gets too hot for work"
      ],
      healthConsiderations: [
        "High humidity during monsoons - may affect sensitive electronic equipment",
        "Excellent air quality due to extensive forests - great for health",
        "Moderate altitude (4,908 ft) - generally no acclimatization issues"
      ],
      equipmentNeeds: [
        "Dehumidifiers essential during monsoon for equipment protection",
        "Light woolens needed year-round - temperatures can drop suddenly",
        "Waterproof bags for electronics during heavy monsoon season"
      ],
      bestMonths: "October to May for optimal working conditions with less rainfall"
    },
    insiderHacks: {
      accommodation: [
        "Stay with Khasi families to experience matrilineal culture firsthand",
        "Book accommodations near Ward's Lake for peaceful morning work environment",
        "Look for places in Laitumkhrah area for authentic local neighborhood feel",
        "Negotiate long-term homestay rates for cultural immersion experience"
      ],
      food: [
        "Try traditional Khasi cuisine - completely different from mainland Indian food",
        "Visit local meat markets for fresh organic produce from hill farms",
        "Eat at family-run restaurants for authentic home-style Khasi meals",
        "Try locally brewed rice beer and traditional fermented foods"
      ],
      transport: [
        "Join group travels to Cherrapunji and Mawlynnong (cleanest village in Asia)",
        "Share costs for visits to living root bridges and remote waterfalls",
        "Use local knowledge - ask families about seasonal road conditions",
        "Book early for helicopter services to remote areas during peak season"
      ]
    },
    secretSpots: [
      {
        name: "Hidden Waterfall Office",
        location: "Elephant Falls backside",
        tip: "Trek behind main falls for secluded natural workspace with water sounds",
        timing: "9 AM - 4 PM",
        coordinates: "25.556°N, 91.898°E"
      },
      {
        name: "Quiet Lake Workspace",
        location: "Ward's Lake early morning",
        tip: "Work lakeside before 8 AM for peaceful environment before tourists arrive",
        timing: "6 AM - 8 AM"
      }
    ]
  },
  // Add remaining cities with basic structure to prevent undefined errors
  bangalore: {
    moneyTips: ["Stay in PG accommodations in HSR Layout for ₹12,000-18,000/month", "Eat at local Darshinis for South Indian meals under ₹100", "Use Namma Metro and BMTC buses with monthly passes", "Shop at Commercial Street and Brigade Road markets", "Take advantage of IT hub networking events"],
    streetFood: [{ item: "Masala Dosa", price: "₹40-70 ($0.50)" }, { item: "Idli Sambar", price: "₹30-50 ($0.40)" }, { item: "Bisi Bele Bath", price: "₹60-90 ($0.70-1.10)" }],
    wifiHotspots: { cafes: [{ name: "Third Wave Coffee", speed: "50-80 Mbps", quality: "Excellent" }], publicSpaces: [{ name: "UB City Mall", speed: "40-70 Mbps", quality: "Good" }] },
    coworkingSpaces: [{ name: "91springboard Bangalore", address: "Koramangala", pricing: "₹9,500/month", speedMbps: 100, amenities: ["Tech Community", "Events", "24/7 Access"] }],
    localExperienceTips: ["Explore Cubbon Park for morning jogs", "Visit tech meetups in Koramangala", "Take weekend trips to Nandi Hills"],
    transportationTips: ["Use Namma Metro for fast travel across the city", "Book Ola/Uber during off-peak hours", "Rent bikes for short commutes in IT corridors"],
    climateImpact: {
      workingConditions: [
        "Bangalore's moderate climate (15-28°C) allows outdoor work most of the year",
        "Occasional power cuts during peak summer - backup power essential",
        "Monsoon season (June-September) requires indoor coworking due to heavy rains",
        "Pleasant post-monsoon period (October-December) ideal for rooftop and balcony work"
      ],
      healthConsiderations: [
        "Traffic pollution in IT corridors - air purifiers recommended for home offices",
        "Moderate humidity year-round - generally comfortable without special measures",
        "Pollen allergies during spring months - keep antihistamines handy",
        "Good water quality but recommended to use filters for drinking"
      ],
      equipmentNeeds: [
        "Light cooling (fans/coolers) sufficient for most of the year",
        "Dehumidifier useful during monsoon months for equipment protection",
        "Backup power solutions for frequent outages in IT areas",
        "Good internet backup - mobile hotspots recommended for critical work"
      ],
      bestMonths: "October to March for optimal working conditions with pleasant weather"
    },
    insiderHacks: { accommodation: ["Stay near tech hubs for networking"], food: ["Try authentic South Indian breakfast"], transport: ["Use metro during peak hours"] },
    secretSpots: [{ name: "Peaceful Park", location: "Cubbon Park", tip: "Early morning for quiet work" }]
  },
  delhi: {
    moneyTips: ["Share apartments in Hauz Khas or Lajpat Nagar", "Eat at local dhabas and street food", "Use Delhi Metro extensively", "Shop at Sarojini Nagar and Lajpat Nagar markets"],
    streetFood: [{ item: "Chole Bhature", price: "₹60-100 ($0.70-1.20)" }, { item: "Paranthas", price: "₹40-80 ($0.50-1)" }],
    wifiHotspots: { cafes: [{ name: "Cafe Coffee Day", speed: "30-50 Mbps", quality: "Good" }], publicSpaces: [{ name: "Select City Walk", speed: "50-80 Mbps", quality: "Excellent" }] },
    coworkingSpaces: [{ name: "91springboard Delhi", address: "Sector 44, Gurgaon", pricing: "₹10,500/month", speedMbps: 100, amenities: ["Business Hub", "Events", "Meeting Rooms"] }],
    localExperienceTips: ["Visit India Gate area", "Explore Old Delhi markets", "Take heritage walks"],
    transportationTips: ["Use Delhi Metro for all major destinations", "Keep cash for auto-rickshaws", "Avoid peak hours 8-10 AM and 6-8 PM"],
    climateImpact: {
      workingConditions: [
        "Extreme summer heat (40-47°C) makes outdoor work impossible from April-June",
        "Air conditioning absolutely essential for productivity during summer months",
        "Winter fog (December-January) can affect outdoor activities and internet connectivity",
        "Pleasant spring (February-March) and autumn (October-November) perfect for outdoor work"
      ],
      healthConsiderations: [
        "Severe air pollution during winter months - N95 masks and air purifiers essential",
        "Heat stroke risk during summer - stay hydrated and work in AC spaces only",
        "Monsoon waterlogging creates dengue/malaria risk - use mosquito protection",
        "Respiratory issues common due to pollution - consider relocating during winter peak"
      ],
      equipmentNeeds: [
        "Heavy-duty air conditioning mandatory for summer work",
        "High-grade air purifiers essential for indoor air quality",
        "Backup power systems critical due to frequent summer outages",
        "Dehumidifiers needed during monsoon for equipment protection"
      ],
      bestMonths: "October to March avoiding extreme summer heat and peak pollution periods"
    },
    insiderHacks: { accommodation: ["Stay in South Delhi for better connectivity"], food: ["Try street food in Chandni Chowk"], transport: ["Download Delhi Metro app"] },
    secretSpots: [{ name: "Quiet Garden", location: "Lodhi Gardens", tip: "Early morning for peaceful work" }]
  },
  alleppey: {
    moneyTips: ["Stay in backwater homestays", "Eat at local toddy shops", "Use country boats for transport", "Shop at local spice markets"],
    streetFood: [{ item: "Fish Curry Rice", price: "₹80-150 ($1-1.8)" }, { item: "Appam", price: "₹20-40 ($0.25-0.50)" }],
    wifiHotspots: { cafes: [{ name: "Backwater Café", speed: "25-40 Mbps", quality: "Good" }], publicSpaces: [{ name: "Beach Resort", speed: "30-50 Mbps", quality: "Good" }] },
    coworkingSpaces: [{ name: "Backwater Workspace", address: "Alleppey", pricing: "₹4,500/month", speedMbps: 50, amenities: ["Lake Views", "Peaceful Environment"] }],
    localExperienceTips: ["Take houseboat tours", "Visit backwater villages", "Learn about coir making"],
    transportationTips: ["Use boats for backwater exploration", "Rent scooters for mainland travel", "Book auto-rickshaws for short distances"],
    climateImpact: {
      workingConditions: [
        "High humidity (65-85%) year-round affects comfort - fans and dehumidifiers essential",
        "Heavy monsoon rains (June-September) create indoor work preference",
        "Pleasant winter mornings (November-February) ideal for outdoor coworking",
        "Hot, humid summers (March-May) require air-conditioned workspaces"
      ],
      healthConsiderations: [
        "Monsoon brings waterborne diseases - strict water purification needed",
        "High humidity can cause skin fungal infections - maintain good hygiene",
        "Air quality deteriorates during winter due to crop burning in nearby states",
        "Heat and humidity combination causes dehydration - increase fluid intake"
      ],
      equipmentNeeds: [
        "Waterproof storage essential for electronics during monsoon months",
        "Dehumidifiers critical for equipment longevity in high humidity",
        "Air conditioning necessary for summer productivity and comfort",
        "Water purification systems mandatory for health safety"
      ],
      bestMonths: "November to February for optimal humidity and temperature balance"
    },
    insiderHacks: { accommodation: ["Book backwater homestays"], food: ["Try toddy and seafood"], transport: ["Use country boats"] },
    secretSpots: [{ name: "Hidden Beach", location: "Marari Beach", tip: "Quiet spot for remote work" }]
  },
  varkala: {
    moneyTips: ["Stay in cliff-top guesthouses", "Eat at beach shacks", "Walk or rent bikes", "Shop at local markets"],
    streetFood: [{ item: "Fish Thali", price: "₹150-250 ($1.8-3)" }, { item: "Coconut Water", price: "₹30-50 ($0.40)" }],
    wifiHotspots: { cafes: [{ name: "Cliff Café", speed: "30-50 Mbps", quality: "Good" }], publicSpaces: [{ name: "Beach Resort", speed: "40-60 Mbps", quality: "Good" }] },
    coworkingSpaces: [{ name: "Cliff Coworking", address: "Varkala Cliff", pricing: "₹5,000/month", speedMbps: 60, amenities: ["Ocean Views", "Peaceful Environment"] }],
    localExperienceTips: ["Watch sunset from cliff", "Visit Sivagiri Mutt", "Try Ayurvedic treatments"],
    transportationTips: ["Walk along the cliff", "Rent scooters for exploration", "Use auto-rickshaws to beach"],
    climateImpact: {
      workingConditions: [
        "Coastal humidity (70-85%) requires dehumidification for comfortable work",
        "Sea breeze provides natural cooling but carries salt that affects electronics",
        "Monsoon season (June-September) brings heavy rains limiting outdoor cliff work",
        "Pleasant winter months (November-March) perfect for cliff-top coworking"
      ],
      healthConsiderations: [
        "Intense UV exposure on cliffs - sunscreen and protective clothing essential",
        "Salt air can cause respiratory irritation for sensitive individuals",
        "Monsoon brings risk of waterborne diseases - water purification critical",
        "High humidity may cause skin issues - maintain dry, clean environment"
      ],
      equipmentNeeds: [
        "Protective covers for electronics against salt air corrosion",
        "Dehumidifiers essential for equipment longevity in coastal humidity",
        "Waterproof storage during monsoon season for device protection",
        "UV-resistant materials for outdoor setups due to strong coastal sun"
      ],
      bestMonths: "November to March for perfect cliff weather and outdoor working conditions"
    },
    insiderHacks: { accommodation: ["Book cliff-facing rooms"], food: ["Try seafood at beach shacks"], transport: ["Walk the cliff path"] },
    secretSpots: [{ name: "Hidden Beach", location: "Kappil Beach", tip: "Quiet backwaters for work" }]
  },
  kasol: {
    moneyTips: ["Stay in Israeli cafes/guesthouses", "Eat at local dhabas", "Trek to nearby villages", "Shop at Kasol market"],
    streetFood: [{ item: "Momos", price: "₹80-120 ($1-1.5)" }, { item: "Maggi", price: "₹60-100 ($0.70-1.20)" }],
    wifiHotspots: { cafes: [{ name: "Moon Dance Café", speed: "20-35 Mbps", quality: "Fair" }], publicSpaces: [{ name: "Main Market", speed: "15-25 Mbps", quality: "Fair" }] },
    coworkingSpaces: [{ name: "Mountain Café Workspace", address: "Kasol Main Road", pricing: "₹3,000/month", speedMbps: 30, amenities: ["Mountain Views", "Trekking Community"] }],
    localExperienceTips: ["Trek to Tosh and Malana", "Visit hot springs", "Experience Israeli culture"],
    transportationTips: ["Walk within Kasol", "Take local buses to nearby villages", "Trek to remote locations"],
    climateImpact: {
      workingConditions: [
        "Cool mountain temperatures (5-25°C) create excellent working conditions year-round",
        "River-side cafes provide natural white noise perfect for focused work sessions",
        "Winter snow (December-February) limits outdoor activities but creates cozy indoor work",
        "Monsoon season (July-August) brings heavy rains affecting village connectivity"
      ],
      healthConsiderations: [
        "High altitude (1580m) may cause initial breathlessness - gradual acclimatization needed",
        "Clean mountain air excellent for respiratory health and mental clarity",
        "Cold temperatures require warm clothing to prevent health issues",
        "Limited medical facilities - carry basic medications and first aid"
      ],
      equipmentNeeds: [
        "Warm clothing essential for comfortable work during cold months",
        "Reliable heating source needed for winter productivity",
        "Backup power solutions for frequent outages in remote mountain location",
        "Waterproof gear necessary during monsoon season for equipment protection"
      ],
      bestMonths: "March to June and September to November for optimal valley weather"
    },
    insiderHacks: { accommodation: ["Stay in Israeli-run places"], food: ["Try Israeli and local food"], transport: ["Trek to hidden villages"] },
    secretSpots: [{ name: "Hidden Valley", location: "Tosh Village", tip: "Quiet spot for mountain work" }]
  },
  jaipur: {
    moneyTips: [
      "Stay in heritage havelis in Old City for authentic experience at ₹800-2,000/night",
      "Eat at traditional Rajasthani thali restaurants like Chokhi Dhani for ₹200-400",
      "Use JCTSL bus passes for city transport - monthly pass ₹500",
      "Shop at Johari Bazaar for jewelry and Bapu Bazaar for textiles at wholesale prices",
      "Book heritage hotels during off-season (April-June) for 50% discounts"
    ],
    streetFood: [
      { item: "Dal Baati Churma", price: "₹100-150 ($1.2-1.8)" },
      { item: "Pyaaz Kachori", price: "₹20-40 ($0.25-0.50)" },
      { item: "Laal Maas", price: "₹200-350 ($2.4-4.2)" },
      { item: "Ghewar", price: "₹30-60 ($0.36-0.72)" },
      { item: "Mirchi Bada", price: "₹15-30 ($0.18-0.36)" },
      { item: "Kulfi Faluda", price: "₹40-80 ($0.48-0.96)" }
    ],
    wifiHotspots: {
      cafes: [
        { name: "Tapri Central", speed: "35-50 Mbps", quality: "Good" },
        { name: "Café Coffee Day City Palace", speed: "30-45 Mbps", quality: "Good" },
        { name: "The Tea Room at Amer", speed: "25-40 Mbps", quality: "Fair" },
        { name: "Anokhi Café", speed: "40-60 Mbps", quality: "Good" }
      ],
      publicSpaces: [
        { name: "Jaipur Airport", speed: "50-80 Mbps", quality: "Excellent" },
        { name: "World Trade Park", speed: "45-70 Mbps", quality: "Excellent" },
        { name: "Jaipur Railway Station", speed: "20-35 Mbps", quality: "Fair" }
      ]
    },
    coworkingSpaces: [
      {
        name: "91springboard Jaipur",
        address: "Malviya Nagar, Jaipur",
        pricing: "₹7,000/month",
        speedMbps: 100,
        amenities: ["Heritage Building", "Meeting Rooms", "Events", "Networking"]
      },
      {
        name: "Pink City Coworking",
        address: "C-Scheme, Jaipur",
        pricing: "₹6,500/month",
        speedMbps: 70,
        amenities: ["Heritage Setting", "Cultural Events", "Royal Ambiance"]
      },
      {
        name: "CoWork Jaipur",
        address: "Vaishali Nagar, Jaipur",
        pricing: "₹5,500/month",
        speedMbps: 80,
        amenities: ["Modern Workspace", "AC", "Printing", "Cafe"]
      }
    ],
    localExperienceTips: [
      "Visit City Palace early morning (9 AM) to avoid crowds and heat",
      "Explore Hawa Mahal from street level for best photography angles",
      "Take heritage walks in Old City - free walking tours available",
      "Experience puppet shows at Ravindra Rang Manch for authentic Rajasthani culture",
      "Visit Amer Fort via elephant ride for royal experience",
      "Attend evening aarti at Birla Mandir for spiritual experience"
    ],
    transportationTips: [
      "Use pre-paid auto stands at tourist spots to avoid haggling",
      "Rent bikes for city exploration - many rental shops near railway station",
      "Take JCTSL buses for budget-friendly city travel (₹8-15 per ride)",
      "Book Uber/Ola for comfortable rides during peak summer months",
      "Use Metro service connecting major areas - clean and air-conditioned",
      "Hire cycle-rickshaws for short distances in Old City narrow lanes"
    ],
    climateImpact: {
      workingConditions: [
        "Extreme desert heat (35-47°C) in summer makes outdoor work impossible April-June",
        "Pleasant winter weather (8-25°C) perfect for heritage hotel courtyards and palace work",
        "Moderate monsoon (July-September) brings relief but occasional connectivity issues",
        "Royal heritage buildings provide natural cooling and inspiring work environments",
        "Morning hours (6-10 AM) ideal for outdoor meetings and heritage site visits"
      ],
      healthConsiderations: [
        "Severe dehydration risk during summer months - constant hydration essential",
        "Desert heat can cause heat exhaustion - work only in air-conditioned spaces",
        "Dry air year-round requires skin and lip protection",
        "Tourist season crowds (October-March) may affect peaceful working spots",
        "Air quality drops during winter due to crop burning - consider air purifiers"
      ],
      equipmentNeeds: [
        "Heavy-duty air conditioning essential for summer survival and productivity",
        "Cooling systems insufficient during peak summer - AC mandatory",
        "Minimal heating needed - light woolens sufficient for winter nights",
        "Electronics may overheat in summer - ensure proper cooling and ventilation",
        "Power backup essential during summer due to high AC load causing outages"
      ],
      bestMonths: "October to March for comfortable royal city weather and optimal productivity"
    },
    insiderHacks: {
      accommodation: [
        "Stay near City Palace for walking access to major attractions",
        "Book heritage havelis in advance during peak season (October-March)",
        "Consider homestays in residential areas like Malviya Nagar for authentic experience"
      ],
      food: [
        "Try authentic Rajasthani cuisine at Laxmi Mishthan Bhandar",
        "Eat street food at Masala Chowk for hygienic local options",
        "Visit Chokhi Dhani for traditional village-style dining experience"
      ],
      transport: [
        "Use pre-paid auto stands to avoid overcharging",
        "Download Jaipur Smart City app for bus routes and timings",
        "Rent bikes from government-approved vendors for better service"
      ]
    },
    secretSpots: [
      {
        name: "Sisodia Rani Garden",
        location: "8km from city center",
        tip: "Peaceful terraced garden perfect for morning work sessions",
        timing: "6:00 AM - 9:00 AM"
      },
      {
        name: "Nahargarh Fort Sunset Point",
        location: "Aravalli Hills",
        tip: "Work with panoramic city views - bring laptop for evening sessions",
        timing: "4:00 PM - 6:30 PM"
      },
      {
        name: "Central Park Rose Garden",
        location: "Heart of Jaipur",
        tip: "Early morning jogging track with WiFi zones for outdoor work",
        timing: "5:30 AM - 8:00 AM"
      }
    ]
  },
  mumbai: {
    moneyTips: ["Share 1BHK in Andheri or Bandra East for ₹20,000-30,000/month", "Eat at local Udipi restaurants for meals under ₹150", "Use monthly train passes for unlimited local travel", "Shop at Linking Road and Colaba Causeway for reasonable prices"],
    streetFood: [{ item: "Vada Pav", price: "₹15-25 ($0.20)" }, { item: "Pav Bhaji", price: "₹60-100 ($0.70-1.20)" }, { item: "Bhel Puri", price: "₹40-70 ($0.50)" }],
    wifiHotspots: { cafes: [{ name: "Starbucks Bandra", speed: "50-80 Mbps", quality: "Excellent" }], publicSpaces: [{ name: "Mumbai Airport", speed: "80-120 Mbps", quality: "Excellent" }] },
    coworkingSpaces: [{ name: "WeWork BKC", address: "Bandra Kurla Complex", pricing: "₹15,000/month", speedMbps: 120, amenities: ["Business District", "Networking", "Premium Location"] }],
    localExperienceTips: ["Experience local train culture", "Visit Bollywood film studios", "Explore Marine Drive at sunset"],
    transportationTips: ["Master the local train system for fast city travel", "Use app-based rides during peak hours", "Keep train pass for unlimited travel"],
    climateImpact: {
      workingConditions: [
        "High coastal humidity (70-90%) year-round affects comfort and productivity",
        "Monsoon season (June-September) brings flooding and disrupts office commutes",
        "Pleasant winter months (December-February) ideal for outdoor networking events",
        "Hot, humid summers (March-May) require air-conditioned workspaces only"
      ],
      healthConsiderations: [
        "Severe air pollution affects respiratory health - air purifiers essential",
        "Monsoon brings waterborne diseases - strict water purification needed",
        "High humidity can cause skin fungal infections and equipment damage",
        "Dense population increases risk of viral infections - maintain hygiene"
      ],
      equipmentNeeds: [
        "Dehumidifiers critical for electronics protection in coastal humidity",
        "Air conditioning mandatory for comfortable summer work",
        "Waterproof storage essential during heavy monsoon flooding",
        "Backup power solutions for frequent outages during peak hours"
      ],
      bestMonths: "November to February for optimal business weather and networking"
    },
    insiderHacks: { accommodation: ["Stay near train stations for easy commute"], food: ["Try street food at Mohammed Ali Road"], transport: ["Learn train timing patterns"] },
    secretSpots: [{ name: "Peaceful Beach", location: "Versova Beach", tip: "Early morning for quiet work with ocean sounds" }]
  },
  kolkata: {
    moneyTips: ["Share apartments in Salt Lake or New Town for ₹8,000-15,000/month", "Eat at local fish markets and Bengali restaurants for under ₹120", "Use metro and buses with monthly passes", "Shop at New Market and Gariahat for local prices"],
    streetFood: [{ item: "Fish Curry Rice", price: "₹80-150 ($1-1.8)" }, { item: "Kathi Roll", price: "₹40-80 ($0.50-1)" }, { item: "Rosogolla", price: "₹10-20 ($0.12-0.25)" }],
    wifiHotspots: { cafes: [{ name: "Café Coffee Day Park Street", speed: "35-55 Mbps", quality: "Good" }], publicSpaces: [{ name: "South City Mall", speed: "45-70 Mbps", quality: "Good" }] },
    coworkingSpaces: [{ name: "Kolkata Coworking", address: "Salt Lake Sector V", pricing: "₹6,500/month", speedMbps: 80, amenities: ["IT Hub Location", "Cultural Events", "Book Clubs"] }],
    localExperienceTips: ["Explore intellectual coffee house culture", "Visit Durga Puja festivals", "Experience Bengali literature scene"],
    transportationTips: ["Use metro for fastest travel across the city", "Take trams for heritage city experience", "Auto-rickshaws for short distances"],
    climateImpact: {
      workingConditions: [
        "High humidity (70-90%) year-round makes indoor work more comfortable",
        "Extreme summer heat (35-42°C) with humidity creates oppressive working conditions",
        "Heavy monsoon (June-September) with waterlogging disrupts daily work routines",
        "Pleasant winter months (December-February) perfect for outdoor cultural activities"
      ],
      healthConsiderations: [
        "High pollution during winter months affects respiratory health significantly",
        "Monsoon brings cholera and dengue risks - water purification mandatory",
        "Heat and humidity combination causes dehydration and heat exhaustion",
        "Air quality drops during festival season due to fireworks and emissions"
      ],
      equipmentNeeds: [
        "Dehumidifiers essential for equipment protection in high humidity",
        "Air conditioning necessary for summer productivity and health",
        "Waterproof storage mandatory during monsoon flooding seasons",
        "Air purifiers recommended for indoor air quality improvement"
      ],
      bestMonths: "November to February for cultural festivals and comfortable working weather"
    },
    insiderHacks: { accommodation: ["Stay in cultural areas like Ballygunge"], food: ["Try authentic Bengali sweets"], transport: ["Experience heritage tram rides"] },
    secretSpots: [{ name: "Quiet Library", location: "National Library", tip: "Peaceful reading rooms for focused work" }]
  },
  bir: {
    moneyTips: ["Stay in Tibetan guesthouses for ₹1,500-3,000/month", "Eat at local monasteries and Tibetan cafes for under ₹100", "Trek to nearby villages for exploration", "Learn paragliding for adventure tourism"],
    streetFood: [{ item: "Momos", price: "₹80-120 ($1-1.5)" }, { item: "Thukpa", price: "₹100-150 ($1.2-1.8)" }, { item: "Tibetan Bread", price: "₹40-60 ($0.50)" }],
    wifiHotspots: { cafes: [{ name: "Bir Café", speed: "25-40 Mbps", quality: "Good" }], publicSpaces: [{ name: "Monastery Area", speed: "20-35 Mbps", quality: "Fair" }] },
    coworkingSpaces: [{ name: "Mountain Workspace", address: "Bir Billing Road", pricing: "₹3,500/month", speedMbps: 45, amenities: ["Paragliding Views", "Tibetan Culture", "Monastery Access"] }],
    localExperienceTips: ["Learn paragliding from world-class instructors", "Visit Tibetan monasteries for meditation", "Trek to Billing for panoramic views"],
    transportationTips: ["Use local buses to reach from Pathankot", "Trek between Bir and Billing", "Shared taxis for regional travel"],
    climateImpact: {
      workingConditions: [
        "Perfect mountain climate (15-30°C) ideal for outdoor coworking year-round",
        "Clear skies during paragliding season (March-June, Sep-Nov) provide inspiring views",
        "Cold winter months (December-February) require heated indoor workspaces",
        "Monsoon season (July-August) limits outdoor activities but creates cozy indoor work"
      ],
      healthConsiderations: [
        "High altitude (2400m) requires gradual acclimatization for newcomers",
        "Clean mountain air excellent for respiratory health and mental clarity",
        "Cold mountain nights require warm clothing to prevent hypothermia",
        "Limited medical facilities - carry comprehensive first aid and medications"
      ],
      equipmentNeeds: [
        "Warm clothing essential for cold mountain evenings and winter months",
        "Backup heating solutions for comfortable winter productivity",
        "Reliable internet backup due to remote mountain location",
        "Solar chargers useful for outdoor work sessions with mountain views"
      ],
      bestMonths: "March to June and September to November for optimal paragliding and working weather"
    },
    insiderHacks: { accommodation: ["Stay near monastery for peaceful environment"], food: ["Try authentic Tibetan monastery meals"], transport: ["Trek for exercise and exploration"] },
    secretSpots: [{ name: "Secret Viewpoint", location: "Billing Top", tip: "Sunrise work sessions with Dhauladhar views" }]
  },
  dehradun: {
    moneyTips: ["Stay in areas near IIT or FRI for educational atmosphere", "Eat at local dhabas and Garhwali restaurants for under ₹120", "Use local buses for city travel", "Shop at Paltan Bazaar for reasonable prices"],
    streetFood: [{ item: "Aloo Puri", price: "₹40-60 ($0.50)" }, { item: "Kachori Sabzi", price: "₹30-50 ($0.40)" }, { item: "Garhwali Thali", price: "₹100-150 ($1.2-1.8)" }],
    wifiHotspots: { cafes: [{ name: "Café Coffee Day Pacific Mall", speed: "40-60 Mbps", quality: "Good" }], publicSpaces: [{ name: "IIT Roorkee Campus", speed: "80-120 Mbps", quality: "Excellent" }] },
    coworkingSpaces: [{ name: "Dehradun Hub", address: "Rajpur Road", pricing: "₹5,500/month", speedMbps: 70, amenities: ["Educational Environment", "Government Access", "Hill Station Base"] }],
    localExperienceTips: ["Visit IIT campus for academic environment", "Explore Robber's Cave for natural beauty", "Take day trips to Mussoorie and hill stations"],
    transportationTips: ["Use auto-rickshaws for city travel", "Take buses to nearby hill stations", "Rent bikes for valley exploration"],
    climateImpact: {
      workingConditions: [
        "Pleasant valley climate (18-35°C) provides comfortable working conditions year-round",
        "Moderate summer heat allows outdoor work with shade and fans",
        "Heavy monsoon (July-September) requires indoor coworking due to valley flooding",
        "Cool winter months (December-February) perfect for outdoor administrative work"
      ],
      healthConsiderations: [
        "Clean valley air beneficial for respiratory health compared to plains",
        "Monsoon brings risk of waterborne diseases - water purification essential",
        "Moderate pollution from traffic - significantly better than major cities",
        "Valley location provides natural temperature regulation and comfort"
      ],
      equipmentNeeds: [
        "Light cooling sufficient for summer months - fans and ventilation adequate",
        "Backup power solutions for monsoon outages in valley areas",
        "Waterproof storage during heavy monsoon flooding periods",
        "Minimal heating needed for comfortable winter work environments"
      ],
      bestMonths: "March to June and September to November for perfect valley weather"
    },
    insiderHacks: { accommodation: ["Stay near educational institutions"], food: ["Try authentic Garhwali cuisine"], transport: ["Use it as base for hill station visits"] },
    secretSpots: [{ name: "Peaceful Campus", location: "Forest Research Institute", tip: "Historic colonial campus for inspiring work environment" }]
  },
  mussoorie: {
    moneyTips: ["Stay in budget hotels near Mall Road for ₹3,000-6,000/month", "Eat at local dhabas away from tourist areas for under ₹150", "Walk Mall Road instead of using taxis", "Shop at lower bazaar for better prices"],
    streetFood: [{ item: "Aloo Tikki", price: "₹40-60 ($0.50)" }, { item: "Maggi", price: "₹60-100 ($0.70-1.20)" }, { item: "Momos", price: "₹80-120 ($1-1.5)" }],
    wifiHotspots: { cafes: [{ name: "Café By The Way", speed: "30-50 Mbps", quality: "Good" }], publicSpaces: [{ name: "Mall Road Area", speed: "25-45 Mbps", quality: "Good" }] },
    coworkingSpaces: [{ name: "Hill Station Hub", address: "Mall Road, Mussoorie", pricing: "₹4,500/month", speedMbps: 55, amenities: ["Mountain Views", "Colonial Heritage", "Tourist Season Networking"] }],
    localExperienceTips: ["Take cable car for panoramic Himalayan views", "Visit Gun Hill for sunset work sessions", "Explore colonial heritage buildings"],
    transportationTips: ["Walk Mall Road for most activities", "Use shared taxis to Dehradun", "Take cable car for mountain access"],
    climateImpact: {
      workingConditions: [
        "Cool hill station climate (15-30°C) perfect for outdoor work during summer",
        "Pleasant summer months (April-June) ideal for balcony and terrace work",
        "Cold winter weather (1-15°C) requires heated indoor workspaces",
        "Heavy monsoon (July-September) brings landslide risks affecting connectivity"
      ],
      healthConsiderations: [
        "High altitude (2000m) may require brief acclimatization period",
        "Clean mountain air excellent for respiratory health and productivity",
        "Cold temperatures can affect those not used to hill climates",
        "Tourist season crowds may affect peaceful working environments"
      ],
      equipmentNeeds: [
        "Essential heating during cold winter months for comfortable work",
        "Warm clothing necessary for year-round comfort in hill station",
        "Backup power solutions for outages during monsoon season",
        "Rain gear essential during heavy monsoon for commuting to work"
      ],
      bestMonths: "April to June and September to November for optimal hill station weather"
    },
    insiderHacks: { accommodation: ["Stay in heritage hotels for colonial experience"], food: ["Try local hill station specialties"], transport: ["Walk for exercise and views"] },
    secretSpots: [{ name: "Quiet Viewpoint", location: "Lal Tibba", tip: "Highest point for panoramic work sessions" }]
  },
  ziro: {
    moneyTips: ["Stay in tribal homestays for ₹1,000-2,500/month authentic experience", "Eat with local Apatani families for traditional meals under ₹80", "Trek to nearby villages for cultural exploration", "Support local handicraft communities"],
    streetFood: [{ item: "Rice Beer", price: "₹30-50 ($0.40)" }, { item: "Bamboo Shoot Curry", price: "₹60-100 ($0.70-1.20)" }, { item: "Fish Curry", price: "₹80-120 ($1-1.5)" }],
    wifiHotspots: { cafes: [{ name: "Ziro Music Café", speed: "15-30 Mbps", quality: "Fair" }], publicSpaces: [{ name: "Cultural Center", speed: "20-35 Mbps", quality: "Fair" }] },
    coworkingSpaces: [{ name: "Tribal Valley Workspace", address: "Ziro Valley", pricing: "₹2,500/month", speedMbps: 35, amenities: ["Cultural Immersion", "Music Scene", "Sustainable Living"] }],
    localExperienceTips: ["Experience Apatani tribal culture and traditions", "Visit during Ziro Music Festival", "Learn about sustainable rice terrace farming"],
    transportationTips: ["Use local shared vehicles for valley travel", "Trek to remote villages", "Plan for limited connectivity"],
    climateImpact: {
      workingConditions: [
        "Cool tribal valley climate (15-28°C) provides excellent working conditions",
        "Pleasant summer months (March-May) perfect for outdoor cultural work",
        "Heavy monsoon (June-August) creates lush green valley but limits travel",
        "Cool winter months (December-February) require warm clothing for comfort"
      ],
      healthConsiderations: [
        "High altitude (1500m) in tribal valley may require brief adjustment",
        "Pristine air quality excellent for health and mental clarity",
        "Limited medical facilities - carry comprehensive first aid supplies",
        "Traditional lifestyle promotes natural health and work-life balance"
      ],
      equipmentNeeds: [
        "Warm clothing essential for cold mountain evenings and winter",
        "Backup power solutions crucial due to remote tribal location",
        "Solar charging equipment useful for sustainable valley living",
        "Rain gear necessary during heavy monsoon season"
      ],
      bestMonths: "March to May and September to November for optimal valley weather and cultural festivals"
    },
    insiderHacks: { accommodation: ["Stay with Apatani families for cultural exchange"], food: ["Try traditional tribal fermented foods"], transport: ["Trek for authentic village experiences"] },
    secretSpots: [{ name: "Hidden Valley View", location: "Kile Pakho", tip: "Sacred hill with panoramic valley views for inspiration" }]
  }
};

export const getCitySpecificDataComplete = (citySlug: string): CitySpecificData | undefined => {
  return citySpecificDataComplete[citySlug];
};