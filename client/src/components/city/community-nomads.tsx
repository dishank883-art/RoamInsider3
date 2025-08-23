import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Calendar, MapPin, Coffee, Briefcase, Crown, ExternalLink } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface CommunityNomadsProps {
  city: CityWithDetails;
}

export default function CommunityNomads({ city }: CommunityNomadsProps) {
  // City-specific coworking spaces data
  const getCitySpecificData = (cityName: string) => {
    const cityData: Record<string, any> = {
      "Mumbai": {
        coworkingSpaces: [
          { name: "WeWork BKC", type: "Premium", price: "₹1000-1500/day", amenities: "High-speed WiFi, Meeting rooms, Premium location", rating: 4.6 },
          { name: "Innov8 Andheri", type: "Professional", price: "₹800-1200/day", amenities: "24/7 access, Event space, Cafeteria", rating: 4.4 },
          { name: "91SpringBoard Lower Parel", type: "Community", price: "₹600-900/day", amenities: "Networking events, Mentorship, Startup ecosystem", rating: 4.3 },
          { name: "BHIVE Workspace", type: "Budget", price: "₹400-700/day", amenities: "Basic amenities, Good WiFi, AC", rating: 4.1 }
        ],
        hangouts: {
          cafes: [
            "• Blue Tokai Coffee (Multiple locations, ₹200-400)",
            "• Starbucks Marine Drive (Sea view, ₹250-450)",
            "• Third Wave Coffee Bandra (Hip atmosphere, ₹180-350)",
            "• Local Irani cafes Colaba (Heritage, ₹80-200)"
          ],
          evening: [
            "• Rooftop bars in Lower Parel (Networking events)",
            "• Social at Palladium (Co-working meets social)",
            "• Prithvi Cafe Juhu (Theater crowd)",
            "• Bandra Linking Road cafes (Casual meetups)"
          ]
        }
      },
      "Bangalore": {
        coworkingSpaces: [
          { name: "WeWork Koramangala", type: "Premium", price: "₹800-1200/day", amenities: "Premium location, High-speed WiFi, Events", rating: 4.5 },
          { name: "Innov8 Indiranagar", type: "Professional", price: "₹600-1000/day", amenities: "24/7 access, Meeting rooms, Cafe", rating: 4.4 },
          { name: "91SpringBoard HSR", type: "Community", price: "₹500-800/day", amenities: "Startup community, Events, Mentorship", rating: 4.2 },
          { name: "BHIVE Workspace", type: "Budget", price: "₹300-600/day", amenities: "Multiple locations, Good WiFi, Flexible", rating: 4.0 }
        ],
        hangouts: {
          cafes: [
            "• Third Wave Coffee (Multiple locations, ₹150-300)",
            "• Starbucks Brigade Road (Central location, ₹200-400)",
            "• Blue Tokai Indiranagar (Specialty coffee, ₹180-350)",
            "• Local filter coffee shops (Authentic, ₹20-80)"
          ],
          evening: [
            "• Toit Brewery Indiranagar (Craft beer, networking)",
            "• Social Koramangala (Co-working + drinks)",
            "• Church Street cafes (Evening hangouts)",
            "• Cubbon Park area (Outdoor meetups)"
          ]
        }
      },
      "Goa": {
        coworkingSpaces: [
          { name: "91SpringBoard Panjim", type: "Premium", price: "₹600-900/day", amenities: "Beachside location, High-speed WiFi, Events", rating: 4.3 },
          { name: "Drishti Marine Calangute", type: "Professional", price: "₹500-800/day", amenities: "Near beach, Meeting rooms, Cafe", rating: 4.2 },
          { name: "Workation Spaces Arambol", type: "Community", price: "₹400-700/day", amenities: "Nomad community, Beach access, Networking", rating: 4.1 },
          { name: "Local Beach Cafes", type: "Budget", price: "₹200-400/day", amenities: "Beach view, WiFi, Relaxed vibe", rating: 3.9 }
        ],
        hangouts: {
          cafes: [
            "• Artjuna Cafe Anjuna (Nomad hotspot, ₹150-350)",
            "• Sublime Morjim (Beachfront workspace, ₹200-400)",
            "• Cafe Lilliput Anjuna (Popular with freelancers, ₹120-280)",
            "• Thirsty Bear Arambol (Beach shack office, ₹100-250)"
          ],
          evening: [
            "• Shiva Valley Anjuna (Sunset sessions)",
            "• Arambol Beach cafes (Live music, networking)",
            "• Tito's Lane Baga (Night networking)",
            "• Morjim Beach shacks (Chill evening spots)"
          ]
        }
      },
      "Pune": {
        coworkingSpaces: [
          { name: "WeWork Koregaon Park", type: "Premium", price: "₹700-1000/day", amenities: "Premium location, Events, High-speed WiFi", rating: 4.4 },
          { name: "Innov8 Viman Nagar", type: "Professional", price: "₹500-800/day", amenities: "IT hub location, 24/7 access, Cafeteria", rating: 4.2 },
          { name: "91SpringBoard Kalyani Nagar", type: "Community", price: "₹400-700/day", amenities: "Startup ecosystem, Networking events", rating: 4.1 },
          { name: "BHIVE Workspace", type: "Budget", price: "₹300-500/day", amenities: "Multiple locations, Student-friendly", rating: 4.0 }
        ],
        hangouts: {
          cafes: [
            "• German Bakery Koregaon Park (Classic spot, ₹150-300)",
            "• Starbucks FC Road (Student hub, ₹200-400)",
            "• Cafe Goodluck FC Road (Heritage, ₹80-200)",
            "• Arthur's Theme Kalyani Nagar (Work-friendly, ₹120-280)"
          ],
          evening: [
            "• High Spirits Koregaon Park (Live music, networking)",
            "• Effingut Koregaon Park (Craft brewery)",
            "• FC Road cafes (Student networking)",
            "• Phoenix Mall meetup spots"
          ]
        }
      },
      "Rishikesh": {
        coworkingSpaces: [
          { name: "Zostel Plus Rishikesh", type: "Community", price: "₹300-500/day", amenities: "Riverside location, Yoga vibes, Community", rating: 4.2 },
          { name: "Ganga View Cafe", type: "Budget", price: "₹200-400/day", amenities: "River view, WiFi, Peaceful", rating: 4.0 },
          { name: "Soul Space Tapovan", type: "Wellness", price: "₹400-600/day", amenities: "Yoga integration, Meditation space", rating: 4.1 },
          { name: "Local River Cafes", type: "Budget", price: "₹150-300/day", amenities: "Ganga view, Basic WiFi, Spiritual vibe", rating: 3.8 }
        ],
        hangouts: {
          cafes: [
            "• Beatles Cafe (Iconic spot, ₹100-250)",
            "• Little Buddha Cafe (Riverside, ₹120-280)",
            "• Pyramid Cafe Tapovan (Spiritual vibes, ₹80-200)",
            "• Cafe Nirvana (Mountain view, ₹100-220)"
          ],
          evening: [
            "• Ganga Aarti at Parmarth Niketan",
            "• Sunset Point Ram Jhula",
            "• Tapovan evening walks",
            "• Yoga centers community gatherings"
          ]
        }
      },
      "Kolkata": {
        coworkingSpaces: [
          { name: "91SpringBoard Salt Lake", type: "Professional", price: "₹500-800/day", amenities: "IT hub, Modern amenities, Events", rating: 4.2 },
          { name: "Innov8 Park Street", type: "Premium", price: "₹600-900/day", amenities: "Central location, Heritage building", rating: 4.3 },
          { name: "NASSCOM Warehouse", type: "Community", price: "₹400-600/day", amenities: "Startup ecosystem, Networking", rating: 4.0 },
          { name: "Local Coffee Houses", type: "Budget", price: "₹150-300/day", amenities: "Heritage cafes, Cultural vibe", rating: 3.9 }
        ],
        hangouts: {
          cafes: [
            "• Indian Coffee House College Street (Heritage, ₹50-150)",
            "• Flurys Park Street (Colonial charm, ₹200-400)",
            "• Cafe Coffee Day Salt Lake (Modern, ₹120-250)",
            "• Oxford Bookstore Cafe (Literary hub, ₹150-300)"
          ],
          evening: [
            "• Park Street bars (Literary crowd)",
            "• Salt Lake pubs (IT crowd networking)",
            "• Cafe cultural centers (Arts community)",
            "• Maidan evening walks (Intellectual discussions)"
          ]
        }
      },
      "New Delhi": {
        coworkingSpaces: [
          { name: "WeWork Connaught Place", type: "Premium", price: "₹1200-1800/day", amenities: "Prime location, High-speed WiFi, Premium amenities", rating: 4.5 },
          { name: "Innov8 Connaught Place", type: "Professional", price: "₹800-1200/day", amenities: "Central location, Modern amenities, Events", rating: 4.3 },
          { name: "91SpringBoard Gurgaon", type: "Community", price: "₹600-1000/day", amenities: "Corporate hub, Networking, Startup ecosystem", rating: 4.2 },
          { name: "Cafe workspaces", type: "Budget", price: "₹300-600/day", amenities: "Multiple locations, Flexible, WiFi", rating: 4.0 }
        ],
        hangouts: {
          cafes: [
            "• Starbucks Connaught Place (Central location, ₹250-500)",
            "• Blue Tokai Khan Market (Hip crowd, ₹200-400)",
            "• Cafe Coffee Day Multiple locations (₹150-300)",
            "• Local chai shops around Metro stations (₹20-80)"
          ],
          evening: [
            "• Hauz Khas Village bars (Creative crowd)",
            "• CP area pubs and bars (Central networking)",
            "• Cyber Hub Gurgaon (Corporate networking)",
            "• India Gate lawns (Evening discussions)"
          ]
        }
      },
      "Udaipur": {
        coworkingSpaces: [
          { name: "Lake View Workspaces", type: "Premium", price: "₹400-700/day", amenities: "Heritage setting, Lake views, WiFi", rating: 4.2 },
          { name: "Palace Hotel Business Centers", type: "Professional", price: "₹600-900/day", amenities: "Luxury setting, Meeting rooms", rating: 4.1 },
          { name: "Local Cafe Workspaces", type: "Community", price: "₹200-400/day", amenities: "Rooftop views, Community feel", rating: 4.0 },
          { name: "Hostel Work Areas", type: "Budget", price: "₹150-300/day", amenities: "Backpacker friendly, Basic WiFi", rating: 3.8 }
        ],
        hangouts: {
          cafes: [
            "• Cafe Edelweiss (Lake views, ₹150-350)",
            "• Jheel's Ginger Coffee Bar (Rooftop, ₹120-280)",
            "• Cafe Shanti (Peaceful setting, ₹100-250)",
            "• Palki Khana rooftop cafes (Heritage, ₹150-300)"
          ],
          evening: [
            "• Lake Pichola sunset spots",
            "• City Palace area evening walks",
            "• Rooftop restaurants with lake views",
            "• Local cultural performance venues"
          ]
        }
      },
      "Pondicherry": {
        coworkingSpaces: [
          { name: "French Quarter Workspaces", type: "Premium", price: "₹500-800/day", amenities: "Colonial charm, Heritage building, WiFi", rating: 4.3 },
          { name: "Beach Road Cafes", type: "Community", price: "₹300-600/day", amenities: "Sea breeze, Relaxed vibe, Good WiFi", rating: 4.1 },
          { name: "Auroville Work Centers", type: "Spiritual", price: "₹250-500/day", amenities: "Peaceful environment, Community", rating: 4.0 },
          { name: "Local Heritage Cafes", type: "Budget", price: "₹200-400/day", amenities: "French architecture, Basic amenities", rating: 3.9 }
        ],
        hangouts: {
          cafes: [
            "• Cafe Xtasi (Pizza and workspace, ₹200-400)",
            "• Coromandel Cafe (Heritage building, ₹150-350)",
            "• Surguru Restaurant (Local favorite, ₹80-200)",
            "• French cafes in White Town (Colonial, ₹250-450)"
          ],
          evening: [
            "• Beach Road promenade evening walks",
            "• White Town heritage area",
            "• Auroville sunset points",
            "• Local Tamil Quarter cultural spots"
          ]
        }
      },
      "Kochi": {
        coworkingSpaces: [
          { name: "Startup Village Kochi", type: "Premium", price: "₹600-900/day", amenities: "Tech hub, Modern amenities, Networking", rating: 4.4 },
          { name: "Fort Kochi Workspaces", type: "Heritage", price: "₹400-700/day", amenities: "Historic setting, Cultural vibe", rating: 4.2 },
          { name: "Marine Drive Cafes", type: "Community", price: "₹300-500/day", amenities: "Waterfront views, Relaxed setting", rating: 4.0 },
          { name: "Local Spice Market Cafes", type: "Budget", price: "₹200-400/day", amenities: "Authentic Kerala experience", rating: 3.8 }
        ],
        hangouts: {
          cafes: [
            "• Dal Roti (Popular with IT crowd, ₹150-300)",
            "• Cafe Mocha Fort Kochi (Heritage area, ₹200-400)",
            "• Starbucks Marine Drive (Waterfront, ₹250-450)",
            "• Local tea shops in Mattancherry (Authentic, ₹20-80)"
          ],
          evening: [
            "• Marine Drive evening walks",
            "• Fort Kochi sunset at Chinese fishing nets",
            "• Jew Town heritage area",
            "• Backwater cruise meeting points"
          ]
        }
      },
      "Varkala": {
        coworkingSpaces: [
          { name: "Cliff Edge Cafes", type: "Scenic", price: "₹300-600/day", amenities: "Ocean views, Relaxed vibe, WiFi", rating: 4.2 },
          { name: "Beach Shack Workspaces", type: "Casual", price: "₹200-400/day", amenities: "Beach access, Laid-back atmosphere", rating: 4.0 },
          { name: "Ayurveda Resort Work Areas", type: "Wellness", price: "₹400-700/day", amenities: "Peaceful, Wellness integration", rating: 4.1 },
          { name: "Local Guesthouse Spaces", type: "Budget", price: "₹150-300/day", amenities: "Basic amenities, Backpacker friendly", rating: 3.7 }
        ],
        hangouts: {
          cafes: [
            "• Cliff Lounge (Famous cliff cafe, ₹200-400)",
            "• Darjeeling Cafe (Popular spot, ₹150-350)",
            "• Abba Restaurant (Cliff views, ₹250-450)",
            "• Local beach shacks (Budget friendly, ₹100-250)"
          ],
          evening: [
            "• Varkala Cliff sunset viewing",
            "• Beach bonfire spots",
            "• Ayurveda centers evening sessions",
            "• Temple evening aarti at Janardhana Swamy"
          ]
        }
      },
      "Kasol": {
        coworkingSpaces: [
          { name: "River View Cafes", type: "Scenic", price: "₹200-500/day", amenities: "Parvati River views, Mountain setting", rating: 4.1 },
          { name: "Israeli Cafe Workspaces", type: "Cultural", price: "₹300-600/day", amenities: "International vibe, Good food", rating: 4.0 },
          { name: "Hostel Common Areas", type: "Backpacker", price: "₹150-350/day", amenities: "Community feel, Budget friendly", rating: 3.9 },
          { name: "Local Dhaba Spaces", type: "Local", price: "₹100-250/day", amenities: "Authentic experience, Basic WiFi", rating: 3.7 }
        ],
        hangouts: {
          cafes: [
            "• Evergreen Cafe (Famous spot, ₹150-300)",
            "• German Bakery (Popular with travelers, ₹120-280)",
            "• Moon Dance Cafe (Riverside, ₹100-250)",
            "• Local Israeli cafes (Cultural experience, ₹150-350)"
          ],
          evening: [
            "• Parvati River side evening walks",
            "• Chalal village trek sunset",
            "• Local music sessions at cafes",
            "• Malana day trip meetup points"
          ]
        }
      }
    };
    
    return cityData[cityName] || {
      coworkingSpaces: [
        { name: "Local Co-working Hub", type: "Community", price: "₹300-600/day", amenities: "WiFi, Desk space, Local community", rating: 4.0 },
        { name: "Cafe Workspaces", type: "Budget", price: "₹200-400/day", amenities: "Coffee shop WiFi, Casual setting", rating: 3.8 },
        { name: "Library Spaces", type: "Quiet", price: "₹100-300/day", amenities: "Quiet environment, Basic amenities", rating: 3.7 },
        { name: "Hotel Business Centers", type: "Professional", price: "₹500-800/day", amenities: "Professional setting, Meeting rooms", rating: 4.1 }
      ],
      hangouts: {
        cafes: [
          `• Local coffee shops in ${cityName} (₹80-200)`,
          `• Regional chain cafes (₹150-300)`,
          `• Traditional tea stalls (₹20-80)`,
          `• Restaurant work corners (₹100-250)`
        ],
        evening: [
          `• Local bars and pubs`,
          `• City parks and gardens`,
          `• Cultural centers`,
          `• Popular market areas`
        ]
      }
    };
  };

  const cityData = getCitySpecificData(city.name);
  const coworkingSpaces = cityData.coworkingSpaces;

  const meetupGroups = [
    { name: "Digital Nomads " + city.name, members: "45+", focus: "Networking & Events", frequency: "Monthly" },
    { name: "Startup Community", members: "35+", focus: "Entrepreneurship", frequency: "Monthly" },
    { name: "Freelancers Hub", members: "25+", focus: "Skill sharing", frequency: "Monthly" },
    { name: "Remote Workers", members: "40+", focus: "Coworking meetups", frequency: "Bi-weekly" },
    { name: "Tech Talks", members: "30+", focus: "Technology trends", frequency: "Monthly" }
  ];

  const expatCommunities = [
    { nationality: "International", platform: "Facebook Groups", members: "80+", activity: "Active" },
    { nationality: "European", platform: "WhatsApp", members: "25+", activity: "Active" },
    { nationality: "American", platform: "Telegram", members: "35+", activity: "Moderate" },
    { nationality: "Asian", platform: "WeChat", members: "20+", activity: "Active" },
    { nationality: "General Expat", platform: "Reddit", members: "40+", activity: "Active" }
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

        {/* Roam Insider Community */}
        <div className="bg-gradient-to-r from-travel-blue/10 to-vintage-gold/10 rounded-xl p-6 border-2 border-travel-blue/20">
          <div className="text-center">
            <h3 className="font-semibold text-travel-blue text-xl mb-3 flex items-center justify-center">
              <Users className="mr-2 h-6 w-6 text-vintage-gold" />
              Join Roam Insider Community
            </h3>
            <p className="text-muted-navy mb-6 max-w-md mx-auto">
              Connect with fellow digital nomads and travelers in {city.name}. Ask questions, share experiences, 
              get local tips, and meet like-minded individuals.
            </p>
            
            <div className="space-y-4">
              <Button 
                asChild
                className="bg-travel-blue hover:bg-travel-blue/90 text-white font-semibold px-6 py-3 rounded-xl w-full sm:w-auto"
              >
                <a 
                  href="https://discord.gg/Y39GGpQtMm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                  data-testid="join-community-button"
                >
                  Join Free Community
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <Badge className="bg-sage-green/10 text-sage-green">✓ Free Forever</Badge>
                <Badge className="bg-vintage-gold/10 text-vintage-gold">✓ City Guides</Badge>
                <Badge className="bg-travel-blue/10 text-travel-blue">✓ Active Travelers</Badge>
              </div>
            </div>
            
            {/* Premium Membership Teaser */}
            <div className="mt-6 pt-4 border-t border-travel-blue/20">
              <div className="flex items-center justify-center mb-2">
                <Crown className="h-4 w-4 text-vintage-gold mr-1" />
                <span className="text-vintage-gold font-semibold text-sm">Premium Membership</span>
                <Crown className="h-4 w-4 text-vintage-gold ml-1" />
              </div>
              <p className="text-muted-navy text-xs">
                Coming Soon: Exclusive city meetups, 1-on-1 local guides, priority support & more
              </p>
            </div>
          </div>
        </div>
        
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


        {/* Popular Nomad Hangouts */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Coffee className="mr-2 h-5 w-5" />
            Popular Nomad Hangouts in {city.name}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-warm-terracotta/5 rounded-lg p-4 border border-warm-terracotta/20">
              <h4 className="font-semibold text-warm-terracotta mb-2">Cafes with WiFi</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                {cityData.hangouts.cafes.map((cafe, index) => (
                  <li key={index}>{cafe}</li>
                ))}
              </ul>
            </div>
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Evening Spots</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                {cityData.hangouts.evening.map((spot, index) => (
                  <li key={index}>• {spot}</li>
                ))}
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
            <li>• Join Roam Insider Discord for instant local tips and connections in {city.name}</li>
            <li>• Connect with fellow Roam Insider members already living and working in {city.name}</li>
            <li>• Get real-time updates about weather, events, and local conditions in {city.name}</li>
            <li>• Access exclusive {city.name} city guides and insider knowledge from locals</li>
            <li>• Share accommodation recommendations and co-living opportunities in {city.name}</li>
            <li>• Organize informal workdays and social events with verified nomads in {city.name}</li>
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