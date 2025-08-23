import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import CityCard from "@/components/ui/city-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function AllCities() {
  const { data: cities, isLoading } = useQuery({
    queryKey: ['/api/cities']
  });

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
              All Cities
              <span className="text-vintage-gold font-script text-4xl lg:text-5xl block mt-2">
                Complete Collection
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore every destination in our comprehensive database - from bustling metropolises to tranquil hill stations.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-blue-100 mb-8">
              <MapPin className="h-5 w-5 text-vintage-gold" />
              <span className="font-semibold">{cities?.length || 20}+ Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {isLoading ? (
            Array.from({ length: 12 }).map((_, i) => (
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
            cities?.map((city: any) => (
              <CityCard key={city.id} city={city} />
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}