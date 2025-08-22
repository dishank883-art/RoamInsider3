import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MessageSquare, ThumbsUp, Calendar, User, MapPin, ExternalLink } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface ReviewsProps {
  city: CityWithDetails;
}

interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  stayDuration: string;
  workType: string;
  pros: string[];
  cons: string[];
  helpful: number;
  verified: boolean;
}

export default function Reviews({ city }: ReviewsProps) {
  const [showAddReview, setShowAddReview] = useState(false);
  const [sortBy, setSortBy] = useState("recent");
  const [filterRating, setFilterRating] = useState("all");

  // Sample reviews for demonstration (in production, these would come from API)
  const reviews: Review[] = [
    {
      id: "1",
      author: "Sarah M.",
      rating: 4,
      title: "Great for digital nomads but can be expensive",
      content: `Spent 3 months in ${city.name} and overall had a fantastic experience. The coworking spaces are excellent and the internet connectivity is reliable. The local food scene is amazing and there's always something to do. However, accommodation costs can be quite high during peak season.`,
      date: "2024-01-15",
      stayDuration: "3 months",
      workType: "Software Developer",
      pros: ["Excellent WiFi", "Great food scene", "Active nomad community", "Good coworking spaces"],
      cons: ["High accommodation costs", "Traffic can be bad", "Monsoon season challenges"],
      helpful: 12,
      verified: true
    },
    {
      id: "2", 
      author: "Marcus K.",
      rating: 5,
      title: "Perfect work-life balance destination",
      content: `${city.name} exceeded all my expectations. The combination of affordable living, reliable internet, and incredible culture made this my favorite nomad destination so far. The local community is welcoming and there are tons of networking opportunities.`,
      date: "2024-01-08",
      stayDuration: "2 months",
      workType: "Marketing Consultant",
      pros: ["Affordable living", "Amazing culture", "Friendly locals", "Great weather"],
      cons: ["Language barrier sometimes", "Limited nightlife"],
      helpful: 8,
      verified: true
    },
    {
      id: "3",
      author: "Elena R.",
      rating: 3,
      title: "Good for short stays, challenging for longer",
      content: `${city.name} is beautiful and has a lot to offer, but I found it challenging for extended work periods. While the scenery is breathtaking and perfect for inspiration, the internet can be unreliable in some areas and finding quiet workspaces was difficult.`,
      date: "2024-01-02",
      stayDuration: "1 month",
      workType: "Content Creator", 
      pros: ["Beautiful scenery", "Peaceful environment", "Affordable food", "Adventure activities"],
      cons: ["Inconsistent internet", "Limited coworking options", "Power outages"],
      helpful: 5,
      verified: false
    }
  ];

  const filteredReviews = reviews
    .filter(review => filterRating === "all" || review.rating.toString() === filterRating)
    .sort((a, b) => {
      if (sortBy === "recent") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "helpful") return b.helpful - a.helpful;
      return 0;
    });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  const renderStars = (rating: number, className = "h-4 w-4") => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`${className} ${i < rating ? "fill-vintage-gold text-vintage-gold" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <MessageSquare className="mr-3 h-8 w-8 text-vintage-gold" />
          Reviews & Experiences
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Honest reviews from digital nomads and travelers who've lived and worked in {city.name}.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Rating Summary */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-travel-blue mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(averageRating), "h-6 w-6")}
            </div>
            <p className="text-muted-navy">Based on {reviews.length} reviews</p>
          </div>
          
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center space-x-3">
                <span className="text-sm font-medium w-8">{rating}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-vintage-gold h-2 rounded-full" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-muted-navy w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Button & Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t">
          <Button 
            onClick={() => setShowAddReview(!showAddReview)}
            className="bg-travel-blue hover:bg-travel-blue/90 text-white"
            data-testid="add-review-button"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Write a Review
          </Button>
          
          <div className="flex space-x-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Recent</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="helpful">Helpful</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filterRating} onValueChange={setFilterRating}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="All ratings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All ratings</SelectItem>
                <SelectItem value="5">5 stars</SelectItem>
                <SelectItem value="4">4 stars</SelectItem>
                <SelectItem value="3">3 stars</SelectItem>
                <SelectItem value="2">2 stars</SelectItem>
                <SelectItem value="1">1 star</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Add Review Form */}
        {showAddReview && (
          <div className="bg-gray-50 rounded-xl p-6 border">
            <h3 className="font-semibold text-travel-blue mb-4">Share Your Experience</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your name" data-testid="reviewer-name" />
                <Input placeholder="Your profession (e.g., Software Developer)" data-testid="reviewer-profession" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger data-testid="stay-duration">
                    <SelectValue placeholder="How long did you stay?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-week">1 week</SelectItem>
                    <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                    <SelectItem value="1-2-months">1-2 months</SelectItem>
                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                    <SelectItem value="6plus-months">6+ months</SelectItem>
                  </SelectContent>
                </Select>
                
                <div>
                  <label className="block text-sm font-medium text-muted-navy mb-2">Overall Rating</label>
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 cursor-pointer text-gray-300 hover:text-vintage-gold transition-colors"
                        data-testid={`rating-star-${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <Input placeholder="Review title" data-testid="review-title" />
              <Textarea 
                placeholder="Share your detailed experience living and working in this city..." 
                className="min-h-[120px]"
                data-testid="review-content"
              />
              
              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setShowAddReview(false)}>
                  Cancel
                </Button>
                <Button className="bg-vintage-gold text-white hover:bg-vintage-gold/90">
                  Submit Review
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-travel-blue/10 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-travel-blue" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-travel-blue">{review.author}</span>
                      {review.verified && (
                        <Badge className="bg-sage-green/10 text-sage-green text-xs">Verified</Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-navy">
                      <span>{review.workType}</span>
                      <span>•</span>
                      <span>{review.stayDuration}</span>
                      <span>•</span>
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <h4 className="font-semibold text-travel-blue mb-2">{review.title}</h4>
              <p className="text-muted-navy mb-4">{review.content}</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-medium text-sage-green mb-1">Pros:</h5>
                  <ul className="text-sm text-muted-navy space-y-1">
                    {review.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-600 mb-1">Cons:</h5>
                  <ul className="text-sm text-muted-navy space-y-1">
                    {review.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" className="text-muted-navy hover:text-travel-blue">
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  Helpful ({review.helpful})
                </Button>
                <div className="text-xs text-muted-navy">
                  <Calendar className="inline h-3 w-3 mr-1" />
                  {new Date(review.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Community CTA */}
        <div className="bg-gradient-to-r from-travel-blue/10 to-vintage-gold/10 rounded-xl p-6 border-2 border-travel-blue/20 text-center">
          <h3 className="font-semibold text-travel-blue mb-3">Want More Insights?</h3>
          <p className="text-muted-navy mb-4">
            Join our Discord community to get real-time advice from nomads currently in {city.name}
          </p>
          <Button 
            asChild
            className="bg-travel-blue hover:bg-travel-blue/90 text-white"
          >
            <a 
              href="https://discord.gg/Y39GGpQtMm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              Join Community
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}