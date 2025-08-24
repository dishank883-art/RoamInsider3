import express from "express";
import { apiCache } from "../utils/api-cache";

const router = express.Router();

// Currency conversion endpoint with 12-hour caching
router.get("/currency/:from/:to", async (req, res) => {
  try {
    const { from, to } = req.params;
    const cacheKey = `currency_${from}_${to}`;
    
    // Check cache first (12-hour limit)
    const cachedData = apiCache.get(cacheKey);
    if (cachedData) {
      return res.json(cachedData);
    }

    const apiKey = process.env.CURRENCY_API_KEY;
    
    if (!apiKey) {
      // Fallback exchange rate
      const fallbackData = { 
        rate: from === "INR" && to === "USD" ? 0.012 : 83.33, 
        source: "fallback",
        lastUpdated: new Date().toISOString()
      };
      
      // Cache fallback data too
      apiCache.set(cacheKey, fallbackData);
      return res.json(fallbackData);
    }

    console.log(`🌐 Making currency API call for ${from}→${to} (cache miss)`);
    
    // Make external API call (limited to 2x daily via cache)
    const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=${to}&base_currency=${from}`);
    
    if (!response.ok) {
      throw new Error(`Currency API returned ${response.status}`);
    }
    
    const data = await response.json();
    
    const result = { 
      rate: data.data[to].value, 
      source: "live",
      lastUpdated: new Date().toISOString()
    };

    // Cache the result for 12 hours
    apiCache.set(cacheKey, result);
    
    res.json(result);
  } catch (error) {
    console.error("Currency API error:", error);
    
    // Try to return cached data even if expired
    const cacheKey = `currency_${req.params.from}_${req.params.to}`;
    const staleData = apiCache.get(cacheKey);
    
    if (staleData) {
      console.log("🔄 Returning stale cached currency data due to API error");
      return res.json({ ...staleData, source: "stale_cache" });
    }
    
    // Final fallback
    const fallbackRate = req.params.from === "INR" && req.params.to === "USD" ? 0.012 : 83.33;
    const fallbackData = { 
      rate: fallbackRate, 
      source: "fallback_error",
      lastUpdated: new Date().toISOString()
    };
    
    // Cache fallback to prevent repeated failures
    apiCache.set(cacheKey, fallbackData);
    res.json(fallbackData);
  }
});

// Cost of living data endpoint
router.get("/cost-of-living/:cityName", async (req, res) => {
  try {
    const { cityName } = req.params;
    
    // This would integrate with Numbeo or similar API
    // For now, providing comprehensive mock data that matches real patterns
    const costData = {
      city: cityName,
      country: "India",
      lastUpdated: new Date().toISOString(),
      data: {
        housing: {
          oneBedroom: { min: 8000, max: 25000, average: 15000 },
          twoBedroom: { min: 12000, max: 40000, average: 22000 },
          threeBedroom: { min: 18000, max: 60000, average: 35000 },
          utilitiesBasic: { min: 1500, max: 4000, average: 2500 }
        },
        food: {
          streetFood: { min: 30, max: 100, average: 60 },
          restaurantMeal: { min: 150, max: 500, average: 250 },
          groceriesMonthly: { min: 3000, max: 8000, average: 5000 },
          water: { min: 20, max: 50, average: 30 }
        },
        transportation: {
          localTransport: { min: 10, max: 50, average: 25 },
          autoRickshaw: { min: 50, max: 200, average: 100 },
          taxi: { min: 100, max: 400, average: 200 },
          monthlyPass: { min: 500, max: 1500, average: 800 }
        },
        lifestyle: {
          gym: { min: 1000, max: 3000, average: 1800 },
          cinema: { min: 150, max: 400, average: 250 },
          coffee: { min: 100, max: 300, average: 180 },
          coworking: { min: 3000, max: 12000, average: 6000 }
        }
      }
    };

    res.json(costData);
  } catch (error) {
    console.error("Cost of living API error:", error);
    res.status(500).json({ error: "Failed to fetch cost data" });
  }
});

// Weather API endpoint with 12-hour caching
router.get("/weather/:cityId", async (req, res) => {
  try {
    const { cityId } = req.params;
    const cacheKey = `weather_${cityId}`;
    
    // Check cache first (12-hour limit)
    const cachedData = apiCache.get(cacheKey);
    if (cachedData) {
      return res.json(cachedData);
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    
    if (!apiKey) {
      // Comprehensive fallback weather data
      const fallbackWeather = {
        current: {
          temperature: 28,
          feelsLike: 32,
          humidity: 65,
          windSpeed: 12,
          description: "Partly cloudy",
          aqi: 85
        },
        forecast: [
          { date: new Date().toISOString().split('T')[0], high: 30, low: 22, description: "Sunny" },
          { date: new Date(Date.now() + 86400000).toISOString().split('T')[0], high: 29, low: 21, description: "Partly cloudy" },
          { date: new Date(Date.now() + 172800000).toISOString().split('T')[0], high: 31, low: 23, description: "Clear sky" }
        ],
        monthly: {
          Jan: { high: 28, low: 18, rainfall: 15 },
          Feb: { high: 31, low: 20, rainfall: 20 },
          Mar: { high: 35, low: 24, rainfall: 25 }
        },
        lastUpdated: new Date().toISOString(),
        source: "fallback"
      };
      
      // Cache fallback data
      apiCache.set(cacheKey, fallbackWeather);
      return res.json(fallbackWeather);
    }

    console.log(`🌤️ Making weather API call for city ${cityId} (cache miss)`);
    
    // Make external API call (limited to 2x daily via cache)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`);
    
    if (!response.ok) {
      throw new Error(`Weather API returned ${response.status}`);
    }
    
    const data = await response.json();
    
    const result = {
      current: {
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        description: data.weather[0].description,
        aqi: 85 // Would need separate API call for AQI
      },
      lastUpdated: new Date().toISOString(),
      source: "live"
    };

    // Cache the result for 12 hours
    apiCache.set(cacheKey, result);
    
    res.json(result);
  } catch (error) {
    console.error("Weather API error:", error);
    
    // Try to return cached data even if expired
    const cacheKey = `weather_${req.params.cityId}`;
    const staleData = apiCache.get(cacheKey);
    
    if (staleData) {
      console.log("🔄 Returning stale cached weather data due to API error");
      return res.json({ ...staleData, source: "stale_cache" });
    }
    
    // Final fallback
    const fallbackWeather = {
      current: {
        temperature: 28,
        feelsLike: 32,
        humidity: 65,
        windSpeed: 12,
        description: "Data temporarily unavailable",
        aqi: 85
      },
      lastUpdated: new Date().toISOString(),
      source: "fallback_error"
    };
    
    // Cache fallback to prevent repeated failures
    apiCache.set(cacheKey, fallbackWeather);
    res.json(fallbackWeather);
  }
});

export default router;