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
          { name: "Himachal Weather", description: "Real-time weather for trekking conditions", url: "https://play.google.com/store/apps/details?id=com.imd.weather" },
          { name: "Parvati Valley Connect", description: "Local community and event updates", url: "https://www.facebook.com/groups/parvativallycommunity" },
          { name: "Trek Safe HP", description: "Emergency contacts and trek permits", url: "https://himachaltourism.gov.in/" },
          { name: "Local Transport", description: "Shared taxi timings and bookings", url: "https://play.google.com/store/apps/details?id=com.redbus.android" }
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
          { name: "Rishikesh Connect", description: "Local events and yoga class schedules", url: "https://www.facebook.com/groups/rishikeshcommunity" },
          { name: "Ganges Flow", description: "River levels and safe bathing spots", url: "https://play.google.com/store/apps/details?id=com.imd.riverlevel" },
          { name: "Yoga Finder", description: "Authentic yoga teachers and ashrams", url: "https://www.bookyoga.com/" },
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
          { name: "Pondy Connect", description: "Local events and community updates", url: "https://www.facebook.com/groups/pondicherrycommunity" },
          { name: "Auroville Today", description: "Spiritual community events and workshops", url: "https://www.auroville.org/" },
          { name: "TN Tourism", description: "Tamil Nadu tourism and cultural events", url: "https://www.tamilnadutourism.org/" },
          { name: "French Heritage", description: "Historical sites and guided tour info", url: "https://www.pondytourism.com/" }
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
          { name: "Kochi Connect", description: "Local events and cultural programs", url: "https://www.facebook.com/groups/kochicommunity" },
          { name: "Kerala Spices", description: "Authentic spice shop locations and prices", url: "https://www.keralaspices.com/" },
          { name: "Backwaters Info", description: "Ferry schedules and houseboat bookings", url: "https://www.ktdc.com/" },
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
          { name: "Wayanad Wild", description: "Wildlife sanctuary info and permits", url: "https://www.keralaforestonline.gov.in/" },
          { name: "Plantation Connect", description: "Coffee and spice plantation tours", url: "https://www.wayanadtourism.com/" },
          { name: "Tribal Heritage", description: "Local tribal culture and craft information", url: "https://www.incredibleindia.org/" },
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
          { name: "Dharamshala Connect", description: "Local Tibetan community events", url: "https://www.facebook.com/groups/dharamshalacommunity" },
          { name: "AllTrails", description: "Himalayan trekking routes and weather", url: "https://play.google.com/store/apps/details?id=com.alltrails.alltrails" },
          { name: "Tibet Info", description: "Tibetan cultural programs and teachings", url: "https://www.dalailama.com/" },
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
          { name: "Darjeeling Connect", description: "Local events and cultural programs", url: "https://www.facebook.com/groups/darjeelingcommunity" },
          { name: "Tea Garden Tours", description: "Estate visits and tea tasting sessions", url: "https://www.darjeelingtourism.com/" },
          { name: "Himalayan Weather", description: "Mountain weather and visibility forecasts", url: "https://play.google.com/store/apps/details?id=com.imd.weather" },
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
      "Mumbai": {
        moneyHacks: {
          accommodation: [
            "Stay in PG accommodations in Andheri/Powai for ₹15000-25000/month vs ₹50000+ in South Mumbai",
            "Share flats with working professionals via Facebook groups and FlatMate apps",
            "Book service apartments in Navi Mumbai for modern amenities at 40% less cost",
            "Stay near metro stations (Ghatkopar, Thane) for easy connectivity at budget prices",
            "Use co-living spaces like Zolo/Stanza during monsoon season for better deals"
          ],
          food: [
            "Eat at local Udipi restaurants for ₹100-200 complete meals vs ₹500+ at malls",
            "Shop at Crawford Market for wholesale prices on spices and dry goods",
            "Try street food at Mohammed Ali Road during Ramadan for authentic flavors",
            "Use company canteens in BKC/Lower Parel if you have office access",
            "Join Gujarati/Marwari community meals at local temples for traditional food"
          ],
          transport: [
            "Get monthly local train passes for unlimited travel (₹375 second class)",
            "Use BEST bus passes for comprehensive city coverage at ₹1800/month",
            "Share Uber/Ola rides during peak hours when meter taxis are expensive",
            "Walk between nearby stations during rush hours - often faster than trains",
            "Use Metro One cards for integrated metro-monorail travel discounts"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Café Library",
            location: "Kitab Khana, Fort",
            tip: "Quiet workspace above bookstore with AC and WiFi, ₹200 coffee minimum",
            coordinates: "18.9220°N, 72.8347°E",
            timing: "10 AM - 8 PM, closed Sundays"
          },
          {
            name: "Secret Sunset Spot",
            location: "Worli Fort",
            tip: "Free panoramic city and sea views without Nariman Point crowds",
            timing: "6-7:30 PM for best colors"
          },
          {
            name: "Local Film Screenings",
            location: "Prithvi Theatre Café",
            tip: "Independent films and networking with Mumbai's creative community",
            timing: "Check website for schedules"
          },
          {
            name: "Wholesale Tech Market",
            location: "Lamington Road",
            tip: "Electronics and computer parts at wholesale prices, bargain hard",
            timing: "10 AM - 7 PM weekdays for best deals"
          }
        ],
        apps: [
          { name: "Zomato", description: "Restaurant deals and delivery discounts", url: "https://zomato.com" },
          { name: "BookMyShow", description: "Entertainment and cultural events", url: "https://bookmyshow.com" },
          { name: "RedBus", description: "Bus and train booking platform", url: "https://play.google.com/store/apps/details?id=in.redbus.android" }
        ],
        emergencyNumbers: [
          { label: "Mumbai Police", number: "100" },
          { label: "Traffic Police", number: "103" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "KEM Hospital", number: "022-24135555" },
          { label: "Fire Brigade", number: "101" }
        ]
      },
      "Bangalore": {
        moneyHacks: {
          accommodation: [
            "Stay in tech hubs like Koramangala/BTM Layout for networking and shorter commutes",
            "Book service apartments near metro stations for modern amenities",
            "Share 2-3 BHK flats with IT professionals for ₹15000-25000/month per person",
            "Consider areas like Electronic City/Whitefield for lower rents and startup culture",
            "Use co-living spaces during monsoon (Jun-Sep) for better rates"
          ],
          food: [
            "Eat at Darshini chains for authentic South Indian breakfast at ₹50-100",
            "Shop at Russell Market for fresh produce and spices at wholesale prices",
            "Try local meals at CTR, MTR, and Vidyarthi Bhavan for iconic Bangalore food",
            "Use Swiggy Super for unlimited free deliveries during work-from-home days",
            "Join tech company cafeterias if you have access through friends/colleagues"
          ],
          transport: [
            "Get Namma Metro smart cards for comprehensive city coverage",
            "Use BMTC monthly passes for unlimited bus travel (₹2000/month)",
            "Rent bicycles through Yulu/Bounce for short distances and exercise",
            "Share Ola/Uber rides with colleagues during traffic peak hours",
            "Walk in areas like Brigade Road, Commercial Street for free exploration"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Rooftop Workspace",
            location: "Atta Galatta Bookstore, Koramangala",
            tip: "Quiet workspace above bookstore with book-lined walls and coffee",
            coordinates: "12.9279°N, 77.6271°E",
            timing: "9 AM - 10 PM daily"
          },
          {
            name: "Secret Craft Beer Hub",
            location: "Indiranagar 100 Feet Road",
            tip: "Multiple microbreweries within walking distance, happy hours 4-7 PM",
            timing: "Evening for networking with tech community"
          },
          {
            name: "Startup Networking Hub",
            location: "Koramangala Social",
            tip: "Regular startup meetups and co-working environment, great for connections",
            timing: "Weekday evenings for events"
          },
          {
            name: "Nature Escape",
            location: "Cubbon Park Central Library",
            tip: "Free WiFi, AC, and green surroundings in the heart of city",
            timing: "8 AM - 8 PM, closed Mondays"
          }
        ],
        apps: [
          { name: "Bangalore Metro", description: "Official metro routes and timing", url: "https://english.bmrc.co.in/" },
          { name: "BMTC", description: "Bus routes and live tracking", url: "https://play.google.com/store/apps/details?id=in.redbus.android" },
          { name: "Bangalore Mirror", description: "Local news and startup ecosystem updates", url: "https://bangaloremirror.indiatimes.com/" },
          { name: "10Times", description: "Tech events and startup meetups", url: "https://10times.com" }
        ],
        emergencyNumbers: [
          { label: "Bangalore Police", number: "100" },
          { label: "Tourist Police", number: "080-22942726" },
          { label: "IT Corridor Police", number: "080-22100100" },
          { label: "Manipal Hospital", number: "080-25025025" },
          { label: "Women's Helpline", number: "1091" }
        ]
      },
      "Pune": {
        moneyHacks: {
          accommodation: [
            "Stay in student areas like Kothrud/Deccan for affordable PGs and shared flats",
            "Book service apartments in Hinjewadi/Wakad for IT professionals",
            "Share flats with college students and young professionals for ₹8000-15000/month",
            "Consider Pimpri-Chinchwad for lower rents and good connectivity",
            "Use co-living spaces during peak college season for networking"
          ],
          food: [
            "Eat at authentic Maharashtrian thalis for ₹120-200 complete meals",
            "Shop at Mahatma Phule Mandai for fresh produce at wholesale prices",
            "Try street food at FC Road and JM Road for student-budget meals",
            "Visit German Bakery and Osho Ashram areas for international food",
            "Join college canteens if you have student friends for subsidized meals"
          ],
          transport: [
            "Use PMPML buses with student discounts if eligible",
            "Rent two-wheelers monthly for ₹2000-3500 with insurance",
            "Walk in areas like FC Road, MG Road for free shopping and exploration",
            "Use shared rickshaws during peak hours for cost-effective travel",
            "Cycle between nearby areas - Pune is very bike-friendly"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Study Café",
            location: "Bhide Bridge area",
            tip: "Student-friendly cafés with unlimited WiFi and power outlets",
            coordinates: "18.5074°N, 73.8077°E",
            timing: "8 AM - 11 PM, student crowd"
          },
          {
            name: "Secret Sunset Point",
            location: "Parvati Hill Temple",
            tip: "Free city views and temple visit, popular with locals for evening walks",
            timing: "5-7 PM for sunset"
          },
          {
            name: "Cultural Hub",
            location: "Tilak Road Theatre District",
            tip: "Regular plays and cultural events, network with arts community",
            timing: "Evening shows, check schedules"
          },
          {
            name: "Student Networking",
            location: "Fergusson College Road",
            tip: "Multiple colleges and cafés, great for academic discussions",
            timing: "Weekday afternoons"
          }
        ],
        apps: [
          { name: "PMPML", description: "Public bus routes and timing", url: "https://play.google.com/store/apps/details?id=in.redbus.android" },
          { name: "Pune Mirror", description: "Local news and events", url: "https://punemirror.indiatimes.com/" },
          { name: "BookMyShow", description: "Entertainment and cultural events", url: "https://bookmyshow.com" },
          { name: "Zomato", description: "Student-friendly restaurants and deals", url: "https://zomato.com" }
        ],
        emergencyNumbers: [
          { label: "Pune Police", number: "100" },
          { label: "Tourist Police", number: "020-26122251" },
          { label: "Student Helpline", number: "020-26058181" },
          { label: "Ruby Hall Clinic", number: "020-66473434" },
          { label: "Women's Helpline", number: "1091" }
        ]
      },
      "New Delhi": {
        moneyHacks: {
          accommodation: [
            "Stay in South Delhi areas like Lajpat Nagar for good connectivity and culture",
            "Book PG accommodations in Karol Bagh for central location at budget prices",
            "Share flats with professionals in Gurgaon/Noida for modern amenities",
            "Consider Metro-connected areas for easy travel across NCR",
            "Use co-living spaces during extreme weather seasons for better comfort"
          ],
          food: [
            "Eat at Connaught Place underground market for budget meals",
            "Shop at INA Market for wholesale prices on fresh produce",
            "Try street food in Old Delhi (Chandni Chowk) for authentic flavors",
            "Visit Karim's, Paranthe Wali Gali for historic culinary experiences",
            "Use office/corporate cafeterias if you have access through networking"
          ],
          transport: [
            "Get Delhi Metro smart cards for comprehensive NCR coverage",
            "Use DTC bus passes for extensive city network at ₹1500/month",
            "Rent bicycles for short distances and to avoid traffic",
            "Share auto-rickshaws during peak hours for cost-effective travel",
            "Walk in areas like CP, Khan Market for free exploration"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Library Café",
            location: "India International Centre",
            tip: "Quiet workspace with intellectual atmosphere, guest day passes available",
            coordinates: "28.5930°N, 77.2194°E",
            timing: "9 AM - 6 PM, members and guests only"
          },
          {
            name: "Secret Garden",
            location: "Lodhi Garden Rose Garden",
            tip: "Free WiFi hotspots and peaceful work environment among roses",
            timing: "6 AM - 8 PM daily"
          },
          {
            name: "Cultural Hub",
            location: "Habitat Centre",
            tip: "Regular cultural events, exhibitions, and networking opportunities",
            timing: "Check event calendar"
          },
          {
            name: "Historic Workspace",
            location: "Khan Market Book Café",
            tip: "Multiple book cafés with historic ambiance and good coffee",
            timing: "10 AM - 9 PM"
          }
        ],
        apps: [
          { name: "Delhi Metro Rail", description: "Official metro timings and routes", url: "https://www.delhimetrorail.com/" },
          { name: "RedBus", description: "Bus routes and bookings", url: "https://play.google.com/store/apps/details?id=in.redbus.android" },
          { name: "Delhi Tourism", description: "Official tourism and heritage sites", url: "https://delhitourism.gov.in/" },
          { name: "Zomato", description: "Restaurant reviews and deals", url: "https://zomato.com" }
        ],
        emergencyNumbers: [
          { label: "Delhi Police", number: "100" },
          { label: "Tourist Police", number: "011-23365358" },
          { label: "Traffic Police", number: "103" },
          { label: "AIIMS Delhi", number: "011-26588500" },
          { label: "Women's Helpline", number: "1091" }
        ]
      },
      "Alleppey": {
        moneyHacks: {
          accommodation: [
            "Stay in backwater homestays for ₹800-1500/night with traditional Kerala meals",
            "Book houseboats during off-season (Jun-Sep) for 50% discounts",
            "Share group houseboats with other travelers to split costs",
            "Stay in Kumrakom nearby for similar experience at lower prices",
            "Negotiate long-term rates with houseboat operators for monthly stays"
          ],
          food: [
            "Eat at local toddy shops for authentic fish curry meals ₹100-200",
            "Buy fresh seafood directly from fishermen at Alleppey beach",
            "Try traditional meals served on banana leaves at local homes",
            "Shop at spice markets for coconut oil and curry spices at wholesale",
            "Join cooking classes with housewives to learn Kerala cuisine"
          ],
          transport: [
            "Use government ferries for ₹10-20 vs ₹1000+ tourist boats",
            "Rent bicycles to explore village backroads and coconut groves",
            "Walk along backwater paths - many areas connected by walkways",
            "Share auto-rickshaws with other tourists for temple visits",
            "Take KSRTC buses to nearby attractions for ₹30-50"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Backwater Channel",
            location: "Kumrakom Bird Sanctuary area",
            tip: "Narrow canals accessible only by small canoe, pure nature experience",
            coordinates: "9.6178°N, 76.4314°E",
            timing: "Early morning 6-9 AM for bird watching"
          },
          {
            name: "Secret Beach",
            location: "Marari Beach",
            tip: "Pristine beach 30 mins from Alleppey with fishing village culture",
            timing: "Early morning or evening"
          },
          {
            name: "Traditional Toddy Shop",
            location: "Champakkulam village",
            tip: "Authentic local experience with fresh palm wine and seafood",
            timing: "Afternoon-evening, closed Sundays"
          },
          {
            name: "Coir Factory Visit",
            location: "Behind Alleppey town",
            tip: "Watch traditional coconut fiber processing, buy products at source",
            timing: "Working hours 9 AM - 5 PM"
          }
        ],
        apps: [
          { name: "Kerala Tourism", description: "Official state tourism and houseboat bookings", url: "https://www.keralatourism.org/" },
          { name: "KTDC", description: "Kerala Tourism Development Corporation services", url: "https://www.ktdc.com/" },
          { name: "Backwater Info", description: "Ferry schedules and route information", url: "https://www.alappuzhabackwaters.com/" },
          { name: "Spice Route", description: "Local spice markets and wholesale prices", url: "https://www.keralaspices.com/" }
        ],
        emergencyNumbers: [
          { label: "Alleppey Police", number: "0477-2253257" },
          { label: "Tourist Police", number: "0477-2251796" },
          { label: "Medical Emergency", number: "108" },
          { label: "District Hospital", number: "0477-2253072" },
          { label: "Coast Guard", number: "0477-2253098" }
        ]
      },
      "Varkala": {
        moneyHacks: {
          accommodation: [
            "Stay in cliff-side guesthouses away from main beach for 60% less cost",
            "Book monthly yoga teacher training accommodations for long-term discounts",
            "Share beach huts with fellow travelers during peak season",
            "Stay in Sivagiri area for authentic local experience at budget prices",
            "Negotiate off-season rates during monsoon for massive savings"
          ],
          food: [
            "Eat at local fish curry restaurants away from cliff area for ₹80-150",
            "Shop at Varkala town market for spices and coconut products",
            "Try traditional Kerala meals at local homes via homestay programs",
            "Buy fresh seafood directly from beach fishermen in morning",
            "Join ashram meal programs for simple, healthy vegetarian food"
          ],
          transport: [
            "Walk along cliff paths - most attractions are within walking distance",
            "Use local buses to nearby temples and Trivandrum for ₹20-50",
            "Rent scooters monthly for ₹2000-3000 vs ₹200/day for exploring",
            "Share auto-rickshaws with other travelers for temple visits",
            "Take trains from Varkala Sivagiri station for longer journeys"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Beach",
            location: "Kappil Beach",
            tip: "Pristine beach where backwaters meet sea, 15 mins from main area",
            coordinates: "8.7220°N, 76.7200°E",
            timing: "Early morning or sunset"
          },
          {
            name: "Secret Meditation Cave",
            location: "Behind Sivagiri Mutt",
            tip: "Natural cave used by sages, perfect for meditation and reflection",
            timing: "Early morning 5-7 AM"
          },
          {
            name: "Ayurveda Learning Center",
            location: "Traditional village behind town",
            tip: "Learn authentic Ayurvedic practices from family practitioners",
            timing: "Mornings, by appointment"
          },
          {
            name: "Local Fishing Experience",
            location: "North Cliff area",
            tip: "Join fishermen for early morning fishing, buy catch at source prices",
            timing: "4-7 AM daily"
          }
        ],
        apps: [
          { name: "Varkala Guide", description: "Local attractions and yoga class schedules", url: "https://www.varkala.org/" },
          { name: "Kerala Ayurveda", description: "Authentic treatment centers and practitioners", url: "https://www.ayurvedacollege.com/" },
          { name: "Temple Connect", description: "Local temple timings and festival info", url: "https://www.templesinkerala.com/" }
        ],
        emergencyNumbers: [
          { label: "Varkala Police", number: "0470-2602234" },
          { label: "Tourist Police", number: "0470-2602100" },
          { label: "Medical Emergency", number: "108" },
          { label: "Cliff Rescue", number: "0470-2602345" },
          { label: "Lifeguard", number: "0470-2602456" }
        ]
      },
      "Kasol": {
        moneyHacks: {
          accommodation: [
            "Stay in Tosh village for mountain views at ₹500-1000/night vs Kasol's ₹1500+",
            "Book monthly stays with Israeli café owners for cultural exchange",
            "Share rooms in guesthouses during peak season with fellow backpackers",
            "Camp at designated spots for ₹200-400/night with basic facilities",
            "Stay in Malana village for authentic tribal culture experience"
          ],
          food: [
            "Eat at local Himachali dhabas for ₹100-200 vs ₹400+ at Israeli cafés",
            "Shop for groceries in Bhuntar and cook in guesthouse kitchens",
            "Try traditional meals with local families for authentic mountain cuisine",
            "Buy Israeli ingredients from specialized stores for home cooking",
            "Join backpacker community meals for cost-sharing and socializing"
          ],
          transport: [
            "Take government buses from Bhuntar for ₹50 vs ₹500 private taxis",
            "Walk between Kasol villages - most are connected by scenic trails",
            "Share taxi costs to trek starting points with other adventurers",
            "Use local jeeps during monsoon season for safer mountain travel",
            "Book Delhi-Bhuntar flights early for 60% discounts"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Hot Springs",
            location: "Pulga village trek",
            tip: "Natural hot springs in forest, 2-hour trek from Tosh village",
            coordinates: "32.2600°N, 77.3500°E",
            timing: "Best during morning hours"
          },
          {
            name: "Secret Viewpoint",
            location: "Above Malana village",
            tip: "Panoramic Parvati Valley views, respect tribal customs and photography rules",
            timing: "Early morning for clear mountain views"
          },
          {
            name: "Hidden Waterfall",
            location: "Between Kasol and Tosh",
            tip: "Sacred waterfall known to locals, perfect for meditation",
            timing: "Post-monsoon for best water flow"
          },
          {
            name: "Traditional Hash Village",
            location: "Malana (respect local customs)",
            tip: "Ancient tribal village with unique culture, follow local guidelines strictly",
            timing: "Day visits only, respect photography restrictions"
          }
        ],
        apps: [
          { name: "Parvati Valley", description: "Trek routes and weather updates", url: "https://www.indiahikes.com/" },
          { name: "Israeli Kasol", description: "Israeli community events and meetups", url: "https://www.facebook.com/groups/israelikasol" },
          { name: "Mountain Weather", description: "Real-time weather for trekking safety", url: "https://play.google.com/store/apps/details?id=com.imd.weather" },
          { name: "HP Tourism", description: "Official Himachal Pradesh tourism info", url: "https://himachaltourism.gov.in/" }
        ],
        emergencyNumbers: [
          { label: "Kasol Police Post", number: "01902-273008" },
          { label: "Bhuntar Police", number: "01902-265208" },
          { label: "Mountain Rescue", number: "01902-265100" },
          { label: "Medical Emergency", number: "108" },
          { label: "Tourist Helpline", number: "1363" }
        ]
      },
      "Udaipur": {
        moneyHacks: {
          accommodation: [
            "Stay in Old City havelis converted to guesthouses for royal experience",
            "Book lake-view accommodations in Hanuman Ghat area at reasonable prices",
            "Share heritage properties with other travelers to split costs",
            "Stay in Sajjangarh area for palace views without Lake Pichola premium",
            "Negotiate off-season rates during summer for 60% discounts"
          ],
          food: [
            "Eat at local Rajasthani thali restaurants for ₹150-300 complete meals",
            "Shop at Hathi Pol Bazaar for spices and dal at wholesale prices",
            "Try street food at Jagdish Temple area for authentic flavors",
            "Visit family-run restaurants in Old City for traditional recipes",
            "Join cooking classes with local families to learn Rajasthani cuisine"
          ],
          transport: [
            "Walk around Old City and lake areas - most attractions are nearby",
            "Use local buses for longer distances at ₹20-40 vs ₹200+ auto-rickshaws",
            "Rent bicycles to explore rural areas and surrounding hills",
            "Share taxi costs for day trips to Kumbhalgarh and Chittorgarh",
            "Take trains for longer journeys - Udaipur has good railway connectivity"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Sunset Point",
            location: "Sajjangarh Palace hilltop",
            tip: "Best city and lake views, less crowded than Lake Pichola spots",
            coordinates: "24.5708°N, 73.6958°E",
            timing: "1 hour before sunset"
          },
          {
            name: "Secret Art Workshop",
            location: "Jagdish Temple backstreets",
            tip: "Traditional miniature painting workshops with master artists",
            timing: "Morning sessions 9 AM-12 PM"
          },
          {
            name: "Local Puppet Show",
            location: "Old City havelis",
            tip: "Authentic Rajasthani puppet shows away from tourist hotels",
            timing: "Evening performances"
          },
          {
            name: "Heritage Walk Route",
            location: "Through Old City lanes",
            tip: "Self-guided walk through ancient havelis and temples, free exploration",
            timing: "Early morning or late afternoon"
          }
        ],
        apps: [
          { name: "Udaipur Heritage", description: "Historical sites and guided tour info", url: "https://www.udaipurtourism.gov.in/" },
          { name: "Rajasthan Tourism", description: "Official state tourism information", url: "https://www.rajasthantourism.gov.in/" },
          { name: "Lake City", description: "Local events and cultural programs", url: "https://www.facebook.com/groups/udaipurcommunity" },
          { name: "Royal Udaipur", description: "Palace timings and entry fees", url: "https://www.udaipurtourism.gov.in/" }
        ],
        emergencyNumbers: [
          { label: "Udaipur Police", number: "0294-2428491" },
          { label: "Tourist Police", number: "0294-2411535" },
          { label: "Medical Emergency", number: "108" },
          { label: "MB Hospital", number: "0294-2526251" },
          { label: "Fire Brigade", number: "101" }
        ]
      },
      "Bir": {
        moneyHacks: {
          accommodation: [
            "Stay in Tibetan family homestays for cultural experience at ₹800-1500/night",
            "Book paragliding packages that include accommodation for better deals",
            "Share rooms with fellow adventure enthusiasts during peak season",
            "Stay in Billing area for mountain views at lower cost than Bir",
            "Camp at designated spots for ₹300-500/night with basic facilities"
          ],
          food: [
            "Eat at Tibetan monasteries for authentic momos and thukpa ₹80-150",
            "Buy groceries from local market and cook in guesthouse kitchens",
            "Try traditional Himachali meals with host families",
            "Visit local tea gardens for fresh tea at source prices",
            "Join meditation retreat meal programs for simple, healthy food"
          ],
          transport: [
            "Walk between Bir and Billing - scenic 14km trek through forest",
            "Use local buses to nearby attractions for ₹20-50",
            "Share taxi costs to Dharamshala with other travelers",
            "Rent bicycles for exploring tea gardens and monasteries",
            "Take paragliding tandem flights as transport + adventure combo"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Monastery",
            location: "Chokling Monastery",
            tip: "Peaceful Tibetan monastery with meditation sessions and mountain views",
            coordinates: "32.0486°N, 76.7260°E",
            timing: "Morning prayers 6-8 AM"
          },
          {
            name: "Secret Tea Garden",
            location: "Behind Bir village",
            tip: "Organic tea plantation with free tastings and direct purchase",
            timing: "Morning hours for tea picking experience"
          },
          {
            name: "Paragliding Launch Secret",
            location: "Alternative launch point near Billing",
            tip: "Less crowded launch area with equally stunning views",
            timing: "11 AM - 4 PM depending on wind conditions"
          },
          {
            name: "Forest Meditation Spot",
            location: "Trek route to Billing",
            tip: "Natural meditation spots in deodar forest, complete silence",
            timing: "Early morning or evening"
          }
        ],
        apps: [
          { name: "Paragliding Bir", description: "Weather conditions and flight bookings", url: "https://www.paraglidingbir.com/" },
          { name: "Tibet Connect", description: "Monastery schedules and cultural events", url: "https://www.dalailama.com/" },
          { name: "Mountain Weather", description: "Real-time conditions for paragliding", url: "https://play.google.com/store/apps/details?id=com.imd.weather" },
          { name: "HP Adventure", description: "Himachal Pradesh adventure tourism", url: "https://himachaltourism.gov.in/" }
        ],
        emergencyNumbers: [
          { label: "Bir Police Post", number: "01894-250100" },
          { label: "Paragliding Emergency", number: "01894-250200" },
          { label: "Medical Emergency", number: "108" },
          { label: "Mountain Rescue", number: "01894-250300" },
          { label: "Tourist Helpline", number: "1363" }
        ]
      },
      "Dehradun": {
        moneyHacks: {
          accommodation: [
            "Stay in Rajpur Road area for good connectivity and student atmosphere",
            "Book PG accommodations near FRI/IIT for academic environment",
            "Share flats with professionals in IT Park area for modern amenities",
            "Consider Mussoorie Road area for hill station access at lower cost",
            "Use co-living spaces during monsoon season for better comfort"
          ],
          food: [
            "Eat at local dhabas on Delhi-Haridwar highway for ₹100-200 meals",
            "Shop at Paltan Bazaar for wholesale prices on dry fruits and spices",
            "Try Garhwali cuisine at local homes via homestay programs",
            "Visit Tibetan restaurants near Buddhist temples for authentic food",
            "Use college canteens if you have student connections"
          ],
          transport: [
            "Use city buses for comprehensive coverage at ₹15-30 per ride",
            "Rent two-wheelers monthly for ₹2000-3500 including insurance",
            "Share auto-rickshaws during peak hours for cost-effective travel",
            "Walk in areas like Paltan Bazaar, Rajpur Road for free exploration",
            "Take trains to Delhi/Haridwar for longer journeys at budget prices"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Valley",
            location: "Malsi Deer Park extension",
            tip: "Peaceful walking trails and deer spotting away from main park crowds",
            coordinates: "30.2733°N, 78.0106°E",
            timing: "Early morning 6-9 AM"
          },
          {
            name: "Secret Library",
            location: "Forest Research Institute",
            tip: "Historic library with colonial architecture, research atmosphere",
            timing: "9 AM - 5 PM, visitor passes available"
          },
          {
            name: "Local Art Hub",
            location: "Clock Tower area",
            tip: "Regular art exhibitions and cultural events, network with artists",
            timing: "Evening events, check local schedules"
          },
          {
            name: "Nature Study Center",
            location: "Lachhiwala",
            tip: "Natural pools and forest area, popular picnic spot with locals",
            timing: "Day visits, better during weekdays"
          }
        ],
        apps: [
          { name: "Uttarakhand Transport", description: "Bus routes and schedules", url: "https://play.google.com/store/apps/details?id=com.redbus.android" },
          { name: "DUN Connect", description: "Local events and city information", url: "https://www.facebook.com/groups/dehraduncommunity" },
          { name: "Hill Station Guide", description: "Nearby hill station information", url: "https://uttarakhandtourism.gov.in/" },
          { name: "Education Hub", description: "Academic institutions and events", url: "https://www.ddu.ac.in/" }
        ],
        emergencyNumbers: [
          { label: "Dehradun Police", number: "0135-2715456" },
          { label: "Tourist Police", number: "0135-2654189" },
          { label: "Medical Emergency", number: "108" },
          { label: "Doon Hospital", number: "0135-2711789" },
          { label: "Railway Police", number: "0135-2623142" }
        ]
      },
      "Mussoorie": {
        moneyHacks: {
          accommodation: [
            "Stay in Library area for quieter environment away from Mall Road crowds",
            "Book heritage hotels during off-season for 60% discounts",
            "Share colonial-era guesthouses with other travelers and writers",
            "Stay in nearby villages like Barlowganj for authentic mountain life",
            "Negotiate long-term rates for writing retreats and digital nomad stays"
          ],
          food: [
            "Eat at local dhabas away from Mall Road for ₹150-300 complete meals",
            "Shop at lower bazaar for groceries and cook in guesthouse kitchens",
            "Try Garhwali cuisine at local family restaurants",
            "Visit Tibetan restaurants near temples for authentic momos",
            "Join writing workshops that include meals for community dining"
          ],
          transport: [
            "Walk on Mall Road and surrounding areas - most attractions are nearby",
            "Use local buses to Dehradun for ₹50 vs ₹300+ shared taxis",
            "Rent bicycles for exploring nearby villages and viewpoints",
            "Take ropeway for scenic transport + sightseeing combo",
            "Share taxi costs for day trips to nearby hill stations"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Waterfall",
            location: "Kempty Falls upper reaches",
            tip: "Natural pools above main falls, accessible via 30-min trek",
            coordinates: "30.4889°N, 78.0247°E",
            timing: "Post-monsoon for best flow"
          },
          {
            name: "Secret Writer's Retreat",
            location: "Landour area",
            tip: "Historic writing retreats where famous authors worked, inspiring environment",
            timing: "Quiet mornings for contemplation"
          },
          {
            name: "Colonial Architecture Walk",
            location: "Through old Mussoorie lanes",
            tip: "Self-guided walk through British-era buildings and churches",
            timing: "Early morning or late afternoon"
          },
          {
            name: "Local Art Gallery",
            location: "Near Christ Church",
            tip: "Regular exhibitions by hill station artists, purchase original works",
            timing: "Afternoon openings"
          }
        ],
        apps: [
          { name: "Mussoorie Guide", description: "Local attractions and weather updates", url: "https://www.mussoorietourism.co.in/" },
          { name: "Colonial Heritage", description: "Historical sites and walking tours", url: "https://www.incredibleindia.org/" },
          { name: "Mountain Weather", description: "Real-time weather and visibility", url: "https://play.google.com/store/apps/details?id=com.imd.weather" },
          { name: "Queen of Hills", description: "Events and cultural programs", url: "https://www.facebook.com/groups/mussooriecommunity" }
        ],
        emergencyNumbers: [
          { label: "Mussoorie Police", number: "0135-2632020" },
          { label: "Tourist Police", number: "0135-2632100" },
          { label: "Medical Emergency", number: "108" },
          { label: "Landour Hospital", number: "0135-2632048" },
          { label: "Mountain Rescue", number: "0135-2632200" }
        ]
      },
      "Ziro": {
        moneyHacks: {
          accommodation: [
            "Stay in Apatani family homestays for authentic tribal experience at ₹800-1500/night",
            "Book during Ziro Music Festival for cultural immersion with accommodation packages",
            "Share traditional bamboo houses with other travelers",
            "Camp in designated areas during festival season for ₹400-600/night",
            "Stay in nearby villages for lower costs and deeper cultural experience"
          ],
          food: [
            "Eat traditional Apatani meals with host families for ₹200-400 including rice wine",
            "Try local fish and bamboo shoot preparations unique to the region",
            "Shop at weekly markets for organic vegetables grown without chemicals",
            "Learn to cook traditional dishes during extended homestay programs",
            "Join community feasts during local festivals for cultural experience"
          ],
          transport: [
            "Fly to Lilabari Airport (Assam) and take shared taxis for ₹400 vs ₹2000 private",
            "Use government buses from Itanagar for scenic but long journey",
            "Walk between Apatani villages - most are within 5km of each other",
            "Rent bicycles from locals for exploring valley and surrounding hills",
            "Share costs for day trips to nearby valleys with other travelers"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Valley",
            location: "Behind Hari village",
            tip: "Pristine valley with traditional Apatani agriculture, rice fields without machines",
            coordinates: "27.5890°N, 93.8345°E",
            timing: "Rice harvesting season Sep-Oct"
          },
          {
            name: "Sacred Grove",
            location: "Near Diibo village",
            tip: "Protected forest area sacred to Apatani tribe, guided visits with respect",
            timing: "Early morning with tribal guide"
          },
          {
            name: "Traditional Workshop",
            location: "Hong village",
            tip: "Watch bamboo crafts and traditional weaving, buy directly from artisans",
            timing: "Weekday mornings when artisans are working"
          },
          {
            name: "Music Festival Secret Spots",
            location: "Around festival grounds",
            tip: "Traditional Apatani music and dance performances away from main stage",
            timing: "During Ziro Music Festival in September"
          }
        ],
        apps: [
          { name: "Arunachal Tourism", description: "Official state tourism and permits", url: "https://arunachaltourism.com/" },
          { name: "India Culture", description: "Local tribal culture and customs guide", url: "https://www.incredibleindia.org/content/incredible-india-v2/en/experiences/tribal-life.html" },
          { name: "Northeast Weather", description: "Regional weather and monsoon updates", url: "https://play.google.com/store/apps/details?id=com.imd.weather" },
          { name: "Music Festival", description: "Ziro Music Festival schedule and artists", url: "https://zirofestival.com/" }
        ],
        emergencyNumbers: [
          { label: "Ziro Police Station", number: "03788-222100" },
          { label: "District Hospital", number: "03788-222200" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Emergency Services", number: "108" },
          { label: "Forest Department", number: "03788-222300" }
        ]
      },
      "Kolkata": {
        moneyHacks: {
          accommodation: [
            "Stay in Ballygunge/Jadavpur area near universities for intellectual atmosphere",
            "Book heritage hotels in North Kolkata during off-season for colonial experience",
            "Share apartments with artists and writers in creative neighborhoods",
            "Consider areas like Salt Lake for modern amenities at reasonable prices",
            "Use co-living spaces during monsoon season for better facilities"
          ],
          food: [
            "Eat at local Bengali restaurants for authentic fish curry rice ₹100-200",
            "Shop at New Market for wholesale prices on textiles and books",
            "Try street food at Park Street and College Street for intellectual discussions",
            "Visit traditional sweet shops for authentic Bengali desserts",
            "Join adda sessions at coffee houses for cultural immersion"
          ],
          transport: [
            "Use Kolkata Metro for comprehensive coverage at very low cost",
            "Take trams for heritage experience and city center connectivity",
            "Use buses for extensive network coverage at ₹10-20 per ride",
            "Walk in areas like College Street, Park Street for cultural exploration",
            "Share auto-rickshaws and taxis during heavy rainfall seasons"
          ]
        },
        secretSpots: [
          {
            name: "Hidden Library",
            location: "National Library complex",
            tip: "Largest library in India with rare books and quiet study areas",
            coordinates: "22.5341°N, 88.3503°E",
            timing: "9 AM - 8 PM, membership available"
          },
          {
            name: "Secret Art Quarter",
            location: "Kumartuli pottery area",
            tip: "Traditional idol makers and artists, buy original works at source prices",
            timing: "Morning working hours, festival season best"
          },
          {
            name: "Intellectual Hub",
            location: "College Street coffee houses",
            tip: "Historic adda spots where intellectuals gather for discussions",
            timing: "Evening sessions for best conversations"
          },
          {
            name: "Heritage Walk Route",
            location: "North Kolkata mansions",
            tip: "Self-guided walk through 200-year-old Bengali architecture",
            timing: "Early morning or late afternoon"
          }
        ],
        apps: [
          { name: "Kolkata Metro", description: "Metro routes and timings", url: "https://www.mtp.indianrailways.gov.in/" },
          { name: "Kolkata Trams", description: "Heritage tram routes and schedules", url: "https://www.wbtourism.gov.in/" },
          { name: "Adda Kolkata", description: "Cultural events and intellectual gatherings", url: "https://www.facebook.com/groups/kolkataculture" },
          { name: "Bengali Culture", description: "Festivals and traditional events", url: "https://www.incredibleindia.org/" }
        ],
        emergencyNumbers: [
          { label: "Kolkata Police", number: "100" },
          { label: "Tourist Police", number: "033-22143526" },
          { label: "Medical Emergency", number: "108" },
          { label: "SSKM Hospital", number: "033-22041185" },
          { label: "Women's Helpline", number: "1091" }
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
          { name: "Beach Please", description: "Real-time beach conditions, shack recommendations, and weather", url: "https://www.goabeaches.com/" },
          { name: "Goa Tourism Official", description: "Government tourism info, permits, and authentic experiences", url: "https://www.goatourism.gov.in/" },
          { name: "Nomad Goa", description: "Digital nomad community events and co-working spaces", url: "https://www.facebook.com/groups/nomadgoa" }
        ],
        emergencyNumbers: [
          { label: "Goa Police Helpline", number: "0832-2420000" },
          { label: "Tourist Helpline", number: "1363" },
          { label: "Ambulance", number: "108" },
          { label: "Fire Brigade", number: "101" },
          { label: "Women's Helpline", number: "1091" }
        ]
      },
      "Jaipur": {
        moneyHacks: {
          accommodation: [
            "Stay in heritage havelis in Old City for authentic royal experience at ₹800-2,000/night",
            "Book heritage hotels during off-season (April-June) for 50% discounts on palace stays",
            "Share apartments in Malviya Nagar/C-Scheme with other nomads for ₹8,000-15,000/month",
            "Use StayVista or similar platforms for monthly discounts on heritage properties",
            "Consider homestays in residential areas like Civil Lines for authentic Rajasthani family experience"
          ],
          food: [
            "Eat at traditional thali restaurants like Chokhi Dhani for authentic royal cuisine ₹200-400",
            "Try street food at Masala Chowk - hygienic local food court with fixed government prices",
            "Shop at Johari Bazaar spice market for authentic ingredients at wholesale rates (60% cheaper)",
            "Visit Laxmi Mishthan Bhandar for authentic Rajasthani sweets and snacks since 1954",
            "Use food delivery apps during summer months (April-June) to avoid extreme heat"
          ],
          transport: [
            "Use JCTSL bus passes for unlimited city travel - monthly pass ₹500 vs ₹15 per ride",
            "Rent monthly bikes for ₹2,000-3,000 from government-approved vendors near railway station",
            "Use pre-paid auto stands at tourist spots (City Palace, Hawa Mahal) to avoid haggling",
            "Download Jaipur Smart City app for real-time bus routes, timings, and digital payments",
            "Book Uber/Ola during peak summer for AC comfort (₹100-200 vs ₹50-80 for auto in heat)"
          ]
        },
        secretSpots: [
          {
            name: "Sisodia Rani Garden Workspace",
            location: "8km from city center",
            tip: "Peaceful terraced garden perfect for morning work sessions with natural WiFi zones and heritage ambiance",
            timing: "6:00 AM - 9:00 AM for cool weather and solitude",
            coordinates: "26.8512°N, 75.8747°E"
          },
          {
            name: "Nahargarh Fort Sunset Coworking",
            location: "Aravalli Hills overlooking Pink City",
            tip: "Work with panoramic city views from 700-year-old fort - bring laptop for evening sessions, small heritage café available",
            timing: "4:00 PM - 6:30 PM for golden hour productivity",
            website: "https://www.facebook.com/nahargarhjaipur/"
          },
          {
            name: "Central Park Rose Garden WiFi Zone",
            location: "Heart of Jaipur near SMS Stadium",
            tip: "Early morning jogging track with free government WiFi zones for outdoor work and fresh air",
            timing: "5:30 AM - 8:00 AM before heat and crowds"
          },
          {
            name: "Hidden Café at Anokhi Museum",
            location: "7 Tilak Marg, C-Scheme",
            tip: "Quiet museum café with excellent WiFi, AC, and cultural textile exhibition ambiance - ₹300/day with unlimited coffee",
            timing: "10:00 AM - 7:00 PM",
            website: "https://www.anokhi.com/"
          },
          {
            name: "City Palace Secret Zenana Courtyard",
            location: "City Palace Complex",
            tip: "Ask museum guards for 'Zenana Deodi' courtyard access - quiet heritage workspace for ₹100 extra entry fee, royal atmosphere",
            timing: "10:00 AM - 4:00 PM",
            coordinates: "26.9260°N, 75.8239°E"
          }
        ],
        apps: [
          { name: "Jaipur Smart City", description: "Official app for bus routes, timings, digital payments, and city services", url: "https://play.google.com/store/apps/details?id=in.gov.rajasthan.jaipursmartcity" },
          { name: "RSRTC Bus Service", description: "Real-time Rajasthan state transport bus tracking and bookings", url: "https://rsrtconline.rajasthan.gov.in/" },
          { name: "Pink City Guide", description: "Authentic local recommendations and heritage walk routes", url: "https://www.jaipurtourism.co.in/" },
          { name: "Rajasthan Tourism", description: "Official state tourism app with permits, events, and authentic experiences", url: "https://www.rajasthantourism.gov.in/" }
        ],
        emergencyNumbers: [
          { label: "Jaipur Police Control", number: "112/100" },
          { label: "Tourist Helpline Rajasthan", number: "1363" },
          { label: "Medical Emergency", number: "108" },
          { label: "Fire Brigade", number: "101" },
          { label: "Women's Helpline", number: "1091" },
          { label: "Ambulance", number: "102" }
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
