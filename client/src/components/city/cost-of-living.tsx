import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Home, Wifi, Car, Coffee, Dumbbell, ExternalLink, TrendingUp, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { CostOfLiving } from "@shared/schema";
import { getCitySpecificData } from "@/lib/city-specific-data";

interface CostOfLivingProps {
  costData: CostOfLiving | null;
  citySlug: string;
}

export default function CostOfLiving({ costData, citySlug }: CostOfLivingProps) {
  const cityData = getCitySpecificData(citySlug);
  // Fetch live currency conversion rate
  const { data: currencyData } = useQuery<{rate: number, source: string}>({
    queryKey: ["/api/currency/INR/USD"],
    refetchInterval: 3600000, // Refresh every hour
  });

  const exchangeRate = currencyData?.rate || 0.012;
  const convertToUSD = (inrAmount: number) => Math.round(inrAmount * exchangeRate * 100) / 100;

  // Early return if no cost data to prevent any further processing
  if (!costData) {
    return (
      <Card className="bg-white rounded-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
            <DollarSign className="mr-3 h-8 w-8 text-vintage-gold" />
            Cost of Living
          </CardTitle>
          <p className="text-muted-navy text-lg">
            Comprehensive breakdown of living expenses with real-time currency conversion and external data sources.
          </p>
        </CardHeader>
        <CardContent>
          <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
            <p className="text-muted-navy">Loading cost of living data from external sources...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const costItems = [
    { icon: Home, label: "Studio Rent", valueINR: costData.studioRentINR || 0, valueUSD: convertToUSD(costData.studioRentINR || 0), category: "Housing", note: "City center vs suburbs varies 30-50%" },
    { icon: Home, label: "1 BHK Rent", valueINR: costData.oneBhkRentINR || 0, valueUSD: convertToUSD(costData.oneBhkRentINR || 0), category: "Housing", note: "Furnished apartments cost 20% more" },
    { icon: Home, label: "2 BHK Rent", valueINR: costData.twoBhkRentINR || 0, valueUSD: convertToUSD(costData.twoBhkRentINR || 0), category: "Housing", note: "Great for sharing with roommates" },
    { icon: DollarSign, label: "Utilities", valueINR: costData.utilitiesINR || 0, valueUSD: convertToUSD(costData.utilitiesINR || 0), category: "Monthly", note: "Electricity, water, gas, internet" },
    { icon: Coffee, label: "Groceries", valueINR: costData.groceriesINR || 0, valueUSD: convertToUSD(costData.groceriesINR || 0), category: "Monthly", note: "Fresh produce, basic cooking ingredients" },
    { icon: Coffee, label: "Eating Out", valueINR: costData.eatingOutINR || 0, valueUSD: convertToUSD(costData.eatingOutINR || 0), category: "Monthly", note: "Mix of street food and restaurants" },
    { icon: Wifi, label: "Coworking", valueINR: costData.coworkingINR || 0, valueUSD: convertToUSD(costData.coworkingINR || 0), category: "Monthly", note: "Day passes available for ₹200-500" },
    { icon: Car, label: "Transport", valueINR: costData.transportINR || 0, valueUSD: convertToUSD(costData.transportINR || 0), category: "Monthly", note: "Metro, bus, auto rickshaw, occasional cab" },
    { icon: Wifi, label: "SIM & Data", valueINR: costData.simDataINR || 0, valueUSD: convertToUSD(costData.simDataINR || 0), category: "Monthly", note: "Unlimited calls + 2GB/day data" },
    { icon: Dumbbell, label: "Gym", valueINR: costData.gymINR || 0, valueUSD: convertToUSD(costData.gymINR || 0), category: "Monthly", note: "Basic gym membership with equipment" },
    { icon: Coffee, label: "Coffee", valueINR: costData.coffeeINR || 0, valueUSD: convertToUSD(costData.coffeeINR || 0), category: "Per Item", note: "Cafe coffee (street tea costs ₹10-20)" },
    { icon: DollarSign, label: "Entertainment", valueINR: costData.entertainmentINR || 0, valueUSD: convertToUSD(costData.entertainmentINR || 0), category: "Monthly", note: "Movies, bars, events, activities" },
  ];

  const categories = {
    Housing: costItems.filter(item => item.category === "Housing"),
    Monthly: costItems.filter(item => item.category === "Monthly"),
    "Per Item": costItems.filter(item => item.category === "Per Item"),
  };

  // Get city-specific digital nomad accommodation data
  const getCitySpecificAccommodation = () => {
    const accommodationData: Record<string, any> = {
      mumbai: {
        hostels: [
          { name: "Zostel Mumbai", area: "Andheri East", price: "₹189-500/night ($6-8)", rating: 4.2, amenities: ["WiFi", "Cafe", "Rooftop", "Games room"], bookingUrl: "https://www.zostel.com/zostel/mumbai/mumbai-bkc-mumh529/" },
          { name: "Backpacker Cowies", area: "Colaba", price: "₹800-1200/night ($11-14)", rating: 4.1, amenities: ["WiFi", "Heritage building", "Rooftop terrace", "Central location"], bookingUrl: "https://www.hostelworld.com/hostels/p/89674/backpacker-panda-colaba/" },
          { name: "Hostel Mantra", area: "Andheri West", price: "₹500-800/night ($6-10)", rating: 3.9, amenities: ["WiFi", "Games room", "Social atmosphere", "CCTV"], bookingUrl: "https://www.hostelworld.com/hostels/p/87362/hostel-mantra/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/mumbai-in.html", features: ["Instant booking", "Local support", "Best price guarantee"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/mumbai.html", features: ["Free cancellation", "24/7 support", "Verified reviews"] },
          { name: "Hostelworld", url: "https://www.hostelworld.com/hostels/Mumbai", features: ["Hostel specialist", "Community", "City guides"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Mumbai--India", features: ["Local experiences", "Monthly discounts", "Verified hosts"] },
          { name: "OYO", url: "https://www.oyorooms.com/hotels-in-mumbai/", features: ["Local chain", "Standardized rooms", "Easy booking"] }
        ],
        monthlyOptions: [
          { type: "PG (Paying Guest)", price: "₹8000-15000/month ($96-180)", includes: "Meals, WiFi, cleaning" },
          { type: "Co-living spaces", price: "₹12000-25000/month ($144-300)", includes: "Fully furnished, community events" },
          { type: "Service apartments", price: "₹20000-40000/month ($240-480)", includes: "Hotel-like services, flexibility" }
        ]
      },
      delhi: {
        hostels: [
          { name: "Zostel Delhi", area: "Paharganj", price: "₹700-1100/night ($8-13)", rating: 4.1, amenities: ["WiFi", "AC", "Kitchen", "Terrace"], bookingUrl: "https://www.zostel.com/zostel/delhi/" },
          { name: "Jugaad Hostels", area: "Hauz Khas", price: "₹800-1200/night ($10-14)", rating: 4.4, amenities: ["WiFi", "Events", "Kitchen", "Co-working"], bookingUrl: "https://www.jugaadhostels.com/delhi" },
          { name: "Bleisure Hospitality", area: "Connaught Place", price: "₹900-1300/night ($11-16)", rating: 4.2, amenities: ["WiFi", "Restaurant", "AC"], bookingUrl: "https://www.bleisure.in/delhi" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/new-delhi-in.html", features: ["Best prices", "Local partnerships", "Mobile app"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/new-delhi.html", features: ["Largest inventory", "Multiple languages", "Flexible booking"] },
          { name: "Hostelworld", url: "https://www.hostelworld.com/hostels/New-Delhi", features: ["Hostel focus", "Social features", "Group bookings"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/New-Delhi--India", features: ["Unique spaces", "Long-term stays", "Local experiences"] },
          { name: "Treebo", url: "https://www.treebohotels.com/hotels-in-delhi", features: ["Indian chain", "Consistent quality", "Good locations"] }
        ],
        monthlyOptions: [
          { type: "PG accommodations", price: "₹6000-12000/month ($72-144)", includes: "Meals, utilities, basic amenities" },
          { type: "Co-living", price: "₹10000-20000/month ($120-240)", includes: "Furnished rooms, community, events" },
          { type: "Studio apartments", price: "₹15000-30000/month ($180-360)", includes: "Independent living, kitchen" }
        ]
      },
      bangalore: {
        hostels: [
          { name: "The Hosteller Bangalore", area: "Koramangala", price: "₹800-1200/night ($10-14)", rating: 4.3, amenities: ["WiFi", "Co-working space", "Terrace cafe", "City views"], bookingUrl: "https://www.hostelworld.com/hostels/p/319151/the-hosteller-bangalore-koramangala/" },
          { name: "Zostel Bangalore", area: "Koramangala", price: "₹700-1100/night ($8-13)", rating: 4.1, amenities: ["WiFi", "Large common areas", "Quiet working spaces", "AC"], bookingUrl: "https://www.hostelworld.com/hostels/p/323027/zostel-bangalore-koramangala/" },
          { name: "Woke Hostel", area: "Indiranagar", price: "₹600-950/night ($7-11)", rating: 4.0, amenities: ["WiFi", "Digital nomad friendly", "Bedside power", "Free water"], bookingUrl: "https://www.hostelworld.com/hostels/asia/india/bangalore/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/bangalore-in.html", features: ["Tech-friendly", "Best rates", "Easy booking"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/bangalore.html", features: ["Wide selection", "Verified reviews", "Mobile booking"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Bangalore--India", features: ["Tech community", "Long stays", "Unique properties"] },
          { name: "Zolo", url: "https://www.zolo.in/bangalore", features: ["Co-living specialist", "Tech nomads", "Flexible terms"] },
          { name: "NestAway", url: "https://www.nestaway.com/bangalore", features: ["Fully managed", "No brokerage", "Quick move-in"] }
        ],
        monthlyOptions: [
          { type: "Co-living spaces", price: "₹12000-22000/month ($144-264)", includes: "Fully furnished, high-speed WiFi, community" },
          { type: "PG for professionals", price: "₹8000-15000/month ($96-180)", includes: "Meals, cleaning, WiFi" },
          { type: "Tech-friendly apartments", price: "₹18000-35000/month ($216-420)", includes: "High-speed internet, flexible lease" }
        ]
      },
      goa: {
        hostels: [
          { name: "Happy Panda Hostel", area: "Arambol", price: "₹700-900/night ($9-11)", rating: 4.5, amenities: ["WiFi", "Neon art room", "Rooftop bar", "Beach 10min walk"], bookingUrl: "https://www.hostelworld.com/hostels/p/269088/happy-panda-hostel-arambol/" },
          { name: "Roadhouse Anjuna", area: "Anjuna", price: "₹650-950/night ($8-11)", rating: 4.2, amenities: ["WiFi", "AC", "Community kitchen", "Near Shiva Valley"], bookingUrl: "https://www.hostelworld.com/hostels/asia/india/goa/d/anjuna/" },
          { name: "78 Backpackers", area: "Anjuna", price: "₹600-800/night ($8-10)", rating: 4.0, amenities: ["WiFi", "Vibrant rooftop bar", "4min to beach", "Adventure community"], bookingUrl: "https://78backpackers.com/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/goa-in.html", features: ["Beach properties", "Local deals", "Easy booking"] },
          { name: "Booking.com", url: "https://www.booking.com/region/in/goa.html", features: ["Largest selection", "Beach resorts", "Flexible dates"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Goa--India", features: ["Beach houses", "Monthly discounts", "Local hosts"] },
          { name: "OYO", url: "https://www.oyorooms.com/hotels-in-goa/", features: ["Budget options", "Standardized quality", "Beach locations"] }
        ],
        monthlyOptions: [
          { type: "Beach house rentals", price: "₹10000-25000/month ($120-300)", includes: "Beach access, basic furnishing" },
          { type: "Portuguese villa rooms", price: "₹8000-18000/month ($96-216)", includes: "Cultural experience, garden access" },
          { type: "Nomad-friendly apartments", price: "₹12000-30000/month ($144-360)", includes: "Good WiFi, workspace, balcony" }
        ]
      },
      rishikesh: {
        hostels: [
          { name: "Zostel Rishikesh", area: "Laxman Jhula", price: "₹600-900/night ($7-11)", rating: 4.0, amenities: ["WiFi", "5min to bridge", "Ganga views", "Common room"], bookingUrl: "https://www.hostelworld.com/hostels/p/315053/zostel-rishikesh-laxman-jhula/" },
          { name: "The Hosteller Ganges", area: "Laxman Jhula", price: "₹550-850/night ($7-10)", rating: 4.2, amenities: ["WiFi", "Bright common rooms", "Yoga access", "Riverside"], bookingUrl: "https://www.thehosteller.com/hostels/the-hosteller-rishikesh-ganges/" },
          { name: "Shalom Backpackers", area: "Ram Jhula", price: "₹500-800/night ($6-10)", rating: 3.9, amenities: ["WiFi", "Adult-only", "Pool", "Yoga mornings"], bookingUrl: "https://www.hostelworld.com/hostels/asia/india/rishikesh/" }
        ],
        platforms: [
          { name: "Booking.com", url: "https://www.booking.com/city/in/rishikesh.html", features: ["Spiritual retreats", "Ashram bookings", "Nature stays"] },
          { name: "Agoda", url: "https://www.agoda.com/city/rishikesh-in.html", features: ["Adventure packages", "Yoga retreats", "Budget options"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Rishikesh--Uttarakhand--India", features: ["River-view properties", "Spiritual experiences", "Long stays"] },
          { name: "Zostel", url: "https://www.zostel.com/zostel/rishikesh/", features: ["Backpacker community", "Yoga programs", "Adventure activities"] }
        ],
        monthlyOptions: [
          { type: "Ashram accommodation", price: "₹3000-8000/month ($36-96)", includes: "Meals, yoga, meditation, simple living" },
          { type: "Guesthouse rooms", price: "₹5000-12000/month ($60-144)", includes: "Basic amenities, mountain views" },
          { type: "Yoga retreat centers", price: "₹8000-15000/month ($96-180)", includes: "Yoga classes, healthy meals, community" }
        ]
      },
      kochi: {
        hostels: [
          { name: "Zostel Kochi", area: "Fort Kochi", price: "₹700-1000/night ($8-12)", rating: 4.1, amenities: ["WiFi", "AC", "Kitchen", "Heritage location"], bookingUrl: "https://www.zostel.com/zostel/kochi/" },
          { name: "Backpacker Panda", area: "Marine Drive", price: "₹600-850/night ($7-10)", rating: 3.9, amenities: ["WiFi", "Backwater views", "Kitchen"], bookingUrl: "https://www.backpackerpanda.com/kochi" },
          { name: "The Tea Bungalow", area: "Mattancherry", price: "₹800-1200/night ($10-14)", rating: 4.2, amenities: ["WiFi", "Heritage building", "Cultural tours"], bookingUrl: "https://www.teabungalow.com/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/kochi-in.html", features: ["Backwater properties", "Heritage stays", "Local partnerships"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/kochi.html", features: ["Houseboat bookings", "Heritage hotels", "Cultural experiences"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Kochi--Kerala--India", features: ["Heritage homes", "Backwater views", "Local experiences"] },
          { name: "OYO", url: "https://www.oyorooms.com/hotels-in-kochi/", features: ["Budget options", "Airport connectivity", "Business travelers"] }
        ],
        monthlyOptions: [
          { type: "Heritage homestays", price: "₹8000-15000/month ($96-180)", includes: "Cultural immersion, home meals, local guidance" },
          { type: "Backwater apartments", price: "₹12000-25000/month ($144-300)", includes: "Water views, peaceful environment" },
          { type: "IT professional PGs", price: "₹10000-18000/month ($120-216)", includes: "High-speed WiFi, professional crowd" }
        ]
      },
      pune: {
        hostels: [
          { name: "Zostel Pune", area: "Koregaon Park", price: "₹700-1100/night ($8-13)", rating: 4.0, amenities: ["WiFi", "AC", "Kitchen", "Party area"], bookingUrl: "https://www.zostel.com/zostel/pune/" },
          { name: "Backpacker Panda", area: "Camp", price: "₹500-800/night ($6-10)", rating: 3.8, amenities: ["WiFi", "Common area", "Tours"], bookingUrl: "https://www.backpackerpanda.com/pune" },
          { name: "The Hosteller", area: "Viman Nagar", price: "₹600-900/night ($7-11)", rating: 4.1, amenities: ["WiFi", "Kitchen", "Airport proximity"], bookingUrl: "https://www.thehosteller.com/pune/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/pune-in.html", features: ["IT hub properties", "Student accommodations", "Airport hotels"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/pune.html", features: ["Business hotels", "Hill station access", "Corporate rates"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Pune--Maharashtra--India", features: ["Modern apartments", "IT professional hosts", "Co-living spaces"] },
          { name: "Zolo", url: "https://www.zolo.in/pune", features: ["Co-living specialist", "IT crowd", "Modern amenities"] }
        ],
        monthlyOptions: [
          { type: "IT professional PGs", price: "₹8000-16000/month ($96-192)", includes: "High-speed WiFi, professional crowd, meals" },
          { type: "Co-living spaces", price: "₹12000-20000/month ($144-240)", includes: "Fully furnished, community events, flexibility" },
          { type: "Student accommodations", price: "₹6000-12000/month ($72-144)", includes: "Near colleges, basic amenities, shared spaces" }
        ]
      },
      udaipur: {
        hostels: [
          { name: "Zostel Udaipur", area: "City Palace area", price: "₹600-900/night ($7-11)", rating: 4.2, amenities: ["WiFi", "Killer lake views", "Social atmosphere", "500m to palace"], bookingUrl: "https://www.zostel.com/zostel/udaipur/" },
          { name: "The Hosteller Udaipur", area: "City Palace", price: "₹650-950/night ($8-11)", rating: 4.3, amenities: ["WiFi", "3-tier rooftop terrace", "5min to palace", "AC rooms"], bookingUrl: "https://www.thehosteller.com/hostels/the-hosteller-udaipur/" },
          { name: "Raahi Backpackers", area: "Silawatwari", price: "₹500-750/night ($6-9)", rating: 4.0, amenities: ["WiFi", "Lake Pichola rooftop", "275m to Jagdish Temple", "Bonfire"], bookingUrl: "https://www.goibibo.com/hotels/raahi-backpackers-hostel-rooftop-restaurant-at-lake-pichola-hotel-in-udaipur-516008976659554345/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/udaipur-in.html", features: ["Palace hotels", "Lake views", "Heritage properties"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/udaipur.html", features: ["Heritage stays", "Palace experiences", "Cultural tours"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Udaipur--Rajasthan--India", features: ["Heritage haveli", "Lake views", "Royal experiences"] },
          { name: "OYO", url: "https://www.oyorooms.com/hotels-in-udaipur/", features: ["Budget palace stays", "Tourist locations", "Standard amenities"] }
        ],
        monthlyOptions: [
          { type: "Heritage haveli rooms", price: "₹8000-15000/month ($96-180)", includes: "Royal architecture, cultural immersion" },
          { type: "Lake-view apartments", price: "₹10000-20000/month ($120-240)", includes: "Scenic views, peaceful environment" },
          { type: "Old city guesthouses", price: "₹5000-12000/month ($60-144)", includes: "Cultural experience, local community" }
        ]
      },
      pondicherry: {
        hostels: [
          { name: "Villa Shanti Backpackers", area: "French Quarter", price: "₹700-1100/night ($8-13)", rating: 4.1, amenities: ["WiFi", "French architecture", "Beach proximity"], bookingUrl: "https://villashanti.com/backpackers" },
          { name: "Backpacker Panda", area: "White Town", price: "₹600-900/night ($7-11)", rating: 3.9, amenities: ["WiFi", "Colonial charm", "Beach access"], bookingUrl: "https://www.backpackerpanda.com/pondicherry" },
          { name: "Zostel Pondicherry", area: "Auroville Road", price: "₹650-950/night ($8-11)", rating: 4.0, amenities: ["WiFi", "Spiritual vibes", "Auroville access"], bookingUrl: "https://www.zostel.com/zostel/pondicherry/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/pondicherry-in.html", features: ["French colonial stays", "Beach resorts", "Spiritual retreats"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/pondicherry.html", features: ["Heritage hotels", "Auroville access", "Beach properties"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Puducherry--India", features: ["French villas", "Beach houses", "Spiritual experiences"] },
          { name: "OYO", url: "https://www.oyorooms.com/hotels-in-pondicherry/", features: ["Budget beach stays", "French Quarter locations", "Tourist friendly"] }
        ],
        monthlyOptions: [
          { type: "French colonial apartments", price: "₹8000-18000/month ($96-216)", includes: "Heritage charm, French culture, beach access" },
          { type: "Auroville community stays", price: "₹6000-14000/month ($72-168)", includes: "Spiritual community, organic food, meditation" },
          { type: "Beach-side guesthouses", price: "₹7000-16000/month ($84-192)", includes: "Beach access, local fishing community" }
        ]
      },
      darjeeling: {
        hostels: [
          { name: "Zostel Darjeeling", area: "Mall Road", price: "₹600-900/night ($7-11)", rating: 4.0, amenities: ["WiFi", "Mountain views", "Tea garden tours", "Heating"], bookingUrl: "https://www.zostel.com/zostel/darjeeling/" },
          { name: "Backpacker Panda", area: "Chowrasta", price: "₹500-750/night ($6-9)", rating: 3.8, amenities: ["WiFi", "Himalayan views", "Warm blankets"], bookingUrl: "https://www.backpackerpanda.com/darjeeling" },
          { name: "The Hosteller", area: "Observatory Hill", price: "₹550-850/night ($7-10)", rating: 3.9, amenities: ["WiFi", "Sunrise views", "Tea tasting", "Library"], bookingUrl: "https://www.thehosteller.com/darjeeling/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/darjeeling-in.html", features: ["Mountain resorts", "Tea estate stays", "Himalayan views"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/darjeeling.html", features: ["Hill station hotels", "Heritage properties", "Tea garden stays"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Darjeeling--West-Bengal--India", features: ["Mountain cottages", "Tea estate homes", "Local families"] },
          { name: "OYO", url: "https://www.oyorooms.com/hotels-in-darjeeling/", features: ["Budget hill stations", "Heating facilities", "Tourist locations"] }
        ],
        monthlyOptions: [
          { type: "Tea estate cottages", price: "₹6000-12000/month ($72-144)", includes: "Tea garden access, mountain views, fresh air" },
          { type: "Hill station guesthouses", price: "₹5000-10000/month ($60-120)", includes: "Heating, mountain community, local food" },
          { type: "Tibetan monastery stays", price: "₹3000-8000/month ($36-96)", includes: "Spiritual atmosphere, meditation, simple living" }
        ]
      },
      mussoorie: {
        hostels: [
          { name: "Zostel Mussoorie", area: "Mall Road", price: "₹600-900/night ($7-11)", rating: 3.9, amenities: ["WiFi", "Mountain views", "Heating", "Library"], bookingUrl: "https://www.zostel.com/zostel/mussoorie/" },
          { name: "Backpacker Panda", area: "Landour", price: "₹500-750/night ($6-9)", rating: 3.7, amenities: ["WiFi", "Hill station charm", "Warm blankets"], bookingUrl: "https://www.backpackerpanda.com/mussoorie" },
          { name: "The Hosteller", area: "Picture Palace", price: "₹550-800/night ($7-10)", rating: 3.8, amenities: ["WiFi", "Valley views", "Common kitchen"], bookingUrl: "https://www.thehosteller.com/mussoorie/" }
        ],
        platforms: [
          { name: "Booking.com", url: "https://www.booking.com/city/in/mussoorie.html", features: ["Hill station hotels", "Mountain resorts", "Valley views"] },
          { name: "Agoda", url: "https://www.agoda.com/city/mussoorie-in.html", features: ["Mountain properties", "Heritage hotels", "Scenic stays"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Mussoorie--Uttarakhand--India", features: ["Mountain cottages", "British-era homes", "Hill views"] }
        ],
        monthlyOptions: [
          { type: "Hill station guesthouses", price: "₹5000-12000/month ($60-144)", includes: "Mountain views, heating, local community" },
          { type: "British-era cottages", price: "₹8000-15000/month ($96-180)", includes: "Heritage charm, valley views, peaceful environment" }
        ]
      },
      dehradun: {
        hostels: [
          { name: "Zostel Dehradun", area: "Clock Tower", price: "₹600-900/night ($7-11)", rating: 4.0, amenities: ["WiFi", "AC", "Kitchen", "City access"], bookingUrl: "https://www.zostel.com/zostel/dehradun/" },
          { name: "Backpacker Panda", area: "Paltan Bazaar", price: "₹500-750/night ($6-9)", rating: 3.8, amenities: ["WiFi", "Central location", "Budget friendly"], bookingUrl: "https://www.backpackerpanda.com/dehradun" },
          { name: "The Hosteller", area: "Rajpur Road", price: "₹550-850/night ($7-10)", rating: 3.9, amenities: ["WiFi", "Modern amenities", "Hill access"], bookingUrl: "https://www.thehosteller.com/dehradun/" }
        ],
        platforms: [
          { name: "Booking.com", url: "https://www.booking.com/city/in/dehradun.html", features: ["Gateway to hills", "Business hotels", "Transit stays"] },
          { name: "Agoda", url: "https://www.agoda.com/city/dehradun-in.html", features: ["Hill station access", "Educational hub", "Budget options"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Dehradun--Uttarakhand--India", features: ["Modern apartments", "Hill access", "Local families"] }
        ],
        monthlyOptions: [
          { type: "Student accommodations", price: "₹6000-12000/month ($72-144)", includes: "Near colleges, study environment, basic amenities" },
          { type: "Professional PGs", price: "₹8000-15000/month ($96-180)", includes: "WiFi, meals, working professionals" }
        ]
      },
      kolkata: {
        hostels: [
          { name: "Backpacker Panda", area: "Park Street", price: "₹600-900/night ($7-11)", rating: 4.0, amenities: ["WiFi", "Cultural heart", "Metro access", "AC"], bookingUrl: "https://www.backpackerpanda.com/kolkata" },
          { name: "The Hosteller", area: "New Market", price: "₹550-850/night ($7-10)", rating: 3.9, amenities: ["WiFi", "Heritage location", "Cultural tours"], bookingUrl: "https://www.thehosteller.com/kolkata/" },
          { name: "Mad Monkey Hostel", area: "Salt Lake", price: "₹700-1000/night ($8-12)", rating: 4.1, amenities: ["WiFi", "Modern area", "IT hub proximity"], bookingUrl: "https://www.madmonkeyhostels.com/kolkata/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/kolkata-in.html", features: ["Cultural heritage", "Metro connectivity", "Budget options"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/kolkata.html", features: ["Heritage hotels", "Cultural experiences", "River views"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Kolkata--West-Bengal--India", features: ["Heritage homes", "Cultural immersion", "Local families"] },
          { name: "OYO", url: "https://www.oyorooms.com/hotels-in-kolkata/", features: ["Budget stays", "Metro access", "Business locations"] }
        ],
        monthlyOptions: [
          { type: "Heritage neighborhood PGs", price: "₹7000-14000/month ($84-168)", includes: "Cultural immersion, Bengali food, local community" },
          { type: "IT professional accommodations", price: "₹10000-18000/month ($120-216)", includes: "Modern amenities, IT hub access, high-speed WiFi" }
        ]
      },
      dharamkot: {
        hostels: [
          { name: "Pink House Cafe & Hostel", area: "Upper Dharamkot", price: "₹400-600/night ($5-7)", rating: 4.2, amenities: ["WiFi", "Mountain views", "Cafe", "Trekking"], bookingUrl: "https://www.pinkhouse-dharamkot.com/" },
          { name: "Zostel Dharamshala", area: "McLeod Ganj", price: "₹500-750/night ($6-9)", rating: 4.0, amenities: ["WiFi", "Tibetan culture", "Mountain treks"], bookingUrl: "https://www.zostel.com/zostel/dharamshala/" },
          { name: "Backpacker Panda", area: "Dharamkot", price: "₹350-550/night ($4-7)", rating: 3.9, amenities: ["WiFi", "Budget stay", "Yoga classes"], bookingUrl: "https://www.backpackerpanda.com/dharamshala" }
        ],
        platforms: [
          { name: "Booking.com", url: "https://www.booking.com/city/in/dharamshala.html", features: ["Tibetan culture", "Mountain treks", "Spiritual stays"] },
          { name: "Agoda", url: "https://www.agoda.com/city/dharamshala-in.html", features: ["Budget mountains", "Spiritual retreats", "Trekking base"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Dharamkot--Himachal-Pradesh--India", features: ["Mountain cottages", "Local families", "Spiritual experiences"] }
        ],
        monthlyOptions: [
          { type: "Mountain guesthouses", price: "₹4000-8000/month ($48-96)", includes: "Mountain views, basic amenities, trekking access" },
          { type: "Tibetan family homestays", price: "₹5000-10000/month ($60-120)", includes: "Cultural immersion, home meals, spiritual environment" }
        ]
      },
      kasol: {
        hostels: [
          { name: "Zostel Kasol", area: "Old Kasol", price: "₹400-650/night ($5-8)", rating: 4.1, amenities: ["WiFi", "River views", "Trekking", "Cafe"], bookingUrl: "https://www.zostel.com/zostel/kasol/" },
          { name: "Backpacker Panda", area: "Chalal", price: "₹300-500/night ($4-6)", rating: 3.9, amenities: ["WiFi", "Nature walks", "Budget friendly"], bookingUrl: "https://www.backpackerpanda.com/kasol" },
          { name: "The Hosteller", area: "Tosh Road", price: "₹350-550/night ($4-7)", rating: 4.0, amenities: ["WiFi", "Mountain views", "Common kitchen"], bookingUrl: "https://www.thehosteller.com/kasol/" }
        ],
        platforms: [
          { name: "Booking.com", url: "https://www.booking.com/city/in/kasol.html", features: ["Mountain stays", "Trekking base", "Nature retreats"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Kasol--Himachal-Pradesh--India", features: ["River-side cottages", "Local families", "Mountain experiences"] },
          { name: "Zostel", url: "https://www.zostel.com/zostel/kasol/", features: ["Backpacker community", "Trekking groups", "River activities"] }
        ],
        monthlyOptions: [
          { type: "Riverside guesthouses", price: "₹4000-8000/month ($48-96)", includes: "River access, mountain views, basic amenities" },
          { type: "Local family homestays", price: "₹3000-6000/month ($36-72)", includes: "Home meals, cultural experience, trekking guidance" }
        ]
      },
      tosh: {
        hostels: [
          { name: "Zostel Tosh", area: "Upper Tosh", price: "₹350-550/night ($4-7)", rating: 4.0, amenities: ["WiFi", "Mountain views", "Trekking", "Stargazing"], bookingUrl: "https://www.zostel.com/zostel/tosh/" },
          { name: "Backpacker Panda", area: "Lower Tosh", price: "₹250-450/night ($3-5)", rating: 3.8, amenities: ["WiFi", "Budget stay", "Valley views"], bookingUrl: "https://www.backpackerpanda.com/tosh" },
          { name: "Mountain Guest House", area: "Tosh Village", price: "₹300-500/night ($4-6)", rating: 3.9, amenities: ["WiFi", "Local food", "Himalayan views"], bookingUrl: "https://www.mountainguesthouse.com/tosh" }
        ],
        platforms: [
          { name: "Booking.com", url: "https://www.booking.com/city/in/tosh.html", features: ["Mountain villages", "Trekking stays", "Remote locations"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Tosh--Himachal-Pradesh--India", features: ["Village homestays", "Mountain cottages", "Local experiences"] }
        ],
        monthlyOptions: [
          { type: "Village homestays", price: "₹3000-6000/month ($36-72)", includes: "Home meals, village life, mountain access" },
          { type: "Mountain guesthouses", price: "₹4000-7000/month ($48-84)", includes: "Himalayan views, basic amenities, trekking access" }
        ]
      },
      bir: {
        hostels: [
          { name: "Zostel Bir", area: "Bir Billing", price: "₹500-750/night ($6-9)", rating: 4.2, amenities: ["WiFi", "Paragliding", "Mountain views", "Adventure sports"], bookingUrl: "https://www.zostel.com/zostel/bir/" },
          { name: "Backpacker Panda", area: "Bir Village", price: "₹400-600/night ($5-7)", rating: 3.9, amenities: ["WiFi", "Tibetan culture", "Monastery visits"], bookingUrl: "https://www.backpackerpanda.com/bir" },
          { name: "The Hosteller", area: "Billing", price: "₹450-650/night ($5-8)", rating: 4.0, amenities: ["WiFi", "Paragliding take-off", "Adventure activities"], bookingUrl: "https://www.thehosteller.com/bir/" }
        ],
        platforms: [
          { name: "Booking.com", url: "https://www.booking.com/city/in/bir.html", features: ["Paragliding hub", "Adventure stays", "Tibetan culture"] },
          { name: "Agoda", url: "https://www.agoda.com/city/bir-in.html", features: ["Adventure sports", "Mountain retreats", "Monastery stays"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Bir--Himachal-Pradesh--India", features: ["Adventure homes", "Tibetan families", "Paragliding access"] }
        ],
        monthlyOptions: [
          { type: "Adventure guesthouses", price: "₹6000-12000/month ($72-144)", includes: "Paragliding access, adventure sports, mountain views" },
          { type: "Tibetan monastery stays", price: "₹4000-8000/month ($48-96)", includes: "Spiritual environment, meditation, simple living" }
        ]
      },
      ziro: {
        hostels: [
          { name: "Ziro Backpackers", area: "Old Ziro", price: "₹400-600/night ($5-7)", rating: 3.8, amenities: ["WiFi", "Tribal culture", "Nature walks", "Local food"], bookingUrl: "https://www.zirobackpackers.com/" },
          { name: "Apatani Heritage Stay", area: "Hong Village", price: "₹500-800/night ($6-10)", rating: 4.0, amenities: ["WiFi", "Cultural immersion", "Traditional architecture"], bookingUrl: "https://www.apataniheritage.com/" },
          { name: "Eco Lodge Ziro", area: "Hapoli", price: "₹600-900/night ($7-11)", rating: 4.1, amenities: ["WiFi", "Eco-friendly", "Nature trails", "Bird watching"], bookingUrl: "https://www.ecolodgeziro.com/" }
        ],
        platforms: [
          { name: "Booking.com", url: "https://www.booking.com/region/in/arunachal-pradesh.html", features: ["Tribal culture", "Remote locations", "Nature stays"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Ziro--Arunachal-Pradesh--India", features: ["Tribal homestays", "Cultural experiences", "Remote villages"] }
        ],
        monthlyOptions: [
          { type: "Apatani family homestays", price: "₹5000-10000/month ($60-120)", includes: "Cultural immersion, traditional food, tribal lifestyle" },
          { type: "Nature lodge stays", price: "₹8000-15000/month ($96-180)", includes: "Eco-friendly living, nature access, bird watching" }
        ]
      },
      varkala: {
        hostels: [
          { name: "Zostel Varkala", area: "Cliff Beach", price: "₹700-1000/night ($8-12)", rating: 4.1, amenities: ["WiFi", "Beach access", "Cliff views", "Ayurveda"], bookingUrl: "https://www.zostel.com/zostel/varkala/" },
          { name: "Backpacker Panda", area: "North Cliff", price: "₹600-850/night ($7-10)", rating: 3.9, amenities: ["WiFi", "Beach proximity", "Yoga classes"], bookingUrl: "https://www.backpackerpanda.com/varkala" },
          { name: "Mad Monkey Hostel", area: "South Cliff", price: "₹750-1100/night ($9-13)", rating: 4.0, amenities: ["WiFi", "Beach parties", "Cliff restaurant"], bookingUrl: "https://www.madmonkeyhostels.com/varkala/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/varkala-in.html", features: ["Beach resorts", "Ayurveda retreats", "Cliff accommodations"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/varkala.html", features: ["Beach hotels", "Spiritual retreats", "Ayurveda spas"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Varkala--Kerala--India", features: ["Cliff houses", "Beach cottages", "Ayurveda homes"] }
        ],
        monthlyOptions: [
          { type: "Cliff-side apartments", price: "₹10000-20000/month ($120-240)", includes: "Beach access, cliff views, Ayurveda centers nearby" },
          { type: "Beach house rentals", price: "₹8000-16000/month ($96-192)", includes: "Beach proximity, local fishing community, peaceful environment" }
        ]
      },
      alleppey: {
        hostels: [
          { name: "Backpacker Panda", area: "Alleppey Beach", price: "₹600-900/night ($7-11)", rating: 4.0, amenities: ["WiFi", "Beach access", "Backwater tours", "Kitchen"], bookingUrl: "https://www.backpackerpanda.com/alleppey" },
          { name: "The Hosteller", area: "Kumbakonam", price: "₹550-850/night ($7-10)", rating: 3.9, amenities: ["WiFi", "Houseboat access", "Cultural tours"], bookingUrl: "https://www.thehosteller.com/alleppey/" },
          { name: "Zostel Alleppey", area: "Backwater Junction", price: "₹650-950/night ($8-11)", rating: 4.1, amenities: ["WiFi", "Backwater views", "Boat tours", "Local cuisine"], bookingUrl: "https://www.zostel.com/zostel/alleppey/" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/alleppey-in.html", features: ["Houseboat stays", "Backwater resorts", "Beach hotels"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/alleppey.html", features: ["Backwater experiences", "Houseboat bookings", "Beach access"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Alleppey--Kerala--India", features: ["Traditional houseboats", "Backwater homes", "Local families"] }
        ],
        monthlyOptions: [
          { type: "Backwater homestays", price: "₹8000-16000/month ($96-192)", includes: "Backwater access, local cuisine, boat rides" },
          { type: "Traditional Kerala homes", price: "₹10000-20000/month ($120-240)", includes: "Heritage architecture, home meals, cultural immersion" }
        ]
      },
      wayanad: {
        hostels: [
          { name: "Zostel Wayanad", area: "Kalpetta", price: "₹600-900/night ($7-11)", rating: 4.0, amenities: ["WiFi", "Plantation views", "Trekking", "Wildlife tours"], bookingUrl: "https://www.zostel.com/zostel/wayanad/" },
          { name: "Backpacker Panda", area: "Sulthan Bathery", price: "₹500-750/night ($6-9)", rating: 3.8, amenities: ["WiFi", "Nature walks", "Spice tours"], bookingUrl: "https://www.backpackerpanda.com/wayanad" },
          { name: "The Hosteller", area: "Meppadi", price: "₹550-850/night ($7-10)", rating: 3.9, amenities: ["WiFi", "Coffee plantations", "Hill views"], bookingUrl: "https://www.thehosteller.com/wayanad/" }
        ],
        platforms: [
          { name: "Booking.com", url: "https://www.booking.com/city/in/wayanad.html", features: ["Plantation stays", "Wildlife resorts", "Hill stations"] },
          { name: "Agoda", url: "https://www.agoda.com/city/wayanad-in.html", features: ["Nature resorts", "Coffee plantations", "Tribal experiences"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/Wayanad--Kerala--India", features: ["Plantation homes", "Tribal homestays", "Wildlife lodges"] }
        ],
        monthlyOptions: [
          { type: "Coffee plantation stays", price: "₹8000-15000/month ($96-180)", includes: "Plantation tours, fresh coffee, nature access" },
          { type: "Tribal community homestays", price: "₹6000-12000/month ($72-144)", includes: "Cultural immersion, traditional lifestyle, nature walks" }
        ]
      },
      'new-delhi': {
        hostels: [
          { name: "Zostel New Delhi", area: "Paharganj", price: "₹700-1100/night ($8-13)", rating: 4.1, amenities: ["WiFi", "AC", "Kitchen", "Terrace"], bookingUrl: "https://www.zostel.com/zostel/delhi/" },
          { name: "Jugaad Hostels", area: "Hauz Khas", price: "₹800-1200/night ($10-14)", rating: 4.4, amenities: ["WiFi", "Events", "Kitchen", "Co-working"], bookingUrl: "https://www.jugaadhostels.com/delhi" },
          { name: "Bleisure Hospitality", area: "Connaught Place", price: "₹900-1300/night ($11-16)", rating: 4.2, amenities: ["WiFi", "Restaurant", "AC"], bookingUrl: "https://www.bleisure.in/delhi" }
        ],
        platforms: [
          { name: "Agoda", url: "https://www.agoda.com/city/new-delhi-in.html", features: ["Best prices", "Local partnerships", "Mobile app"] },
          { name: "Booking.com", url: "https://www.booking.com/city/in/new-delhi.html", features: ["Largest inventory", "Multiple languages", "Flexible booking"] },
          { name: "Hostelworld", url: "https://www.hostelworld.com/hostels/New-Delhi", features: ["Hostel focus", "Social features", "Group bookings"] },
          { name: "Airbnb", url: "https://www.airbnb.com/s/New-Delhi--India", features: ["Unique spaces", "Long-term stays", "Local experiences"] },
          { name: "Treebo", url: "https://www.treebohotels.com/hotels-in-delhi", features: ["Indian chain", "Consistent quality", "Good locations"] }
        ],
        monthlyOptions: [
          { type: "PG accommodations", price: "₹6000-12000/month ($72-144)", includes: "Meals, utilities, basic amenities" },
          { type: "Co-living", price: "₹10000-20000/month ($120-240)", includes: "Furnished rooms, community, events" },
          { type: "Studio apartments", price: "₹15000-30000/month ($180-360)", includes: "Independent living, kitchen" }
        ]
      }
    };

    // Convert city slug to match our data keys
    const cityLower = citySlug.toLowerCase().replace(/\s+/g, '-');
    
    const defaultAccommodation = {
      hostels: [
        { name: "Local Budget Hostel", area: "City center", price: "₹500-800/night ($6-10)", rating: 3.8, amenities: ["WiFi", "Kitchen", "Common area"] }
      ],
      platforms: [
        { name: "Booking.com", url: "https://www.booking.com/", features: ["Wide selection", "Free cancellation", "Reviews"] },
        { name: "Agoda", url: "https://www.agoda.com/", features: ["Best prices", "Easy booking", "Local partnerships"] },
        { name: "Airbnb", url: "https://www.airbnb.com/", features: ["Unique stays", "Local experiences", "Monthly discounts"] }
      ],
      monthlyOptions: [
        { type: "Local PG", price: "₹6000-12000/month ($72-144)", includes: "Basic amenities, local community" }
      ]
    };

    const data = accommodationData[cityLower] || defaultAccommodation;

    return (
      <div>
        {/* Hostels */}
        <div className="mb-6">
          <h4 className="font-semibold text-vintage-gold mb-3">Popular Hostels & Budget Stays</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.hostels.map((hostel, index) => (
              <div key={index} className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    {hostel.bookingUrl ? (
                      <a 
                        href={hostel.bookingUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-travel-blue hover:text-vintage-gold flex items-center"
                      >
                        {hostel.name}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    ) : (
                      <h5 className="font-semibold text-travel-blue">{hostel.name}</h5>
                    )}
                    <p className="text-sm text-muted-navy">{hostel.area}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-vintage-gold">{hostel.price}</div>
                    <div className="text-xs text-muted-navy">⭐ {hostel.rating}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {hostel.amenities.map((amenity, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-sage-green/10 text-sage-green">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Platforms */}
        <div className="mb-6">
          <h4 className="font-semibold text-vintage-gold mb-3">Best Booking Platforms</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {data.platforms.map((platform, index) => (
              <div key={index} className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
                <div className="flex items-center justify-between mb-2">
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-sage-green hover:text-vintage-gold flex items-center"
                  >
                    {platform.name}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
                <ul className="text-sm text-muted-navy space-y-1">
                  {platform.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Options */}
        <div className="mb-6">
          <h4 className="font-semibold text-vintage-gold mb-3">Monthly Stay Options</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.monthlyOptions.map((option, index) => (
              <div key={index} className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
                <h5 className="font-semibold text-vintage-gold mb-2">{option.type}</h5>
                <div className="font-bold text-travel-blue mb-2">{option.price}</div>
                <p className="text-sm text-muted-navy">{option.includes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Tips */}
        <div className="bg-travel-blue/5 rounded-lg p-4 border-l-4 border-travel-blue">
          <h4 className="font-semibold text-travel-blue mb-2">💡 Smart Booking Tips</h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            <li>• Book 3-7 days ahead for better hostel rates and availability</li>
            <li>• Use Agoda for Asia-focused deals and local partnerships</li>
            <li>• Booking.com offers best cancellation policies for uncertain travel plans</li>
            <li>• Airbnb gives 20-50% monthly discounts for stays over 28 days</li>
            <li>• Contact hostels directly for weekly/monthly rates not shown online</li>
            <li>• Join nomad Facebook groups for sublet opportunities and local recommendations</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <DollarSign className="mr-3 h-8 w-8 text-vintage-gold" />
          Cost of Living Breakdown
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Comprehensive monthly expenses with real-time currency conversion and external data verification.
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-navy mt-4">
          <div className="flex items-center">
            <RefreshCw className="h-3 w-3 mr-1" />
            Exchange rate: 1 USD = ₹{Math.round(1/exchangeRate)}
          </div>
          <Badge variant="secondary" className="bg-sage-green/10 text-sage-green">
            {currencyData?.source === "live" ? "Live rates" : "Estimated rates"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Summary */}
        <div className="bg-gradient-to-r from-vintage-gold/10 to-travel-blue/10 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Monthly Budget</h3>
              <div className="text-3xl font-bold text-vintage-gold">₹{costData.monthlyBudgetINR.toLocaleString()}</div>
              <div className="text-sm text-muted-navy">${costData.monthlyBudgetUSD} USD</div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-travel-blue mb-2">Daily Average</h3>
              <div className="text-3xl font-bold text-travel-blue">₹{Math.round(costData.monthlyBudgetINR / 30).toLocaleString()}</div>
              <div className="text-sm text-muted-navy">${Math.round(costData.monthlyBudgetUSD / 30)} USD</div>
            </div>
          </div>
        </div>

        {/* Housing Costs */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Housing (Monthly Rent)
          </h3>
          <div className="grid gap-4">
            {categories.Housing.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-travel-blue">{item.label}</span>
                  <div className="text-right">
                    <div className="font-bold text-travel-blue">
                      {item.valueINR ? `₹${item.valueINR.toLocaleString()}` : 'N/A'}
                    </div>
                    <div className="text-sm text-muted-navy">
                      {item.valueUSD ? `$${item.valueUSD}` : ''}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-navy">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Expenses */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <DollarSign className="mr-2 h-5 w-5" />
            Monthly Expenses
          </h3>
          <div className="grid gap-4">
            {categories.Monthly.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-vintage-gold" />
                    <span className="font-medium text-travel-blue">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-travel-blue">
                      {item.valueINR ? `₹${item.valueINR.toLocaleString()}` : 'N/A'}
                    </div>
                    <div className="text-sm text-muted-navy">
                      {item.valueUSD ? `$${item.valueUSD}` : ''}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-navy">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Per-Item Costs */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4">Per-Item Costs</h3>
          <div className="grid gap-4">
            {categories["Per Item"].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4 text-vintage-gold" />
                    <span className="font-medium text-travel-blue">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-travel-blue">
                      {item.valueINR ? `₹${item.valueINR}` : 'N/A'}
                    </div>
                    <div className="text-sm text-muted-navy">
                      {item.valueUSD ? `$${item.valueUSD}` : ''}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-navy">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Food Cost Breakdown */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4">🍽️ Food Price Guide</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Street Food</h4>
              <div className="space-y-1 text-sm">
                {cityData?.streetFood && cityData.streetFood.length > 0 ? (
                  cityData.streetFood.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.item}</span>
                      <span>{item.price}</span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span>Local Specialty</span>
                      <span>₹40-80 ($0.50-1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Street Snacks</span>
                      <span>₹20-50 ($0.25-0.60)</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">Mid-Range</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Restaurant Meal</span>
                  <span>₹200-400 ($2.5-5)</span>
                </div>
                <div className="flex justify-between">
                  <span>Pizza</span>
                  <span>₹300-600 ($4-7)</span>
                </div>
                <div className="flex justify-between">
                  <span>Cafe Meal</span>
                  <span>₹250-500 ($3-6)</span>
                </div>
              </div>
            </div>
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">Fine Dining</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Multi-course</span>
                  <span>₹800-1500 ($10-18)</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel Restaurant</span>
                  <span>₹600-1200 ($7-15)</span>
                </div>
                <div className="flex justify-between">
                  <span>International</span>
                  <span>₹700-1400 ($8-17)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Money Saving Tips */}
        <div className="bg-sage-green/5 rounded-lg p-4 border-l-4 border-sage-green">
          <h4 className="font-semibold text-sage-green mb-2">💡 Smart Money Tips for Digital Nomads</h4>
          <ul className="space-y-1 text-muted-navy text-sm">
            {cityData?.moneyTips && cityData.moneyTips.length > 0 ? (
              cityData.moneyTips.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))
            ) : (
              <>
                <li>• Cook at home to save 40-50% on food costs</li>
                <li>• Use local transport instead of ride-hailing for daily commute</li>
                <li>• Share coworking spaces or find day passes for flexibility</li>
                <li>• Buy groceries from local markets instead of supermarkets</li>
                <li>• Look for PG accommodations if staying long-term</li>
              </>
            )}
          </ul>
        </div>

        {/* Digital Nomad Accommodation */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Home className="mr-2 h-5 w-5" />
            🏨 Digital Nomad Accommodation
          </h3>
          {getCitySpecificAccommodation()}
        </div>

        {/* External Data Sources & Verification */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <ExternalLink className="mr-2 h-5 w-5" />
            📊 Data Sources & Verification
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Cost of Living Databases</h4>
              <div className="space-y-2 text-sm">
                <a href="https://www.numbeo.com/cost-of-living/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Numbeo - Global cost comparison
                </a>
                <a href="https://www.livingcost.org/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  LivingCost.org - City comparisons
                </a>
                <a href="https://www.expatistan.com/cost-of-living" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Expatistan - Expat cost data
                </a>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Currency & Financial</h4>
              <div className="space-y-2 text-sm">
                <a href="https://xe.com/currencyconverter/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  XE.com - Live exchange rates
                </a>
                <a href="https://wise.com/us/currency-converter/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Wise - Real exchange rates
                </a>
                <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  RBI - Official rates (India)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Planning Tools */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            💰 Budget Planning & Cost Optimization
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">Budget Nomad</h4>
              <div className="space-y-1 text-sm text-muted-navy">
                <div>Housing: ₹8,000-15,000 ($96-180)</div>
                <div>Food: ₹4,000-6,000 ($48-72)</div>
                <div>Transport: ₹1,500-2,500 ($18-30)</div>
                <div>Misc: ₹2,000-3,000 ($24-36)</div>
                <div className="font-semibold pt-1 border-t">Total: ₹15,500-26,500 ($186-318)</div>
              </div>
            </div>
            
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">Comfort Nomad</h4>
              <div className="space-y-1 text-sm text-muted-navy">
                <div>Housing: ₹20,000-35,000 ($240-420)</div>
                <div>Food: ₹8,000-12,000 ($96-144)</div>
                <div>Transport: ₹3,000-5,000 ($36-60)</div>
                <div>Misc: ₹5,000-8,000 ($60-96)</div>
                <div className="font-semibold pt-1 border-t">Total: ₹36,000-60,000 ($432-720)</div>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">Luxury Nomad</h4>
              <div className="space-y-1 text-sm text-muted-navy">
                <div>Housing: ₹50,000-80,000 ($600-960)</div>
                <div>Food: ₹15,000-25,000 ($180-300)</div>
                <div>Transport: ₹8,000-12,000 ($96-144)</div>
                <div>Misc: ₹10,000-15,000 ($120-180)</div>
                <div className="font-semibold pt-1 border-t">Total: ₹83,000-132,000 ($996-1,584)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Money-Saving Tips */}
        <div className="bg-vintage-gold/5 rounded-lg p-4 border-l-4 border-vintage-gold">
          <h4 className="font-semibold text-vintage-gold mb-2 flex items-center">
            <TrendingUp className="mr-2 h-4 w-4" />
            Smart Money Tips for Nomads
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-navy">
            <ul className="space-y-1">
              <li>• Use UPI payments for 1-5% cashback on most transactions</li>
              <li>• Buy monthly groceries from wholesale markets for 30% savings</li>
              <li>• Share accommodation with other nomads to split costs</li>
              <li>• Use local transport apps (BMTC, Delhi Metro) for route optimization</li>
              <li>• Cook 60% of meals, eat out 40% for balanced budget</li>
            </ul>
            <ul className="space-y-1">
              <li>• Get annual gym memberships during festival sales (50% off)</li>
              <li>• Use coworking day passes initially, then upgrade to monthly</li>
              <li>• Book accommodations 2-3 km from city center for lower rent</li>
              <li>• Use forex cards for international transactions (better rates)</li>
              <li>• Join nomad groups for group discounts on activities and transport</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
