import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import CityOverview from "@/components/city/city-overview";
import CostOfLiving from "@/components/city/cost-of-living";
import InternetConnectivity from "@/components/city/internet-connectivity";
import Transportation from "@/components/city/transportation";
import ClimateWeather from "@/components/city/climate-weather";
import SafetyHealthcare from "@/components/city/safety-healthcare";
import LifestyleCulture from "@/components/city/lifestyle-culture";
import ThingsToDo from "@/components/city/things-to-do";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, MapPin, Users } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

export default function CityPage() {
  const [, params] = useRoute("/city/:slug");
  const slug = params?.slug;

  const { data: city, isLoading, error } = useQuery<CityWithDetails>({
    queryKey: ["/api/cities", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="bg-cream min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-32 mb-6" />
          <Skeleton className="h-64 w-full mb-8" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6">
                  <Skeleton className="h-6 w-48 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6">
                  <Skeleton className="h-6 w-32 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !city) {
    return (
      <div className="bg-cream min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-travel-blue mb-4">City Not Found</h1>
          <p className="text-muted-navy mb-8">The city you're looking for doesn't exist or has been moved.</p>
          <Button 
            onClick={() => window.history.back()}
            className="bg-vintage-gold text-white hover:bg-vintage-gold/90"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-travel-blue via-travel-blue/90 to-muted-navy overflow-hidden">
        <div className="absolute inset-0 vintage-texture opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="text-white hover:text-vintage-gold mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cities
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {city.name}
                <span className="text-vintage-gold font-script text-4xl lg:text-5xl block mt-2">
                  {city.state}
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {city.description}
              </p>
              
              <div className="flex items-center space-x-8 text-blue-100 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-vintage-gold fill-current" />
                  <span className="font-semibold">{city.rating} Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-vintage-gold" />
                  <span className="font-semibold">{city.population?.toLocaleString()} People</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-vintage-gold" />
                  <span className="font-semibold">India</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {city.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-vintage-gold/20 text-vintage-gold rounded-full text-sm font-medium border border-vintage-gold/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={`${city.heroImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`}
                alt={`${city.name} cityscape`}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {city.costOfLiving && (
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl transform -rotate-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-warm-terracotta">₹</span>
                    <div>
                      <p className="font-semibold text-sm">Cost/Month</p>
                      <p className="text-vintage-gold font-bold">₹{city.costOfLiving.monthlyBudgetINR.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CityOverview city={city} />
            <CostOfLiving costData={city.costOfLiving} />
            <InternetConnectivity internetData={city.internetConnectivity} />
            <Transportation transportData={city.transportation} />
            <ClimateWeather climateData={city.climate} cityId={city.id} />
            <SafetyHealthcare safetyData={city.safety} />
            <LifestyleCulture lifestyleData={city.lifestyle} />
            <ThingsToDo attractions={city.attractions} events={city.events} />
          </div>
          
          <div className="space-y-6">
            {/* Quick Stats */}
            {city.costOfLiving && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-travel-blue mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-navy">Monthly Budget</span>
                    <span className="font-semibold text-travel-blue">₹{city.costOfLiving.monthlyBudgetINR.toLocaleString()}</span>
                  </div>
                  {city.internetConnectivity && (
                    <div className="flex justify-between">
                      <span className="text-muted-navy">Internet Speed</span>
                      <span className="font-semibold text-travel-blue">{city.internetConnectivity.avgSpeedMbps} Mbps</span>
                    </div>
                  )}
                  {city.climate && (
                    <div className="flex justify-between">
                      <span className="text-muted-navy">Avg Temperature</span>
                      <span className="font-semibold text-travel-blue">{city.climate.avgTempCelsius}°C</span>
                    </div>
                  )}
                  {city.safety && (
                    <div className="flex justify-between">
                      <span className="text-muted-navy">Safety Score</span>
                      <span className="font-semibold text-travel-blue">{city.safety.safetyScore}/10</span>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Related Cities */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-serif text-xl font-bold text-travel-blue mb-4">Similar Cities</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-vintage-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-travel-blue">Bangalore</p>
                    <p className="text-sm text-muted-navy">Tech Hub</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-sage-green/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-sage-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-travel-blue">Pune</p>
                    <p className="text-sm text-muted-navy">Affordable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
