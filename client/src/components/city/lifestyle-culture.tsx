import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Users, Music, Utensils, Dumbbell, Calendar, AlertCircle } from "lucide-react";
import type { Lifestyle } from "@shared/schema";

interface LifestyleCultureProps {
  lifestyleData: Lifestyle | null;
}

export default function LifestyleCulture({ lifestyleData }: LifestyleCultureProps) {
  if (!lifestyleData) {
    return (
      <Card className="bg-white rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
            <Users className="mr-2 h-6 w-6 text-vintage-gold" />
            Lifestyle & Culture
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-navy">Lifestyle and culture data is not available for this city.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <Users className="mr-2 h-6 w-6 text-vintage-gold" />
          Lifestyle & Culture
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Food Scene */}
        {lifestyleData.foodScene && (
          <div>
            <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
              <Utensils className="mr-2 h-5 w-5" />
              Food Scene
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
                <h4 className="font-semibold text-vintage-gold mb-3">Local Specialties</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {lifestyleData.foodScene.specialties.map((specialty, index) => (
                    <Badge key={index} className="bg-vintage-gold/10 text-vintage-gold">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${lifestyleData.foodScene.vegFriendly ? 'bg-sage-green' : 'bg-warm-terracotta'}`}></span>
                    <span className="text-muted-navy">
                      {lifestyleData.foodScene.vegFriendly ? 'Vegetarian Friendly' : 'Limited Vegetarian Options'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${lifestyleData.foodScene.streetFood ? 'bg-sage-green' : 'bg-warm-terracotta'}`}></span>
                    <span className="text-muted-navy">
                      {lifestyleData.foodScene.streetFood ? 'Great Street Food' : 'Limited Street Food'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${lifestyleData.foodScene.internationalCuisine ? 'bg-sage-green' : 'bg-warm-terracotta'}`}></span>
                    <span className="text-muted-navy">
                      {lifestyleData.foodScene.internationalCuisine ? 'International Cuisine Available' : 'Limited International Options'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-sunset-orange/5 rounded-lg p-4 border border-sunset-orange/20">
                <h4 className="font-semibold text-sunset-orange mb-3">Foodie Tips</h4>
                <ul className="space-y-1 text-muted-navy text-sm">
                  <li>• Try local breakfast spots for authentic flavors</li>
                  <li>• Street food is generally safe, but start slow</li>
                  <li>• Lunch thalis offer great value and variety</li>
                  <li>• Evening food markets are social dining experiences</li>
                  <li>• Download food delivery apps for convenience</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Nightlife */}
        {lifestyleData.nightlife && (
          <div>
            <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
              <Music className="mr-2 h-5 w-5" />
              Nightlife & Entertainment
            </h3>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${lifestyleData.nightlife.bars ? 'bg-sage-green' : 'bg-warm-terracotta'}`}></span>
                    <span className="text-muted-navy font-medium">
                      {lifestyleData.nightlife.bars ? 'Bars Available' : 'Limited Bars'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${lifestyleData.nightlife.clubs ? 'bg-sage-green' : 'bg-warm-terracotta'}`}></span>
                    <span className="text-muted-navy font-medium">
                      {lifestyleData.nightlife.clubs ? 'Clubs & Dancing' : 'Limited Club Scene'}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${lifestyleData.nightlife.lateNightEating ? 'bg-sage-green' : 'bg-warm-terracotta'}`}></span>
                    <span className="text-muted-navy font-medium">
                      {lifestyleData.nightlife.lateNightEating ? 'Late Night Food' : 'Limited Late Night Food'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-vintage-gold/10 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-vintage-gold" />
                  <span className="font-semibold text-vintage-gold">Alcohol Laws:</span>
                  <span className="text-muted-navy">{lifestyleData.nightlife.alcoholLaws}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fitness & Recreation */}
        {lifestyleData.fitness && (
          <div>
            <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
              <Dumbbell className="mr-2 h-5 w-5" />
              Fitness & Recreation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
                <h4 className="font-semibold text-sage-green mb-3">Facilities</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-navy">Gyms</span>
                    <span className="font-semibold text-travel-blue">{lifestyleData.fitness.gyms}+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-navy">Parks</span>
                    <span className="font-semibold text-travel-blue">{lifestyleData.fitness.parks}+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-navy">Yoga Studios</span>
                    <span className="font-semibold text-travel-blue">{lifestyleData.fitness.yogaStudios}+</span>
                  </div>
                </div>
              </div>
              <div className="bg-sunset-orange/5 rounded-lg p-4 border border-sunset-orange/20">
                <h4 className="font-semibold text-sunset-orange mb-3">Outdoor Activities</h4>
                <div className="flex flex-wrap gap-2">
                  {lifestyleData.fitness.outdoorActivities.map((activity, index) => (
                    <Badge key={index} className="bg-sunset-orange/10 text-sunset-orange">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Culture & Language */}
        {lifestyleData.culture && (
          <div>
            <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Culture & Language
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-travel-blue mb-3">Languages Spoken</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {lifestyleData.culture.languages.map((language, index) => (
                    <Badge key={index} className="bg-travel-blue/10 text-travel-blue">
                      {language}
                    </Badge>
                  ))}
                </div>
                
                <h4 className="font-semibold text-travel-blue mb-3">Local Festivals</h4>
                <div className="flex flex-wrap gap-2">
                  {lifestyleData.culture.festivals.map((festival, index) => (
                    <Badge key={index} className="bg-vintage-gold/10 text-vintage-gold">
                      {festival}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-travel-blue mb-3">Cultural Etiquette</h4>
                <ul className="space-y-2 text-muted-navy text-sm">
                  {lifestyleData.culture.customs.map((custom, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></span>
                      <span>{custom}</span>
                    </li>
                  ))}
                </ul>
                
                {lifestyleData.culture.artScene && (
                  <div className="mt-4 p-3 bg-sage-green/5 rounded-lg border border-sage-green/20">
                    <div className="flex items-center space-x-2">
                      <Music className="h-4 w-4 text-sage-green" />
                      <span className="font-semibold text-sage-green">Vibrant Art Scene</span>
                    </div>
                    <p className="text-muted-navy text-sm mt-1">
                      The city has a thriving arts and culture community with galleries, theaters, and cultural events.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Cannabis Laws */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <AlertCircle className="mr-2 h-5 w-5" />
            Legal Information
          </h3>
          <div className="bg-warm-terracotta/5 rounded-lg p-4 border border-warm-terracotta/20">
            <div className="flex items-center space-x-2 mb-2">
              <AlertCircle className="h-4 w-4 text-warm-terracotta" />
              <span className="font-semibold text-warm-terracotta">Cannabis Laws:</span>
            </div>
            <p className="text-muted-navy">{lifestyleData.cannabisLaws}</p>
          </div>
        </div>

        {/* Cultural Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Cultural Integration Tips
          </h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Learn basic greetings in the local language</li>
            <li>• Respect religious and cultural sites by dressing appropriately</li>
            <li>• Join local events and festivals to meet people</li>
            <li>• Try to understand local customs and social norms</li>
            <li>• Be patient and open-minded about cultural differences</li>
            <li>• Connect with expat communities for support and friendship</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
