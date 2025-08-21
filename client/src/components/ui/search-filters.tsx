import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Wifi, Sun, Shield, Wine, Mountain, Coffee } from "lucide-react";

interface FilterButton {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}

export default function SearchFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterButton[]>([
    { id: "budget", label: "Budget", icon: <span className="text-xs">₹</span>, active: true },
    { id: "wifi", label: "Fast WiFi", icon: <Wifi className="w-3 h-3" />, active: false },
    { id: "warm", label: "Warm", icon: <Sun className="w-3 h-3" />, active: false },
    { id: "safe", label: "Safe", icon: <Shield className="w-3 h-3" />, active: false },
    { id: "nightlife", label: "Nightlife", icon: <Wine className="w-3 h-3" />, active: false },
    { id: "nature", label: "Nature", icon: <Mountain className="w-3 h-3" />, active: false },
    { id: "foodie", label: "Foodie", icon: <Coffee className="w-3 h-3" />, active: false },
    { id: "more", label: "More", icon: <Filter className="w-3 h-3" />, active: false },
  ]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleFilter = (id: string) => {
    setFilters(prev => prev.map(filter => 
      filter.id === id ? { ...filter, active: !filter.active } : filter
    ));
  };

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery, "with filters:", filters.filter(f => f.active));
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
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              variant={filter.active ? "default" : "secondary"}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1 ${
                filter.active 
                  ? "bg-travel-blue text-white hover:bg-travel-blue/90" 
                  : "bg-gray-100 text-muted-navy hover:bg-gray-200"
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </Button>
          ))}
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
                  <Input placeholder="Min" type="number" />
                  <Input placeholder="Max" type="number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-navy mb-2">
                  Internet Speed (Mbps)
                </label>
                <Input placeholder="Minimum speed" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-navy mb-2">
                  Safety Score
                </label>
                <Input placeholder="Minimum score (1-10)" type="number" min="1" max="10" />
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setShowAdvanced(false)}>
                Cancel
              </Button>
              <Button className="bg-vintage-gold text-white hover:bg-vintage-gold/90">
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
