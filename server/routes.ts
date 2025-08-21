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

  // Weather API endpoint (mock implementation)
  app.get("/api/weather/:cityId", async (req, res) => {
    try {
      const climate = await storage.getClimate(req.params.cityId);
      if (!climate) {
        return res.status(404).json({ message: "Weather data not found" });
      }
      
      // In a real implementation, this would call OpenWeatherMap API
      // For now, return mock current weather data
      const weatherData = {
        temperature: climate.avgTempCelsius + Math.floor(Math.random() * 6) - 3,
        humidity: (climate.avgHumidity || 70) + Math.floor(Math.random() * 20) - 10,
        description: ["Sunny", "Partly cloudy", "Cloudy", "Light rain"][Math.floor(Math.random() * 4)],
        icon: "partly-cloudy",
        updatedAt: new Date()
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
