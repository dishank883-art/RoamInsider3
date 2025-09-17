import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import CityCard from "@/components/ui/city-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function PopularDestinations() {
  const { data: allCities, isLoading } = useQuery({
    queryKey: ['/api/cities']
  });

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  // Filter for popular destinations (those with higher nomad score or popular tags)
  const popularCities = allCities?.filter((city: any) => 
    city.nomadScore >= 4.0 || 
    city.tags?.includes('popular') ||
    ['mumbai', 'bangalore', 'goa', 'pune', 'new-delhi', 'pondicherry'].includes(city.slug)
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
              Popular Destinations
              <span className="text-vintage-gold font-script text-4xl lg:text-5xl block mt-2">
                Trending Hotspots
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover the most sought-after destinations among digital nomads, featuring excellent infrastructure and vibrant communities.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-blue-100 mb-8">
              <TrendingUp className="h-5 w-5 text-vintage-gold" />
              <span className="font-semibold">{popularCities.length} Popular Cities</span>
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
            popularCities.map((city: any) => (
              <CityCard key={city.id} city={city} />
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
