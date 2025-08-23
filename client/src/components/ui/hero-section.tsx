import { Button } from "@/components/ui/button";
import { Play, Search, MapPin, Users, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-travel-blue via-travel-blue/90 to-muted-navy overflow-hidden">
      {/* Background with vintage texture */}
      <div className="absolute inset-0 vintage-texture opacity-10"></div>
      
      {/* Floating travel elements */}
      <div className="absolute top-20 left-10 text-vintage-gold/20 transform rotate-12">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-16 text-vintage-gold/20 transform -rotate-12">
        <MapPin className="w-12 h-12" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover India's Hidden 
              <span className="text-vintage-gold font-script text-4xl sm:text-6xl lg:text-7xl block mt-2">
                Gems
              </span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              The ultimate guide for digital nomads exploring incredible Indian cities. 
              Real insights, local secrets, and everything you need to roam like an insider.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button 
                size="lg" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-vintage-gold text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-vintage-gold/90 transition-all duration-200 shadow-lg touch-manipulation min-h-[48px]"
              >
                <Search className="mr-2 h-5 w-5" />
                Explore Cities
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-travel-blue transition-all duration-200 touch-manipulation min-h-[48px]"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Guide
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-blue-100 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">50+ Cities</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">200+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-vintage-gold fill-current" />
                <span className="font-semibold">4.7 Rating</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Mumbai skyline with modern skyscrapers" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            {/* Floating info cards - hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 -left-4 bg-white rounded-xl p-3 sm:p-4 shadow-xl transform rotate-3">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sage-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                </svg>
                <div>
                  <p className="font-semibold text-xs sm:text-sm">Internet Speed</p>
                  <p className="text-vintage-gold font-bold text-sm">45 Mbps</p>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-4 -right-4 bg-white rounded-xl p-3 sm:p-4 shadow-xl transform -rotate-3">
              <div className="flex items-center space-x-2">
                <span className="text-warm-terracotta font-bold text-base sm:text-lg">₹</span>
                <div>
                  <p className="font-semibold text-xs sm:text-sm">Cost/Month</p>
                  <p className="text-vintage-gold font-bold text-sm">₹35K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
