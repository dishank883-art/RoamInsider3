import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, DollarSign, MapPin, ExternalLink, Coffee, Car, Shield, Smartphone } from "lucide-react";

interface CityHacks {
  moneyHacks: {
    accommodation: string[];
    food: string[];
    transport: string[];
  };
  secretSpots: Array<{
    name: string;
    location: string;
    tip: string;
    timing?: string;
    coordinates?: string;
    website?: string;
  }>;
  apps: Array<{
    name: string;
    description: string;
    url: string;
  }>;
  emergencyNumbers: Array<{
    label: string;
    number: string;
  }>;
}

interface Props {
  city: {
    name: string;
  };
}

export default function InsiderHacksCitySpecific({ city }: Props) {
  const getCitySpecificHacks = (cityName: string): CityHacks => {
    const hacksByCity: Record<string, CityHacks> = {
      "Tosh": {
        moneyHacks: {
          accommodation: [
            "Stay in family guesthouses for ₹500-1000/night vs expensive hotels in Kasol",
            "Book monthly stays with local families for ₹8000-15000 including meals",
            "Share rooms with fellow trekkers to split costs during peak season",
            "Camp at designated spots for ₹200-300/night with basic facilities",
            "Negotiate off-season rates (Nov-Feb) for 50% discounts"
          ],
          food: [
            "Eat at local dhabas for ₹80-150 vs ₹300+ at tourist restaurants",
            "Buy groceries from Kasol and cook in guesthouse kitchens",
            "Try traditional Himachali meals with host families for ₹150-250",
            "Pack dry fruits and energy bars from Delhi for trekking (much cheaper)",
            "Join community meals during festivals for cultural experience"
          ],
          transport: [
            "Take shared taxis from Kasol (₹50) vs private taxi (₹500)",
            "Walk the scenic 3km from Kasol to Tosh for free vs ₹300 taxi",
            "Share helicopter costs from Bhuntar with other travelers",
            "Book Delhi-Bhuntar flights 2 months early for 60% discounts",
            "Use local buses to Bhuntar airport (₹100) vs ₹1500 taxi"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Valley Viewpoint",
            location: "30 mins trek above village",
            tip: "Stunning Parvati Valley views without crowds, perfect for sunrise meditation",
            coordinates: "32.2494°N, 77.3410°E",
            timing: "Early morning for best views"
          },
          {
            name: "Secret Workspace",
            location: "Tosh Village Café upper floor",
            tip: "Quiet workspace with valley views and reliable WiFi, order coffee to access",
            timing: "9 AM - 6 PM"
          },
          {
            name: "Local Hot Springs",
            location: "1 hour trek towards Pulga",
            tip: "Natural hot springs known only to locals, free alternative to paid spas",
            coordinates: "32.2505°N, 77.3425°E"
          },
          {
            name: "Traditional Bazaar",
            location: "Behind main village temple",
            tip: "Local handicrafts at wholesale prices, authentic Kullu caps for ₹150 vs ₹500 in tourist areas",
            timing: "7 AM - 11 AM for best selection"
          }
        ],
        apps: [
          { name: "Himachal Weather", description: "Real-time weather for trekking conditions", url: "Local weather apps" },
          { name: "Parvati Valley Connect", description: "Local community and event updates", url: "Community platforms" },
          { name: "Trek Safe HP", description: "Emergency contacts and trek permits", url: "Himachal Tourism apps" },
          { name: "Local Transport", description: "Shared taxi timings and bookings", url: "Regional transport apps" }
        ],
        emergencyNumbers: [
          { label: "Tosh Police Post", number: "01902-273016" },
          { label: "Kasol Police Station", number: "01902-273008" },
          { label: "Tourist Helpline HP", number: "1363" },
          { label: "Emergency Medical", number: "108" },
          { label: "Forest Department", number: "01902-273020" }
        ]
      },
      "Rishikesh": {
        moneyHacks: {
          accommodation: [
            "Stay in ashrams for ₹300-800/night including simple meals",
            "Book river-side guesthouses in Tapovan area for authentic experience at 40% less cost",
            "Share yoga retreat accommodations with other practitioners",
            "Camp at designated sites near Ganges for ₹200-400/night",
            "Book monthly yoga teacher training stays for massive discounts"
          ],
          food: [
            "Eat at ashram langar halls for ₹50-100 pure vegetarian meals",
            "Visit local sabzi mandi for fresh produce vs expensive cafés",
            "Try street food at Ram Jhula area for authentic flavors under ₹100",
            "Cook with fellow travelers in shared kitchen accommodations",
            "Join satsang meals at various ashrams for free community dining"
          ],
          transport: [
            "Use shared tempos for ₹10-20 local rides vs ₹100+ rickshaws",
            "Rent bicycles for ₹100/day to explore both sides of Ganges",
            "Walk across Ram Jhula and Laxman Jhula for free river crossing",
            "Share taxis to Haridwar airport with other travelers (₹200 vs ₹800)",
            "Use UPSRTC buses to Delhi for ₹300 vs ₹1500+ private buses"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Beach at Byasi",
            location: "15 mins from Laxman Jhula",
            tip: "Peaceful Ganges beach away from crowds, perfect for meditation and digital detox",
            coordinates: "30.1265°N, 78.3106°E",
            timing: "Early morning or evening"
          },
          {
            name: "Secret Café with WiFi",
            location: "Tapovan backstreets",
            tip: "Local café with fast internet and mountain views, ₹50 coffee minimum",
            timing: "8 AM - 10 PM"
          },
          {
            name: "Free Yoga Classes",
            location: "Parmarth Niketan Ashram",
            tip: "Daily free yoga sessions at 6 AM, just show up 15 mins early",
            timing: "6:00 AM - 7:30 AM daily"
          },
          {
            name: "Ganges Sunrise Spot",
            location: "Behind Parmarth Niketan",
            tip: "Best sunrise views over Ganges without tourist crowds, bring your own chai",
            timing: "5:30 AM - 7:00 AM"
          }
        ],
        apps: [
          { name: "Rishikesh Connect", description: "Local events and yoga class schedules", url: "Community platforms" },
          { name: "Ganges Flow", description: "River levels and safe bathing spots", url: "Safety apps" },
          { name: "Yoga Finder", description: "Authentic yoga teachers and ashrams", url: "Spiritual practice apps" },
          { name: "Uttarakhand Tourism", description: "Official state tourism and permits", url: "https://uttarakhandtourism.gov.in/" }
        ],
        emergencyNumbers: [
          { label: "Rishikesh Police", number: "0135-2430226" },
          { label: "Tourist Police", number: "0135-2431793" },
          { label: "Medical Emergency", number: "108" },
          { label: "AIIMS Rishikesh", number: "0135-2462000" },
          { label: "Ganges Rescue Team", number: "0135-2430100" }
        ]
      },
      "Pondicherry": {
        moneyHacks: {
          accommodation: [
            "Stay in Tamil Quarter for ₹800-1500/night vs ₹3000+ in French Quarter",
            "Book monthly stays in local neighborhoods for ₹15000-25000",
            "Share beachfront villas with other nomads to split costs",
            "Stay in Auroville guesthouses for spiritual community experience",
            "Negotiate off-season rates during monsoon for 50% discounts"
          ],
          food: [
            "Eat at local Tamil restaurants for ₹100-200 vs ₹500+ at French cafés",
            "Shop at Gandhi Market for fresh produce and local ingredients",
            "Try street food at Goubert Market for authentic flavors under ₹150",
            "Cook with Mediterranean ingredients from Nilgiris at 30% less cost",
            "Join Auroville community meals for multicultural dining experience"
          ],
          transport: [
            "Rent scooters monthly for ₹2000-3000 vs ₹300/day",
            "Use local buses for ₹10-20 rides vs ₹100+ auto-rickshaws",
            "Cycle around White Town and Rock Beach for free exploration",
            "Share taxis to Chennai airport with fellow travelers (₹500 vs ₹2000)",
            "Walk the compact French Quarter to save on local transport"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Beach at Chunnambar",
            location: "8 km from city center",
            tip: "Pristine beach with backwater boat rides, locals pay ₹20 vs ₹200 for tourists",
            coordinates: "11.9416°N, 79.8083°E",
            timing: "Early morning or late evening"
          },
          {
            name: "Secret Coworking Space",
            location: "Mission Street Tamil Quarter",
            tip: "Local library with WiFi and AC, ₹50/day vs ₹500 at fancy co-working",
            timing: "9 AM - 8 PM, closed Sundays"
          },
          {
            name: "Rooftop Café",
            location: "Above Heritage Walk area",
            tip: "Best city views and French architecture photos, ₹100 coffee minimum",
            timing: "Sunset hours 5-7 PM"
          },
          {
            name: "Local Art Studios",
            location: "Bharathi Street backalleys",
            tip: "Watch traditional crafts being made, buy directly from artisans at 60% less",
            timing: "10 AM - 6 PM weekdays"
          }
        ],
        apps: [
          { name: "Pondy Connect", description: "Local events and community updates", url: "Community platforms" },
          { name: "Auroville Today", description: "Spiritual community events and workshops", url: "Auroville apps" },
          { name: "TN Tourism", description: "Tamil Nadu tourism and cultural events", url: "https://www.tamilnadutourism.org/" },
          { name: "French Heritage", description: "Historical sites and guided tour info", url: "Heritage apps" }
        ],
        emergencyNumbers: [
          { label: "Pondicherry Police", number: "0413-2339999" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Medical Emergency", number: "108" },
          { label: "JIPMER Hospital", number: "0413-2296000" },
          { label: "French Consulate", number: "0413-2334510" }
        ]
      },
      "Kochi": {
        moneyHacks: {
          accommodation: [
            "Stay in Fort Kochi homestays for ₹1000-2000/night vs ₹4000+ hotels",
            "Book monthly stays in Mattancherry for authentic local experience",
            "Share houseboats with other travelers during off-season",
            "Stay in backpacker hostels in Ernakulam for ₹500-800/night",
            "Negotiate long-term rates with local families in residential areas"
          ],
          food: [
            "Eat at local fish curry meals for ₹80-150 vs ₹400+ at tourist restaurants",
            "Buy fresh seafood at Broadway Market for 50% less than restaurant prices",
            "Try street food at Marine Drive for authentic Kerala flavors under ₹100",
            "Cook with coconut oil and spices from spice markets",
            "Join Syrian Christian family meals for traditional appam and stew"
          ],
          transport: [
            "Use KSRTC buses for ₹15-30 rides vs ₹200+ auto-rickshaws",
            "Take ferry rides for ₹4-8 vs ₹300+ private boats",
            "Rent scooters monthly for ₹2500-3500 vs ₹250/day",
            "Walk through Fort Kochi and Mattancherry to explore heritage areas",
            "Share taxis to Cochin airport from Ernakulam (₹150 vs ₹600)"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Spice Warehouse",
            location: "Jew Town backstreets",
            tip: "Buy authentic spices at wholesale prices, cardamom ₹800/kg vs ₹1500 retail",
            coordinates: "9.9579°N, 76.2577°E",
            timing: "9 AM - 6 PM weekdays"
          },
          {
            name: "Secret Sunset Point",
            location: "Vypeen Island northern tip",
            tip: "Best Arabian Sea sunset views without crowds, take local ferry for ₹8",
            timing: "6 PM - 7:30 PM"
          },
          {
            name: "Local Art Collective",
            location: "Mattancherry warehouse district",
            tip: "Contemporary Kerala art at artist prices, meet local creators",
            timing: "Afternoons 2-6 PM"
          },
          {
            name: "Fishermen's Beach",
            location: "Behind Chinese fishing nets",
            tip: "Watch fishermen at work, buy fresh catch at source prices",
            timing: "Early morning 5-8 AM"
          }
        ],
        apps: [
          { name: "Kochi Connect", description: "Local events and cultural programs", url: "Community platforms" },
          { name: "Kerala Spices", description: "Authentic spice shop locations and prices", url: "Shopping apps" },
          { name: "Backwaters Info", description: "Ferry schedules and houseboat bookings", url: "Transport apps" },
          { name: "Kerala Tourism", description: "Official state tourism information", url: "https://www.keralatourism.org/" }
        ],
        emergencyNumbers: [
          { label: "Kochi Police", number: "0484-2360100" },
          { label: "Tourist Police", number: "0484-2371018" },
          { label: "Medical Emergency", number: "108" },
          { label: "Ernakulam General Hospital", number: "0484-2381001" },
          { label: "Port Authority", number: "0484-2666001" }
        ]
      },
      "Wayanad": {
        moneyHacks: {
          accommodation: [
            "Stay in tribal homestays for ₹800-1500/night including traditional meals",
            "Book plantation stays during coffee harvest season for authentic experience",
            "Share treehouse accommodations with fellow nature lovers",
            "Camp at designated forest areas for ₹300-500/night with permits",
            "Negotiate off-season rates during monsoon for 60% discounts"
          ],
          food: [
            "Eat at local tribal restaurants for ₹100-200 vs ₹500+ at resorts",
            "Buy fresh spices and coffee directly from plantations at source prices",
            "Try traditional meals with local families for authentic Wayanad cuisine",
            "Shop at weekly farmers markets for organic produce",
            "Join community feast during local festivals for cultural experience"
          ],
          transport: [
            "Use KSRTC buses for ₹20-50 rides vs ₹300+ private taxis",
            "Rent jeeps for group travel to split costs for remote areas",
            "Trek to waterfalls and viewpoints for free vs paid guided tours",
            "Share safari costs at Wayanad Wildlife Sanctuary",
            "Use local auto-rickshaws for short distances at negotiated rates"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Waterfall",
            location: "Behind Meenmutty Falls",
            tip: "Secret waterfall pool accessible via 2-hour trek, known only to locals",
            coordinates: "11.5364°N, 76.1810°E",
            timing: "Post-monsoon Sep-Nov for best flow"
          },
          {
            name: "Tribal Art Workshop",
            location: "Wayanad Heritage Museum vicinity",
            tip: "Learn traditional crafts directly from tribal artisans, buy authentic pieces",
            timing: "Weekday mornings 9-12 PM"
          },
          {
            name: "Coffee Plantation Stay",
            location: "Vythiri-Lakkidi road",
            tip: "Stay with plantation families during harvest, learn coffee processing",
            timing: "Dec-Mar harvest season"
          },
          {
            name: "Wildlife Spotting Point",
            location: "Tholpetty Range border",
            tip: "Early morning elephant spotting location without safari costs",
            timing: "5:30-7:30 AM"
          }
        ],
        apps: [
          { name: "Wayanad Wild", description: "Wildlife sanctuary info and permits", url: "Forest department apps" },
          { name: "Plantation Connect", description: "Coffee and spice plantation tours", url: "Agro-tourism apps" },
          { name: "Tribal Heritage", description: "Local tribal culture and craft information", url: "Cultural apps" },
          { name: "Kerala Tourism", description: "Official state tourism and trekking permits", url: "https://www.keralatourism.org/" }
        ],
        emergencyNumbers: [
          { label: "Wayanad Police", number: "04936-202442" },
          { label: "Forest Department", number: "04936-202026" },
          { label: "Medical Emergency", number: "108" },
          { label: "District Hospital", number: "04936-202018" },
          { label: "Wildlife Rescue", number: "04936-202020" }
        ]
      },
      "Dharamkot": {
        moneyHacks: {
          accommodation: [
            "Stay in meditation retreat centers for ₹300-800/night including meals",
            "Book monthly stays with local Tibetan families for cultural immersion",
            "Share rooms in backpacker guesthouses to split costs during peak season",
            "Camp at designated spots near Triund for ₹200-400/night",
            "Negotiate off-season rates (Dec-Feb) for 50% discounts"
          ],
          food: [
            "Eat at local Tibetan momos stalls for ₹50-100 vs ₹250+ at cafés",
            "Buy groceries from McLeod Ganj market and cook in shared kitchens",
            "Try traditional Tibetan meals with host families for ₹150-300",
            "Join community kitchens at meditation centers for free meals",
            "Shop at Sunday bazaar for fresh vegetables and local produce"
          ],
          transport: [
            "Walk to McLeod Ganj in 30 minutes downhill for free vs ₹100 taxi",
            "Use local buses to Dharamshala for ₹20 vs ₹200+ private taxi",
            "Trek to nearby viewpoints and waterfalls instead of paid tours",
            "Share jeep costs to Triund base camp with fellow trekkers",
            "Rent bicycles for exploring nearby villages at ₹100/day"
          ]
        },
        secretSpots: [
          {
            name: "Secret Meditation Cave",
            location: "30 mins trek above village",
            tip: "Ancient meditation cave with panoramic valley views, used by serious practitioners",
            coordinates: "32.2361°N, 76.3252°E",
            timing: "Early morning 5-8 AM for best energy"
          },
          {
            name: "Hidden Café",
            location: "Upper Dharamkot forest area",
            tip: "Local family-run café with authentic Tibetan food and mountain views",
            timing: "9 AM - 6 PM, closed Tuesdays"
          },
          {
            name: "Waterfall Pool",
            location: "Behind Dharamkot village",
            tip: "Natural swimming pool fed by mountain stream, known only to locals",
            timing: "Afternoon for warmer water"
          },
          {
            name: "Sunset Point",
            location: "Village temple hill",
            tip: "Best Kangra valley sunset views without Triund trek crowds",
            timing: "6-7:30 PM depending on season"
          }
        ],
        apps: [
          { name: "Dharamshala Connect", description: "Local Tibetan community events", url: "Community platforms" },
          { name: "Trek HP", description: "Himalayan trekking routes and weather", url: "Trekking apps" },
          { name: "Tibet Info", description: "Tibetan cultural programs and teachings", url: "Cultural apps" },
          { name: "Himachal Tourism", description: "Official state tourism information", url: "https://himachaltourism.gov.in/" }
        ],
        emergencyNumbers: [
          { label: "Dharamkot Police Post", number: "01892-221100" },
          { label: "McLeod Ganj Police", number: "01892-221100" },
          { label: "Medical Emergency", number: "108" },
          { label: "Tibetan Hospital", number: "01892-222053" },
          { label: "Tourist Helpline", number: "1363" }
        ]
      },
      "Darjeeling": {
        moneyHacks: {
          accommodation: [
            "Stay in local Nepali homestays for ₹600-1200/night with traditional meals",
            "Book tea estate guesthouses during plucking season for authentic experience",
            "Share rooms in backpacker areas like Chowrasta and Mall Road",
            "Stay in monastery guesthouses for spiritual experience at ₹400-800/night",
            "Negotiate off-season rates during monsoon for 50% discounts"
          ],
          food: [
            "Eat at local momo joints for ₹60-120 vs ₹300+ at tourist restaurants",
            "Buy fresh tea directly from estate workers at 60% below retail prices",
            "Try traditional Nepali meals with local families for ₹150-250",
            "Shop at Chowk Bazaar for spices and local ingredients",
            "Join monastery meal services for simple vegetarian food"
          ],
          transport: [
            "Use shared jeeps for ₹30-50 local rides vs ₹300+ private taxis",
            "Walk on beautiful mountain trails instead of taking taxis",
            "Take toy train during off-peak hours for better rates and fewer crowds",
            "Share costs for sunrise trips to Tiger Hill with other travelers",
            "Use local buses to Siliguri for ₹100 vs ₹800+ private taxi"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Tea Garden",
            location: "Behind Happy Valley Estate",
            tip: "Work with tea pickers during harvest season, learn process and get free tea",
            coordinates: "27.0238°N, 88.2663°E",
            timing: "Early morning 5-8 AM during plucking season"
          },
          {
            name: "Secret Viewpoint",
            location: "Observatory Hill backside",
            tip: "Better Kanchenjunga views than crowded Tiger Hill, 30-min walk from Mall Road",
            timing: "Sunrise 5-7 AM for clear views"
          },
          {
            name: "Local Monastery",
            location: "Ghoom monastery side hills",
            tip: "Quiet meditation spot with valley views, participate in morning prayers",
            timing: "6 AM prayer sessions"
          },
          {
            name: "Artisan Workshop",
            location: "Lower Chowk Bazaar",
            tip: "Traditional handicrafts at wholesale prices, meet local woodworkers",
            timing: "Weekday afternoons 2-6 PM"
          }
        ],
        apps: [
          { name: "Darjeeling Connect", description: "Local events and cultural programs", url: "Community platforms" },
          { name: "Tea Garden Tours", description: "Estate visits and tea tasting sessions", url: "Tourism apps" },
          { name: "Himalayan Weather", description: "Mountain weather and visibility forecasts", url: "Weather apps" },
          { name: "WB Tourism", description: "West Bengal tourism and permits", url: "https://www.wbtourism.gov.in/" }
        ],
        emergencyNumbers: [
          { label: "Darjeeling Police", number: "0354-2254336" },
          { label: "Tourist Police", number: "0354-2257016" },
          { label: "Medical Emergency", number: "108" },
          { label: "Planters Hospital", number: "0354-2254327" },
          { label: "Mountain Rescue", number: "0354-2254100" }
        ]
      },
      "Goa": {
        moneyHacks: {
          accommodation: [
            "Book monthly stays directly with property owners via Facebook groups for 40-60% discounts",
            "Stay in Arambol/Ashwem instead of Baga/Calangute for 50% cheaper accommodation",
            "House-sit for expats during Apr-Oct off-season for free accommodation",
            "Share beach houses with 4-6 nomads to split costs (₹3,000-5,000/month per person)",
            "Book homestays through Airbnb alternatives like StayVista for better rates"
          ],
          food: [
            "Eat at local 'fish curry rice' joints for ₹80-120 vs ₹400+ at beach shacks",
            "Buy seafood directly from fishermen at Chapora/Anjuna fish market (60% cheaper)",
            "Use Zomato Pro for unlimited free deliveries and restaurant discounts",
            "Shop at municipal markets (Mapusa, Margao) instead of tourist areas",
            "Attend Saturday Night Market for free tastings and samples"
          ],
          transport: [
            "Rent monthly scooters for ₹2,500-3,500 vs ₹300-500/day rentals",
            "Use KTC bus passes for unlimited travel across Goa (₹150/month)",
            "Share taxis to Mumbai/Pune airports with other nomads (₹800-1,200 per person)",
            "Cycle along coastal roads - many beaches are bikeable distances apart",
            "Use ride-sharing apps during peak season when surge pricing is lower than taxis"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Beach",
            location: "Kakolem Beach (Tiger Beach)",
            tip: "Pristine beach accessible only via 20-min jungle trek from Cabo de Rama",
            coordinates: "15.0892°N, 73.9139°E",
            timing: "Early morning or late afternoon to avoid midday heat"
          },
          {
            name: "Secret Viewpoint",
            location: "Cabo de Rama Fort",
            tip: "Stunning clifftop views and ancient Portuguese fort ruins, perfect for sunset",
            timing: "4-7 PM for golden hour photography"
          },
          {
            name: "Local Feni Distillery",
            location: "Siolim Village",
            tip: "Visit traditional cashew feni makers for authentic tastings and wholesale prices",
            timing: "Contact in advance, usually open 9 AM-6 PM"
          },
          {
            name: "Floating Restaurant",
            location: "Mandovi River backwaters",
            tip: "Local fisherman's boat restaurant with fresh catch, no tourist markup",
            timing: "Best during sunset cruise hours 5-8 PM"
          }
        ],
        apps: [
          { name: "Goa Miles", description: "Ride-sharing specifically for Goa with better local rates", url: "https://goamiles.com" },
          { name: "Beach Please", description: "Real-time beach conditions, shack recommendations, and weather", url: "Local beach apps" },
          { name: "Goa Tourism Official", description: "Government tourism info, permits, and authentic experiences", url: "https://www.goatourism.gov.in/" },
          { name: "Nomad Goa", description: "Digital nomad community events and co-working spaces", url: "Community platforms" }
        ],
        emergencyNumbers: [
          { label: "Goa Police Helpline", number: "0832-2420000" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Ambulance", number: "108" },
          { label: "Fire Brigade", number: "101" },
          { label: "Women's Helpline", number: "1091" }
        ]
      }
    };

    return hacksByCity[cityName] || hacksByCity["Goa"];
  };

  const cityHacks = getCitySpecificHacks(city.name);

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Lightbulb className="mr-3 h-8 w-8 text-vintage-gold" />
          Insider Hacks & Local Secrets
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Exclusive money-saving secrets, hidden gems, and local knowledge that only long-term residents and smart nomads know about {city.name}.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Money-Saving Hacks */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-6 flex items-center">
            <DollarSign className="mr-2 h-5 w-5" />
            💰 Money-Saving Hacks
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-3 flex items-center">
                <DollarSign className="mr-2 h-4 w-4" />
                Accommodation Savings
              </h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {cityHacks.moneyHacks.accommodation.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3 flex items-center">
                <Coffee className="mr-2 h-4 w-4" />
                Food & Dining
              </h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {cityHacks.moneyHacks.food.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3 flex items-center">
                <Car className="mr-2 h-4 w-4" />
                Transport Hacks
              </h4>
              <ul className="space-y-2 text-sm text-muted-navy">
                {cityHacks.moneyHacks.transport.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Secret Spots & Hidden Gems */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-6 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            🗺️ Secret Spots & Hidden Gems
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cityHacks.secretSpots.map((spot, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-travel-blue">{spot.name}</h4>
                  <Badge variant="secondary" className="bg-vintage-gold/10 text-vintage-gold">
                    {spot.location}
                  </Badge>
                </div>
                <p className="text-sm text-muted-navy mb-3">{spot.tip}</p>
                <div className="flex items-center justify-between text-xs text-muted-navy">
                  {spot.coordinates && (
                    <span className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {spot.coordinates}
                    </span>
                  )}
                  {spot.timing && (
                    <span className="text-sage-green">
                      {spot.timing}
                    </span>
                  )}
                </div>
                {spot.website && (
                  <a href={spot.website} target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-travel-blue hover:underline text-xs mt-2">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Essential Apps & Tools */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-6 flex items-center">
            <Smartphone className="mr-2 h-5 w-5" />
            📱 Essential Apps & Tools
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cityHacks.apps.map((app, index) => (
              <div key={index} className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
                <h4 className="font-semibold text-travel-blue mb-2">{app.name}</h4>
                <p className="text-xs text-muted-navy mb-3">{app.description}</p>
                <a href={app.url} target="_blank" rel="noopener noreferrer" 
                   className="inline-flex items-center text-vintage-gold hover:underline text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Get App
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-6 flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            🚨 Emergency Contacts & Safety
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cityHacks.emergencyNumbers.map((contact, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 className="font-semibold text-red-800 mb-1 text-sm">{contact.label}</h4>
                <a href={`tel:${contact.number}`} className="text-red-600 font-mono text-sm hover:underline">
                  {contact.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}