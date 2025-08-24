import { Button } from "@/components/ui/button";
import { Search, MapPin, Users, Star } from "lucide-react";

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
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Explore India's Best 
              <span className="text-vintage-gold font-script text-3xl sm:text-4xl md:text-6xl lg:text-7xl block mt-2">
                Cities
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              The ultimate guide for digital nomads and travelers exploring incredible Indian destinations. 
              Real insights, local secrets, and everything you need to roam like an insider.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button 
                size="lg" 
                className="px-6 sm:px-8 py-4 sm:py-5 bg-vintage-gold text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-vintage-gold/90 transition-all duration-200 shadow-lg touch-manipulation min-h-[52px]"
                onClick={() => {
                  const citiesSection = document.querySelector('[data-cities-section]') || 
                                       document.querySelector('section');
                  if (citiesSection) {
                    citiesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                data-testid="explore-cities-button"
              >
                <Search className="mr-2 h-5 w-5" />
                Explore Cities
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-blue-100 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">20+ Cities</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-vintage-gold" />
                <span className="font-semibold">200+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-vintage-gold fill-current" />
                <span className="font-semibold">4.7 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <a href="https://www.instagram.com/roaminsider?igsh=dDN5bHUwNXdxYjMy&utm_source=qr" 
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-1 text-blue-100 hover:text-vintage-gold transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-semibold hidden sm:inline">@roaminsider</span>
                  <span className="font-semibold sm:hidden">Instagram</span>
                </a>
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
