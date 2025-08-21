import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import CityOverview from "@/components/city/city-overview";
import CostOfLiving from "@/components/city/cost-of-living";
import InternetConnectivity from "@/components/city/internet-connectivity";
import Transportation from "@/components/city/transportation";
import ClimateWeather from "@/components/city/climate-weather";
import WeatherClimate from "@/components/city/weather-climate";
import CoworkingSpaces from "@/components/city/coworking-spaces-city-specific";
import SafetyHealthcare from "@/components/city/safety-healthcare";
import LifestyleCulture from "@/components/city/lifestyle-culture";
import ThingsToDo from "@/components/city/things-to-do";
import CommunityNomads from "@/components/city/community-nomads";
import InsiderHacks from "@/components/city/insider-hacks-city-specific";
import CityConnections from "@/components/city/city-connections-city-specific";
import FestivalsEvents from "@/components/city/festivals-events-city-specific";
import ShoppingMarkets from "@/components/city/shopping-markets-city-specific";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Star, MapPin, Users, DollarSign, Wifi, Car, Cloud, Shield, Heart, Compass, Lightbulb, Train } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

export default function CityPage() {
  const [, params] = useRoute("/city/:slug");
  const slug = params?.slug;
  const [activeTab, setActiveTab] = useState("overview");

  const { data: city, isLoading, error } = useQuery<CityWithDetails>({
    queryKey: ["/api/cities", slug],
    enabled: !!slug,
  });

  // Complete tab configuration as per requirements
  const tabs = [
    { id: "overview", label: "Overview", icon: Compass, emoji: "🎯" },
    { id: "cost", label: "Cost of Living", icon: DollarSign, emoji: "💰" },
    { id: "internet", label: "Internet & Connectivity", icon: Wifi, emoji: "🌐" },
    { id: "transport", label: "Transportation & Accessibility", icon: Car, emoji: "🚌" },
    { id: "weather", label: "Weather & Climate", icon: Cloud, emoji: "🌤️" },
    { id: "coworking", label: "Coworking Spaces", icon: Users, emoji: "💻" },
    { id: "safety", label: "Safety & Healthcare", icon: Shield, emoji: "🏥" },
    { id: "lifestyle", label: "Lifestyle & Culture", icon: Heart, emoji: "🍲" },
    { id: "festivals", label: "Festivals & Events", icon: Star, emoji: "🎉" },
    { id: "things-to-do", label: "Things to Do & Experiences", icon: MapPin, emoji: "🗺️" },
    { id: "shopping", label: "Shopping & Markets", icon: Users, emoji: "🛍️" },
    { id: "community", label: "Community & Nomad Scene", icon: Users, emoji: "🤝" },
    { id: "hacks", label: "Insider Hacks", icon: Lightbulb, emoji: "💡" },
    { id: "connectivity", label: "Connectivity to Other Cities", icon: Train, emoji: "✈️" },
  ];

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

  // Render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <CityOverview city={city} />;
      case "cost":
        return <CostOfLiving costData={city.costOfLiving} />;
      case "internet":
        return <InternetConnectivity internetData={city.internetConnectivity} />;
      case "transport":
        return <Transportation transportData={city.transportation} />;
      case "weather":
        return <WeatherClimate climateData={city.climate} cityName={city.name} cityId={city.id} />;
      case "coworking":
        return <CoworkingSpaces city={city} />;
      case "safety":
        return <SafetyHealthcare safetyData={city.safety} />;
      case "lifestyle":
        return <LifestyleCulture lifestyleData={city.lifestyle} />;
      case "festivals":
        return <FestivalsEvents city={city} />;
      case "things-to-do":
        return <ThingsToDo attractions={city.attractions} events={city.events} />;
      case "shopping":
        return <ShoppingMarkets city={city} />;
      case "community":
        return <CommunityNomads city={city} />;
      case "hacks":
        return <InsiderHacks city={city} />;
      case "connectivity":
        return <CityConnections city={city} />;
      default:
        return <CityOverview city={city} />;
    }
  };

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
                {city.tags?.map((tag, index) => (
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

      {/* Enhanced Tab Navigation with Arrows */}
      <section className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center">
            <button 
              onClick={() => {
                const container = document.getElementById('tab-container');
                if (container) container.scrollLeft -= 200;
              }}
              className="absolute left-0 z-10 bg-white/90 hover:bg-white shadow-md rounded-full p-2 text-travel-blue"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            
            <div 
              id="tab-container"
              className="flex space-x-1 py-4 overflow-x-auto scroll-smooth mx-10"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-travel-blue text-white shadow-md transform scale-105'
                        : 'text-travel-blue hover:bg-travel-blue/10 hover:text-travel-blue/80 hover:scale-102'
                    }`}
                  >
                    <span className="text-lg">{tab.emoji}</span>
                    <IconComponent className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            
            <button 
              onClick={() => {
                const container = document.getElementById('tab-container');
                if (container) container.scrollLeft += 200;
              }}
              className="absolute right-0 z-10 bg-white/90 hover:bg-white shadow-md rounded-full p-2 text-travel-blue"
            >
              <span className="rotate-180"><ArrowLeft className="h-4 w-4" /></span>
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="min-h-screen">
          {renderTabContent()}
        </div>
      </div>

      <Footer />
    </div>
  );
}


