import { Button } from "@/components/ui/button";

export default function CommunitySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-travel-blue to-muted-navy rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-vintage-gold/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-vintage-gold/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                Join Our Growing <span className="text-vintage-gold">Community</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Connect with thousands of digital nomads, share experiences, and get real-time advice from people living your dream lifestyle.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-vintage-gold mb-2">10K+</div>
                  <div className="text-blue-100">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-vintage-gold mb-2">50+</div>
                  <div className="text-blue-100">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-vintage-gold mb-2">500+</div>
                  <div className="text-blue-100">Monthly Meetups</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-vintage-gold mb-2">24/7</div>
                  <div className="text-blue-100">Community Support</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="px-8 py-4 bg-vintage-gold text-white rounded-xl font-semibold text-lg hover:bg-vintage-gold/90 transition-all duration-200">
                  Join Community
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-travel-blue transition-all duration-200"
                >
                  Find Meetups
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Digital nomads working together in coworking space" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              
              {/* Floating testimonial */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-travel-blue">Rahul Sharma</p>
                    <p className="text-sm text-muted-navy">Mumbai → Bangalore</p>
                  </div>
                </div>
                <p className="text-muted-navy text-sm leading-relaxed">
                  "Roam Insider helped me find the perfect coworking space and nomad community in Bangalore. Best decision ever!"
                </p>
                <div className="flex text-vintage-gold mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
