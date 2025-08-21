import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wifi, Coffee, Users, MapPin, DollarSign, Clock, Star, ExternalLink, Phone, Calendar } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface CoworkingSpacesProps {
  city: CityWithDetails;
}

export default function CoworkingSpaces({ city }: CoworkingSpacesProps) {
  // City-specific coworking spaces data
  const getCitySpecificSpaces = (cityName: string) => {
    const spacesByCity: { [key: string]: any[] } = {
      "Goa": [
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
        }
      ],
      "Mumbai": [
        {
          name: "WeWork BKC",
          location: "Bandra Kurla Complex",
          type: "Premium Corporate",
          dayPass: "₹800",
          monthlyDesk: "₹12,000",
          monthlyPrivate: "₹22,000",
          features: ["Premium location", "24/7 access", "Meeting rooms", "Events", "Concierge"],
          rating: 4.6,
          website: "https://www.wework.com/",
          phone: "+91 22 6789 0000",
          description: "Premium corporate coworking in Mumbai's financial district with all amenities.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Barista coffee",
            aircon: "Central AC"
          }
        },
        {
          name: "91springboard Andheri",
          location: "Andheri East",
          type: "Tech Hub",
          dayPass: "₹600",
          monthlyDesk: "₹9,500",
          monthlyPrivate: "₹18,000",
          features: ["Tech community", "Mentorship", "Networking", "Events", "Startup programs"],
          rating: 4.4,
          website: "https://www.91springboard.com/",
          phone: "+91 22 6789 1234",
          description: "Tech-focused coworking space with strong startup community and mentorship programs.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Unlimited",
            aircon: "Yes"
          }
        },
        {
          name: "IndiQube Powai",
          location: "Powai, Near Tech Parks",
          type: "Business Center",
          dayPass: "₹700",
          monthlyDesk: "₹11,000",
          monthlyPrivate: "₹20,000",
          features: ["Business services", "Reception", "IT support", "Security", "Parking"],
          rating: 4.3,
          website: "https://www.indiqube.com/",
          phone: "+91 22 6789 5678",
          description: "Professional business center with full corporate services and IT support.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Cafe",
            aircon: "Central AC"
          }
        }
      ],
      "Bangalore": [
        {
          name: "WeWork Koramangala",
          location: "Koramangala 5th Block",
          type: "Tech Hub",
          dayPass: "₹700",
          monthlyDesk: "₹10,000",
          monthlyPrivate: "₹19,000",
          features: ["Startup ecosystem", "Tech community", "Events", "Meeting rooms", "Game zone"],
          rating: 4.5,
          website: "https://www.wework.com/",
          phone: "+91 80 6789 0000",
          description: "Premier tech coworking space in Bangalore's startup district with vibrant community.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Unlimited",
            aircon: "Central AC"
          }
        },
        {
          name: "The Hive",
          location: "Indiranagar",
          type: "Creative Hub",
          dayPass: "₹500",
          monthlyDesk: "₹8,500",
          monthlyPrivate: "₹16,000",
          features: ["Creative community", "Design studios", "Workshops", "Networking", "Rooftop"],
          rating: 4.4,
          website: "https://thehive.work/",
          phone: "+91 80 6789 1234",
          description: "Creative coworking space for designers, developers, and digital professionals.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "8 AM - 10 PM",
            printers: "Yes",
            coffee: "Specialty coffee",
            aircon: "Yes"
          }
        },
        {
          name: "CoWrks RMZ Infinity",
          location: "Old Madras Road",
          type: "Premium Corporate",
          dayPass: "₹800",
          monthlyDesk: "₹12,000",
          monthlyPrivate: "₹23,000",
          features: ["Premium facilities", "Corporate services", "Tech support", "Wellness center", "Food court"],
          rating: 4.6,
          website: "https://cowrks.com/",
          phone: "+91 80 6789 5678",
          description: "Premium corporate coworking with enterprise-grade facilities and services.",
          amenities: {
            wifi: "300+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Multiple cafes",
            aircon: "Central AC"
          }
        }
      ],
      "New Delhi": [
        {
          name: "WeWork Cyber Hub",
          location: "DLF Cyber Hub, Gurgaon",
          type: "Corporate Premium",
          dayPass: "₹900",
          monthlyDesk: "₹13,000",
          monthlyPrivate: "₹25,000",
          features: ["Premium location", "Corporate services", "International community", "Events", "Wellness"],
          rating: 4.7,
          website: "https://www.wework.com/",
          phone: "+91 124 6789 0000",
          description: "Premium corporate coworking in Delhi NCR's tech hub with international standards.",
          amenities: {
            wifi: "300+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Premium coffee",
            aircon: "Central AC"
          }
        },
        {
          name: "91springboard Delhi",
          location: "Connaught Place",
          type: "Startup Hub",
          dayPass: "₹650",
          monthlyDesk: "₹10,500",
          monthlyPrivate: "₹20,000",
          features: ["Central location", "Startup community", "Government connects", "Events", "Mentorship"],
          rating: 4.4,
          website: "https://www.91springboard.com/",
          phone: "+91 11 6789 1234",
          description: "Central Delhi coworking space with strong startup ecosystem and government connections.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Unlimited",
            aircon: "Yes"
          }
        }
      ],
      "Alleppey": [
        {
          name: "Backwater Co-Work",
          location: "Mullakkal Street",
          type: "Peaceful Remote",
          dayPass: "₹300",
          monthlyDesk: "₹4,000",
          monthlyPrivate: "₹8,000",
          features: ["Lake view", "Quiet environment", "Local cafe", "Bike rental", "Nature setting"],
          rating: 4.2,
          website: "Local inquiry",
          phone: "+91 477 225 1234",
          description: "Peaceful coworking space with backwater views, perfect for remote work and digital detox.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Basic",
            coffee: "Local cafe",
            aircon: "Fans + AC"
          }
        },
        {
          name: "Alleppey Digital Hub",
          location: "Near Beach",
          type: "Beach Work",
          dayPass: "₹250",
          monthlyDesk: "₹3,500",
          monthlyPrivate: "₹7,000",
          features: ["Beach access", "Flexible hours", "Community space", "Yoga classes", "Local network"],
          rating: 4.0,
          website: "Local inquiry",
          phone: "+91 477 225 5678",
          description: "Beach-side coworking with flexible schedule and community of remote workers.",
          amenities: {
            wifi: "40+ Mbps",
            hours: "Flexible",
            printers: "Basic",
            coffee: "Local style",
            aircon: "Natural ventilation"
          }
        }
      ],
      "Varkala": [
        {
          name: "Cliff Top Co-Work",
          location: "North Cliff",
          type: "Ocean View",
          dayPass: "₹400",
          monthlyDesk: "₹5,000",
          monthlyPrivate: "₹10,000",
          features: ["Ocean view", "Yoga classes", "Wellness focus", "Healthy cafe", "Sunset workspace"],
          rating: 4.5,
          website: "https://varkalacowork.com/",
          phone: "+91 470 260 1234",
          description: "Stunning cliff-top coworking with ocean views and wellness-focused community.",
          amenities: {
            wifi: "60+ Mbps",
            hours: "7 AM - 9 PM",
            printers: "Yes",
            coffee: "Organic coffee",
            aircon: "Sea breeze + fans"
          }
        },
        {
          name: "Soul & Surf Digital Nomad Hub",
          location: "South Cliff",
          type: "Surf & Work",
          dayPass: "₹350",
          monthlyDesk: "₹4,500",
          monthlyPrivate: "₹9,000",
          features: ["Surf lessons", "Community events", "Healthy food", "Beach access", "Yoga"],
          rating: 4.3,
          website: "https://soulandsurf.com/",
          phone: "+91 470 260 5678",
          description: "Unique surf and work combination with strong international nomad community.",
          amenities: {
            wifi: "55+ Mbps",
            hours: "6 AM - 10 PM",
            printers: "Basic",
            coffee: "Specialty coffee",
            aircon: "Natural + fans"
          }
        }
      ],
      "Kasol": [
        {
          name: "Mountain View Co-Work",
          location: "Kasol Main Market",
          type: "Mountain Remote",
          dayPass: "₹200",
          monthlyDesk: "₹3,000",
          monthlyPrivate: "₹6,000",
          features: ["Mountain views", "Quiet space", "Local cafe", "Trekking info", "Community board"],
          rating: 4.1,
          website: "Local inquiry",
          phone: "+91 190 222 1234",
          description: "Simple mountain coworking space with stunning valley views and trekking community.",
          amenities: {
            wifi: "30+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Basic",
            coffee: "Israeli cafe",
            aircon: "Natural mountain air"
          }
        },
        {
          name: "Parvati Valley Digital Hub",
          location: "Chalal Village",
          type: "Village Setting",
          dayPass: "₹150",
          monthlyDesk: "₹2,500",
          monthlyPrivate: "₹5,000",
          features: ["Village setting", "Trekking base", "Community kitchen", "Local guides", "Nature immersion"],
          rating: 3.9,
          website: "Local inquiry",
          phone: "+91 190 222 5678",
          description: "Rustic village coworking perfect for digital detox and mountain lifestyle.",
          amenities: {
            wifi: "25+ Mbps",
            hours: "Flexible",
            printers: "No",
            coffee: "Chai & local",
            aircon: "Mountain breeze"
          }
        }
      ]
    };

    return spacesByCity[cityName] || spacesByCity["Goa"];
  };

  const coworkingSpaces = getCitySpecificSpaces(city.name);

  const getTypeColor = (type: string) => {
    const typeColors: { [key: string]: string } = {
      "Premium": "bg-vintage-gold/10 text-vintage-gold",
      "Beach-side": "bg-travel-blue/10 text-travel-blue",
      "Corporate": "bg-sage-green/10 text-sage-green",
      "Tech Hub": "bg-vintage-gold/10 text-vintage-gold",
      "Creative Hub": "bg-travel-blue/10 text-travel-blue",
      "Startup Hub": "bg-sage-green/10 text-sage-green",
      "Remote": "bg-muted-navy/10 text-muted-navy",
      "Ocean View": "bg-travel-blue/10 text-travel-blue",
      "Mountain Remote": "bg-sage-green/10 text-sage-green"
    };
    return typeColors[type] || "bg-gray-100 text-gray-600";
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Users className="mr-3 h-8 w-8 text-vintage-gold" />
          Coworking Spaces in {city.name}
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Professional workspaces designed for digital nomads, freelancers, and remote workers with all amenities and vibrant communities.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid gap-6">
          {coworkingSpaces.map((space, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-xl text-travel-blue mb-2">{space.name}</h3>
                  <div className="flex items-center text-muted-navy mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {space.location}
                  </div>
                  <Badge className={getTypeColor(space.type)}>{space.type}</Badge>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-1">
                    <Star className="h-4 w-4 text-vintage-gold mr-1" />
                    <span className="font-semibold">{space.rating}</span>
                  </div>
                  <div className="text-sm text-muted-navy">Rating</div>
                </div>
              </div>

              <p className="text-muted-navy mb-4">{space.description}</p>

              {/* Pricing */}
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex items-center mb-1">
                    <DollarSign className="h-4 w-4 text-sage-green mr-1" />
                    <span className="font-semibold text-sage-green">Day Pass</span>
                  </div>
                  <div className="text-xl font-bold text-travel-blue">{space.dayPass}</div>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex items-center mb-1">
                    <Users className="h-4 w-4 text-travel-blue mr-1" />
                    <span className="font-semibold text-travel-blue">Hot Desk</span>
                  </div>
                  <div className="text-xl font-bold text-travel-blue">{space.monthlyDesk}</div>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex items-center mb-1">
                    <Users className="h-4 w-4 text-vintage-gold mr-1" />
                    <span className="font-semibold text-vintage-gold">Private Office</span>
                  </div>
                  <div className="text-xl font-bold text-travel-blue">{space.monthlyPrivate}</div>
                </div>
              </div>

              {/* Amenities */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-travel-blue mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {space.features.map((feature: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="bg-travel-blue/10 text-travel-blue">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-travel-blue mb-2">Amenities</h4>
                  <div className="space-y-1 text-sm text-muted-navy">
                    <div className="flex items-center">
                      <Wifi className="h-3 w-3 mr-2" />
                      WiFi: {space.amenities.wifi}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-2" />
                      Hours: {space.amenities.hours}
                    </div>
                    <div className="flex items-center">
                      <Coffee className="h-3 w-3 mr-2" />
                      Coffee: {space.amenities.coffee}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-muted-navy">
                  <div className="flex items-center">
                    <Phone className="h-3 w-3 mr-1" />
                    {space.phone}
                  </div>
                </div>
                <div className="flex space-x-2">
                  {space.website && space.website !== "Local inquiry" && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={space.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                  <Button size="sm" asChild>
                    <a href={`tel:${space.phone}`}>
                      <Phone className="h-3 w-3 mr-1" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-vintage-gold/10 to-travel-blue/10 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-travel-blue mb-4">
            {city.name} Coworking Scene Summary
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-travel-blue">{coworkingSpaces.length}</div>
              <div className="text-sm text-muted-navy">Total Spaces</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-vintage-gold">
                {Math.min(...coworkingSpaces.map(s => parseInt(s.dayPass.replace('₹', '').replace(',', ''))))}
              </div>
              <div className="text-sm text-muted-navy">Min Day Pass (₹)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sage-green">
                {Math.round(coworkingSpaces.reduce((acc, s) => acc + s.rating, 0) / coworkingSpaces.length * 10) / 10}
              </div>
              <div className="text-sm text-muted-navy">Avg Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-travel-blue">
                {Math.min(...coworkingSpaces.map(s => parseInt(s.monthlyDesk.replace('₹', '').replace(',', ''))))}
              </div>
              <div className="text-sm text-muted-navy">Min Monthly (₹)</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}