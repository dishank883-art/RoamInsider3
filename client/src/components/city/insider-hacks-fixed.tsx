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
    ]
      },
      "Jaipur": {
        moneyHacks: {
      accommodation: [
        "Stay in heritage havelis in Old City for authentic experience at ₹800-2,000/night",
        "Book heritage hotels during off-season (April-June) for 50% discounts",
        "Share apartments in Malviya Nagar/C-Scheme with other nomads for ₹8,000-15,000/month",
        "Use StayVista or similar platforms for monthly discounts on heritage properties",
        "Consider homestays in residential areas for authentic Rajasthani experience"
      ],
      food: [
        "Eat at traditional thali restaurants like Chokhi Dhani for authentic meals ₹200-400",
        "Try street food at Masala Chowk - hygienic local food court with fixed prices",
        "Shop at Johari Bazaar spice market for authentic ingredients at wholesale rates",
        "Visit Laxmi Mishthan Bhandar for authentic Rajasthani sweets and snacks",
        "Use food delivery apps during summer months to avoid heat"
      ],
      transport: [
        "Use JCTSL bus passes for unlimited city travel - monthly pass ₹500",
        "Rent monthly bikes for ₹2,000-3,000 from government-approved vendors",
        "Use pre-paid auto stands at tourist spots to avoid haggling",
        "Download Jaipur Smart City app for real-time bus routes and timings",
        "Book Uber/Ola during peak summer for AC comfort (₹100-200 vs ₹50-80 for auto)"
      ]
    },
    secretSpots: [
      {
        name: "Sisodia Rani Garden Workspace",
        location: "8km from city center",
        tip: "Peaceful terraced garden perfect for morning work sessions with WiFi zones",
        timing: "6:00 AM - 9:00 AM",
        coordinates: "26.8512°N, 75.8747°E"
      },
      {
        name: "Nahargarh Fort Sunset Coworking",
        location: "Aravalli Hills",
        tip: "Work with panoramic city views - bring laptop for evening sessions, small café available",
        timing: "4:00 PM - 6:30 PM",
        website: "https://www.facebook.com/nahargarhjaipur/"
      },
      {
        name: "Central Park Rose Garden WiFi",
        location: "Heart of Jaipur",
        tip: "Early morning jogging track with free WiFi zones for outdoor work",
        timing: "5:30 AM - 8:00 AM"
      },
      {
        name: "Hidden Café at Anokhi Museum",
        location: "7 Tilak Marg, C-Scheme",
        tip: "Quiet museum café with excellent WiFi, AC, and cultural ambiance - ₹300/day with unlimited coffee",
        website: "https://www.anokhi.com/"
      },
      {
        name: "City Palace Secret Courtyard",
        location: "City Palace Complex",
        tip: "Ask guards for 'Zenana' courtyard access - quiet heritage workspace for ₹100 extra entry fee",
        timing: "10:00 AM - 4:00 PM"
      }
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

        {/* Emergency Resources & Apps */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            🚨 Essential Apps & Emergency Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Must-Have Apps for Goa</h4>
              <div className="space-y-2 text-sm">
                <a href="https://play.google.com/store/apps/details?id=com.rapido.passenger" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Rapido - Bike taxis (cheaper than Ola/Uber)
                </a>
                <a href="https://goamiles.com/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  GoaMiles - Local cab service
                </a>
                <a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Zomato Pro - Food delivery discounts
                </a>
                <a href="https://paytm.com/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Paytm - UPI payments and discounts
                </a>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Emergency Contacts</h4>
              <div className="space-y-2 text-sm text-muted-navy">
                <div className="flex justify-between">
                  <span>Tourist Helpline:</span>
                  <a href="tel:1363" className="text-travel-blue hover:underline">1363</a>
                </div>
                <div className="flex justify-between">
                  <span>Police:</span>
                  <a href="tel:100" className="text-travel-blue hover:underline">100</a>
                </div>
                <div className="flex justify-between">
                  <span>Ambulance:</span>
                  <a href="tel:108" className="text-travel-blue hover:underline">108</a>
                </div>
                <div className="flex justify-between">
                  <span>Fire:</span>
                  <a href="tel:101" className="text-travel-blue hover:underline">101</a>
                </div>
                <div className="flex justify-between">
                  <span>Goa Police Control:</span>
                  <a href="tel:+918322420001" className="text-travel-blue hover:underline">+91 832 242 0001</a>
                </div>
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
              <li>Book accommodations via Facebook groups for 50% savings</li>
              <li>Eat at local joints instead of tourist areas (60% cheaper)</li>
              <li>Use KTC buses for unlimited monthly travel (₹150)</li>
              <li>Shop at municipal markets vs tourist markets</li>
              <li>Learn basic Konkani phrases for better prices</li>
            </ol>
            <ol className="space-y-1 list-decimal list-inside" start={6}>
              <li>Time purchases during off-peak hours and seasons</li>
              <li>Use UPI payments for cashback and better rates</li>
              <li>Negotiate everything - it's expected and respected</li>
              <li>Join nomad WhatsApp groups for shared resources</li>
              <li>Always have emergency contacts and backup payment methods</li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}