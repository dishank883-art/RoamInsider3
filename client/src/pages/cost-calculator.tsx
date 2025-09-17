import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Home, Coffee, Car, Wifi, Heart, Plane } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CostBreakdown {
  housing: number;
  food: number;
  transport: number;
  entertainment: number;
  coworking: number;
  utilities: number;
  miscellaneous: number;
  total: number;
}

const cityData: Record<string, { multiplier: number; description: string }> = {
  mumbai: { multiplier: 1.8, description: "Premium financial hub with high living costs" },
  bangalore: { multiplier: 1.5, description: "Tech capital with moderate to high costs" },
  pune: { multiplier: 1.3, description: "Student city with reasonable living costs" },
  "new-delhi": { multiplier: 1.6, description: "Capital city with high accommodation costs" },
  goa: { multiplier: 1.4, description: "Tourist destination with seasonal pricing" },
  kochi: { multiplier: 1.1, description: "Coastal city with moderate living costs" },
  pondicherry: { multiplier: 1.2, description: "French colonial town with affordable living" },
  udaipur: { multiplier: 1.0, description: "Heritage city with very affordable costs" },
  darjeeling: { multiplier: 0.9, description: "Hill station with lower costs" },
  rishikesh: { multiplier: 0.8, description: "Spiritual town with budget-friendly living" },
  kasol: { multiplier: 0.7, description: "Mountain village with very low costs" },
  bir: { multiplier: 0.7, description: "Adventure hub with minimal living costs" },
  varkala: { multiplier: 1.0, description: "Beach town with reasonable prices" },
  alleppey: { multiplier: 0.9, description: "Backwater destination with low costs" },
  dehradun: { multiplier: 0.9, description: "Hill city with affordable living" },
  mussoorie: { multiplier: 1.0, description: "Hill station with moderate costs" },
  dharamkot: { multiplier: 0.6, description: "Mountain village with ultra-low costs" },
  kolkata: { multiplier: 1.1, description: "Cultural hub with reasonable costs" },
  ziro: { multiplier: 0.6, description: "Remote valley with minimal expenses" },
};

const lifestyleMultipliers = {
  budget: 0.7,
  moderate: 1.0,
  comfortable: 1.3,
  luxury: 1.8
};

export default function CostCalculator() {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [lifestyle, setLifestyle] = useState<string>("moderate");
  const [duration, setDuration] = useState<number>(1);
  const [accommodation, setAccommodation] = useState<string>("hostel");
  const [workingStyle, setWorkingStyle] = useState<string>("coworking");
  const [socialLevel, setSocialLevel] = useState<number>(3);

   const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calculatorRef.current) {
      calculatorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const calculateCosts = (): CostBreakdown => {
    if (!selectedCity) {
      return {
        housing: 0, food: 0, transport: 0, entertainment: 0,
        coworking: 0, utilities: 0, miscellaneous: 0, total: 0
      };
    }

    const cityMultiplier = cityData[selectedCity]?.multiplier || 1.0;
    const lifestyleMultiplier = lifestyleMultipliers[lifestyle as keyof typeof lifestyleMultipliers];

    // Base costs in INR (moderate lifestyle)
    let baseCosts = {
      housing: accommodation === "hostel" ? 15000 : 
               accommodation === "shared" ? 25000 : 
               accommodation === "studio" ? 35000 : 50000,
      food: 8000,
      transport: 3000,
      entertainment: socialLevel * 2000,
      coworking: workingStyle === "coworking" ? 6000 : 
                workingStyle === "cafe" ? 3000 : 0,
      utilities: accommodation === "hostel" ? 0 : 2500,
      miscellaneous: 4000
    };

    // Apply multipliers
    const finalCosts = {
      housing: Math.round(baseCosts.housing * cityMultiplier * lifestyleMultiplier),
      food: Math.round(baseCosts.food * cityMultiplier * lifestyleMultiplier),
      transport: Math.round(baseCosts.transport * cityMultiplier),
      entertainment: Math.round(baseCosts.entertainment * cityMultiplier * lifestyleMultiplier),
      coworking: Math.round(baseCosts.coworking * cityMultiplier),
      utilities: Math.round(baseCosts.utilities * cityMultiplier),
      miscellaneous: Math.round(baseCosts.miscellaneous * cityMultiplier * lifestyleMultiplier),
      total: 0
    };

    finalCosts.total = Object.values(finalCosts).reduce((sum, cost) => sum + cost, 0) - finalCosts.total;

    return finalCosts;
  };

  const costs = calculateCosts();
  const monthlyBudget = costs.total;
  const totalBudget = monthlyBudget * duration;
  const dailyBudget = Math.round(monthlyBudget / 30);
  const usdBudget = Math.round(totalBudget * 0.012);

  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-travel-blue via-travel-blue/90 to-muted-navy py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center bg-vintage-gold/20 text-vintage-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calculator className="w-4 h-4 mr-2" />
            Plan Your Digital Nomad Budget
          </div>
          
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Cost Calculator
          </h1>
          
          <p className="text-lg lg:text-xl text-cream/90 max-w-2xl mx-auto">
            Get accurate cost estimates for living as a digital nomad in Indian cities. 
            Customize your lifestyle and get detailed breakdowns.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Input Controls */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-travel-blue flex items-center">
                  <DollarSign className="mr-3 h-6 w-6 text-vintage-gold" />
                  Customize Your Stay
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* City Selection */}
                <div>
                  <Label className="text-base font-semibold text-travel-blue mb-3 block">
                    Choose Your Destination
                  </Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(cityData).map(([city, data]) => (
                        <SelectItem key={city} value={city}>
                          {city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - {data.description}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration */}
                <div>
                  <Label className="text-base font-semibold text-travel-blue mb-3 block">
                    Duration: {duration} {duration === 1 ? 'month' : 'months'}
                  </Label>
                  <Slider
                    value={[duration]}
                    onValueChange={(value) => setDuration(value[0])}
                    min={1}
                    max={12}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Lifestyle */}
                <div>
                  <Label className="text-base font-semibold text-travel-blue mb-3 block">
                    Lifestyle
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(lifestyleMultipliers).map(([key, multiplier]) => (
                      <Button
                        key={key}
                        variant={lifestyle === key ? "default" : "outline"}
                        onClick={() => setLifestyle(key)}
                        className="h-auto py-3 flex flex-col items-center"
                      >
                        <span className="font-semibold capitalize">{key}</span>
                        <span className="text-xs opacity-70">{Math.round(multiplier * 100 - 100)}% {multiplier >= 1 ? 'more' : 'less'}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Accommodation */}
                <div>
                  <Label className="text-base font-semibold text-travel-blue mb-3 block">
                    Accommodation Type
                  </Label>
                  <Select value={accommodation} onValueChange={setAccommodation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hostel">Hostel Dorm</SelectItem>
                      <SelectItem value="shared">Shared Apartment</SelectItem>
                      <SelectItem value="studio">Studio/1BHK</SelectItem>
                      <SelectItem value="apartment">Full Apartment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Working Style */}
                <div>
                  <Label className="text-base font-semibold text-travel-blue mb-3 block">
                    Working Style
                  </Label>
                  <Select value={workingStyle} onValueChange={setWorkingStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coworking">Coworking Space</SelectItem>
                      <SelectItem value="cafe">Cafes</SelectItem>
                      <SelectItem value="home">Work from Home</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Social Level */}
                <div>
                  <Label className="text-base font-semibold text-travel-blue mb-3 block">
                    Social Activities Level: {socialLevel}/5
                  </Label>
                  <Slider
                    value={[socialLevel]}
                    onValueChange={(value) => setSocialLevel(value[0])}
                    min={1}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-navy mt-1">
                    <span>Minimal</span>
                    <span>Very Active</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            
            {/* Budget Summary */}
            <Card className="bg-gradient-to-br from-vintage-gold/10 to-vintage-gold/5 border border-vintage-gold/20 shadow-lg rounded-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-serif text-travel-blue">
                  {selectedCity ? 
                    `${selectedCity.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Budget` 
                    : 'Select a City'
                  }
                </CardTitle>
                {selectedCity && (
                  <p className="text-muted-navy">{cityData[selectedCity]?.description}</p>
                )}
              </CardHeader>
              <CardContent>
                {selectedCity ? (
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-vintage-gold">
                        ₹{monthlyBudget.toLocaleString()}
                      </div>
                      <div className="text-muted-navy">per month</div>
                      
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-vintage-gold/20">
                        <div className="text-center">
                          <div className="font-semibold text-travel-blue">₹{dailyBudget}</div>
                          <div className="text-xs text-muted-navy">per day</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-travel-blue">₹{totalBudget.toLocaleString()}</div>
                          <div className="text-xs text-muted-navy">total ({duration}m)</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-travel-blue">${usdBudget}</div>
                          <div className="text-xs text-muted-navy">USD total</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-navy">
                    Please select a city to see cost estimates
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Detailed Breakdown */}
            {selectedCity && (
              <Card className="bg-white shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-travel-blue">
                    Monthly Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { icon: Home, label: 'Housing', value: costs.housing, color: 'text-warm-terracotta' },
                      { icon: Coffee, label: 'Food & Dining', value: costs.food, color: 'text-sunset-orange' },
                      { icon: Wifi, label: 'Coworking/Internet', value: costs.coworking, color: 'text-sage-green' },
                      { icon: Car, label: 'Transportation', value: costs.transport, color: 'text-travel-blue' },
                      { icon: Heart, label: 'Entertainment', value: costs.entertainment, color: 'text-vintage-gold' },
                      { icon: Plane, label: 'Utilities', value: costs.utilities, color: 'text-muted-navy' },
                      { icon: DollarSign, label: 'Miscellaneous', value: costs.miscellaneous, color: 'text-purple-600' }
                    ].map((item) => (
                      item.value > 0 && (
                        <div key={item.label} className="flex items-center justify-between py-2">
                          <div className="flex items-center space-x-3">
                            <item.icon className={`h-5 w-5 ${item.color}`} />
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <div className="font-semibold text-travel-blue">
                            ₹{item.value.toLocaleString()}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tips */}
            <Card className="bg-travel-blue/5 border border-travel-blue/20 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-travel-blue mb-3">💡 Money-Saving Tips</h3>
                <ul className="space-y-2 text-muted-navy text-sm">
                  <li>• Book accommodation 1-2 weeks in advance for better rates</li>
                  <li>• Consider monthly co-living spaces for 20-30% savings</li>
                  <li>• Use local transport (auto, bus) instead of cabs</li>
                  <li>• Eat at local restaurants instead of tourist spots</li>
                  <li>• Join nomad communities for group activities and discounts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
