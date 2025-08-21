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

  const costItems = [
    { icon: Home, label: "Studio Rent", value: costData.studioRentINR, category: "Housing" },
    { icon: Home, label: "1 BHK Rent", value: costData.oneBhkRentINR, category: "Housing" },
    { icon: Home, label: "2 BHK Rent", value: costData.twoBhkRentINR, category: "Housing" },
    { icon: DollarSign, label: "Utilities", value: costData.utilitiesINR, category: "Monthly" },
    { icon: Coffee, label: "Groceries", value: costData.groceriesINR, category: "Monthly" },
    { icon: Coffee, label: "Eating Out", value: costData.eatingOutINR, category: "Monthly" },
    { icon: Wifi, label: "Coworking", value: costData.coworkingINR, category: "Monthly" },
    { icon: Car, label: "Transport", value: costData.transportINR, category: "Monthly" },
    { icon: Wifi, label: "SIM & Data", value: costData.simDataINR, category: "Monthly" },
    { icon: Dumbbell, label: "Gym", value: costData.gymINR, category: "Monthly" },
    { icon: Coffee, label: "Coffee", value: costData.coffeeINR, category: "Per Cup" },
    { icon: DollarSign, label: "Entertainment", value: costData.entertainmentINR, category: "Monthly" },
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
          <div className="grid md:grid-cols-3 gap-4">
            {categories.Housing.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-navy">{item.label}</span>
                  <span className="font-semibold text-travel-blue">
                    {item.value ? `₹${item.value.toLocaleString()}` : 'N/A'}
                  </span>
                </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.Monthly.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <item.icon className="h-4 w-4 text-vintage-gold" />
                  <span className="text-muted-navy">{item.label}</span>
                </div>
                <span className="font-semibold text-travel-blue">
                  {item.value ? `₹${item.value.toLocaleString()}` : 'N/A'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Costs */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4">Other Costs</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {categories["Per Cup"].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <item.icon className="h-4 w-4 text-vintage-gold" />
                  <span className="text-muted-navy">{item.label}</span>
                </div>
                <span className="font-semibold text-travel-blue">
                  {item.value ? `₹${item.value}` : 'N/A'}
                </span>
              </div>
            ))}
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
