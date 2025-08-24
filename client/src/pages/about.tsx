import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Wifi, Clock, Star, Heart } from "lucide-react";

export default function About() {
  return (
    <>
      {/* SEO Meta Tags */}
      <title>About Us - Roam Insider | Digital Nomad Platform for India</title>
      <meta 
        name="description" 
        content="Learn about Roam Insider - India's premier digital nomad platform. Discover our mission to help remote workers explore incredible Indian cities with authentic insights and community support." 
      />
      <meta name="keywords" content="about roam insider, digital nomad platform india, remote work india, nomad community, indian cities for nomads" />
      <meta property="og:title" content="About Us - Roam Insider | Digital Nomad Platform" />
      <meta property="og:description" content="Discover Roam Insider's mission to connect digital nomads with incredible Indian destinations through authentic insights and community support." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://roaminsider.com/about" />
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-travel-blue via-travel-blue/90 to-muted-navy py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Roam <span className="text-vintage-gold">Insider</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              India's premier platform connecting digital nomads with incredible destinations, 
              authentic insights, and a thriving community of remote workers.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-travel-blue mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-navy leading-relaxed mb-6">
                  We believe India offers some of the world's most incredible destinations for digital nomads. 
                  From bustling tech hubs to serene mountain retreats, every city has its own unique character and opportunities.
                </p>
                <p className="text-lg text-muted-navy leading-relaxed mb-6">
                  Our mission is to bridge the gap between nomads and authentic local experiences, providing 
                  real insights from people who've lived and worked in these incredible places.
                </p>
                <div className="flex items-center space-x-2 text-vintage-gold">
                  <Heart className="h-5 w-5 fill-current" />
                  <span className="font-semibold">Made with ❤️ for digital nomads</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-vintage-gold rounded-full mb-3 mx-auto">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-travel-blue mb-2">20+ Cities</h3>
                    <p className="text-sm text-muted-navy">Carefully curated destinations</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-vintage-gold rounded-full mb-3 mx-auto">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-travel-blue mb-2">200+ Members</h3>
                    <p className="text-sm text-muted-navy">Active nomad community</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-vintage-gold rounded-full mb-3 mx-auto">
                      <Wifi className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-travel-blue mb-2">Real Data</h3>
                    <p className="text-sm text-muted-navy">Authentic internet speeds</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-vintage-gold rounded-full mb-3 mx-auto">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-travel-blue mb-2">Updated</h3>
                    <p className="text-sm text-muted-navy">Fresh insights monthly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-travel-blue mb-4">
                What We Stand For
              </h2>
              <p className="text-lg text-muted-navy max-w-3xl mx-auto">
                Our values guide everything we do, from the cities we feature to the community we build.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-travel-blue rounded-full mb-4 mx-auto">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-travel-blue">Authenticity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-navy text-center">
                    Every piece of information comes from real nomads who've lived and worked in these cities. 
                    No corporate sponsorships, just honest experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-vintage-gold rounded-full mb-4 mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-travel-blue">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-navy text-center">
                    We believe in the power of shared experiences. Our Discord community connects nomads 
                    for real-time advice, meetups, and lasting friendships.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-warm-terracotta rounded-full mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-travel-blue">Inclusivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-navy text-center">
                    Whether you're a solo traveler, budget nomad, or luxury seeker, we provide insights 
                    for every lifestyle and budget across incredible India.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-travel-blue mb-6">
              Built by Nomads, for Nomads
            </h2>
            <p className="text-lg text-muted-navy leading-relaxed mb-8">
              Our team consists of experienced digital nomads who've explored every corner of India. 
              We understand the challenges and joys of remote work because we live it every day.
            </p>
            <p className="text-lg text-muted-navy leading-relaxed">
              From finding reliable WiFi in mountain villages to discovering the best coworking spaces in tech hubs, 
              we've been there, tested it, and are excited to share our insights with you.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-vintage-gold to-warm-terracotta">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with 200+ digital nomads exploring India. Share experiences, get real-time advice, 
              and discover your next incredible destination.
            </p>
            <a 
              href="https://discord.gg/Y39GGpQtMm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-vintage-gold font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Join Discord Community
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}