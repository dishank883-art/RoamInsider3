import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Train, Plane, MapPin, Clock, Navigation, Bus, Star } from "lucide-react";
import type { Transportation } from "@shared/schema";

interface TransportationProps {
  transportData: Transportation | null;
}

export default function Transportation({ transportData }: TransportationProps) {
  if (!transportData) {
    return (
      <Card className="bg-white rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
            <Car className="mr-2 h-6 w-6 text-vintage-gold" />
            Transportation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-navy">Transportation data is not available for this city.</p>
        </CardContent>
      </Card>
    );
  }

  const getWalkabilityColor = (score: number) => {
    if (score >= 8) return "sage-green";
    if (score >= 6) return "vintage-gold";
    if (score >= 4) return "sunset-orange";
    return "warm-terracotta";
  };

  const getWalkabilityLabel = (score: number) => {
    if (score >= 8) return "Excellent";
    if (score >= 6) return "Good";
    if (score >= 4) return "Fair";
    return "Limited";
  };

  const walkabilityColor = transportData.walkabilityScore ? getWalkabilityColor(transportData.walkabilityScore) : "warm-terracotta";
  const walkabilityLabel = transportData.walkabilityScore ? getWalkabilityLabel(transportData.walkabilityScore) : "Unknown";

  const transportIcons = {
    metro: Train,
    bus: Bus,
    autoRickshaw: Car,
    taxi: Car,
    bike: Car
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <Car className="mr-2 h-6 w-6 text-vintage-gold" />
          Transportation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overview */}
        <div className="bg-gradient-to-r from-travel-blue/10 to-vintage-gold/10 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Walkability</h3>
              <div className="text-3xl font-bold text-vintage-gold">
                {transportData.walkabilityScore}/10
              </div>
              <Badge className={`bg-${walkabilityColor}/10 text-${walkabilityColor} mt-2`}>
                {walkabilityLabel}
              </Badge>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Ride Hailing</h3>
              <div className="text-3xl font-bold text-travel-blue">{transportData.rideHailing.length}</div>
              <div className="text-sm text-muted-navy">Services</div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Airports</h3>
              <div className="text-3xl font-bold text-sage-green">{transportData.airports.length}</div>
              <div className="text-sm text-muted-navy">Available</div>
            </div>
          </div>
        </div>

        {/* Local Transport */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Bus className="mr-2 h-5 w-5" />
            Local Transportation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {transportData.localTransport && Object.entries(transportData.localTransport).map(([key, available]) => {
              const IconComponent = transportIcons[key as keyof typeof transportIcons] || Car;
              return (
                <div 
                  key={key} 
                  className={`p-4 rounded-lg text-center ${
                    available 
                      ? 'bg-sage-green/10 border border-sage-green/20' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <IconComponent className={`h-6 w-6 mx-auto mb-2 ${available ? 'text-sage-green' : 'text-gray-400'}`} />
                  <div className={`font-medium text-sm ${available ? 'text-sage-green' : 'text-gray-400'}`}>
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </div>
                  <div className={`text-xs ${available ? 'text-sage-green' : 'text-gray-400'}`}>
                    {available ? 'Available' : 'Not Available'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ride Hailing Services */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Car className="mr-2 h-5 w-5" />
            Ride Hailing Services
          </h3>
          <div className="flex flex-wrap gap-3">
            {transportData.rideHailing.map((service, index) => (
              <Badge 
                key={index}
                className="bg-travel-blue/10 text-travel-blue px-4 py-2 text-sm"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>

        {/* Airports */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Plane className="mr-2 h-5 w-5" />
            Airports
          </h3>
          <div className="grid gap-4">
            {transportData.airports.map((airport, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-travel-blue">{airport.name}</h4>
                    <div className="flex items-center text-muted-navy text-sm mt-1">
                      <Badge variant="outline" className="mr-2">{airport.code}</Badge>
                      <MapPin className="h-3 w-3 mr-1" />
                      {airport.distance} from city center
                    </div>
                  </div>
                  <div className="flex items-center text-vintage-gold">
                    <Plane className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Train Stations */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Train className="mr-2 h-5 w-5" />
            Railway Stations
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {transportData.trainStations.map((station, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-travel-blue">{station.name}</h4>
                    <Badge variant="secondary" className="bg-vintage-gold/10 text-vintage-gold mt-1">
                      {station.type}
                    </Badge>
                  </div>
                  <Train className="h-5 w-5 text-vintage-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intercity Connectivity */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-3 flex items-center">
            <Navigation className="mr-2 h-5 w-5" />
            Intercity Connectivity
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-muted-navy leading-relaxed">
              {transportData.intercityConnectivity}
            </p>
          </div>
        </div>

        {/* Transportation Tips */}
        <div className="bg-travel-blue/5 rounded-lg p-4 border-l-4 border-travel-blue">
          <h4 className="font-semibold text-travel-blue mb-2 flex items-center">
            <Car className="mr-2 h-4 w-4" />
            Transportation Tips
          </h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Download Ola and Uber apps for reliable ride-hailing services</li>
            <li>• Auto-rickshaws are often cheaper but negotiate fare beforehand</li>
            <li>• Rush hours are typically 8-10 AM and 6-8 PM</li>
            <li>• Local trains/metro are usually the fastest during peak hours</li>
            <li>• Keep small denominations for local transport payments</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
