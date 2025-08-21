import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Phone, AlertTriangle, Hospital, Users } from "lucide-react";
import type { Safety } from "@shared/schema";

interface SafetyHealthcareProps {
  safetyData: Safety | null;
}

export default function SafetyHealthcare({ safetyData }: SafetyHealthcareProps) {
  if (!safetyData) {
    return (
      <Card className="bg-white rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
            <Shield className="mr-2 h-6 w-6 text-vintage-gold" />
            Safety & Healthcare
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-navy">Safety and healthcare data is not available for this city.</p>
        </CardContent>
      </Card>
    );
  }

  const getSafetyColor = (score: number) => {
    if (score >= 8) return "sage-green";
    if (score >= 6) return "vintage-gold";
    if (score >= 4) return "sunset-orange";
    return "warm-terracotta";
  };

  const getSafetyLabel = (score: number) => {
    if (score >= 8) return "Very Safe";
    if (score >= 6) return "Safe";
    if (score >= 4) return "Moderate";
    return "Caution Required";
  };

  const getPollutionColor = (index: number) => {
    if (index <= 50) return "sage-green";
    if (index <= 100) return "vintage-gold";
    if (index <= 200) return "sunset-orange";
    return "warm-terracotta";
  };

  const getPollutionLabel = (index: number) => {
    if (index <= 50) return "Good";
    if (index <= 100) return "Moderate";
    if (index <= 200) return "Unhealthy";
    return "Hazardous";
  };

  const safetyScore = parseFloat(safetyData.safetyScore);
  const womenSafetyScore = safetyData.womenSafetyScore ? parseFloat(safetyData.womenSafetyScore) : null;
  const safetyColor = getSafetyColor(safetyScore);
  const safetyLabel = getSafetyLabel(safetyScore);
  
  const pollutionColor = safetyData.pollutionIndex ? getPollutionColor(safetyData.pollutionIndex) : "vintage-gold";
  const pollutionLabel = safetyData.pollutionIndex ? getPollutionLabel(safetyData.pollutionIndex) : "Unknown";

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <Shield className="mr-2 h-6 w-6 text-vintage-gold" />
          Safety & Healthcare
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Safety Overview */}
        <div className="bg-gradient-to-r from-sage-green/10 to-travel-blue/10 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Overall Safety</h3>
              <div className={`text-3xl font-bold text-${safetyColor}`}>{safetyScore}/10</div>
              <Badge className={`bg-${safetyColor}/10 text-${safetyColor} mt-2`}>
                {safetyLabel}
              </Badge>
            </div>
            {womenSafetyScore && (
              <div className="text-center">
                <h3 className="font-semibold text-travel-blue mb-2">Women Safety</h3>
                <div className={`text-3xl font-bold text-${getSafetyColor(womenSafetyScore)}`}>
                  {womenSafetyScore}/10
                </div>
                <Badge className={`bg-${getSafetyColor(womenSafetyScore)}/10 text-${getSafetyColor(womenSafetyScore)} mt-2`}>
                  {getSafetyLabel(womenSafetyScore)}
                </Badge>
              </div>
            )}
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Air Quality</h3>
              <div className={`text-3xl font-bold text-${pollutionColor}`}>
                {safetyData.pollutionIndex || "N/A"}
              </div>
              <Badge className={`bg-${pollutionColor}/10 text-${pollutionColor} mt-2`}>
                {pollutionLabel}
              </Badge>
            </div>
          </div>
        </div>

        {/* Crime Information */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Crime & Safety Information
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-muted-navy leading-relaxed mb-4">
              <strong>Crime Rate:</strong> {safetyData.crimeRate}
            </p>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">General Safety Guidelines</h4>
              <ul className="space-y-1 text-muted-navy text-sm">
                <li>• Avoid displaying expensive items in public</li>
                <li>• Use registered taxis or ride-hailing services at night</li>
                <li>• Keep copies of important documents separate from originals</li>
                <li>• Stay in well-lit, populated areas after dark</li>
                <li>• Trust your instincts and remove yourself from uncomfortable situations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Women Travelers Safety */}
        {womenSafetyScore && (
          <div>
            <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Women Travelers Safety
            </h3>
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sage-green mb-2">Safe Practices</h4>
                  <ul className="space-y-1 text-muted-navy text-sm">
                    <li>• Dress modestly, especially in religious areas</li>
                    <li>• Use women-only compartments in trains/metros where available</li>
                    <li>• Book accommodations in safe, well-reviewed areas</li>
                    <li>• Share your itinerary with trusted contacts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sage-green mb-2">Helpful Resources</h4>
                  <ul className="space-y-1 text-muted-navy text-sm">
                    <li>• Women helpline: 1091</li>
                    <li>• Download safety apps like SafeCity</li>
                    <li>• Connect with local women's groups/expat communities</li>
                    <li>• Know nearest police station locations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Healthcare Facilities */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Hospital className="mr-2 h-5 w-5" />
            Healthcare Facilities
          </h3>
          <div className="grid gap-4">
            {safetyData.hospitals.map((hospital, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-travel-blue">{hospital.name}</h4>
                    <p className="text-muted-navy text-sm mt-1">{hospital.address}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="secondary" className="bg-vintage-gold/10 text-vintage-gold">
                        {hospital.type}
                      </Badge>
                      {hospital.emergency && (
                        <Badge className="bg-warm-terracotta/10 text-warm-terracotta">
                          24/7 Emergency
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Heart className="h-5 w-5 text-vintage-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Emergency Contacts
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {safetyData.emergencyNumbers && Object.entries(safetyData.emergencyNumbers).map(([service, number]) => (
              <div key={service} className="bg-warm-terracotta/5 rounded-lg p-4 border border-warm-terracotta/20">
                <div className="text-center">
                  <Phone className="h-6 w-6 text-warm-terracotta mx-auto mb-2" />
                  <div className="font-semibold text-travel-blue capitalize">{service}</div>
                  <div className="text-2xl font-bold text-warm-terracotta">{number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <Heart className="mr-2 h-4 w-4" />
            Health & Safety Tips
          </h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Get travel insurance that covers medical emergencies</li>
            <li>• Drink bottled or filtered water to avoid stomach issues</li>
            <li>• Carry basic medications and first aid supplies</li>
            <li>• Be cautious with street food until your stomach adapts</li>
            <li>• Keep emergency contacts easily accessible on your phone</li>
            <li>• Register with your embassy/consulate if staying long-term</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
