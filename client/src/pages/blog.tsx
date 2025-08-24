import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, MapPin, Wifi, DollarSign } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Digital Nomad Life in Goa",
      excerpt: "Everything you need to know about living and working in India's most famous beach destination. From Anjuna to Arambol, we cover the best spots for nomads.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "City Guide",
      tags: ["Goa", "Beaches", "Coworking"],
      featured: true
    },
    {
      id: 2,
      title: "Bangalore vs Mumbai: Which Tech Hub is Right for You?",
      excerpt: "A detailed comparison of India's two biggest tech cities. Cost of living, networking opportunities, and quality of life - we break it all down.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Comparison",
      tags: ["Bangalore", "Mumbai", "Tech-Hub"]
    },
    {
      id: 3,
      title: "Budget Nomad's Guide to Northern India",
      excerpt: "How to explore Delhi, Rishikesh, and McLeod Ganj on a shoestring budget. Real costs, cheap eats, and affordable accommodation options.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Budget Travel",
      tags: ["Budget", "Delhi", "Rishikesh", "McLeod Ganj"]
    },
    {
      id: 4,
      title: "Remote Work Setup: Essential Gear for India",
      excerpt: "The ultimate packing list for digital nomads in India. From power adapters to portable WiFi, here's what you really need.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Remote Work",
      tags: ["Remote Work", "Gear", "Tips"]
    },
    {
      id: 5,
      title: "Hidden Gems: Offbeat Destinations for Nomads",
      excerpt: "Discover lesser-known Indian cities perfect for digital nomads. From Ziro Valley to Hampi, explore places off the beaten path.",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "Hidden Gems",
      tags: ["Hidden Gems", "Ziro", "Hampi", "Offbeat"]
    },
    {
      id: 6,
      title: "Internet Connectivity Across India: A Reality Check",
      excerpt: "Real internet speed tests from 20+ Indian cities. Which places offer reliable connectivity for remote work and which ones to avoid.",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "Connectivity",
      tags: ["Internet", "Connectivity", "Remote Work"]
    }
  ];

  const categories = ["All", "City Guide", "Comparison", "Budget Travel", "Remote Work", "Hidden Gems", "Connectivity"];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Blog - Roam Insider | Digital Nomad Insights & India Travel Guides</title>
      <meta 
        name="description" 
        content="Read the latest digital nomad insights, city guides, and remote work tips for India. Expert advice on living and working across incredible Indian destinations." 
      />
      <meta name="keywords" content="digital nomad blog india, remote work india, india travel guides, nomad city guides, working remotely india" />
      <meta property="og:title" content="Blog - Roam Insider | Digital Nomad Insights" />
      <meta property="og:description" content="Expert insights and guides for digital nomads exploring India. City guides, remote work tips, and authentic experiences." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://roaminsider.com/blog" />
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-travel-blue via-travel-blue/90 to-muted-navy py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nomad <span className="text-vintage-gold">Insights</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Expert guides, real experiences, and practical advice for digital nomads exploring incredible India.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant="outline" 
                  className="px-4 py-2 cursor-pointer hover:bg-travel-blue hover:text-white transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-travel-blue mb-8">Featured Article</h2>
            <Card className="overflow-hidden shadow-xl border-none">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Goa beaches for digital nomads"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-vintage-gold text-white">Featured</Badge>
                    <Badge variant="outline">City Guide</Badge>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-travel-blue mb-4">
                    The Complete Guide to Digital Nomad Life in Goa
                  </h3>
                  <p className="text-muted-navy text-lg leading-relaxed mb-6">
                    Everything you need to know about living and working in India's most famous beach destination. 
                    From Anjuna to Arambol, we cover the best spots for nomads.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-navy mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Jan 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>8 min read</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center text-travel-blue font-semibold hover:text-vintage-gold transition-colors">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-travel-blue mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden shadow-lg border-none hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-travel-blue to-vintage-gold relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {post.category === "Comparison" && <MapPin className="h-12 w-12 text-white" />}
                      {post.category === "Budget Travel" && <DollarSign className="h-12 w-12 text-white" />}
                      {post.category === "Remote Work" && <Wifi className="h-12 w-12 text-white" />}
                      {post.category === "Hidden Gems" && <MapPin className="h-12 w-12 text-white" />}
                      {post.category === "Connectivity" && <Wifi className="h-12 w-12 text-white" />}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-travel-blue line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-navy text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-navy mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <button className="text-travel-blue font-semibold text-sm hover:text-vintage-gold transition-colors">
                      Read More
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-travel-blue to-muted-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest nomad insights, city guides, and exclusive tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-vintage-gold"
              />
              <button className="px-6 py-3 bg-vintage-gold text-white font-semibold rounded-lg hover:bg-vintage-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}