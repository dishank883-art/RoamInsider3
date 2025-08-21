import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import SearchFilters from "@/components/ui/search-filters";
import FeaturesSection from "@/components/ui/features-section";
import CommunitySection from "@/components/ui/community-section";
import NewsletterSection from "@/components/ui/newsletter-section";
import Footer from "@/components/ui/footer";
import CityCard from "@/components/ui/city-card";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { City } from "@shared/schema";

export default function Home() {
  const { data: cities, isLoading } = useQuery<City[]>({
    queryKey: ["/api/cities", { popular: true }],
    queryFn: () => fetch('/api/cities?popular=true').then(res => res.json()),
  });

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <HeroSection />
      <SearchFilters />
      
      {/* Featured Cities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-travel-blue mb-4">
            Popular Digital Nomad Destinations
          </h2>
          <p className="text-xl text-muted-navy max-w-3xl mx-auto">
            Handpicked cities with thriving nomad communities, excellent infrastructure, and unique cultural experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                  <Skeleton className="h-12 w-full" />
                </div>
              </div>
            ))
          ) : cities ? (
            cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-navy text-lg">No cities available at the moment.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 border-2 border-travel-blue text-travel-blue rounded-xl font-semibold text-lg hover:bg-travel-blue hover:text-white transition-all duration-200"
          >
            View All 50+ Cities
          </Button>
        </div>
      </section>

      <FeaturesSection />
      <CommunitySection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
