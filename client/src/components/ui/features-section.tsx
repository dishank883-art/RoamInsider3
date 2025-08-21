import { TrendingUp, Users, Shield, DollarSign, Wifi, Heart } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Data",
    description: "Live updates on cost of living, internet speeds, weather, and local events to help you make informed decisions.",
    color: "travel-blue"
  },
  {
    icon: Users,
    title: "Local Insights",
    description: "Insider tips from local nomads and residents who know the hidden gems and best practices for each city.",
    color: "vintage-gold"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety information including women traveler guides, healthcare facilities, and emergency contacts.",
    color: "sage-green"
  },
  {
    icon: DollarSign,
    title: "Cost Transparency",
    description: "Detailed breakdown of living costs in both INR and USD, updated regularly with real market data.",
    color: "warm-terracotta"
  },
  {
    icon: Wifi,
    title: "Digital Infrastructure",
    description: "Comprehensive coverage of coworking spaces, internet reliability, and digital nomad-friendly cafés.",
    color: "sunset-orange"
  },
  {
    icon: Heart,
    title: "Cultural Guide",
    description: "Deep dive into local culture, customs, festivals, and etiquette to help you integrate seamlessly.",
    color: "travel-blue"
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-gradient-to-br from-travel-blue/5 to-vintage-gold/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-travel-blue mb-4">
            Why Choose <span className="text-vintage-gold">Roam Insider?</span>
          </h2>
          <p className="text-xl text-muted-navy max-w-3xl mx-auto">
            We go beyond basic information to provide real insights that matter to digital nomads
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${feature.color} group-hover:text-white transition-all duration-300`}>
                <feature.icon className={`h-8 w-8 text-${feature.color} group-hover:text-white`} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-travel-blue mb-4">{feature.title}</h3>
              <p className="text-muted-navy leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
