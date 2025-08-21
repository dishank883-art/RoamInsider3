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
      "Bir": {
        moneyHacks: {
          accommodation: [
            "Stay in guesthouses near landing zone for ₹800-1500/night vs ₹3000+ in luxury resorts",
            "Book monthly stays directly with Tibetan families for cultural immersion (₹8000-12000/month)",
            "Camp at designated sites for ₹200-300/night including basic facilities",
            "Share rooms with fellow paragliders to split costs during peak season",
            "Book advance for Billing area stays - cheaper and closer to takeoff sites"
          ],
          food: [
            "Eat at Tibetan cafes like June 16th Café for authentic momos under ₹120",
            "Try local dhabas on Bir-Billing road for ₹80-150 meals",
            "Buy fresh vegetables from weekly village market (Tuesdays)",
            "Cook in guesthouses with kitchen facilities to save 60% on food costs",
            "Join group meals at hostels for shared cooking and cultural exchange"
          ],
          transport: [
            "Use shared taxis to Dharamshala (₹50 vs ₹300 private)",
            "Rent monthly scooters for ₹2000 vs ₹200-300/day rentals",
            "Walk or cycle to Billing takeoff point (free vs ₹300 taxi)",
            "Book bus tickets online to Delhi/Chandigarh for early bird discounts",
            "Share airport transfers to Kangra with other travelers"
          ]
        },
        secretSpots: [
          {
            name: "Secret Sunset Point",
            location: "Behind Chokling Monastery",
            tip: "Peaceful sunset viewing with 360° mountain views, no crowds",
            coordinates: "32.0176°N, 76.7234°E"
          },
          {
            name: "Hidden Café WiFi",
            location: "Avva's Café back room",
            tip: "Quieter workspace with faster WiFi than main area, order coffee to access",
            timing: "9 AM - 6 PM"
          },
          {
            name: "Free Meditation Hall",
            location: "Deer Park Institute",
            tip: "Free access to quiet meditation halls for work/study during day hours",
            website: "https://deerpark.in/"
          }
        ],
        apps: [
          { name: "Ola", description: "Limited but available for airport transfers", url: "https://www.olacabs.com/" },
          { name: "Weather Underground", description: "Accurate weather for paragliding", url: "https://www.wunderground.com/" },
          { name: "Zomato", description: "Food delivery in main Bir area", url: "https://www.zomato.com/" }
        ],
        emergencyNumbers: [
          { label: "Tourist Helpline", number: "1363" },
          { label: "Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Civil Hospital Baijnath", number: "+911894242274" }
        ]
      },
      "Dehradun": {
        moneyHacks: {
          accommodation: [
            "Stay in Rajpur Road area for better connectivity vs expensive city center",
            "Book monthly PG accommodations near FRI for ₹8000-15000 with meals",
            "Share flats near ISBT for easy travel access and lower rent",
            "Book hostels in Mussoorie Road area for backpacker-friendly rates",
            "Negotiate long-term rates with hotel owners during off-season"
          ],
          food: [
            "Eat at iconic spots like Kumar Sweets for local delicacies under ₹100",
            "Try street food at Paltan Bazaar for authentic flavors at ₹30-80",
            "Use food delivery apps for student discounts and offers",
            "Shop at Paltan Bazaar market for fresh produce (30% cheaper)",
            "Join office canteens or mess halls for subsidized meals"
          ],
          transport: [
            "Use city buses for ₹5-15 vs ₹50-100 for auto rickshaws",
            "Book advance train tickets to Delhi for 40% discounts",
            "Share taxis to Mussoorie/Haridwar with other travelers",
            "Rent monthly scooters for local transport (₹2500-3500)",
            "Use Vikram (shared auto) for short distances at ₹10-20"
          ]
        },
        secretSpots: [
          {
            name: "Quiet Café Workspace",
            location: "Orchard Restaurant, Rajpur Road",
            tip: "Upper floor has quiet workspace area with good WiFi and mountain view",
            timing: "10 AM - 10 PM"
          },
          {
            name: "Free Library Access",
            location: "Forest Research Institute Library",
            tip: "Public access to quiet study halls and research facilities",
            website: "https://www.icfre.gov.in/"
          },
          {
            name: "Hidden Valley Walk",
            location: "Lacchiwala",
            tip: "Local swimming spot and picnic area, ₹20 entry vs ₹500 at commercial spots",
            coordinates: "30.2854°N, 78.1642°E"
          }
        ],
        apps: [
          { name: "Ola/Uber", description: "Reliable for city travel and airport transfers", url: "https://www.olacabs.com/" },
          { name: "IRCTC", description: "Train bookings to major cities", url: "https://www.irctc.co.in/" },
          { name: "Zomato/Swiggy", description: "Food delivery across the city", url: "https://www.zomato.com/" }
        ],
        emergencyNumbers: [
          { label: "Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Doon Hospital", number: "+911352623284" }
        ]
      },
      "Mussoorie": {
        moneyHacks: {
          accommodation: [
            "Stay in Landour area for cheaper rates and better views than Mall Road",
            "Book homestays with local families for ₹1000-2000/night including meals",
            "Avoid peak season (April-June) for 50% cheaper accommodation",
            "Share cottages with groups for significant per-person savings",
            "Book library area hostels for quiet workspace environment"
          ],
          food: [
            "Eat at local dhabas on Dehradun road for ₹80-150 vs ₹300+ on Mall Road",
            "Try Tibetan cafes in Landour for authentic food at reasonable prices",
            "Buy groceries from lower bazaar vs expensive Mall Road shops",
            "Pack lunches for day trips to avoid overpriced hilltop restaurants",
            "Look for 'thali' places for complete meals under ₹120"
          ],
          transport: [
            "Use shared taxis from Dehradun (₹80-100 vs ₹800 private)",
            "Walk on Mall Road instead of taking battery rickshaws (₹50-100)",
            "Book round-trip bus tickets for discounts to Delhi/Haridwar",
            "Share cable car costs when traveling in groups",
            "Use local buses to nearby attractions (₹20-50 vs ₹300+ taxi)"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Valley Viewpoint",
            location: "Behind Landour Clock Tower",
            tip: "Spectacular valley views without Mall Road crowds, perfect for remote work",
            timing: "Best in morning for clear mountain views"
          },
          {
            name: "Quiet Library Corner",
            location: "Mussoorie Library",
            tip: "Free WiFi and peaceful workspace for digital nomads",
            website: "Near Picture Palace"
          },
          {
            name: "Secret Sunrise Spot",
            location: "Camel's Back Road early morning",
            tip: "Best sunrise views before tourist crowds, great for yoga/meditation",
            coordinates: "30.4598°N, 78.0664°E"
          }
        ],
        apps: [
          { name: "Weather Underground", description: "Accurate hill weather forecasts", url: "https://www.wunderground.com/" },
          { name: "Uber/Ola", description: "Limited service but available", url: "https://www.olacabs.com/" },
          { name: "Zomato", description: "Food delivery on Mall Road area", url: "https://www.zomato.com/" }
        ],
        emergencyNumbers: [
          { label: "Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Community Hospital", number: "+911352632424" }
        ]
      },
      "Ziro": {
        moneyHacks: {
          accommodation: [
            "Stay with Apatani families for cultural homestays (₹800-1500/night)",
            "Book tribal guesthouses for authentic experience and lower costs",
            "Camp at designated sites for ₹200-400/night with basic facilities",
            "Share bamboo huts with fellow travelers during festival season",
            "Book advance for music festival time to avoid 3x price surge"
          ],
          food: [
            "Try Apatani traditional meals at local homes for ₹100-200",
            "Buy organic vegetables directly from farmers at weekly market",
            "Cook with host families to learn traditional recipes and save money",
            "Try local rice wine and traditional dishes at village gatherings",
            "Shop at Hapoli market for basic supplies (only commercial area)"
          ],
          transport: [
            "Use shared vehicles from Itanagar (₹200-300 vs ₹2000 private)",
            "Walk or cycle around valley (free vs ₹500+ for local taxis)",
            "Book helicopter service in advance for better rates to Guwahati",
            "Share costs for trips to neighboring villages with other travelers",
            "Use local guides for trekking (₹500-1000/day vs organized tours)"
          ]
        },
        secretSpots: [
          {
            name: "Sacred Grove Meditation",
            location: "Kile Pakho (Hilltop)",
            tip: "Sacred Apatani site with panoramic valley views, perfect for quiet reflection",
            coordinates: "27.5441°N, 93.8237°E"
          },
          {
            name: "Traditional Workspace",
            location: "Apatani Cultural Center",
            tip: "Work while learning about indigenous culture, WiFi available",
            timing: "9 AM - 5 PM"
          },
          {
            name: "Hidden Waterfalls",
            location: "Talley Valley Wildlife Sanctuary",
            tip: "Less crowded waterfalls, perfect for nature walks and photography",
            website: "Contact local guides"
          }
        ],
        apps: [
          { name: "Google Maps Offline", description: "Download offline maps - limited connectivity", url: "https://maps.google.com/" },
          { name: "Weather Underground", description: "Weather forecasts for remote area", url: "https://www.wunderground.com/" }
        ],
        emergencyNumbers: [
          { label: "Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "District Hospital", number: "+913788222108" }
        ]
      },
      "Kolkata": {
        moneyHacks: {
          accommodation: [
            "Stay in South Kolkata (Ballygunge/Gariahat) for better connectivity vs Park Street premium",
            "Book monthly PG accommodations near IT hubs (Salt Lake/Rajarhat) for ₹8000-15000",
            "Share flats in university areas (Jadavpur/Presidency) for student-friendly rates",
            "Use local booking platforms vs international chains for 40% savings",
            "Book heritage homestays in North Kolkata for cultural immersion"
          ],
          food: [
            "Eat at local 'adda' spots and tea stalls for authentic experience under ₹50",
            "Try iconic street food: phuchka, kathi rolls, fish fry at ₹20-80",
            "Use food delivery apps for restaurant discounts and student offers",
            "Shop at New Market or Gariahat for fresh ingredients (30% cheaper)",
            "Join Bengali families for festival meals and cultural exchange"
          ],
          transport: [
            "Use metro for efficient travel (₹5-25 vs ₹100+ for cabs)",
            "Try iconic yellow taxis for cultural experience and fair pricing",
            "Use buses for ₹8-15 vs ₹50-150 for app-based rides",
            "Book train tickets to major cities well in advance for discounts",
            "Share airport cabs or use metro to reduce transfer costs"
          ]
        },
        secretSpots: [
          {
            name: "Prinsep Ghat Workspace",
            location: "Strand Road, River Hooghly",
            tip: "Riverside peaceful workspace with colonial architecture backdrop",
            coordinates: "22.56°N, 88.34°E"
          },
          {
            name: "Coffee House Intellectual Hub",
            location: "Indian Coffee House, College Street",
            tip: "Historic adda culture spot, perfect for writing and intellectual discussions",
            timing: "8 AM - 11 PM"
          },
          {
            name: "Academy Garden Workspace",
            location: "Academy of Fine Arts",
            tip: "Art-filled environment with galleries and peaceful gardens for creative work",
            website: "https://www.acadfineartsmuseum.com/"
          }
        ],
        apps: [
          { name: "Uber/Ola", description: "Reliable for city travel and airport transfers", url: "https://www.olacabs.com/" },
          { name: "Metro Railway App", description: "Kolkata metro timings and route info", url: "https://play.google.com/store/apps/details?id=com.kmrcl.passenger" },
          { name: "Zomato/Swiggy", description: "Extensive food delivery network", url: "https://www.zomato.com/" }
        ],
        emergencyNumbers: [
          { label: "Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "SSKM Hospital", number: "+913322231081" }
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
      },
      "Udaipur": {
        moneyHacks: {
          accommodation: [
            "Stay in old city heritage guesthouses for authentic experience at budget rates",
            "Book lake-facing rooms during off-season (Apr-Sep) for 60% discounts",
            "Negotiate weekly/monthly rates at family-run havelis for long-term stays",
            "Use Airbnb alternatives for heritage property stays with cooking facilities",
            "Share palace hotel amenities during happy hours without staying there"
          ],
          food: [
            "Eat at local thali restaurants near Jagdish Temple for authentic meals under ₹100",
            "Visit wholesale spice markets for cooking ingredients at local prices",
            "Join cooking classes at heritage hotels to learn royal Rajasthani cuisine",
            "Eat during lunch hours at palace hotels for buffet access at lower rates",
            "Try street food at Chetak Circle away from tourist areas"
          ],
          transport: [
            "Use shared autos and city buses for economical local transport",
            "Rent scooters for exploring countryside and nearby attractions independently",
            "Book day tours through local operators vs expensive hotel packages",
            "Share taxis with other travelers for visits to Chittorgarh/Kumbhalgarh",
            "Walk around Lake Pichola area - most attractions within walking distance"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Sunset Viewpoint",
            location: "Monsoon Palace Road",
            tip: "Stop halfway up the hill for panoramic city views without entry fee to palace",
            coordinates: "24.629°N, 73.682°E"
          },
          {
            name: "Local Art Workshop Access",
            location: "Shilpgram Village",
            tip: "Visit during non-festival times to interact directly with artisans and buy at wholesale prices",
            timing: "10 AM - 5 PM, avoid festival crowds"
          },
          {
            name: "Free Palace Photography",
            location: "Ambrai Ghat",
            tip: "Best viewpoint for City Palace photos during golden hour without paying entry fees",
            timing: "6-7 AM and 6-7 PM"
          },
          {
            name: "Authentic Cooking Experience",
            location: "Local Family Homes",
            tip: "Many families offer cooking lessons for ₹500-800 vs ₹3000+ at hotels",
            website: "Ask at local guesthouses for referrals"
          }
        ],
        apps: [
          { name: "Udaipur City Guide", description: "Local attractions and transport info", url: "Local tourism office app" },
          { name: "Heritage Walk App", description: "Self-guided historical tours", url: "Udaipur heritage society" },
          { name: "Rajasthan Tourism", description: "Official state tourism information", url: "https://rajasthantourism.gov.in/" },
          { name: "Palace Hotels", description: "Heritage hotel bookings and offers", url: "https://www.hrhhotels.com/" }
        ],
        emergencyNumbers: [
          { label: "Udaipur Police", number: "0294-2411344" },
          { label: "Tourist Police", number: "1363" },
          { label: "Ambulance", number: "108" },
          { label: "Fire", number: "101" },
          { label: "Women's Helpline", number: "1091" }
        ]
      },
      "Gangtok": {
        moneyHacks: {
          accommodation: [
            "Stay with local families for homestay experience and cultural exchange",
            "Book government tourism department accommodations for clean, affordable stays",
            "Look for monastery guesthouses for peaceful environments and donation-based stays",
            "Negotiate monthly rates at family-run hotels around MG Marg area",
            "Consider Pelling or Namchi for cheaper alternatives with better mountain views"
          ],
          food: [
            "Eat at local Tibetan and Nepali restaurants for authentic cuisine at honest prices",
            "Try traditional chang (local barley beer) at local establishments",
            "Buy organic vegetables directly from local farmers in nearby villages",
            "Visit community kitchens during festivals for traditional feast experiences",
            "Learn to make momos from local families - many offer informal cooking classes"
          ],
          transport: [
            "Use shared jeeps to Darjeeling and nearby towns for budget travel",
            "Book helicopter rides to remote areas only during clear weather windows",
            "Rent bikes from local shops for exploring nearby villages and tea gardens",
            "Join shared taxi services to Bagdogra airport - book advance for better rates",
            "Use local bus services for economical travel to surrounding areas and viewpoints"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Monastery Viewpoint",
            location: "Enchey Monastery Trail",
            tip: "Hike trail behind monastery for panoramic views of entire Gangtok valley without crowds",
            coordinates: "27.340°N, 88.630°E"
          },
          {
            name: "Natural Hot Springs",
            location: "Reshi Village",
            tip: "Natural hot springs 78km from Gangtok - perfect for relaxation after mountain treks",
            timing: "Best visited October-March, carry lunch"
          },
          {
            name: "Authentic Tibetan Quarter",
            location: "Tibet Road Area",
            tip: "Visit Tibetan refugee settlement for genuine handicrafts and traditional foods at local prices",
            timing: "9 AM - 6 PM, respectful interaction appreciated"
          },
          {
            name: "Free Cable Car Alternative",
            location: "Ridge Park",
            tip: "Walk to Ridge Park for similar valley views as cable car without the cost",
            timing: "Early morning for clear mountain views"
          }
        ],
        apps: [
          { name: "Sikkim Tourism", description: "Official state tourism and permits", url: "https://sikkimtourism.gov.in/" },
          { name: "Weather Sikkim", description: "Mountain weather updates", url: "Local weather service" },
          { name: "Trek Sikkim", description: "Trekking routes and permissions", url: "Local trekking associations" },
          { name: "Monastery Guide", description: "Buddhist monastery information and timings", url: "Local Buddhist center app" }
        ],
        emergencyNumbers: [
          { label: "Gangtok Police", number: "03592-202033" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Emergency", number: "108" },
          { label: "Mountain Rescue", number: "03592-202100" },
          { label: "State Helpline", number: "1070" }
        ]
      },
      "McLeodganj": {
        moneyHacks: {
          accommodation: [
            "Stay in Dharamkot for mountain views and lower prices than McLeodganj center",
            "Book monastery guesthouses for spiritual ambiance and minimal donation-based rates",
            "Look for long-term yoga retreat accommodations with meal packages included",
            "Consider homestays with Tibetan refugee families for cultural immersion",
            "Negotiate monthly rates at guesthouses popular with long-term meditation practitioners"
          ],
          food: [
            "Eat at Tibetan refugee-run restaurants for authentic and affordable meals",
            "Try traditional Tibetan butter tea and tsampa for complete authentic experience",
            "Visit local bakeries run by refugees for fresh Tibetan bread and pastries",
            "Join community kitchens at meditation centers for shared meals and cultural exchange",
            "Shop at weekend markets for fresh organic produce from local mountain farmers"
          ],
          transport: [
            "Use frequent local buses between Dharamshala and McLeodganj for ₹10-15 rides",
            "Share taxis to Delhi, Chandigarh, or other destinations with fellow travelers",
            "Rent bikes from local shops for exploring nearby villages and monasteries",
            "Join organized trekking groups for shared transportation to trailheads",
            "Use app-based rides sparingly - limited availability but useful during monsoons"
          ]
        },
        secretSpots: [
          {
            name: "Secret Meditation Caves",
            location: "Above Dharamkot Village",
            tip: "45-minute hike above village leads to natural caves used by serious meditators",
            coordinates: "32.254°N, 76.325°E"
          },
          {
            name: "Hidden Waterfall Access",
            location: "Beyond Bhagsu Falls",
            tip: "Continue hiking 30 minutes past main waterfall for secluded natural pools",
            timing: "Best after monsoons (September-November) for water flow"
          },
          {
            name: "Tibetan Handicraft Wholesale",
            location: "Kotwali Bazaar Refugee Center",
            tip: "Visit Tibetan refugee handicraft cooperative for authentic items at wholesale prices",
            timing: "10 AM - 5 PM, closed Sundays, support fair trade"
          },
          {
            name: "Free Teachings Location",
            location: "Library of Tibetan Works",
            tip: "Free access to extensive Buddhist library and occasional informal teachings",
            website: "https://ltwa.net/"
          }
        ],
        apps: [
          { name: "Dalai Lama Teachings", description: "Schedule of public teachings and events", url: "https://dalailama.com/" },
          { name: "Tibet Museum App", description: "Self-guided museum tours", url: "Local museum information" },
          { name: "McLeodganj Guide", description: "Local business and monastery information", url: "Local tourism app" },
          { name: "Buddhist Calendar", description: "Festival dates and monastery events", url: "Buddhist center apps" }
        ],
        emergencyNumbers: [
          { label: "McLeodganj Police", number: "01892-221100" },
          { label: "Tourist Police", number: "1363" },
          { label: "Ambulance", number: "108" },
          { label: "Tibetan Reception Center", number: "01892-221879" },
          { label: "Emergency Helpline", number: "112" }
        ]
      },
      "Pune": {
        moneyHacks: {
          accommodation: [
            "Share PG accommodations in IT hubs like Hinjewadi, Whitefield for ₹8,000-15,000/month",
            "Stay in student areas like FC Road, Camp for lower rent and vibrant atmosphere",
            "Use flat-sharing apps specific to Pune's young professional community",
            "Book service apartments for 1-3 month stays - better value than hotels for extended visits",
            "Consider Pimpri-Chinchwad area for industrial job proximity with 30% lower rent"
          ],
          food: [
            "Eat at local Marathi thali restaurants for unlimited authentic meals at ₹100-150",
            "Visit German Bakery area for student-friendly cafes and budget meals",
            "Use office cafeterias if working with local companies - heavily subsidized meals",
            "Try street food at JM Road and FC Road for authentic Pune flavors under ₹100",
            "Join Marathi cooking classes to learn local cuisine and save on restaurant costs"
          ],
          transport: [
            "Buy PMPML monthly bus passes for unlimited city travel at ₹400-600",
            "Use Pune Metro for efficient travel between major IT and commercial hubs",
            "Rent monthly bikes from Bounce/Yulu for IT park commutes at ₹2,500-3,500",
            "Share rides with colleagues using office WhatsApp groups for suburban commutes",
            "Walk or cycle short distances - Pune is relatively bike and pedestrian friendly"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Fort Trek",
            location: "Sinhagad Fort Backroute",
            tip: "Take lesser-known trail from Khadakwasla for peaceful fort experience without weekend crowds",
            coordinates: "18.366°N, 73.755°E"
          },
          {
            name: "Student Coworking Secret",
            location: "Symbiosis Campus Library",
            tip: "Visitor access available for library and campus cafes - quiet work environment with student energy",
            timing: "9 AM - 6 PM, visitor registration required"
          },
          {
            name: "Riverside Workspace",
            location: "Mula-Mutha Riverfront",
            tip: "Developed riverfront areas offer free WiFi zones and outdoor workspace during pleasant weather",
            timing: "Early morning and evening best for comfort"
          },
          {
            name: "Wholesale Shopping Secret",
            location: "Mandai Market Early Hours",
            tip: "Visit vegetable market 6-8 AM for wholesale prices and fresh selection before retail markup",
            timing: "6 AM - 10 AM for best deals and selection"
          }
        ],
        apps: [
          { name: "PMPML Chalo", description: "Real-time bus tracking and digital payments", url: "https://play.google.com/store/apps/details?id=com.chalo.pmpml" },
          { name: "Pune Metro", description: "Metro routes, timings, and travel planning", url: "https://punemetrorail.org/" },
          { name: "Pune Connect", description: "Local events, meetups, and professional networking", url: "Local community platforms" },
          { name: "FlatMate Pune", description: "Roommate and flat-sharing specific to Pune", url: "https://flatmates.in/" }
        ],
        emergencyNumbers: [
          { label: "Pune Police", number: "100" },
          { label: "Ambulance", number: "108" },
          { label: "Fire", number: "101" },
          { label: "Women's Helpline", number: "1091" },
          { label: "Tourist Helpline", number: "1363" }
        ]
      },
      "Shillong": {
        moneyHacks: {
          accommodation: [
            "Stay with Khasi families for homestay experience at ₹800-1,500/night including meals",
            "Book government tourism accommodations for reliable, clean stays at budget rates",
            "Share accommodations with other travelers in Laitumkhrah area for authentic local experience",
            "Negotiate weekly/monthly rates at family-run guesthouses for extended stays",
            "Consider Ward's Lake area for central location with reasonable walking distance to attractions"
          ],
          food: [
            "Eat at local Khasi restaurants for authentic tribal cuisine at ₹80-150 per meal",
            "Try traditional fermented foods and local specialties at authentic family restaurants",
            "Visit Bara Bazaar for fresh local produce and traditional Khasi ingredients",
            "Join local families for cooking lessons featuring unique northeastern Indian cuisine",
            "Sample local alcohol like rice beer at traditional establishments for cultural experience"
          ],
          transport: [
            "Use shared Sumo vehicles for intercity travel - much more economical than private taxis",
            "Take local buses to nearby attractions and waterfalls for budget-friendly exploration",
            "Rent bikes for exploring city center and nearby viewpoints independently",
            "Join group tours for distant attractions to share transportation and guide costs",
            "Walk within city center - most attractions and markets are within comfortable walking distance"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Waterfall Access",
            location: "Krang Suri Falls Back Route",
            tip: "Take local village path instead of tourist route for more authentic experience and lower entry fees",
            timing: "Best during post-monsoon season (September-November)"
          },
          {
            name: "Local Music Scene Access",
            location: "Cloud 9 and Local Pubs",
            tip: "Shillong has incredible live music scene - visit local venues for authentic northeast rock music",
            timing: "Weekend evenings for best performances"
          },
          {
            name: "Authentic Market Experience",
            location: "Iewduh (Bara Bazaar) Early Morning",
            tip: "Visit Asia's largest traditional market early morning (6-8 AM) for authentic local trade experience",
            timing: "6 AM - 10 AM for most authentic local prices and cultural interaction"
          },
          {
            name: "Free Panoramic Views",
            location: "Lady Hydari Park Hills",
            tip: "Hike behind Lady Hydari Park for free panoramic city views instead of paying for viewpoint entry",
            timing: "Early morning or late afternoon for best lighting"
          }
        ],
        apps: [
          { name: "Meghalaya Tourism", description: "Official state tourism info and permits", url: "https://megtourism.gov.in/" },
          { name: "Shillong Music", description: "Local music events and venue information", url: "Local music community apps" },
          { name: "Northeast Weather", description: "Regional weather and monsoon updates", url: "Local weather services" },
          { name: "Khasi Culture", description: "Local cultural information and language basics", url: "Cultural preservation apps" }
        ],
        emergencyNumbers: [
          { label: "Shillong Police", number: "0364-2224747" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Ambulance", number: "108" },
          { label: "State Emergency", number: "1070" },
          { label: "Women's Helpline", number: "1091" }
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