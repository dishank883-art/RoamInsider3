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
import SafetyHealthcare from "@/components/city/safety-healthcare";
import LifestyleCulture from "@/components/city/lifestyle-culture";
import ThingsToDo from "@/components/city/things-to-do";
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

  // Tab configuration with icons and content
  const tabs = [
    { id: "overview", label: "Overview", icon: Compass, emoji: "🎯" },
    { id: "cost", label: "Cost of Living", icon: DollarSign, emoji: "💰" },
    { id: "internet", label: "Internet", icon: Wifi, emoji: "🌐" },
    { id: "transport", label: "Transport", icon: Car, emoji: "🚌" },
    { id: "climate", label: "Climate", icon: Cloud, emoji: "🌤️" },
    { id: "safety", label: "Safety", icon: Shield, emoji: "🛡️" },
    { id: "lifestyle", label: "Lifestyle", icon: Heart, emoji: "❤️" },
    { id: "things-to-do", label: "Things to Do", icon: Compass, emoji: "🗺️" },
    { id: "hacks", label: "Insider Hacks", icon: Lightbulb, emoji: "💡" },
    { id: "connectivity", label: "City Connections", icon: Train, emoji: "🚄" },
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
      case "climate":
        return <ClimateWeather climateData={city.climate} cityId={city.id} />;
      case "safety":
        return <SafetyHealthcare safetyData={city.safety} />;
      case "lifestyle":
        return <LifestyleCulture lifestyleData={city.lifestyle} />;
      case "things-to-do":
        return <ThingsToDo attractions={city.attractions} events={city.events} />;
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

      {/* Scrollable Tab Navigation */}
      <section className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollArea className="w-full">
            <div className="flex space-x-1 py-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-travel-blue text-white shadow-md'
                        : 'text-travel-blue hover:bg-travel-blue/10 hover:text-travel-blue/80'
                    }`}
                  >
                    <span className="text-lg">{tab.emoji}</span>
                    <IconComponent className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </ScrollArea>
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

// Helper components for new tabs
function InsiderHacks({ city }: { city: CityWithDetails }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="font-serif text-3xl font-bold text-travel-blue mb-6">💡 Insider Hacks</h2>
      <p className="text-muted-navy text-lg mb-8">Local tips and tricks to save money and avoid tourist traps in {city.name}.</p>
      
      <div className="grid gap-8">
        <div className="bg-vintage-gold/5 rounded-lg p-6 border-l-4 border-vintage-gold">
          <h3 className="font-semibold text-vintage-gold mb-4">💰 Money-Saving Tips</h3>
          <ul className="space-y-2 text-muted-navy">
            <li>• Use local buses instead of taxis - saves 70% on transport costs</li>
            <li>• Shop at local markets before 9 AM for the freshest produce at best prices</li>
            <li>• Get a prepaid mobile plan from Jio or Airtel for cheapest data rates</li>
            <li>• Eat at local dhabas and street vendors for authentic food at ₹50-100 per meal</li>
            <li>• Book accommodations in residential areas instead of commercial zones</li>
          </ul>
        </div>
        
        <div className="bg-warm-terracotta/5 rounded-lg p-6 border-l-4 border-warm-terracotta">
          <h3 className="font-semibold text-warm-terracotta mb-4">🚫 Scams to Avoid</h3>
          <ul className="space-y-2 text-muted-navy">
            <li>• Fake taxi meters - insist on using the meter or book via app</li>
            <li>• Overpriced tourist restaurants near monuments</li>
            <li>• Commission-based shopping guides at markets</li>
            <li>• Fake travel agents offering "special deals"</li>
            <li>• ATM skimming - use bank ATMs inside branches when possible</li>
          </ul>
        </div>
        
        <div className="bg-sage-green/5 rounded-lg p-6 border-l-4 border-sage-green">
          <h3 className="font-semibold text-sage-green mb-4">🏠 Accommodation Hacks</h3>
          <ul className="space-y-2 text-muted-navy">
            <li>• Book paying guest accommodations for stays longer than a month</li>
            <li>• Look for places with included WiFi and utilities</li>
            <li>• Stay near metro stations for easy connectivity</li>
            <li>• Negotiate monthly rates directly with landlords</li>
            <li>• Use apps like NoBroker to avoid broker fees</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CityConnections({ city }: { city: CityWithDetails }) {
  const connections = [
    { destination: "Mumbai", trainTime: "12h", trainPrice: "₹500-2000", flightTime: "2h", flightPrice: "₹3000-8000" },
    { destination: "Delhi", trainTime: "16h", trainPrice: "₹600-2500", flightTime: "2.5h", flightPrice: "₹3500-9000" },
    { destination: "Bangalore", trainTime: "8h", trainPrice: "₹400-1500", flightTime: "1.5h", flightPrice: "₹2500-6000" },
    { destination: "Chennai", trainTime: "10h", trainPrice: "₹500-1800", flightTime: "2h", flightPrice: "₹3000-7000" },
  ];
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="font-serif text-3xl font-bold text-travel-blue mb-6">🚄 City Connections</h2>
      <p className="text-muted-navy text-lg mb-8">How to travel from {city.name} to other major Indian cities.</p>
      
      <div className="grid gap-6">
        {connections.map((connection, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-xl text-travel-blue">{city.name} → {connection.destination}</h3>
              <Badge className="bg-vintage-gold/10 text-vintage-gold">Popular Route</Badge>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-travel-blue/5 rounded-lg p-4">
                <h4 className="font-semibold text-travel-blue mb-2 flex items-center">
                  <Train className="mr-2 h-4 w-4" />
                  Train
                </h4>
                <div className="space-y-1 text-muted-navy text-sm">
                  <p>Duration: <span className="font-semibold">{connection.trainTime}</span></p>
                  <p>Price: <span className="font-semibold">{connection.trainPrice}</span></p>
                  <p>Frequency: Multiple daily trains</p>
                </div>
              </div>
              
              <div className="bg-sage-green/5 rounded-lg p-4">
                <h4 className="font-semibold text-sage-green mb-2 flex items-center">
                  <span className="mr-2">✈️</span>
                  Flight
                </h4>
                <div className="space-y-1 text-muted-navy text-sm">
                  <p>Duration: <span className="font-semibold">{connection.flightTime}</span></p>
                  <p>Price: <span className="font-semibold">{connection.flightPrice}</span></p>
                  <p>Frequency: 5-10 daily flights</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
