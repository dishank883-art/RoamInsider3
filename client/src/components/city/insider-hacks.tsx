import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, AlertTriangle, DollarSign, MapPin, Clock, Shield, Zap } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface InsiderHacksProps {
  city: CityWithDetails;
}

export default function InsiderHacks({ city }: InsiderHacksProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Lightbulb className="mr-3 h-8 w-8 text-vintage-gold" />
          Insider Hacks & Local Tips
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Discover money-saving secrets, local tricks, and insider knowledge to live like a pro in {city.name}.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Money-Saving Hacks */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <DollarSign className="mr-2 h-5 w-5" />
            💰 Money-Saving Hacks
          </h3>
          <div className="grid gap-4">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Food & Dining</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Eat at local "tiffin" centers for ₹50-80 full meals vs ₹200+ at tourist spots</li>
                <li>• Download Zomato/Swiggy for 40-60% off first-time user discounts</li>
                <li>• Street food between 11 AM-2 PM is freshest and cheapest</li>
                <li>• Ask for "half plate" portions at restaurants to save 30-40%</li>
                <li>• Local markets close around 8 PM - get 20-30% discounts after 7 PM</li>
              </ul>
            </div>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">Transportation</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Use metro day passes (₹200) if taking 4+ trips, saves vs individual tickets</li>
                <li>• Book Ola/Uber during non-peak hours for 30-50% cheaper rides</li>
                <li>• Learn basic auto-rickshaw negotiation: start at 60% of quoted price</li>
                <li>• Use local buses (₹10-30) instead of AC buses (₹20-50) for short distances</li>
                <li>• Share autos with locals going same direction - common practice</li>
              </ul>
            </div>
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">Accommodation</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Book PGs (paying guest) for monthly stays - 50% cheaper than Airbnb</li>
                <li>• Negotiate rent directly with landlords vs brokers to save 1-month commission</li>
                <li>• Stay 2-3 km from city center for 40-60% cheaper rent with same amenities</li>
                <li>• Join Facebook housing groups for better deals than OYO/hotels</li>
                <li>• Ask for "corporate rates" at hotels if staying 7+ days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Local Navigation Secrets */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            🗺️ Navigation & Getting Around
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-travel-blue mb-2">Traffic Hacks</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Avoid 8-10 AM and 6-8 PM rush hours at all costs</li>
                <li>• Use Google Maps "departure time" feature to plan optimal travel</li>
                <li>• Side streets often faster than main roads during peak hours</li>
                <li>• Learn 2-3 alternate routes to your regular destinations</li>
                <li>• Metro is always faster than road transport during rush hour</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-travel-blue mb-2">Local Language</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• "Kitna paisa?" = How much money? (for price negotiation)</li>
                <li>• "Kam karo" = Reduce the price (essential for bargaining)</li>
                <li>• "Meter se chalo" = Go by meter (for auto-rickshaws)</li>
                <li>• "Paas hai" = It's nearby (when asking for directions)</li>
                <li>• Learning 10 basic Hindi phrases saves 20-30% on everything</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Time-Based Hacks */}
        <div>
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