import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ExternalLink, Star, Music, Heart } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface FestivalsEventsProps {
  city: CityWithDetails;
}

export default function FestivalsEvents({ city }: FestivalsEventsProps) {
  // City-specific festivals and events data
  const getCitySpecificFestivals = (cityName: string) => {
    const festivalsByCity: { [key: string]: any[] } = {
      "Goa": [
        {
          name: "Goa Carnival",
          date: "February/March",
          duration: "4 days",
          type: "Cultural",
          description: "Colorful street carnival with parades, floats, dancing, and music celebrating Goan culture",
          highlights: ["Street parades", "Colorful floats", "Traditional dances", "King Momo crowning"],
          bestSpots: ["Panaji", "Margao", "Vasco", "Mapusa"],
          tipCost: "Free to watch, ₹500-2000 for costumes and participation"
        },
        {
          name: "Sunburn Festival",
          date: "December/January",
          duration: "4 days",
          type: "Music",
          description: "Asia's largest electronic dance music festival with international DJs",
          highlights: ["World-class DJs", "Beach parties", "Multiple stages", "Food courts"],
          bestSpots: ["Candolim Beach", "Various venues"],
          tipCost: "₹3,000-15,000 for passes"
        },
        {
          name: "Shigmo Festival",
          date: "March",
          duration: "2 weeks",
          type: "Religious",
          description: "Spring festival celebrating harvest with traditional folk dances and parades",
          highlights: ["Folk performances", "Traditional costumes", "Community celebrations", "Temple processions"],
          bestSpots: ["Panaji", "Ponda", "Villages"],
          tipCost: "Free to attend, ₹200-500 for travel to venues"
        }
      ],
      "Mumbai": [
        {
          name: "Ganesh Chaturthi",
          date: "August/September",
          duration: "11 days",
          type: "Religious",
          description: "Mumbai's biggest festival with elaborate Ganesh idols and grand processions",
          highlights: ["Lalbaugcha Raja", "Grand processions", "Community pandals", "Visarjan ceremonies"],
          bestSpots: ["Lalbaugcha Raja", "Girgaon", "Dadar", "Bandra"],
          tipCost: "Free to attend, ₹100-1000 for offerings and travel"
        },
        {
          name: "Mumbai Film Festival",
          date: "October/November",
          duration: "8 days",
          type: "Film",
          description: "Premier international film festival showcasing world cinema",
          highlights: ["International films", "Celebrity appearances", "Industry networking", "Awards ceremony"],
          bestSpots: ["Multiple cinema halls", "NCPA", "Cultural venues"],
          tipCost: "₹200-1500 per screening"
        },
        {
          name: "Navratri Festival",
          date: "September/October",
          duration: "9 nights",
          type: "Cultural",
          description: "Nine nights of traditional Gujarati folk dance and cultural celebrations",
          highlights: ["Garba dancing", "Traditional costumes", "Live music", "Community celebrations"],
          bestSpots: ["Borivali", "Kandivali", "Various community halls"],
          tipCost: "₹200-800 per night entry"
        }
      ],
      "Bangalore": [
        {
          name: "Bangalore Literature Festival",
          date: "November/December",
          duration: "3 days",
          type: "Literary",
          description: "Major literary festival with renowned authors, poets, and cultural programs",
          highlights: ["Author sessions", "Poetry readings", "Cultural performances", "Book launches"],
          bestSpots: ["Various venues across city", "Cultural centers"],
          tipCost: "₹500-2000 for passes"
        },
        {
          name: "Karaga Festival",
          date: "March/April",
          duration: "1 night",
          type: "Religious",
          description: "Ancient festival honoring Goddess Draupadi with processions through old Bangalore",
          highlights: ["Sacred procession", "Traditional rituals", "Cultural significance", "Night-long celebration"],
          bestSpots: ["Tigalare Pete", "Old Bangalore areas"],
          tipCost: "Free to witness"
        },
        {
          name: "Bengaluru Tech Summit",
          date: "November",
          duration: "3 days",
          type: "Technology",
          description: "Major technology conference with global tech leaders and innovation showcase",
          highlights: ["Tech talks", "Startup pitches", "Innovation expo", "Networking"],
          bestSpots: ["Palace Grounds", "Tech venues"],
          tipCost: "₹2000-15000 for passes"
        }
      ],
      "New Delhi": [
        {
          name: "Delhi International Film Festival",
          date: "November",
          duration: "7 days",
          type: "Film",
          description: "Premier film festival showcasing international and Indian cinema",
          highlights: ["International films", "Director interactions", "Cultural programs", "Awards"],
          bestSpots: ["Multiple venues", "Cultural centers", "Auditoriums"],
          tipCost: "₹200-1000 per screening"
        },
        {
          name: "India Art Fair",
          date: "February",
          duration: "4 days",
          type: "Art",
          description: "South Asia's leading contemporary art fair",
          highlights: ["Contemporary art", "Gallery exhibitions", "Artist talks", "Cultural programs"],
          bestSpots: ["NSIC Exhibition Complex", "Art galleries"],
          tipCost: "₹500-2000 for passes"
        },
        {
          name: "Dilli Haat Festival",
          date: "Year-round",
          duration: "Ongoing",
          type: "Cultural",
          description: "Continuous cultural festival with crafts, food, and performances from all Indian states",
          highlights: ["State pavilions", "Handicrafts", "Regional cuisine", "Cultural performances"],
          bestSpots: ["Dilli Haat INA", "Dilli Haat Pitampura"],
          tipCost: "₹30 entry + shopping/food costs"
        }
      ],
      "Alleppey": [
        {
          name: "Nehru Trophy Boat Race",
          date: "August",
          duration: "1 day",
          type: "Sports",
          description: "Famous snake boat race on Vembanad Lake with traditional boats",
          highlights: ["Snake boat races", "Traditional boats", "Cultural programs", "Lakeside celebrations"],
          bestSpots: ["Vembanad Lake", "Race finishing point"],
          tipCost: "₹100-500 for viewing areas"
        },
        {
          name: "Alleppey Beach Festival",
          date: "December",
          duration: "3 days",
          type: "Cultural",
          description: "Beach festival with music, dance, food, and cultural programs",
          highlights: ["Beach activities", "Cultural performances", "Food stalls", "Music concerts"],
          bestSpots: ["Alleppey Beach", "Beachfront venues"],
          tipCost: "Free to attend most events"
        },
        {
          name: "Onam Festival",
          date: "August/September",
          duration: "10 days",
          type: "Cultural",
          description: "Kerala's most important festival celebrating harvest and homecoming of King Mahabali",
          highlights: ["Pookalam rangoli", "Onam Sadhya feast", "Pulikali dances", "Boat races"],
          bestSpots: ["Throughout city", "Cultural centers", "Homes"],
          tipCost: "₹200-1000 for Sadhya meals and events"
        }
      ],
      "Varkala": [
        {
          name: "Varkala Yoga Festival",
          date: "January",
          duration: "7 days",
          type: "Wellness",
          description: "International yoga festival with workshops, meditation, and wellness programs",
          highlights: ["Yoga workshops", "Meditation sessions", "Wellness talks", "Beach yoga"],
          bestSpots: ["Cliff areas", "Yoga centers", "Beach venues"],
          tipCost: "₹2000-8000 for workshop packages"
        },
        {
          name: "Arattu Festival",
          date: "March/April",
          duration: "3 days",
          type: "Religious",
          description: "Traditional temple festival at Janardhana Swamy Temple",
          highlights: ["Temple processions", "Traditional music", "Cultural programs", "Religious ceremonies"],
          bestSpots: ["Janardhana Swamy Temple", "Temple grounds"],
          tipCost: "Free to attend"
        },
        {
          name: "Varkala Cultural Festival",
          date: "December",
          duration: "5 days",
          type: "Cultural",
          description: "Multi-cultural festival celebrating local arts, music, and international fusion",
          highlights: ["Music concerts", "Art exhibitions", "Cultural fusion", "International artists"],
          bestSpots: ["Cliff venues", "Beach areas", "Cultural centers"],
          tipCost: "₹500-2000 for events"
        }
      ],
      "Kasol": [
        {
          name: "Parvati Valley Music Festival",
          date: "October",
          duration: "4 days",
          type: "Music",
          description: "Mountain music festival with psytrance, live bands, and cultural exchange",
          highlights: ["Psytrance music", "Live bands", "Mountain setting", "International crowd"],
          bestSpots: ["Kasol riverbank", "Open grounds", "Forest venues"],
          tipCost: "₹1500-5000 for passes"
        },
        {
          name: "Malana Cream Festival",
          date: "September",
          duration: "3 days",
          type: "Cultural",
          description: "Local harvest celebration with traditional Himachali culture",
          highlights: ["Traditional culture", "Mountain lifestyle", "Local food", "Cultural exchange"],
          bestSpots: ["Malana village", "Surrounding areas"],
          tipCost: "Free to attend, ₹500 for food/accommodation"
        },
        {
          name: "Kullu Dussehra",
          date: "October",
          duration: "7 days",
          type: "Religious",
          description: "Unique Dussehra celebration where festivities begin when they end elsewhere",
          highlights: ["Deity processions", "Traditional celebrations", "Cultural programs", "Local fair"],
          bestSpots: ["Kullu town", "Dhalpur Maidan"],
          tipCost: "Free to attend, ₹200-800 for travel"
        }
      ]
    };

    return festivalsByCity[cityName] || festivalsByCity["Goa"];
  };

  const festivals = getCitySpecificFestivals(city.name);
  
  // Use actual events from the city data if available
  const cityEvents = city.events || [];

  const getTypeColor = (type: string) => {
    const typeColors: { [key: string]: string } = {
      "Cultural": "bg-vintage-gold/10 text-vintage-gold",
      "Religious": "bg-travel-blue/10 text-travel-blue", 
      "Music": "bg-sage-green/10 text-sage-green",
      "Sports": "bg-muted-navy/10 text-muted-navy",
      "Film": "bg-vintage-gold/10 text-vintage-gold",
      "Art": "bg-travel-blue/10 text-travel-blue",
      "Technology": "bg-sage-green/10 text-sage-green",
      "Wellness": "bg-vintage-gold/10 text-vintage-gold",
      "Literary": "bg-travel-blue/10 text-travel-blue"
    };
    return typeColors[type] || "bg-gray-100 text-gray-600";
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Calendar className="mr-3 h-8 w-8 text-vintage-gold" />
          Festivals & Events in {city.name}
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Experience the vibrant cultural calendar of {city.name} with festivals, celebrations, and events that showcase local traditions and modern attractions.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Major Annual Festivals */}
        <div>
          <h3 className="font-semibold text-xl text-travel-blue mb-6">Major Annual Festivals</h3>
          <div className="space-y-6">
            {festivals.map((festival, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-xl text-travel-blue mb-2">{festival.name}</h4>
                    <div className="flex items-center space-x-4 text-muted-navy mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {festival.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {festival.duration}
                      </div>
                    </div>
                    <Badge className={getTypeColor(festival.type)}>{festival.type}</Badge>
                  </div>
                </div>

                <p className="text-muted-navy mb-4">{festival.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-travel-blue mb-2">Highlights</h5>
                    <ul className="space-y-1">
                      {festival.highlights.map((highlight: string, idx: number) => (
                        <li key={idx} className="text-sm text-muted-navy flex items-center">
                          <Star className="h-3 w-3 mr-2 text-vintage-gold" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-travel-blue mb-2">Best Spots</h5>
                    <ul className="space-y-1">
                      {festival.bestSpots.map((spot: string, idx: number) => (
                        <li key={idx} className="text-sm text-muted-navy flex items-center">
                          <MapPin className="h-3 w-3 mr-2 text-sage-green" />
                          {spot}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex items-center mb-1">
                    <Calendar className="h-4 w-4 text-travel-blue mr-1" />
                    <span className="font-semibold text-travel-blue">Budget Tip</span>
                  </div>
                  <p className="text-sm text-muted-navy">{festival.tipCost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events from API */}
        {cityEvents.length > 0 && (
          <div>
            <h3 className="font-semibold text-xl text-travel-blue mb-6">Upcoming Events</h3>
            <div className="grid gap-4">
              {cityEvents.slice(0, 6).map((event) => (
                <div key={event.id} className="bg-gradient-to-r from-vintage-gold/5 to-travel-blue/5 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-travel-blue mb-2">{event.title}</h4>
                      <p className="text-muted-navy mb-2 text-sm">{event.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-navy">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.venue}
                        </div>
                        {event.price && (
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {event.price}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getTypeColor(event.category)}>{event.category}</Badge>
                      {event.url && (
                        <a href={event.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-travel-blue hover:text-vintage-gold" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Monthly Event Calendar */}
        <div>
          <h3 className="font-semibold text-xl text-travel-blue mb-6">Year-Round Cultural Calendar</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { month: "January", events: ["New Year celebrations", "Winter festivals", "Cultural programs"] },
              { month: "February", events: ["Art exhibitions", "Music concerts", "Cultural shows"] },
              { month: "March", events: ["Spring festivals", "Holi celebrations", "Cultural events"] },
              { month: "April", events: ["Traditional festivals", "Music season", "Cultural programs"] },
              { month: "May", events: ["Summer festivals", "Indoor events", "Cultural workshops"] },
              { month: "June", events: ["Monsoon events", "Indoor activities", "Cultural shows"] },
              { month: "July", events: ["Monsoon festivals", "Cultural programs", "Art events"] },
              { month: "August", events: ["Independence celebrations", "Traditional festivals", "Cultural shows"] },
              { month: "September", events: ["Post-monsoon festivals", "Cultural revival", "Music events"] },
              { month: "October", events: ["Festival season", "Cultural celebrations", "Music concerts"] },
              { month: "November", events: ["Winter season start", "Cultural festivals", "Art exhibitions"] },
              { month: "December", events: ["Year-end festivals", "Cultural programs", "Music concerts"] }
            ].map((monthData) => (
              <div key={monthData.month} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-travel-blue mb-2">{monthData.month}</h4>
                <ul className="space-y-1">
                  {monthData.events.map((event, idx) => (
                    <li key={idx} className="text-sm text-muted-navy flex items-center">
                      <Music className="h-3 w-3 mr-2 text-vintage-gold" />
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Event Planning Tips */}
        <div className="bg-gradient-to-r from-vintage-gold/10 to-travel-blue/10 rounded-lg p-6">
          <h3 className="font-semibold text-travel-blue mb-4">Event Planning Tips for {city.name}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-travel-blue mb-2">Booking & Tickets</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Book popular festival events 2-4 weeks in advance</li>
                <li>• Check official websites for authentic tickets</li>
                <li>• Many cultural events offer student discounts</li>
                <li>• Group bookings often get 10-20% discounts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-travel-blue mb-2">Local Tips</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Arrive early for popular free events</li>
                <li>• Dress appropriately for religious festivals</li>
                <li>• Try local festival foods and sweets</li>
                <li>• Respect local customs and photography rules</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}