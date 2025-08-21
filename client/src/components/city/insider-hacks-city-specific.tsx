import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, DollarSign, MapPin, Clock, Shield, Zap, ExternalLink, Phone, Coffee, Car } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface InsiderHacksProps {
  city: CityWithDetails;
}

export default function InsiderHacks({ city }: InsiderHacksProps) {
  // City-specific insider hacks data
  const getCitySpecificHacks = (cityName: string) => {
    const hacksByCity: { [key: string]: any } = {
      "Goa": {
        moneyHacks: {
          accommodation: [
            "Book monthly stays directly with property owners via Facebook groups for 40-60% discounts",
            "Stay in Arambol/Ashwem instead of Baga/Calangute for 50% cheaper accommodation",
            "House-sit for expats during Apr-Oct off-season for free accommodation",
            "Share beach houses with 4-6 nomads to split costs (₹3,000-5,000/month per person)",
            "Book homestays through Airbnb alternatives like StayVista for better rates"
          ],
          food: [
            "Eat at local 'fish curry rice' joints for ₹80-120 vs ₹400+ at beach shacks",
            "Buy seafood directly from fishermen at Chapora/Anjuna fish market (60% cheaper)",
            "Use Zomato Pro for unlimited free deliveries and restaurant discounts",
            "Shop at municipal markets (Mapusa, Margao) instead of tourist areas",
            "Attend Saturday Night Market for free tastings and samples"
          ],
          transport: [
            "Rent monthly scooters for ₹2,500-3,500 vs ₹300-500/day rentals",
            "Use KTC bus passes for unlimited travel across Goa (₹150/month)",
            "Share taxis to Mumbai/Pune airports with other nomads (WhatsApp groups)",
            "Book Kadamba AC buses online for 30% discounts on advance bookings",
            "Use bike taxis (Rapido) during monsoons when regular taxis are expensive"
          ]
        },
        secretSpots: [
          {
            name: "Butterfly Beach Secret Entry",
            location: "Palolem",
            tip: "Access via fishing boat from Palolem for ₹50 instead of ₹500 boat tours",
            coordinates: "15.009°N, 74.023°E"
          },
          {
            name: "Hidden Coworking at Fontainhas",
            location: "Panaji",
            tip: "Work from Café Bodega's upper floor - quiet, AC, great WiFi, ₹200/day including coffee",
            website: "https://www.facebook.com/cafebodegagoa/"
          },
          {
            name: "Free Sunset Point",
            location: "Chapora Fort",
            tip: "Park at bottom hill, walk 10 mins instead of paying ₹100 parking at top",
            timing: "Best at 6-7 PM"
          },
          {
            name: "Local Fish Market Timing",
            location: "Anjuna",
            tip: "Arrive at 6 AM for fresh catch at wholesale prices before restaurants buy",
            days: "Tuesday, Friday, Saturday"
          }
        ],
        apps: [
          { name: "Rapido", description: "Bike taxis (cheaper than Ola/Uber)", url: "https://play.google.com/store/apps/details?id=com.rapido.passenger" },
          { name: "GoaMiles", description: "Local cab service", url: "https://goamiles.com/" },
          { name: "Zomato Pro", description: "Food delivery discounts", url: "https://www.zomato.com/" },
          { name: "Paytm", description: "UPI payments and discounts", url: "https://paytm.com/" }
        ],
        emergencyNumbers: [
          { label: "Tourist Helpline", number: "1363" },
          { label: "Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Fire", number: "101" },
          { label: "Goa Police Control", number: "+918322420001" }
        ]
      },
      "Mumbai": {
        moneyHacks: {
          accommodation: [
            "Stay in suburbs like Malad/Kandivali for 60% cheaper rent than South Mumbai",
            "Book PG accommodations in Andheri/Powai for tech professionals (₹15,000-25,000)",
            "Share 2-3 BHK flats with roommates near metro stations for easy commute",
            "Avoid broker fees by using NoBroker app or direct owner contacts",
            "Book corporate guest houses for short stays - cheaper than hotels"
          ],
          food: [
            "Eat at local khanavals (home-style restaurants) for ₹80-150 meals",
            "Use Zomato Gold for 1+1 offers at premium restaurants",
            "Street food at Juhu Beach/Marine Drive costs 70% less than mall food courts",
            "Buy groceries at DMart/Big Bazaar for 20-30% savings vs local stores",
            "Office lunch dabbawalas deliver home-cooked meals for ₹100-150/day"
          ],
          transport: [
            "Buy monthly local train passes for unlimited travel (₹300-500)",
            "Use Mumbai Metro + local train combo passes for integrated travel",
            "Bike rentals from Bounce/Vogo cheaper than Uber for short distances",
            "Share auto-rickshaws with others going same direction",
            "Walk short distances - many areas are well-connected"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Beach at Worli Fort",
            location: "Worli",
            tip: "Walk through fishing village to access secluded beach with skyline views",
            timing: "Sunset hours"
          },
          {
            name: "Rooftop Coworking Secret",
            location: "Bandra",
            tip: "Cafe Mocha's 3rd floor has unlimited WiFi + workspace for ₹200/day",
            website: "https://www.cafemocha.in/"
          },
          {
            name: "Free City Views",
            location: "Hanging Gardens",
            tip: "Malabar Hill gardens offer free panoramic city views - better than paid observation decks",
            timing: "Early morning or evening"
          },
          {
            name: "Wholesale Shopping Secret",
            location: "Crawford Market",
            tip: "Shop before 10 AM for wholesale prices on electronics/clothes",
            days: "Tuesday to Saturday"
          }
        ],
        apps: [
          { name: "Mumbai Metro App", description: "Metro timings and routes", url: "https://play.google.com/store/apps/details?id=com.mahametrorail.mmrcl" },
          { name: "m-Indicator", description: "Local train timings and routes", url: "https://play.google.com/store/apps/details?id=com.mobond.mindicator" },
          { name: "NoBroker", description: "Rent flats without broker fees", url: "https://www.nobroker.in/" },
          { name: "Dabbawala", description: "Home-cooked meal delivery", url: "https://mydabbawala.com/" }
        ],
        emergencyNumbers: [
          { label: "Mumbai Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Fire Brigade", number: "101" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Women's Helpline", number: "103" }
        ]
      },
      "Bangalore": {
        moneyHacks: {
          accommodation: [
            "Stay in HSR Layout/Marathahalli for tech jobs with lower rent than Koramangala",
            "PG accommodations near Electronic City/Whitefield for IT professionals",
            "Hostels in Indiranagar for ₹8,000-12,000/month with networking opportunities",
            "Flat-sharing apps like FlatMate/SpareRoom for verified roommates",
            "Book service apartments for 1-3 months stays - better rates than hotels"
          ],
          food: [
            "Darshinis (local fast food chains) offer meals for ₹50-100",
            "Use Swiggy Super/Zomato Pro for unlimited free deliveries",
            "MTR/Vidyarthi Bhavan for authentic South Indian breakfast under ₹100",
            "Eat at office cafeterias - most tech companies have subsidized food",
            "Brigade Road/Commercial Street have budget-friendly restaurants"
          ],
          transport: [
            "Namma Metro passes for unlimited monthly travel (₹900)",
            "Bounce/Vogo bike rentals cheaper than auto-rickshaws for tech parks",
            "BMTC Volvo buses comfortable and affordable for long distances",
            "Share Uber/Ola with colleagues for office commutes",
            "Cycle rentals available near metro stations"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Lake Access",
            location: "Ulsoor Lake",
            tip: "Enter from backside gate near Trinity Church for peaceful boating",
            timing: "Early morning"
          },
          {
            name: "Startup Coworking Hub",
            location: "Koramangala",
            tip: "The Hive's day passes include networking events and mentorship",
            website: "https://thehive.work/"
          },
          {
            name: "Free Sunset Views",
            location: "Nandi Hills",
            tip: "Drive/bike early morning to avoid crowds and parking fees",
            timing: "5-7 AM arrival"
          },
          {
            name: "Tech Meetup Spot",
            location: "Indiranagar",
            tip: "Attend free tech meetups at CoWrks for networking and job opportunities",
            days: "Weekends"
          }
        ],
        apps: [
          { name: "Namma Metro", description: "Metro routes and timings", url: "https://play.google.com/store/apps/details?id=com.bmrcl.nammametro" },
          { name: "BMTC Official", description: "Bus routes and live tracking", url: "https://play.google.com/store/apps/details?id=com.bmtc.mybmtc" },
          { name: "Bounce", description: "Dockless bike rentals", url: "https://bounceapp.in/" },
          { name: "Hasura Hub", description: "Tech community and events", url: "https://hasura.io/bangalore/" }
        ],
        emergencyNumbers: [
          { label: "Bangalore Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Fire Service", number: "101" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Traffic Police", number: "103" }
        ]
      },
      "New Delhi": {
        moneyHacks: {
          accommodation: [
            "Stay in Karol Bagh/Rajouri Garden for affordable PGs near metro stations",
            "Book government guest houses via official websites - cheaper than hotels",
            "Share flats in Lajpat Nagar/South Extension with working professionals",
            "Use apps like Zolo/Stanza Living for hassle-free PG bookings",
            "Avoid Connaught Place area for accommodation - 300% markup for location"
          ],
          food: [
            "Eat at dhabas in Karol Bagh/Lajpat Nagar for authentic meals under ₹100",
            "Use government canteens (ITDC, Rail Yatri Nivas) for subsidized food",
            "Street food at Chandni Chowk/India Gate costs 80% less than malls",
            "Order from local restaurants vs international chains for 50% savings",
            "Buy groceries from Mother Dairy/Safal for fixed government prices"
          ],
          transport: [
            "Delhi Metro passes provide unlimited travel across the city (₹800/month)",
            "Use cluster buses for short distances within neighborhoods (₹5-15)",
            "Share autos with others going to same metro stations",
            "Rent cycles from Delhi Metro stations for eco-friendly transport",
            "Walk short distances - Delhi has good pedestrian infrastructure in central areas"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Rooftop Workspace",
            location: "Khan Market",
            tip: "Café Turtle's upper floor has quiet workspace with excellent WiFi for ₹300/day",
            timing: "10 AM - 8 PM"
          },
          {
            name: "Free WiFi Hub",
            location: "Central Park Connaught Place",
            tip: "Free high-speed WiFi and seating area perfect for outdoor work sessions",
            timing: "24/7 available"
          },
          {
            name: "Government Library Access",
            location: "Nehru Memorial Library",
            tip: "Free access to research facilities and quiet study spaces for digital nomads",
            website: "http://nehrumemorial.nic.in/"
          },
          {
            name: "Budget Food Paradise",
            location: "Gole Market",
            tip: "Hidden local market with authentic North Indian food for ₹30-80 per meal",
            timing: "7 AM - 10 PM"
          }
        ],
        apps: [
          { name: "Delhi Metro Rail", description: "Official metro app with routes and timings", url: "https://play.google.com/store/apps/details?id=com.delhimetrorail.dmrc" },
          { name: "Delhi Police", description: "Emergency services and safety features", url: "https://play.google.com/store/apps/details?id=com.delhipolice.citizenservices" },
          { name: "Delhi Government", description: "Government services and schemes", url: "https://play.google.com/store/apps/details?id=in.gov.delhi.citizen" },
          { name: "Zomato Pro", description: "Food delivery with government canteen listings", url: "https://www.zomato.com/" }
        ],
        emergencyNumbers: [
          { label: "Delhi Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Fire Service", number: "101" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Women's Helpline", number: "1091" }
        ]
      },
      "Alleppey": {
        moneyHacks: {
          accommodation: [
            "Book homestays directly through local contacts for 60% cheaper than Airbnb",
            "Stay in traditional Kerala houses away from backwater frontage for better rates",
            "Long-term houseboat rentals for groups - split costs among 4-6 nomads",
            "Use Kerala Tourism's budget accommodations and government guest houses",
            "Negotiate weekly/monthly rates at family-run guesthouses"
          ],
          food: [
            "Eat at local toddy shops for authentic Kerala meals under ₹80",
            "Buy fresh seafood directly from fishermen at Alleppey beach",
            "Use traditional meal services (sadya) available at temples for ₹40-60",
            "Shop at Mullakkal market for spices and vegetables at wholesale prices",
            "Coconut water straight from vendors costs ₹20 vs ₹60 at tourist spots"
          ],
          transport: [
            "Rent bicycles for exploring backwater villages (₹100-150/day)",
            "Use KSRTC buses for intercity travel - cheaper than private operators",
            "Share auto-rickshaws with locals for short distances within town",
            "Walk along backwater paths - most attractions are within walking distance",
            "Book government ferry services for backwater tours at fixed rates"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Backwater Entry",
            location: "Kumrakom Bird Sanctuary",
            tip: "Access via local fishing boats from Vembanad Lake for ₹100 vs ₹800 tourist packages",
            timing: "Early morning 6-8 AM"
          },
          {
            name: "Local WiFi Café",
            location: "Mullakkal Street",
            tip: "Traditional café with high-speed internet and local atmosphere for remote work",
            website: "Local inquiry only"
          },
          {
            name: "Sunset Point Secret",
            location: "Alappuzha Beach",
            tip: "Walk 500m north of main beach area for private sunset viewing without crowds",
            timing: "6-7 PM"
          },
          {
            name: "Spice Market Insider",
            location: "Mullakkal Market",
            tip: "Visit on Tuesdays and Fridays for direct farmer sales at 50% market prices",
            days: "Tuesday, Friday"
          }
        ],
        apps: [
          { name: "Kerala RTC", description: "State transport bus timings and routes", url: "https://play.google.com/store/apps/details?id=com.ksrtc.ticket" },
          { name: "Kerala Tourism", description: "Official tourism app with hidden gems", url: "https://www.keralatourism.org/" },
          { name: "Backwater Navigator", description: "Local boat and ferry timings", url: "Local app - ask at tourist centers" },
          { name: "Weather Kerala", description: "Monsoon and weather updates", url: "https://play.google.com/store/apps/weather.kerala" }
        ],
        emergencyNumbers: [
          { label: "Kerala Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Coast Guard", number: "1554" },
          { label: "Tourist Helpline", number: "0477-2251796" },
          { label: "Boat Emergency", number: "0477-2251795" }
        ]
      },
      "Varkala": {
        moneyHacks: {
          accommodation: [
            "Stay in North Cliff area for budget guesthouses with sea views (₹800-1500/night)",
            "Book Ayurvedic retreat accommodations for long-term stays with wellness included",
            "Share cliff-top houses with yoga practitioners and digital nomads",
            "Use local homestays 1-2km inland for 60% cheaper rates than cliff properties",
            "Negotiate monthly rates at beachfront cafés with attached accommodation"
          ],
          food: [
            "Eat at local Kerala restaurants away from cliff area for authentic meals ₹60-120",
            "Buy fresh fish directly from Varkala fishing harbor in the morning",
            "Use Ayurvedic meal services at wellness centers for healthy, cheap food",
            "Shop at local markets in town center vs cliff tourist shops for 70% savings",
            "Join cooking classes at retreats - often includes free meals"
          ],
          transport: [
            "Rent scooters/bikes for exploring hidden beaches and villages",
            "Use auto-rickshaws for town trips - negotiate daily rates for regular use",
            "Walk along cliff paths - most cafés and accommodations are walkable",
            "Take local buses to nearby beaches like Odayam and Edava",
            "Share taxis to Trivandrum airport with other travelers"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Beach Access",
            location: "Odayam Beach",
            tip: "15-minute walk south from main beach - completely secluded with no crowds",
            timing: "Early morning for best experience"
          },
          {
            name: "Cliff Yoga Spot",
            location: "North Cliff",
            tip: "Free sunrise yoga sessions at Soul & Surf - join community practice",
            website: "https://soulandsurf.com/"
          },
          {
            name: "Local Temple Experience",
            location: "Janardanaswamy Temple",
            tip: "Join evening prayers for cultural experience and free prasadam",
            timing: "6-7 PM daily"
          },
          {
            name: "Ayurveda Center Deals",
            location: "Dr. Franklin's Panchakarma Institute",
            tip: "Day packages include meals, treatments, and meditation for ₹1200",
            website: "http://www.dr-franklin.com/"
          }
        ],
        apps: [
          { name: "Kerala RTC", description: "Bus connections to nearby towns", url: "https://play.google.com/store/apps/details?id=com.ksrtc.ticket" },
          { name: "Varkala Guide", description: "Local business and event listings", url: "Local tourist center app" },
          { name: "Ayurveda Finder", description: "Authentic Ayurvedic treatments and centers", url: "https://ayurvedafinder.com/" },
          { name: "Tide Times", description: "Beach safety and swimming conditions", url: "https://play.google.com/store/apps/tides" }
        ],
        emergencyNumbers: [
          { label: "Varkala Police", number: "0470-2602253" },
          { label: "Ambulance", number: "108" },
          { label: "Lifeguard", number: "0470-2602100" },
          { label: "Tourist Police", number: "0470-2602424" },
          { label: "Coast Guard", number: "1554" }
        ]
      },
      "Kasol": {
        moneyHacks: {
          accommodation: [
            "Stay in local Israeli-run guesthouses for authentic experience and better rates",
            "Book riverside camping with basic facilities for ₹300-500/night",
            "Share mountain huts with trekking groups - split costs dramatically",
            "Use government forest rest houses advance booking for budget stays",
            "Negotiate long-term rates at cafés with attached rooms during off-season"
          ],
          food: [
            "Eat at local dhabas serving Indian food for ₹80-150 vs ₹300+ Israeli cafés",
            "Buy supplies from Bhuntar market before heading to valley for 50% savings",
            "Join community kitchens at guesthouses - share cooking costs with other travelers",
            "Forage seasonal fruits and herbs with local guides (sustainable and free)",
            "Use local home-stay meal services for authentic Himachali cuisine"
          ],
          transport: [
            "Share taxis from Bhuntar airport/Chandigarh with other travelers",
            "Use local buses from Kullu/Bhuntar - much cheaper than private taxis",
            "Rent motorcycles in Kasol for exploring upper Parvati Valley",
            "Walk/trek between villages - many paths connect different settlements",
            "Join group treks to share guide and transport costs"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Hot Springs",
            location: "Kheerganga Trek",
            tip: "Start trek early morning to reach hot springs before crowds and enjoy solitude",
            timing: "6 AM start recommended"
          },
          {
            name: "Secret Café Workspace",
            location: "Chalal Village",
            tip: "Stone Garden Café has reliable WiFi and mountain views for remote work",
            website: "Ask locally for directions"
          },
          {
            name: "Local Temple Experience",
            location: "Manikaran Sahib",
            tip: "Free langar (community meal) and accommodation for spiritual travelers",
            timing: "24/7 community kitchen"
          },
          {
            name: "Hidden Trek Route",
            location: "Tos Village",
            tip: "Less crowded alternative to popular treks, accessible by foot from Kasol",
            timing: "Day trek - start early"
          }
        ],
        apps: [
          { name: "Himachal Tourism", description: "Official tourism info and trek permits", url: "https://himachaltourism.gov.in/" },
          { name: "Trek Finder", description: "Local trek routes and difficulty levels", url: "Local guide recommendations" },
          { name: "Weather Mountain", description: "Mountain weather and safety alerts", url: "https://play.google.com/store/apps/mountain.weather" },
          { name: "SOS Himachal", description: "Emergency services in mountain areas", url: "https://play.google.com/store/apps/himachal.emergency" }
        ],
        emergencyNumbers: [
          { label: "Kullu Police", number: "01902-222339" },
          { label: "Mountain Rescue", number: "108" },
          { label: "Forest Department", number: "01902-223234" },
          { label: "Trek Emergency", number: "01902-224000" },
          { label: "Tourist Helpline", number: "1363" }
        ]
      }
    };

    return hacksByCity[cityName] || hacksByCity["Goa"];
  };

  const cityHacks = getCitySpecificHacks(city.name);

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Lightbulb className="mr-3 h-8 w-8 text-vintage-gold" />
          Insider Hacks & Local Secrets
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Exclusive money-saving secrets, hidden gems, and local knowledge that only long-term residents and smart nomads know about {city.name}.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Money-Saving Hacks */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-6 flex items-center">
            <DollarSign className="mr-2 h-5 w-5" />
            💰 Money-Saving Hacks
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-3 flex items-center">
                <DollarSign className="mr-2 h-4 w-4" />
                Accommodation Savings
              </h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {cityHacks.moneyHacks.accommodation.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3 flex items-center">
                <Coffee className="mr-2 h-4 w-4" />
                Food & Dining
              </h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {cityHacks.moneyHacks.food.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3 flex items-center">
                <Car className="mr-2 h-4 w-4" />
                Transport Hacks
              </h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {cityHacks.moneyHacks.transport.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Secret Spots & Hidden Gems */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-6 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            🗺️ Secret Spots & Hidden Gems
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cityHacks.secretSpots.map((spot, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-travel-blue">{spot.name}</h4>
                  <Badge variant="secondary" className="bg-vintage-gold/10 text-vintage-gold">
                    {spot.location}
                  </Badge>
                </div>
                <p className="text-sm text-muted-navy mb-3">{spot.tip}</p>
                <div className="flex items-center justify-between text-xs text-muted-navy">
                  {spot.coordinates && (
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {spot.coordinates}
                    </span>
                  )}
                  {spot.website && (
                    <a href={spot.website} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center text-travel-blue hover:underline">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Visit
                    </a>
                  )}
                  {spot.timing && (
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {spot.timing}
                    </span>
                  )}
                  {spot.days && (
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {spot.days}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Apps & Emergency Resources */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            🚨 Essential Apps & Emergency Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Must-Have Apps for {city.name}</h4>
              <div className="space-y-2 text-sm">
                {cityHacks.apps.map((app, index) => (
                  <a key={index} href={app.url} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center text-travel-blue hover:underline">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    {app.name} - {app.description}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Emergency Contacts</h4>
              <div className="space-y-2 text-sm text-muted-navy">
                {cityHacks.emergencyNumbers.map((contact, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{contact.label}:</span>
                    <a href={`tel:${contact.number}`} className="text-travel-blue hover:underline">
                      {contact.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips Summary */}
        <div className="bg-gradient-to-r from-vintage-gold/10 to-travel-blue/10 rounded-lg p-6">
          <h4 className="font-semibold text-travel-blue mb-3 flex items-center">
            <Zap className="mr-2 h-4 w-4" />
            🎯 Top 10 Insider Secrets Summary
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-navy">
            <ol className="space-y-1 list-decimal list-inside">
              <li>Use local transport passes for unlimited monthly travel</li>
              <li>Eat at local joints instead of tourist areas (60% cheaper)</li>
              <li>Book accommodations via local apps and groups for better rates</li>
              <li>Shop at wholesale markets instead of retail stores</li>
              <li>Learn basic local language phrases for better prices</li>
            </ol>
            <ol className="space-y-1 list-decimal list-inside" start={6}>
              <li>Time purchases during off-peak hours and seasons</li>
              <li>Use UPI payments for cashback and better rates</li>
              <li>Negotiate everything - it's expected and respected</li>
              <li>Join local nomad groups for shared resources</li>
              <li>Always have emergency contacts and backup payment methods</li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}