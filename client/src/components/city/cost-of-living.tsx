import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Home, Wifi, Car, Coffee, Dumbbell, ExternalLink, TrendingUp, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { CostOfLiving } from "@shared/schema";
import { getCitySpecificData } from "@/lib/city-specific-data";

interface CostOfLivingProps {
  costData: CostOfLiving | null;
  citySlug: string;
}

export default function CostOfLiving({ costData, citySlug }: CostOfLivingProps) {
  const cityData = getCitySpecificData(citySlug);
  // Fetch live currency conversion rate
  const { data: currencyData } = useQuery<{rate: number, source: string}>({
    queryKey: ["/api/currency/INR/USD"],
    refetchInterval: 3600000, // Refresh every hour
  });

  const exchangeRate = currencyData?.rate || 0.012;
  const convertToUSD = (inrAmount: number) => Math.round(inrAmount * exchangeRate * 100) / 100;

  // Early return if no cost data to prevent any further processing
  if (!costData) {
    return (
      <Card className="bg-white rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
            <DollarSign className="mr-3 h-8 w-8 text-vintage-gold" />
            Cost of Living
          </CardTitle>
          <p className="text-muted-navy text-lg">
            Comprehensive breakdown of living expenses with real-time currency conversion and external data sources.
          </p>
        </CardHeader>
        <CardContent>
          <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
            <p className="text-muted-navy">Loading cost of living data from external sources...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const costItems = [
    { icon: Home, label: "Studio Rent", valueINR: costData.studioRentINR || 0, valueUSD: convertToUSD(costData.studioRentINR || 0), category: "Housing", note: "City center vs suburbs varies 30-50%" },
    { icon: Home, label: "1 BHK Rent", valueINR: costData.oneBhkRentINR || 0, valueUSD: convertToUSD(costData.oneBhkRentINR || 0), category: "Housing", note: "Furnished apartments cost 20% more" },
    { icon: Home, label: "2 BHK Rent", valueINR: costData.twoBhkRentINR || 0, valueUSD: convertToUSD(costData.twoBhkRentINR || 0), category: "Housing", note: "Great for sharing with roommates" },
    { icon: DollarSign, label: "Utilities", valueINR: costData.utilitiesINR || 0, valueUSD: convertToUSD(costData.utilitiesINR || 0), category: "Monthly", note: "Electricity, water, gas, internet" },
    { icon: Coffee, label: "Groceries", valueINR: costData.groceriesINR || 0, valueUSD: convertToUSD(costData.groceriesINR || 0), category: "Monthly", note: "Fresh produce, basic cooking ingredients" },
    { icon: Coffee, label: "Eating Out", valueINR: costData.eatingOutINR || 0, valueUSD: convertToUSD(costData.eatingOutINR || 0), category: "Monthly", note: "Mix of street food and restaurants" },
    { icon: Wifi, label: "Coworking", valueINR: costData.coworkingINR || 0, valueUSD: convertToUSD(costData.coworkingINR || 0), category: "Monthly", note: "Day passes available for ₹200-500" },
    { icon: Car, label: "Transport", valueINR: costData.transportINR || 0, valueUSD: convertToUSD(costData.transportINR || 0), category: "Monthly", note: "Metro, bus, auto rickshaw, occasional cab" },
    { icon: Wifi, label: "SIM & Data", valueINR: costData.simDataINR || 0, valueUSD: convertToUSD(costData.simDataINR || 0), category: "Monthly", note: "Unlimited calls + 2GB/day data" },
    { icon: Dumbbell, label: "Gym", valueINR: costData.gymINR || 0, valueUSD: convertToUSD(costData.gymINR || 0), category: "Monthly", note: "Basic gym membership with equipment" },
    { icon: Coffee, label: "Coffee", valueINR: costData.coffeeINR || 0, valueUSD: convertToUSD(costData.coffeeINR || 0), category: "Per Item", note: "Cafe coffee (street tea costs ₹10-20)" },
    { icon: DollarSign, label: "Entertainment", valueINR: costData.entertainmentINR || 0, valueUSD: convertToUSD(costData.entertainmentINR || 0), category: "Monthly", note: "Movies, bars, events, activities" },
  ];

  const categories = {
    Housing: costItems.filter(item => item.category === "Housing"),
    Monthly: costItems.filter(item => item.category === "Monthly"),
    "Per Item": costItems.filter(item => item.category === "Per Item"),
  };

  // Get city-specific digital nomad accommodation data
  const getCitySpecificAccommodation = () => {
    const accommodationData: Record<string, any> = {
      mumbai: {
        hostels: [
          { name: "Zostel Mumbai", area: "Fort", price: "₹800-1200/night ($10-14)", rating: 4.2, amenities: ["WiFi", "AC", "Kitchen", "Lounge"] },
          { name: "Backpacker Panda", area: "Andheri", price: "₹600-900/night ($7-11)", rating: 4.0, amenities: ["WiFi", "Common area", "Kitchen"] },
          { name: "Mad Monkey Hostel", area: "Colaba", price: "₹900-1400/night ($11-17)", rating: 4.3, amenities: ["WiFi", "Bar", "Tours", "AC"] }
        ],
        platforms: [
          { name: "Agoda", commission: "12-18%", features: ["Instant booking", "Local support", "Best price guarantee"] },
          { name: "Booking.com", commission: "15-20%", features: ["Free cancellation", "24/7 support", "Verified reviews"] },
          { name: "Hostelworld", commission: "10-12%", features: ["Hostel specialist", "Community", "City guides"] },
          { name: "Airbnb", commission: "3% + 14-20%", features: ["Local experiences", "Monthly discounts", "Verified hosts"] },
          { name: "OYO", commission: "20-25%", features: ["Local chain", "Standardized rooms", "Easy booking"] }
        ],
        monthlyOptions: [
          { type: "PG (Paying Guest)", price: "₹8000-15000/month ($96-180)", includes: "Meals, WiFi, cleaning" },
          { type: "Co-living spaces", price: "₹12000-25000/month ($144-300)", includes: "Fully furnished, community events" },
          { type: "Service apartments", price: "₹20000-40000/month ($240-480)", includes: "Hotel-like services, flexibility" }
        ]
      },
      delhi: {
        hostels: [
          { name: "Zostel Delhi", area: "Paharganj", price: "₹700-1100/night ($8-13)", rating: 4.1, amenities: ["WiFi", "AC", "Kitchen", "Terrace"] },
          { name: "Jugaad Hostels", area: "Hauz Khas", price: "₹800-1200/night ($10-14)", rating: 4.4, amenities: ["WiFi", "Events", "Kitchen", "Co-working"] },
          { name: "Bleisure Hospitality", area: "Connaught Place", price: "₹900-1300/night ($11-16)", rating: 4.2, amenities: ["WiFi", "Restaurant", "AC"] }
        ],
        platforms: [
          { name: "Agoda", commission: "12-18%", features: ["Best prices", "Local partnerships", "Mobile app"] },
          { name: "Booking.com", commission: "15-20%", features: ["Largest inventory", "Multiple languages", "Flexible booking"] },
          { name: "Hostelworld", commission: "10-12%", features: ["Hostel focus", "Social features", "Group bookings"] },
          { name: "Airbnb", commission: "3% + 14-20%", features: ["Unique spaces", "Long-term stays", "Local experiences"] },
          { name: "Treebo", commission: "18-22%", features: ["Indian chain", "Consistent quality", "Good locations"] }
        ],
        monthlyOptions: [
          { type: "PG accommodations", price: "₹6000-12000/month ($72-144)", includes: "Meals, utilities, basic amenities" },
          { type: "Co-living", price: "₹10000-20000/month ($120-240)", includes: "Furnished rooms, community, events" },
          { type: "Studio apartments", price: "₹15000-30000/month ($180-360)", includes: "Independent living, kitchen" }
        ]
      },
      bangalore: {
        hostels: [
          { name: "Zostel Bangalore", area: "Koramangala", price: "₹800-1200/night ($10-14)", rating: 4.3, amenities: ["WiFi", "AC", "Kitchen", "Co-working"] },
          { name: "The Hive Hostel", area: "Indiranagar", price: "₹700-1000/night ($8-12)", rating: 4.1, amenities: ["WiFi", "Kitchen", "Common area"] },
          { name: "Backpacker Panda", area: "MG Road", price: "₹600-900/night ($7-11)", rating: 4.0, amenities: ["WiFi", "Tours", "Kitchen"] }
        ],
        platforms: [
          { name: "Agoda", commission: "12-18%", features: ["Tech-friendly", "Best rates", "Easy booking"] },
          { name: "Booking.com", commission: "15-20%", features: ["Wide selection", "Verified reviews", "Mobile booking"] },
          { name: "Airbnb", commission: "3% + 14-20%", features: ["Tech community", "Long stays", "Unique properties"] },
          { name: "Zolo", commission: "15-20%", features: ["Co-living specialist", "Tech nomads", "Flexible terms"] },
          { name: "NestAway", commission: "20-25%", features: ["Fully managed", "No brokerage", "Quick move-in"] }
        ],
        monthlyOptions: [
          { type: "Co-living spaces", price: "₹12000-22000/month ($144-264)", includes: "Fully furnished, high-speed WiFi, community" },
          { type: "PG for professionals", price: "₹8000-15000/month ($96-180)", includes: "Meals, cleaning, WiFi" },
          { type: "Tech-friendly apartments", price: "₹18000-35000/month ($216-420)", includes: "High-speed internet, flexible lease" }
        ]
      },
      goa: {
        hostels: [
          { name: "Zostel Goa", area: "Anjuna", price: "₹700-1100/night ($8-13)", rating: 4.2, amenities: ["WiFi", "Pool", "Beach access", "Kitchen"] },
          { name: "Backpacker Panda", area: "Arambol", price: "₹500-800/night ($6-10)", rating: 3.9, amenities: ["WiFi", "Beach nearby", "Kitchen"] },
          { name: "Mad Monkey Hostel", area: "Calangute", price: "₹800-1200/night ($10-14)", rating: 4.1, amenities: ["WiFi", "Pool", "Bar", "Tours"] }
        ],
        platforms: [
          { name: "Agoda", commission: "12-18%", features: ["Beach properties", "Local deals", "Easy booking"] },
          { name: "Booking.com", commission: "15-20%", features: ["Largest selection", "Beach resorts", "Flexible dates"] },
          { name: "Airbnb", commission: "3% + 14-20%", features: ["Beach houses", "Monthly discounts", "Local hosts"] },
          { name: "OYO", commission: "20-25%", features: ["Budget options", "Standardized quality", "Beach locations"] }
        ],
        monthlyOptions: [
          { type: "Beach house rentals", price: "₹10000-25000/month ($120-300)", includes: "Beach access, basic furnishing" },
          { type: "Portuguese villa rooms", price: "₹8000-18000/month ($96-216)", includes: "Cultural experience, garden access" },
          { type: "Nomad-friendly apartments", price: "₹12000-30000/month ($144-360)", includes: "Good WiFi, workspace, balcony" }
        ]
      },
      rishikesh: {
        hostels: [
          { name: "Zostel Rishikesh", area: "Tapovan", price: "₹600-900/night ($7-11)", rating: 4.0, amenities: ["WiFi", "Yoga space", "Kitchen", "River views"] },
          { name: "Backpacker Panda", area: "Laxman Jhula", price: "₹400-700/night ($5-8)", rating: 3.8, amenities: ["WiFi", "Yoga", "Simple rooms"] },
          { name: "The Hosteller", area: "Ram Jhula", price: "₹500-800/night ($6-10)", rating: 4.1, amenities: ["WiFi", "Yoga deck", "Kitchen", "Library"] }
        ],
        platforms: [
          { name: "Booking.com", commission: "15-20%", features: ["Spiritual retreats", "Ashram bookings", "Nature stays"] },
          { name: "Agoda", commission: "12-18%", features: ["Adventure packages", "Yoga retreats", "Budget options"] },
          { name: "Airbnb", commission: "3% + 14-20%", features: ["River-view properties", "Spiritual experiences", "Long stays"] }
        ],
        monthlyOptions: [
          { type: "Ashram accommodation", price: "₹3000-8000/month ($36-96)", includes: "Meals, yoga, meditation, simple living" },
          { type: "Guesthouse rooms", price: "₹5000-12000/month ($60-144)", includes: "Basic amenities, mountain views" },
          { type: "Yoga retreat centers", price: "₹8000-15000/month ($96-180)", includes: "Yoga classes, healthy meals, community" }
        ]
      }
    };

    const cityLower = citySlug.toLowerCase();
    const defaultAccommodation = {
      hostels: [
        { name: "Local Budget Hostel", area: "City center", price: "₹500-800/night ($6-10)", rating: 3.8, amenities: ["WiFi", "Kitchen", "Common area"] }
      ],
      platforms: [
        { name: "Booking.com", commission: "15-20%", features: ["Wide selection", "Free cancellation", "Reviews"] },
        { name: "Agoda", commission: "12-18%", features: ["Best prices", "Easy booking", "Local partnerships"] },
        { name: "Airbnb", commission: "3% + 14-20%", features: ["Unique stays", "Local experiences", "Monthly discounts"] }
      ],
      monthlyOptions: [
        { type: "Local PG", price: "₹6000-12000/month ($72-144)", includes: "Basic amenities, local community" }
      ]
    };

    const data = accommodationData[cityLower] || defaultAccommodation;

    return (
      <div>
        {/* Hostels */}
        <div className="mb-6">
          <h4 className="font-semibold text-vintage-gold mb-3">Popular Hostels & Budget Stays</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.hostels.map((hostel, index) => (
              <div key={index} className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="font-semibold text-travel-blue">{hostel.name}</h5>
                    <p className="text-sm text-muted-navy">{hostel.area}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-vintage-gold">{hostel.price}</div>
                    <div className="text-xs text-muted-navy">⭐ {hostel.rating}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {hostel.amenities.map((amenity, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-sage-green/10 text-sage-green">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Platforms */}
        <div className="mb-6">
          <h4 className="font-semibold text-vintage-gold mb-3">Best Booking Platforms</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {data.platforms.map((platform, index) => (
              <div key={index} className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-sage-green">{platform.name}</h5>
                  <span className="text-xs text-muted-navy">Commission: {platform.commission}</span>
                </div>
                <ul className="text-sm text-muted-navy space-y-1">
                  {platform.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Options */}
        <div className="mb-6">
          <h4 className="font-semibold text-vintage-gold mb-3">Monthly Stay Options</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.monthlyOptions.map((option, index) => (
              <div key={index} className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
                <h5 className="font-semibold text-vintage-gold mb-2">{option.type}</h5>
                <div className="font-bold text-travel-blue mb-2">{option.price}</div>
                <p className="text-sm text-muted-navy">{option.includes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Tips */}
        <div className="bg-travel-blue/5 rounded-lg p-4 border-l-4 border-travel-blue">
          <h4 className="font-semibold text-travel-blue mb-2">💡 Smart Booking Tips</h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Book 3-7 days ahead for better hostel rates and availability</li>
            <li>• Use Agoda for Asia-focused deals and local partnerships</li>
            <li>• Booking.com offers best cancellation policies for uncertain travel plans</li>
            <li>• Airbnb gives 20-50% monthly discounts for stays over 28 days</li>
            <li>• Contact hostels directly for weekly/monthly rates not shown online</li>
            <li>• Join nomad Facebook groups for sublet opportunities and local recommendations</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <DollarSign className="mr-3 h-8 w-8 text-vintage-gold" />
          Cost of Living Breakdown
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Comprehensive monthly expenses with real-time currency conversion and external data verification.
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-navy mt-4">
          <div className="flex items-center">
            <RefreshCw className="h-3 w-3 mr-1" />
            Exchange rate: 1 USD = ₹{Math.round(1/exchangeRate)}
          </div>
          <Badge variant="secondary" className="bg-sage-green/10 text-sage-green">
            {currencyData?.source === "live" ? "Live rates" : "Estimated rates"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Summary */}
        <div className="bg-gradient-to-r from-vintage-gold/10 to-travel-blue/10 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Monthly Budget</h3>
              <div className="text-3xl font-bold text-vintage-gold">₹{costData.monthlyBudgetINR.toLocaleString()}</div>
              <div className="text-sm text-muted-navy">${costData.monthlyBudgetUSD} USD</div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Daily Average</h3>
              <div className="text-3xl font-bold text-travel-blue">₹{Math.round(costData.monthlyBudgetINR / 30).toLocaleString()}</div>
              <div className="text-sm text-muted-navy">${Math.round(costData.monthlyBudgetUSD / 30)} USD</div>
            </div>
          </div>
        </div>

        {/* Housing Costs */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Housing (Monthly Rent)
          </h3>
          <div className="grid gap-4">
            {categories.Housing.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-travel-blue">{item.label}</span>
                  <div className="text-right">
                    <div className="font-bold text-travel-blue">
                      {item.valueINR ? `₹${item.valueINR.toLocaleString()}` : 'N/A'}
                    </div>
                    <div className="text-sm text-muted-navy">
                      {item.valueUSD ? `$${item.valueUSD}` : ''}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-navy">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Expenses */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <DollarSign className="mr-2 h-5 w-5" />
            Monthly Expenses
          </h3>
          <div className="grid gap-4">
            {categories.Monthly.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-vintage-gold" />
                    <span className="font-medium text-travel-blue">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-travel-blue">
                      {item.valueINR ? `₹${item.valueINR.toLocaleString()}` : 'N/A'}
                    </div>
                    <div className="text-sm text-muted-navy">
                      {item.valueUSD ? `$${item.valueUSD}` : ''}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-navy">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Per-Item Costs */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4">Per-Item Costs</h3>
          <div className="grid gap-4">
            {categories["Per Item"].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-vintage-gold" />
                    <span className="font-medium text-travel-blue">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-travel-blue">
                      {item.valueINR ? `₹${item.valueINR}` : 'N/A'}
                    </div>
                    <div className="text-sm text-muted-navy">
                      {item.valueUSD ? `$${item.valueUSD}` : ''}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-navy">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Food Cost Breakdown */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4">🍽️ Food Price Guide</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Street Food</h4>
              <div className="space-y-1 text-sm">
                {cityData?.streetFood && cityData.streetFood.length > 0 ? (
                  cityData.streetFood.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.item}</span>
                      <span>{item.price}</span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span>Local Specialty</span>
                      <span>₹40-80 ($0.50-1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Street Snacks</span>
                      <span>₹20-50 ($0.25-0.60)</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">Mid-Range</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Restaurant Meal</span>
                  <span>₹200-400 ($2.5-5)</span>
                </div>
                <div className="flex justify-between">
                  <span>Pizza</span>
                  <span>₹300-600 ($4-7)</span>
                </div>
                <div className="flex justify-between">
                  <span>Cafe Meal</span>
                  <span>₹250-500 ($3-6)</span>
                </div>
              </div>
            </div>
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">Fine Dining</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Multi-course</span>
                  <span>₹800-1500 ($10-18)</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel Restaurant</span>
                  <span>₹600-1200 ($7-15)</span>
                </div>
                <div className="flex justify-between">
                  <span>International</span>
                  <span>₹700-1400 ($8-17)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Money Saving Tips */}
        <div className="bg-sage-green/5 rounded-lg p-4 border-l-4 border-sage-green">
          <h4 className="font-semibold text-sage-green mb-2">💡 Smart Money Tips for Digital Nomads</h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            {cityData?.moneyTips && cityData.moneyTips.length > 0 ? (
              cityData.moneyTips.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))
            ) : (
              <>
                <li>• Cook at home to save 40-50% on food costs</li>
                <li>• Use local transport instead of ride-hailing for daily commute</li>
                <li>• Share coworking spaces or find day passes for flexibility</li>
                <li>• Buy groceries from local markets instead of supermarkets</li>
                <li>• Look for PG accommodations if staying long-term</li>
              </>
            )}
          </ul>
        </div>

        {/* Digital Nomad Accommodation */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Home className="mr-2 h-5 w-5" />
            🏨 Digital Nomad Accommodation
          </h3>
          {getCitySpecificAccommodation()}
        </div>

        {/* External Data Sources & Verification */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <ExternalLink className="mr-2 h-5 w-5" />
            📊 Data Sources & Verification
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Cost of Living Databases</h4>
              <div className="space-y-2 text-sm">
                <a href="https://www.numbeo.com/cost-of-living/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Numbeo - Global cost comparison
                </a>
                <a href="https://www.livingcost.org/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  LivingCost.org - City comparisons
                </a>
                <a href="https://www.expatistan.com/cost-of-living" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Expatistan - Expat cost data
                </a>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Currency & Financial</h4>
              <div className="space-y-2 text-sm">
                <a href="https://xe.com/currencyconverter/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  XE.com - Live exchange rates
                </a>
                <a href="https://wise.com/us/currency-converter/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Wise - Real exchange rates
                </a>
                <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  RBI - Official rates (India)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Planning Tools */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            💰 Budget Planning & Cost Optimization
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Budget Nomad</h4>
              <div className="space-y-1 text-sm text-muted-navy">
                <div>Housing: ₹8,000-15,000 ($96-180)</div>
                <div>Food: ₹4,000-6,000 ($48-72)</div>
                <div>Transport: ₹1,500-2,500 ($18-30)</div>
                <div>Misc: ₹2,000-3,000 ($24-36)</div>
                <div className="font-semibold pt-1 border-t">Total: ₹15,500-26,500 ($186-318)</div>
              </div>
            </div>
            
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">Comfort Nomad</h4>
              <div className="space-y-1 text-sm text-muted-navy">
                <div>Housing: ₹20,000-35,000 ($240-420)</div>
                <div>Food: ₹8,000-12,000 ($96-144)</div>
                <div>Transport: ₹3,000-5,000 ($36-60)</div>
                <div>Misc: ₹5,000-8,000 ($60-96)</div>
                <div className="font-semibold pt-1 border-t">Total: ₹36,000-60,000 ($432-720)</div>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">Luxury Nomad</h4>
              <div className="space-y-1 text-sm text-muted-navy">
                <div>Housing: ₹50,000-80,000 ($600-960)</div>
                <div>Food: ₹15,000-25,000 ($180-300)</div>
                <div>Transport: ₹8,000-12,000 ($96-144)</div>
                <div>Misc: ₹10,000-15,000 ($120-180)</div>
                <div className="font-semibold pt-1 border-t">Total: ₹83,000-132,000 ($996-1,584)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Money-Saving Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <TrendingUp className="mr-2 h-4 w-4" />
            Smart Money Tips for Nomads
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-navy">
            <ul className="space-y-1">
              <li>• Use UPI payments for 1-5% cashback on most transactions</li>
              <li>• Buy monthly groceries from wholesale markets for 30% savings</li>
              <li>• Share accommodation with other nomads to split costs</li>
              <li>• Use local transport apps (BMTC, Delhi Metro) for route optimization</li>
              <li>• Cook 60% of meals, eat out 40% for balanced budget</li>
            </ul>
            <ul className="space-y-1">
              <li>• Get annual gym memberships during festival sales (50% off)</li>
              <li>• Use coworking day passes initially, then upgrade to monthly</li>
              <li>• Book accommodations 2-3 km from city center for lower rent</li>
              <li>• Use forex cards for international transactions (better rates)</li>
              <li>• Join nomad groups for group discounts on activities and transport</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
