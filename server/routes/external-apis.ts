import express from "express";

const router = express.Router();

// Currency conversion endpoint
router.get("/currency/:from/:to", async (req, res) => {
  try {
    const { from, to } = req.params;
    const apiKey = process.env.CURRENCY_API_KEY;
    
    if (!apiKey) {
      // Fallback exchange rate
      const fallbackRate = from === "INR" && to === "USD" ? 0.012 : 83.33;
      return res.json({ rate: fallbackRate, source: "fallback" });
    }

    // In a real implementation, this would call the currency API
    const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}&currencies=${to}&base_currency=${from}`);
    const data = await response.json();
    
    res.json({ 
      rate: data.data[to].value, 
      source: "live",
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error("Currency API error:", error);
    // Fallback rate for INR to USD
    const fallbackRate = req.params.from === "INR" && req.params.to === "USD" ? 0.012 : 83.33;
    res.json({ rate: fallbackRate, source: "fallback" });
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

// Weather data endpoint
router.get("/weather/:cityId", async (req, res) => {
  try {
    const { cityId } = req.params;
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
          { date: "2024-01-01", high: 30, low: 22, description: "Sunny" },
          { date: "2024-01-02", high: 29, low: 21, description: "Partly cloudy" },
          { date: "2024-01-03", high: 31, low: 23, description: "Clear sky" }
        ],
        monthly: {
          Jan: { high: 28, low: 18, rainfall: 15 },
          Feb: { high: 31, low: 20, rainfall: 20 },
          Mar: { high: 35, low: 24, rainfall: 25 }
        }
      };
      return res.json({ data: fallbackWeather, source: "fallback" });
    }

    // Real API integration would go here
    res.json({ message: "Weather API integration pending", source: "api" });
  } catch (error) {
    console.error("Weather API error:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

export default router;