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
      heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
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

    // Delhi
    const delhiId = randomUUID();
    this.cities.set(delhiId, {
      id: delhiId,
      name: "Delhi",
      state: "Delhi",
      slug: "delhi",
      description: "India's capital with rich history, amazing food scene, and excellent connectivity to everywhere.",
      heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      latitude: "28.7041",
      longitude: "77.1025",
      population: 29399141,
      rating: "4.6",
      isPopular: true,
      tags: ["History", "Food Capital", "Transport Hub"],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Pune
    const puneId = randomUUID();
    this.cities.set(puneId, {
      id: puneId,
      name: "Pune",
      state: "Maharashtra",
      slug: "pune",
      description: "Educational hub with great climate, affordable living, and growing startup ecosystem.",
      heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
      latitude: "18.5204",
      longitude: "73.8567",
      population: 7276000,
      rating: "4.5",
      isPopular: true,
      tags: ["Education", "Affordable", "IT Hub"],
      createdAt: new Date(),
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
      heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
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
      heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      latitude: "32.0997",
      longitude: "77.3102",
      population: 1200,
      rating: "4.9",
      isPopular: true,
      tags: ["Mountains", "Trekking", "Israeli Culture", "Valley"],
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
      createdAt: new Date(),
    });

    // Add city-specific events
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
      foodINR: insertCost.foodINR ?? null,
      transportINR: insertCost.transportINR ?? null,
      utilitiesINR: insertCost.utilitiesINR ?? null,
      internetINR: insertCost.internetINR ?? null,
      gymMembershipINR: insertCost.gymMembershipINR ?? null,
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
}

export const storage = new MemStorage();
