import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ExternalLink, Star, Music, Heart } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface FestivalsEventsProps {
  city: CityWithDetails;
}

export default function FestivalsEvents({ city }: FestivalsEventsProps) {
  // Major festivals and events - would integrate with events API
  const festivals = [
    {
      name: "Diwali Festival of Lights",
      date: "October/November",
      duration: "5 days",
      type: "Religious",
      description: "The most celebrated Hindu festival marking the victory of light over darkness",
      highlights: ["Spectacular fireworks", "Traditional sweets", "Oil lamp decorations", "Family gatherings"],
      bestSpots: ["Local temples", "Markets", "Residential areas", "Cultural centers"],
      tipCost: "₹500-2000 ($6-24) for celebrations and sweets"
    },
    {
      name: "Holi - Festival of Colors",
      date: "March",
      duration: "2 days",
      type: "Cultural",
      description: "Vibrant spring festival where people throw colored powders and water",
      highlights: ["Color throwing", "Traditional music", "Street celebrations", "Bhang consumption"],
      bestSpots: ["Public parks", "Community centers", "Vrindavan (nearby)", "Local neighborhoods"],
      tipCost: "₹200-800 ($2.40-9.60) for colors and celebration items"
    },
    {
      name: "Ganesh Chaturthi",
      date: "August/September",
      duration: "11 days",
      type: "Religious",
      description: "Elaborate celebration honoring Lord Ganesha with processions and immersions",
      highlights: ["Giant Ganesha statues", "Street processions", "Traditional music", "Community feasts"],
      bestSpots: ["Ganpati pandals", "Beach areas", "Main streets", "Local communities"],
      tipCost: "₹100-500 ($1.20-6) for offerings and participation"
    }
  ];

  const culturalEvents = [
    {
      name: "Classical Music Concerts",
      frequency: "Monthly",
      venues: ["Cultural centers", "Auditoriums", "Heritage sites"],
      ticketPrice: "₹200-1500 ($2.40-18)",
      season: "October to March"
    },
    {
      name: "Food Festivals",
      frequency: "Seasonal",
      venues: ["Hotel grounds", "Convention centers", "Parks"],
      ticketPrice: "₹300-1000 ($3.60-12)",
      season: "Winter months"
    },
    {
      name: "Art & Craft Exhibitions",
      frequency: "Bi-monthly",
      venues: ["Art galleries", "Museums", "Cultural spaces"],
      ticketPrice: "₹50-300 ($0.60-3.60)",
      season: "Year-round"
    }
  ];

  const monthlyEvents = [
    { month: "January", events: ["Makar Sankranti", "Republic Day celebrations", "Winter festivals"] },
    { month: "February", events: ["Vasant Panchami", "Art exhibitions", "Cultural programs"] },
    { month: "March", events: ["Holi", "Spring festivals", "Music concerts"] },
    { month: "April", events: ["Ram Navami", "New Year celebrations", "Cultural shows"] },
    { month: "May", events: ["Buddha Purnima", "Summer festivals", "Indoor events"] },
    { month: "June", events: ["Monsoon festivals", "Indoor cultural events", "Art workshops"] },
    { month: "July", events: ["Guru Purnima", "Monsoon celebrations", "Cultural programs"] },
    { month: "August", events: ["Independence Day", "Janmashtami", "Cultural festivities"] },
    { month: "September", events: ["Ganesh Chaturthi", "Teacher's Day", "Cultural events"] },
    { month: "October", events: ["Dussehra", "Karva Chauth", "Festival season begins"] },
    { month: "November", events: ["Diwali", "Bhai Dooj", "Post-Diwali celebrations"] },
    { month: "December", events: ["Christmas", "New Year preparations", "Winter celebrations"] }
  ];

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Star className="mr-3 h-8 w-8 text-vintage-gold" />
          Festivals & Cultural Events
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Experience the vibrant cultural tapestry of {city.name} through its festivals, events, and celebrations throughout the year.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Major Festivals */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            🎉 Major Festivals
          </h3>
          <div className="grid gap-6">
            {festivals.map((festival, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-xl text-travel-blue">{festival.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-navy mt-1">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {festival.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {festival.duration}
                      </div>
                    </div>
                  </div>
                  <Badge className={`${festival.type === 'Religious' ? 'bg-vintage-gold/10 text-vintage-gold' : 'bg-travel-blue/10 text-travel-blue'}`}>
                    {festival.type}
                  </Badge>
                </div>
                
                <p className="text-muted-navy mb-4">{festival.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-sage-green mb-2">Festival Highlights</h5>
                    <ul className="space-y-1 text-sm text-muted-navy">
                      {festival.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-warm-terracotta mb-2">Best Spots to Experience</h5>
                    <ul className="space-y-1 text-sm text-muted-navy">
                      {festival.bestSpots.map((spot, i) => (
                        <li key={i}>• {spot}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-vintage-gold/5 rounded-lg p-3 border-l-4 border-vintage-gold">
                  <p className="text-sm text-muted-navy">
                    <strong>Budget tip:</strong> {festival.tipCost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Events */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Music className="mr-2 h-5 w-5" />
            🎵 Regular Cultural Events
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {culturalEvents.map((event, index) => (
              <div key={index} className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
                <h4 className="font-semibold text-travel-blue mb-2">{event.name}</h4>
                <div className="space-y-2 text-sm text-muted-navy">
                  <div><strong>Frequency:</strong> {event.frequency}</div>
                  <div><strong>Ticket Price:</strong> {event.ticketPrice}</div>
                  <div><strong>Best Season:</strong> {event.season}</div>
                  <div><strong>Venues:</strong> {event.venues.join(", ")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Event Calendar */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            📅 Monthly Event Calendar
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthlyEvents.map((month, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-travel-blue mb-2">{month.month}</h4>
                <ul className="space-y-1 text-sm text-muted-navy">
                  {month.events.map((event, i) => (
                    <li key={i}>• {event}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Event Booking & Information */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <ExternalLink className="mr-2 h-5 w-5" />
            🎫 Event Booking & Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Official Tourism Websites</h4>
              <div className="space-y-2 text-sm">
                <a href="https://www.incredibleindia.org" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Incredible India - Official Tourism
                </a>
                <a href="https://tourism.gov.in" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Ministry of Tourism
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  State Tourism Board
                </a>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Event Booking Platforms</h4>
              <div className="space-y-2 text-sm">
                <a href="https://in.bookmyshow.com" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  BookMyShow - Events & Shows
                </a>
                <a href="https://allevents.in" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  AllEvents.in
                </a>
                <a href="https://www.meetup.com" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Meetup - Local Events
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Nomad-Specific Events */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Heart className="mr-2 h-5 w-5" />
            🤝 Digital Nomad & Expat Events
          </h3>
          <div className="bg-warm-terracotta/5 rounded-lg p-4 border-l-4 border-warm-terracotta">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-warm-terracotta mb-2">Regular Meetups</h4>
                <ul className="space-y-1 text-sm text-muted-navy">
                  <li>• Monthly Nomad Networking Events</li>
                  <li>• Weekly Coworking Social Hours</li>
                  <li>• Language Exchange Meetups</li>
                  <li>• Entrepreneur Breakfast Sessions</li>
                  <li>• Cultural Integration Workshops</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-travel-blue mb-2">Annual Conferences</h4>
                <ul className="space-y-1 text-sm text-muted-navy">
                  <li>• Tech Conference India (November)</li>
                  <li>• Startup Grind Events (Quarterly)</li>
                  <li>• Digital Marketing Summit (March)</li>
                  <li>• Remote Work Conference (September)</li>
                  <li>• Women in Tech Meetup (Monthly)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Festival Etiquette & Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <Star className="mr-2 h-4 w-4" />
            Festival Etiquette & Participation Tips
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-navy">
            <ul className="space-y-1">
              <li>• Dress modestly during religious festivals</li>
              <li>• Remove shoes when entering temples or homes</li>
              <li>• Accept food offerings graciously - it's considered blessed</li>
              <li>• Ask permission before photographing people or ceremonies</li>
              <li>• Learn basic greetings in local language for festivals</li>
            </ul>
            <ul className="space-y-1">
              <li>• Carry small denomination notes for offerings and purchases</li>
              <li>• Stay hydrated during outdoor celebrations</li>
              <li>• Book accommodations well in advance during major festivals</li>
              <li>• Follow local customs regarding alcohol consumption</li>
              <li>• Join community celebrations - locals love sharing their culture</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}