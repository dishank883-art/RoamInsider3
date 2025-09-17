import { useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import CityCard from "@/components/ui/city-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Laptop } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function TechHubs() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const { data: allCities, isLoading } = useQuery({
    queryKey: ['/api/cities']
  });

  // Filter for tech hubs (cities with good internet, coworking spaces, tech scene)
  const techHubs = allCities?.filter((city: any) => 
    city.internetSpeed >= 50 ||
    city.tags?.includes('tech-hub') ||
    ['mumbai', 'bangalore', 'pune', 'new-delhi'].includes(city.slug)
  ) || [];

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
            Back
          </Button>
          
          <div className="text-center text-white">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Tech Hubs
              <span className="text-vintage-gold font-script text-4xl lg:text-5xl block mt-2">
                Innovation Centers
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect with India's thriving tech ecosystem in cities with excellent infrastructure, startup scenes, and networking opportunities.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-blue-100 mb-8">
              <Laptop className="h-5 w-5 text-vintage-gold" />
              <span className="font-semibold">{techHubs.length} Tech Hubs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            techHubs.map((city: any) => (
              <CityCard key={city.id} city={city} />
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
