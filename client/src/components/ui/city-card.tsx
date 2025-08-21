import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Wifi, Shield, DollarSign, Thermometer } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { City, CostOfLiving, InternetConnectivity, Climate, Safety } from "@shared/schema";

interface CityStatsGridProps {
  city: City;
}

function CityStatsGrid({ city }: CityStatsGridProps) {
  // Fetch real data from API for each city
  const { data: costData } = useQuery<CostOfLiving>({
    queryKey: ["/api/cities", city.slug, "cost-of-living"],
    queryFn: () => fetch(`/api/cities/${city.slug}`).then(res => res.json()).then(data => data.costOfLiving),
  });

  const { data: internetData } = useQuery<InternetConnectivity>({
    queryKey: ["/api/cities", city.slug, "internet"],
    queryFn: () => fetch(`/api/cities/${city.slug}`).then(res => res.json()).then(data => data.internetConnectivity),
  });

  const { data: climateData } = useQuery<Climate>({
    queryKey: ["/api/cities", city.slug, "climate"],
    queryFn: () => fetch(`/api/cities/${city.slug}`).then(res => res.json()).then(data => data.climate),
  });

  const { data: safetyData } = useQuery<Safety>({
    queryKey: ["/api/cities", city.slug, "safety"],
    queryFn: () => fetch(`/api/cities/${city.slug}`).then(res => res.json()).then(data => data.safety),
  });

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="flex items-center space-x-2">
        <DollarSign className="h-4 w-4 text-warm-terracotta" />
        <div>
          <p className="text-xs text-gray-500">Cost/Month</p>
          <p className="font-semibold text-travel-blue">
            {costData ? `₹${(costData.monthlyBudgetINR / 1000).toFixed(0)}K` : "Loading..."}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Wifi className="h-4 w-4 text-sage-green" />
        <div>
          <p className="text-xs text-gray-500">Internet</p>
          <p className="font-semibold text-travel-blue">
            {internetData ? `${internetData.avgSpeedMbps} Mbps` : "Loading..."}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Thermometer className="h-4 w-4 text-sunset-orange" />
        <div>
          <p className="text-xs text-gray-500">Climate</p>
          <p className="font-semibold text-travel-blue">
            {climateData ? `${climateData.avgTempCelsius}°C` : "Loading..."}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Shield className="h-4 w-4 text-sage-green" />
        <div>
          <p className="text-xs text-gray-500">Safety</p>
          <p className="font-semibold text-travel-blue">
            {safetyData ? `${safetyData.safetyScore}/10` : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
}

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={`${city.heroImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400`}
          alt={`${city.name} cityscape`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        
        {city.isPopular && (
          <div className="absolute top-4 left-4 bg-vintage-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
            #1 Popular
          </div>
        )}
        
        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-gray-400 hover:text-warm-terracotta transition-colors" />
        </button>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif text-2xl font-bold text-travel-blue">{city.name}</h3>
          <div className="flex items-center space-x-1 text-vintage-gold">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-semibold">{city.rating}</span>
          </div>
        </div>
        
        <p className="text-muted-navy mb-4 leading-relaxed line-clamp-2">
          {city.description}
        </p>
        
        <CityStatsGrid city={city} />
        
        <div className="flex flex-wrap gap-2 mb-4">
          {city.tags?.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="px-2 py-1 bg-travel-blue/10 text-travel-blue rounded-full text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <Link href={`/city/${city.slug}`}>
          <Button className="w-full py-3 bg-travel-blue text-white rounded-lg font-semibold hover:bg-travel-blue/90 transition-colors">
            Explore {city.name}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}