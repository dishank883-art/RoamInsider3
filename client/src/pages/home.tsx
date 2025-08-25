import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import SearchFilters from "@/components/ui/search-filters";
import FeaturesSection from "@/components/ui/features-section";
import CommunitySection from "@/components/ui/community-section";
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
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState<[number, number]>([0, 100000]);
  const [advancedFilters, setAdvancedFilters] = useState({
    minBudget: 0,
    maxBudget: 100000,
    minInternetSpeed: 0,
    minSafetyScore: 0,
    climate: '',
    cityType: ''
  });
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

      // Quick filter handling for better functionality
      if (selectedTags.length > 0) {
        let quickFilterMatch = false;
        
        for (const filter of selectedTags) {
          switch (filter) {
            case 'budget':
              // Budget cities: Smaller cities, hill stations, spiritual places
              if (city.tags?.some(tag => tag.toLowerCase().includes('budget')) ||
                  ['kasol', 'bir', 'dharamkot', 'tosh', 'rishikesh', 'mussoorie', 'dehradun', 'ziro', 'darjeeling'].includes(city.slug.toLowerCase())) {
                quickFilterMatch = true;
              }
              break;
            case 'warm':
              // Warm cities: Coastal, southern India, tropical
              if (city.tags?.some(tag => 
                tag.toLowerCase().includes('beach') || 
                tag.toLowerCase().includes('coastal') ||
                tag.toLowerCase().includes('tropical')
              ) || ['goa', 'varkala', 'alleppey', 'kochi', 'pondicherry', 'mumbai', 'pune', 'bangalore'].includes(city.slug.toLowerCase())) {
                quickFilterMatch = true;
              }
              break;
            case 'cold':
              // Cold cities: Hill stations, northern mountain regions
              if (city.tags?.some(tag => 
                tag.toLowerCase().includes('hill') || 
                tag.toLowerCase().includes('mountain') ||
                tag.toLowerCase().includes('cold')
              ) || ['mussoorie', 'dehradun', 'kasol', 'bir', 'dharamkot', 'tosh', 'ziro', 'darjeeling'].includes(city.slug.toLowerCase())) {
                quickFilterMatch = true;
              }
              break;
            case 'wifi':
              // Good WiFi cities: Tech hubs, major cities
              if (city.tags?.some(tag => 
                tag.toLowerCase().includes('tech') || 
                tag.toLowerCase().includes('digital')
              ) || ['mumbai', 'bangalore', 'pune', 'new-delhi', 'goa', 'pondicherry'].includes(city.slug.toLowerCase())) {
                quickFilterMatch = true;
              }
              break;
            case 'safe':
              // Safe cities: Well-developed areas, touristy places
              if (parseFloat(city.rating || '0') >= 4.0 || 
                  ['pondicherry', 'rishikesh', 'mussoorie', 'pune', 'bangalore', 'udaipur'].includes(city.slug.toLowerCase())) {
                quickFilterMatch = true;
              }
              break;
            case 'nightlife':
              // Nightlife cities: Major metros, party destinations
              if (['mumbai', 'bangalore', 'pune', 'goa', 'new-delhi'].includes(city.slug.toLowerCase())) {
                quickFilterMatch = true;
              }
              break;
            case 'nature':
              // Nature cities: Hill stations, coastal, spiritual
              if (city.tags?.some(tag => 
                tag.toLowerCase().includes('nature') || 
                tag.toLowerCase().includes('hill') ||
                tag.toLowerCase().includes('mountain') ||
                tag.toLowerCase().includes('beach') ||
                tag.toLowerCase().includes('spiritual')
              ) || ['kasol', 'bir', 'dharamkot', 'tosh', 'rishikesh', 'mussoorie', 'dehradun', 'ziro', 'darjeeling', 'varkala', 'alleppey'].includes(city.slug.toLowerCase())) {
                quickFilterMatch = true;
              }
              break;
            case 'foodie':
              // Foodie cities: Cultural hubs, diverse cuisine
              if (['mumbai', 'new-delhi', 'kolkata', 'kochi', 'bangalore', 'pondicherry', 'udaipur'].includes(city.slug.toLowerCase())) {
                quickFilterMatch = true;
              }
              break;
            default:
              // For other tags, check if city has matching tags
              if (city.tags?.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))) {
                quickFilterMatch = true;
              }
          }
        }
        
        if (!quickFilterMatch) {
          return false;
        }
      }

      // Advanced filters
      if (advancedFilters.minBudget > 0 || advancedFilters.maxBudget < 100000) {
        // Budget filtering based on city characteristics and actual data
        let avgCost = 25000; // Default mid-range cost
        
        // Budget-friendly cities (smaller places, hill stations)
        if (['kasol', 'bir', 'dharamkot', 'tosh', 'rishikesh', 'mussoorie', 'dehradun', 'ziro', 'darjeeling'].includes(city.slug.toLowerCase())) {
          avgCost = 15000; // Budget range: 10k-20k
        }
        // Major metros and tech hubs
        else if (['mumbai', 'bangalore', 'new-delhi'].includes(city.slug.toLowerCase())) {
          avgCost = 45000; // Higher cost: 35k-50k
        }
        // Mid-tier cities
        else if (['pune', 'goa', 'pondicherry', 'kochi', 'udaipur', 'kolkata'].includes(city.slug.toLowerCase())) {
          avgCost = 30000; // Mid-high: 25k-35k
        }
        
        if (avgCost < advancedFilters.minBudget || avgCost > advancedFilters.maxBudget) {
          return false;
        }
      }

      if (advancedFilters.minSafetyScore > 0) {
        // Map safety based on city characteristics and rating
        let safetyScore = city.rating ? parseFloat(city.rating) : 6;
        
        // Cities marked as safe get higher scores
        if (city.tags?.some(tag => tag.toLowerCase().includes('safe'))) {
          safetyScore = Math.max(safetyScore, 8);
        }
        
        // Tech hubs typically have better safety infrastructure
        if (city.tags?.some(tag => tag.toLowerCase().includes('tech-hub'))) {
          safetyScore = Math.max(safetyScore, 7.5);
        }
        
        if (safetyScore < advancedFilters.minSafetyScore) {
          return false;
        }
      }

      // Internet Speed filtering (NOW IMPLEMENTED!)
      if (advancedFilters.minInternetSpeed > 0) {
        let internetSpeed = 25; // Default moderate speed
        
        // High-speed internet cities (tech hubs, metros)
        if (city.tags?.some(tag => 
          tag.toLowerCase().includes('tech-hub') ||
          tag.toLowerCase().includes('startup') ||
          city.name.toLowerCase().includes('bangalore') ||
          city.name.toLowerCase().includes('pune') ||
          city.name.toLowerCase().includes('hyderabad')
        )) {
          internetSpeed = 75; // High speed: 50-100 Mbps
        }
        // Metro cities usually have good internet
        else if (city.tags?.some(tag => 
          tag.toLowerCase().includes('metro') ||
          city.name.toLowerCase().includes('mumbai') ||
          city.name.toLowerCase().includes('delhi') ||
          city.name.toLowerCase().includes('kolkata')
        )) {
          internetSpeed = 50; // Good speed: 25-75 Mbps
        }
        // Tourist destinations often have moderate internet
        else if (city.tags?.some(tag => 
          tag.toLowerCase().includes('tourism') ||
          tag.toLowerCase().includes('beaches') ||
          tag.toLowerCase().includes('heritage')
        )) {
          internetSpeed = 30; // Moderate: 15-45 Mbps
        }
        // Hill stations and remote areas may have slower internet
        else if (city.tags?.some(tag => 
          tag.toLowerCase().includes('hill') ||
          tag.toLowerCase().includes('mountain') ||
          tag.toLowerCase().includes('remote')
        )) {
          internetSpeed = 15; // Basic: 10-25 Mbps
        }
        
        if (internetSpeed < advancedFilters.minInternetSpeed) {
          return false;
        }
      }

      // Climate filtering
      if (advancedFilters.climate) {
        const cityTags = city.tags || [];
        const climate = advancedFilters.climate;
        let hasClimateMatch = false;
        
        switch (climate) {
          case 'tropical':
            hasClimateMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('beach') ||
              tag.toLowerCase().includes('coastal') ||
              tag.toLowerCase().includes('tropical') ||
              city.name.toLowerCase().includes('goa') ||
              city.name.toLowerCase().includes('kerala')
            );
            break;
          case 'moderate':
            hasClimateMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('moderate') ||
              tag.toLowerCase().includes('pleasant') ||
              city.name.toLowerCase().includes('bangalore') ||
              city.name.toLowerCase().includes('pune')
            );
            break;
          case 'cool':
            hasClimateMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('cool') ||
              tag.toLowerCase().includes('hill') ||
              tag.toLowerCase().includes('mountain') ||
              city.name.toLowerCase().includes('darjeeling') ||
              city.name.toLowerCase().includes('shimla')
            );
            break;
          case 'hot':
            hasClimateMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('hot') ||
              tag.toLowerCase().includes('desert') ||
              city.name.toLowerCase().includes('rajasthan') ||
              city.name.toLowerCase().includes('delhi')
            );
            break;
        }
        
        if (!hasClimateMatch) {
          return false;
        }
      }

      // City Type filtering
      if (advancedFilters.cityType) {
        const cityTags = city.tags || [];
        const cityType = advancedFilters.cityType;
        let hasCityTypeMatch = false;
        
        switch (cityType) {
          case 'metro':
            hasCityTypeMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('metro') ||
              tag.toLowerCase().includes('city') ||
              city.name.toLowerCase().includes('mumbai') ||
              city.name.toLowerCase().includes('delhi') ||
              city.name.toLowerCase().includes('kolkata') ||
              city.name.toLowerCase().includes('chennai')
            );
            break;
          case 'tech-hub':
            hasCityTypeMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('tech') ||
              tag.toLowerCase().includes('startup') ||
              tag.toLowerCase().includes('digital') ||
              city.name.toLowerCase().includes('bangalore') ||
              city.name.toLowerCase().includes('pune') ||
              city.name.toLowerCase().includes('hyderabad')
            );
            break;
          case 'coastal':
            hasCityTypeMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('coastal') ||
              tag.toLowerCase().includes('beach') ||
              tag.toLowerCase().includes('sea') ||
              city.name.toLowerCase().includes('goa') ||
              city.name.toLowerCase().includes('mumbai') ||
              city.name.toLowerCase().includes('kochi')
            );
            break;
          case 'hill-station':
            hasCityTypeMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('hill') ||
              tag.toLowerCase().includes('mountain') ||
              city.name.toLowerCase().includes('darjeeling') ||
              city.name.toLowerCase().includes('shimla') ||
              city.name.toLowerCase().includes('mussoorie')
            );
            break;
          case 'heritage':
            hasCityTypeMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('heritage') ||
              tag.toLowerCase().includes('historical') ||
              tag.toLowerCase().includes('culture') ||
              city.name.toLowerCase().includes('jaipur') ||
              city.name.toLowerCase().includes('udaipur') ||
              city.name.toLowerCase().includes('agra')
            );
            break;
          case 'startup':
            hasCityTypeMatch = cityTags.some(tag => 
              tag.toLowerCase().includes('startup') ||
              tag.toLowerCase().includes('entrepreneur') ||
              tag.toLowerCase().includes('innovation') ||
              city.name.toLowerCase().includes('bangalore') ||
              city.name.toLowerCase().includes('pune')
            );
            break;
        }
        
        if (!hasCityTypeMatch) {
          return false;
        }
      }

      // Filter categories (Budget, WiFi, Weather, etc.)
      if (selectedFilters.length > 0) {
        const cityTags = city.tags || [];
        
        for (const filter of selectedFilters) {
          let hasFilterMatch = false;
          
          switch (filter) {
            case 'budget':
              hasFilterMatch = cityTags.some(tag => 
                tag.toLowerCase().includes('budget') || 
                tag.toLowerCase().includes('affordable') ||
                tag.toLowerCase().includes('cheap')
              );
              break;
            case 'wifi':
              hasFilterMatch = cityTags.some(tag => 
                tag.toLowerCase().includes('wifi') || 
                tag.toLowerCase().includes('internet') ||
                tag.toLowerCase().includes('digital nomad') ||
                tag.toLowerCase().includes('coworking')
              );
              break;
            case 'warm':
              hasFilterMatch = cityTags.some(tag => 
                tag.toLowerCase().includes('warm') || 
                tag.toLowerCase().includes('tropical') ||
                tag.toLowerCase().includes('beach') ||
                tag.toLowerCase().includes('hot')
              );
              break;
            case 'cold':
              hasFilterMatch = cityTags.some(tag => 
                tag.toLowerCase().includes('cold') || 
                tag.toLowerCase().includes('mountain') ||
                tag.toLowerCase().includes('hill') ||
                tag.toLowerCase().includes('winter')
              );
              break;
            case 'safe':
              hasFilterMatch = cityTags.some(tag => 
                tag.toLowerCase().includes('safe') || 
                tag.toLowerCase().includes('secure') ||
                tag.toLowerCase().includes('family')
              );
              break;
            case 'nightlife':
              hasFilterMatch = cityTags.some(tag => 
                tag.toLowerCase().includes('nightlife') || 
                tag.toLowerCase().includes('party') ||
                tag.toLowerCase().includes('bars') ||
                tag.toLowerCase().includes('clubs')
              );
              break;
            case 'nature':
              hasFilterMatch = cityTags.some(tag => 
                tag.toLowerCase().includes('nature') || 
                tag.toLowerCase().includes('outdoor') ||
                tag.toLowerCase().includes('trekking') ||
                tag.toLowerCase().includes('adventure') ||
                tag.toLowerCase().includes('mountain') ||
                tag.toLowerCase().includes('forest')
              );
              break;
            case 'foodie':
              hasFilterMatch = cityTags.some(tag => 
                tag.toLowerCase().includes('food') || 
                tag.toLowerCase().includes('cuisine') ||
                tag.toLowerCase().includes('culinary') ||
                tag.toLowerCase().includes('restaurant')
              );
              break;
            default:
              hasFilterMatch = true;
          }
          
          if (!hasFilterMatch) {
            return false;
          }
        }
      }

      return true;
    });

    // Show only popular cities initially, or all if requested
    const hasAnyFilter = searchQuery || selectedTags.length > 0 || selectedFilters.length > 0 || 
                        advancedFilters.minBudget > 0 || advancedFilters.maxBudget < 100000 || 
                        advancedFilters.minInternetSpeed > 0 || advancedFilters.minSafetyScore > 0 ||
                        advancedFilters.climate || advancedFilters.cityType;
                        
    if (!showAllCities && !hasAnyFilter) {
      filtered = filtered.filter(city => city.isPopular);
    }

    return filtered;
  }, [allCities, searchQuery, selectedTags, selectedFilters, advancedFilters, budgetRange, showAllCities]);

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
      <SearchFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        advancedFilters={advancedFilters}
        setAdvancedFilters={setAdvancedFilters}
      />
      
      {/* Featured Cities Section */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16" data-cities-section>
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-travel-blue mb-4">
            {showAllCities || searchQuery || selectedTags.length > 0 || selectedFilters.length > 0 || 
             advancedFilters.minBudget > 0 || advancedFilters.maxBudget < 100000 || 
             advancedFilters.minInternetSpeed > 0 || advancedFilters.minSafetyScore > 0 ||
             advancedFilters.climate || advancedFilters.cityType
              ? `Found ${filteredCities.length} Cities` 
              : "Popular Digital Nomad Destinations"
            }
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-navy max-w-3xl mx-auto px-2">
            {showAllCities || searchQuery || selectedTags.length > 0 || selectedFilters.length > 0 ||
             advancedFilters.minBudget > 0 || advancedFilters.maxBudget < 100000 || 
             advancedFilters.minInternetSpeed > 0 || advancedFilters.minSafetyScore > 0 ||
             advancedFilters.climate || advancedFilters.cityType
              ? "Explore these amazing destinations perfect for digital nomads"
              : "Handpicked cities with thriving nomad communities, excellent infrastructure, and unique cultural experiences"
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
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
                  setSelectedFilters([]);
                  setAdvancedFilters({ minBudget: 0, maxBudget: 100000, minInternetSpeed: 0, minSafetyScore: 0, climate: '', cityType: '' });
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
        
        {!showAllCities && !searchQuery && selectedTags.length === 0 && selectedFilters.length === 0 && 
         advancedFilters.minBudget === 0 && advancedFilters.maxBudget === 100000 && 
         advancedFilters.minInternetSpeed === 0 && advancedFilters.minSafetyScore === 0 &&
         !advancedFilters.climate && !advancedFilters.cityType && (
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

      {/* Enhanced Discord Community CTA Section */}
      <section className="bg-gradient-to-br from-travel-blue via-travel-blue to-muted-navy py-12 sm:py-16 lg:py-20 relative overflow-hidden mx-2 sm:mx-0">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-vintage-gold/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-vintage-gold/5 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-vintage-gold/20 text-vintage-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🔥 Join 200+ Active Members
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Get <span className="text-vintage-gold">Instant Access</span> to India's Largest Digital Nomad Community
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-cream/90 mb-6 sm:mb-8 leading-relaxed">
                Skip the research. Get real-time advice from nomads living in your next destination. 
                From finding the best coworking spaces to avoiding tourist traps.
              </p>
              
              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-vintage-gold text-sm">💬</span>
                  </div>
                  <span className="text-cream text-sm">Live City Updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-vintage-gold text-sm">🏠</span>
                  </div>
                  <span className="text-cream text-sm">Accommodation Tips</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-vintage-gold text-sm">🤝</span>
                  </div>
                  <span className="text-cream text-sm">Local Meetups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-vintage-gold text-sm">⚡</span>
                  </div>
                  <span className="text-cream text-sm">Instant Support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                <Button 
                  asChild
                  size="lg"
                  className="bg-vintage-gold hover:bg-vintage-gold/90 text-travel-blue font-bold px-10 py-5 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  <a 
                    href="https://discord.gg/Y39GGpQtMm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="join-discord-community"
                    className="flex items-center space-x-2"
                  >
                    <span>🚀</span>
                    <span>Join Free on Discord</span>
                  </a>
                </Button>
                
                <div className="text-center sm:text-left">
                  <p className="text-cream/70 text-sm">
                    ✅ 100% Free Forever
                  </p>
                  <p className="text-cream/70 text-sm">
                    ✅ No Spam, Just Value
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Content - Social Proof */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Join Today & Get:</h3>
                  <div className="h-1 w-20 bg-vintage-gold mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-white/5 rounded-xl p-4">
                    <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center text-travel-blue font-bold text-lg">
                      📱
                    </div>
                    <div>
                      <p className="text-white font-semibold">Exclusive City Guides</p>
                      <p className="text-cream/80 text-sm">Insider tips from 50+ Indian cities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/5 rounded-xl p-4">
                    <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center text-travel-blue font-bold text-lg">
                      💸
                    </div>
                    <div>
                      <p className="text-white font-semibold">Cost Savings</p>
                      <p className="text-cream/80 text-sm">Save 30-50% on accommodation & food</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/5 rounded-xl p-4">
                    <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center text-travel-blue font-bold text-lg">
                      🎯
                    </div>
                    <div>
                      <p className="text-white font-semibold">Skip The Research</p>
                      <p className="text-cream/80 text-sm">Get answers in minutes, not hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-vintage-gold font-semibold text-lg">200+ Members Can't Be Wrong</p>
                  <div className="flex justify-center space-x-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-vintage-gold text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-cream/70 text-sm mt-1">Average 4.7/5 rating from members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
