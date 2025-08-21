import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wifi, Coffee, Users, MapPin, DollarSign, Clock, Star, ExternalLink, Phone, Calendar } from "lucide-react";

interface CoworkingSpacesProps {
  cityName: string;
}

export default function CoworkingSpaces({ cityName }: CoworkingSpacesProps) {
  const goaCoworkingSpaces = [
    {
      name: "91springboard Goa",
      location: "Porvorim, North Goa",
      type: "Premium",
      dayPass: "₹500",
      monthlyDesk: "₹8,000",
      monthlyPrivate: "₹15,000",
      features: ["High-speed WiFi", "Meeting rooms", "Events", "Cafe", "Parking"],
      rating: 4.5,
      website: "https://www.91springboard.com/",
      phone: "+91 832 671 1234",
      description: "Professional coworking space with startup ecosystem and regular networking events.",
      amenities: {
        wifi: "100+ Mbps",
        hours: "24/7 access",
        printers: "Yes",
        coffee: "Unlimited",
        aircon: "Yes"
      }
    },
    {
      name: "Drishti Coworking",
      location: "Anjuna, North Goa",
      type: "Beach-side",
      dayPass: "₹400",
      monthlyDesk: "₹6,500",
      monthlyPrivate: "₹12,000",
      features: ["Beach location", "Outdoor workspace", "Yoga classes", "Healthy cafe", "Bike rental"],
      rating: 4.3,
      website: "https://drishticoworking.com/",
      phone: "+91 832 227 8900",
      description: "Unique beachside coworking with wellness focus and outdoor workspace options.",
      amenities: {
        wifi: "50+ Mbps",
        hours: "7 AM - 10 PM",
        printers: "Yes",
        coffee: "Premium coffee",
        aircon: "Yes"
      }
    },
    {
      name: "IndiQube Goa",
      location: "IT Park, Vasco",
      type: "Corporate",
      dayPass: "₹600",
      monthlyDesk: "₹9,500",
      monthlyPrivate: "₹18,000",
      features: ["Business center", "Video conferencing", "Reception", "IT support", "Security"],
      rating: 4.2,
      website: "https://www.indiqube.com/",
      phone: "+91 832 123 4567",
      description: "Corporate-grade facilities with full business services and professional environment.",
      amenities: {
        wifi: "200+ Mbps",
        hours: "24/7 access",
        printers: "Yes",
        coffee: "Cafe",
        aircon: "Yes"
      }
    },
    {
      name: "The Working Capitol",
      location: "Panjim, Central Goa",
      type: "Central",
      dayPass: "₹450",
      monthlyDesk: "₹7,500",
      monthlyPrivate: "₹14,000",
      features: ["City center", "River view", "Creative space", "Photography studio", "Events"],
      rating: 4.4,
      website: "https://theworkingcapitol.com/",
      phone: "+91 832 234 5678",
      description: "Creative hub in city center with river views and frequent creative workshops.",
      amenities: {
        wifi: "80+ Mbps",
        hours: "8 AM - 10 PM",
        printers: "Yes",
        coffee: "Artisan coffee",
        aircon: "Yes"
      }
    },
    {
      name: "Coconut Co-work",
      location: "Arambol, North Goa",
      type: "Bohemian",
      dayPass: "₹300",
      monthlyDesk: "₹5,000",
      monthlyPrivate: "₹9,000",
      features: ["Beach proximity", "Community garden", "Music events", "Vegetarian cafe", "Wellness"],
      rating: 4.1,
      website: "https://coconutcowork.com/",
      phone: "+91 832 345 6789",
      description: "Bohemian-style coworking near Arambol beach with strong community and wellness focus.",
      amenities: {
        wifi: "40+ Mbps",
        hours: "7 AM - 9 PM",
        printers: "Basic",
        coffee: "Organic coffee",
        aircon: "Fans + AC"
      }
    },
    {
      name: "Workafella Goa",
      location: "Margao, South Goa",
      type: "Modern",
      dayPass: "₹550",
      monthlyDesk: "₹8,500",
      monthlyPrivate: "₹16,000",
      features: ["Modern design", "Gaming zone", "Podcast studio", "Rooftop terrace", "Tech talks"],
      rating: 4.3,
      website: "https://workafella.com/",
      phone: "+91 832 456 7890",
      description: "Modern workspace with tech amenities and strong startup community.",
      amenities: {
        wifi: "150+ Mbps",
        hours: "24/7 access",
        printers: "Yes",
        coffee: "Specialty coffee",
        aircon: "Yes"
      }
    }
  ];

  const coworkingTips = {
    choosingSpace: [
      "Visit during your typical working hours to check ambiance",
      "Test the WiFi speed and stability during peak hours",
      "Check proximity to accommodation and transport",
      "Verify AC/cooling as Goa can get very hot",
      "Ask about surge pricing during peak tourist season"
    ],
    budgetOptimization: [
      "Book monthly passes instead of daily for 40% savings",
      "Share desk space with other nomads to split costs",
      "Use cafe coworking for shorter stays (₹200-300/day)",
      "Negotiate rates for 3+ month commitments",
      "Look for off-season discounts (June-September)"
    ],
    networking: [
      "Attend weekly networking events at 91springboard",
      "Join Goa Digital Nomads WhatsApp groups",
      "Participate in beach cleanup coworking events",
      "Attend tech talks and startup pitches",
      "Join shared dinners and weekend trips"
    ]
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Wifi className="mr-3 h-8 w-8 text-vintage-gold" />
          Coworking Spaces & Remote Work Hubs
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Comprehensive guide to {cityName}'s best coworking spaces, pricing, and remote work infrastructure.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Coworking Spaces Directory */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-6 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            🏢 Top Coworking Spaces in {cityName}
          </h3>
          <div className="space-y-6">
            {goaCoworkingSpaces.map((space, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-travel-blue text-lg">{space.name}</h4>
                        <p className="text-sm text-muted-navy flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {space.location}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-vintage-gold/10 text-vintage-gold">
                          {space.type}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-vintage-gold mr-1" />
                          <span className="text-sm font-medium">{space.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-navy mb-4">{space.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="font-medium text-muted-navy">WiFi Speed:</span>
                        <div className="text-travel-blue">{space.amenities.wifi}</div>
                      </div>
                      <div>
                        <span className="font-medium text-muted-navy">Hours:</span>
                        <div className="text-travel-blue">{space.amenities.hours}</div>
                      </div>
                      <div>
                        <span className="font-medium text-muted-navy">Coffee:</span>
                        <div className="text-travel-blue">{space.amenities.coffee}</div>
                      </div>
                      <div>
                        <span className="font-medium text-muted-navy">Climate:</span>
                        <div className="text-travel-blue">{space.amenities.aircon}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {space.features.map((feature, fIndex) => (
                        <Badge key={fIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-travel-blue mb-3">Pricing</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Day Pass</span>
                          <span className="font-semibold text-vintage-gold">{space.dayPass}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monthly Desk</span>
                          <span className="font-semibold text-vintage-gold">{space.monthlyDesk}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Private Office</span>
                          <span className="font-semibold text-vintage-gold">{space.monthlyPrivate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <a href={space.website} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-travel-blue hover:bg-travel-blue/90 text-white">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Visit Website
                        </Button>
                      </a>
                      <a href={`tel:${space.phone}`}>
                        <Button variant="outline" className="w-full">
                          <Phone className="h-3 w-3 mr-1" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coworking Tips */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Coffee className="mr-2 h-5 w-5" />
            💡 Smart Coworking Tips for {cityName}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-3">Choosing the Right Space</h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {coworkingTips.choosingSpace.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Budget Optimization</h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {coworkingTips.budgetOptimization.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Networking & Community</h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {coworkingTips.networking.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Alternative Work Spaces */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Coffee className="mr-2 h-5 w-5" />
            ☕ Alternative Workspaces & Cafes
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Laptop-Friendly Cafes</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Bean Me Up (Anjuna)</span>
                  <span className="text-vintage-gold">₹200-400/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Artjuna (Anjuna)</span>
                  <span className="text-vintage-gold">₹300-500/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Cafe Karma (Arambol)</span>
                  <span className="text-vintage-gold">₹250-400/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Purple Martini (Calangute)</span>
                  <span className="text-vintage-gold">₹350-600/day</span>
                </div>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Hotel & Resort Day Passes</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-medium">W Goa (Vagator)</span>
                  <span className="text-vintage-gold">₹1,500/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Taj Vivanta (Panaji)</span>
                  <span className="text-vintage-gold">₹1,200/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Park Hyatt (Cansaulim)</span>
                  <span className="text-vintage-gold">₹2,000/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Alila Diwa (Majorda)</span>
                  <span className="text-vintage-gold">₹1,800/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coworking Resources */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <ExternalLink className="mr-2 h-5 w-5" />
            🌐 Coworking Resources & Booking Platforms
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Booking Platforms</h4>
              <div className="space-y-2 text-sm">
                <a href="https://www.coworker.com/india/goa" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Coworker.com - Global directory
                </a>
                <a href="https://gowiththeflo.com/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Flo - Nomad community
                </a>
                <a href="https://www.workfrom.co/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Work From - Cafe reviews
                </a>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Community Groups</h4>
              <div className="space-y-2 text-sm">
                <a href="https://nomadlist.com/goa" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Nomad List - Goa community
                </a>
                <a href="https://www.facebook.com/groups/goaDigitalNomads/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Goa Digital Nomads (Facebook)
                </a>
                <a href="https://join.slack.com/t/remoteyear/shared_invite/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Remote Year Slack
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}