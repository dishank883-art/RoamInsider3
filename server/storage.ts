import { 
  type City, 
  type InsertCity,
  type CostOfLiving,
  type InsertCostOfLiving,
  type InternetConnectivity,
  type InsertInternetConnectivity,
  type Transportation,
  type InsertTransportation,
  type Climate,
  type InsertClimate,
  type Safety,
  type InsertSafety,
  type Lifestyle,
  type InsertLifestyle,
  type Event,
  type InsertEvent,
  type Attraction,
  type InsertAttraction,
  type CityWithDetails
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Cities
  getAllCities(): Promise<City[]>;
  getCityBySlug(slug: string): Promise<CityWithDetails | undefined>;
  searchCities(query: string): Promise<City[]>;
  getPopularCities(): Promise<City[]>;
  createCity(city: InsertCity): Promise<City>;
  
  // Cost of Living
  getCostOfLiving(cityId: string): Promise<CostOfLiving | undefined>;
  createCostOfLiving(cost: InsertCostOfLiving): Promise<CostOfLiving>;
  
  // Internet Connectivity
  getInternetConnectivity(cityId: string): Promise<InternetConnectivity | undefined>;
  createInternetConnectivity(internet: InsertInternetConnectivity): Promise<InternetConnectivity>;
  
  // Transportation
  getTransportation(cityId: string): Promise<Transportation | undefined>;
  createTransportation(transport: InsertTransportation): Promise<Transportation>;
  
  // Climate
  getClimate(cityId: string): Promise<Climate | undefined>;
  createClimate(climate: InsertClimate): Promise<Climate>;
  
  // Safety
  getSafety(cityId: string): Promise<Safety | undefined>;
  createSafety(safety: InsertSafety): Promise<Safety>;
  
  // Lifestyle
  getLifestyle(cityId: string): Promise<Lifestyle | undefined>;
  createLifestyle(lifestyle: InsertLifestyle): Promise<Lifestyle>;
  
  // Events
  getEventsByCity(cityId: string): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Attractions
  getAttractionsByCity(cityId: string): Promise<Attraction[]>;
  createAttraction(attraction: InsertAttraction): Promise<Attraction>;
}

export class MemStorage implements IStorage {
  private cities: Map<string, City> = new Map();
  private costsOfLiving: Map<string, CostOfLiving> = new Map();
  private internetConnectivity: Map<string, InternetConnectivity> = new Map();
  private transportation: Map<string, Transportation> = new Map();
  private climate: Map<string, Climate> = new Map();
  private safety: Map<string, Safety> = new Map();
  private lifestyle: Map<string, Lifestyle> = new Map();
  private events: Map<string, Event> = new Map();
  private attractions: Map<string, Attraction> = new Map();

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Mumbai
    const mumbaiId = randomUUID();
    this.cities.set(mumbaiId, {
      id: mumbaiId,
      name: "Mumbai",
      state: "Maharashtra",
      slug: "mumbai",
      description: "India's financial capital with incredible energy, world-class coworking spaces, and endless opportunities.",
      heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
      latitude: "19.0760",
      longitude: "72.8777",
      population: 20411000,
      rating: "4.8",
      isPopular: true,
      tags: ["Business Hub", "Nightlife", "Coworking"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: mumbaiId,
      monthlyBudgetINR: 45000,
      monthlyBudgetUSD: 540,
      studioRentINR: 25000,
      oneBhkRentINR: 35000,
      twoBhkRentINR: 55000,
      utilitiesINR: 3000,
      groceriesINR: 8000,
      eatingOutINR: 6000,
      coworkingINR: 8000,
      transportINR: 2500,
      simDataINR: 500,
      gymINR: 2000,
      coffeeINR: 150,
      entertainmentINR: 5000,
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: mumbaiId,
      avgSpeedMbps: 52,
      coworkingSpaces: [
        {
          name: "WeWork BKC",
          address: "Bandra Kurla Complex",
          pricing: "₹8,000/month",
          speedMbps: 100,
          amenities: ["24/7 Access", "Meeting Rooms", "Cafe", "Printer"]
        },
        {
          name: "91springboard Andheri",
          address: "Andheri East",
          pricing: "₹6,500/month",
          speedMbps: 80,
          amenities: ["Community Events", "Mentorship", "Networking"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 399 },
            { data: "3GB/day", validity: "28 days", price: 599 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 449 },
            { data: "3GB/day", validity: "28 days", price: 649 }
          ]
        }
      ],
      wifiAvailability: "Excellent - Available in most cafes, malls, and coworking spaces",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: mumbaiId,
      localTransport: {
        metro: true,
        bus: true,
        autoRickshaw: true,
        taxi: true,
        bike: true
      },
      walkabilityScore: 7,
      rideHailing: ["Uber", "Ola", "Rapido"],
      airports: [
        { name: "Chhatrapati Shivaji International", code: "BOM", distance: "5-30km" }
      ],
      trainStations: [
        { name: "Chhatrapati Shivaji Terminus", type: "Major Junction" },
        { name: "Mumbai Central", type: "Major Junction" }
      ],
      intercityConnectivity: "Excellent rail and air connectivity to all major Indian cities",
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: mumbaiId,
      avgTempCelsius: 28,
      avgHumidity: 75,
      rainyMonths: ["June", "July", "August", "September"],
      bestTimeToVisit: "October to February",
      climateType: "Tropical wet and dry",
      currentWeather: {
        temperature: 29,
        humidity: 78,
        description: "Partly cloudy",
        icon: "partly-cloudy"
      },
      updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: mumbaiId,
      safetyScore: "8.2",
      womenSafetyScore: "7.8",
      crimeRate: "Moderate - mostly petty theft and pickpocketing",
      hospitals: [
        { name: "Breach Candy Hospital", address: "Bhulabhai Desai Road", type: "Multi-specialty", emergency: true },
        { name: "Lilavati Hospital", address: "Bandra West", type: "Multi-specialty", emergency: true }
      ],
      emergencyNumbers: {
        police: "100",
        medical: "108",
        fire: "101"
      },
      pollutionIndex: 168,
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: mumbaiId,
      foodScene: {
        specialties: ["Vada Pav", "Pav Bhaji", "Bhel Puri", "Seafood"],
        vegFriendly: true,
        streetFood: true,
        internationalCuisine: true
      },
      nightlife: {
        bars: true,
        clubs: true,
        lateNightEating: true,
        alcoholLaws: "Available with permit; bars close at 1:30 AM"
      },
      fitness: {
        gyms: 500,
        parks: 25,
        yogaStudios: 150,
        outdoorActivities: ["Beach walks", "Cycling", "Cricket", "Football"]
      },
      culture: {
        languages: ["Hindi", "Marathi", "English", "Gujarati"],
        festivals: ["Ganesh Chaturthi", "Navratri", "Diwali", "Holi"],
        customs: ["Respect for elders", "Remove shoes in homes", "Dress modestly in religious places"],
        artScene: true
      },
      cannabisLaws: "Illegal - strict penalties",
      updatedAt: new Date(),
    });

    // Bangalore
    const bangaloreId = randomUUID();
    this.cities.set(bangaloreId, {
      id: bangaloreId,
      name: "Bangalore",
      state: "Karnataka",
      slug: "bangalore",
      description: "India's Silicon Valley with perfect weather, tech community, and amazing café culture.",
      heroImage: "https://images.unsplash.com/photo-1580060092295-dbe639fffda3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJBTkdBTE9SRXxlbnwwfHwwfHx8MA%3D%3D",
      latitude: "12.9716",
      longitude: "77.5946",
      population: 12765000,
      rating: "4.7",
      isPopular: true,
      tags: ["Tech Scene", "Perfect Weather", "Startups"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: bangaloreId,
      monthlyBudgetINR: 38000,
      monthlyBudgetUSD: 456,
      studioRentINR: 18000,
      oneBhkRentINR: 28000,
      twoBhkRentINR: 45000,
      utilitiesINR: 2500,
      groceriesINR: 7000,
      eatingOutINR: 5500,
      coworkingINR: 7000,
      transportINR: 2000,
      simDataINR: 400,
      gymINR: 1800,
      coffeeINR: 120,
      entertainmentINR: 4000,
      updatedAt: new Date(),
    });

    // Bangalore Internet Connectivity
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: bangaloreId,
      avgSpeedMbps: 65,
      coworkingSpaces: [
        {
          name: "CoWrks RMZ Ecoworld",
          address: "Outer Ring Road, Bellandur",
          pricing: "₹12,000/month",
          speedMbps: 150,
          amenities: ["24/7 Access", "Meeting Rooms", "Events", "Cafe", "Gym"]
        },
        {
          name: "BHIVE Workspace HSR",
          address: "HSR Layout Sector 1",
          pricing: "₹8,500/month",
          speedMbps: 100,
          amenities: ["Community Events", "Mentorship", "Networking", "Games Room"]
        },
        {
          name: "IndiQube Orion",
          address: "Infantry Road",
          pricing: "₹10,000/month",
          speedMbps: 120,
          amenities: ["Premium Amenities", "Phone Booths", "Rooftop"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 399 },
            { data: "3GB/day", validity: "28 days", price: 599 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 449 },
            { data: "3GB/day", validity: "28 days", price: 649 }
          ]
        },
        {
          provider: "Vodafone",
          plans: [
            { data: "1.5GB/day", validity: "28 days", price: 379 },
            { data: "2GB/day", validity: "28 days", price: 479 }
          ]
        }
      ],
      wifiAvailability: "Excellent - Free WiFi in cafes, malls, Metro stations, and most coworking spaces",
      updatedAt: new Date(),
    });

    // Bangalore Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: bangaloreId,
      localTransport: {
        metro: true,
        bus: true,
        autoRickshaw: true,
        taxi: true,
        bike: true
      },
      walkabilityScore: 6,
      rideHailing: ["Uber", "Ola", "Rapido", "Bounce"],
      airports: [
        { name: "Kempegowda International Airport", code: "BLR", distance: "40-60km" }
      ],
      trainStations: [
        { name: "Bangalore City Railway Station", type: "Major Junction" },
        { name: "Yesvantpur Junction", type: "Major Junction" },
        { name: "Bangalore Cantonment", type: "Important Station" }
      ],
      intercityConnectivity: "Excellent connectivity to Chennai, Hyderabad, Mumbai, and other South Indian cities",
      updatedAt: new Date(),
    });

    // Bangalore Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: bangaloreId,
      avgTempCelsius: 24,
      avgHumidity: 65,
      rainyMonths: ["June", "July", "August", "September", "October"],
      bestTimeToVisit: "October to February",
      climateType: "Tropical savanna climate",
      currentWeather: {
        temperature: 23,
        humidity: 68,
        description: "Pleasant weather",
        icon: "partly-cloudy"
      },
      updatedAt: new Date(),
    });

    // Bangalore Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: bangaloreId,
      safetyScore: "8.0",
      womenSafetyScore: "7.5",
      crimeRate: "Low to Moderate - generally safe with good police presence",
      hospitals: [
        { name: "Manipal Hospital", address: "HAL Old Airport Road", type: "Multi-specialty", emergency: true },
        { name: "Apollo Hospital", address: "Bannerghatta Road", type: "Multi-specialty", emergency: true },
        { name: "Narayana Health City", address: "Bommasandra", type: "Multi-specialty", emergency: true },
        { name: "Fortis Hospital", address: "Bannerghatta Road", type: "Multi-specialty", emergency: true }
      ],
      emergencyNumbers: {
        police: "100",
        medical: "108",
        fire: "101"
      },
      pollutionIndex: 156,
      updatedAt: new Date(),
    });

    // Bangalore Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: bangaloreId,
      foodScene: {
        specialties: ["Masala Dosa", "Bisi Bele Bath", "Ragi Mudde", "Filter Coffee"],
        vegFriendly: true,
        streetFood: true,
        internationalCuisine: true
      },
      nightlife: {
        bars: true,
        clubs: true,
        lateNightEating: true,
        alcoholLaws: "Available; bars open till 1 AM, restaurants till 11:30 PM"
      },
      fitness: {
        gyms: 1200,
        parks: 50,
        yogaStudios: 300,
        outdoorActivities: ["Cycling", "Trekking", "Rock climbing", "Badminton", "Cricket"]
      },
      culture: {
        languages: ["Kannada", "English", "Tamil", "Telugu", "Hindi"],
        festivals: ["Dasara", "Karaga", "Ugadi", "Diwali", "Christmas"],
        customs: ["Respect for local language", "Traditional dress during festivals", "Tech-friendly culture"],
        artScene: true
      },
      cannabisLaws: "Illegal - strict penalties, avoid completely",
      updatedAt: new Date(),
    });

    // Goa
    const goaId = randomUUID();
    this.cities.set(goaId, {
      id: goaId,
      name: "Goa",
      state: "Goa",
      slug: "goa",
      description: "Tropical paradise with beach coworking, vibrant nightlife, and the ultimate work-life balance.",
      heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      latitude: "15.2993",
      longitude: "74.1240",
      population: 1458545,
      rating: "4.9",
      isPopular: true,
      tags: ["Beach", "Party Scene", "Relaxed"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Goa Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: goaId,
      monthlyBudgetINR: 28000,
      monthlyBudgetUSD: 336,
      studioRentINR: 12000,
      oneBhkRentINR: 18000,
      twoBhkRentINR: 28000,
      utilitiesINR: 2000,
      groceriesINR: 5500,
      eatingOutINR: 4000,
      coworkingINR: 5000,
      transportINR: 3000,
      simDataINR: 400,
      gymINR: 1200,
      coffeeINR: 120,
      entertainmentINR: 4500,
      updatedAt: new Date(),
    });

    // Goa Internet Connectivity
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: goaId,
      avgSpeedMbps: 45,
      coworkingSpaces: [
        {
          name: "COWRKS Goa",
          address: "Porvorim, North Goa",
          pricing: "₹6,000/month",
          speedMbps: 100,
          amenities: ["Beach Proximity", "Modern Design", "Events", "Cafe"]
        },
        {
          name: "Drishti Marine",
          address: "Arambol Beach",
          pricing: "₹4,500/month",
          speedMbps: 60,
          amenities: ["Beachfront", "Yoga Classes", "Community", "Wellness"]
        },
        {
          name: "91springboard Goa",
          address: "Panaji",
          pricing: "₹5,500/month",
          speedMbps: 80,
          amenities: ["Central Location", "Networking", "Meeting Rooms"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 399 },
            { data: "3GB/day", validity: "28 days", price: 599 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 449 },
            { data: "3GB/day", validity: "28 days", price: 649 }
          ]
        }
      ],
      wifiAvailability: "Excellent - Available in beach shacks, cafes, hotels, and coworking spaces",
      updatedAt: new Date(),
    });

    // Goa Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: goaId,
      localTransport: {
        metro: false,
        bus: true,
        autoRickshaw: true,
        taxi: true,
        bike: true
      },
      walkabilityScore: 6,
      rideHailing: ["Ola", "Uber", "GoaMiles"],
      airports: [
        { name: "Dabolim Airport", code: "GOI", distance: "30km from North Goa" }
      ],
      trainStations: [
        { name: "Madgaon Railway Station", type: "Major Junction (South Goa)" },
        { name: "Thivim Railway Station", type: "Convenient for North Goa" }
      ],
      intercityConnectivity: "Excellent rail and flight connections to Mumbai, Bangalore, Delhi",
      updatedAt: new Date(),
    });

    // Goa Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: goaId,
      avgTempCelsius: 28,
      avgHumidity: 75,
      rainyMonths: ["June", "July", "August", "September"],
      bestTimeToVisit: "November to March",
      climateType: "Tropical monsoon climate",
      currentWeather: {
        temperature: 29,
        humidity: 78,
        description: "Warm and humid",
        icon: "partly-cloudy"
      },
      updatedAt: new Date(),
    });

    // Goa Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: goaId,
      safetyScore: "7.8",
      womenSafetyScore: "7.5",
      crimeRate: "Moderate - generally safe but be cautious of petty theft in tourist areas",
      hospitals: [
        { name: "Goa Medical College", address: "Bambolim", type: "Government Hospital", emergency: true },
        { name: "Manipal Hospital Goa", address: "Dona Paula", type: "Multi-specialty", emergency: true },
        { name: "Apollo Victor Hospital", address: "Margao", type: "Multi-specialty", emergency: true },
        { name: "Healthway Hospital", address: "Panaji", type: "Multi-specialty", emergency: true }
      ],
      emergencyNumbers: {
        police: "100",
        medical: "108",
        fire: "101"
      },
      pollutionIndex: 88,
      updatedAt: new Date(),
    });

    // Goa Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: goaId,
      foodScene: {
        specialties: ["Fish Curry Rice", "Vindaloo", "Bebinca", "Feni", "Prawn Balchão"],
        vegFriendly: true,
        streetFood: true,
        internationalCuisine: true
      },
      nightlife: {
        bars: true,
        clubs: true,
        lateNightEating: true,
        alcoholLaws: "Liberal - 24/7 availability, beach shacks open late"
      },
      fitness: {
        gyms: 80,
        parks: 15,
        yogaStudios: 150,
        outdoorActivities: ["Beach Volleyball", "Water Sports", "Yoga", "Cycling", "Swimming"]
      },
      culture: {
        languages: ["Konkani", "English", "Portuguese", "Hindi", "Marathi"],
        festivals: ["Carnival", "Shigmo", "Christmas", "Easter", "Diwali"],
        customs: ["Portuguese heritage", "Beach culture", "Siesta culture", "Relaxed lifestyle"],
        artScene: true
      },
      cannabisLaws: "Illegal - strict enforcement in tourist areas, heavy penalties",
      updatedAt: new Date(),
    });

    // Goa Attractions
    const goaAttr1 = randomUUID();
    this.attractions.set(goaAttr1, {
      id: goaAttr1,
      cityId: goaId,
      name: "Baga Beach",
      description: "Popular beach known for water sports, shacks, and vibrant nightlife",
      category: "Beach",
      priceRange: "Free (shack expenses extra)",
      address: "Baga, North Goa",
      timings: "24 hours",
      isHiddenGem: false,
      rating: "4.2",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
      createdAt: new Date(),
    });

    const goaAttr2 = randomUUID();
    this.attractions.set(goaAttr2, {
      id: goaAttr2,
      cityId: goaId,
      name: "Old Goa Churches",
      description: "UNESCO World Heritage Portuguese colonial churches and architecture",
      category: "Cultural",
      priceRange: "Free",
      address: "Old Goa",
      timings: "9:00 AM - 6:30 PM",
      isHiddenGem: false,
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1582049877405-bec6f3b0e4bb",
      createdAt: new Date(),
    });

    const goaAttr3 = randomUUID();
    this.attractions.set(goaAttr3, {
      id: goaAttr3,
      cityId: goaId,
      name: "Dudhsagar Waterfalls",
      description: "Spectacular four-tiered waterfall in the Western Ghats",
      category: "Nature",
      priceRange: "₹500-1,500 (jeep safari)",
      address: "Bhagwan Mahaveer Sanctuary, Goa-Karnataka border",
      timings: "6:00 AM - 5:00 PM",
      isHiddenGem: false,
      rating: "4.4",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      createdAt: new Date(),
    });

    const goaAttr4 = randomUUID();
    this.attractions.set(goaAttr4, {
      id: goaAttr4,
      cityId: goaId,
      name: "Anjuna Flea Market",
      description: "Famous Wednesday market with handicrafts, clothes, and local goods",
      category: "Shopping",
      priceRange: "Varies",
      address: "Anjuna Beach, North Goa",
      timings: "Wednesday 8:00 AM - 6:00 PM",
      isHiddenGem: false,
      rating: "4.0",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      createdAt: new Date(),
    });

    const goaAttr5 = randomUUID();
    this.attractions.set(goaAttr5, {
      id: goaAttr5,
      cityId: goaId,
      name: "Divar Island",
      description: "Peaceful Portuguese village perfect for quiet exploration",
      category: "Cultural",
      priceRange: "Ferry ₹5",
      address: "Divar Island, Old Goa",
      timings: "Ferry: 7:00 AM - 9:00 PM",
      isHiddenGem: true,
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c",
      createdAt: new Date(),
    });

    // Goa Events
    const goaEvent1 = randomUUID();
    this.events.set(goaEvent1, {
      id: goaEvent1,
      cityId: goaId,
      title: "Goa Carnival",
      description: "Colorful three-day festival with parades, music, and dance",
      date: new Date("2025-02-15"),
      venue: "Throughout Goa",
      category: "Cultural",
      isPaid: false,
      price: null,
      url: "https://www.goatourism.gov.in/",
      createdAt: new Date(),
    });

    const goaEvent2 = randomUUID();
    this.events.set(goaEvent2, {
      id: goaEvent2,
      cityId: goaId,
      title: "Sunburn Festival",
      description: "Asia's largest electronic dance music festival",
      date: new Date("2024-12-28"),
      venue: "Vagator Beach, North Goa",
      category: "Music",
      isPaid: true,
      price: "₹4,000-25,000",
      url: "https://sunburn.in/",
      createdAt: new Date(),
    });

    const goaEvent3 = randomUUID();
    this.events.set(goaEvent3, {
      id: goaEvent3,
      cityId: goaId,
      title: "Shigmo Festival",
      description: "Traditional Goan Hindu spring festival with folk dances",
      date: new Date("2025-03-10"),
      venue: "Various temples across Goa",
      category: "Cultural",
      isPaid: false,
      price: null,
      url: null,
      createdAt: new Date(),
    });

    // Pune
    const puneId = randomUUID();
    this.cities.set(puneId, {
      id: puneId,
      name: "Pune",
      state: "Maharashtra",
      slug: "pune",
      description: "Educational hub with great climate, affordable living, and growing startup ecosystem.",
      heroImage: "https://images.unsplash.com/photo-1618805714320-f8825019c1be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBVTkV8ZW58MHx8MHx8fDA%3D",
      latitude: "18.5204",
      longitude: "73.8567",
      population: 7276000,
      rating: "4.5",
      isPopular: true,
      tags: ["Education", "Affordable", "IT Hub"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Pune Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneId,
      monthlyBudgetINR: 32000,
      monthlyBudgetUSD: 384,
      studioRentINR: 15000,
      oneBhkRentINR: 22000,
      twoBhkRentINR: 35000,
      utilitiesINR: 2200,
      groceriesINR: 6000,
      eatingOutINR: 4500,
      coworkingINR: 6000,
      transportINR: 1800,
      simDataINR: 400,
      gymINR: 1500,
      coffeeINR: 100,
      entertainmentINR: 3500,
      updatedAt: new Date(),
    });

    // Pune Internet Connectivity
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneId,
      avgSpeedMbps: 55,
      coworkingSpaces: [
        {
          name: "91springboard Pune",
          address: "Koregaon Park",
          pricing: "₹7,000/month",
          speedMbps: 100,
          amenities: ["24/7 Access", "Meeting Rooms", "Events", "Cafe"]
        },
        {
          name: "BHIVE Workspace Kalyani Nagar",
          address: "Kalyani Nagar",
          pricing: "₹6,500/month",
          speedMbps: 80,
          amenities: ["Community Events", "Mentorship", "Networking"]
        },
        {
          name: "WeWork Baner",
          address: "Baner Road",
          pricing: "₹8,000/month",
          speedMbps: 120,
          amenities: ["Premium Amenities", "Phone Booths", "Gaming Zone"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 399 },
            { data: "3GB/day", validity: "28 days", price: 599 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 449 },
            { data: "3GB/day", validity: "28 days", price: 649 }
          ]
        }
      ],
      wifiAvailability: "Good - Available in cafes, malls, coworking spaces, and many restaurants",
      updatedAt: new Date(),
    });

    // Pune Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneId,
      localTransport: {
        metro: true,
        bus: true,
        autoRickshaw: true,
        taxi: true,
        bike: true
      },
      walkabilityScore: 7,
      rideHailing: ["Uber", "Ola", "Rapido"],
      airports: [
        { name: "Pune Airport", code: "PNQ", distance: "10-15km" }
      ],
      trainStations: [
        { name: "Pune Junction", type: "Major Junction" },
        { name: "Shivajinagar", type: "Important Station" }
      ],
      intercityConnectivity: "Excellent connectivity to Mumbai, Bangalore, and other major cities",
      updatedAt: new Date(),
    });

    // Pune Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneId,
      avgTempCelsius: 26,
      avgHumidity: 58,
      rainyMonths: ["June", "July", "August", "September"],
      bestTimeToVisit: "October to March",
      climateType: "Tropical wet and dry climate",
      currentWeather: {
        temperature: 25,
        humidity: 62,
        description: "Pleasant weather",
        icon: "sunny"
      },
      updatedAt: new Date(),
    });

    // Pune Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneId,
      safetyScore: "8.3",
      womenSafetyScore: "8.0",
      crimeRate: "Low - very safe city with good law and order",
      hospitals: [
        { name: "Ruby Hall Clinic", address: "Pune Cantonment", type: "Multi-specialty", emergency: true },
        { name: "Jehangir Hospital", address: "Sassoon Road", type: "Multi-specialty", emergency: true },
        { name: "KEM Hospital", address: "Rasta Peth", type: "Government Hospital", emergency: true },
        { name: "Deenanath Mangeshkar Hospital", address: "Erandwane", type: "Multi-specialty", emergency: true }
      ],
      emergencyNumbers: {
        police: "100",
        medical: "108",
        fire: "101"
      },
      pollutionIndex: 134,
      updatedAt: new Date(),
    });

    // Pune Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneId,
      foodScene: {
        specialties: ["Misal Pav", "Puran Poli", "Mastani", "Bhel Puri"],
        vegFriendly: true,
        streetFood: true,
        internationalCuisine: true
      },
      nightlife: {
        bars: true,
        clubs: true,
        lateNightEating: true,
        alcoholLaws: "Available; bars close at 1:30 AM, restaurants serve till midnight"
      },
      fitness: {
        gyms: 800,
        parks: 40,
        yogaStudios: 200,
        outdoorActivities: ["Trekking", "Cycling", "Badminton", "Cricket", "River rafting"]
      },
      culture: {
        languages: ["Marathi", "English", "Hindi"],
        festivals: ["Ganesh Chaturthi", "Navratri", "Diwali", "Gudi Padwa"],
        customs: ["Respect for Marathi culture", "Traditional dress during festivals", "Student-friendly environment"],
        artScene: true
      },
      cannabisLaws: "Illegal - strict penalties, avoid completely",
      updatedAt: new Date(),
    });

    // Jaipur
    const jaipurId = randomUUID();
    this.cities.set(jaipurId, {
      id: jaipurId,
      name: "Jaipur",
      state: "Rajasthan",
      slug: "jaipur",
      description: "Royal heritage city with stunning architecture, rich culture, and emerging tech scene.",
      heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      latitude: "26.9124",
      longitude: "75.7873",
      population: 3922000,
      rating: "4.4",
      isPopular: false,
      tags: ["Heritage", "Royal", "Budget"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Jaipur - Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: jaipurId,
      monthlyBudgetINR: 32000,
      monthlyBudgetUSD: 384,
      studioRentINR: 15000,
      oneBhkRentINR: 22000,
      twoBhkRentINR: 35000,
      utilitiesINR: 2200,
      groceriesINR: 6000,
      eatingOutINR: 4500,
      coworkingINR: 5500,
      transportINR: 2000,
      simDataINR: 400,
      gymINR: 1500,
      coffeeINR: 100,
      entertainmentINR: 3500,
      updatedAt: new Date(),
    });

    // Jaipur - Internet Connectivity
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: jaipurId,
      avgSpeedMbps: 55,
      coworkingSpaces: [
        {
          name: "91springboard Jaipur",
          address: "Malviya Nagar",
          pricing: "₹7,000/month",
          speedMbps: 100,
          amenities: ["Heritage Building", "Meeting Rooms", "Events", "Networking"]
        },
        {
          name: "CoWork Jaipur",
          address: "C-Scheme",
          pricing: "₹5,500/month",
          speedMbps: 80,
          amenities: ["Modern Workspace", "AC", "Printing", "Cafe"]
        },
        {
          name: "Pink City Workspace",
          address: "Vaishali Nagar",
          pricing: "₹4,800/month",
          speedMbps: 75,
          amenities: ["Royal Ambiance", "Quiet Zones", "Parking"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 399 },
            { data: "3GB/day", validity: "28 days", price: 599 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 449 },
            { data: "3GB/day", validity: "28 days", price: 649 }
          ]
        }
      ],
      wifiAvailability: "Good - Available in cafes, hotels, and most commercial areas",
      updatedAt: new Date(),
    });

    // Jaipur - Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: jaipurId,
      localTransport: {
        metro: true,
        bus: true,
        autoRickshaw: true,
        taxi: true,
        bike: true
      },
      walkabilityScore: 6,
      rideHailing: ["Uber", "Ola", "Rapido"],
      airports: [
        { name: "Jaipur International Airport", code: "JAI", distance: "12km from city center" }
      ],
      trainStations: [
        { name: "Jaipur Junction", type: "Major Railway Station" },
        { name: "Gandhinagar Jaipur", type: "Important Station" }
      ],
      intercityConnectivity: "Excellent connectivity to Delhi, Mumbai, Agra, and other major cities",
      updatedAt: new Date(),
    });

    // Jaipur - Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: jaipurId,
      avgTempCelsius: 26,
      avgHumidity: 58,
      rainyMonths: ["July", "August", "September"],
      bestTimeToVisit: "October to March",
      climateType: "Hot semi-arid climate",
      currentWeather: {
        temperature: 24,
        humidity: 55,
        description: "Pleasant royal weather",
        icon: "sunny"
      },
      updatedAt: new Date(),
    });

    // Jaipur - Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: jaipurId,
      safetyScore: "7.8",
      womenSafetyScore: "7.2",
      crimeRate: "Moderate - tourist areas are well-patrolled",
      hospitals: [
        { name: "SMS Hospital", address: "JLN Marg", type: "Government Medical College", emergency: true },
        { name: "Fortis Escorts Hospital", address: "Malviya Nagar", type: "Multi-specialty", emergency: true },
        { name: "Eternal Heart Care", address: "Jawahar Lal Nehru Marg", type: "Cardiac Specialty", emergency: true }
      ],
      emergencyNumbers: {
        police: "100",
        medical: "108",
        fire: "101"
      },
      pollutionIndex: 142,
      updatedAt: new Date(),
    });

    // Jaipur - Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: jaipurId,
      foodScene: {
        specialties: ["Dal Baati Churma", "Laal Maas", "Ghewar", "Pyaaz Kachori"],
        vegFriendly: true,
        streetFood: true,
        internationalCuisine: true
      },
      nightlife: {
        bars: true,
        clubs: true,
        lateNightEating: true,
        alcoholLaws: "Available; bars close at 12:30 AM"
      },
      fitness: {
        gyms: 300,
        parks: 25,
        yogaStudios: 80,
        outdoorActivities: ["Heritage walks", "Cycling", "Trekking", "Polo", "Hot air ballooning"]
      },
      culture: {
        languages: ["Hindi", "Rajasthani", "English"],
        festivals: ["Diwali", "Holi", "Teej", "Karva Chauth", "Jaipur Literature Festival"],
        customs: ["Royal heritage", "Traditional Rajasthani culture", "Respect for elders"],
        artScene: true
      },
      cannabisLaws: "Illegal - strict enforcement in tourist areas",
      updatedAt: new Date(),
    });

    // Jaipur - Events
    const jaipurEvent1 = randomUUID();
    this.events.set(jaipurEvent1, {
      id: jaipurEvent1,
      cityId: jaipurId,
      title: "Jaipur Literature Festival",
      description: "World's largest free literary festival featuring renowned authors and thinkers",
      date: new Date("2025-01-23"),
      venue: "Diggi Palace, Jaipur",
      category: "Literature",
      isPaid: false,
      price: "Free",
      url: "https://jaipurliteraturefestival.org/",
      createdAt: new Date(),
    });

    const jaipurEvent2 = randomUUID();
    this.events.set(jaipurEvent2, {
      id: jaipurEvent2,
      cityId: jaipurId,
      title: "Jaipur International Film Festival",
      description: "Celebrating cinema from around the world in the Pink City",
      date: new Date("2025-01-17"),
      venue: "Raj Mandir Cinema & Various Venues",
      category: "Film",
      isPaid: true,
      price: "₹200-1,500",
      url: "https://jiff.in/",
      createdAt: new Date(),
    });

    // Jaipur - Attractions
    const jaipurAttr1 = randomUUID();
    this.attractions.set(jaipurAttr1, {
      id: jaipurAttr1,
      cityId: jaipurId,
      name: "Amber Fort",
      description: "Magnificent fort with stunning architecture and elephant rides",
      category: "Heritage",
      priceRange: "₹100-500",
      address: "Amer, Jaipur",
      timings: "8:00 AM - 6:00 PM",
      isHiddenGem: false,
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop&q=60",
      createdAt: new Date(),
    });

    const jaipurAttr2 = randomUUID();
    this.attractions.set(jaipurAttr2, {
      id: jaipurAttr2,
      cityId: jaipurId,
      name: "City Palace",
      description: "Royal palace complex showcasing Rajasthani architecture",
      category: "Palace",
      priceRange: "₹75-300",
      address: "City Palace Road, Jaipur",
      timings: "9:30 AM - 5:00 PM",
      isHiddenGem: false,
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      createdAt: new Date(),
    });

    const jaipurAttr3 = randomUUID();
    this.attractions.set(jaipurAttr3, {
      id: jaipurAttr3,
      cityId: jaipurId,
      name: "Hawa Mahal",
      description: "Iconic palace with 953 windows offering panoramic city views",
      category: "Architecture",
      priceRange: "₹50-200",
      address: "Hawa Mahal Road, Badi Choupad",
      timings: "9:00 AM - 4:30 PM",
      isHiddenGem: false,
      rating: "4.4",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      createdAt: new Date(),
    });

    const jaipurAttr4 = randomUUID();
    this.attractions.set(jaipurAttr4, {
      id: jaipurAttr4,
      cityId: jaipurId,
      name: "Nahargarh Fort",
      description: "Hilltop fort offering stunning sunset views over the Pink City",
      category: "Heritage",
      priceRange: "₹25-100",
      address: "Krishna Nagar, Brahampuri",
      timings: "10:00 AM - 10:00 PM",
      isHiddenGem: true,
      rating: "4.3",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      createdAt: new Date(),
    });

    const jaipurAttr5 = randomUUID();
    this.attractions.set(jaipurAttr5, {
      id: jaipurAttr5,
      cityId: jaipurId,
      name: "Johari Bazaar",
      description: "Traditional market famous for jewelry, textiles, and handicrafts",
      category: "Shopping",
      priceRange: "Varies",
      address: "Johari Bazaar, Old City",
      timings: "10:00 AM - 9:00 PM",
      isHiddenGem: false,
      rating: "4.2",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      createdAt: new Date(),
    });

    // Add New Delhi
    const newDelhiId = randomUUID();
    this.cities.set(newDelhiId, {
      id: newDelhiId,
      name: "New Delhi",
      state: "Delhi",
      slug: "new-delhi",
      description: "India's vibrant capital with rich history, government opportunities, and emerging startup ecosystem.",
      heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      latitude: "28.6139",
      longitude: "77.2090",
      population: 32900000,
      rating: "4.5",
      isPopular: true,
      tags: ["Capital City", "Government", "History", "Politics"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add Alleppey
    const alleppeyId = randomUUID();
    this.cities.set(alleppeyId, {
      id: alleppeyId,
      name: "Alleppey",
      state: "Kerala",
      slug: "alleppey",
      description: "Venice of the East with serene backwaters, houseboats, and peaceful digital nomad environment.",
      heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      latitude: "9.4981",
      longitude: "76.3388",
      population: 174000,
      rating: "4.7",
      isPopular: true,
      tags: ["Backwaters", "Houseboats", "Peaceful", "Nature"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add Varkala
    const varkalaId = randomUUID();
    this.cities.set(varkalaId, {
      id: varkalaId,
      name: "Varkala",
      state: "Kerala",
      slug: "varkala",
      description: "Cliff-top beach town with spiritual vibes, yoga retreats, and growing nomad community.",
      heroImage: "https://images.unsplash.com/photo-1697193374263-8aeb5488dabe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VkFSS0FMQXxlbnwwfHwwfHx8MA%3D%3D",
      latitude: "8.7379",
      longitude: "76.7160",
      population: 42100,
      rating: "4.8",
      isPopular: true,
      tags: ["Cliffs", "Yoga", "Spiritual", "Beach"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add Kasol
    const kasolId = randomUUID();
    this.cities.set(kasolId, {
      id: kasolId,
      name: "Kasol",
      state: "Himachal Pradesh",
      slug: "kasol",
      description: "Mountain paradise in Parvati Valley with Israeli culture, trekking opportunities, and peaceful environment.",
      heroImage: "https://images.unsplash.com/photo-1612638039814-1a67ea727114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S0FTT0x8ZW58MHx8MHx8fDA%3D",
      latitude: "32.0997",
      longitude: "77.3102",
      population: 1200,
      rating: "4.9",
      isPopular: true,
      tags: ["Mountains", "Trekking", "Israeli Culture", "Valley"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add Bir 
    const birId = randomUUID();
    this.cities.set(birId, {
      id: birId,
      name: "Bir",
      state: "Himachal Pradesh",
      slug: "bir",
      description: "World-famous paragliding destination with Tibetan monasteries, quiet mountain life, and spectacular Himalayan views.",
      heroImage: "https://images.unsplash.com/photo-1620720970374-5b7e67e1e610?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QklSfGVufDB8fDB8fHww",
      latitude: "32.0176",
      longitude: "76.7234",
      population: 1200,
      rating: "4.8",
      isPopular: true,
      tags: ["Paragliding", "Mountains", "Tibetan Culture", "Adventure"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add Dehradun
    const dehradunId = randomUUID();
    this.cities.set(dehradunId, {
      id: dehradunId,
      name: "Dehradun",
      state: "Uttarakhand",
      slug: "dehradun",
      description: "Gateway to the Himalayas with excellent education infrastructure, pleasant climate, and growing tech scene.",
      heroImage: "https://images.unsplash.com/photo-1606586593596-5308e16d0a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8REVIUkFEVU58ZW58MHx8MHx8fDA%3D",
      latitude: "30.3165",
      longitude: "78.0322",
      population: 1400000,
      rating: "4.5",
      isPopular: true,
      tags: ["Education Hub", "Gateway to Himalayas", "Pleasant Climate", "IT Sector"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add Mussoorie  
    const mussoorieId = randomUUID();
    this.cities.set(mussoorieId, {
      id: mussoorieId,
      name: "Mussoorie",
      state: "Uttarakhand",
      slug: "mussoorie",
      description: "Queen of Hills with colonial charm, mall road culture, scenic mountain views, and inspiring writing retreats.",
      heroImage: "https://images.unsplash.com/photo-1583143874828-de3d288be51a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TVVTU09PUklFfGVufDB8fDB8fHww",
      latitude: "30.4598",
      longitude: "78.0664",
      population: 30118,
      rating: "4.6",
      isPopular: true,
      tags: ["Hill Station", "Colonial Heritage", "Scenic Views", "Writing Retreats"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add Ziro
    const ziroId = randomUUID();
    this.cities.set(ziroId, {
      id: ziroId,
      name: "Ziro",
      state: "Arunachal Pradesh",
      slug: "ziro",
      description: "UNESCO heritage site with unique Apatani tribal culture, music festivals, and pristine mountain valleys.",
      heroImage: "https://images.unsplash.com/photo-1531252582519-2d7e6795be96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WklSTyUyMFZBTExFWXxlbnwwfHwwfHx8MA%3D%3D",
      latitude: "27.5450",
      longitude: "93.8209",
      population: 5757,
      rating: "4.7",
      isPopular: true,
      tags: ["Tribal Culture", "Music Festival", "UNESCO Heritage", "Pristine Nature"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add Kolkata
    const kolkataId = randomUUID();
    this.cities.set(kolkataId, {
      id: kolkataId,
      name: "Kolkata",
      state: "West Bengal", 
      slug: "kolkata",
      description: "Cultural capital of India with rich literary heritage, vibrant arts scene, affordable living, and intellectual community.",
      heroImage: "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S09MS0FUQXxlbnwwfHwwfHx8MA%3D%3D",
      latitude: "22.5726",
      longitude: "88.3639",
      population: 14850000,
      rating: "4.3",
      isPopular: true,
      tags: ["Cultural Capital", "Literature", "Arts", "Intellectual Hub"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add cost of living data for new cities
    // New Delhi Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: newDelhiId,
      monthlyBudgetINR: 42000,
      monthlyBudgetUSD: 504,
      studioRentINR: 22000,
      oneBhkRentINR: 32000,
      twoBhkRentINR: 48000,
      utilitiesINR: 3500,
      groceriesINR: 9000,
      eatingOutINR: 7000,
      coworkingINR: 8500,
      transportINR: 2800,
      simDataINR: 500,
      gymINR: 2500,
      coffeeINR: 180,
      entertainmentINR: 6000,
      updatedAt: new Date(),
    });

    // Alleppey Cost of Living  
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: alleppeyId,
      monthlyBudgetINR: 28000,
      monthlyBudgetUSD: 336,
      studioRentINR: 12000,
      oneBhkRentINR: 18000,
      twoBhkRentINR: 28000,
      utilitiesINR: 2200,
      groceriesINR: 5500,
      eatingOutINR: 3500,
      coworkingINR: 4000,
      transportINR: 1200,
      simDataINR: 400,
      gymINR: 1200,
      coffeeINR: 80,
      entertainmentINR: 2500,
      updatedAt: new Date(),
    });

    // Varkala Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: varkalaId,
      monthlyBudgetINR: 30000,
      monthlyBudgetUSD: 360,
      studioRentINR: 15000,
      oneBhkRentINR: 22000,
      twoBhkRentINR: 32000,
      utilitiesINR: 2500,
      groceriesINR: 6000,
      eatingOutINR: 4000,
      coworkingINR: 5000,
      transportINR: 1500,
      simDataINR: 400,
      gymINR: 1500,
      coffeeINR: 100,
      entertainmentINR: 3000,
      updatedAt: new Date(),
    });

    // Kasol Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: kasolId,
      monthlyBudgetINR: 25000,
      monthlyBudgetUSD: 300,
      studioRentINR: 8000,
      oneBhkRentINR: 12000,
      twoBhkRentINR: 18000,
      utilitiesINR: 1500,
      groceriesINR: 4500,
      eatingOutINR: 3000,
      coworkingINR: 3000,
      transportINR: 800,
      simDataINR: 300,
      gymINR: 800,
      coffeeINR: 120,
      entertainmentINR: 2000,
      updatedAt: new Date(),
    });

    // Bir Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: birId,
      monthlyBudgetINR: 22000,
      monthlyBudgetUSD: 264,
      studioRentINR: 8000,
      oneBhkRentINR: 12000,
      twoBhkRentINR: 18000,
      utilitiesINR: 1200,
      groceriesINR: 4000,
      eatingOutINR: 2500,
      coworkingINR: 2500,
      transportINR: 600,
      simDataINR: 400,
      gymINR: 500,
      coffeeINR: 100,
      entertainmentINR: 1500,
      updatedAt: new Date(),
    });

    // Dehradun Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: dehradunId,
      monthlyBudgetINR: 35000,
      monthlyBudgetUSD: 420,
      studioRentINR: 12000,
      oneBhkRentINR: 18000,
      twoBhkRentINR: 28000,
      utilitiesINR: 2000,
      groceriesINR: 6000,
      eatingOutINR: 4500,
      coworkingINR: 4500,
      transportINR: 1800,
      simDataINR: 400,
      gymINR: 1500,
      coffeeINR: 90,
      entertainmentINR: 3000,
      updatedAt: new Date(),
    });

    // Mussoorie Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: mussoorieId,
      monthlyBudgetINR: 32000,
      monthlyBudgetUSD: 384,
      studioRentINR: 15000,
      oneBhkRentINR: 22000,
      twoBhkRentINR: 35000,
      utilitiesINR: 2500,
      groceriesINR: 6500,
      eatingOutINR: 4000,
      coworkingINR: 4000,
      transportINR: 1200,
      simDataINR: 400,
      gymINR: 1200,
      coffeeINR: 120,
      entertainmentINR: 2800,
      updatedAt: new Date(),
    });

    // Ziro Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: ziroId,
      monthlyBudgetINR: 26000,
      monthlyBudgetUSD: 312,
      studioRentINR: 8000,
      oneBhkRentINR: 12000,
      twoBhkRentINR: 18000,
      utilitiesINR: 1500,
      groceriesINR: 5000,
      eatingOutINR: 3500,
      coworkingINR: 2500,
      transportINR: 1000,
      simDataINR: 400,
      gymINR: 800,
      coffeeINR: 80,
      entertainmentINR: 2000,
      updatedAt: new Date(),
    });

    // Kolkata Cost of Living
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: kolkataId,
      monthlyBudgetINR: 40000,
      monthlyBudgetUSD: 480,
      studioRentINR: 15000,
      oneBhkRentINR: 22000,
      twoBhkRentINR: 35000,
      utilitiesINR: 2800,
      groceriesINR: 7500,
      eatingOutINR: 5500,
      coworkingINR: 7500,
      transportINR: 2200,
      simDataINR: 400,
      gymINR: 2000,
      coffeeINR: 80,
      entertainmentINR: 4500,
      updatedAt: new Date(),
    });

    // Add internet connectivity for new cities
    // New Delhi Internet
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: newDelhiId,
      avgSpeedMbps: 65,
      coworkingSpaces: [
        {
          name: "WeWork Cyber Hub",
          address: "DLF Cyber Hub, Gurgaon",
          pricing: "₹10,000/month",
          speedMbps: 150,
          amenities: ["24/7 Access", "Meeting Rooms", "Events", "Cafe"]
        },
        {
          name: "91springboard Delhi",
          address: "Connaught Place",
          pricing: "₹8,500/month", 
          speedMbps: 100,
          amenities: ["Community Events", "Mentorship", "Networking"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 399 },
            { data: "3GB/day", validity: "28 days", price: 599 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 449 },
            { data: "3GB/day", validity: "28 days", price: 649 }
          ]
        }
      ],
      wifiAvailability: "Excellent - Metro stations, malls, cafes all have free WiFi",
      updatedAt: new Date(),
    });

    // Alleppey Internet
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: alleppeyId,
      avgSpeedMbps: 35,
      coworkingSpaces: [
        {
          name: "Backwater Co-Work",
          address: "Mullakkal Street",
          pricing: "₹4,000/month",
          speedMbps: 50,
          amenities: ["Lake View", "Quiet Environment", "Cafe"]
        },
        {
          name: "Alleppey Digital Hub",
          address: "Near Beach",
          pricing: "₹3,500/month",
          speedMbps: 40,
          amenities: ["Beach Access", "Flexible Hours", "Community"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "1.5GB/day", validity: "28 days", price: 349 },
            { data: "2GB/day", validity: "28 days", price: 399 }
          ]
        },
        {
          provider: "BSNL",
          plans: [
            { data: "1GB/day", validity: "28 days", price: 299 },
            { data: "2GB/day", validity: "28 days", price: 399 }
          ]
        }
      ],
      wifiAvailability: "Good - Most cafes and hotels have WiFi, some free hotspots",
      updatedAt: new Date(),
    });

    // Varkala Internet
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: varkalaId,
      avgSpeedMbps: 40,
      coworkingSpaces: [
        {
          name: "Cliff Top Co-Work",
          address: "North Cliff",
          pricing: "₹5,000/month",
          speedMbps: 60,
          amenities: ["Ocean View", "Yoga Classes", "Cafe", "Wellness"]
        },
        {
          name: "Soul & Surf Digital Nomad Hub",
          address: "South Cliff",
          pricing: "₹4,500/month",
          speedMbps: 55,
          amenities: ["Surf Lessons", "Community", "Healthy Food"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "1.5GB/day", validity: "28 days", price: 349 },
            { data: "2GB/day", validity: "28 days", price: 399 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "1.5GB/day", validity: "28 days", price: 399 },
            { data: "2GB/day", validity: "28 days", price: 449 }
          ]
        }
      ],
      wifiAvailability: "Good - Cliff cafes have reliable WiFi, some beach areas",
      updatedAt: new Date(),
    });

    // Kasol Internet
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: kasolId,
      avgSpeedMbps: 25,
      coworkingSpaces: [
        {
          name: "Mountain View Co-Work",
          address: "Kasol Main Market",
          pricing: "₹3,000/month",
          speedMbps: 30,
          amenities: ["Mountain Views", "Quiet Space", "Local Cafe"]
        },
        {
          name: "Parvati Valley Digital Hub",
          address: "Chalal Village",
          pricing: "₹2,500/month",
          speedMbps: 25,
          amenities: ["Village Setting", "Trekking Base", "Community"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "1GB/day", validity: "28 days", price: 299 },
            { data: "1.5GB/day", validity: "28 days", price: 349 }
          ]
        },
        {
          provider: "BSNL",
          plans: [
            { data: "1GB/day", validity: "28 days", price: 299 },
            { data: "1.5GB/day", validity: "28 days", price: 349 }
          ]
        }
      ],
      wifiAvailability: "Limited - Main cafes and guesthouses have WiFi, spotty in remote areas",
      updatedAt: new Date(),
    });

    // Bir Internet Connectivity
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: birId,
      avgSpeedMbps: 30,
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
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "1.5GB/day", validity: "28 days", price: 349 },
            { data: "2GB/day", validity: "28 days", price: 399 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "1.5GB/day", validity: "28 days", price: 399 },
            { data: "2GB/day", validity: "28 days", price: 449 }
          ]
        }
      ],
      wifiAvailability: "Good - Most cafes and hostels have WiFi, reliable in main areas",
      updatedAt: new Date(),
    });

    // Dehradun Internet Connectivity
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: dehradunId,
      avgSpeedMbps: 55,
      coworkingSpaces: [
        {
          name: "91springboard Dehradun",
          address: "Rajpur Road, IT Park",
          pricing: "₹4,500/month",
          speedMbps: 100,
          amenities: ["Startup Ecosystem", "Mentorship Programs", "Events", "Meeting Rooms"]
        },
        {
          name: "The Workspace Café",
          address: "Clock Tower, Paltan Bazaar",
          pricing: "₹3,500/month",
          speedMbps: 80,
          amenities: ["Central Location", "Café Culture", "High-Speed WiFi", "Phone Booths"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 399 },
            { data: "3GB/day", validity: "28 days", price: 599 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 449 },
            { data: "3GB/day", validity: "28 days", price: 649 }
          ]
        }
      ],
      wifiAvailability: "Excellent - IT Park, malls, cafes, and educational institutions have reliable WiFi",
      updatedAt: new Date(),
    });

    // Mussoorie Internet Connectivity
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: mussoorieId,
      avgSpeedMbps: 45,
      coworkingSpaces: [
        {
          name: "The Writer's Den",
          address: "Mall Road, near Library Point",
          pricing: "₹4,000/month",
          speedMbps: 70,
          amenities: ["Library Access", "Writing Workshops", "Author Events", "Mountain Views"]
        },
        {
          name: "Himalayan Co-work Hub",
          address: "Landour, near Char Dukan",
          pricing: "₹3,500/month",
          speedMbps: 60,
          amenities: ["Colonial Architecture", "Peaceful Environment", "High-Speed WiFi", "Terrace Workspace"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "1.5GB/day", validity: "28 days", price: 349 },
            { data: "2GB/day", validity: "28 days", price: 399 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "1.5GB/day", validity: "28 days", price: 399 },
            { data: "2GB/day", validity: "28 days", price: 449 }
          ]
        }
      ],
      wifiAvailability: "Good - Mall Road cafes and hotels have WiFi, some areas affected by weather",
      updatedAt: new Date(),
    });

    // Ziro Internet Connectivity
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: ziroId,
      avgSpeedMbps: 20,
      coworkingSpaces: [
        {
          name: "Apatani Cultural Hub",
          address: "Ziro Town Center",
          pricing: "₹2,500/month",
          speedMbps: 25,
          amenities: ["Cultural Events", "Local Art", "Community Kitchen", "Mountain Views"]
        },
        {
          name: "Music Valley Co-work",
          address: "Near Festival Grounds",
          pricing: "₹2,000/month",
          speedMbps: 20,
          amenities: ["Music Rooms", "Festival Events", "Creative Community", "Natural Lighting"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "1GB/day", validity: "28 days", price: 299 },
            { data: "1.5GB/day", validity: "28 days", price: 349 }
          ]
        },
        {
          provider: "BSNL",
          plans: [
            { data: "1GB/day", validity: "28 days", price: 299 },
            { data: "1.5GB/day", validity: "28 days", price: 349 }
          ]
        }
      ],
      wifiAvailability: "Limited - Main town areas and some lodges have WiFi, remote areas have poor connectivity",
      updatedAt: new Date(),
    });

    // Kolkata Internet Connectivity
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: kolkataId,
      avgSpeedMbps: 60,
      coworkingSpaces: [
        {
          name: "91springboard Salt Lake",
          address: "Salt Lake City, Sector V",
          pricing: "₹7,500/month",
          speedMbps: 120,
          amenities: ["Startup Community", "Mentorship", "Events", "High-Speed WiFi"]
        },
        {
          name: "The Culture Canvas",
          address: "Park Street Area",
          pricing: "₹6,000/month",
          speedMbps: 100,
          amenities: ["Cultural Events", "Art Exhibitions", "Library", "Café Culture"]
        }
      ],
      simProviders: [
        {
          provider: "Jio",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 399 },
            { data: "3GB/day", validity: "28 days", price: 599 }
          ]
        },
        {
          provider: "Airtel",
          plans: [
            { data: "2GB/day", validity: "28 days", price: 449 },
            { data: "3GB/day", validity: "28 days", price: 649 }
          ]
        }
      ],
      wifiAvailability: "Excellent - Metro stations, IT areas, malls, and cultural centers have reliable WiFi",
      updatedAt: new Date(),
    });

    // Add transportation data for new cities
    // Bir Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: birId,
      localTransport: ["Shared taxis", "Auto rickshaws", "Local buses", "Rental bikes"],
      walkabilityScore: 7,
      rideHailing: ["Ola (limited)", "Local taxi services"],
      airports: [
        { name: "Kangra Airport", code: "DHM", distance: "65km" },
        { name: "Chandigarh Airport", code: "IXC", distance: "285km" }
      ],
      trainStations: [
        { name: "Pathankot Junction", type: "Major Junction" },
        { name: "Ahju Station", type: "Local Station" }
      ],
      intercityConnectivity: "Good road connections to Dharamshala, McLeod Ganj, and Delhi via bus",
      updatedAt: new Date(),
    });

    // Dehradun Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: dehradunId,
      localTransport: ["City buses", "Auto rickshaws", "Shared taxis", "E-rickshaws", "Vikram"],
      walkabilityScore: 6,
      rideHailing: ["Ola", "Uber", "Rapido"],
      airports: [
        { name: "Jolly Grant Airport", code: "DED", distance: "25km" }
      ],
      trainStations: [
        { name: "Dehradun Railway Station", type: "Major Terminal" },
        { name: "Haridwar Junction", type: "Major Junction" }
      ],
      intercityConnectivity: "Excellent connectivity to Delhi, Mumbai, and hill stations",
      updatedAt: new Date(),
    });

    // Mussoorie Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: mussoorieId,
      localTransport: ["Shared taxis", "Private cars", "Cable car", "Walking"],
      walkabilityScore: 8,
      rideHailing: ["Limited Ola", "Local taxi operators"],
      airports: [
        { name: "Jolly Grant Airport", code: "DED", distance: "60km via Dehradun" }
      ],
      trainStations: [
        { name: "Dehradun Railway Station", type: "Nearest major station" }
      ],
      intercityConnectivity: "Connected via Dehradun, regular buses and taxis from Delhi",
      updatedAt: new Date(),
    });

    // Ziro Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: ziroId,
      localTransport: ["Shared Sumos", "Private vehicles", "Local buses", "Walking"],
      walkabilityScore: 9,
      rideHailing: ["None available"],
      airports: [
        { name: "Ziro Airport", code: "ZER", distance: "5km" },
        { name: "Itanagar Airport", code: "HGI", distance: "115km" }
      ],
      trainStations: [
        { name: "Naharlagun Railway Station", type: "Nearest station" }
      ],
      intercityConnectivity: "Limited connectivity, mainly through Itanagar and Guwahati",
      updatedAt: new Date(),
    });

    // Kolkata Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: kolkataId,
      localTransport: ["Metro", "Buses", "Trams", "Auto rickshaws", "Taxis", "E-rickshaws"],
      walkabilityScore: 7,
      rideHailing: ["Ola", "Uber", "Rapido"],
      airports: [
        { name: "Netaji Subhas Chandra Bose International Airport", code: "CCU", distance: "15km" }
      ],
      trainStations: [
        { name: "Howrah Junction", type: "Major Terminal" },
        { name: "Sealdah Station", type: "Major Terminal" },
        { name: "Kolkata Station", type: "Major Junction" }
      ],
      intercityConnectivity: "Excellent rail and air connectivity across India and international",
      updatedAt: new Date(),
    });

    // Add climate data for new cities
    // Bir Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: birId,
      avgTempCelsius: 18,
      avgHumidity: 65,
      rainyMonths: ["July", "August", "September"],
      bestTimeToVisit: "March to June, September to November",
      climateType: "Subtropical highland climate",
      currentWeather: "Pleasant mountain weather with clear skies ideal for paragliding",
      updatedAt: new Date(),
    });

    // Dehradun Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: dehradunId,
      avgTempCelsius: 21,
      avgHumidity: 70,
      rainyMonths: ["June", "July", "August", "September"],
      bestTimeToVisit: "March to June, September to November",
      climateType: "Humid subtropical climate",
      currentWeather: "Pleasant weather with cool evenings, ideal for outdoor activities",
      updatedAt: new Date(),
    });

    // Mussoorie Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: mussoorieId,
      avgTempCelsius: 16,
      avgHumidity: 75,
      rainyMonths: ["June", "July", "August", "September"],
      bestTimeToVisit: "April to June, September to November",
      climateType: "Humid subtropical highland climate",
      currentWeather: "Cool mountain air with misty mornings, perfect hill station weather",
      updatedAt: new Date(),
    });

    // Ziro Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: ziroId,
      avgTempCelsius: 20,
      avgHumidity: 80,
      rainyMonths: ["May", "June", "July", "August", "September"],
      bestTimeToVisit: "March to May, September to November",
      climateType: "Subtropical highland climate",
      currentWeather: "Fresh mountain air with lush green valleys, perfect for outdoor festivals",
      updatedAt: new Date(),
    });

    // Kolkata Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: kolkataId,
      avgTempCelsius: 27,
      avgHumidity: 85,
      rainyMonths: ["June", "July", "August", "September"],
      bestTimeToVisit: "October to March",
      climateType: "Tropical wet-and-dry climate",
      currentWeather: "Warm and humid with cultural richness, monsoons bring relief",
      updatedAt: new Date(),
    });

    // Add safety data for new cities
    // Bir Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: birId,
      safetyScore: "8.5",
      womenSafetyScore: "8.0",
      crimeRate: "Very Low",
      hospitals: [
        { name: "Civil Hospital Baijnath", type: "Government", address: "Baijnath, 15km from Bir", emergency: true },
        { name: "Tanda Medical College", type: "Government", address: "Tanda, 25km from Bir", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 25,
      updatedAt: new Date(),
    });

    // Dehradun Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: dehradunId,
      safetyScore: "8.5",
      womenSafetyScore: "8.0",
      crimeRate: "Low",
      hospitals: [
        { name: "Doon Hospital", type: "Private", address: "Rajpur Road, Dehradun", emergency: true },
        { name: "Shri Mahant Indiresh Hospital", type: "Private", address: "Patel Nagar, Dehradun", emergency: true },
        { name: "Combined Hospital", type: "Government", address: "Clement Town, Dehradun", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 65,
      updatedAt: new Date(),
    });

    // Mussoorie Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: mussoorieId,
      safetyScore: "8.5",
      womenSafetyScore: "8.0",
      crimeRate: "Very Low",
      hospitals: [
        { name: "Mussoorie Hospital", type: "Government", address: "Mall Road, Mussoorie", emergency: true },
        { name: "Landour Community Hospital", type: "Private", address: "Landour, Mussoorie", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 20,
      updatedAt: new Date(),
    });

    // Ziro Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: ziroId,
      safetyScore: "8.5",
      womenSafetyScore: "8.0",
      crimeRate: "Very Low",
      hospitals: [
        { name: "District Hospital Ziro", type: "Government", address: "Ziro Town", emergency: true },
        { name: "Christian Medical Centre", type: "Private", address: "Old Ziro", emergency: false }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 15,
      updatedAt: new Date(),
    });

    // Kolkata Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: kolkataId,
      safetyScore: "8.5",
      womenSafetyScore: "8.0",
      crimeRate: "Medium",
      hospitals: [
        { name: "AMRI Hospital", type: "Private", address: "Salt Lake City, Kolkata", emergency: true },
        { name: "Apollo Gleneagles Hospital", type: "Private", address: "EM Bypass, Kolkata", emergency: true },
        { name: "SSKM Hospital", type: "Government", address: "College Street, Kolkata", emergency: true },
        { name: "Ruby General Hospital", type: "Private", address: "Kasba, Kolkata", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 85,
      updatedAt: new Date(),
    });

    // Add lifestyle data for new cities
    // Bir Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: birId,
      nightlife: { bars: false, clubs: false, lateNightEating: false, alcoholLaws: "Limited availability - tourist areas only" },
      foodScene: {
        specialties: ["Tibetan momos", "Thukpa", "Parathas", "Local Himachali dishes", "Israeli cuisine"],
        vegFriendly: true, streetFood: false, internationalCuisine: true
      },
      fitness: { gyms: 2, parks: 5, yogaStudios: 8, outdoorActivities: ["Paragliding", "Trekking", "Mountain biking", "Meditation retreats"] },
      culture: {
        languages: ["Hindi", "English", "Tibetan", "Himachali"],
        festivals: ["Paragliding World Cup", "Buddhist festivals", "Local Himachali festivals"],
        customs: ["Tibetan Buddhist culture", "Adventure sports community", "Spiritual retreats"],
        artScene: true
      },
      cannabisLaws: "Illegal - remote area with limited monitoring",
      updatedAt: new Date(),
    });

    // Dehradun Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: dehradunId,
      nightlife: { bars: true, clubs: true, lateNightEating: true, alcoholLaws: "Available - licensed venues and shops" },
      foodScene: {
        specialties: ["Garhwali cuisine", "Aloo ke gutke", "Kafuli", "Bal mithai", "Street food"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      fitness: { gyms: 45, parks: 25, yogaStudios: 20, outdoorActivities: ["Trekking", "River rafting", "Rock climbing", "Nature walks"] },
      culture: {
        languages: ["Hindi", "English", "Garhwali", "Punjabi"],
        festivals: ["Tapkeshwar Fair", "Buddha Purnima", "Basant Panchami", "Cultural festivals"],
        customs: ["Garhwali traditions", "Educational hub culture", "Military heritage"],
        artScene: true
      },
      cannabisLaws: "Illegal - strictly monitored due to educational institutions",
      updatedAt: new Date(),
    });

    // Mussoorie Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: mussoorieId,
      nightlife: { bars: true, clubs: false, lateNightEating: true, alcoholLaws: "Available - tourist-friendly policies" },
      foodScene: {
        specialties: ["Momos", "Maggi noodles", "British colonial cuisine", "Local Garhwali dishes", "Cafe culture"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      fitness: { gyms: 8, parks: 15, yogaStudios: 12, outdoorActivities: ["Hill walking", "Cable car rides", "Nature photography", "Mall Road strolling"] },
      culture: {
        languages: ["Hindi", "English", "Garhwali"],
        festivals: ["Summer Festival", "Autumn Festival", "Christmas celebrations", "Colonial heritage events"],
        customs: ["British colonial heritage", "Hill station culture", "Tourist hospitality"],
        artScene: true
      },
      cannabisLaws: "Illegal - tourist area with regular monitoring",
      updatedAt: new Date(),
    });

    // Ziro Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: ziroId,
      nightlife: { bars: false, clubs: false, lateNightEating: false, alcoholLaws: "Limited availability - local rice wine culture" },
      foodScene: {
        specialties: ["Apong (rice wine)", "Fish curry", "Bamboo shoot dishes", "Smoked fish", "Traditional Apatani cuisine"],
        vegFriendly: false, streetFood: false, internationalCuisine: false
      },
      fitness: { gyms: 1, parks: 10, yogaStudios: 2, outdoorActivities: ["Trekking", "Music festivals", "Cultural walks", "Bird watching"] },
      culture: {
        languages: ["Apatani", "Hindi", "English"],
        festivals: ["Ziro Music Festival", "Myoko festival", "Murung festival", "Dree festival"],
        customs: ["Apatani tribal culture", "Sustainable agriculture", "Traditional crafts", "Music community"],
        artScene: true
      },
      cannabisLaws: "Illegal - traditional community with own customs",
      updatedAt: new Date(),
    });

    // Kolkata Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: kolkataId,
      nightlife: { bars: true, clubs: true, lateNightEating: true, alcoholLaws: "Available - established bar culture and licensed venues" },
      foodScene: {
        specialties: ["Fish curry", "Mishti doi", "Rosogolla", "Street food", "Biryani", "Puchka"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      fitness: { gyms: 120, parks: 40, yogaStudios: 35, outdoorActivities: ["River cruises", "Football", "Cricket", "Cultural walks"] },
      culture: {
        languages: ["Bengali", "Hindi", "English"],
        festivals: ["Durga Puja", "Kali Puja", "Poila Boishakh", "Book Fair", "Film Festival"],
        customs: ["Bengali culture", "Intellectual traditions", "Art and literature", "Adda culture"],
        artScene: true
      },
      cannabisLaws: "Illegal - metropolitan city with strict enforcement",
      updatedAt: new Date(),
    });

    // Add attractions for new cities
    // New Delhi Attractions
    const delhiAttr1 = randomUUID();
    this.attractions.set(delhiAttr1, {
      id: delhiAttr1,
      cityId: newDelhiId,
      name: "Red Fort",
      description: "Historic Mughal fortress and UNESCO World Heritage Site with stunning architecture and museums.",
      category: "Historical",
      priceRange: "₹35-550",
      address: "Netaji Subhash Marg, Lal Qila, Chandni Chowk",
      timings: "9:30 AM - 4:30 PM (Closed Monday)",
      isHiddenGem: false,
      rating: "4.4",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      createdAt: new Date(),
    });

    const delhiAttr2 = randomUUID();
    this.attractions.set(delhiAttr2, {
      id: delhiAttr2,
      cityId: newDelhiId,
      name: "Lotus Temple",
      description: "Baháʼí House of Worship known for its flower-like shape and peaceful meditation.",
      category: "Spiritual",
      priceRange: "Free",
      address: "Lotus Temple Road, Bahapur, Shambhu Dayal Bagh",
      timings: "9:00 AM - 5:30 PM (Closed Monday)",
      isHiddenGem: false,
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1580050334438-3b44b0e7c33c",
      createdAt: new Date(),
    });

    const delhiAttr3 = randomUUID();
    this.attractions.set(delhiAttr3, {
      id: delhiAttr3,
      cityId: newDelhiId,
      name: "Hauz Khas Village",
      description: "Bohemian urban village with art galleries, designer boutiques, and trendy cafes around ancient ruins.",
      category: "Culture",
      priceRange: "Free (cafes vary)",
      address: "Hauz Khas Village, South Delhi",
      timings: "24 hours (shops 11 AM - 11 PM)",
      isHiddenGem: true,
      rating: "4.2",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
      createdAt: new Date(),
    });

    // Alleppey Attractions
    const alleppeyAttr1 = randomUUID();
    this.attractions.set(alleppeyAttr1, {
      id: alleppeyAttr1,
      cityId: alleppeyId,
      name: "Backwater Houseboat Cruise",
      description: "Traditional Kettuvallam houseboat cruise through serene backwaters with local cuisine and overnight stays.",
      category: "Nature",
      priceRange: "₹8,000-25,000",
      address: "Alleppey Backwater, Finishing Point",
      timings: "All day cruises available",
      isHiddenGem: false,
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      createdAt: new Date(),
    });

    const alleppeyAttr2 = randomUUID();
    this.attractions.set(alleppeyAttr2, {
      id: alleppeyAttr2,
      cityId: alleppeyId,
      name: "Alleppey Beach",
      description: "Beautiful sandy beach with historic lighthouse, pier, and stunning sunset views.",
      category: "Beach",
      priceRange: "Free",
      address: "Alleppey Beach Road",
      timings: "24 hours",
      isHiddenGem: false,
      rating: "4.3",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
      createdAt: new Date(),
    });

    const alleppeyAttr3 = randomUUID();
    this.attractions.set(alleppeyAttr3, {
      id: alleppeyAttr3,
      cityId: alleppeyId,
      name: "Kumarakom Bird Sanctuary",
      description: "14-acre bird sanctuary with migratory birds, boat rides through mangroves.",
      category: "Wildlife",
      priceRange: "₹25-50",
      address: "Kumarakom, 16km from Alleppey",
      timings: "6:00 AM - 6:00 PM",
      isHiddenGem: true,
      rating: "4.2",
      image: "https://images.unsplash.com/photo-1571985969114-7c47498d6b43",
      createdAt: new Date(),
    });

    // Varkala Attractions
    const varkalaAttr1 = randomUUID();
    this.attractions.set(varkalaAttr1, {
      id: varkalaAttr1,
      cityId: varkalaId,
      name: "Varkala Cliff",
      description: "Dramatic red laterite cliffs with ancient temples, yoga centers, and panoramic ocean views.",
      category: "Nature",
      priceRange: "Free",
      address: "Varkala Cliff, North Cliff Road",
      timings: "24 hours",
      isHiddenGem: false,
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      createdAt: new Date(),
    });

    const varkalaAttr2 = randomUUID();
    this.attractions.set(varkalaAttr2, {
      id: varkalaAttr2,
      cityId: varkalaId,
      name: "Papanasam Beach",
      description: "Sacred beach believed to wash away sins, with mineral springs and spiritual significance.",
      category: "Spiritual",
      priceRange: "Free",
      address: "Papanasam Beach, Varkala",
      timings: "24 hours",
      isHiddenGem: false,
      rating: "4.4",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
      createdAt: new Date(),
    });

    const varkalaAttr3 = randomUUID();
    this.attractions.set(varkalaAttr3, {
      id: varkalaAttr3,
      cityId: varkalaId,
      name: "Sivagiri Mutt",
      description: "Peaceful ashram and pilgrimage center founded by social reformer Sree Narayana Guru.",
      category: "Spiritual",
      priceRange: "Free",
      address: "Sivagiri Hills, Varkala",
      timings: "5:00 AM - 12:00 PM, 4:00 PM - 8:00 PM",
      isHiddenGem: true,
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
      createdAt: new Date(),
    });

    // Kasol Attractions
    const kasolAttr1 = randomUUID();
    this.attractions.set(kasolAttr1, {
      id: kasolAttr1,
      cityId: kasolId,
      name: "Parvati River",
      description: "Crystal clear mountain river perfect for riverside camping, fishing, and photography.",
      category: "Nature",
      priceRange: "Free",
      address: "Parvati Valley, Kasol",
      timings: "24 hours",
      isHiddenGem: false,
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      createdAt: new Date(),
    });

    const kasolAttr2 = randomUUID();
    this.attractions.set(kasolAttr2, {
      id: kasolAttr2,
      cityId: kasolId,
      name: "Malana Village",
      description: "Ancient isolated village known for unique culture, democracy, and stunning mountain trek.",
      category: "Culture",
      priceRange: "Free (trek guide ₹500-1000)",
      address: "Malana Village, 22km from Kasol",
      timings: "Day visits only",
      isHiddenGem: true,
      rating: "4.3",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      createdAt: new Date(),
    });

    const kasolAttr3 = randomUUID();
    this.attractions.set(kasolAttr3, {
      id: kasolAttr3,
      cityId: kasolId,
      name: "Chalal Village",
      description: "Peaceful riverside village perfect for digital detox, meditation, and connecting with nature.",
      category: "Nature",
      priceRange: "Free",
      address: "Chalal Village, 30-min walk from Kasol",
      timings: "24 hours",
      isHiddenGem: true,
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1571985969114-7c47498d6b43",
      createdAt: new Date(),
    });

    // Bangalore Attractions
    const bangaloreAttr1 = randomUUID();
    this.attractions.set(bangaloreAttr1, {
      id: bangaloreAttr1,
      cityId: bangaloreId,
      name: "Lalbagh Botanical Garden",
      description: "240-acre botanical garden with diverse flora, glass house, and beautiful lake for morning walks.",
      category: "Nature",
      priceRange: "₹10-30",
      address: "Mavalli, Bangalore",
      timings: "6:00 AM - 7:00 PM",
      isHiddenGem: false,
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      createdAt: new Date(),
    });

    const bangaloreAttr2 = randomUUID();
    this.attractions.set(bangaloreAttr2, {
      id: bangaloreAttr2,
      cityId: bangaloreId,
      name: "Bangalore Palace",
      description: "Magnificent Tudor-style palace with ornate interiors, vintage furniture, and royal architecture.",
      category: "Historical",
      priceRange: "₹230-460",
      address: "Vasanth Nagar, Bangalore",
      timings: "10:00 AM - 5:30 PM",
      isHiddenGem: false,
      rating: "4.3",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      createdAt: new Date(),
    });

    const bangaloreAttr3 = randomUUID();
    this.attractions.set(bangaloreAttr3, {
      id: bangaloreAttr3,
      cityId: bangaloreId,
      name: "Nandi Hills",
      description: "Scenic hill station 60km from city, perfect for sunrise, trekking, and weekend getaways.",
      category: "Nature",
      priceRange: "₹5 (parking ₹30)",
      address: "Nandi Hills, Chikkaballapur District",
      timings: "6:00 AM - 10:00 PM",
      isHiddenGem: true,
      rating: "4.4",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      createdAt: new Date(),
    });

    const bangaloreAttr4 = randomUUID();
    this.attractions.set(bangaloreAttr4, {
      id: bangaloreAttr4,
      cityId: bangaloreId,
      name: "UB City Mall",
      description: "Luxury shopping destination with high-end brands, fine dining, and premium experiences.",
      category: "Shopping",
      priceRange: "Free entry (shopping varies)",
      address: "UB City, Vittal Mallya Road",
      timings: "10:00 AM - 10:00 PM",
      isHiddenGem: false,
      rating: "4.2",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      createdAt: new Date(),
    });

    // Pune Attractions
    const puneAttr1 = randomUUID();
    this.attractions.set(puneAttr1, {
      id: puneAttr1,
      cityId: puneId,
      name: "Shaniwar Wada",
      description: "Historic 18th-century palace complex with rich Maratha heritage and sound-light shows.",
      category: "Historical",
      priceRange: "₹5-25",
      address: "Shaniwar Peth, Pune",
      timings: "8:00 AM - 6:30 PM",
      isHiddenGem: false,
      rating: "4.1",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
      createdAt: new Date(),
    });

    const puneAttr2 = randomUUID();
    this.attractions.set(puneAttr2, {
      id: puneAttr2,
      cityId: puneId,
      name: "Sinhagad Fort",
      description: "Historic hill fort with panoramic views, trekking trails, and famous for Tanaji's battle.",
      category: "Historical",
      priceRange: "Free (transport ₹30-50)",
      address: "Sinhagad, 35km from Pune",
      timings: "9:00 AM - 6:00 PM",
      isHiddenGem: false,
      rating: "4.3",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      createdAt: new Date(),
    });

    const puneAttr3 = randomUUID();
    this.attractions.set(puneAttr3, {
      id: puneAttr3,
      cityId: puneId,
      name: "Koregaon Park",
      description: "Upscale neighborhood with trendy cafes, boutiques, Osho Ashram, and vibrant nightlife.",
      category: "Entertainment",
      priceRange: "Free (spending varies)",
      address: "Koregaon Park, Pune",
      timings: "24 hours",
      isHiddenGem: false,
      rating: "4.4",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      createdAt: new Date(),
    });

    const puneAttr4 = randomUUID();
    this.attractions.set(puneAttr4, {
      id: puneAttr4,
      cityId: puneId,
      name: "Mulshi Dam",
      description: "Scenic reservoir surrounded by Western Ghats, perfect for picnics and monsoon visits.",
      category: "Nature",
      priceRange: "Free",
      address: "Mulshi, 50km from Pune",
      timings: "6:00 AM - 6:00 PM",
      isHiddenGem: true,
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      createdAt: new Date(),
    });

    // Add city-specific events
    // Bangalore Events
    const bangaloreEvent1 = randomUUID();
    this.events.set(bangaloreEvent1, {
      id: bangaloreEvent1,
      cityId: bangaloreId,
      title: "Bangalore Tech Summit",
      description: "India's largest technology conference with global tech leaders, startups, and innovation showcases.",
      date: new Date("2024-11-29"),
      venue: "Palace Grounds, Bangalore",
      category: "Technology",
      isPaid: true,
      price: 2000,
      url: "https://bengalurutechsummit.com/",
      createdAt: new Date(),
    });

    const bangaloreEvent2 = randomUUID();
    this.events.set(bangaloreEvent2, {
      id: bangaloreEvent2,
      cityId: bangaloreId,
      title: "Lalbagh Flower Show",
      description: "Biannual flower exhibition during Republic Day and Independence Day with stunning displays.",
      date: new Date("2025-01-26"),
      venue: "Lalbagh Botanical Garden",
      category: "Culture",
      isPaid: true,
      price: 20,
      url: null,
      createdAt: new Date(),
    });

    const bangaloreEvent3 = randomUUID();
    this.events.set(bangaloreEvent3, {
      id: bangaloreEvent3,
      cityId: bangaloreId,
      title: "Bangalore Literature Festival",
      description: "Literary festival featuring renowned authors, poets, panel discussions, and book launches.",
      date: new Date("2024-12-07"),
      venue: "Various venues across Bangalore",
      category: "Literature",
      isPaid: false,
      price: null,
      url: "https://bangaloreliteraturefestival.org/",
      createdAt: new Date(),
    });

    // Pune Events
    const puneEvent1 = randomUUID();
    this.events.set(puneEvent1, {
      id: puneEvent1,
      cityId: puneId,
      title: "Pune International Film Festival",
      description: "Premier film festival showcasing international and Indian cinema with industry workshops.",
      date: new Date("2025-01-09"),
      venue: "Multiple venues in Pune",
      category: "Film",
      isPaid: true,
      price: 100,
      url: "https://piff.co.in/",
      createdAt: new Date(),
    });

    const puneEvent2 = randomUUID();
    this.events.set(puneEvent2, {
      id: puneEvent2,
      cityId: puneId,
      title: "Sawai Gandharva Bhimsen Festival",
      description: "Classical music festival honoring legendary vocalist Pandit Bhimsen Joshi.",
      date: new Date("2024-12-13"),
      venue: "Shanmukhananda Hall, Pune",
      category: "Music",
      isPaid: true,
      price: "₹200-2,000",
      url: "https://sawai-gandharva.com/",
      createdAt: new Date(),
    });

    const puneEvent3 = randomUUID();
    this.events.set(puneEvent3, {
      id: puneEvent3,
      cityId: puneId,
      title: "Ganesh Chaturthi Celebration",
      description: "Grand celebration of Lord Ganesha with elaborate pandals, processions, and cultural programs.",
      date: new Date("2024-09-07"),
      venue: "Throughout Pune City",
      category: "Religious",
      isPaid: false,
      price: null,
      url: null,
      createdAt: new Date(),
    });

    // New Delhi Events
    const delhiEvent1 = randomUUID();
    this.events.set(delhiEvent1, {
      id: delhiEvent1,
      cityId: newDelhiId,
      title: "Delhi International Film Festival",
      description: "Premier film festival showcasing international and Indian cinema with workshops and screenings.",
      date: new Date("2024-11-15"),
      venue: "Multiple venues across Delhi",
      category: "Film",
      isPaid: true,
      price: "₹200-1,000",
      url: "https://delhifilmfestival.com/",
      createdAt: new Date(),
    });

    const delhiEvent2 = randomUUID();
    this.events.set(delhiEvent2, {
      id: delhiEvent2,
      cityId: newDelhiId,
      title: "India Art Fair",
      description: "South Asia's leading international art fair featuring contemporary and modern art.",
      date: new Date("2025-02-07"),
      venue: "NSIC Exhibition Complex",
      category: "Art",
      isPaid: true,
      price: "₹500-2,000",
      url: "https://indiaartfair.in/",
      createdAt: new Date(),
    });

    // Alleppey Events
    const alleppeyEvent1 = randomUUID();
    this.events.set(alleppeyEvent1, {
      id: alleppeyEvent1,
      cityId: alleppeyId,
      title: "Nehru Trophy Boat Race",
      description: "Famous snake boat race on Vembanad Lake with traditional Chundan Vallams competing.",
      date: new Date("2024-08-10"),
      venue: "Vembanad Lake, Alleppey",
      category: "Sports",
      isPaid: true,
      price: "₹100-500",
      url: "https://nehrutrophy.com/",
      createdAt: new Date(),
    });

    const alleppeyEvent2 = randomUUID();
    this.events.set(alleppeyEvent2, {
      id: alleppeyEvent2,
      cityId: alleppeyId,
      title: "Alleppey Beach Festival",
      description: "Three-day cultural festival with music, dance, food stalls, and beach activities.",
      date: new Date("2024-12-23"),
      venue: "Alleppey Beach",
      category: "Culture",
      isPaid: false,
      price: null,
      url: null,
      createdAt: new Date(),
    });

    // Varkala Events
    const varkalaEvent1 = randomUUID();
    this.events.set(varkalaEvent1, {
      id: varkalaEvent1,
      cityId: varkalaId,
      title: "Varkala Yoga Festival",
      description: "International yoga festival with workshops, meditation, and wellness programs.",
      date: new Date("2025-01-15"),
      venue: "Various yoga centers, Varkala Cliff",
      category: "Wellness",
      isPaid: true,
      price: "₹2,000-8,000",
      url: "https://varkalayoga.com/",
      createdAt: new Date(),
    });

    const varkalaEvent2 = randomUUID();
    this.events.set(varkalaEvent2, {
      id: varkalaEvent2,
      cityId: varkalaId,
      title: "Arattu Festival",
      description: "Traditional temple festival at Janardhana Swamy Temple with processions and cultural programs.",
      date: new Date("2025-03-20"),
      venue: "Janardhana Swamy Temple",
      category: "Religious",
      isPaid: false,
      price: null,
      url: null,
      createdAt: new Date(),
    });

    // Kasol Events
    const kasolEvent1 = randomUUID();
    this.events.set(kasolEvent1, {
      id: kasolEvent1,
      cityId: kasolId,
      title: "Parvati Valley Music Festival",
      description: "Mountain music festival with psytrance, live bands, and cultural exchange in natural setting.",
      date: new Date("2024-10-15"),
      venue: "Kasol Riverbank",
      category: "Music",
      isPaid: true,
      price: "₹1,500-5,000",
      url: "https://parvatimusic.com/",
      createdAt: new Date(),
    });

    const kasolEvent2 = randomUUID();
    this.events.set(kasolEvent2, {
      id: kasolEvent2,
      cityId: kasolId,
      title: "Malana Cream Festival",
      description: "Local harvest celebration with traditional Himachali culture, food, and mountain lifestyle.",
      date: new Date("2024-09-15"),
      venue: "Malana Village",
      category: "Culture",
      isPaid: false,
      price: null,
      url: null,
      createdAt: new Date(),
    });

    // Mumbai Events
    const eventId1 = randomUUID();
    this.events.set(eventId1, {
      id: eventId1,
      cityId: mumbaiId,
      title: "Mumbai Tech Meetup",
      description: "Monthly gathering of tech enthusiasts and entrepreneurs",
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      venue: "WeWork BKC",
      category: "Technology",
      isPaid: false,
      price: null,
      url: "https://meetup.com/mumbai-tech",
      createdAt: new Date(),
    });

    // Add some attractions
    const attractionId1 = randomUUID();
    this.attractions.set(attractionId1, {
      id: attractionId1,
      cityId: mumbaiId,
      name: "Gateway of India",
      description: "Iconic arch monument built in 1924, one of Mumbai's most famous landmarks",
      category: "Historical",
      image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875",
      rating: "4.5",
      priceRange: "Free",
      address: "Apollo Bunder, Colaba",
      timings: "24 hours",
      isHiddenGem: false,
      createdAt: new Date(),
    });

    // Add transportation data for new cities
    // New Delhi Transportation  
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: newDelhiId,
      localTransport: {
        metro: true,
        bus: true,
        autoRickshaw: true,
        taxi: true,
        bike: true
      },
      walkabilityScore: 6,
      rideHailing: ["Uber", "Ola", "Rapido"],
      airports: [
        { name: "Indira Gandhi International", code: "DEL", distance: "20-45km" }
      ],
      trainStations: [
        { name: "New Delhi Railway Station", type: "Major Junction" },
        { name: "Old Delhi Railway Station", type: "Major Junction" }
      ],
      intercityConnectivity: "Excellent - Hub for all major Indian cities via air and rail",
      updatedAt: new Date(),
    });

    // Alleppey Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: alleppeyId,
      localTransport: {
        metro: false,
        bus: true,
        autoRickshaw: true,
        taxi: false,
        bike: true
      },
      walkabilityScore: 8,
      rideHailing: ["Ola", "Uber (limited)"],
      airports: [
        { name: "Cochin International", code: "COK", distance: "85km" }
      ],
      trainStations: [
        { name: "Alappuzha Railway Station", type: "Regional Junction" }
      ],
      intercityConnectivity: "Good rail connectivity to major Kerala cities, bus to other states",
      updatedAt: new Date(),
    });

    // Varkala Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: varkalaId,
      localTransport: {
        metro: false,
        bus: true,
        autoRickshaw: true,
        taxi: false,
        bike: true
      },
      walkabilityScore: 9,
      rideHailing: ["Ola"],
      airports: [
        { name: "Trivandrum International", code: "TRV", distance: "42km" }
      ],
      trainStations: [
        { name: "Varkala Railway Station", type: "Regional" }
      ],
      intercityConnectivity: "Good connectivity to Trivandrum and Kochi via rail and road",
      updatedAt: new Date(),
    });

    // Kasol Transportation
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: kasolId,
      localTransport: {
        metro: false,
        bus: true,
        autoRickshaw: false,
        taxi: true,
        bike: true
      },
      walkabilityScore: 7,
      rideHailing: [],
      airports: [
        { name: "Bhuntar Airport", code: "KUU", distance: "31km" }
      ],
      trainStations: [
        { name: "Chandigarh Railway Station", type: "Major Junction (250km)" }
      ],
      intercityConnectivity: "Limited - mainly via Chandigarh/Delhi, seasonal bus services",
      updatedAt: new Date(),
    });

    // Add climate data for new cities
    // New Delhi Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: newDelhiId,
      avgTempCelsius: 25,
      avgHumidity: 62,
      rainyMonths: ["July", "August", "September"],
      bestTimeToVisit: "October to March",
      climateType: "Semi-arid with monsoons",
      currentWeather: {
        temperature: 24,
        humidity: 65,
        description: "Clear sky",
        icon: "sunny"
      },
      updatedAt: new Date(),
    });

    // Alleppey Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: alleppeyId,
      avgTempCelsius: 28,
      avgHumidity: 80,
      rainyMonths: ["June", "July", "August", "September", "October"],
      bestTimeToVisit: "November to February",
      climateType: "Tropical humid",
      currentWeather: {
        temperature: 29,
        humidity: 82,
        description: "Partly cloudy",
        icon: "partly-cloudy"
      },
      updatedAt: new Date(),
    });

    // Varkala Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: varkalaId,
      avgTempCelsius: 27,
      avgHumidity: 78,
      rainyMonths: ["June", "July", "August", "September", "October"],
      bestTimeToVisit: "November to March",
      climateType: "Tropical coastal",
      currentWeather: {
        temperature: 28,
        humidity: 79,
        description: "Sea breeze",
        icon: "partly-cloudy"
      },
      updatedAt: new Date(),
    });

    // Kasol Climate
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: kasolId,
      avgTempCelsius: 15,
      avgHumidity: 65,
      rainyMonths: ["July", "August", "September"],
      bestTimeToVisit: "March to June, September to November",
      climateType: "Temperate mountain climate",
      currentWeather: {
        temperature: 12,
        humidity: 68,
        description: "Mountain fresh",
        icon: "cloudy"
      },
      updatedAt: new Date(),
    });

    // Add safety data for new cities
    // New Delhi Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: newDelhiId,
      safetyScore: "7.5",
      womenSafetyScore: "6.8",
      crimeRate: "Moderate - petty theft, some serious crimes in certain areas",
      hospitals: [
        { name: "AIIMS Delhi", address: "Ansari Nagar", type: "Government Multi-specialty", emergency: true },
        { name: "Max Super Specialty Hospital", address: "Saket", type: "Private Multi-specialty", emergency: true }
      ],
      emergencyNumbers: {
        police: "100",
        medical: "108",
        fire: "101"
      },
      pollutionIndex: 220,
      updatedAt: new Date(),
    });

    // Alleppey Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: alleppeyId,
      safetyScore: "8.8",
      womenSafetyScore: "8.5",
      crimeRate: "Very Low - mostly minor theft, very safe overall",
      hospitals: [
        { name: "Alappuzha Medical College", address: "Vandanam", type: "Government Hospital", emergency: true },
        { name: "KIMS Alappuzha", address: "Alappuzha", type: "Private Hospital", emergency: true }
      ],
      emergencyNumbers: {
        police: "100",
        medical: "108",
        fire: "101"
      },
      pollutionIndex: 45,
      updatedAt: new Date(),
    });

    // Varkala Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: varkalaId,
      safetyScore: "8.9",
      womenSafetyScore: "8.7",
      crimeRate: "Very Low - occasional petty theft, very safe beach town",
      hospitals: [
        { name: "Varkala Taluk Hospital", address: "Varkala", type: "Government Hospital", emergency: true },
        { name: "Aswathy Hospital", address: "Varkala", type: "Private Hospital", emergency: true }
      ],
      emergencyNumbers: {
        police: "100",
        medical: "108",
        fire: "101"
      },
      pollutionIndex: 35,
      updatedAt: new Date(),
    });

    // Kasol Safety
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: kasolId,
      safetyScore: "8.5",
      womenSafetyScore: "8.2",
      crimeRate: "Low - mainly trekking accidents, very safe mountain town",
      hospitals: [
        { name: "Civil Hospital Kullu", address: "Kullu (25km)", type: "Government Hospital", emergency: true },
        { name: "Kullu Valley Hospital", address: "Bhuntar (31km)", type: "Private Hospital", emergency: true }
      ],
      emergencyNumbers: {
        police: "100",
        medical: "108",
        fire: "101"
      },
      pollutionIndex: 25,
      updatedAt: new Date(),
    });

    // Add lifestyle data for new cities
    // New Delhi Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: newDelhiId,
      foodScene: {
        specialties: ["Chole Bhature", "Paranthas", "Kebabs", "Chaat"],
        vegFriendly: true,
        streetFood: true,
        internationalCuisine: true
      },
      nightlife: {
        bars: true,
        clubs: true,
        lateNightEating: true,
        alcoholLaws: "Available with permit; restaurants serve till 1 AM"
      },
      fitness: {
        gyms: 800,
        parks: 100,
        yogaStudios: 200,
        outdoorActivities: ["Cycling", "Rock climbing", "Badminton", "Cricket"]
      },
      culture: {
        languages: ["Hindi", "English", "Punjabi", "Urdu"],
        festivals: ["Diwali", "Holi", "Dussehra", "Karva Chauth"],
        customs: ["Respect for elders", "Remove shoes in homes", "Modest dress in religious places"],
        artScene: true
      },
      cannabisLaws: "Illegal - strict penalties, avoid completely",
      updatedAt: new Date(),
    });

    // Alleppey Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: alleppeyId,
      foodScene: {
        specialties: ["Fish Curry", "Appam", "Karimeen", "Coconut-based dishes"],
        vegFriendly: true,
        streetFood: true,
        internationalCuisine: false
      },
      nightlife: {
        bars: false,
        clubs: false,
        lateNightEating: false,
        alcoholLaws: "Limited availability - dry state with permits required"
      },
      fitness: {
        gyms: 15,
        parks: 5,
        yogaStudios: 8,
        outdoorActivities: ["Backwater cruising", "Fishing", "Cycling", "Bird watching"]
      },
      culture: {
        languages: ["Malayalam", "English", "Tamil"],
        festivals: ["Onam", "Vishu", "Boat Race Festival", "Christmas"],
        customs: ["Conservative dress", "Respect for traditions", "Early to bed culture"],
        artScene: false
      },
      cannabisLaws: "Illegal - strict penalties in Kerala",
      updatedAt: new Date(),
    });

    // Varkala Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: varkalaId,
      foodScene: {
        specialties: ["Fresh Seafood", "Ayurvedic meals", "Coconut dishes", "Healthy cafes"],
        vegFriendly: true,
        streetFood: true,
        internationalCuisine: true
      },
      nightlife: {
        bars: true,
        clubs: false,
        lateNightEating: true,
        alcoholLaws: "Available with permits - beach shacks serve alcohol"
      },
      fitness: {
        gyms: 8,
        parks: 3,
        yogaStudios: 25,
        outdoorActivities: ["Surfing", "Yoga", "Beach walks", "Cliff hiking"]
      },
      culture: {
        languages: ["Malayalam", "English", "Hindi"],
        festivals: ["Onam", "Vishu", "Yoga festivals", "Music festivals"],
        customs: ["Beach culture", "Spiritual practices", "Wellness focus"],
        artScene: true
      },
      cannabisLaws: "Illegal - but more relaxed enforcement in tourist areas",
      updatedAt: new Date(),
    });

    // Kasol Lifestyle
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: kasolId,
      foodScene: {
        specialties: ["Israeli cuisine", "Local Himachali food", "Tibetan dishes", "Backpacker food"],
        vegFriendly: true,
        streetFood: true,
        internationalCuisine: true
      },
      nightlife: {
        bars: true,
        clubs: false,
        lateNightEating: true,
        alcoholLaws: "Available - mountain town with relaxed atmosphere"
      },
      fitness: {
        gyms: 2,
        parks: 0,
        yogaStudios: 5,
        outdoorActivities: ["Trekking", "River rafting", "Rock climbing", "Camping"]
      },
      culture: {
        languages: ["Hindi", "Hebrew", "English", "Pahari"],
        festivals: ["Dussehra", "Local mountain festivals", "Music festivals", "Trance parties"],
        customs: ["Mountain culture", "Israeli influence", "Backpacker lifestyle"],
        artScene: true
      },
      cannabisLaws: "Illegal but traditionally grown - very relaxed enforcement",
      updatedAt: new Date(),
    });

    // Add 4 New Cities: Gangtok, McLeodganj, Shillong, Udaipur
    
    // Gangtok
    const gangtokId = randomUUID();
    this.cities.set(gangtokId, {
      id: gangtokId,
      name: "Gangtok",
      state: "Sikkim",
      slug: "gangtok",
      description: "Beautiful Himalayan capital with stunning mountain views, Buddhist culture, and adventure sports.",
      heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      latitude: "27.3389",
      longitude: "88.6065",
      population: 200000,
      rating: "4.6",
      isPopular: false,
      tags: ["Mountains", "Buddhism", "Adventure"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: gangtokId,
      monthlyBudgetINR: 28000,
      monthlyBudgetUSD: 336,
      studioRentINR: 12000,
      oneBhkRentINR: 18000,
      twoBhkRentINR: 28000,
      utilitiesINR: 2000,
      groceriesINR: 5500,
      eatingOutINR: 3500,
      coworkingINR: 4500,
      transportINR: 1200,
      simDataINR: 400,
      gymINR: 1200,
      coffeeINR: 80,
      entertainmentINR: 2500,
      updatedAt: new Date(),
    });

    // McLeodganj  
    const mcleodganjId = randomUUID();
    this.cities.set(mcleodganjId, {
      id: mcleodganjId,
      name: "McLeodganj",
      state: "Himachal Pradesh", 
      slug: "mcleodganj",
      description: "Little Lhasa with Dalai Lama's residence, Tibetan culture, trekking, and spiritual retreats.",
      heroImage: "https://images.unsplash.com/photo-1655469795982-40b85d7faf92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWNsZW9kZ2FuanxlbnwwfHwwfHx8MA%3D%3D",
      latitude: "32.2396",
      longitude: "76.3200",
      population: 9000,
      rating: "4.7",
      isPopular: false,
      tags: ["Spirituality", "Tibetan Culture", "Trekking"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: mcleodganjId,
      monthlyBudgetINR: 25000,
      monthlyBudgetUSD: 300,
      studioRentINR: 10000,
      oneBhkRentINR: 15000,
      twoBhkRentINR: 22000,
      utilitiesINR: 1800,
      groceriesINR: 5000,
      eatingOutINR: 3000,
      coworkingINR: 4000,
      transportINR: 1000,
      simDataINR: 400,
      gymINR: 1000,
      coffeeINR: 70,
      entertainmentINR: 2000,
      updatedAt: new Date(),
    });

    // Shillong
    const shillongId = randomUUID();
    this.cities.set(shillongId, {
      id: shillongId,
      name: "Shillong",
      state: "Meghalaya",
      slug: "shillong", 
      description: "Scotland of the East with rolling hills, waterfalls, music culture, and cool climate year-round.",
      heroImage: "https://images.unsplash.com/photo-1594514113865-d1deac339435?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaWxsb25nfGVufDB8fDB8fHww",
      latitude: "25.5788",
      longitude: "91.8933",
      population: 354325,
      rating: "4.5",
      isPopular: false,
      tags: ["Hills", "Music", "Waterfalls"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: shillongId,
      monthlyBudgetINR: 30000,
      monthlyBudgetUSD: 360,
      studioRentINR: 13000,
      oneBhkRentINR: 20000,
      twoBhkRentINR: 30000,
      utilitiesINR: 2200,
      groceriesINR: 6000,
      eatingOutINR: 4000,
      coworkingINR: 5000,
      transportINR: 1500,
      simDataINR: 400,
      gymINR: 1300,
      coffeeINR: 90,
      entertainmentINR: 3000,
      updatedAt: new Date(),
    });

    // Udaipur
    const udaipurId = randomUUID();
    this.cities.set(udaipurId, {
      id: udaipurId,
      name: "Udaipur",
      state: "Rajasthan",
      slug: "udaipur",
      description: "City of Lakes with royal palaces, stunning architecture, romantic boat rides, and heritage hotels.",
      heroImage: "https://plus.unsplash.com/premium_photo-1697730426227-9056296a0315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VURBSVBVUnxlbnwwfHwwfHx8MA%3D%3D", 
      latitude: "24.5854",
      longitude: "73.7125",
      population: 691000,
      rating: "4.8",
      isPopular: true,
      tags: ["Royal", "Lakes", "Heritage"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: udaipurId,
      monthlyBudgetINR: 33000,
      monthlyBudgetUSD: 396,
      studioRentINR: 14000,
      oneBhkRentINR: 22000,
      twoBhkRentINR: 35000,
      utilitiesINR: 2300,
      groceriesINR: 6500,
      eatingOutINR: 4500,
      coworkingINR: 5500,
      transportINR: 1800,
      simDataINR: 400,
      gymINR: 1500,
      coffeeINR: 100,
      entertainmentINR: 3500,
      updatedAt: new Date(),
    });

    // Add missing comprehensive data for new cities to complete all 14 tabs
    this.populateComprehensiveCityData();
  }

  async getAllCities(): Promise<City[]> {
    return Array.from(this.cities.values());
  }

  async getCityBySlug(slug: string): Promise<CityWithDetails | undefined> {
    const city = Array.from(this.cities.values()).find(c => c.slug === slug);
    if (!city) return undefined;

    const costOfLiving = Array.from(this.costsOfLiving.values()).find(c => c.cityId === city.id) || null;
    const internetConnectivity = Array.from(this.internetConnectivity.values()).find(i => i.cityId === city.id) || null;
    const transportation = Array.from(this.transportation.values()).find(t => t.cityId === city.id) || null;
    const climate = Array.from(this.climate.values()).find(c => c.cityId === city.id) || null;
    const safety = Array.from(this.safety.values()).find(s => s.cityId === city.id) || null;
    const lifestyle = Array.from(this.lifestyle.values()).find(l => l.cityId === city.id) || null;
    const events = Array.from(this.events.values()).filter(e => e.cityId === city.id);
    const attractions = Array.from(this.attractions.values()).filter(a => a.cityId === city.id);

    return {
      ...city,
      costOfLiving,
      internetConnectivity,
      transportation,
      climate,
      safety,
      lifestyle,
      events,
      attractions,
    };
  }

  async searchCities(query: string): Promise<City[]> {
    const searchTerm = query.toLowerCase();
    return Array.from(this.cities.values()).filter(city =>
      city.name.toLowerCase().includes(searchTerm) ||
      city.state.toLowerCase().includes(searchTerm) ||
      city.description.toLowerCase().includes(searchTerm) ||
      city.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  async getPopularCities(): Promise<City[]> {
    return Array.from(this.cities.values())
      .filter(city => city.isPopular)
      .sort((a, b) => parseFloat(b.rating || "0") - parseFloat(a.rating || "0"));
  }

  async createCity(insertCity: InsertCity): Promise<City> {
    const id = randomUUID();
    const city: City = {
      ...insertCity,
      id,
      population: insertCity.population ?? null,
      rating: insertCity.rating ?? null,
      isPopular: insertCity.isPopular ?? null,
      tags: insertCity.tags ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.cities.set(id, city);
    return city;
  }

  async getCostOfLiving(cityId: string): Promise<CostOfLiving | undefined> {
    return Array.from(this.costsOfLiving.values()).find(c => c.cityId === cityId);
  }

  async createCostOfLiving(insertCost: InsertCostOfLiving): Promise<CostOfLiving> {
    const id = randomUUID();
    const cost: CostOfLiving = {
      ...insertCost,
      id,
      studioRentINR: insertCost.studioRentINR ?? null,
      oneBhkRentINR: insertCost.oneBhkRentINR ?? null,
      twoBhkRentINR: insertCost.twoBhkRentINR ?? null,
      groceriesINR: insertCost.groceriesINR ?? null,
      eatingOutINR: insertCost.eatingOutINR ?? null,
      coworkingINR: insertCost.coworkingINR ?? null,
      transportINR: insertCost.transportINR ?? null,
      utilitiesINR: insertCost.utilitiesINR ?? null,
      simDataINR: insertCost.simDataINR ?? null,
      gymINR: insertCost.gymINR ?? null,
      coffeeINR: insertCost.coffeeINR ?? null,
      entertainmentINR: insertCost.entertainmentINR ?? null,
      updatedAt: new Date(),
    };
    this.costsOfLiving.set(id, cost);
    return cost;
  }

  async getInternetConnectivity(cityId: string): Promise<InternetConnectivity | undefined> {
    return Array.from(this.internetConnectivity.values()).find(i => i.cityId === cityId);
  }

  async createInternetConnectivity(insertInternet: InsertInternetConnectivity): Promise<InternetConnectivity> {
    const id = randomUUID();
    const internet: InternetConnectivity = {
      ...insertInternet,
      id,
      coworkingSpaces: insertInternet.coworkingSpaces ?? null,
      simProviders: insertInternet.simProviders ?? null,
      wifiAvailability: insertInternet.wifiAvailability ?? null,
      updatedAt: new Date(),
    };
    this.internetConnectivity.set(id, internet);
    return internet;
  }

  async getTransportation(cityId: string): Promise<Transportation | undefined> {
    return Array.from(this.transportation.values()).find(t => t.cityId === cityId);
  }

  async createTransportation(insertTransport: InsertTransportation): Promise<Transportation> {
    const id = randomUUID();
    const transport: Transportation = {
      ...insertTransport,
      id,
      localTransport: insertTransport.localTransport ?? null,
      walkabilityScore: insertTransport.walkabilityScore ?? null,
      rideHailing: insertTransport.rideHailing ?? null,
      airports: insertTransport.airports ?? null,
      trainStations: insertTransport.trainStations ?? null,
      intercityConnectivity: insertTransport.intercityConnectivity ?? null,
      updatedAt: new Date(),
    };
    this.transportation.set(id, transport);
    return transport;
  }

  async getClimate(cityId: string): Promise<Climate | undefined> {
    return Array.from(this.climate.values()).find(c => c.cityId === cityId);
  }

  async createClimate(insertClimate: InsertClimate): Promise<Climate> {
    const id = randomUUID();
    const climate: Climate = {
      ...insertClimate,
      id,
      avgHumidity: insertClimate.avgHumidity ?? null,
      rainyMonths: insertClimate.rainyMonths ?? null,
      bestTimeToVisit: insertClimate.bestTimeToVisit ?? null,
      climateType: insertClimate.climateType ?? null,
      currentWeather: insertClimate.currentWeather ?? null,
      updatedAt: new Date(),
    };
    this.climate.set(id, climate);
    return climate;
  }

  async getSafety(cityId: string): Promise<Safety | undefined> {
    return Array.from(this.safety.values()).find(s => s.cityId === cityId);
  }

  async createSafety(insertSafety: InsertSafety): Promise<Safety> {
    const id = randomUUID();
    const safety: Safety = {
      ...insertSafety,
      id,
      womenSafetyScore: insertSafety.womenSafetyScore ?? null,
      crimeRate: insertSafety.crimeRate ?? null,
      hospitals: insertSafety.hospitals ?? null,
      emergencyNumbers: insertSafety.emergencyNumbers ?? null,
      pollutionIndex: insertSafety.pollutionIndex ?? null,
      updatedAt: new Date(),
    };
    this.safety.set(id, safety);
    return safety;
  }

  async getLifestyle(cityId: string): Promise<Lifestyle | undefined> {
    return Array.from(this.lifestyle.values()).find(l => l.cityId === cityId);
  }

  async createLifestyle(insertLifestyle: InsertLifestyle): Promise<Lifestyle> {
    const id = randomUUID();
    const lifestyle: Lifestyle = {
      ...insertLifestyle,
      id,
      nightlife: insertLifestyle.nightlife ?? null,
      foodScene: insertLifestyle.foodScene ?? null,
      fitness: insertLifestyle.fitness ?? null,
      culture: insertLifestyle.culture ?? null,
      updatedAt: new Date(),
    };
    this.lifestyle.set(id, lifestyle);
    return lifestyle;
  }

  async getEventsByCity(cityId: string): Promise<Event[]> {
    return Array.from(this.events.values()).filter(e => e.cityId === cityId);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = {
      ...insertEvent,
      id,
      description: insertEvent.description ?? null,
      url: insertEvent.url ?? null,
      venue: insertEvent.venue ?? null,
      category: insertEvent.category ?? null,
      isPaid: insertEvent.isPaid ?? null,
      price: insertEvent.price ?? null,
      createdAt: new Date(),
    };
    this.events.set(id, event);
    return event;
  }

  async getAttractionsByCity(cityId: string): Promise<Attraction[]> {
    return Array.from(this.attractions.values()).filter(a => a.cityId === cityId);
  }

  async createAttraction(insertAttraction: InsertAttraction): Promise<Attraction> {
    const id = randomUUID();
    const attraction: Attraction = {
      ...insertAttraction,
      id,
      address: insertAttraction.address ?? null,
      image: insertAttraction.image ?? null,
      description: insertAttraction.description ?? null,
      rating: insertAttraction.rating ?? null,
      priceRange: insertAttraction.priceRange ?? null,
      timings: insertAttraction.timings ?? null,
      isHiddenGem: insertAttraction.isHiddenGem ?? null,
      createdAt: new Date(),
    };
    this.attractions.set(id, attraction);
    return attraction;
  }

  // Comprehensive data population for all cities that need complete data
  private populateComprehensiveCityData() {
    const gangtokCity = Array.from(this.cities.values()).find(c => c.slug === "gangtok");
    const mcleodganjCity = Array.from(this.cities.values()).find(c => c.slug === "mcleodganj");
    const shillongCity = Array.from(this.cities.values()).find(c => c.slug === "shillong");
    const puneCity = Array.from(this.cities.values()).find(c => c.slug === "pune");
    const udaipurCity = Array.from(this.cities.values()).find(c => c.slug === "udaipur");
    
    if (!gangtokCity || !mcleodganjCity || !shillongCity || !puneCity || !udaipurCity) return;

    // Add Internet Connectivity data for all cities
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: gangtokCity.id,
      avgSpeedMbps: 40,
      coworkingSpaces: [
        { name: "Mountain Co-work", address: "MG Marg, Gangtok", pricing: "₹3,500/month", speedMbps: 50, amenities: ["Mountain Views", "Meeting Room", "Cafe"] },
        { name: "Sikkim Innovation Hub", address: "Ranipool, Gangtok", pricing: "₹2,800/month", speedMbps: 45, amenities: ["Government Support", "Mentorship", "Events"] }
      ],
      simProviders: [
        { provider: "Jio", plans: [{ data: "1.5GB/day", validity: "28 days", price: 399 }, { data: "2GB/day", validity: "28 days", price: 599 }] },
        { provider: "Airtel", plans: [{ data: "1.5GB/day", validity: "28 days", price: 419 }] }
      ],
      wifiAvailability: "Good - Available in hotels, cafes, and monasteries",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: mcleodganjCity.id,
      avgSpeedMbps: 35,
      coworkingSpaces: [
        { name: "Tibet World Co-work", address: "Temple Road, McLeodganj", pricing: "₹3,000/month", speedMbps: 45, amenities: ["Mountain Views", "Meditation Room", "Tibetan Cafe"] },
        { name: "Himalaya Co-working", address: "Bhagsu Road, McLeodganj", pricing: "₹2,500/month", speedMbps: 40, amenities: ["Spiritual Atmosphere", "Quiet Zones", "Tea Garden"] }
      ],
      simProviders: [
        { provider: "Jio", plans: [{ data: "1.5GB/day", validity: "28 days", price: 399 }] },
        { provider: "Vi", plans: [{ data: "1.5GB/day", validity: "28 days", price: 449 }] }
      ],
      wifiAvailability: "Good - Available in cafes, guesthouses, and temples",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: shillongCity.id,
      avgSpeedMbps: 50,
      coworkingSpaces: [
        { name: "Shillong Co-working Hub", address: "Police Bazaar, Shillong", pricing: "₹4,500/month", speedMbps: 65, amenities: ["Music Room", "Recording Studio", "Hill Views"] },
        { name: "NE Digital Hub", address: "Laitumkhrah, Shillong", pricing: "₹3,800/month", speedMbps: 55, amenities: ["Tech Focus", "Startup Events", "Mentorship"] }
      ],
      simProviders: [
        { provider: "Jio", plans: [{ data: "1.5GB/day", validity: "28 days", price: 399 }, { data: "2GB/day", validity: "28 days", price: 599 }] },
        { provider: "Airtel", plans: [{ data: "1.5GB/day", validity: "28 days", price: 419 }] }
      ],
      wifiAvailability: "Excellent - Available in most areas including cafes and hotels",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneCity.id,
      avgSpeedMbps: 85,
      coworkingSpaces: [
        { name: "91springboard Pune", address: "Koregaon Park, Pune", pricing: "₹8,500/month", speedMbps: 100, amenities: ["Premium Location", "Events", "Networking"] },
        { name: "Workafella Pune", address: "Baner, Pune", pricing: "₹7,200/month", speedMbps: 90, amenities: ["Modern Design", "Cafe", "Gaming Zone"] },
        { name: "IndiQube Pune", address: "Viman Nagar, Pune", pricing: "₹6,800/month", speedMbps: 85, amenities: ["Corporate Grade", "Meeting Rooms", "Cafeteria"] }
      ],
      simProviders: [
        { provider: "Jio", plans: [{ data: "1.5GB/day", validity: "28 days", price: 399 }, { data: "2GB/day", validity: "56 days", price: 999 }] },
        { provider: "Airtel", plans: [{ data: "2GB/day", validity: "28 days", price: 549 }] },
        { provider: "Vi", plans: [{ data: "1.5GB/day", validity: "28 days", price: 449 }] }
      ],
      wifiAvailability: "Excellent - Extensive coverage in IT hubs, cafes, and malls",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(),
      cityId: udaipurCity.id,
      avgSpeedMbps: 45,
      coworkingSpaces: [
        { name: "Lake Palace Co-work", address: "City Palace Road, Udaipur", pricing: "₹4,200/month", speedMbps: 60, amenities: ["Lake Views", "Heritage Setting", "Royal Ambiance"] },
        { name: "Udaipur Startup Hub", address: "Surajpole, Udaipur", pricing: "₹3,500/month", speedMbps: 50, amenities: ["Local Community", "Tourism Focus", "Cultural Events"] }
      ],
      simProviders: [
        { provider: "Jio", plans: [{ data: "1.5GB/day", validity: "28 days", price: 399 }, { data: "2GB/day", validity: "28 days", price: 599 }] },
        { provider: "Airtel", plans: [{ data: "1.5GB/day", validity: "28 days", price: 419 }] }
      ],
      wifiAvailability: "Good - Available in hotels, cafes, and heritage properties",
      updatedAt: new Date(),
    });

    // Add comprehensive climate data for all cities 
    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: gangtokCity.id,
      avgTempCelsius: 15,
      avgHumidity: 70,
      rainyMonths: ["June", "July", "August", "September"],
      bestTimeToVisit: "March to May, October to December",
      climateType: "Subtropical highland - cool summers, crisp winters",
      currentWeather: { temperature: 12, humidity: 75, description: "Cool mountain air with morning mist", icon: "cloudy" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: mcleodganjCity.id,
      avgTempCelsius: 16,
      avgHumidity: 68,
      rainyMonths: ["July", "August", "September"],
      bestTimeToVisit: "March to June, September to November",
      climateType: "Subtropical highland with spiritual mountain ambiance",
      currentWeather: { temperature: 14, humidity: 70, description: "Crisp mountain air with prayer flags", icon: "partly-cloudy" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: shillongCity.id,
      avgTempCelsius: 20,
      avgHumidity: 75,
      rainyMonths: ["May", "June", "July", "August", "September", "October"],
      bestTimeToVisit: "March to May, September to November",
      climateType: "Subtropical highland - Scotland of the East with heavy monsoons",
      currentWeather: { temperature: 18, humidity: 78, description: "Cool hill station with musical vibes", icon: "partly-cloudy" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneCity.id,
      avgTempCelsius: 25,
      avgHumidity: 60,
      rainyMonths: ["June", "July", "August", "September"],
      bestTimeToVisit: "October to March",
      climateType: "Semi-arid with moderate rainfall - student city climate",
      currentWeather: { temperature: 26, humidity: 58, description: "Pleasant university town weather", icon: "sunny" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(),
      cityId: udaipurCity.id,
      avgTempCelsius: 28,
      avgHumidity: 55,
      rainyMonths: ["July", "August", "September"],
      bestTimeToVisit: "October to March",
      climateType: "Semi-arid desert climate with lake moderation",
      currentWeather: { temperature: 26, humidity: 52, description: "Royal city with lake breezes", icon: "sunny" },
      updatedAt: new Date(),
    });

    // Add Safety data for all cities
    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: gangtokCity.id,
      safetyScore: "9.0",
      womenSafetyScore: "8.8",
      crimeRate: "Very Low - extremely safe, well-policed Buddhist state",
      hospitals: [
        { name: "STNM Hospital", address: "Sochakgang", type: "Government", emergency: true },
        { name: "Manipal Hospital Siliguri", address: "Nearest private (120km)", type: "Private", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 45,
      updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: mcleodganjCity.id,
      safetyScore: "9.2",
      womenSafetyScore: "9.0",
      crimeRate: "Very Low - spiritual atmosphere ensures exceptional safety",
      hospitals: [
        { name: "Delek Hospital", address: "Gangchen Kyishong", type: "Tibetan Medical", emergency: true },
        { name: "Dr. Rajendra Prasad Hospital", address: "Tanda (15km)", type: "Government Medical College", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 35,
      updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: shillongCity.id,
      safetyScore: "8.7",
      womenSafetyScore: "8.5",
      crimeRate: "Low - generally safe with friendly Khasi locals",
      hospitals: [
        { name: "NEIGRIHMS", address: "Mawdiangdiang", type: "Medical College", emergency: true },
        { name: "Shillong Civil Hospital", address: "Civil Hospital", type: "Government", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 55,
      updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneCity.id,
      safetyScore: "7.8",
      womenSafetyScore: "7.5",
      crimeRate: "Moderate - student city with occasional issues in nightlife areas",
      hospitals: [
        { name: "Ruby Hall Clinic", address: "Sassoon Road", type: "Private", emergency: true },
        { name: "Deenanath Mangeshkar Hospital", address: "Erandwane", type: "Private", emergency: true },
        { name: "Sassoon Hospital", address: "Near Railway Station", type: "Government", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 75,
      updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(),
      cityId: udaipurCity.id,
      safetyScore: "8.2",
      womenSafetyScore: "7.8",
      crimeRate: "Low to Moderate - tourist-focused city with good police presence",
      hospitals: [
        { name: "Maharana Bhupal Hospital", address: "RNT Medical College", type: "Government Medical College", emergency: true },
        { name: "Pacific Medical College", address: "Bedla", type: "Private Medical College", emergency: true },
        { name: "Aravali Hospital", address: "Titardi", type: "Private", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 65,
      updatedAt: new Date(),
    });

    // Add Transportation data for all cities
    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: gangtokCity.id,
      localTransport: { metro: false, bus: true, autoRickshaw: false, taxi: true, bike: true },
      walkabilityScore: 8,
      rideHailing: ["Ola"],
      airports: [{ name: "Bagdogra Airport", code: "IXB", distance: "124km" }],
      trainStations: [{ name: "New Jalpaiguri", type: "Nearest Major (148km)" }],
      intercityConnectivity: "Limited - mainly via Siliguri and NJP",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: mcleodganjCity.id,
      localTransport: { metro: false, bus: true, autoRickshaw: false, taxi: true, bike: false },
      walkabilityScore: 9,
      rideHailing: [],
      airports: [{ name: "Kangra Airport", code: "DHM", distance: "18km" }],
      trainStations: [{ name: "Pathankot Railway", type: "Nearest Major (90km)" }],
      intercityConnectivity: "Limited - via Pathankot and Delhi",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: shillongCity.id,
      localTransport: { metro: false, bus: true, autoRickshaw: false, taxi: true, bike: true },
      walkabilityScore: 7,
      rideHailing: ["Ola", "Uber"],
      airports: [{ name: "Umroi Airport", code: "SHL", distance: "35km" }],
      trainStations: [{ name: "Guwahati Railway", type: "Nearest Major (103km)" }],
      intercityConnectivity: "Good - well connected to Guwahati and NE states",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneCity.id,
      localTransport: { metro: true, bus: true, autoRickshaw: true, taxi: true, bike: true },
      walkabilityScore: 6,
      rideHailing: ["Ola", "Uber", "Rapido"],
      airports: [{ name: "Pune Airport", code: "PNQ", distance: "8km" }],
      trainStations: [{ name: "Pune Junction", type: "Major Railway Hub" }],
      intercityConnectivity: "Excellent - major transportation hub for Western India",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(),
      cityId: udaipurCity.id,
      localTransport: { metro: false, bus: true, autoRickshaw: true, taxi: true, bike: true },
      walkabilityScore: 7,
      rideHailing: ["Ola", "Uber"],
      airports: [{ name: "Maharana Pratap Airport", code: "UDR", distance: "24km" }],
      trainStations: [{ name: "Udaipur City Railway", type: "Major Station" }],
      intercityConnectivity: "Good - connected to major Rajasthan and Gujarat cities",
      updatedAt: new Date(),
    });

    // Add Lifestyle data for all cities
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: gangtokCity.id,
      foodScene: {
        specialties: ["Momos", "Thukpa", "Gundruk", "Churpi", "Sel Roti"],
        vegFriendly: true, streetFood: true, internationalCuisine: false
      },
      nightlife: { bars: true, clubs: false, lateNightEating: false, alcoholLaws: "Available; bars close at 9 PM" },
      fitness: { gyms: 15, parks: 8, yogaStudios: 20, outdoorActivities: ["Trekking", "River rafting", "Rock climbing"] },
      culture: {
        languages: ["Nepali", "English", "Hindi", "Lepcha", "Bhutia"],
        festivals: ["Losar", "Saga Dawa", "Bhumchu", "Dasain"],
        customs: ["Buddhist traditions", "Respect for nature"],
        artScene: false
      },
      cannabisLaws: "Illegal - strict penalties",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: mcleodganjCity.id,
      foodScene: {
        specialties: ["Tibetan Momos", "Thukpa", "Tibetan Bread", "Butter Tea"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      nightlife: { bars: false, clubs: false, lateNightEating: false, alcoholLaws: "Limited - spiritual town" },
      fitness: { gyms: 3, parks: 5, yogaStudios: 25, outdoorActivities: ["Trekking", "Meditation", "Yoga retreats"] },
      culture: {
        languages: ["English", "Hindi", "Tibetan", "Kangri"],
        festivals: ["Losar", "Buddha Purnima", "Dalai Lama Birthday"],
        customs: ["Buddhist meditation", "Respect for Dalai Lama"],
        artScene: true
      },
      cannabisLaws: "Illegal - spiritual discourages use",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: shillongCity.id,
      foodScene: {
        specialties: ["Jadoh", "Tungrymbai", "Pumaloi", "Dohneiiong", "Pukhlein"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      nightlife: { bars: true, clubs: true, lateNightEating: true, alcoholLaws: "Available - vibrant music scene" },
      fitness: { gyms: 25, parks: 15, yogaStudios: 12, outdoorActivities: ["Trekking", "Rock climbing", "Music festivals"] },
      culture: {
        languages: ["Khasi", "English", "Hindi", "Garo"],
        festivals: ["Shad Suk Mynsiem", "Nongkrem Festival", "Behdeinkhlam"],
        customs: ["Music appreciation", "Matrilineal society"],
        artScene: true
      },
      cannabisLaws: "Illegal but traditionally grown",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneCity.id,
      foodScene: {
        specialties: ["Misal Pav", "Vada Pav", "Puran Poli", "Bhel Puri", "Pav Bhaji"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      nightlife: { bars: true, clubs: true, lateNightEating: true, alcoholLaws: "Available - student city nightlife" },
      fitness: { gyms: 200, parks: 50, yogaStudios: 80, outdoorActivities: ["Trekking", "Cycling", "Rock climbing", "Adventure sports"] },
      culture: {
        languages: ["Marathi", "Hindi", "English"],
        festivals: ["Ganesh Chaturthi", "Navratri", "Gudi Padwa", "Pune Festival"],
        customs: ["Educational excellence", "Cultural programs", "Theater appreciation"],
        artScene: true
      },
      cannabisLaws: "Illegal - strict enforcement",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(),
      cityId: udaipurCity.id,
      foodScene: {
        specialties: ["Dal Baati Churma", "Laal Maas", "Gatte ki Sabzi", "Ker Sangri", "Rajasthani Thali"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      nightlife: { bars: true, clubs: false, lateNightEating: true, alcoholLaws: "Available - tourist-friendly" },
      fitness: { gyms: 35, parks: 20, yogaStudios: 15, outdoorActivities: ["Lake activities", "Heritage walks", "Photography", "Cycling"] },
      culture: {
        languages: ["Hindi", "Rajasthani", "English"],
        festivals: ["Mewar Festival", "Shilpgram Festival", "Hariyali Amavasya", "World Music Festival"],
        customs: ["Royal heritage", "Mewar traditions", "Lake worship"],
        artScene: true
      },
      cannabisLaws: "Illegal - tourist areas monitored",
      updatedAt: new Date(),
    });

    // Add comprehensive cost of living data
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: puneCity.id,
      monthlyBudgetINR: 33500,
      monthlyBudgetUSD: 402,
      studioRentINR: 18000,
      oneBhkRentINR: 22000,
      twoBhkRentINR: 35000,
      utilitiesINR: 2500,
      groceriesINR: 8000,
      eatingOutINR: 5000,
      coworkingINR: 7200,
      transportINR: 3000,
      simDataINR: 450,
      gymINR: 1800,
      coffeeINR: 120,
      accommodationINR: 18000,
      foodINR: 8000,
      entertainmentINR: 4000,
      updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(),
      cityId: udaipurCity.id,
      monthlyBudgetINR: 28500,
      monthlyBudgetUSD: 342,
      studioRentINR: 15000,
      oneBhkRentINR: 18000,
      twoBhkRentINR: 28000,
      utilitiesINR: 2000,
      groceriesINR: 6000,
      eatingOutINR: 4000,
      coworkingINR: 4200,
      transportINR: 2500,
      simDataINR: 450,
      gymINR: 1500,
      coffeeINR: 100,
      accommodationINR: 15000,
      foodINR: 6000,
      entertainmentINR: 3500,
      updatedAt: new Date(),
    });

    // Add attractions for all cities
    const gangtokAttr1 = randomUUID();
    this.attractions.set(gangtokAttr1, {
      id: gangtokAttr1, cityId: gangtokCity.id, name: "MG Marg",
      description: "Pedestrian-only street with shops and cafes", category: "Cultural",
      priceRange: "Free", address: "Mahatma Gandhi Road, Gangtok", timings: "24 hours",
      isHiddenGem: false, rating: "4.4", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      createdAt: new Date(),
    });

    const puneAttr1 = randomUUID();
    this.attractions.set(puneAttr1, {
      id: puneAttr1, cityId: puneCity.id, name: "Shaniwar Wada",
      description: "Historic fortified palace of the Peshwas", category: "Historical",
      priceRange: "₹25", address: "Shaniwar Peth, Pune", timings: "8:00 AM - 6:30 PM",
      isHiddenGem: false, rating: "4.2", image: "https://images.unsplash.com/photo-1582050542926-2b8b5c7c7900",
      createdAt: new Date(),
    });

    const udaipurAttr1 = randomUUID();
    this.attractions.set(udaipurAttr1, {
      id: udaipurAttr1, cityId: udaipurCity.id, name: "City Palace Complex",
      description: "Magnificent royal palace with lake views", category: "Historical",
      priceRange: "₹300", address: "City Palace Road, Udaipur", timings: "9:30 AM - 5:30 PM",
      isHiddenGem: false, rating: "4.6", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      createdAt: new Date(),
    });

    // Add events for all cities
    const gangtokEvent1 = randomUUID();
    this.events.set(gangtokEvent1, {
      id: gangtokEvent1, cityId: gangtokCity.id, title: "Losar Festival",
      description: "Tibetan New Year with traditional celebrations", date: new Date("2025-02-10"),
      venue: "Monasteries, Gangtok", category: "Cultural", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });

    const puneEvent1 = randomUUID();
    this.events.set(puneEvent1, {
      id: puneEvent1, cityId: puneCity.id, title: "Pune Festival",
      description: "Cultural celebration with music and dance", date: new Date("2024-09-15"),
      venue: "Multiple venues, Pune", category: "Cultural", isPaid: true, price: 200, url: "https://punefestival.com/",
      createdAt: new Date(),
    });

    const udaipurEvent1 = randomUUID();
    this.events.set(udaipurEvent1, {
      id: udaipurEvent1, cityId: udaipurCity.id, title: "World Music Festival",
      description: "International music festival at heritage venues", date: new Date("2025-02-14"),
      venue: "Udaipur Palace", category: "Music", isPaid: true, price: 2000, url: "https://worldmusic.udaipur.com/",
      createdAt: new Date(),
    });

    // Add the 7 new cities that were missing from the API
    // Tosh
    const toshId = randomUUID();
    this.cities.set(toshId, {
      id: toshId,
      name: "Tosh",
      state: "Himachal Pradesh",
      slug: "tosh",
      description: "Remote Himalayan village offering the ultimate digital nomad retreat with stunning mountain views, affordable living, and surprisingly good internet connectivity.",
      heroImage: "https://images.unsplash.com/photo-1573465679176-c3a87941baa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VE9TSHxlbnwwfHwwfHx8MA%3D%3D",
      latitude: "32.0543",
      longitude: "77.3493",
      population: 800,
      rating: "8.9",
      isPopular: false,
      tags: ["himalayan", "remote", "budget-friendly", "mountain-views", "peaceful"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Rishikesh
    const rishikeshId = randomUUID();
    this.cities.set(rishikeshId, {
      id: rishikeshId,
      name: "Rishikesh",
      state: "Uttarakhand",
      slug: "rishikesh",
      description: "Yoga capital of the world with growing digital nomad infrastructure, offering spiritual atmosphere, riverside cafes, and excellent coworking spaces.",
      heroImage: "https://images.unsplash.com/photo-1713340546638-5e30e2b7b1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UklTSElLRVNIfGVufDB8fDB8fHww",
      latitude: "30.0869",
      longitude: "78.2676",
      population: 75000,
      rating: "8.7",
      isPopular: true,
      tags: ["yoga", "spiritual", "riverside", "adventure", "wellness"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Pondicherry
    const pondicherryId = randomUUID();
    this.cities.set(pondicherryId, {
      id: pondicherryId,
      name: "Pondicherry",
      state: "Puducherry",
      slug: "pondicherry",
      description: "French colonial charm meets digital nomad lifestyle with heritage cafes, coastal vibes, and affordable living in India's most European city.",
      heroImage: "https://images.unsplash.com/photo-1597073642928-48c0971f7ded?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UE9ORElDSEVSUll8ZW58MHx8MHx8fDA%3D",
      latitude: "11.9416",
      longitude: "79.8083",
      population: 950000,
      rating: "8.4",
      isPopular: true,
      tags: ["french-colonial", "coastal", "heritage", "cafes", "european"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Kochi
    const kochiId = randomUUID();
    this.cities.set(kochiId, {
      id: kochiId,
      name: "Kochi",
      state: "Kerala",
      slug: "kochi",
      description: "Kerala's commercial hub combining historic Fort Kochi charm with modern coworking spaces, offering digital nomads authentic South Indian culture at budget prices.",
      heroImage: "https://images.unsplash.com/photo-1590123732197-e7079d2ceb89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S09DSEl8ZW58MHx8MHx8fDA%3D",
      latitude: "9.9312",
      longitude: "76.2673",
      population: 677000,
      rating: "8.3",
      isPopular: true,
      tags: ["backwaters", "spices", "historic", "port-city", "kerala-culture"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Wayanad
    const wayanadId = randomUUID();
    this.cities.set(wayanadId, {
      id: wayanadId,
      name: "Wayanad",
      state: "Kerala",
      slug: "wayanad",
      description: "Mountain retreat in Kerala's Western Ghats offering tea plantations, wildlife, and peaceful work environments for nature-loving digital nomads.",
      heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      latitude: "11.6854",
      longitude: "76.1320",
      population: 817000,
      rating: "8.6",
      isPopular: false,
      tags: ["tea-plantations", "wildlife", "western-ghats", "nature", "mountain-retreat"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Dharamkot
    const dharamkotId = randomUUID();
    this.cities.set(dharamkotId, {
      id: dharamkotId,
      name: "Dharamkot",
      state: "Himachal Pradesh",
      slug: "dharamkot",
      description: "Himalayan village above McLeod Ganj offering established digital nomad community, excellent internet, and stunning mountain views with Tibetan culture.",
      heroImage: "https://images.unsplash.com/photo-1641886915898-dd6cd6c4aaf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8REhBUkFNS09UfGVufDB8fDB8fHww",
      latitude: "32.2432",
      longitude: "76.3222",
      population: 2500,
      rating: "8.8",
      isPopular: true,
      tags: ["digital-nomads", "tibetan-culture", "mountain-views", "community", "himalayan"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Darjeeling
    const darjeelingId = randomUUID();
    this.cities.set(darjeelingId, {
      id: darjeelingId,
      name: "Darjeeling",
      state: "West Bengal",
      slug: "darjeeling",
      description: "Famous hill station with tea gardens, colonial architecture, and Himalayan views, emerging as a peaceful digital nomad destination with improving connectivity.",
      heroImage: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8REFSSkVFTElOR3xlbnwwfHwwfHx8MA%3D%3D",
      latitude: "27.0360",
      longitude: "88.2627",
      population: 120000,
      rating: "8.5",
      isPopular: true,
      tags: ["tea-gardens", "colonial", "toy-train", "himalayan-views", "hill-station"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Add cost of living data for the new cities
    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(), cityId: toshId, monthlyBudgetINR: 18000, monthlyBudgetUSD: 216,
      studioRentINR: 8000, oneBhkRentINR: 12000, twoBhkRentINR: 18000, utilitiesINR: 1500,
      groceriesINR: 4000, eatingOutINR: 2500, coworkingINR: 2000, transportINR: 800,
      simDataINR: 400, gymINR: 0, coffeeINR: 80, entertainmentINR: 1500, updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(), cityId: rishikeshId, monthlyBudgetINR: 25000, monthlyBudgetUSD: 300,
      studioRentINR: 10000, oneBhkRentINR: 15000, twoBhkRentINR: 22000, utilitiesINR: 1800,
      groceriesINR: 5000, eatingOutINR: 3500, coworkingINR: 3500, transportINR: 1200,
      simDataINR: 400, gymINR: 1000, coffeeINR: 120, entertainmentINR: 2000, updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(), cityId: pondicherryId, monthlyBudgetINR: 28000, monthlyBudgetUSD: 336,
      studioRentINR: 12000, oneBhkRentINR: 18000, twoBhkRentINR: 25000, utilitiesINR: 2000,
      groceriesINR: 5500, eatingOutINR: 4000, coworkingINR: 4000, transportINR: 1500,
      simDataINR: 400, gymINR: 1200, coffeeINR: 150, entertainmentINR: 2500, updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(), cityId: kochiId, monthlyBudgetINR: 30000, monthlyBudgetUSD: 360,
      studioRentINR: 13000, oneBhkRentINR: 20000, twoBhkRentINR: 28000, utilitiesINR: 2200,
      groceriesINR: 6000, eatingOutINR: 4500, coworkingINR: 4500, transportINR: 1800,
      simDataINR: 400, gymINR: 1500, coffeeINR: 130, entertainmentINR: 2800, updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(), cityId: wayanadId, monthlyBudgetINR: 22000, monthlyBudgetUSD: 264,
      studioRentINR: 9000, oneBhkRentINR: 14000, twoBhkRentINR: 20000, utilitiesINR: 1600,
      groceriesINR: 4500, eatingOutINR: 3000, coworkingINR: 2500, transportINR: 1000,
      simDataINR: 400, gymINR: 800, coffeeINR: 100, entertainmentINR: 1800, updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(), cityId: dharamkotId, monthlyBudgetINR: 20000, monthlyBudgetUSD: 240,
      studioRentINR: 8500, oneBhkRentINR: 13000, twoBhkRentINR: 19000, utilitiesINR: 1400,
      groceriesINR: 4200, eatingOutINR: 2800, coworkingINR: 2500, transportINR: 900,
      simDataINR: 400, gymINR: 0, coffeeINR: 90, entertainmentINR: 1600, updatedAt: new Date(),
    });

    this.costsOfLiving.set(randomUUID(), {
      id: randomUUID(), cityId: darjeelingId, monthlyBudgetINR: 24000, monthlyBudgetUSD: 288,
      studioRentINR: 10000, oneBhkRentINR: 15000, twoBhkRentINR: 22000, utilitiesINR: 1700,
      groceriesINR: 4800, eatingOutINR: 3200, coworkingINR: 3000, transportINR: 1100,
      simDataINR: 400, gymINR: 1000, coffeeINR: 110, entertainmentINR: 1900, updatedAt: new Date(),
    });

    // Add Internet Connectivity for all 7 cities
    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(), cityId: toshId, avgSpeedMbps: 15,
      coworkingSpaces: [{
        name: "Mountain View Workspace", address: "Tosh Village Center", pricing: "₹2,000/month",
        speedMbps: 20, amenities: ["Valley Views", "Quiet Space", "Solar Power", "Outdoor Deck"]
      }],
      simProviders: [{
        provider: "Jio", plans: [{ data: "1.5GB/day", validity: "28 days", price: 399 }]
      }],
      wifiAvailability: "Limited - Available in cafes and guesthouses",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(), cityId: rishikeshId, avgSpeedMbps: 45,
      coworkingSpaces: [{
        name: "Ganga Coworking", address: "Ram Jhula Area", pricing: "₹3,500/month",
        speedMbps: 60, amenities: ["River Views", "Yoga Classes", "Meditation Room", "Cafe"]
      }, {
        name: "Yoga Valley Workspace", address: "Tapovan", pricing: "₹4,000/month",
        speedMbps: 50, amenities: ["Spiritual Atmosphere", "24/7 Access", "Organic Cafe"]
      }],
      simProviders: [{
        provider: "Jio", plans: [{ data: "2GB/day", validity: "28 days", price: 599 }]
      }],
      wifiAvailability: "Good - Available in most cafes and accommodations",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(), cityId: pondicherryId, avgSpeedMbps: 40,
      coworkingSpaces: [{
        name: "French Quarter Coworking", address: "White Town", pricing: "₹4,000/month",
        speedMbps: 55, amenities: ["Colonial Heritage", "Cafe", "Courtyard", "Art Gallery"]
      }, {
        name: "Auroville Community Workspace", address: "Auroville", pricing: "₹3,500/month",
        speedMbps: 45, amenities: ["International Community", "Eco-friendly", "Library"]
      }],
      simProviders: [{
        provider: "Airtel", plans: [{ data: "2GB/day", validity: "28 days", price: 599 }]
      }],
      wifiAvailability: "Excellent - Available in most cafes and public spaces",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(), cityId: kochiId, avgSpeedMbps: 50,
      coworkingSpaces: [{
        name: "Fort Kochi Workspace", address: "Fort Kochi", pricing: "₹4,500/month",
        speedMbps: 70, amenities: ["Historic Location", "Harbor Views", "Spice Cafe", "Events"]
      }, {
        name: "Kerala Digital Hub", address: "Marine Drive", pricing: "₹5,000/month",
        speedMbps: 80, amenities: ["Waterfront Views", "Modern Facilities", "Networking Events"]
      }],
      simProviders: [{
        provider: "Jio", plans: [{ data: "2GB/day", validity: "28 days", price: 599 }]
      }],
      wifiAvailability: "Excellent - Strong coverage in urban areas",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(), cityId: wayanadId, avgSpeedMbps: 25,
      coworkingSpaces: [{
        name: "Tea Plantation Workspace", address: "Meppadi", pricing: "₹2,500/month",
        speedMbps: 30, amenities: ["Plantation Views", "Nature Setting", "Organic Food", "Wildlife"]
      }],
      simProviders: [{
        provider: "Jio", plans: [{ data: "1.5GB/day", validity: "28 days", price: 399 }]
      }],
      wifiAvailability: "Moderate - Available in resorts and cafes",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(), cityId: dharamkotId, avgSpeedMbps: 35,
      coworkingSpaces: [{
        name: "Himalayan Digital Nomads", address: "Dharamkot Village", pricing: "₹3,000/month",
        speedMbps: 45, amenities: ["Mountain Views", "Community Events", "Cafe", "Meditation Space"]
      }, {
        name: "Tibetan Culture Workspace", address: "Upper Dharamkot", pricing: "₹2,800/month",
        speedMbps: 40, amenities: ["Tibetan Community", "Prayer Flags", "Quiet Environment"]
      }],
      simProviders: [{
        provider: "Jio", plans: [{ data: "1.5GB/day", validity: "28 days", price: 399 }]
      }],
      wifiAvailability: "Good - Strong nomad community with WiFi sharing",
      updatedAt: new Date(),
    });

    this.internetConnectivity.set(randomUUID(), {
      id: randomUUID(), cityId: darjeelingId, avgSpeedMbps: 30,
      coworkingSpaces: [{
        name: "Tea Garden Workspace", address: "Mall Road", pricing: "₹3,000/month",
        speedMbps: 40, amenities: ["Tea Garden Views", "Colonial Architecture", "Quiet Space"]
      }],
      simProviders: [{
        provider: "Jio", plans: [{ data: "1.5GB/day", validity: "28 days", price: 399 }]
      }],
      wifiAvailability: "Good - Available in hotels and main tourist areas",
      updatedAt: new Date(),
    });

    // Add sample attractions for key cities
    const toshAttr1 = randomUUID();
    this.attractions.set(toshAttr1, {
      id: toshAttr1, cityId: toshId, name: "Parvati Valley Trek",
      description: "Scenic trek through pristine Himalayan valley", category: "Adventure",
      priceRange: "Free", address: "Tosh Village", timings: "Sunrise to sunset",
      isHiddenGem: true, rating: "4.8", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      createdAt: new Date(),
    });

    const rishikeshAttr1 = randomUUID();
    this.attractions.set(rishikeshAttr1, {
      id: rishikeshAttr1, cityId: rishikeshId, name: "Ram Jhula",
      description: "Iconic suspension bridge over Ganges river", category: "Spiritual",
      priceRange: "Free", address: "Ram Jhula, Rishikesh", timings: "24 hours",
      isHiddenGem: false, rating: "4.5", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      createdAt: new Date(),
    });

    const pondicherryAttr1 = randomUUID();
    this.attractions.set(pondicherryAttr1, {
      id: pondicherryAttr1, cityId: pondicherryId, name: "French Quarter",
      description: "Colonial architecture with heritage cafes", category: "Cultural",
      priceRange: "Free", address: "White Town, Pondicherry", timings: "24 hours",
      isHiddenGem: false, rating: "4.6", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      createdAt: new Date(),
    });

    const kochiAttr1 = randomUUID();
    this.attractions.set(kochiAttr1, {
      id: kochiAttr1, cityId: kochiId, name: "Chinese Fishing Nets",
      description: "Traditional fishing nets at Fort Kochi beach", category: "Cultural",
      priceRange: "Free", address: "Fort Kochi Beach", timings: "Sunrise to sunset",
      isHiddenGem: false, rating: "4.4", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
      createdAt: new Date(),
    });

    const wayanadAttr1 = randomUUID();
    this.attractions.set(wayanadAttr1, {
      id: wayanadAttr1, cityId: wayanadId, name: "Tea Plantations",
      description: "Rolling hills covered with tea gardens", category: "Nature",
      priceRange: "₹50", address: "Meppadi, Wayanad", timings: "9:00 AM - 5:00 PM",
      isHiddenGem: false, rating: "4.7", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
      createdAt: new Date(),
    });

    const dharamkotAttr1 = randomUUID();
    this.attractions.set(dharamkotAttr1, {
      id: dharamkotAttr1, cityId: dharamkotId, name: "Triund Trek Base",
      description: "Starting point for popular Himalayan trek", category: "Adventure",
      priceRange: "Free", address: "Upper Dharamkot", timings: "Early morning start",
      isHiddenGem: true, rating: "4.8", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      createdAt: new Date(),
    });

    const darjeelingAttr1 = randomUUID();
    this.attractions.set(darjeelingAttr1, {
      id: darjeelingAttr1, cityId: darjeelingId, name: "Tiger Hill Sunrise",
      description: "Spectacular sunrise views over Kanchenjunga", category: "Nature",
      priceRange: "₹30", address: "Tiger Hill, Darjeeling", timings: "4:30 AM - 6:30 AM",
      isHiddenGem: false, rating: "4.9", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      createdAt: new Date(),
    });

    // Add sample events for key cities
    const rishikeshEvent1 = randomUUID();
    this.events.set(rishikeshEvent1, {
      id: rishikeshEvent1, cityId: rishikeshId, title: "International Yoga Festival",
      description: "Week-long yoga and spiritual celebration", date: new Date("2025-03-01"),
      venue: "Parmarth Niketan, Rishikesh", category: "Spiritual", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });

    const pondicherryEvent1 = randomUUID();
    this.events.set(pondicherryEvent1, {
      id: pondicherryEvent1, cityId: pondicherryId, title: "Auroville Foundation Day",
      description: "Celebrating the experimental township", date: new Date("2025-02-28"),
      venue: "Auroville", category: "Cultural", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });

    const dharamkotEvent1 = randomUUID();
    this.events.set(dharamkotEvent1, {
      id: dharamkotEvent1, cityId: dharamkotId, title: "Digital Nomad Meetup",
      description: "Monthly community gathering for remote workers", date: new Date("2024-12-15"),
      venue: "Community Center, Dharamkot", category: "Networking", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });

    // Add comprehensive Transportation data for all 7 cities
    this.transportation.set(randomUUID(), {
      id: randomUUID(), cityId: toshId,
      localTransport: { metro: false, bus: false, autoRickshaw: false, taxi: false, bike: false },
      walkabilityScore: 10, rideHailing: [], 
      airports: [{ name: "Bhuntar Airport", code: "KUL", distance: "31km" }],
      trainStations: [{ name: "Pathankot", type: "Nearest Major (200km)" }],
      intercityConnectivity: "Very Limited - mainly via Kasol and Bhuntar",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(), cityId: rishikeshId,
      localTransport: { metro: false, bus: true, autoRickshaw: true, taxi: true, bike: true },
      walkabilityScore: 8, rideHailing: ["Ola", "Uber"],
      airports: [{ name: "Jolly Grant Airport", code: "DED", distance: "18km" }],
      trainStations: [{ name: "Rishikesh Railway Station", type: "Local" }, { name: "Haridwar Junction", type: "Major (25km)" }],
      intercityConnectivity: "Excellent - well connected to Delhi and major cities",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(), cityId: pondicherryId,
      localTransport: { metro: false, bus: true, autoRickshaw: true, taxi: true, bike: true },
      walkabilityScore: 9, rideHailing: ["Ola", "Uber"],
      airports: [{ name: "Chennai Airport", code: "MAA", distance: "135km" }],
      trainStations: [{ name: "Pondicherry Railway Station", type: "Local" }],
      intercityConnectivity: "Good - connected to Chennai and major South Indian cities",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(), cityId: kochiId,
      localTransport: { metro: true, bus: true, autoRickshaw: true, taxi: true, bike: true },
      walkabilityScore: 7, rideHailing: ["Ola", "Uber"],
      airports: [{ name: "Cochin International Airport", code: "COK", distance: "27km" }],
      trainStations: [{ name: "Ernakulam Junction", type: "Major" }],
      intercityConnectivity: "Excellent - major transport hub of Kerala",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(), cityId: wayanadId,
      localTransport: { metro: false, bus: true, autoRickshaw: false, taxi: true, bike: true },
      walkabilityScore: 6, rideHailing: ["Ola"],
      airports: [{ name: "Calicut Airport", code: "CCJ", distance: "65km" }],
      trainStations: [{ name: "Kozhikode", type: "Nearest Major (100km)" }],
      intercityConnectivity: "Moderate - connected via Kozhikode and Mysore",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(), cityId: dharamkotId,
      localTransport: { metro: false, bus: true, autoRickshaw: false, taxi: true, bike: false },
      walkabilityScore: 9, rideHailing: [],
      airports: [{ name: "Kangra Airport", code: "DHM", distance: "22km" }],
      trainStations: [{ name: "Pathankot", type: "Nearest Major (90km)" }],
      intercityConnectivity: "Limited - via McLeod Ganj and Pathankot",
      updatedAt: new Date(),
    });

    this.transportation.set(randomUUID(), {
      id: randomUUID(), cityId: darjeelingId,
      localTransport: { metro: false, bus: true, autoRickshaw: false, taxi: true, bike: false },
      walkabilityScore: 8, rideHailing: ["Ola"],
      airports: [{ name: "Bagdogra Airport", code: "IXB", distance: "90km" }],
      trainStations: [{ name: "New Jalpaiguri", type: "Major (88km)" }, { name: "Darjeeling Himalayan Railway", type: "Toy Train" }],
      intercityConnectivity: "Good - connected via Siliguri and NJP",
      updatedAt: new Date(),
    });

    // Add comprehensive Safety data for all 7 cities  
    this.safety.set(randomUUID(), {
      id: randomUUID(), cityId: toshId, safetyScore: "9.5", womenSafetyScore: "9.2",
      crimeRate: "Very Low - extremely safe small mountain village",
      hospitals: [{ name: "Kasol Health Center", address: "Kasol, 4km", type: "Primary", emergency: false }],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 25, updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(), cityId: rishikeshId, safetyScore: "8.5", womenSafetyScore: "8.0",
      crimeRate: "Low - spiritual town with good police presence",
      hospitals: [
        { name: "All India Institute of Medical Sciences", address: "AIIMS Rishikesh", type: "Super Specialty", emergency: true },
        { name: "Himalayan Hospital", address: "Jolly Grant", type: "Multi-specialty", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 85, updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(), cityId: pondicherryId, safetyScore: "8.2", womenSafetyScore: "7.8",
      crimeRate: "Low - peaceful union territory with good law enforcement",
      hospitals: [
        { name: "JIPMER", address: "Dhanvantari Nagar", type: "Government Medical College", emergency: true },
        { name: "Sri Manakula Vinayagar Medical College", address: "Madagadipet", type: "Private Medical College", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 78, updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(), cityId: kochiId, safetyScore: "8.0", womenSafetyScore: "7.5",
      crimeRate: "Moderate - generally safe with typical urban precautions needed",
      hospitals: [
        { name: "Amrita Institute of Medical Sciences", address: "Kochi", type: "Super Specialty", emergency: true },
        { name: "Medical Trust Hospital", address: "MG Road", type: "Multi-specialty", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 92, updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(), cityId: wayanadId, safetyScore: "9.0", womenSafetyScore: "8.8",
      crimeRate: "Very Low - peaceful hill district with minimal crime",
      hospitals: [
        { name: "District Hospital Kalpetta", address: "Kalpetta", type: "Government", emergency: true },
        { name: "Baby Memorial Hospital", address: "Kalpetta", type: "Private", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 35, updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(), cityId: dharamkotId, safetyScore: "9.2", womenSafetyScore: "9.0",
      crimeRate: "Very Low - safe spiritual community with strong social bonds",
      hospitals: [
        { name: "Delek Hospital", address: "McLeod Ganj (2km)", type: "Tibetan Medical", emergency: true },
        { name: "Civil Hospital Dharamshala", address: "Dharamshala (6km)", type: "Government", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 30, updatedAt: new Date(),
    });

    this.safety.set(randomUUID(), {
      id: randomUUID(), cityId: darjeelingId, safetyScore: "8.8", womenSafetyScore: "8.5",
      crimeRate: "Low - safe hill station with good tourist police",
      hospitals: [
        { name: "Darjeeling District Hospital", address: "Lebong Cart Road", type: "Government", emergency: true },
        { name: "Planters Hospital", address: "Darjeeling", type: "Private", emergency: true }
      ],
      emergencyNumbers: { police: "100", medical: "108", fire: "101" },
      pollutionIndex: 65, updatedAt: new Date(),
    });

    // Add comprehensive Lifestyle data for all 7 cities
    this.lifestyle.set(randomUUID(), {
      id: randomUUID(), cityId: toshId,
      foodScene: {
        specialties: ["Israeli Cuisine", "Maggi", "Parathas", "Local Himachali Dham", "Organic Vegetables"],
        vegFriendly: true, streetFood: false, internationalCuisine: true
      },
      nightlife: { bars: false, clubs: false, lateNightEating: false, alcoholLaws: "Limited availability" },
      fitness: { gyms: 0, parks: 0, yogaStudios: 2, outdoorActivities: ["Trekking", "Rock climbing", "Nature walks", "Photography"] },
      culture: {
        languages: ["English", "Hindi", "Hebrew", "Himachali"], 
        festivals: ["Diwali", "Holi", "Local Village Festivals"],
        customs: ["Respect for local customs", "Leave no trace principles", "Community living"],
        artScene: false
      },
      cannabisLaws: "Illegal but socially tolerated - use discretion and respect local customs",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(), cityId: rishikeshId,
      foodScene: {
        specialties: ["Sattvic Vegetarian Food", "Ayurvedic Meals", "Ganga Aarti Prasad", "Chole Bhature", "Aloo Puri"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      nightlife: { bars: false, clubs: false, lateNightEating: false, alcoholLaws: "Alcohol banned - holy city" },
      fitness: { gyms: 15, parks: 8, yogaStudios: 150, outdoorActivities: ["Yoga", "Meditation", "River rafting", "Trekking", "Bungee jumping"] },
      culture: {
        languages: ["Hindi", "English", "Sanskrit"],
        festivals: ["Ganga Aarti", "International Yoga Festival", "Mahashivratri", "Ganga Dussehra"],
        customs: ["No alcohol/drugs", "Vegetarian lifestyle", "Spiritual practices", "River reverence"],
        artScene: true
      },
      cannabisLaws: "Strictly illegal - zero tolerance in holy city",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(), cityId: pondicherryId,
      foodScene: {
        specialties: ["French Pastries", "Crepes", "Tamil Cuisine", "Seafood", "French-Tamil Fusion", "Filter Coffee"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      nightlife: { bars: true, clubs: false, lateNightEating: true, alcoholLaws: "Available - more liberal than other Indian states" },
      fitness: { gyms: 25, parks: 12, yogaStudios: 30, outdoorActivities: ["Beach activities", "Cycling", "Auroville exploration", "Scuba diving"] },
      culture: {
        languages: ["Tamil", "French", "English", "Hindi"],
        festivals: ["Bastille Day", "Diwali", "Pongal", "Auroville Foundation Day"],
        customs: ["French colonial heritage", "Auroville spirituality", "Beach culture"],
        artScene: true
      },
      cannabisLaws: "Illegal but penalties less strict than other Indian states",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(), cityId: kochiId,
      foodScene: {
        specialties: ["Kerala Sadhya", "Fish Curry", "Appam", "Puttu", "Spice-infused Dishes", "Coconut-based Curries"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      nightlife: { bars: true, clubs: true, lateNightEating: true, alcoholLaws: "Available with restrictions - bars close at 11 PM" },
      fitness: { gyms: 40, parks: 15, yogaStudios: 25, outdoorActivities: ["Backwater cruises", "Spice plantation tours", "Kathakali performances", "Fort walking"] },
      culture: {
        languages: ["Malayalam", "English", "Tamil", "Hindi"],
        festivals: ["Onam", "Cochin Carnival", "Ernakulathappan Festival", "Biennale"],
        customs: ["Spice trade heritage", "Marine culture", "Artistic traditions"],
        artScene: true
      },
      cannabisLaws: "Illegal - strict enforcement, avoid completely",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(), cityId: wayanadId,
      foodScene: {
        specialties: ["Bamboo Rice", "Wild Honey", "Spiced Tea", "Tribal Cuisine", "Organic Produce", "Forest Mushrooms"],
        vegFriendly: true, streetFood: false, internationalCuisine: false
      },
      nightlife: { bars: false, clubs: false, lateNightEating: false, alcoholLaws: "Limited availability in resorts" },
      fitness: { gyms: 5, parks: 20, yogaStudios: 8, outdoorActivities: ["Wildlife safaris", "Tea plantation tours", "Trekking", "Bird watching", "Nature photography"] },
      culture: {
        languages: ["Malayalam", "English", "Tamil"],
        festivals: ["Onam", "Tribal Festivals", "Harvest Festivals"],
        customs: ["Tribal heritage", "Eco-tourism", "Wildlife conservation"],
        artScene: false
      },
      cannabisLaws: "Illegal - rural area with strict enforcement",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(), cityId: dharamkotId,
      foodScene: {
        specialties: ["Tibetan Momos", "Thukpa", "Israeli Cuisine", "Tibetan Bread", "Butter Tea", "International Backpacker Food"],
        vegFriendly: true, streetFood: true, internationalCuisine: true
      },
      nightlife: { bars: false, clubs: false, lateNightEating: false, alcoholLaws: "Limited - spiritual atmosphere discourages alcohol" },
      fitness: { gyms: 2, parks: 5, yogaStudios: 20, outdoorActivities: ["Trekking", "Meditation", "Yoga retreats", "Mountain biking"] },
      culture: {
        languages: ["English", "Hindi", "Tibetan", "Hebrew"],
        festivals: ["Losar", "Buddha Purnima", "Dalai Lama Birthday", "Digital Nomad Meetups"],
        customs: ["Tibetan Buddhist culture", "Digital nomad community", "Environmental consciousness"],
        artScene: true
      },
      cannabisLaws: "Socially tolerated but technically illegal - respect community values",
      updatedAt: new Date(),
    });

    this.lifestyle.set(randomUUID(), {
      id: randomUUID(), cityId: darjeelingId,
      foodScene: {
        specialties: ["Darjeeling Tea", "Momos", "Thukpa", "Churpee", "Himalayan Trout", "Tibetan Bread"],
        vegFriendly: true, streetFood: true, internationalCuisine: false
      },
      nightlife: { bars: true, clubs: false, lateNightEating: false, alcoholLaws: "Available - bars close early due to cold weather" },
      fitness: { gyms: 8, parks: 6, yogaStudios: 12, outdoorActivities: ["Tea garden walks", "Toy train rides", "Himalayan trekking", "Sunrise viewing"] },
      culture: {
        languages: ["Nepali", "English", "Hindi", "Bengali"],
        festivals: ["Dasain", "Tihar", "Buddha Jayanti", "Tea Festival"],
        customs: ["Tea culture", "Himalayan traditions", "Colonial heritage"],
        artScene: false
      },
      cannabisLaws: "Illegal - hill station with tourist police presence",
      updatedAt: new Date(),
    });

    // Add comprehensive Climate data for all 7 cities
    this.climate.set(randomUUID(), {
      id: randomUUID(), cityId: toshId, avgTempCelsius: 8, avgHumidity: 65,
      rainyMonths: ["July", "August", "September"], bestTimeToVisit: "April to June, September to November",
      climateType: "Cold mountain desert - harsh winters, mild summers",
      currentWeather: { temperature: 5, humidity: 70, description: "Cool mountain air with snow-capped peaks", icon: "snow" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(), cityId: rishikeshId, avgTempCelsius: 18, avgHumidity: 72,
      rainyMonths: ["July", "August", "September"], bestTimeToVisit: "February to April, October to December",
      climateType: "Subtropical highland - hot summers, cool winters",
      currentWeather: { temperature: 16, humidity: 75, description: "Pleasant riverside climate with Ganges breeze", icon: "partly-cloudy" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(), cityId: pondicherryId, avgTempCelsius: 28, avgHumidity: 78,
      rainyMonths: ["October", "November", "December"], bestTimeToVisit: "December to March",
      climateType: "Tropical - hot summers, pleasant winters",
      currentWeather: { temperature: 26, humidity: 80, description: "Coastal breeze with French colonial charm", icon: "sunny" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(), cityId: kochiId, avgTempCelsius: 27, avgHumidity: 85,
      rainyMonths: ["June", "July", "August", "September"], bestTimeToVisit: "December to March",
      climateType: "Tropical monsoon - humid year-round with heavy monsoons",
      currentWeather: { temperature: 25, humidity: 88, description: "Humid coastal climate with backwater breeze", icon: "rainy" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(), cityId: wayanadId, avgTempCelsius: 20, avgHumidity: 80,
      rainyMonths: ["June", "July", "August", "September"], bestTimeToVisit: "October to May",
      climateType: "Tropical highland - cool temperatures, heavy monsoons",
      currentWeather: { temperature: 18, humidity: 85, description: "Cool mountain climate with tea garden mist", icon: "cloudy" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(), cityId: dharamkotId, avgTempCelsius: 12, avgHumidity: 68,
      rainyMonths: ["July", "August", "September"], bestTimeToVisit: "March to June, September to November",
      climateType: "Mountain subtropical - cold winters, mild summers",
      currentWeather: { temperature: 10, humidity: 72, description: "Clear mountain air with Tibetan prayer flags", icon: "partly-cloudy" },
      updatedAt: new Date(),
    });

    this.climate.set(randomUUID(), {
      id: randomUUID(), cityId: darjeelingId, avgTempCelsius: 14, avgHumidity: 75,
      rainyMonths: ["June", "July", "August", "September"], bestTimeToVisit: "March to May, October to December",
      climateType: "Subtropical highland - cool year-round with distinct seasons",
      currentWeather: { temperature: 12, humidity: 78, description: "Crisp mountain air with tea garden freshness", icon: "cloudy" },
      updatedAt: new Date(),
    });

    // Add comprehensive Events for all 7 cities
    const toshEvent1 = randomUUID();
    this.events.set(toshEvent1, {
      id: toshEvent1, cityId: toshId, title: "Parvati Valley Music Festival",
      description: "Annual music festival celebrating mountain culture with international and local artists", 
      date: new Date("2025-05-15"), venue: "Tosh Village Grounds", category: "Music", isPaid: true, price: 1500, url: null,
      createdAt: new Date(),
    });

    const toshEvent2 = randomUUID();
    this.events.set(toshEvent2, {
      id: toshEvent2, cityId: toshId, title: "Himalayan Trekking Season Opening",
      description: "Traditional ceremony marking the start of safe trekking season with local guides", 
      date: new Date("2025-04-01"), venue: "Village Temple", category: "Cultural", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });

    const rishikeshEvent3 = randomUUID();
    this.events.set(rishikeshEvent3, {
      id: rishikeshEvent3, cityId: rishikeshId, title: "Mahashivratri Festival",
      description: "Major Hindu festival honoring Lord Shiva with night-long prayers and celebrations at temples", 
      date: new Date("2025-02-26"), venue: "Neelkanth Mahadev Temple", category: "Religious", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });

    const pondicherryEvent3 = randomUUID();
    this.events.set(pondicherryEvent3, {
      id: pondicherryEvent3, cityId: pondicherryId, title: "Heritage Festival",
      description: "Franco-Tamil heritage celebration with art exhibitions, historical walks, and cultural fusion events", 
      date: new Date("2025-01-15"), venue: "French Quarter", category: "Heritage", isPaid: true, price: 200, url: null,
      createdAt: new Date(),
    });

    const pondicherryEvent2 = randomUUID();
    this.events.set(pondicherryEvent2, {
      id: pondicherryEvent2, cityId: pondicherryId, title: "Auroville Foundation Day",
      description: "Celebration of international spiritual community with workshops, cultural programs, and meditation", 
      date: new Date("2025-02-28"), venue: "Auroville", category: "Spiritual", isPaid: false, price: null, url: "https://auroville.org",
      createdAt: new Date(),
    });

    const kochiEvent1 = randomUUID();
    this.events.set(kochiEvent1, {
      id: kochiEvent1, cityId: kochiId, title: "Kochi-Muziris Biennale",
      description: "International contemporary art exhibition showcasing global artists in historic venues", 
      date: new Date("2025-12-12"), venue: "Various Historic Venues", category: "Arts", isPaid: true, price: 500, url: "https://kochimuzirisbiennale.org",
      createdAt: new Date(),
    });

    const kochiEvent2 = randomUUID();
    this.events.set(kochiEvent2, {
      id: kochiEvent2, cityId: kochiId, title: "Onam Festival Celebrations",
      description: "Kerala's harvest festival with traditional Sadhya feasts, boat races, and cultural performances", 
      date: new Date("2025-09-10"), venue: "Citywide", category: "Cultural", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });

    const wayanadEvent1 = randomUUID();
    this.events.set(wayanadEvent1, {
      id: wayanadEvent1, cityId: wayanadId, title: "Wildlife Photography Festival",
      description: "Celebration of Western Ghats biodiversity with photography workshops and jungle safaris", 
      date: new Date("2025-11-15"), venue: "Wayanad Wildlife Sanctuary", category: "Nature", isPaid: true, price: 3000, url: null,
      createdAt: new Date(),
    });

    const wayanadEvent2 = randomUUID();
    this.events.set(wayanadEvent2, {
      id: wayanadEvent2, cityId: wayanadId, title: "Tribal Heritage Festival",
      description: "Celebration of indigenous tribal culture with traditional arts, crafts, and authentic performances", 
      date: new Date("2025-01-26"), venue: "Kalpetta Cultural Center", category: "Cultural", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });

    const dharamkotEvent2 = randomUUID();
    this.events.set(dharamkotEvent2, {
      id: dharamkotEvent2, cityId: dharamkotId, title: "Losar Tibetan New Year",
      description: "Traditional Tibetan New Year celebration with monasteries, prayer flags, and cultural performances", 
      date: new Date("2025-02-15"), venue: "McLeod Ganj Monastery", category: "Cultural", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });

    const dharamkotEvent3 = randomUUID();
    this.events.set(dharamkotEvent3, {
      id: dharamkotEvent3, cityId: dharamkotId, title: "Dalai Lama Teaching Sessions",
      description: "Rare opportunity to attend teachings by His Holiness the Dalai Lama on Buddhist philosophy", 
      date: new Date("2025-10-05"), venue: "Main Temple Complex", category: "Spiritual", isPaid: false, price: null, url: "https://dalailama.com",
      createdAt: new Date(),
    });

    const darjeelingEvent1 = randomUUID();
    this.events.set(darjeelingEvent1, {
      id: darjeelingEvent1, cityId: darjeelingId, title: "Darjeeling Tea Festival",
      description: "Annual celebration of world-famous tea with tastings, plantation tours, and tea master workshops", 
      date: new Date("2025-05-20"), venue: "Tea Gardens", category: "Cultural", isPaid: true, price: 800, url: null,
      createdAt: new Date(),
    });

    const darjeelingEvent2 = randomUUID();
    this.events.set(darjeelingEvent2, {
      id: darjeelingEvent2, cityId: darjeelingId, title: "Dasain Festival",
      description: "Major Nepali festival celebration with traditional rituals, family gatherings, and cultural programs", 
      date: new Date("2025-10-15"), venue: "Citywide", category: "Cultural", isPaid: false, price: null, url: null,
      createdAt: new Date(),
    });
  }
}

export const storage = new MemStorage();
