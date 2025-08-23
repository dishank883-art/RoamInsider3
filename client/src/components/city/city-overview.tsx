import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Clock } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

// City-specific insider tips function
const getCitySpecificInsiderTips = (cityName: string): string[] => {
  const cityLower = cityName.toLowerCase();
  
  if (cityLower === "ziro") {
    return [
      "Stay in traditional Apatani bamboo houses for authentic cultural immersion",
      "Visit during Ziro Music Festival (September) but book accommodation 6 months ahead",
      "Learn basic Apatani phrases - locals deeply appreciate the effort",
      "Try traditional rice beer 'Apong' offered by villagers - it's a cultural gesture",
      "Hire local tribal guides for trekking - they know secret viewpoints and stories"
    ];
  }
  
  if (cityLower === "mumbai") {
    return [
      "Avoid peak hours (8-11 AM, 6-9 PM) for local trains - they're extremely crowded",
      "Download m-Indicator app for accurate train timings and platform info",
      "Eat at Irani cafes for authentic Mumbai experience - try Britannia or Kyani & Co",
      "Book coworking spaces in Andheri/BKC - better connectivity than South Mumbai",
      "Use BEST buses instead of autos in South Mumbai - cheaper and more reliable"
    ];
  }
  
  if (cityLower === "bangalore") {
    return [
      "Avoid Silk Board junction during rush hours - take alternate routes via Ring Road",
      "Work from cafes in Koramangala 5th Block - excellent WiFi and nomad community",
      "Learn basic Kannada greetings - locals are very welcoming when you make effort",
      "Use Namma Metro for Whitefield-City Center commute - faster than road during peak hours",
      "Join weekend cycling groups at Cubbon Park - great networking opportunity with locals"
    ];
  }
  
  if (cityLower === "goa") {
    return [
      "Rent a scooter instead of taxi for exploring - much cheaper and convenient",
      "Work from beachside cafes in Arambol/Ashwem - less touristy than Anjuna",
      "Stock up groceries on weekdays - Sunday markets are closed due to local laws",
      "Learn basic Konkani phrases for better prices at local markets",
      "Monsoon season (June-Sept) - many places close, plan accordingly"
    ];
  }
  
  if (cityLower === "rishikesh") {
    return [
      "Book river-view accommodations in advance during peak season (Oct-Mar)",
      "Join sunrise yoga sessions at Parmarth Niketan - authentic spiritual experience",
      "Use shared auto-rickshaws between Ram Jhula and Laxman Jhula - fixed rates",
      "Try river rafting with local operators instead of expensive resort packages",
      "Respect spiritual atmosphere - avoid loud music and parties in ashram areas"
    ];
  }
  
  if (cityLower === "udaipur") {
    return [
      "Stay in heritage properties in Old City for authentic royal experience",
      "Book Lake Palace restaurant a day in advance - sunset views are spectacular",
      "Use local buses instead of autos for longer distances - much cheaper",
      "Shop at Hathi Pol and Bada Bazaar before 11 AM - less crowded and better prices",
      "Learn basic Rajasthani greetings - locals love sharing stories about royal history"
    ];
  }
  
  if (cityLower === "kolkata") {
    return [
      "Experience 'adda' culture at Coffee House on College Street - bring a book",
      "Use metro for long distances - very cheap and connects major areas",
      "Try local sweets from century-old shops like KC Das and Balaram Mullick",
      "Attend evening cultural programs at Rabindra Sadan - world-class performances",
      "Learn basic Bengali phrases - extremely helpful for negotiating prices and connecting with locals"
    ];
  }
  
  if (cityLower === "pune") {
    return [
      "Work from coworking spaces in Koregaon Park - vibrant startup ecosystem",
      "Use PMPML buses for daily commute - extensive network and very affordable",
      "Join weekend treks organized by local groups - Pune has amazing nearby hills",
      "Eat at local 'misal' joints in Shivajinagar for authentic Maharashtrian experience",
      "Avoid East Pune during IT rush hours - extremely congested traffic"
    ];
  }
  
  if (cityLower === "new delhi" || cityLower === "delhi") {
    return [
      "Download Delhi Metro app and buy smart card - saves time and money",
      "Avoid Chandni Chowk area on weekends - extremely crowded with tourists",
      "Use 'Odd-Even' rule awareness - check dates to avoid car restrictions",
      "Shop at Sarojini Nagar for budget fashion - best bargains in early morning",
      "Air quality is poor Oct-Feb - carry pollution masks and use air purifiers"
    ];
  }
  
  if (cityLower === "pondicherry") {
    return [
      "Rent a bicycle in French Quarter - narrow streets are perfect for cycling",
      "Book Auroville guest houses in advance - unique spiritual community experience",
      "Try French bakeries on Rue de la Marine for authentic pastries and coffee",
      "Use local buses to reach nearby villages - very cheap and scenic routes",
      "Learn basic French phrases - many locals speak French and appreciate the effort"
    ];
  }
  
  if (cityLower === "kochi") {
    return [
      "Use water metro for commuting - unique and scenic way to travel in Kerala",
      "Work from cafes in Fort Kochi - colonial atmosphere with modern amenities",
      "Try authentic Kerala meals at local 'meals ready' restaurants for lunch",
      "Book houseboat stays in advance during winter season (Dec-Feb)",
      "Learn basic Malayalam phrases - locals are very helpful when you show cultural interest"
    ];
  }
  
  if (cityLower === "dharamkot" || cityLower === "mcleod ganj") {
    return [
      "Book accommodations with mountain views 2-3 months ahead during peak season",
      "Join meditation sessions at Tushita Meditation Centre - authentic Buddhist experience",
      "Use local shared taxis between Dharamkot and McLeod Ganj - regular and cheap",
      "Try Tibetan food at local family-run restaurants instead of tourist places",
      "Respect Tibetan refugee community - learn about their culture and struggles"
    ];
  }
  
  if (cityLower === "varkala") {
    return [
      "Book cliff-top accommodations early - limited rooms with sea views",
      "Use local auto-rickshaws for temple visits - they know the best routes and timings",
      "Try Ayurvedic treatments at government-certified centers only",
      "Avoid swimming during monsoon season - strong currents and rough seas",
      "Shop at local markets before 6 PM - most vendors close early in this peaceful town"
    ];
  }
  
  if (cityLower === "alleppey") {
    return [
      "Book houseboats through government-approved operators - avoid private touts",
      "Try traditional Kerala fish curry at local 'chaya kada' (tea shops)",
      "Use country boats for backwater exploration - more authentic than tourist boats",
      "Visit local coir factories to understand traditional rope-making industry",
      "Learn basic Malayalam water-related terms - helpful for boating and fishing activities"
    ];
  }
  
  if (cityLower === "kasol") {
    return [
      "Book stays in advance during peak season (May-June, Sept-Oct) - limited accommodation",
      "Try authentic Israeli food at local cafes - unique cultural fusion in this mountain town",
      "Use local buses to reach nearby villages like Tosh and Malana - scenic mountain routes",
      "Respect local Himachali culture - dress modestly and avoid loud parties",
      "Carry cash - limited ATMs and many places don't accept cards"
    ];
  }
  
  if (cityLower === "bir") {
    return [
      "Book paragliding sessions in advance during flying season (Oct-June)",
      "Stay in Tibetan homestays for authentic mountain culture experience",
      "Use local shared jeeps between Bir and Billing - adventure in itself",
      "Try traditional Himachali food at local dhabas instead of tourist restaurants",
      "Join early morning meditation sessions at Chokling Monastery"
    ];
  }
  
  if (cityLower === "dehradun") {
    return [
      "Use Vikram (shared auto) for local transport - cheapest way to get around",
      "Work from cafes in Rajpur Road area - good connectivity and peaceful environment",
      "Visit Robber's Cave early morning to avoid crowds - natural wonder worth seeing",
      "Try local street food at Paltan Bazaar - authentic Garhwali flavors",
      "Book hill station trips (Mussoorie, Dhanaulti) through local operators - better rates"
    ];
  }
  
  if (cityLower === "mussoorie") {
    return [
      "Book Mall Road accommodations early - limited properties with mountain views",
      "Use local porter services for heavy luggage - steep walking paths throughout town",
      "Try traditional Garhwali food at Lovely Omelette Center - local institution",
      "Avoid peak season weekends - extremely crowded with Delhi tourists",
      "Carry warm clothes even in summer - temperature drops significantly at night"
    ];
  }
  
  if (cityLower === "darjeeling") {
    return [
      "Book toy train rides in advance - UNESCO World Heritage experience",
      "Stay in heritage tea estate bungalows for authentic colonial experience",
      "Try local momos and thukpa at small family-run Tibetan restaurants",
      "Use shared jeeps for local transport - only practical way on steep mountain roads",
      "Learn basic Nepali phrases - most locals speak Nepali rather than Bengali"
    ];
  }
  
  // Default fallback for other cities
  return [
    "Download local transport apps and get a local SIM card for best connectivity",
    "Connect with local nomad communities through coworking spaces and cafes",
    "Try authentic local cuisine at family-run restaurants recommended by locals",
    "Learn basic local language phrases - always appreciated by residents",
    "Respect local customs and traditions - ask questions and show genuine interest"
  ];
};

interface CityOverviewProps {
  city: CityWithDetails;
}

export default function CityOverview({ city }: CityOverviewProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl font-bold text-travel-blue flex items-center">
          <MapPin className="mr-2 h-6 w-6 text-vintage-gold" />
          Overview & Insider Tips
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-travel-blue mb-3">About {city.name}</h3>
          <p className="text-muted-navy leading-relaxed mb-4">
            {city.description}
          </p>
          <p className="text-muted-navy leading-relaxed">
            Located in {city.state}, {city.name} has become a hotspot for digital nomads seeking 
            {city.tags?.includes("Beach") ? " a perfect work-life balance by the sea" : 
             city.tags?.includes("Tech Scene") ? " thriving tech opportunities and innovation" :
             city.tags?.includes("Heritage") ? " rich cultural experiences and historical significance" :
             " unique experiences and opportunities"}. 
            The city offers a perfect blend of modern amenities and local culture, making it an ideal 
            destination for remote workers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-travel-blue/5 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="h-4 w-4 text-travel-blue" />
              <span className="font-semibold text-travel-blue">Population</span>
            </div>
            <p className="text-muted-navy">{city.population?.toLocaleString()} residents</p>
          </div>
          
          <div className="bg-vintage-gold/5 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-vintage-gold" />
              <span className="font-semibold text-vintage-gold">Location</span>
            </div>
            <p className="text-muted-navy">{city.state}, India</p>
          </div>
          
          <div className="bg-sage-green/5 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-4 w-4 text-sage-green" />
              <span className="font-semibold text-sage-green">Timezone</span>
            </div>
            <p className="text-muted-navy">GMT+5:30 (IST)</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-travel-blue mb-3">Insider Tips</h3>
          <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
            <ul className="space-y-2 text-muted-navy">
              {getCitySpecificInsiderTips(city.name).map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
