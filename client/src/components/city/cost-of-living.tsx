import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Home, Wifi, Car, Coffee, Dumbbell, ExternalLink, TrendingUp, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { CostOfLiving } from "@shared/schema";

interface CostOfLivingProps {
  costData: CostOfLiving | null;
}

export default function CostOfLiving({ costData }: CostOfLivingProps) {
  // Fetch live currency conversion rate
  const { data: currencyData } = useQuery<{rate: number, source: string}>({
    queryKey: ["/api/currency/INR/USD"],
    refetchInterval: 3600000, // Refresh every hour
  });

  const exchangeRate = currencyData?.rate || 0.012;
  const convertToUSD = (inrAmount: number) => Math.round(inrAmount * exchangeRate * 100) / 100;

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
                <div className="flex justify-between">
                  <span>Vada Pav</span>
                  <span>₹15-25 ($0.20)</span>
                </div>
                <div className="flex justify-between">
                  <span>Dosa</span>
                  <span>₹40-80 ($0.50-1)</span>
                </div>
                <div className="flex justify-between">
                  <span>Thali</span>
                  <span>₹80-150 ($1-2)</span>
                </div>
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
          <h4 className="font-semibold text-sage-green mb-2">💡 Money Saving Tips</h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Cook at home to save 40-50% on food costs</li>
            <li>• Use local transport instead of ride-hailing for daily commute</li>
            <li>• Share coworking spaces or find day passes for flexibility</li>
            <li>• Buy groceries from local markets instead of supermarkets</li>
            <li>• Look for PG accommodations if staying long-term</li>
          </ul>
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
