import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, Droplets, Wind, Thermometer, Eye, ExternalLink, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Climate } from "@shared/schema";

interface WeatherClimateProps {
  climateData: Climate | null;
  cityName: string;
  cityId: string;
}

export default function WeatherClimate({ climateData, cityName, cityId }: WeatherClimateProps) {
  // Fetch live weather data
  const { data: weatherData, isLoading: weatherLoading } = useQuery<{
    current: any;
    forecast: any[];
    lastUpdated: string;
    source: string;
  }>({
    queryKey: ["/api/weather", cityId],
    refetchInterval: 86400000, // Refresh once daily
  });

  const goaWeatherData = {
    bestTime: {
      optimal: "November to February",
      avoid: "June to September (Monsoon)",
      shoulder: "March to May, October"
    },
    seasons: [
      {
        name: "Winter (Nov-Feb)",
        temp: "20-32°C",
        weather: "Perfect for nomads",
        rainfall: "Minimal",
        humidity: "60-70%",
        activities: ["Beach activities", "Outdoor work", "Sightseeing", "Water sports"]
      },
      {
        name: "Summer (Mar-May)", 
        temp: "25-35°C",
        weather: "Hot but manageable",
        rainfall: "Occasional showers",
        humidity: "70-80%",
        activities: ["Early morning beach", "Indoor coworking", "Evening activities"]
      },
      {
        name: "Monsoon (Jun-Sep)",
        temp: "24-30°C", 
        weather: "Heavy rains, flooding",
        rainfall: "2500mm annually",
        humidity: "85-95%",
        activities: ["Indoor work", "Monsoon photography", "Ayurveda retreats"]
      },
      {
        name: "Post-Monsoon (Oct)",
        temp: "22-31°C",
        weather: "Pleasant transition",
        rainfall: "Light showers",
        humidity: "75-85%",
        activities: ["Festival season", "Nature walks", "Beach return"]
      }
    ]
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Cloud className="mr-3 h-8 w-8 text-vintage-gold" />
          Weather & Climate Guide
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Complete weather patterns, seasonal guides, and best travel times for {cityName} with live weather updates.
        </p>
        {weatherData && (
          <div className="flex items-center space-x-4 text-sm text-muted-navy mt-4">
            <div className="flex items-center">
              <RefreshCw className="h-3 w-3 mr-1" />
              Last updated: {new Date(weatherData.lastUpdated).toLocaleDateString()}
            </div>
            <Badge variant="secondary" className="bg-sage-green/10 text-sage-green">
              {weatherData.source === "live" ? "Live data" : "Weather estimates"}
            </Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Current Weather */}
        {weatherData && (
          <div>
            <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
              <Sun className="mr-2 h-5 w-5" />
              🌤️ Current Weather in {cityName}
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-travel-blue/5 rounded-lg p-4 text-center border border-travel-blue/20">
                <Thermometer className="h-6 w-6 text-travel-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-travel-blue">{weatherData.current.temperature}°C</div>
                <div className="text-sm text-muted-navy">Temperature</div>
              </div>
              <div className="bg-sage-green/5 rounded-lg p-4 text-center border border-sage-green/20">
                <Droplets className="h-6 w-6 text-sage-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-sage-green">{weatherData.current.humidity}%</div>
                <div className="text-sm text-muted-navy">Humidity</div>
              </div>
              <div className="bg-vintage-gold/5 rounded-lg p-4 text-center border border-vintage-gold/20">
                <Wind className="h-6 w-6 text-vintage-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-vintage-gold">{weatherData.current.windSpeed} km/h</div>
                <div className="text-sm text-muted-navy">Wind Speed</div>
              </div>
              <div className="bg-terracotta/5 rounded-lg p-4 text-center border border-terracotta/20">
                <Eye className="h-6 w-6 text-terracotta mx-auto mb-2" />
                <div className="text-2xl font-bold text-terracotta">{weatherData.current.uvIndex}</div>
                <div className="text-sm text-muted-navy">UV Index</div>
              </div>
            </div>
          </div>
        )}

        {/* Best Time to Visit */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Sun className="mr-2 h-5 w-5" />
            🗓️ Best Time to Visit {cityName}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">🌟 Optimal Season</h4>
              <div className="text-lg font-medium text-travel-blue mb-2">{goaWeatherData.bestTime.optimal}</div>
              <p className="text-sm text-muted-navy">Perfect weather, comfortable temperatures, ideal for all activities. Peak nomad season.</p>
            </div>
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">⚠️ Avoid Period</h4>
              <div className="text-lg font-medium text-travel-blue mb-2">{goaWeatherData.bestTime.avoid}</div>
              <p className="text-sm text-muted-navy">Heavy monsoons, frequent flooding, limited outdoor activities.</p>
            </div>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">👍 Shoulder Season</h4>
              <div className="text-lg font-medium text-travel-blue mb-2">{goaWeatherData.bestTime.shoulder}</div>
              <p className="text-sm text-muted-navy">Good weather, fewer crowds, better accommodation rates.</p>
            </div>
          </div>
        </div>

        {/* Seasonal Breakdown */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Cloud className="mr-2 h-5 w-5" />
            🌦️ Seasonal Weather Patterns
          </h3>
          <div className="space-y-6">
            {goaWeatherData.seasons.map((season, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-travel-blue text-lg mb-3">{season.name}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-muted-navy">Temperature:</span>
                        <div className="text-travel-blue font-semibold">{season.temp}</div>
                      </div>
                      <div>
                        <span className="font-medium text-muted-navy">Weather:</span>
                        <div className="text-travel-blue font-semibold">{season.weather}</div>
                      </div>
                      <div>
                        <span className="font-medium text-muted-navy">Rainfall:</span>
                        <div className="text-travel-blue font-semibold">{season.rainfall}</div>
                      </div>
                      <div>
                        <span className="font-medium text-muted-navy">Humidity:</span>
                        <div className="text-travel-blue font-semibold">{season.humidity}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-muted-navy mb-2 block">Recommended Activities:</span>
                    <div className="flex flex-wrap gap-2">
                      {season.activities.map((activity, actIndex) => (
                        <Badge key={actIndex} variant="secondary" className="bg-vintage-gold/10 text-vintage-gold">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Resources */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <ExternalLink className="mr-2 h-5 w-5" />
            🌐 Weather Resources & Live Data
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Official Weather Services</h4>
              <div className="space-y-2 text-sm">
                <a href="https://mausam.imd.gov.in/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  India Meteorological Department
                </a>
                <a href="https://weather.com/en-IN/weather/today/l/Panaji+Goa+IN" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Weather.com - {cityName}
                </a>
                <a href="https://www.accuweather.com/en/in/panaji/3364890/weather-forecast/3364890" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  AccuWeather - Detailed forecasts
                </a>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Weather Apps & Tools</h4>
              <div className="space-y-2 text-sm">
                <a href="https://www.windy.com/?goa" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Windy.com - Interactive maps
                </a>
                <a href="https://darksky.net/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Dark Sky - Hyperlocal forecasts
                </a>
                <a href="https://www.yr.no/en/forecast/daily-table/1-1271157/India/Goa/North%20Goa/Panaji" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Yr.no - Long-range forecasts
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Climate Impact on Nomad Life */}
        <div className="bg-sage-green/5 rounded-lg p-6 border-l-4 border-sage-green">
          <h4 className="font-semibold text-sage-green mb-3 flex items-center">
            <Thermometer className="mr-2 h-4 w-4" />
            Climate Impact on Digital Nomad Life
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-navy">
            <div>
              <h5 className="font-medium text-travel-blue mb-2">Working Conditions</h5>
              <ul className="space-y-1">
                <li>• AC costs: ₹1,500-3,000/month in summer</li>
                <li>• Monsoon internet outages: 2-3 times/month</li>
                <li>• Best outdoor workspaces: Nov-Feb</li>
                <li>• Power cuts during storms: 2-4 hours</li>
                <li>• Humidity affects electronics: use silica gel</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-travel-blue mb-2">Health & Comfort</h5>
              <ul className="space-y-1">
                <li>• Monsoon health risks: water-borne diseases</li>
                <li>• UV protection essential: SPF 30+ year-round</li>
                <li>• Dehydration risk in summer: 3-4L water/day</li>
                <li>• Mosquito season: Jun-Oct (dengue, malaria)</li>
                <li>• Vitamin D deficiency during monsoons</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}