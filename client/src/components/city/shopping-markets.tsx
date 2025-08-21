import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, MapPin, Clock, Star, ExternalLink, CreditCard, Truck } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface ShoppingMarketsProps {
  city: CityWithDetails;
}

export default function ShoppingMarkets({ city }: ShoppingMarketsProps) {
  const traditionalMarkets = [
    {
      name: "Main Bazaar Market",
      type: "Traditional Market",
      specialties: ["Textiles", "Spices", "Handicrafts", "Jewelry"],
      hours: "6:00 AM - 9:00 PM",
      bestTime: "Early morning or evening",
      priceRange: "₹50-5000 ($0.60-60)",
      bargaining: "Expected",
      tips: "Start negotiating at 50% of quoted price",
      location: "City center, near main temple",
      highlights: ["Authentic local products", "Best prices for bulk buying", "Cultural experience"]
    },
    {
      name: "Spice Market",
      type: "Specialty Market",
      specialties: ["Whole spices", "Tea", "Dry fruits", "Ayurvedic herbs"],
      hours: "7:00 AM - 8:00 PM",
      bestTime: "Morning for freshest selection",
      priceRange: "₹20-2000 ($0.24-24)",
      bargaining: "Moderate",
      tips: "Ask for small samples to taste quality",
      location: "Old city area",
      highlights: ["Organic options available", "Expert spice mixing", "Export quality products"]
    },
    {
      name: "Handicrafts Emporium",
      type: "Artisan Market",
      specialties: ["Handwoven textiles", "Pottery", "Wood carvings", "Paintings"],
      hours: "10:00 AM - 8:00 PM",
      bestTime: "Afternoon to interact with artisans",
      priceRange: "₹100-15000 ($1.20-180)",
      bargaining: "Limited",
      tips: "Look for authenticity certificates",
      location: "Cultural district",
      highlights: ["Direct from artisans", "Unique pieces", "Cultural authenticity"]
    }
  ];

  const modernShopping = [
    {
      name: "City Center Mall",
      type: "Shopping Mall",
      brands: ["International", "National", "Local"],
      floors: 4,
      facilities: ["Food court", "Cinema", "Gaming zone", "Parking"],
      hours: "10:00 AM - 10:00 PM",
      priceRange: "₹500-20000 ($6-240)",
      paymentMethods: ["Card", "UPI", "Cash", "Digital wallets"],
      highlights: ["AC comfort", "Fixed prices", "Brand warranties"]
    },
    {
      name: "Electronics Market",
      type: "Tech Hub",
      specialties: ["Smartphones", "Laptops", "Accessories", "Repairs"],
      hours: "10:00 AM - 9:00 PM",
      priceRange: "₹200-80000 ($2.40-960)",
      bargaining: "Moderate on accessories",
      tips: "Compare prices across 3-4 shops",
      highlights: ["Latest tech", "Service centers nearby", "Competitive pricing"]
    }
  ];

  // National and State-specific Online Shopping Portals
  const onlineShoppingPortals = [
    {
      category: "National E-commerce Platforms",
      platforms: [
        { name: "Amazon India", website: "amazon.in", description: "Global marketplace with fastest delivery in metros", offers: "Prime benefits, same-day delivery available" },
        { name: "Flipkart", website: "flipkart.com", description: "India's leading e-commerce with Big Billion Days sales", offers: "No-cost EMI, exchange offers" },
        { name: "Myntra", website: "myntra.com", description: "Fashion and lifestyle destination with curated brands", offers: "Free shipping above ₹799, easy returns" },
        { name: "Nykaa", website: "nykaa.com", description: "Beauty and wellness platform with authentic products", offers: "Free samples, beauty consultations" },
        { name: "BigBasket", website: "bigbasket.com", description: "Online grocery delivery with fresh produce", offers: "Subscription plans, early morning delivery" },
        { name: "Swiggy Instamart", website: "swiggy.com/instamart", description: "Quick grocery and essentials delivery in 15-30 mins", offers: "Super membership benefits" },
      ]
    },
    {
      category: "Regional & City-Specific Platforms",
      platforms: [
        { name: "Grofers (Blinkit)", website: "blinkit.com", description: "Ultra-fast delivery in 10-15 minutes for daily essentials", offers: "No minimum order, lightning fast delivery" },
        { name: "Dunzo", website: "dunzo.com", description: "Hyperlocal delivery platform for anything from anywhere", offers: "Pick-up and drop services, medicine delivery" },
        { name: "Zepto", website: "zepto.com", description: "10-minute grocery delivery in select cities", offers: "Fresh produce, household essentials" },
      ]
    }
  ];

  const shoppingCategories = [
    {
      category: "Clothing & Textiles",
      items: [
        { item: "Cotton kurtas", priceRange: "₹300-1500 ($3.60-18)", bestPlace: "Local boutiques" },
        { item: "Silk sarees", priceRange: "₹2000-25000 ($24-300)", bestPlace: "Traditional markets" },
        { item: "Branded jeans", priceRange: "₹1500-5000 ($18-60)", bestPlace: "Malls" },
        { item: "Handloom fabrics", priceRange: "₹200-2000 per meter ($2.40-24)", bestPlace: "Weaver cooperatives" }
      ]
    },
    {
      category: "Spices & Food Items",
      items: [
        { item: "Turmeric powder (1kg)", priceRange: "₹150-300 ($1.80-3.60)", bestPlace: "Spice markets" },
        { item: "Premium tea (250g)", priceRange: "₹200-800 ($2.40-9.60)", bestPlace: "Tea estates" },
        { item: "Organic honey (500g)", priceRange: "₹250-600 ($3-7.20)", bestPlace: "Organic stores" },
        { item: "Dry fruits mix (1kg)", priceRange: "₹800-2000 ($9.60-24)", bestPlace: "Wholesale markets" }
      ]
    },
    {
      category: "Handicrafts & Souvenirs",
      items: [
        { item: "Wooden sculptures", priceRange: "₹500-5000 ($6-60)", bestPlace: "Artisan workshops" },
        { item: "Brass items", priceRange: "₹200-2000 ($2.40-24)", bestPlace: "Metal craft centers" },
        { item: "Paintings", priceRange: "₹800-8000 ($9.60-96)", bestPlace: "Art galleries" },
        { item: "Pottery items", priceRange: "₹100-1500 ($1.20-18)", bestPlace: "Potter villages" }
      ]
    }
  ];

  const shoppingSeason = [
    { season: "Festival Season (Oct-Nov)", discounts: "20-50%", bestFor: "Clothing, jewelry, home decor" },
    { season: "Wedding Season (Nov-Feb)", discounts: "10-30%", bestFor: "Silk, gold, gift items" },
    { season: "Summer Sale (Apr-Jun)", discounts: "30-60%", bestFor: "Electronics, branded clothing" },
    { season: "Monsoon (Jul-Sep)", discounts: "15-40%", bestFor: "Indoor items, books, crafts" }
  ];

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <ShoppingBag className="mr-3 h-8 w-8 text-vintage-gold" />
          Shopping & Markets
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Discover the best shopping experiences in {city.name}, from vibrant traditional markets to modern malls and specialty stores.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Traditional Markets */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            🏪 Traditional Markets & Bazaars
          </h3>
          <div className="grid gap-6">
            {traditionalMarkets.map((market, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-xl text-travel-blue">{market.name}</h4>
                    <div className="flex items-center text-muted-navy text-sm mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {market.location}
                    </div>
                  </div>
                  <Badge className="bg-sage-green/10 text-sage-green">{market.type}</Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-travel-blue mb-2">Specialties</h5>
                    <div className="flex flex-wrap gap-1">
                      {market.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-vintage-gold/10 text-vintage-gold">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-3 space-y-1 text-sm text-muted-navy">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {market.hours}
                      </div>
                      <div><strong>Best time:</strong> {market.bestTime}</div>
                      <div><strong>Price range:</strong> {market.priceRange}</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-warm-terracotta mb-2">Shopping Tips</h5>
                    <ul className="space-y-1 text-sm text-muted-navy">
                      <li>• <strong>Bargaining:</strong> {market.bargaining}</li>
                      <li>• {market.tips}</li>
                      {market.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Shopping */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            🏬 Modern Shopping Centers
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {modernShopping.map((venue, index) => (
              <div key={index} className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-travel-blue">{venue.name}</h4>
                  <Badge className="bg-travel-blue/10 text-travel-blue">{venue.type}</Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-navy">
                  <div><strong>Hours:</strong> {venue.hours}</div>
                  <div><strong>Price Range:</strong> {venue.priceRange}</div>
                  {venue.facilities && (
                    <div><strong>Facilities:</strong> {venue.facilities.join(", ")}</div>
                  )}
                  {venue.paymentMethods && (
                    <div><strong>Payment:</strong> {venue.paymentMethods.join(", ")}</div>
                  )}
                  {venue.bargaining && (
                    <div><strong>Bargaining:</strong> {venue.bargaining}</div>
                  )}
                </div>
                
                <div className="mt-3">
                  <h5 className="font-semibold text-sage-green text-sm mb-1">Highlights</h5>
                  <ul className="space-y-1 text-xs text-muted-navy">
                    {venue.highlights.map((highlight, i) => (
                      <li key={i}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Categories & Pricing */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            💰 Price Guide by Category
          </h3>
          <div className="space-y-6">
            {shoppingCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-travel-blue mb-3">{category.category}</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <div>
                        <div className="font-medium text-muted-navy">{item.item}</div>
                        <div className="text-xs text-gray-500">{item.bestPlace}</div>
                      </div>
                      <div className="font-semibold text-vintage-gold text-sm">{item.priceRange}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Shopping */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Star className="mr-2 h-5 w-5" />
            🗓️ Seasonal Shopping Guide
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {shoppingSeason.map((season, index) => (
              <div key={index} className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
                <h4 className="font-semibold text-vintage-gold mb-2">{season.season}</h4>
                <div className="space-y-1 text-sm text-muted-navy">
                  <div><strong>Discounts:</strong> {season.discounts}</div>
                  <div><strong>Best for:</strong> {season.bestFor}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Online Shopping Platforms */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Truck className="mr-2 h-5 w-5" />
            🛒 Online Shopping Platforms & Delivery
          </h3>
          {onlineShoppingPortals.map((category, catIndex) => (
            <div key={catIndex} className="mb-6">
              <h4 className="font-semibold text-vintage-gold mb-3 text-lg">{category.category}</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.platforms.map((platform, platIndex) => (
                  <div key={platIndex} className="bg-white rounded-lg p-4 border border-travel-blue/20 hover:shadow-md transition-all duration-200 hover:border-vintage-gold/50">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-semibold text-travel-blue text-sm">{platform.name}</h5>
                      <a 
                        href={`https://${platform.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-vintage-gold hover:text-vintage-gold/80 text-xs flex items-center"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visit
                      </a>
                    </div>
                    <p className="text-xs text-muted-navy mb-2 line-clamp-2">{platform.description}</p>
                    <div className="text-xs text-sage-green bg-sage-green/10 rounded-full px-2 py-1">
                      💡 {platform.offers}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Shopping Etiquette & Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <Star className="mr-2 h-4 w-4" />
            Shopping Etiquette & Money-Saving Tips
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-navy">
            <ul className="space-y-1">
              <li>• Always negotiate in traditional markets - it's expected</li>
              <li>• Check for authenticity certificates for expensive items</li>
              <li>• Carry small denomination notes for easier transactions</li>
              <li>• Compare prices across 3-4 shops before buying</li>
              <li>• Shop during weekdays for better attention and deals</li>
            </ul>
            <ul className="space-y-1">
              <li>• Ask for GST bills for warranty and returns</li>
              <li>• Use digital payments for cashback and offers</li>
              <li>• Buy in bulk for better prices on spices and grains</li>
              <li>• Follow local shopping apps for exclusive discounts</li>
              <li>• Avoid shopping during major festivals due to price surge</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}