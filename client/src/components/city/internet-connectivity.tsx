import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, MapPin, Clock, Users, Zap, Signal } from "lucide-react";
import type { InternetConnectivity } from "@shared/schema";

interface InternetConnectivityProps {
  internetData: InternetConnectivity | null;
}

export default function InternetConnectivity({ internetData }: InternetConnectivityProps) {
  if (!internetData) {
    return (
      <Card className="bg-white rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
            <Wifi className="mr-2 h-6 w-6 text-vintage-gold" />
            Internet & Connectivity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-navy">Internet connectivity data is not available for this city.</p>
        </CardContent>
      </Card>
    );
  }

  const getSpeedCategory = (speed: number) => {
    if (speed >= 50) return { label: "Excellent", color: "sage-green" };
    if (speed >= 25) return { label: "Good", color: "vintage-gold" };
    if (speed >= 10) return { label: "Fair", color: "sunset-orange" };
    return { label: "Poor", color: "warm-terracotta" };
  };

  const speedCategory = getSpeedCategory(internetData.avgSpeedMbps);

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <Wifi className="mr-2 h-6 w-6 text-vintage-gold" />
          Internet & Connectivity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Speed Overview */}
        <div className="bg-gradient-to-r from-sage-green/10 to-travel-blue/10 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Average Speed</h3>
              <div className="text-3xl font-bold text-vintage-gold">{internetData.avgSpeedMbps} Mbps</div>
              <Badge className={`bg-${speedCategory.color}/10 text-${speedCategory.color} mt-2`}>
                {speedCategory.label}
              </Badge>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Coworking Spaces</h3>
              <div className="text-3xl font-bold text-travel-blue">{internetData.coworkingSpaces?.length || 0}+</div>
              <div className="text-sm text-muted-navy">Available</div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">WiFi Coverage</h3>
              <div className="text-lg font-bold text-sage-green">Excellent</div>
              <div className="text-sm text-muted-navy">Most venues</div>
            </div>
          </div>
        </div>

        {/* WiFi Availability */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-3 flex items-center">
            <Signal className="mr-2 h-5 w-5" />
            WiFi Availability
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-muted-navy leading-relaxed">
              {internetData.wifiAvailability}
            </p>
          </div>
        </div>

        {/* Coworking Spaces */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Top Coworking Spaces
          </h3>
          <div className="grid gap-4">
            {internetData.coworkingSpaces?.map((space, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-travel-blue">{space.name}</h4>
                    <div className="flex items-center text-muted-navy text-sm mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {space.address}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-vintage-gold">{space.pricing}</div>
                    <div className="flex items-center text-sage-green text-sm">
                      <Zap className="h-3 w-3 mr-1" />
                      {space.speedMbps} Mbps
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {space.amenities.map((amenity, amenityIndex) => (
                    <Badge 
                      key={amenityIndex}
                      variant="secondary"
                      className="bg-travel-blue/10 text-travel-blue text-xs"
                    >
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIM Providers */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Signal className="mr-2 h-5 w-5" />
            SIM & Data Plans
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {internetData.simProviders?.map((provider, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-travel-blue mb-3">{provider.provider}</h4>
                <div className="space-y-2">
                  {provider.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-medium text-muted-navy">{plan.data}</div>
                        <div className="text-sm text-gray-500">{plan.validity}</div>
                      </div>
                      <div className="font-semibold text-vintage-gold">₹{plan.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <Wifi className="mr-2 h-4 w-4" />
            Internet Tips
          </h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Get a local SIM card immediately upon arrival for best data rates</li>
            <li>• Most cafes and restaurants offer free WiFi with purchase</li>
            <li>• Coworking spaces often provide the most reliable internet for work</li>
            <li>• Consider portable WiFi devices for consistent connectivity</li>
            <li>• Peak hours (6-9 PM) may experience slower speeds in residential areas</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
