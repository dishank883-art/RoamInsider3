import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Wifi, Sun, Shield, Wine, Mountain, Coffee, Snowflake } from "lucide-react";

interface FilterButton {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilters: string[];
  setSelectedFilters: (filters: string[]) => void;
  advancedFilters: {
    minBudget: number;
    maxBudget: number;
    minInternetSpeed: number;
    minSafetyScore: number;
    climate: string;
    cityType: string;
  };
  setAdvancedFilters: (filters: any) => void;
}

export default function SearchFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedFilters, 
  setSelectedFilters,
  advancedFilters,
  setAdvancedFilters
}: SearchFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const filters: FilterButton[] = [
    { id: "budget", label: "Budget", icon: <span className="text-xs">₹</span> },
    { id: "wifi", label: "Fast WiFi", icon: <Wifi className="w-3 h-3" /> },
    { id: "warm", label: "Warm", icon: <Sun className="w-3 h-3" /> },
    { id: "cold", label: "Cold", icon: <Snowflake className="w-3 h-3" /> },
    { id: "safe", label: "Safe", icon: <Shield className="w-3 h-3" /> },
    { id: "nightlife", label: "Nightlife", icon: <Wine className="w-3 h-3" /> },
    { id: "nature", label: "Nature", icon: <Mountain className="w-3 h-3" /> },
    { id: "foodie", label: "Foodie", icon: <Coffee className="w-3 h-3" /> },
  ];

  const toggleFilter = (id: string) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter(f => f !== id));
    } else {
      setSelectedFilters([...selectedFilters, id]);
    }
  };

  const handleSearch = () => {
    // Search functionality is handled through the passed props
    console.log("Searching for:", searchQuery, "with filters:", selectedFilters);
  };

  return (
    <section className="bg-white shadow-lg -mt-10 relative z-20 mx-2 sm:mx-4 lg:mx-8 rounded-2xl border border-vintage-gold/20 overflow-hidden">
      <div className="p-3 sm:p-4 md:p-6 lg:p-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-navy h-5 w-5" />
            <Input 
              type="text" 
              placeholder="Search cities, regions, or experiences..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vintage-gold focus:border-transparent text-base sm:text-lg touch-manipulation min-h-[48px]"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button 
              onClick={handleSearch}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 px-4 sm:px-6 py-2 bg-vintage-gold text-white rounded-lg font-medium hover:bg-vintage-gold/90 transition-colors text-sm sm:text-base touch-manipulation"
            >
              <span className="hidden sm:inline">Search</span>
              <Search className="h-4 w-4 sm:hidden" />
            </Button>
          </div>
        </div>
        
        {/* Quick Filters */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 mb-6">
          {filters.map((filter) => {
            const isActive = selectedFilters.includes(filter.id);
            return (
              <Button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                variant={isActive ? "default" : "secondary"}
                className={`px-2 sm:px-3 md:px-4 py-3 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center space-x-1 touch-manipulation min-h-[44px] w-full ${
                  isActive
                    ? "bg-travel-blue text-white hover:bg-travel-blue/90" 
                    : "bg-gray-100 text-muted-navy hover:bg-gray-200"
                }`}
                data-testid={`filter-${filter.id}`}
              >
                {filter.icon}
              <span className="text-xs sm:text-sm whitespace-nowrap">{filter.label}</span>
              </Button>
            );
          })}
        </div>
        
        {/* Active Filters Display */}
        {(Object.values(advancedFilters).some(val => val && val !== 0 && val !== 100000 && val !== '') || selectedFilters.length > 0) && (
          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-travel-blue">🔍 Active Filters</h4>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setSelectedFilters([]);
                  setAdvancedFilters({ 
                    minBudget: 0, 
                    maxBudget: 100000, 
                    minInternetSpeed: 0, 
                    minSafetyScore: 0,
                    climate: '',
                    cityType: ''
                  });
                }}
                className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {/* Quick Filter Tags */}
              {selectedFilters.map(filter => (
                <span 
                  key={filter}
                  className="inline-flex items-center px-3 py-1 bg-travel-blue text-white text-xs font-medium rounded-full"
                >
                  {filter}
                  <button 
                    onClick={() => setSelectedFilters(selectedFilters.filter(f => f !== filter))}
                    className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                  >
                    ×
                  </button>
                </span>
              ))}
              
              {/* Advanced Filter Tags */}
              {advancedFilters.minBudget > 0 && (
                <span className="inline-flex items-center px-3 py-1 bg-vintage-gold/20 text-vintage-gold text-xs font-medium rounded-full">
                  Budget: ₹{advancedFilters.minBudget.toLocaleString()}+
                  <button 
                    onClick={() => setAdvancedFilters({...advancedFilters, minBudget: 0})}
                    className="ml-1 hover:bg-vintage-gold/20 rounded-full p-0.5 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {advancedFilters.maxBudget < 100000 && (
                <span className="inline-flex items-center px-3 py-1 bg-vintage-gold/20 text-vintage-gold text-xs font-medium rounded-full">
                  Max: ₹{advancedFilters.maxBudget.toLocaleString()}
                  <button 
                    onClick={() => setAdvancedFilters({...advancedFilters, maxBudget: 100000})}
                    className="ml-1 hover:bg-vintage-gold/20 rounded-full p-0.5 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {advancedFilters.minInternetSpeed > 0 && (
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  Speed: {advancedFilters.minInternetSpeed}+ Mbps
                  <button 
                    onClick={() => setAdvancedFilters({...advancedFilters, minInternetSpeed: 0})}
                    className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {advancedFilters.minSafetyScore > 0 && (
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Safety: {advancedFilters.minSafetyScore}+
                  <button 
                    onClick={() => setAdvancedFilters({...advancedFilters, minSafetyScore: 0})}
                    className="ml-1 hover:bg-green-200 rounded-full p-0.5 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {advancedFilters.climate && (
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                  {advancedFilters.climate}
                  <button 
                    onClick={() => setAdvancedFilters({...advancedFilters, climate: ''})}
                    className="ml-1 hover:bg-purple-200 rounded-full p-0.5 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
              {advancedFilters.cityType && (
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {advancedFilters.cityType}
                  <button 
                    onClick={() => setAdvancedFilters({...advancedFilters, cityType: ''})}
                    className="ml-1 hover:bg-gray-200 rounded-full p-0.5 transition-colors"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Advanced Filters Toggle */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-center">
            <Button 
              variant="ghost"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center space-x-2 text-travel-blue font-medium hover:text-travel-blue/80 transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span>Advanced Filters</span>
              {Object.values(advancedFilters).some(val => val && val !== 0 && val !== 100000 && val !== '') && (
                <span className="bg-vintage-gold text-white text-xs px-2 py-0.5 rounded-full ml-2">
                  {Object.values(advancedFilters).filter(val => val && val !== 0 && val !== 100000 && val !== '').length}
                </span>
              )}
              <svg 
                className={`h-4 w-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </Button>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showAdvanced && (
          <div className="mt-6 p-6 bg-gradient-to-br from-vintage-gold/5 to-travel-blue/5 rounded-xl border border-vintage-gold/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-travel-blue text-lg">🎯 Advanced Filters</h3>
              <div className="text-sm text-muted-navy">
                {Object.values(advancedFilters).some(val => val && val !== 0 && val !== 100000 && val !== '') && (
                  <span className="bg-vintage-gold/20 text-vintage-gold px-2 py-1 rounded-full text-xs font-medium">
                    {Object.values(advancedFilters).filter(val => val && val !== 0 && val !== 100000 && val !== '').length} active
                  </span>
                )}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Budget Filter */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-travel-blue mb-2">
                  💰 Monthly Budget (INR)
                </label>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Min (₹15,000)" 
                      type="number" 
                      value={advancedFilters.minBudget || ""}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters,
                        minBudget: parseInt(e.target.value) || 0
                      })}
                      className="text-sm"
                      data-testid="min-budget-input"
                    />
                    <Input 
                      placeholder="Max (₹50,000)" 
                      type="number" 
                      value={advancedFilters.maxBudget === 100000 ? "" : advancedFilters.maxBudget}
                      onChange={(e) => setAdvancedFilters({
                        ...advancedFilters,
                        maxBudget: parseInt(e.target.value) || 100000
                      })}
                      className="text-sm"
                      data-testid="max-budget-input"
                    />
                  </div>
                  <div className="flex space-x-1 text-xs">
                    <button 
                      onClick={() => setAdvancedFilters({...advancedFilters, minBudget: 10000, maxBudget: 20000})}
                      className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                    >
                      Budget (₹10-20k)
                    </button>
                    <button 
                      onClick={() => setAdvancedFilters({...advancedFilters, minBudget: 20000, maxBudget: 40000})}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                    >
                      Mid (₹20-40k)
                    </button>
                    <button 
                      onClick={() => setAdvancedFilters({...advancedFilters, minBudget: 40000, maxBudget: 100000})}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors"
                    >
                      Premium (₹40k+)
                    </button>
                  </div>
                </div>
              </div>

              {/* Internet Speed Filter */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-travel-blue mb-2">
                  📶 Internet Speed (Mbps)
                </label>
                <div className="space-y-2">
                  <Input 
                    placeholder="Min speed (25 Mbps)" 
                    type="number" 
                    value={advancedFilters.minInternetSpeed || ""}
                    onChange={(e) => setAdvancedFilters({
                      ...advancedFilters,
                      minInternetSpeed: parseInt(e.target.value) || 0
                    })}
                    className="text-sm"
                    data-testid="min-internet-speed-input"
                  />
                  <div className="flex space-x-1 text-xs">
                    <button 
                      onClick={() => setAdvancedFilters({...advancedFilters, minInternetSpeed: 10})}
                      className="px-2 py-1 bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition-colors"
                    >
                      Basic (10+)
                    </button>
                    <button 
                      onClick={() => setAdvancedFilters({...advancedFilters, minInternetSpeed: 25})}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                    >
                      Good (25+)
                    </button>
                    <button 
                      onClick={() => setAdvancedFilters({...advancedFilters, minInternetSpeed: 50})}
                      className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                    >
                      Excellent (50+)
                    </button>
                  </div>
                </div>
              </div>

              {/* Safety Score Filter */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-travel-blue mb-2">
                  🛡️ Safety Score (1-10)
                </label>
                <div className="space-y-2">
                  <Input 
                    placeholder="Min score (7)" 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={advancedFilters.minSafetyScore || ""}
                    onChange={(e) => setAdvancedFilters({
                      ...advancedFilters,
                      minSafetyScore: parseInt(e.target.value) || 0
                    })}
                    className="text-sm"
                    data-testid="min-safety-score-input"
                  />
                  <div className="flex space-x-1 text-xs">
                    <button 
                      onClick={() => setAdvancedFilters({...advancedFilters, minSafetyScore: 6})}
                      className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition-colors"
                    >
                      Good (6+)
                    </button>
                    <button 
                      onClick={() => setAdvancedFilters({...advancedFilters, minSafetyScore: 8})}
                      className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
                    >
                      Very Safe (8+)
                    </button>
                  </div>
                </div>
              </div>

              {/* Climate Filter */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-travel-blue mb-2">
                  🌡️ Climate Preference
                </label>
                <select 
                  value={advancedFilters.climate || ""}
                  onChange={(e) => setAdvancedFilters({
                    ...advancedFilters,
                    climate: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                  data-testid="climate-filter"
                >
                  <option value="">Any Climate</option>
                  <option value="tropical">🏖️ Tropical/Beach</option>
                  <option value="moderate">🌤️ Moderate (20-25°C)</option>
                  <option value="cool">❄️ Cool/Mountain</option>
                  <option value="hot">☀️ Hot (25°C+)</option>
                </select>
              </div>

              {/* City Type Filter */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-travel-blue mb-2">
                  🏙️ City Type
                </label>
                <select 
                  value={advancedFilters.cityType || ""}
                  onChange={(e) => setAdvancedFilters({
                    ...advancedFilters,
                    cityType: e.target.value
                  })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                  data-testid="city-type-filter"
                >
                  <option value="">Any Type</option>
                  <option value="metro">🏙️ Metro Cities</option>
                  <option value="tech-hub">💻 Tech Hubs</option>
                  <option value="coastal">🏖️ Coastal Cities</option>
                  <option value="hill-station">⛰️ Hill Stations</option>
                  <option value="heritage">🏛️ Heritage Cities</option>
                  <option value="startup">🚀 Startup Hubs</option>
                </select>
              </div>

              {/* Filter Results Preview */}
              <div className="md:col-span-2 lg:col-span-3">
                <div className="bg-white/60 rounded-lg p-4 border border-vintage-gold/20">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-navy">
                      <span className="font-medium">Active Filters:</span>
                      {advancedFilters.minBudget > 0 && (
                        <span className="ml-2 px-2 py-1 bg-vintage-gold/20 text-vintage-gold rounded text-xs">
                          Budget: ₹{advancedFilters.minBudget.toLocaleString()}+
                        </span>
                      )}
                      {advancedFilters.maxBudget < 100000 && (
                        <span className="ml-2 px-2 py-1 bg-vintage-gold/20 text-vintage-gold rounded text-xs">
                          Max: ₹{advancedFilters.maxBudget.toLocaleString()}
                        </span>
                      )}
                      {advancedFilters.minInternetSpeed > 0 && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          Speed: {advancedFilters.minInternetSpeed}+ Mbps
                        </span>
                      )}
                      {advancedFilters.minSafetyScore > 0 && (
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          Safety: {advancedFilters.minSafetyScore}+
                        </span>
                      )}
                      {advancedFilters.climate && (
                        <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                          {advancedFilters.climate}
                        </span>
                      )}
                      {advancedFilters.cityType && (
                        <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {advancedFilters.cityType}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <Button 
                variant="outline" 
                onClick={() => {
                  setAdvancedFilters({ 
                    minBudget: 0, 
                    maxBudget: 100000, 
                    minInternetSpeed: 0, 
                    minSafetyScore: 0,
                    climate: '',
                    cityType: ''
                  });
                }}
                className="text-red-600 border-red-200 hover:bg-red-50"
                data-testid="clear-advanced-filters"
              >
                🗑️ Clear All Filters
              </Button>
              <div className="space-x-3">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAdvanced(false)}
                  data-testid="close-advanced-filters"
                >
                  Close
                </Button>
                <Button 
                  onClick={() => setShowAdvanced(false)}
                  className="bg-vintage-gold hover:bg-vintage-gold/90 text-travel-blue"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
