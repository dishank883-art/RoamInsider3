import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, MapPin, Clock, Users, Zap, Signal, Smartphone, Router } from "lucide-react";
import type { InternetConnectivity } from "@shared/schema";

interface InternetConnectivityProps {
  internetData: InternetConnectivity | null;
}

export default function InternetConnectivity({ internetData }: InternetConnectivityProps) {
  if (!internetData) {
    return (
      <Card className="bg-white rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
            <Wifi className="mr-2 h-6 w-6 text-vintage-gold" />
            Internet & Connectivity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-navy">Internet connectivity data is not available for this city.</p>
        </CardContent>
      </Card>
    );
  }

  const getSpeedCategory = (speed: number) => {
    if (speed >= 50) return { label: "Excellent", color: "sage-green" };
    if (speed >= 25) return { label: "Good", color: "vintage-gold" };
    if (speed >= 10) return { label: "Fair", color: "sunset-orange" };
    return { label: "Poor", color: "warm-terracotta" };
  };

  const speedCategory = getSpeedCategory(internetData.avgSpeedMbps);

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <Wifi className="mr-2 h-6 w-6 text-vintage-gold" />
          Internet & Connectivity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Speed Overview */}
        <div className="bg-gradient-to-r from-sage-green/10 to-travel-blue/10 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Average Speed</h3>
              <div className="text-3xl font-bold text-vintage-gold">{internetData.avgSpeedMbps} Mbps</div>
              <Badge className={`bg-${speedCategory.color}/10 text-${speedCategory.color} mt-2`}>
                {speedCategory.label}
              </Badge>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Coworking Spaces</h3>
              <div className="text-3xl font-bold text-travel-blue">{internetData.coworkingSpaces?.length || 0}+</div>
              <div className="text-sm text-muted-navy">Available</div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">WiFi Coverage</h3>
              <div className="text-lg font-bold text-sage-green">Excellent</div>
              <div className="text-sm text-muted-navy">Most venues</div>
            </div>
          </div>
        </div>

        {/* Mobile Internet Plans */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Smartphone className="mr-2 h-5 w-5" />
            Mobile Internet Plans
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Jio (Recommended)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>2GB/day for 28 days</span>
                  <span>₹349 ($4.20)</span>
                </div>
                <div className="flex justify-between">
                  <span>1.5GB/day for 84 days</span>
                  <span>₹719 ($8.66)</span>
                </div>
                <div className="flex justify-between">
                  <span>Unlimited calls</span>
                  <span>Included</span>
                </div>
                <p className="text-xs text-muted-navy mt-2">Best 4G coverage nationwide</p>
              </div>
            </div>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">Airtel</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>2GB/day for 28 days</span>
                  <span>₹399 ($4.81)</span>
                </div>
                <div className="flex justify-between">
                  <span>1.5GB/day for 84 days</span>
                  <span>₹839 ($10.11)</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium content</span>
                  <span>Included</span>
                </div>
                <p className="text-xs text-muted-navy mt-2">Good urban coverage</p>
              </div>
            </div>
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">Vi (Vodafone Idea)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1.5GB/day for 28 days</span>
                  <span>₹319 ($3.84)</span>
                </div>
                <div className="flex justify-between">
                  <span>2GB/day for 56 days</span>
                  <span>₹699 ($8.43)</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend data rollover</span>
                  <span>Available</span>
                </div>
                <p className="text-xs text-muted-navy mt-2">Budget-friendly option</p>
              </div>
            </div>
          </div>
        </div>

        {/* WiFi Availability & Speeds */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Wifi className="mr-2 h-5 w-5" />
            WiFi Hotspots & Public Internet
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-travel-blue mb-3">Cafes & Restaurants</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Starbucks</span>
                    <div className="text-sm text-muted-navy">50-100 Mbps</div>
                  </div>
                  <Badge className="bg-sage-green/10 text-sage-green">Excellent</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Local Cafes</span>
                    <div className="text-sm text-muted-navy">10-30 Mbps</div>
                  </div>
                  <Badge className="bg-vintage-gold/10 text-vintage-gold">Good</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">McDonalds/KFC</span>
                    <div className="text-sm text-muted-navy">5-15 Mbps</div>
                  </div>
                  <Badge className="bg-travel-blue/10 text-travel-blue">Fair</Badge>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-travel-blue mb-3">Public Spaces</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Shopping Malls</span>
                    <div className="text-sm text-muted-navy">20-50 Mbps</div>
                  </div>
                  <Badge className="bg-sage-green/10 text-sage-green">Good</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Airports</span>
                    <div className="text-sm text-muted-navy">30-100 Mbps</div>
                  </div>
                  <Badge className="bg-sage-green/10 text-sage-green">Excellent</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="font-medium">Metro Stations</span>
                    <div className="text-sm text-muted-navy">5-20 Mbps</div>
                  </div>
                  <Badge className="bg-vintage-gold/10 text-vintage-gold">Limited</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Broadband for Long Stays */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Router className="mr-2 h-5 w-5" />
            Home Broadband (Long-term stays)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-travel-blue mb-2">Fiber Broadband</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>50 Mbps unlimited</span>
                  <span>₹800-1200/month ($10-14)</span>
                </div>
                <div className="flex justify-between">
                  <span>100 Mbps unlimited</span>
                  <span>₹1200-1800/month ($14-22)</span>
                </div>
                <div className="flex justify-between">
                  <span>Installation</span>
                  <span>₹1000-2000 ($12-24)</span>
                </div>
                <p className="text-xs text-muted-navy mt-2">Available from Jio Fiber, Airtel Fiber, BSNL</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-travel-blue mb-2">Setup Tips</h4>
              <ul className="space-y-1 text-sm text-muted-navy">
                <li>• Minimum 6-month commitment usually required</li>
                <li>• Installation takes 3-7 days after booking</li>
                <li>• Landlord permission needed for fiber installation</li>
                <li>• Consider portable WiFi for shorter stays</li>
                <li>• Most plans include free router/modem</li>
              </ul>
            </div>
          </div>
        </div>

        {/* WiFi Availability */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-3 flex items-center">
            <Signal className="mr-2 h-5 w-5" />
            Internet Speed by Area Type
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-travel-blue mb-2">Business Districts</h5>
                <p className="text-muted-navy">50-200 Mbps average</p>
                <p className="text-xs text-muted-navy">Best for video calls & heavy work</p>
              </div>
              <div>
                <h5 className="font-semibold text-travel-blue mb-2">Residential Areas</h5>
                <p className="text-muted-navy">20-100 Mbps average</p>
                <p className="text-xs text-muted-navy">Good for most remote work</p>
              </div>
              <div>
                <h5 className="font-semibold text-travel-blue mb-2">Tourist Areas</h5>
                <p className="text-muted-navy">10-50 Mbps average</p>
                <p className="text-xs text-muted-navy">Variable, but many options</p>
              </div>
            </div>
          </div>
        </div>

        {/* Internet Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <Zap className="mr-2 h-4 w-4" />
            Digital Nomad Internet Tips
          </h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Download Speedtest app to verify speeds before committing to accommodations</li>
            <li>• Ask for WiFi password and test connection during apartment viewings</li>
            <li>• Keep mobile data as backup - 4G is reliable in most Indian cities</li>
            <li>• Coworking spaces offer most reliable speeds for important calls</li>
            <li>• Power cuts can affect internet - many places have backup power</li>
            <li>• Video calls work best during off-peak hours (10 AM - 6 PM)</li>
          </ul>
        </div>

        {/* Speed Tests by Time */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Best Times for Video Calls
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Peak Performance</h4>
              <div className="space-y-1 text-sm text-muted-navy">
                <div><strong>Morning:</strong> 6 AM - 10 AM (Best for US calls)</div>
                <div><strong>Afternoon:</strong> 2 PM - 5 PM (Best for EU calls)</div>
                <div><strong>Evening:</strong> 8 PM - 11 PM (Best for APAC calls)</div>
              </div>
            </div>
            <div className="bg-warm-terracotta/5 rounded-lg p-4 border border-warm-terracotta/20">
              <h4 className="font-semibold text-warm-terracotta mb-2">Avoid These Times</h4>
              <div className="space-y-1 text-sm text-muted-navy">
                <div><strong>Evening Rush:</strong> 6 PM - 9 PM (Heavy usage)</div>
                <div><strong>Weekend Nights:</strong> 8 PM - 12 AM (Streaming peak)</div>
                <div><strong>Festival Days:</strong> All day (Network congestion)</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
