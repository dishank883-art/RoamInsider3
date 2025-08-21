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

    // Add some events
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
      city.tags.some(tag => tag.toLowerCase().includes(searchTerm))
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
      createdAt: new Date(),
    };
    this.attractions.set(id, attraction);
    return attraction;
  }
}

export const storage = new MemStorage();
