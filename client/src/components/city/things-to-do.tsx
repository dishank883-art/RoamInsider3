import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, ExternalLink, Calendar, Eye, Camera } from "lucide-react";
import type { Attraction, Event } from "@shared/schema";

interface ThingsToDoProps {
  attractions: Attraction[];
  events: Event[];
}

export default function ThingsToDo({ attractions, events }: ThingsToDoProps) {
  const featuredAttractions = attractions.filter(a => !a.isHiddenGem).slice(0, 6);
  const hiddenGems = attractions.filter(a => a.isHiddenGem).slice(0, 4);
  const upcomingEvents = events.filter(e => new Date(e.date) > new Date()).slice(0, 4);

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <Camera className="mr-2 h-6 w-6 text-vintage-gold" />
          Things to Do
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Top Attractions */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Star className="mr-2 h-5 w-5" />
            Top Attractions
          </h3>
          {featuredAttractions.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {featuredAttractions.map((attraction) => (
                <div key={attraction.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  {attraction.image && (
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={`${attraction.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200`}
                        alt={attraction.name}
                        className="w-full h-full object-cover"
                      />
                      {attraction.rating && (
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                          <Star className="h-3 w-3 text-vintage-gold fill-current" />
                          <span className="text-xs font-semibold">{attraction.rating}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-travel-blue">{attraction.name}</h4>
                    <Badge className="bg-travel-blue/10 text-travel-blue">
                      {attraction.category}
                    </Badge>
                  </div>
                  
                  {attraction.description && (
                    <p className="text-muted-navy text-sm mb-3 line-clamp-2">{attraction.description}</p>
                  )}
                  
                  <div className="space-y-2 text-sm">
                    {attraction.address && (
                      <div className="flex items-center space-x-2 text-muted-navy">
                        <MapPin className="h-3 w-3" />
                        <span>{attraction.address}</span>
                      </div>
                    )}
                    {attraction.timings && (
                      <div className="flex items-center space-x-2 text-muted-navy">
                        <Clock className="h-3 w-3" />
                        <span>{attraction.timings}</span>
                      </div>
                    )}
                    {attraction.priceRange && (
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-vintage-gold border-vintage-gold">
                          {attraction.priceRange}
                        </Badge>
                        {attraction.rating && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-vintage-gold fill-current" />
                            <span className="text-vintage-gold font-semibold">{attraction.rating}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-navy">
              <Camera className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p>No attractions data available for this city.</p>
            </div>
          )}
        </div>

        {/* Hidden Gems */}
        {hiddenGems.length > 0 && (
          <div>
            <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              Hidden Gems
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {hiddenGems.map((gem) => (
                <div key={gem.id} className="bg-vintage-gold/5 border border-vintage-gold/20 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-travel-blue">{gem.name}</h4>
                    <Badge className="bg-vintage-gold/10 text-vintage-gold">
                      Hidden Gem
                    </Badge>
                  </div>
                  {gem.description && (
                    <p className="text-muted-navy text-sm mb-3">{gem.description}</p>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-vintage-gold font-medium">{gem.category}</span>
                    {gem.rating && (
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-vintage-gold fill-current" />
                        <span className="text-vintage-gold font-semibold">{gem.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Events */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Upcoming Events & Festivals
          </h3>
          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-travel-blue">{event.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-navy mt-1">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        {event.venue && (
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{event.venue}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      {event.category && (
                        <Badge className="bg-sage-green/10 text-sage-green mb-2">
                          {event.category}
                        </Badge>
                      )}
                      {event.price !== null && (
                        <div className="text-sm">
                          <span className="font-semibold text-vintage-gold">
                            {event.isPaid ? `₹${event.price}` : 'Free'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {event.description && (
                    <p className="text-muted-navy text-sm mb-3">{event.description}</p>
                  )}
                  
                  {event.url && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="mt-2"
                      onClick={() => window.open(event.url, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Learn More
                    </Button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-navy">
              <Calendar className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p>No upcoming events available for this city.</p>
            </div>
          )}
        </div>

        {/* Experience Categories */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4">Experience Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Historical", icon: "🏛️", color: "warm-terracotta" },
              { name: "Cultural", icon: "🎭", color: "vintage-gold" },
              { name: "Nature", icon: "🌳", color: "sage-green" },
              { name: "Adventure", icon: "🏔️", color: "sunset-orange" },
              { name: "Food", icon: "🍽️", color: "travel-blue" },
              { name: "Nightlife", icon: "🌃", color: "warm-terracotta" },
              { name: "Shopping", icon: "🛍️", color: "vintage-gold" },
              { name: "Wellness", icon: "🧘", color: "sage-green" }
            ].map((category, index) => (
              <div 
                key={index}
                className={`bg-${category.color}/5 border border-${category.color}/20 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer`}
              >
                <div className="text-2xl mb-1">{category.icon}</div>
                <div className={`text-sm font-medium text-${category.color}`}>{category.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Tips */}
        <div className="bg-sage-green/5 rounded-lg p-4 border-l-4 border-sage-green">
          <h4 className="font-semibold text-sage-green mb-2 flex items-center">
            <Eye className="mr-2 h-4 w-4" />
            Local Experience Tips
          </h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Book popular attractions in advance, especially during peak season</li>
            <li>• Early morning visits to attractions mean fewer crowds and better photos</li>
            <li>• Hire local guides for deeper cultural insights and hidden stories</li>
            <li>• Check for free walking tours to explore the city cost-effectively</li>
            <li>• Follow local event pages on social media for last-minute events</li>
            <li>• Ask locals for recommendations - they know the best spots</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
