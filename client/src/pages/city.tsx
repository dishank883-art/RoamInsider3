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
import InsiderHacksFixed from "@/components/city/insider-hacks-city-specific";
import CityConnections from "@/components/city/city-connections-city-specific";
import FestivalsEvents from "@/components/city/festivals-events-city-specific";
import ShoppingMarkets from "@/components/city/shopping-markets-city-specific";
import Reviews from "@/components/city/reviews";
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
    { id: "reviews", label: "Reviews & Experiences", icon: Star, emoji: "⭐" },
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
        return <CostOfLiving costData={city.costOfLiving} citySlug={city.slug} />;
      case "internet":
        return <InternetConnectivity internetData={city.internetConnectivity} citySlug={city.slug} />;
      case "transport":
        return <Transportation transportData={city.transportation} citySlug={city.slug} />;
      case "weather":
        return <WeatherClimate climateData={city.climate} cityName={city.name} cityId={city.id} citySlug={city.slug} />;
      case "coworking":
        return <CoworkingSpaces city={city} />;
      case "safety":
        return <SafetyHealthcare safetyData={city.safety} />;
      case "lifestyle":
        return <LifestyleCulture lifestyleData={city.lifestyle} />;
      case "festivals":
        return <FestivalsEvents city={city} />;
      case "things-to-do":
        return <ThingsToDo attractions={city.attractions} events={city.events} citySlug={city.slug} />;
      case "shopping":
        return <ShoppingMarkets city={city} />;
      case "community":
        return <CommunityNomads city={city} />;
      case "reviews":
        return <Reviews city={city} />;
      case "hacks":
        return <InsiderHacksFixed city={city} />;
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

      {/* Enhanced User-Friendly Tab Navigation */}
      <section className="sticky top-0 z-20 bg-gradient-to-r from-white via-vintage-gold/5 to-white backdrop-blur-md border-b-2 border-vintage-gold/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation Header */}
          <div className="text-center py-3 border-b border-vintage-gold/10">
            <h3 className="text-sm font-semibold text-travel-blue/80 uppercase tracking-wider">
              🗺️ Explore {city.name} • Click Any Tab Below 👇
            </h3>
          </div>
          
          <div className="relative flex items-center">
            {/* Left Scroll Button with Enhanced Design */}
            <button 
              onClick={() => {
                const container = document.getElementById('tab-container');
                if (container) container.scrollLeft -= 250;
              }}
              className="absolute left-0 z-10 bg-gradient-to-r from-vintage-gold to-vintage-gold/90 hover:from-vintage-gold/90 hover:to-vintage-gold text-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:animate-pulse" />
            </button>
            
            <div 
              id="tab-container"
              className="flex space-x-3 py-6 overflow-x-auto scroll-smooth mx-12 sm:mx-14"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {tabs.map((tab, index) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative flex flex-col items-center space-y-2 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 touch-manipulation min-h-[80px] min-w-[120px] sm:min-w-[140px] ${
                      isActive
                        ? 'bg-gradient-to-br from-travel-blue to-travel-blue/90 text-white shadow-2xl scale-105 ring-4 ring-vintage-gold/50'
                        : 'bg-white/90 hover:bg-gradient-to-br hover:from-vintage-gold/10 hover:to-travel-blue/10 text-travel-blue hover:text-travel-blue/90 shadow-md hover:shadow-xl border border-travel-blue/10 hover:border-vintage-gold/30'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isActive ? 'none' : 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    {/* Active Tab Indicator */}
                    {isActive && (
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-vintage-gold rounded-full animate-pulse"></div>
                      </div>
                    )}
                    
                    {/* Tab Content */}
                    <div className="flex flex-col items-center space-y-1">
                      <span className={`text-2xl transition-transform duration-300 ${isActive ? 'animate-bounce' : 'group-hover:scale-125'}`}>
                        {tab.emoji}
                      </span>
                      <IconComponent className={`h-4 w-4 transition-all duration-300 ${isActive ? 'text-vintage-gold' : 'group-hover:text-vintage-gold'}`} />
                      <span className={`text-center leading-tight font-medium ${isActive ? 'text-white' : ''}`}>
                        {tab.label}
                      </span>
                    </div>

                    {/* Hover Effect Overlay */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-vintage-gold/0 to-travel-blue/0 group-hover:from-vintage-gold/5 group-hover:to-travel-blue/5 rounded-2xl transition-all duration-300"></div>
                    )}

                    {/* Click Ripple Effect */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-150 ${isActive ? 'bg-white/10' : ''}`}></div>
                  </button>
                );
              })}
            </div>
            
            {/* Right Scroll Button with Enhanced Design */}
            <button 
              onClick={() => {
                const container = document.getElementById('tab-container');
                if (container) container.scrollLeft += 250;
              }}
              className="absolute right-0 z-10 bg-gradient-to-r from-vintage-gold to-vintage-gold/90 hover:from-vintage-gold/90 hover:to-vintage-gold text-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            >
              <span className="rotate-180 group-hover:animate-pulse">
                <ArrowLeft className="h-5 w-5" />
              </span>
            </button>
          </div>

          {/* Bottom Indicator */}
          <div className="flex justify-center py-2">
            <div className="flex space-x-1">
              {tabs.slice(0, Math.min(5, tabs.length)).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-1 rounded-full transition-all duration-300 ${
                    tabs.findIndex(tab => tab.id === activeTab) === index
                      ? 'bg-vintage-gold w-6'
                      : 'bg-travel-blue/20'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS Animation Styles */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          #tab-container::-webkit-scrollbar {
            display: none;
          }
          
          .group:hover .animate-pulse {
            animation-duration: 0.8s;
          }
        `}</style>
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


