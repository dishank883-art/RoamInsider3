import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Home, Wifi, Car, Coffee, Dumbbell } from "lucide-react";
import type { CostOfLiving } from "@shared/schema";

interface CostOfLivingProps {
  costData: CostOfLiving | null;
}

export default function CostOfLiving({ costData }: CostOfLivingProps) {
  if (!costData) {
    return (
      <Card className="bg-white rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
            <DollarSign className="mr-2 h-6 w-6 text-vintage-gold" />
            Cost of Living
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-navy">Cost of living data is not available for this city.</p>
        </CardContent>
      </Card>
    );
  }

  // Helper function to convert INR to USD (approximate rate: 1 USD = 83 INR)
  const convertToUSD = (inrAmount: number) => Math.round(inrAmount / 83);

  const costItems = [
    { icon: Home, label: "Studio Rent", valueINR: costData.studioRentINR, valueUSD: convertToUSD(costData.studioRentINR), category: "Housing", note: "City center vs suburbs varies 30-50%" },
    { icon: Home, label: "1 BHK Rent", valueINR: costData.oneBhkRentINR, valueUSD: convertToUSD(costData.oneBhkRentINR), category: "Housing", note: "Furnished apartments cost 20% more" },
    { icon: Home, label: "2 BHK Rent", valueINR: costData.twoBhkRentINR, valueUSD: convertToUSD(costData.twoBhkRentINR), category: "Housing", note: "Great for sharing with roommates" },
    { icon: DollarSign, label: "Utilities", valueINR: costData.utilitiesINR, valueUSD: convertToUSD(costData.utilitiesINR), category: "Monthly", note: "Electricity, water, gas, internet" },
    { icon: Coffee, label: "Groceries", valueINR: costData.groceriesINR, valueUSD: convertToUSD(costData.groceriesINR), category: "Monthly", note: "Fresh produce, basic cooking ingredients" },
    { icon: Coffee, label: "Eating Out", valueINR: costData.eatingOutINR, valueUSD: convertToUSD(costData.eatingOutINR), category: "Monthly", note: "Mix of street food and restaurants" },
    { icon: Wifi, label: "Coworking", valueINR: costData.coworkingINR, valueUSD: convertToUSD(costData.coworkingINR), category: "Monthly", note: "Day passes available for ₹200-500" },
    { icon: Car, label: "Transport", valueINR: costData.transportINR, valueUSD: convertToUSD(costData.transportINR), category: "Monthly", note: "Metro, bus, auto rickshaw, occasional cab" },
    { icon: Wifi, label: "SIM & Data", valueINR: costData.simDataINR, valueUSD: convertToUSD(costData.simDataINR), category: "Monthly", note: "Unlimited calls + 2GB/day data" },
    { icon: Dumbbell, label: "Gym", valueINR: costData.gymINR, valueUSD: convertToUSD(costData.gymINR), category: "Monthly", note: "Basic gym membership with equipment" },
    { icon: Coffee, label: "Coffee", valueINR: costData.coffeeINR, valueUSD: convertToUSD(costData.coffeeINR), category: "Per Item", note: "Cafe coffee (street tea costs ₹10-20)" },
    { icon: DollarSign, label: "Entertainment", valueINR: costData.entertainmentINR, valueUSD: convertToUSD(costData.entertainmentINR), category: "Monthly", note: "Movies, bars, events, activities" },
  ];

  const categories = {
    Housing: costItems.filter(item => item.category === "Housing"),
    Monthly: costItems.filter(item => item.category === "Monthly"),
    "Per Cup": costItems.filter(item => item.category === "Per Cup"),
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <DollarSign className="mr-2 h-6 w-6 text-vintage-gold" />
          Cost of Living
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
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
      </CardContent>
    </Card>
  );
}
