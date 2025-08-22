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
    <section className="bg-white shadow-lg -mt-10 relative z-20 mx-4 sm:mx-6 lg:mx-8 rounded-2xl border border-vintage-gold/20">
      <div className="p-6 lg:p-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-navy h-5 w-5" />
            <Input 
              type="text" 
              placeholder="Search cities, regions, or experiences..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-vintage-gold focus:border-transparent text-lg"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button 
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-vintage-gold text-white rounded-lg font-medium hover:bg-vintage-gold/90 transition-colors"
            >
              Search
            </Button>
          </div>
        </div>
        
        {/* Quick Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
          {filters.map((filter) => {
            const isActive = selectedFilters.includes(filter.id);
            return (
              <Button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                variant={isActive ? "default" : "secondary"}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1 ${
                  isActive
                    ? "bg-travel-blue text-white hover:bg-travel-blue/90" 
                    : "bg-gray-100 text-muted-navy hover:bg-gray-200"
                }`}
                data-testid={`filter-${filter.id}`}
              >
                {filter.icon}
              <span>{filter.label}</span>
              </Button>
            );
          })}
        </div>
        
        {/* Advanced Filters Toggle */}
        <div className="border-t border-gray-200 pt-4">
          <Button 
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center space-x-2 text-travel-blue font-medium hover:text-travel-blue/80 transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>Advanced Filters</span>
            <svg 
              className={`h-4 w-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </Button>
        </div>

        {/* Advanced Filters Panel */}
        {showAdvanced && (
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-travel-blue mb-4">Advanced Filters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-muted-navy mb-2">
                  Monthly Budget (INR)
                </label>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Min" 
                    type="number" 
                    value={advancedFilters.minBudget || ""}
                    onChange={(e) => setAdvancedFilters({
                      ...advancedFilters,
                      minBudget: parseInt(e.target.value) || 0
                    })}
                    data-testid="min-budget-input"
                  />
                  <Input 
                    placeholder="Max" 
                    type="number" 
                    value={advancedFilters.maxBudget === 100000 ? "" : advancedFilters.maxBudget}
                    onChange={(e) => setAdvancedFilters({
                      ...advancedFilters,
                      maxBudget: parseInt(e.target.value) || 100000
                    })}
                    data-testid="max-budget-input"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-navy mb-2">
                  Internet Speed (Mbps)
                </label>
                <Input 
                  placeholder="Minimum speed" 
                  type="number" 
                  value={advancedFilters.minInternetSpeed || ""}
                  onChange={(e) => setAdvancedFilters({
                    ...advancedFilters,
                    minInternetSpeed: parseInt(e.target.value) || 0
                  })}
                  data-testid="min-internet-speed-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-navy mb-2">
                  Safety Score
                </label>
                <Input 
                  placeholder="Minimum score (1-10)" 
                  type="number" 
                  min="1" 
                  max="10" 
                  value={advancedFilters.minSafetyScore || ""}
                  onChange={(e) => setAdvancedFilters({
                    ...advancedFilters,
                    minSafetyScore: parseInt(e.target.value) || 0
                  })}
                  data-testid="min-safety-score-input"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <Button 
                variant="outline" 
                onClick={() => {
                  setAdvancedFilters({ minBudget: 0, maxBudget: 100000, minInternetSpeed: 0, minSafetyScore: 0 });
                  setShowAdvanced(false);
                }}
                data-testid="clear-advanced-filters"
              >
                Clear Filters
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowAdvanced(false)}
                data-testid="close-advanced-filters"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
