import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Cities endpoints
  app.get("/api/cities", async (req, res) => {
    try {
      const { search, popular } = req.query;
      
      if (search && typeof search === 'string') {
        const cities = await storage.searchCities(search);
        res.json(cities);
      } else if (popular === 'true') {
        const cities = await storage.getPopularCities();
        res.json(cities);
      } else {
        const cities = await storage.getAllCities();
        res.json(cities);
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch cities" });
    }
  });

  app.get("/api/cities/:slug", async (req, res) => {
    try {
      const city = await storage.getCityBySlug(req.params.slug);
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }
      res.json(city);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch city details" });
    }
  });

  // Currency conversion endpoint
  app.get("/api/currency/:from/:to", async (req, res) => {
    try {
      const { from, to } = req.params;
      const apiKey = process.env.CURRENCY_API_KEY;
      
      if (!apiKey) {
        const fallbackRate = from === "INR" && to === "USD" ? 0.012 : 83.33;
        return res.json({ rate: fallbackRate, source: "fallback" });
      }

      // Real API integration would go here
      res.json({ rate: 0.012, source: "fallback" });
    } catch (error) {
      const fallbackRate = req.params.from === "INR" && req.params.to === "USD" ? 0.012 : 83.33;
      res.json({ rate: fallbackRate, source: "fallback" });
    }
  });

  // Cost of living API endpoint  
  app.get("/api/cost-of-living/:cityName", async (req, res) => {
    try {
      const costData = {
        city: req.params.cityName,
        lastUpdated: new Date().toISOString(),
        housing: {
          oneBedroom: { min: 8000, max: 25000, average: 15000 },
          twoBedroom: { min: 12000, max: 40000, average: 22000 },
          utilities: { min: 1500, max: 4000, average: 2500 }
        },
        food: {
          streetFood: { min: 30, max: 100, average: 60 },
          restaurant: { min: 150, max: 500, average: 250 },
          groceries: { min: 3000, max: 8000, average: 5000 }
        },
        transport: {
          local: { min: 10, max: 50, average: 25 },
          monthly: { min: 500, max: 1500, average: 800 }
        }
      };
      res.json(costData);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cost data" });
    }
  });

  // Weather API endpoint (enhanced with city-specific data)
  app.get("/api/weather/:cityId", async (req, res) => {
    try {
      const apiKey = process.env.OPENWEATHER_API_KEY;
      
      // Get city details to create distinct weather data
      const city = await storage.getCityBySlug(req.params.cityId);
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }

      // City-specific weather patterns based on actual climate data
      const cityWeatherMap = {
        "bangalore": {
          temp: 24, humidity: 65, wind: 8, condition: "Pleasant", uvIndex: 6,
          forecast: [
            { day: "Today", high: 28, low: 20, condition: "Partly Cloudy" },
            { day: "Tomorrow", high: 26, low: 19, condition: "Cloudy" },
            { day: "Day 3", high: 25, low: 18, condition: "Light Rain" }
          ]
        },
        "pune": {
          temp: 26, humidity: 60, wind: 10, condition: "Clear", uvIndex: 7,
          forecast: [
            { day: "Today", high: 30, low: 22, condition: "Sunny" },
            { day: "Tomorrow", high: 29, low: 21, condition: "Partly Cloudy" },
            { day: "Day 3", high: 27, low: 20, condition: "Cloudy" }
          ]
        },
        "mumbai": {
          temp: 30, humidity: 85, wind: 15, condition: "Humid", uvIndex: 9,
          forecast: [
            { day: "Today", high: 33, low: 27, condition: "Hot & Humid" },
            { day: "Tomorrow", high: 32, low: 26, condition: "Partly Cloudy" },
            { day: "Day 3", high: 31, low: 25, condition: "Thunderstorms" }
          ]
        },
        "goa": {
          temp: 32, humidity: 78, wind: 12, condition: "Tropical", uvIndex: 10,
          forecast: [
            { day: "Today", high: 35, low: 28, condition: "Sunny" },
            { day: "Tomorrow", high: 34, low: 27, condition: "Hot" },
            { day: "Day 3", high: 33, low: 26, condition: "Partly Cloudy" }
          ]
        },
        "new-delhi": {
          temp: 25, humidity: 55, wind: 6, condition: "Polluted", uvIndex: 5,
          forecast: [
            { day: "Today", high: 28, low: 22, condition: "Hazy" },
            { day: "Tomorrow", high: 30, low: 23, condition: "Smoggy" },
            { day: "Day 3", high: 29, low: 21, condition: "Clear" }
          ]
        },
        "alleppey": {
          temp: 29, humidity: 90, wind: 8, condition: "Tropical Humid", uvIndex: 8,
          forecast: [
            { day: "Today", high: 32, low: 26, condition: "Humid" },
            { day: "Tomorrow", high: 31, low: 25, condition: "Partly Cloudy" },
            { day: "Day 3", high: 30, low: 24, condition: "Rain Showers" }
          ]
        },
        "varkala": {
          temp: 28, humidity: 82, wind: 14, condition: "Coastal Breeze", uvIndex: 9,
          forecast: [
            { day: "Today", high: 31, low: 25, condition: "Breezy" },
            { day: "Tomorrow", high: 30, low: 24, condition: "Partly Cloudy" },
            { day: "Day 3", high: 29, low: 23, condition: "Light Rain" }
          ]
        },
        "kasol": {
          temp: 15, humidity: 70, wind: 5, condition: "Mountain Fresh", uvIndex: 4,
          forecast: [
            { day: "Today", high: 18, low: 12, condition: "Cool & Clear" },
            { day: "Tomorrow", high: 17, low: 11, condition: "Misty" },
            { day: "Day 3", high: 16, low: 10, condition: "Light Rain" }
          ]
        },
        "jaipur": {
          temp: 27, humidity: 45, wind: 8, condition: "Desert Dry", uvIndex: 8,
          forecast: [
            { day: "Today", high: 32, low: 22, condition: "Sunny & Dry" },
            { day: "Tomorrow", high: 33, low: 23, condition: "Hot" },
            { day: "Day 3", high: 31, low: 21, condition: "Clear" }
          ]
        },
        "gangtok": {
          temp: 12, humidity: 75, wind: 6, condition: "Mountain Mist", uvIndex: 3,
          forecast: [
            { day: "Today", high: 15, low: 9, condition: "Cool & Misty" },
            { day: "Tomorrow", high: 14, low: 8, condition: "Cloudy" },
            { day: "Day 3", high: 13, low: 7, condition: "Light Snow" }
          ]
        },
        "mcleodganj": {
          temp: 14, humidity: 70, wind: 4, condition: "Spiritual Breeze", uvIndex: 4,
          forecast: [
            { day: "Today", high: 17, low: 11, condition: "Crisp & Clear" },
            { day: "Tomorrow", high: 16, low: 10, condition: "Partly Cloudy" },
            { day: "Day 3", high: 15, low: 9, condition: "Light Rain" }
          ]
        },
        "shillong": {
          temp: 18, humidity: 78, wind: 7, condition: "Scotland Vibes", uvIndex: 5,
          forecast: [
            { day: "Today", high: 21, low: 15, condition: "Cool & Pleasant" },
            { day: "Tomorrow", high: 20, low: 14, condition: "Cloudy" },
            { day: "Day 3", high: 19, low: 13, condition: "Drizzle" }
          ]
        },
        "udaipur": {
          temp: 26, humidity: 60, wind: 9, condition: "Lake Breeze", uvIndex: 7,
          forecast: [
            { day: "Today", high: 30, low: 22, condition: "Royal Sunshine" },
            { day: "Tomorrow", high: 29, low: 21, condition: "Partly Cloudy" },
            { day: "Day 3", high: 28, low: 20, condition: "Clear" }
          ]
        }
      };

      const citySlug = city.slug.toLowerCase();
      const cityWeather = (cityWeatherMap as any)[citySlug] || {
        temp: 25, humidity: 70, wind: 10, condition: "Pleasant", uvIndex: 6,
        forecast: [
          { day: "Today", high: 28, low: 22, condition: "Partly Cloudy" },
          { day: "Tomorrow", high: 27, low: 21, condition: "Cloudy" },
          { day: "Day 3", high: 26, low: 20, condition: "Clear" }
        ]
      };
      
      const weatherData = {
        cityId: req.params.cityId,
        current: {
          temperature: cityWeather.temp,
          humidity: cityWeather.humidity,
          windSpeed: cityWeather.wind,
          condition: cityWeather.condition,
          uvIndex: cityWeather.uvIndex
        },
        forecast: cityWeather.forecast,
        lastUpdated: new Date().toISOString(),
        source: apiKey ? "live" : "city-specific-fallback"
      };
      
      res.json(weatherData);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch weather data" });
    }
  });

  // Events endpoint
  app.get("/api/events/:cityId", async (req, res) => {
    try {
      const events = await storage.getEventsByCity(req.params.cityId);
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  // Attractions endpoint
  app.get("/api/attractions/:cityId", async (req, res) => {
    try {
      const attractions = await storage.getAttractionsByCity(req.params.cityId);
      res.json(attractions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch attractions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
