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
      "Bir": [
        {
          name: "Bir Paragliding Festival",
          date: "October",
          duration: "3 days",
          type: "Adventure Sports",
          description: "International paragliding festival with competitions, workshops, and cultural events",
          highlights: ["Paragliding competitions", "Adventure workshops", "Cultural performances", "Equipment exhibitions"],
          bestSpots: ["Billing takeoff site", "Bir landing zone", "Village center"],
          tipCost: "Free to watch, ₹2000-5000 for participation"
        },
        {
          name: "Tibetan New Year (Losar)",
          date: "February/March",
          duration: "3 days",
          type: "Cultural",
          description: "Traditional Tibetan New Year celebration with monastery ceremonies and community festivities",
          highlights: ["Monastery prayers", "Traditional dances", "Community feasts", "Cultural performances"],
          bestSpots: ["Chokling Monastery", "Deer Park Institute", "Village center"],
          tipCost: "Free to attend, ₹100-500 for donations/offerings"
        },
        {
          name: "Buddha Purnima",
          date: "May",
          duration: "1 day",
          type: "Religious",
          description: "Buddhist festival celebrating Buddha's birth, enlightenment, and death",
          highlights: ["Prayer ceremonies", "Meditation sessions", "Community gatherings", "Teaching sessions"],
          bestSpots: ["All local monasteries", "Deer Park Institute"],
          tipCost: "Free to attend"
        }
      ],
      "Dehradun": [
        {
          name: "Jhanda Fair",
          date: "March/April",
          duration: "3 days",
          type: "Traditional",
          description: "Traditional Garhwali fair celebrating spring with local culture, food, and handicrafts",
          highlights: ["Traditional performances", "Local handicrafts", "Garhwali cuisine", "Cultural competitions"],
          bestSpots: ["Sahastradhara", "Various venues across city"],
          tipCost: "Free entry, ₹100-1000 for food and shopping"
        },
        {
          name: "Tapkeshwar Fair",
          date: "March (Shivratri)",
          duration: "1 day",
          type: "Religious",
          description: "Major religious fair at Tapkeshwar Temple dedicated to Lord Shiva",
          highlights: ["Temple ceremonies", "Religious processions", "Local vendors", "Cultural activities"],
          bestSpots: ["Tapkeshwar Temple", "Temple complex"],
          tipCost: "Free to attend, ₹50-200 for offerings"
        },
        {
          name: "International Film Festival",
          date: "December",
          duration: "5 days",
          type: "Cultural",
          description: "Film festival showcasing regional and international cinema",
          highlights: ["Film screenings", "Director interactions", "Workshops", "Cultural events"],
          bestSpots: ["Various cinemas", "Cultural centers"],
          tipCost: "₹100-500 per screening"
        }
      ],
      "Mussoorie": [
        {
          name: "Summer Festival",
          date: "June",
          duration: "3 days",
          type: "Cultural",
          description: "Annual summer festival celebrating hill station culture with music, dance, and local crafts",
          highlights: ["Cultural performances", "Local handicrafts", "Food stalls", "Adventure activities"],
          bestSpots: ["Mall Road", "Company Garden", "Various venues"],
          tipCost: "Free to attend, ₹200-1000 for activities"
        },
        {
          name: "Autumn Festival",
          date: "November",
          duration: "2 days",
          type: "Seasonal",
          description: "Celebration of autumn season with cultural programs and local festivities",
          highlights: ["Seasonal celebrations", "Local performances", "Food festivals", "Adventure events"],
          bestSpots: ["Mall Road", "Landour", "Happy Valley"],
          tipCost: "Free to attend, ₹100-500 for food/activities"
        },
        {
          name: "Winterline Festival",
          date: "December",
          duration: "2 days",
          type: "Adventure",
          description: "Winter adventure festival with trekking, rock climbing, and winter sports",
          highlights: ["Adventure activities", "Winter sports", "Equipment exhibitions", "Training workshops"],
          bestSpots: ["Various adventure sites", "Mall Road"],
          tipCost: "₹500-2000 for activities"
        }
      ],
      "Ziro": [
        {
          name: "Ziro Music Festival",
          date: "September",
          duration: "4 days",
          type: "Music",
          description: "Independent music festival featuring indie bands from across India and abroad",
          highlights: ["Live music performances", "Camping experience", "Local food", "Cultural exchange"],
          bestSpots: ["Ziro valley grounds", "Camping areas"],
          tipCost: "₹3000-8000 for festival passes including camping"
        },
        {
          name: "Myoko Festival",
          date: "March",
          duration: "3 days",
          type: "Traditional",
          description: "Traditional Apatani festival celebrating agriculture and community bonding",
          highlights: ["Traditional rituals", "Community feasts", "Cultural dances", "Agricultural celebrations"],
          bestSpots: ["Apatani villages", "Community centers"],
          tipCost: "Free to attend with local invitation"
        },
        {
          name: "Dree Festival",
          date: "July",
          duration: "1 day",
          type: "Agricultural",
          description: "Agricultural festival of Apatani tribe celebrating crop protection and prosperity",
          highlights: ["Traditional ceremonies", "Crop blessings", "Community prayers", "Cultural performances"],
          bestSpots: ["Apatani villages", "Agricultural fields"],
          tipCost: "Free to attend with community participation"
        }
      ],
      "Kolkata": [
        {
          name: "Durga Puja",
          date: "September/October",
          duration: "5 days",
          type: "Religious",
          description: "Kolkata's biggest festival with elaborate pandals, cultural programs, and community celebrations",
          highlights: ["Artistic pandals", "Cultural performances", "Street food", "Community bonding"],
          bestSpots: ["Park Street", "South Kolkata", "Central Kolkata", "Kumartuli"],
          tipCost: "Free to visit pandals, ₹200-1000 for food and transport"
        },
        {
          name: "Kali Puja",
          date: "October/November",
          duration: "1 day",
          type: "Religious",
          description: "Festival dedicated to Goddess Kali with nightlong celebrations and fireworks",
          highlights: ["Temple ceremonies", "Fireworks", "Night celebrations", "Cultural programs"],
          bestSpots: ["Kalighat Temple", "Various neighborhoods"],
          tipCost: "Free to attend, ₹100-500 for offerings"
        },
        {
          name: "Kolkata International Film Festival",
          date: "November",
          duration: "8 days",
          type: "Cultural",
          description: "International film festival showcasing cinema from around the world",
          highlights: ["International films", "Director interactions", "Workshops", "Cultural events"],
          bestSpots: ["Various cinemas", "Cultural centers"],
          tipCost: "₹50-300 per screening"
        },
        {
          name: "Poila Boishakh (Bengali New Year)",
          date: "April",
          duration: "1 day",
          type: "Cultural",
          description: "Bengali New Year celebration with cultural programs, processions, and traditional festivities",
          highlights: ["Cultural processions", "Traditional performances", "New clothes", "Festive meals"],
          bestSpots: ["College Street", "Rabindra Sarovar", "Various cultural centers"],
          tipCost: "Free to attend, ₹200-1000 for food and shopping"
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
      ],
      "Udaipur": [
        {
          name: "Mewar Festival",
          date: "March/April",
          duration: "3 days",
          type: "Cultural",
          description: "Celebrates arrival of spring with cultural performances and boat processions on Lake Pichola",
          highlights: ["Cultural performances", "Boat processions", "Traditional costumes", "Folk music"],
          bestSpots: ["City Palace", "Lake Pichola", "Jagdish Temple", "Bagore Ki Haveli"],
          tipCost: "Free to watch, ₹500-1500 for special events"
        },
        {
          name: "Shilpgram Crafts Fair",
          date: "December/January",
          duration: "10 days",
          type: "Arts & Crafts",
          description: "Annual crafts festival showcasing traditional Rajasthani arts, crafts, and folk performances",
          highlights: ["Traditional crafts", "Folk performances", "Artisan workshops", "Cultural shows"],
          bestSpots: ["Shilpgram", "Various city venues"],
          tipCost: "₹50-200 entry, ₹200-2000 for purchases"
        },
        {
          name: "Gangaur Festival",
          date: "March/April",
          duration: "18 days",
          type: "Religious",
          description: "Major Rajasthani festival honoring Goddess Gauri with processions and celebrations",
          highlights: ["Grand processions", "Traditional attire", "Cultural performances", "Local delicacies"],
          bestSpots: ["City Palace", "Jagdish Temple", "Local neighborhoods"],
          tipCost: "Free to watch processions, ₹100-500 for offerings"
        }
      ],
      "Gangtok": [
        {
          name: "Losar (Tibetan New Year)",
          date: "February/March",
          duration: "15 days",
          type: "Religious",
          description: "Traditional Tibetan New Year celebration with monastery festivities and cultural programs",
          highlights: ["Monastery celebrations", "Traditional dances", "Tibetan cuisine", "Prayer ceremonies"],
          bestSpots: ["Rumtek Monastery", "Enchey Monastery", "MG Marg"],
          tipCost: "Free at monasteries, ₹200-800 for cultural shows"
        },
        {
          name: "Saga Dawa",
          date: "May/June",
          duration: "1 month",
          type: "Religious",
          description: "Sacred Buddhist festival commemorating Buddha's birth, enlightenment, and nirvana",
          highlights: ["Prayer flags", "Monastery rituals", "Meditation sessions", "Community gatherings"],
          bestSpots: ["All monasteries", "Tashiding Monastery", "MG Marg"],
          tipCost: "Free participation, donations welcome"
        },
        {
          name: "Bumchu Festival",
          date: "February/March",
          duration: "3 days",
          type: "Religious",
          description: "Sacred water ceremony at Tashiding Monastery predicting the year ahead",
          highlights: ["Holy water ceremony", "Monastery rituals", "Traditional foods", "Cultural exchanges"],
          bestSpots: ["Tashiding Monastery", "Local communities"],
          tipCost: "Free to attend, ₹100-300 for travel expenses"
        }
      ],
      "McLeodganj": [
        {
          name: "Dalai Lama's Birthday",
          date: "July 6",
          duration: "1 day",
          type: "Cultural",
          description: "Celebration of the Dalai Lama's birthday with prayers, cultural performances, and community gatherings",
          highlights: ["Prayer ceremonies", "Cultural performances", "Community feasts", "Tibetan arts"],
          bestSpots: ["Tsuglagkhang Complex", "Main Temple", "Tibetan settlements"],
          tipCost: "Free to attend, donations welcome"
        },
        {
          name: "Losar Festival",
          date: "February/March",
          duration: "15 days",
          type: "Religious",
          description: "Tibetan New Year celebrated with traditional rituals, dances, and community celebrations",
          highlights: ["Traditional dances", "Monastery ceremonies", "Tibetan cuisine", "Prayer flags"],
          bestSpots: ["Main Temple", "Tibetan settlements", "Monasteries"],
          tipCost: "Free participation, ₹200-500 for meals and offerings"
        },
        {
          name: "World Peace Day",
          date: "September 21",
          duration: "1 day",
          type: "Spiritual",
          description: "International day of peace celebrated with meditation, prayers, and spiritual discussions",
          highlights: ["Group meditation", "Peace prayers", "Spiritual talks", "Community unity"],
          bestSpots: ["Main Temple", "Peace gardens", "Community centers"],
          tipCost: "Free participation, donations welcome"
        }
      ],
      "Pune": [
        {
          name: "Ganesh Chaturthi",
          date: "August/September",
          duration: "11 days",
          type: "Religious",
          description: "Pune's biggest festival with elaborate Ganesh idols, processions, and cultural programs",
          highlights: ["Dagdusheth Halwai Ganpati", "Cultural programs", "Grand processions", "Community celebrations"],
          bestSpots: ["Dagdusheth Halwai", "Shreemant Bhausaheb", "Camp area", "Various pandals"],
          tipCost: "Free to visit pandals, ₹100-1000 for offerings and travel"
        },
        {
          name: "Pune Festival",
          date: "August/September",
          duration: "8 days",
          type: "Cultural",
          description: "Annual cultural festival showcasing Marathi arts, music, dance, and theater",
          highlights: ["Cultural performances", "Music concerts", "Art exhibitions", "Food festivals"],
          bestSpots: ["Shaniwar Wada", "Cultural venues", "Various city locations"],
          tipCost: "₹100-500 for events, some free performances"
        },
        {
          name: "Sawai Gandharva Music Festival",
          date: "December",
          duration: "3 days",
          type: "Music",
          description: "Premier Indian classical music festival featuring renowned artists",
          highlights: ["Classical music", "Renowned artists", "Traditional performances", "Musical heritage"],
          bestSpots: ["Shanmukhananda Hall", "Various venues"],
          tipCost: "₹200-2000 per concert"
        }
      ],
      "Shillong": [
        {
          name: "Autumn Festival",
          date: "November",
          duration: "5 days",
          type: "Cultural",
          description: "Meghalaya's premier festival celebrating local culture, music, and traditions",
          highlights: ["Local music", "Traditional dances", "Cultural exhibitions", "Food festivals"],
          bestSpots: ["Polo Ground", "Ward's Lake", "Various venues"],
          tipCost: "₹50-300 for events, some free performances"
        },
        {
          name: "Shad Suk Mynsiem",
          date: "April",
          duration: "3 days",
          type: "Traditional",
          description: "Traditional Khasi harvest festival with folk dances and cultural celebrations",
          highlights: ["Traditional Khasi dances", "Folk music", "Local cuisine", "Cultural performances"],
          bestSpots: ["Smit", "Various Khasi villages", "Cultural centers"],
          tipCost: "Free to watch, ₹100-500 for travel to venues"
        },
        {
          name: "Christmas Festival",
          date: "December",
          duration: "1 week",
          type: "Religious",
          description: "Major celebration in this Christian-majority state with carols, decorations, and festivities",
          highlights: ["Christmas carols", "Church services", "Community celebrations", "Local delicacies"],
          bestSpots: ["All Saints Church", "Ward's Lake area", "Police Bazaar"],
          tipCost: "Free church services, ₹200-1000 for celebrations and meals"
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