import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Cloud, Sun, Thermometer, Droplets, Calendar, AlertCircle } from "lucide-react";
import type { Climate } from "@shared/schema";

interface ClimateWeatherProps {
  climateData: Climate | null;
  cityId: string;
}

export default function ClimateWeather({ climateData, cityId }: ClimateWeatherProps) {
  const { data: currentWeather, isLoading: weatherLoading } = useQuery({
    queryKey: ["/api/weather", cityId],
    refetchInterval: 30 * 60 * 1000, // Refetch every 30 minutes
  });

  if (!climateData) {
    return (
      <Card className="bg-white rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
            <Cloud className="mr-2 h-6 w-6 text-vintage-gold" />
            Climate & Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-navy">Climate and weather data is not available for this city.</p>
        </CardContent>
      </Card>
    );
  }

  const getTemperatureColor = (temp: number) => {
    if (temp <= 20) return "travel-blue";
    if (temp <= 30) return "sage-green";
    if (temp <= 35) return "vintage-gold";
    return "warm-terracotta";
  };

  const getHumidityColor = (humidity: number) => {
    if (humidity <= 40) return "sage-green";
    if (humidity <= 60) return "vintage-gold";
    if (humidity <= 80) return "sunset-orange";
    return "warm-terracotta";
  };

  const tempColor = getTemperatureColor(climateData.avgTempCelsius);
  const humidityColor = climateData.avgHumidity ? getHumidityColor(climateData.avgHumidity) : "vintage-gold";

  const weatherIcon = (currentWeather as any)?.icon === "sunny" ? Sun : Cloud;

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <Cloud className="mr-2 h-6 w-6 text-vintage-gold" />
          Climate & Weather
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Weather & Climate Overview */}
        <div className="bg-gradient-to-r from-sage-green/10 to-travel-blue/10 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Current Temperature</h3>
              {weatherLoading ? (
                <div className="text-3xl font-bold text-muted-navy">Loading...</div>
              ) : (
                <div className={`text-3xl font-bold text-${tempColor}`}>
                  {(currentWeather as any)?.temperature || climateData.avgTempCelsius}°C
                </div>
              )}
              <div className="text-sm text-muted-navy">
                {(currentWeather as any)?.description || "Average temperature"}
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Humidity</h3>
              <div className={`text-3xl font-bold text-${humidityColor}`}>
                {(currentWeather as any)?.humidity || climateData.avgHumidity || "N/A"}
                {((currentWeather as any)?.humidity || climateData.avgHumidity) && "%"}
              </div>
              <div className="text-sm text-muted-navy">
                {weatherLoading ? "Loading..." : "Current humidity"}
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Climate Type</h3>
              <div className="text-lg font-bold text-vintage-gold mb-2">
                {climateData.climateType || "Tropical"}
              </div>
              <Badge className="bg-sage-green/10 text-sage-green">
                {climateData.bestTimeToVisit || "Year Round"}
              </Badge>
            </div>
          </div>
        </div>

        {/* Weather Conditions */}
        {currentWeather && (
          <div>
            <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
              <Sun className="mr-2 h-5 w-5" />
              Current Conditions
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-vintage-gold/20 rounded-full flex items-center justify-center`}>
                    <Sun className="h-6 w-6 text-vintage-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-travel-blue">{(currentWeather as any).description}</div>
                    <div className="text-sm text-muted-navy">
                      Updated: {new Date((currentWeather as any).updatedAt).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-vintage-gold">{(currentWeather as any).temperature}°C</div>
                  <div className="text-sm text-muted-navy">{(currentWeather as any).humidity}% humidity</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Seasonal Information */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Seasonal Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-travel-blue mb-3">Best Time to Visit</h4>
              <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-sage-green" />
                  <span className="font-semibold text-sage-green">
                    {climateData.bestTimeToVisit}
                  </span>
                </div>
                <p className="text-muted-navy text-sm">
                  Perfect weather conditions with comfortable temperatures and minimal rainfall.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-travel-blue mb-3">Rainy Season</h4>
              <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Droplets className="h-4 w-4 text-travel-blue" />
                  <span className="font-semibold text-travel-blue">Monsoon Months</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {climateData.rainyMonths?.map((month, index) => (
                    <Badge key={index} variant="secondary" className="bg-travel-blue/10 text-travel-blue">
                      {month}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Temperature Guide */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Thermometer className="mr-2 h-5 w-5" />
            Temperature Guide
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-semibold text-travel-blue">Winter</div>
                <div className="text-sm text-muted-navy">Dec - Feb</div>
                <div className="text-lg font-bold text-travel-blue">
                  {Math.max(15, climateData.avgTempCelsius - 8)}°C - {climateData.avgTempCelsius - 2}°C
                </div>
              </div>
              <div>
                <div className="font-semibold text-vintage-gold">Summer</div>
                <div className="text-sm text-muted-navy">Mar - May</div>
                <div className="text-lg font-bold text-vintage-gold">
                  {climateData.avgTempCelsius + 2}°C - {climateData.avgTempCelsius + 8}°C
                </div>
              </div>
              <div>
                <div className="font-semibold text-sage-green">Monsoon</div>
                <div className="text-sm text-muted-navy">Jun - Sep</div>
                <div className="text-lg font-bold text-sage-green">
                  {climateData.avgTempCelsius - 3}°C - {climateData.avgTempCelsius + 2}°C
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <AlertCircle className="mr-2 h-4 w-4" />
            Weather Tips
          </h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Carry an umbrella during monsoon season ({climateData.rainyMonths?.join(", ") || "Jun-Sep"})</li>
            <li>• Light cotton clothes work best in hot and humid weather</li>
            <li>• Air conditioning is essential during summer months</li>
            <li>• Winter evenings can get cool, pack light jackets</li>
            <li>• Check weather forecast before planning outdoor activities</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
