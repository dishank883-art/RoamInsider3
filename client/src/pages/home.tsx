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
import { useState, useMemo } from "react";
import type { City } from "@shared/schema";
import { staticCitiesData, getAllTags } from "@/lib/static-cities-data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState<[number, number]>([0, 100000]);
  const [showAllCities, setShowAllCities] = useState(false);

  const { data: allCities, isLoading } = useQuery<City[]>({
    queryKey: ["/api/cities"],
    queryFn: async () => {
      try {
        const res = await fetch('/api/cities');
        if (!res.ok) {
          throw new Error('API not available');
        }
        return await res.json();
      } catch (error) {
        // Fallback to static data for deployment
        console.log('Using static data fallback');
        return staticCitiesData;
      }
    },
  });

  // Filter and search cities
  const filteredCities = useMemo(() => {
    if (!allCities) return [];

    let filtered = allCities.filter(city => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !city.name.toLowerCase().includes(query) &&
          !city.state.toLowerCase().includes(query) &&
          !city.description.toLowerCase().includes(query) &&
          !city.tags?.some(tag => tag.toLowerCase().includes(query))
        ) {
          return false;
        }
      }

      // Tags filter
      if (selectedTags.length > 0) {
        if (!city.tags?.some(tag => selectedTags.includes(tag))) {
          return false;
        }
      }

      return true;
    });

    // Show only popular cities initially, or all if requested
    if (!showAllCities && !searchQuery && selectedTags.length === 0) {
      filtered = filtered.filter(city => city.isPopular);
    }

    return filtered;
  }, [allCities, searchQuery, selectedTags, budgetRange, showAllCities]);

  // Get all unique tags for filter options
  const allTags = useMemo(() => {
    if (!allCities) return getAllTags();
    const tags = new Set<string>();
    allCities.forEach(city => {
      city.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [allCities]);

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <HeroSection />
      <SearchFilters />
      
      {/* Featured Cities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-travel-blue mb-4">
            {showAllCities || searchQuery || selectedTags.length > 0 
              ? `Found ${filteredCities.length} Cities` 
              : "Popular Digital Nomad Destinations"
            }
          </h2>
          <p className="text-xl text-muted-navy max-w-3xl mx-auto">
            {showAllCities || searchQuery || selectedTags.length > 0 
              ? "Explore these amazing destinations perfect for digital nomads"
              : "Handpicked cities with thriving nomad communities, excellent infrastructure, and unique cultural experiences"
            }
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
          ) : filteredCities && filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-navy text-lg">No cities match your search criteria.</p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTags([]);
                  setShowAllCities(false);
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
        
        {!showAllCities && !searchQuery && selectedTags.length === 0 && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAllCities(true)}
              variant="outline" 
              size="lg"
              className="px-8 py-4 border-2 border-travel-blue text-travel-blue rounded-xl font-semibold text-lg hover:bg-travel-blue hover:text-white transition-all duration-200"
            >
              View All {allCities?.length || 0}+ Cities
            </Button>
          </div>
        )}
      </section>

      <FeaturesSection />
      <CommunitySection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
