import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Calendar, MapPin, Coffee, Briefcase } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface CommunityNomadsProps {
  city: CityWithDetails;
}

export default function CommunityNomads({ city }: CommunityNomadsProps) {
  // Mock community data for comprehensive content
  const coworkingSpaces = [
    { name: "WeWork", type: "Premium", price: "₹800-1200/day", amenities: "High-speed WiFi, Meeting rooms, Coffee", rating: 4.5 },
    { name: "Innov8", type: "Professional", price: "₹600-1000/day", amenities: "24/7 access, Printing, Cafeteria", rating: 4.3 },
    { name: "91SpringBoard", type: "Community", price: "₹400-800/day", amenities: "Events, Networking, Workspace", rating: 4.2 },
    { name: "Local CoWork", type: "Budget", price: "₹200-500/day", amenities: "Basic WiFi, Desk space, AC", rating: 4.0 }
  ];

  const meetupGroups = [
    { name: "Digital Nomads " + city.name, members: "450+", focus: "Networking & Events", frequency: "Weekly" },
    { name: "Startup Community", members: "800+", focus: "Entrepreneurship", frequency: "Bi-weekly" },
    { name: "Freelancers Hub", members: "320+", focus: "Skill sharing", frequency: "Monthly" },
    { name: "Remote Workers", members: "600+", focus: "Coworking meetups", frequency: "Weekly" },
    { name: "Tech Talks", members: "1200+", focus: "Technology trends", frequency: "Monthly" }
  ];

  const expatCommunities = [
    { nationality: "International", platform: "Facebook Groups", members: "2000+", activity: "Very Active" },
    { nationality: "European", platform: "WhatsApp", members: "150+", activity: "Active" },
    { nationality: "American", platform: "Telegram", members: "300+", activity: "Moderate" },
    { nationality: "Asian", platform: "WeChat", members: "200+", activity: "Active" },
    { nationality: "General Expat", platform: "Reddit", members: "1500+", activity: "Very Active" }
  ];

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Users className="mr-3 h-8 w-8 text-vintage-gold" />
          Community & Nomad Scene
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Connect with like-minded remote workers and digital nomads in {city.name}'s thriving community.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Coworking Spaces */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Briefcase className="mr-2 h-5 w-5" />
            Coworking Spaces
          </h3>
          <div className="grid gap-4">
            {coworkingSpaces.map((space, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-travel-blue">{space.name}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant={space.type === "Premium" ? "default" : "secondary"} 
                           className={space.type === "Premium" ? "bg-vintage-gold text-white" : "bg-travel-blue/10 text-travel-blue"}>
                      {space.type}
                    </Badge>
                    <span className="text-sm text-vintage-gold">★ {space.rating}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-navy">
                  <div><strong>Price:</strong> {space.price}</div>
                  <div><strong>Amenities:</strong> {space.amenities}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meetup Groups */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Meetup Groups & Networking
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {meetupGroups.map((group, index) => (
              <div key={index} className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-travel-blue">{group.name}</h4>
                  <Badge className="bg-sage-green/10 text-sage-green">{group.members}</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-navy">
                  <div><strong>Focus:</strong> {group.focus}</div>
                  <div><strong>Meets:</strong> {group.frequency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expat Communities */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <MessageCircle className="mr-2 h-5 w-5" />
            Expat Communities
          </h3>
          <div className="grid gap-3">
            {expatCommunities.map((community, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-travel-blue/5 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-vintage-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-travel-blue">{community.nationality}</h4>
                    <p className="text-sm text-muted-navy">{community.platform}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-travel-blue">{community.members}</div>
                  <div className="text-sm text-muted-navy">{community.activity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Nomad Hangouts */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Coffee className="mr-2 h-5 w-5" />
            Popular Nomad Hangouts
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-warm-terracotta/5 rounded-lg p-4 border border-warm-terracotta/20">
              <h4 className="font-semibold text-warm-terracotta mb-2">Cafes with WiFi</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Starbucks (Fast WiFi, ₹200-400/coffee)</li>
                <li>• Blue Tokai Coffee (Local chain, ₹150-300)</li>
                <li>• Cafe Coffee Day (Budget option, ₹100-250)</li>
                <li>• Local independent cafes (₹80-200)</li>
              </ul>
            </div>
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Evening Spots</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Rooftop bars (Networking events)</li>
                <li>• Local breweries (Casual meetups)</li>
                <li>• Beach shacks (Goa) / Garden cafes</li>
                <li>• Co-living common areas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            Community Tips
          </h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Join Facebook groups before arriving for local tips and housing</li>
            <li>• Attend coworking space events for instant networking</li>
            <li>• Use Bumble BFF or Meetup apps to find like-minded people</li>
            <li>• Many nomads organize informal beach/park workdays</li>
            <li>• WhatsApp groups are very active for daily coordination</li>
            <li>• Respect local customs when organizing public meetups</li>
          </ul>
        </div>

        {/* Language Exchange */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4">🗣️ Language & Cultural Exchange</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-travel-blue mb-2">Language Cafes</h5>
                <p className="text-muted-navy">Weekly English-Hindi exchange sessions at local cafes. Great for cultural learning.</p>
              </div>
              <div>
                <h5 className="font-semibold text-travel-blue mb-2">Cultural Events</h5>
                <p className="text-muted-navy">Festival celebrations, cooking classes, and traditional art workshops with locals.</p>
              </div>
              <div>
                <h5 className="font-semibold text-travel-blue mb-2">Volunteer Groups</h5>
                <p className="text-muted-navy">Community service projects, teaching, and environmental initiatives to give back.</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}