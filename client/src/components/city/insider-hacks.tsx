import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, DollarSign, MapPin, Clock, Shield, Zap, ExternalLink, Phone, Coffee, Car } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";
import { getCitySpecificData } from "@/lib/city-specific-data";

interface InsiderHacksProps {
  city: CityWithDetails;
}

export default function InsiderHacks({ city }: InsiderHacksProps) {
  const cityData = getCitySpecificData(city.slug);
  
  // Fallback to default data if city-specific data not available
  const insiderHacks = cityData ? {
    moneyHacks: cityData.insiderHacks,
    secretSpots: cityData.secretSpots
  } : {
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
    localKnowledge: {
      seasonal: [
        "Peak season (Dec-Feb): Book everything 2 months ahead, prices are 3x higher",
        "Monsoon season (Jun-Sep): Many places close, but Ayurveda retreats are 50% off",
        "Shoulder season (Mar-May, Oct-Nov): Best time for deals and fewer crowds",
        "Festival season (Oct-Nov): Diwali and Christmas bring special events and discounts"
      ],
      cultural: [
        "Learn basic Konkani phrases - locals appreciate it and offer better prices",
        "Respect siesta time (1-4 PM) - many shops close, plan accordingly",
        "Dress modestly in local markets vs beach areas for better treatment",
        "Understand 'susegad' culture - things move slower, don't rush",
        "Join local fishing trips from Betalbatim beach for authentic experience"
      ],
      practical: [
        "Download offline maps - GPS can be unreliable in interior villages",
        "Keep photocopies of documents - required for bike rentals and accommodation",
        "Use UPI payments for better exchange rates vs cash/cards",
        "Carry cash for local buses, street food, and small vendors",
        "Keep emergency contacts of local police and tourist helpline"
      ]
    }
  };

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
                {insiderHacks.moneyHacks.accommodation.map((tip, index) => (
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
                {insiderHacks.moneyHacks.food.map((tip, index) => (
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
                {insiderHacks.moneyHacks.transport.map((tip, index) => (
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
            {insiderHacks.secretSpots.map((spot, index) => (
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

        {/* Local Knowledge */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-6 flex items-center">
            <Zap className="mr-2 h-5 w-5" />
            🧠 Essential Local Knowledge
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-3">Seasonal Timing</h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {goaInsiderHacks.localKnowledge.seasonal.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Cultural Insights</h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {goaInsiderHacks.localKnowledge.cultural.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Practical Tips</h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {goaInsiderHacks.localKnowledge.practical.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            ⏰ Perfect Timing Secrets
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Morning (6-10 AM)</h4>
              <ul className="space-y-1 text-xs text-muted-navy">
                <li>• Fresh vegetables at markets</li>
                <li>• Cheapest auto rates</li>
                <li>• Best internet speeds</li>
                <li>• Empty tourist attractions</li>
                <li>• Open coworking spaces</li>
              </ul>
            </div>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">Afternoon (2-5 PM)</h4>
              <ul className="space-y-1 text-xs text-muted-navy">
                <li>• Government offices open</li>
                <li>• Least crowded malls</li>
                <li>• Happy hour at bars</li>
                <li>• Midday meal deals</li>
                <li>• Best time for apartment viewing</li>
              </ul>
            </div>
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">Evening (7-9 PM)</h4>
              <ul className="space-y-1 text-xs text-muted-navy">
                <li>• Discounted produce at markets</li>
                <li>• Social meetup time</li>
                <li>• Local street food peak</li>
                <li>• Networking events</li>
                <li>• Cultural performances</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scam Prevention */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            🛡️ Scam Prevention & Safety
          </h3>
          <div className="bg-warm-terracotta/5 rounded-lg p-4 border-l-4 border-warm-terracotta">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-warm-terracotta mb-2 flex items-center">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Common Scams to Avoid
                </h4>
                <ul className="space-y-1 text-sm text-muted-navy">
                  <li>• "Meter broken" in autos - insist on fixing or find another</li>
                  <li>• Fake travel agents near tourist spots - book online instead</li>
                  <li>• Gem/carpet store "friend" recommendations - politely decline</li>
                  <li>• Overcharging at restaurants - always check menu prices</li>
                  <li>• Fake police asking for passport - ask for proper ID first</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-travel-blue mb-2">Safety Best Practices</h4>
                <ul className="space-y-1 text-sm text-muted-navy">
                  <li>• Keep photocopies of documents, originals in accommodation</li>
                  <li>• Use official prepaid taxi counters at airports/stations</li>
                  <li>• Download offline maps before traveling to new areas</li>
                  <li>• Share live location with someone when taking late-night transport</li>
                  <li>• Keep emergency numbers saved: Police (100), Fire (101), Ambulance (108)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Local Culture Hacks */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Zap className="mr-2 h-5 w-5" />
            🎯 Local Culture & Networking
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-travel-blue mb-2">Building Local Connections</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Attend local festivals - instant conversation starters</li>
                <li>• Join morning walks/yoga groups in parks for networking</li>
                <li>• Use co-working cafes as social hubs, not just work spaces</li>
                <li>• Learn about local cricket/football teams for small talk</li>
                <li>• Participate in community cleanup drives or volunteer work</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-travel-blue mb-2">Cultural Do's & Don'ts</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Remove shoes when entering homes and some offices</li>
                <li>• Use right hand for eating and giving/receiving items</li>
                <li>• Dress modestly when visiting religious places</li>
                <li>• Accept offers for tea/chai - it's hospitality, not sales</li>
                <li>• Don't point feet toward people or religious images</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Apps & Tools */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            📱 Essential Apps & Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sage-green/5 rounded-lg p-3 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Food & Delivery</h4>
              <div className="space-y-1 text-xs text-muted-navy">
                <div><strong>Zomato:</strong> Restaurant discovery & reviews</div>
                <div><strong>Swiggy:</strong> Fast food delivery with offers</div>
                <div><strong>Dunzo:</strong> Grocery & essentials delivery</div>
                <div><strong>BigBasket:</strong> Bulk grocery shopping</div>
              </div>
            </div>
            <div className="bg-travel-blue/5 rounded-lg p-3 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">Transport & Maps</h4>
              <div className="space-y-1 text-xs text-muted-navy">
                <div><strong>Ola/Uber:</strong> Cab booking with fare estimates</div>
                <div><strong>Google Maps:</strong> Download offline maps</div>
                <div><strong>Citymapper:</strong> Public transport routing</div>
                <div><strong>Metro apps:</strong> City-specific metro navigation</div>
              </div>
            </div>
            <div className="bg-vintage-gold/5 rounded-lg p-3 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">Payments & Banking</h4>
              <div className="space-y-1 text-xs text-muted-navy">
                <div><strong>Paytm:</strong> Universal payment app</div>
                <div><strong>GooglePay:</strong> UPI payments & offers</div>
                <div><strong>PhonePe:</strong> Bill payments & recharges</div>
                <div><strong>BHIM UPI:</strong> Government payment app</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <Lightbulb className="mr-2 h-4 w-4" />
            Pro Digital Nomad Tips
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-navy">
            <ul className="space-y-1">
              <li>• Set up UPI payment within first week - essential for everything</li>
              <li>• Join WhatsApp groups for expat communities and coworking spaces</li>
              <li>• Get Aadhaar card if staying 6+ months for better service rates</li>
              <li>• Use Indian bank account for recurring payments to save forex fees</li>
              <li>• Download VPN before arriving - some services geo-blocked</li>
            </ul>
            <ul className="space-y-1">
              <li>• Learn local number formats for writing phone numbers correctly</li>
              <li>• Keep both 500₹ and 100₹ notes - small vendors can't break 2000₹</li>
              <li>• Monsoon season (June-September) affects everything - plan accordingly</li>
              <li>• Power cuts common - invest in good power bank and UPS</li>
              <li>• Befriend local shopkeepers - they become valuable information sources</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}