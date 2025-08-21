import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Clock } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface CityOverviewProps {
  city: CityWithDetails;
}

export default function CityOverview({ city }: CityOverviewProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <MapPin className="mr-2 h-6 w-6 text-vintage-gold" />
          Overview & Insider Tips
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-travel-blue mb-3">About {city.name}</h3>
          <p className="text-muted-navy leading-relaxed mb-4">
            {city.description}
          </p>
          <p className="text-muted-navy leading-relaxed">
            Located in {city.state}, {city.name} has become a hotspot for digital nomads seeking 
            {city.tags?.includes("Beach") ? " a perfect work-life balance by the sea" : 
             city.tags?.includes("Tech Scene") ? " thriving tech opportunities and innovation" :
             city.tags?.includes("Heritage") ? " rich cultural experiences and historical significance" :
             " unique experiences and opportunities"}. 
            The city offers a perfect blend of modern amenities and local culture, making it an ideal 
            destination for remote workers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-travel-blue/5 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="h-4 w-4 text-travel-blue" />
              <span className="font-semibold text-travel-blue">Population</span>
            </div>
            <p className="text-muted-navy">{city.population?.toLocaleString()} residents</p>
          </div>
          
          <div className="bg-vintage-gold/5 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-vintage-gold" />
              <span className="font-semibold text-vintage-gold">Location</span>
            </div>
            <p className="text-muted-navy">{city.state}, India</p>
          </div>
          
          <div className="bg-sage-green/5 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-4 w-4 text-sage-green" />
              <span className="font-semibold text-sage-green">Timezone</span>
            </div>
            <p className="text-muted-navy">GMT+5:30 (IST)</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-travel-blue mb-3">Insider Tips</h3>
          <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
            <ul className="space-y-2 text-muted-navy">
              <li>• Best time to arrive: Early morning flights for easier commute into the city</li>
              <li>• Local SIM: Get an Airtel or Jio connection for the best network coverage</li>
              <li>• Banking: HDFC, ICICI, and Axis Bank have the most ATMs and branches</li>
              <li>• Language: English is widely spoken, but learning basic Hindi/local language helps</li>
              <li>• Apps to download: Swiggy/Zomato for food, Ola/Uber for transport, Paytm for payments</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
