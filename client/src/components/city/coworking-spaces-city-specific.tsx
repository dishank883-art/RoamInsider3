import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wifi, Coffee, Users, MapPin, DollarSign, Clock, Star, ExternalLink, Phone, Calendar, Package } from "lucide-react";
import type { CityWithDetails } from "@shared/schema";

interface CoworkingSpacesProps {
  city: CityWithDetails;
}

export default function CoworkingSpaces({ city }: CoworkingSpacesProps) {
  // City-specific coworking spaces data
  const getCitySpecificSpaces = (cityName: string) => {
    const spacesByCity: { [key: string]: any[] } = {
      "Goa": [
        {
          name: "91springboard Goa",
          location: "Porvorim, North Goa",
          type: "Premium",
          dayPass: "₹500",
          monthlyDesk: "₹8,000",
          monthlyPrivate: "₹15,000",
          features: ["High-speed WiFi", "Meeting rooms", "Events", "Cafe", "Parking"],
          rating: 4.5,
          website: "https://www.91springboard.com/",
          phone: "+91 832 671 1234",
          description: "Professional coworking space with startup ecosystem and regular networking events.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Unlimited",
            aircon: "Yes"
          }
        },
        {
          name: "Drishti Coworking",
          location: "Anjuna, North Goa",
          type: "Beach-side",
          dayPass: "₹400",
          monthlyDesk: "₹6,500",
          monthlyPrivate: "₹12,000",
          features: ["Beach location", "Outdoor workspace", "Yoga classes", "Healthy cafe", "Bike rental"],
          rating: 4.3,
          website: null, // Website not working
          phone: "+91 832 227 8900",
          description: "Unique beachside coworking with wellness focus and outdoor workspace options.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "7 AM - 10 PM",
            printers: "Yes",
            coffee: "Premium coffee",
            aircon: "Yes"
          }
        }
      ],
      "Bir": [
        {
          name: "Avva's Café Workspace",
          location: "Main Bir Road",
          type: "Café Coworking",
          dayPass: "₹300",
          monthlyDesk: "₹4,000",
          monthlyPrivate: "Not available",
          features: ["Mountain views", "Good WiFi", "Healthy food", "Quiet environment", "Power outlets"],
          rating: 4.2,
          website: "https://www.facebook.com/avvascafe/",
          phone: "+91 9816012345",
          description: "Popular café with coworking-friendly environment and beautiful mountain views.",
          amenities: {
            wifi: "25+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "No",
            coffee: "Excellent coffee and food",
            aircon: "No (natural ventilation)"
          }
        },
        {
          name: "June 16th Café",
          location: "Bir Tibetan Colony",
          type: "Tibetan Café",
          dayPass: "₹200",
          monthlyDesk: "₹3,500",
          monthlyPrivate: "Not available",
          features: ["Tibetan ambiance", "Good WiFi", "Authentic food", "Community space", "Cultural environment"],
          rating: 4.0,
          website: null, // No website available
          phone: "+91 9816098765",
          description: "Authentic Tibetan café perfect for cultural immersion while working.",
          amenities: {
            wifi: "20+ Mbps",
            hours: "7 AM - 9 PM",
            printers: "Basic printing",
            coffee: "Tibetan tea and coffee",
            aircon: "No"
          }
        }
      ],
      "Dehradun": [
        {
          name: "91springboard Dehradun",
          location: "Rajpur Road",
          type: "Premium Coworking",
          dayPass: "₹400",
          monthlyDesk: "₹6,000",
          monthlyPrivate: "₹12,000",
          features: ["High-speed WiFi", "Meeting rooms", "Events", "Cafe", "Parking", "Community"],
          rating: 4.4,
          website: "https://www.91springboard.com/",
          phone: "+91 135 2711234",
          description: "Professional coworking space with startup ecosystem and networking events.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Unlimited",
            aircon: "Yes"
          }
        },
        {
          name: "The Doon School Incubation Center",
          location: "The Doon School Campus",
          type: "Academic Coworking",
          dayPass: "₹300",
          monthlyDesk: "₹5,000",
          monthlyPrivate: "₹10,000",
          features: ["Academic environment", "Mentorship", "Good WiFi", "Library access", "Peaceful campus"],
          rating: 4.1,
          website: "https://www.doonschool.com/",
          phone: "+91 135 2526400",
          description: "Unique coworking space within prestigious school campus with academic atmosphere.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "9 AM - 6 PM",
            printers: "Yes",
            coffee: "Canteen available",
            aircon: "Yes"
          }
        }
      ],
      "Ziro": [
        {
          name: "Apatani Cultural Center",
          location: "Hapoli",
          type: "Cultural Workspace",
          dayPass: "₹200",
          monthlyDesk: "₹2,500",
          monthlyPrivate: "₹4,000",
          features: ["Cultural immersion", "Basic WiFi", "Community interaction", "Traditional environment", "Learning opportunities"],
          rating: 3.5,
          website: null, // No website available
          phone: "+91 3788 222333",
          description: "Unique workspace opportunity to work while learning about Apatani culture.",
          amenities: {
            wifi: "10-15 Mbps (limited)",
            hours: "9 AM - 5 PM",
            printers: "Basic",
            coffee: "Local tea available",
            aircon: "No"
          }
        },
        {
          name: "Tourist Lodge Common Areas",
          location: "Various locations in Ziro",
          type: "Lodge Workspace",
          dayPass: "₹150",
          monthlyDesk: "₹2,000",
          monthlyPrivate: "₹3,500",
          features: ["Basic facilities", "Common areas", "Accommodation combo", "Local interaction", "Budget-friendly"],
          rating: 3.0,
          website: null, // No website available
          phone: "Various lodge contacts",
          description: "Basic workspace facilities available in tourist lodges for budget-conscious nomads.",
          amenities: {
            wifi: "5-10 Mbps (sporadic)",
            hours: "24 hours (lodge guests)",
            printers: "No",
            coffee: "Lodge dining available",
            aircon: "No"
          }
        }
      ],
      "Alleppey": [
        {
          name: "Backwater Co-Work",
          location: "Mullakkal Street",
          type: "Peaceful Remote",
          dayPass: "₹300",
          monthlyDesk: "₹4,000",
          monthlyPrivate: "₹8,000",
          features: ["Lake view", "Quiet environment", "Local cafe", "Bike rental", "Nature setting"],
          rating: 4.2,
          website: null, // No website available
          phone: "+91 477 225 1234",
          description: "Peaceful coworking space with backwater views, perfect for remote work and digital detox.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Basic",
            coffee: "Local cafe",
            aircon: "Fans + AC"
          }
        },
        {
          name: "Alleppey Digital Hub",
          location: "Near Beach",
          type: "Beach Work",
          dayPass: "₹250",
          monthlyDesk: "₹3,500",
          monthlyPrivate: "₹7,000",
          features: ["Beach access", "Flexible hours", "Community space", "Yoga classes", "Local network"],
          rating: 4.0,
          website: null, // No website available
          phone: "+91 477 225 5678",
          description: "Beach-side coworking with flexible schedule and community of remote workers.",
          amenities: {
            wifi: "40+ Mbps",
            hours: "Flexible",
            printers: "Basic",
            coffee: "Local style",
            aircon: "Natural ventilation"
          }
        }
      ],
      "Varkala": [
        {
          name: "Cliff Top Co-Work",
          location: "North Cliff",
          type: "Ocean View",
          dayPass: "₹400",
          monthlyDesk: "₹5,000",
          monthlyPrivate: "₹10,000",
          features: ["Ocean view", "Yoga classes", "Wellness focus", "Healthy cafe", "Sunset workspace"],
          rating: 4.5,
          website: null, // Website not working
          phone: "+91 470 260 1234",
          description: "Stunning cliff-top coworking with ocean views and wellness-focused community.",
          amenities: {
            wifi: "60+ Mbps",
            hours: "7 AM - 9 PM",
            printers: "Yes",
            coffee: "Organic coffee",
            aircon: "Sea breeze + fans"
          }
        },
        {
          name: "Soul & Surf Digital Nomad Hub",
          location: "South Cliff",
          type: "Surf & Work",
          dayPass: "₹350",
          monthlyDesk: "₹4,500",
          monthlyPrivate: "₹9,000",
          features: ["Surf lessons", "Community events", "Healthy food", "Beach access", "Yoga"],
          rating: 4.3,
          website: "https://soulandsurf.com/",
          phone: "+91 470 260 5678",
          description: "Unique surf and work combination with strong international nomad community.",
          amenities: {
            wifi: "55+ Mbps",
            hours: "6 AM - 10 PM",
            printers: "Basic",
            coffee: "Specialty coffee",
            aircon: "Natural + fans"
          }
        }
      ],
      "Kasol": [
        {
          name: "No Co-working spaces",
          location: "NA",
          type: "NA",
          dayPass: "NA",
          monthlyDesk: "NA",
          monthlyPrivate: "NA",
          features: ["null"],
          rating: null,
          website: null, // No website available
          phone: "NA",
          description: "NA",
          amenities: {
            wifi: "NA",
            hours: "NA",
            printers: "NA",
            coffee: "NA",
            aircon: "NA"
          }
            }
      ],
      "Tosh": [
        {
          name: "No Co-working spaces",
          location: "NA",
          type: "NA",
          dayPass: "NA",
          monthlyDesk: "NA",
          monthlyPrivate: "NA",
          features: ["null"],
          rating: null,
          website: null, // No website available
          phone: "NA",
          description: "NA",
          amenities: {
            wifi: "NA",
            hours: "NA",
            printers: "NA",
            coffee: "NA",
            aircon: "NA"
          }
        }
      ],
      "Rishikesh": [
        {
          name: "BunkStay Co-work",
          location: "Lakshman Jhula, Neelkanth Road, Distt, Rishikesh, Uttarakhand",
          type: "Backpacker Coworking",
          dayPass: "Visit the website",
          monthlyDesk: "Visit the website",
          monthlyPrivate: "Visit the website",
          features: ["Ganges views", "Yoga sessions", "Community space", "Rooftop workspace", "Spiritual environment"],
          rating: 4.2,
          website: "https://bunkstay.com/co-working.html",
          phone: "+91-81716 65566",
          description: "Spiritual coworking space with Ganges views and yoga-friendly environment.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "6 AM - 11 PM",
            printers: "Basic printing",
            coffee: "Healthy café with organic options",
            aircon: "Yes",
            other_amenities: "Strong Wi-Fi, Yoga Sessions, Co-worker's playground, Cozy Lounges"          
          }
        }
      ],
      "Pondicherry": [
        {
          name: "Pulsebay Coworking",
          location: "Vazhudavur Main Road, Shanmugapuram, Puducherry 605009.",
          type: "Elegant Working Spaces",
          dayPass: "500",
          monthlyDesk: "₹3,999",
          monthlyPrivate: "Visit the Website",
          features: ["Elegant Working Space", "Air Conditioned", "International environment", "Meeting Rooms"],
          rating: 4.3,
          website: "https://pulsebay.in/",
          phone: "+91 93604 08452",
          description: "Unique coworking experience in international spiritual community focused on conscious living.",
          amenities: {
            wifi: "60+ Mbps",
            hours: "6 AM - 9 PM",
            printers: "Yes",
            coffee: "Dining Area and Canteen",
            aircon: "Yes",
            other_amenities: "Backup Internet, Power Back-Up, CCustomer Lounge, Basement Parking, On-Demand Tech Support"
          }
        },
        {
          name: "Klite Space",
          location: "11, 1st Cross St, Jawahar Nagar, Sundararaja Nagar, Anna Nagar, Puducherry, 605005",
          type: "Professinal Office Space",
          dayPass: "Visit the Website",
          monthlyDesk: "Visit the Website",
          monthlyPrivate: "Visit the Website",
          features: ["Colonial architecture", "French ambiance", "Heritage cafés", "Beach proximity", "Cultural immersion"],
          rating: 4.1,
          website: "https://www.klitespace.com",
          phone: "NA",
          description: "Work in French colonial heritage cafés with unique architecture and cultural atmosphere.",
          amenities: {
            wifi: "40+ Mbps",
            hours: "7 AM - 10 PM",
            printers: "Limited",
            coffee: "Cafe",
            aircon: "Yes"
          }
        }
      ],
      "Kochi": [
        {
          name: "Cochin Innovation Hub",
          location: "Infopark, Kakkanad",
          type: "Tech Hub",
          dayPass: "₹500",
          monthlyDesk: "₹7,500",
          monthlyPrivate: "₹14,000",
          features: ["IT ecosystem", "Startup programs", "Mentorship", "Networking events", "Modern facilities"],
          rating: 4.4,
          website: null, // Website not working
          phone: "+91 484 2801 234",
          description: "Premier tech coworking in Kerala's IT hub with strong startup ecosystem and mentorship.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Tech café with healthy options",
            aircon: "Central AC"
          }
        },
        {
          name: "Fort Kochi Heritage Workspace",
          location: "Fort Kochi",
          type: "Heritage Coworking",
          dayPass: "₹400",
          monthlyDesk: "₹6,000",
          monthlyPrivate: "₹11,000",
          features: ["Heritage buildings", "Cultural atmosphere", "Art galleries proximity", "Backwater views", "Tourist area"],
          rating: 4.2,
          website: null, // No specific website
          phone: "+91 484 2666 789",
          description: "Work in colonial heritage buildings with cultural atmosphere and backwater views.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Yes",
            coffee: "Kerala specialties and international options",
            aircon: "Yes"
          }
        }
      ],
      "Wayanad": [
        {
          name: "Nature Valley Workspace",
          location: "Kalpetta, Wayanad",
          type: "Eco Coworking",
          dayPass: "₹300",
          monthlyDesk: "₹4,000",
          monthlyPrivate: "₹7,000",
          features: ["Forest views", "Eco-friendly", "Wildlife proximity", "Organic food", "Nature immersion"],
          rating: 4.0,
          website: "Eco-resort partnerships",
          phone: "+91 4936 202 345",
          description: "Eco-friendly workspace surrounded by Western Ghats forests with wildlife and nature focus.",
          amenities: {
            wifi: "25+ Mbps",
            hours: "6 AM - 8 PM",
            printers: "Basic",
            coffee: "Organic local produce and spiced tea",
            aircon: "No (natural mountain cooling)"
          }
        },
        {
          name: "Plantation Stay Workspaces",
          location: "Various plantation stays",
          type: "Plantation Coworking",
          dayPass: "₹250",
          monthlyDesk: "₹3,500",
          monthlyPrivate: "₹6,000",
          features: ["Tea plantation views", "Rural atmosphere", "Farm-to-table food", "Cultural learning", "Peaceful environment"],
          rating: 3.8,
          website: "Contact plantation stays",
          phone: "Various plantation contacts",
          description: "Work among tea and spice plantations with authentic rural experience and local culture.",
          amenities: {
            wifi: "15-20 Mbps (variable)",
            hours: "Flexible (stay-dependent)",
            printers: "No",
            coffee: "Fresh plantation tea and coffee",
            aircon: "No (plantation natural cooling)"
          }
        }
      ],
      "Dharamkot": [
        {
          name: "Himalayan Coworking Village",
          location: "Upper Dharamkot",
          type: "Mountain Community",
          dayPass: "₹250",
          monthlyDesk: "₹3,000",
          monthlyPrivate: "₹5,500",
          features: ["Mountain views", "Tibetan community", "Meditation sessions", "Digital nomad friendly", "International community"],
          rating: 4.1,
          website: "Community-based workspace",
          phone: "+91 1892 221 456",
          description: "Community-driven coworking space with strong Tibetan Buddhist influence and nomad community.",
          amenities: {
            wifi: "30+ Mbps",
            hours: "6 AM - 10 PM",
            printers: "Basic",
            coffee: "Tibetan butter tea and international options",
            aircon: "No (mountain air)"
          }
        },
        {
          name: "McLeod Shared Spaces",
          location: "McLeod Ganj (2km)",
          type: "Spiritual Hub",
          dayPass: "₹300",
          monthlyDesk: "₹4,000",
          monthlyPrivate: "₹7,000",
          features: ["Dalai Lama proximity", "Spiritual teachings", "International community", "Library access", "Cultural events"],
          rating: 4.2,
          website: "Various spiritual centers",
          phone: "+91 1892 221 789",
          description: "Access spiritual center workspaces with teachings, international community, and library resources.",
          amenities: {
            wifi: "35+ Mbps",
            hours: "5 AM - 9 PM",
            printers: "Yes",
            coffee: "Tibetan tea culture",
            aircon: "No"
          }
        }
      ],
      "Darjeeling": [
        {
          name: "Tea Garden Workspace",
          location: "Observatory Hill Area",
          type: "Heritage Hill Station",
          dayPass: "₹300",
          monthlyDesk: "₹4,500",
          monthlyPrivate: "₹8,000",
          features: ["Tea garden views", "Colonial heritage", "Mountain vistas", "Cool climate", "Cultural atmosphere"],
          rating: 4.0,
          website: null, // No specific website
          phone: "+91 354 225 4567",
          description: "Work with stunning tea garden views in historic hill station with colonial charm and cool climate.",
          amenities: {
            wifi: "35+ Mbps",
            hours: "7 AM - 8 PM",
            printers: "Yes",
            coffee: "World-famous Darjeeling tea",
            aircon: "No (naturally cool climate)"
          }
        },
        {
          name: "Mall Road Co-working Cafés",
          location: "Mall Road, Darjeeling",
          type: "Tourist Area",
          dayPass: "₹250",
          monthlyDesk: "₹3,500",
          monthlyPrivate: "₹6,500",
          features: ["Tourist hub", "Multiple café options", "Central location", "Mountain views", "Cultural shopping"],
          rating: 3.9,
          website: "Various Mall Road cafés",
          phone: "Contact individual cafés",
          description: "Work in various cafés along historic Mall Road with mountain views and cultural shopping access.",
          amenities: {
            wifi: "20-30 Mbps",
            hours: "8 AM - 9 PM",
            printers: "Limited",
            coffee: "Tea culture and local snacks",
            aircon: "No (cool mountain air)"
          }
        }
      ],
      "Mumbai": [
        {
          name: "91springboard Andheri",
          location: "Andheri East, Mumbai",
          type: "Premium Business Hub",
          dayPass: "₹800",
          monthlyDesk: "₹15,000",
          monthlyPrivate: "₹25,000",
          features: ["Metro connectivity", "24/7 access", "Corporate environment", "Networking events", "Premium facilities"],
          rating: 4.6,
          website: "https://www.91springboard.com/",
          phone: "+91 22 4061 5555",
          description: "Premium coworking in Mumbai's business district with excellent connectivity and corporate facilities.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Barista quality cafe",
            aircon: "Central AC"
          }
        },
        {
          name: "WeWork BKC",
          location: "Bandra Kurla Complex",
          type: "Global Corporate",
          dayPass: "₹1,200",
          monthlyDesk: "₹18,000",
          monthlyPrivate: "₹30,000",
          features: ["BKC location", "International brands", "Premium amenities", "Business networking", "Corporate clients"],
          rating: 4.5,
          website: "https://www.wework.com/",
          phone: "+91 22 6162 1000",
          description: "Global coworking brand in Mumbai's premier business district with world-class facilities.",
          amenities: {
            wifi: "300+ Mbps",
            hours: "24/7 access",
            printers: "High-end printing",
            coffee: "Premium micro-roastery",
            aircon: "Central AC"
          }
        },
        {
          name: "IndiQube Lower Parel",
          location: "Lower Parel, Mumbai",
          type: "Tech Corporate",
          dayPass: "₹700",
          monthlyDesk: "₹12,000",
          monthlyPrivate: "₹22,000",
          features: ["Tech hub location", "Startup ecosystem", "Modern design", "Corporate amenities", "Event spaces"],
          rating: 4.4,
          website: "https://www.indiqube.com/",
          phone: "+91 22 4905 6000",
          description: "Modern tech-focused coworking in Lower Parel with strong startup ecosystem and networking.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Tech cafe with snacks",
            aircon: "Central AC"
          }
        }
      ],
      "Bangalore": [
        {
          name: "91springboard Koramangala",
          location: "Koramangala, Bangalore",
          type: "Startup Ecosystem",
          dayPass: "₹600",
          monthlyDesk: "₹10,000",
          monthlyPrivate: "₹18,000",
          features: ["Startup hub", "Investor network", "Mentorship programs", "Perfect weather", "Tech community"],
          rating: 4.7,
          website: "https://www.91springboard.com/",
          phone: "+91 80 4061 5555",
          description: "Premier startup coworking in Bangalore's Silicon Valley with strong tech ecosystem and mentorship.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Artisan coffee culture",
            aircon: "Naturally cool + AC"
          }
        },
        {
          name: "WeWork Embassy Tech Village",
          location: "Outer Ring Road, Bangalore",
          type: "Tech Campus",
          dayPass: "₹800",
          monthlyDesk: "₹12,000",
          monthlyPrivate: "₹20,000",
          features: ["Tech park location", "IT companies", "Global networking", "Premium facilities", "Food courts"],
          rating: 4.5,
          website: "https://www.wework.com/",
          phone: "+91 80 6162 1000",
          description: "Global coworking in Bangalore's largest tech park with access to IT companies and networking.",
          amenities: {
            wifi: "300+ Mbps",
            hours: "24/7 access",
            printers: "Advanced printing",
            coffee: "International cafe brands",
            aircon: "Central AC"
          }
        },
        {
          name: "Cowrks RMZ Ecospace",
          location: "Bellandur, Bangalore",
          type: "Corporate Tech",
          dayPass: "₹500",
          monthlyDesk: "₹8,500",
          monthlyPrivate: "₹15,000",
          features: ["Tech corridor", "Lake views", "Modern design", "Corporate networking", "Innovation labs"],
          rating: 4.3,
          website: "https://cowrks.com/",
          phone: "+91 80 4718 2000",
          description: "Modern coworking in Bangalore's tech corridor with lake views and innovation-focused environment.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Local specialty coffee",
            aircon: "Central AC"
          }
        }
      ],
      "Pune": [
        {
          name: "91springboard Koregaon Park",
          location: "Koregaon Park, Pune",
          type: "Cultural Business Hub",
          dayPass: "₹500",
          monthlyDesk: "₹8,000",
          monthlyPrivate: "₹14,000",
          features: ["Cultural district", "Startup community", "Pleasant weather", "Networking events", "Modern facilities"],
          rating: 4.5,
          website: "https://www.91springboard.com/",
          phone: "+91 20 4061 5555",
          description: "Premium coworking in Pune's cultural district with perfect weather and vibrant startup community.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Cafe culture",
            aircon: "Natural breeze + AC"
          }
        },
        {
          name: "IndiQube Hinjewadi",
          location: "Hinjewadi IT Park, Pune",
          type: "IT Park Coworking",
          dayPass: "₹450",
          monthlyDesk: "₹7,000",
          monthlyPrivate: "₹12,000",
          features: ["IT park location", "Tech companies", "Corporate amenities", "Transportation hub", "Modern infrastructure"],
          rating: 4.3,
          website: "https://www.indiqube.com/",
          phone: "+91 20 4905 6000",
          description: "Corporate coworking in Pune's major IT park with excellent connectivity and tech ecosystem.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "IT park food court",
            aircon: "Central AC"
          }
        },
        {
          name: "Daftar Viman Nagar",
          location: "Viman Nagar, Pune",
          type: "Community Focused",
          dayPass: "₹400",
          monthlyDesk: "₹6,500",
          monthlyPrivate: "₹11,000",
          features: ["Community events", "Affordable pricing", "Local network", "Flexible space", "Airport proximity"],
          rating: 4.2,
          website: "https://daftar.co.in/",
          phone: "+91 20 2528 3000",
          description: "Community-focused coworking with affordable pricing and strong local networking opportunities.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "9 AM - 9 PM",
            printers: "Yes",
            coffee: "Local cafe partnership",
            aircon: "Yes"
          }
        }
      ],
      "New Delhi": [
        {
          name: "91springboard Gurgaon",
          location: "Cyber City, Gurgaon",
          type: "Corporate Financial Hub",
          dayPass: "₹700",
          monthlyDesk: "₹12,000",
          monthlyPrivate: "₹20,000",
          features: ["Financial district", "Corporate networking", "Metro connectivity", "International businesses", "Premium facilities"],
          rating: 4.4,
          website: "https://www.91springboard.com/",
          phone: "+91 124 4061 5555",
          description: "Premium coworking in Delhi's financial district with corporate networking and international business access.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "International cafe chains",
            aircon: "Central AC"
          }
        },
        {
          name: "WeWork Galaxy",
          location: "Noida, NCR Delhi",
          type: "Tech Corporate",
          dayPass: "₹800",
          monthlyDesk: "₹13,000",
          monthlyPrivate: "₹22,000",
          features: ["Tech hub", "Modern design", "Global community", "Startup programs", "Innovation spaces"],
          rating: 4.3,
          website: "https://www.wework.com/",
          phone: "+91 120 6162 1000",
          description: "Global coworking in Delhi NCR's tech hub with innovation spaces and international community.",
          amenities: {
            wifi: "300+ Mbps",
            hours: "24/7 access",
            printers: "Advanced facilities",
            coffee: "Premium coffee culture",
            aircon: "Central AC"
          }
        },
        {
          name: "MyHQ Connaught Place",
          location: "Connaught Place, New Delhi",
          type: "Central Business District",
          dayPass: "₹600",
          monthlyDesk: "₹10,000",
          monthlyPrivate: "₹18,000",
          features: ["Central location", "Heritage area", "Government proximity", "Business networking", "Transportation hub"],
          rating: 4.1,
          website: "https://myhq.in/",
          phone: "+91 11 4061 5000",
          description: "Central Delhi coworking in historic Connaught Place with government and business proximity.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "9 AM - 9 PM",
            printers: "Yes",
            coffee: "Heritage cafe culture",
            aircon: "Central AC"
          }
        }
      ],
      "Kolkata": [
        {
          name: "91springboard Salt Lake",
          location: "Salt Lake City, Kolkata",
          type: "Cultural Business Hub",
          dayPass: "₹400",
          monthlyDesk: "₹6,000",
          monthlyPrivate: "₹10,000",
          features: ["Cultural city", "Intellectual community", "Affordable pricing", "Creative environment", "Literary heritage"],
          rating: 4.2,
          website: "https://www.91springboard.com/",
          phone: "+91 33 4061 5555",
          description: "Cultural coworking in Kolkata's business district with intellectual community and creative atmosphere.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "9 AM - 9 PM",
            printers: "Yes",
            coffee: "Adda culture with tea",
            aircon: "Central AC"
          }
        },
        {
          name: "Spaces Park Street",
          location: "Park Street, Kolkata",
          type: "Heritage Cultural",
          dayPass: "₹350",
          monthlyDesk: "₹5,500",
          monthlyPrivate: "₹9,000",
          features: ["Heritage location", "Cultural events", "Creative community", "Literature clubs", "Affordable workspace"],
          rating: 4.0,
          website: "Local cultural centers",
          phone: "+91 33 2227 8000",
          description: "Heritage coworking on famous Park Street with cultural events and creative community atmosphere.",
          amenities: {
            wifi: "80+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Basic",
            coffee: "Traditional tea culture",
            aircon: "Yes"
          }
        }
      ],
      "Jaipur": [
        {
          name: "RIICO Industrial Coworking",
          location: "Malviya Nagar, Jaipur",
          type: "Heritage Business",
          dayPass: "₹400",
          monthlyDesk: "₹6,000",
          monthlyPrivate: "₹10,000",
          features: ["Heritage city", "Handicraft industry", "Tourism business", "Royal architecture", "Cultural events"],
          rating: 4.1,
          website: "Local business centers",
          phone: "+91 141 227 8000",
          description: "Heritage city coworking with connections to handicraft industry and tourism business networks.",
          amenities: {
            wifi: "80+ Mbps",
            hours: "9 AM - 7 PM",
            printers: "Yes",
            coffee: "Rajasthani tea culture",
            aircon: "Central AC"
          }
        },
        {
          name: "Pink City Digital Hub",
          location: "Vaishali Nagar, Jaipur",
          type: "Modern Heritage",
          dayPass: "₹350",
          monthlyDesk: "₹5,500",
          monthlyPrivate: "₹9,000",
          features: ["Modern amenities", "Heritage charm", "Tourism networking", "Cultural immersion", "Affordable rates"],
          rating: 3.9,
          website: null, // No specific website
          phone: "+91 141 228 9000",
          description: "Modern coworking in Pink City combining heritage charm with contemporary business facilities.",
          amenities: {
            wifi: "60+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Basic",
            coffee: "Royal tea service",
            aircon: "Yes"
          }
        }
      ],
      "Udaipur": [
        {
          name: "Lake Palace Coworking",
          location: "Lake Pichola Area, Udaipur",
          type: "Royal Heritage",
          dayPass: "₹500",
          monthlyDesk: "₹7,000",
          monthlyPrivate: "₹12,000",
          features: ["Lake views", "Royal architecture", "Tourism industry", "Cultural heritage", "Peaceful environment"],
          rating: 4.3,
          website: null, // No specific website
          phone: "+91 294 242 8000",
          description: "Stunning lake-view coworking in royal Udaipur with heritage architecture and peaceful environment.",
          amenities: {
            wifi: "70+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Yes",
            coffee: "Royal hospitality",
            aircon: "Heritage cooling"
          }
        },
        {
          name: "City Palace Business Center",
          location: "Near City Palace, Udaipur",
          type: "Heritage Tourism",
          dayPass: "₹400",
          monthlyDesk: "₹6,000",
          monthlyPrivate: "₹10,000",
          features: ["Palace proximity", "Tourism business", "Cultural networking", "Royal ambiance", "Heritage experience"],
          rating: 4.0,
          website: null, // No specific website
          phone: "+91 294 241 7000",
          description: "Heritage business center near City Palace with royal ambiance and tourism industry connections.",
          amenities: {
            wifi: "60+ Mbps",
            hours: "9 AM - 7 PM",
            printers: "Basic",
            coffee: "Maharaja hospitality",
            aircon: "Yes"
          }
        }
      ],
      "Gangtok": [
        {
          name: "Sanctorum Co-Working",
          location: "Development Area, opposite of Nettle & Fern, Upper Sichey, Sungava, Gangtok, Sikkim",
          type: "Mountain Capital",
          dayPass: "₹450",
          monthlyDesk: "₹4,500",
          features: ["Mountain views", "Clean environment", "Peaceful setting", "Tourism base", "Cultural diversity"],
          rating: 4.0,
          website: "https://www.sanctorum.work",
          phone: "+91 99070 61463",
          description: "Mountain capital coworking with stunning Himalayan views and peaceful environment for productivity.",
          amenities: {
            wifi: "50+ Mbps",
            printers: "Basic",
            coffee: "Himalayan tea culture",
            aircon: "Natural mountain cooling",
            other_amenities: "Strong Wi-Fi"
          }
        },
        {
          name: "MyBranch Gangtok",
          location: "1st Floor, Mohora Commercial, Opp. Deorali Bazar, Near Butterfly Bridge, Gangtok, Sikkim",
          type: "Mountain Capital",
          dayPass: "Enquire by visiting the website",
          monthlyDesk: "Enquire by visiting the website",
          monthlyPrivate: "Enquire by visiting the website",
          features: ["Mountain views", "Clean environment", "Peaceful setting", "Tourism base", "Cultural diversity"],
          rating: 4.0,
          website: "https://www.mybranch.co.in",
          phone: "+91 8541999506",
          description: "Mountain capital coworking with stunning Himalayan views and peaceful environment for productivity.",
          amenities: {
            wifi: "60+ Mbps",
            hours: "9 AM - 7 PM",
            printers: "Basic",
            coffee: "Maharaja hospitality",
            aircon: "Yes"
          }
        }
      ],
      "McLeodganj": [
        {
          name: "Dharamshala Spiritual Workspace",
          location: "McLeod Ganj, Dharamshala",
          type: "Spiritual Community",
          dayPass: "₹250",
          monthlyDesk: "₹3,500",
          monthlyPrivate: "₹6,000",
          features: ["Spiritual environment", "Dalai Lama proximity", "International community", "Meditation spaces", "Mountain peace"],
          rating: 4.2,
          website: null, // No specific website
          phone: "+91 1892 221 000",
          description: "Unique spiritual coworking in Dalai Lama's residence with international community and meditation spaces.",
          amenities: {
            wifi: "40+ Mbps",
            hours: "6 AM - 8 PM",
            printers: "Basic",
            coffee: "Tibetan tea culture",
            aircon: "Natural mountain air"
          }
        }
      ],
      "Mussoorie": [
        {
          name: "Queen of Hills Workspace",
          location: "Mall Road, Mussoorie",
          type: "Hill Station Heritage",
          dayPass: "₹350",
          monthlyDesk: "₹5,000",
          monthlyPrivate: "₹8,000",
          features: ["Hill station charm", "Colonial architecture", "Mountain views", "Tourist season work", "Cool climate"],
          rating: 3.9,
          website: null, // No specific website
          phone: "+91 135 263 2000",
          description: "Charming hill station coworking with colonial heritage and stunning mountain views in cool climate.",
          amenities: {
            wifi: "30+ Mbps",
            hours: "8 AM - 7 PM",
            printers: "Basic",
            coffee: "Hill station tea culture",
            aircon: "Natural cooling"
          }
        }
      ],
      "Shillong": [
        {
          name: "Scotland of the East Hub",
          location: "Police Bazar, Shillong",
          type: "Cultural Music Hub",
          dayPass: "₹300",
          monthlyDesk: "₹4,000",
          monthlyPrivate: "₹6,500",
          features: ["Music culture", "Cultural diversity", "Pleasant climate", "Creative community", "Unique cuisine"],
          rating: 3.8,
          website: null, // No specific website
          phone: "+91 364 250 2000",
          description: "Cultural coworking in Northeast India's music capital with creative community and pleasant climate.",
          amenities: {
            wifi: "35+ Mbps",
            hours: "9 AM - 7 PM",
            printers: "Basic",
            coffee: "Northeast tea culture",
            aircon: "Natural cooling"
          }
        }
      ],
      "Ziro Valley": [
        {
          name: "Apatani Valley Workspace",
          location: "Ziro Valley, Arunachal Pradesh",
          type: "Tribal Cultural",
          dayPass: "₹200",
          monthlyDesk: "₹3,000",
          monthlyPrivate: "₹5,000",
          features: ["UNESCO heritage", "Tribal culture", "Rice terraces", "Music festivals", "Unique experience"],
          rating: 4.0,
          website: null, // No specific website
          phone: "+91 3788 225 000",
          description: "Unique tribal valley coworking in UNESCO heritage site with rice terraces and cultural immersion.",
          amenities: {
            wifi: "20+ Mbps (improving)",
            hours: "Flexible community hours",
            printers: "Basic community printing",
            coffee: "Local millet beverages",
            aircon: "Natural valley cooling"
          }
        }
      ]
    };

    return spacesByCity[cityName] || spacesByCity["Goa"];
  };

  const coworkingSpaces = getCitySpecificSpaces(city.name);

  const getTypeColor = (type: string) => {
    const typeColors: { [key: string]: string } = {
      "Premium": "bg-vintage-gold/10 text-vintage-gold",
      "Beach-side": "bg-travel-blue/10 text-travel-blue",
      "Corporate": "bg-sage-green/10 text-sage-green",
      "Tech Hub": "bg-vintage-gold/10 text-vintage-gold",
      "Creative Hub": "bg-travel-blue/10 text-travel-blue",
      "Startup Hub": "bg-sage-green/10 text-sage-green",
      "Remote": "bg-muted-navy/10 text-muted-navy",
      "Ocean View": "bg-travel-blue/10 text-travel-blue",
      "Mountain Remote": "bg-sage-green/10 text-sage-green"
    };
    return typeColors[type] || "bg-gray-100 text-gray-600";
  };

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Users className="mr-3 h-8 w-8 text-vintage-gold" />
          Coworking Spaces in {city.name}
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Professional workspaces designed for digital nomads, freelancers, and remote workers with all amenities and vibrant communities.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid gap-6">
          {coworkingSpaces.map((space, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-xl text-travel-blue mb-2">{space.name}</h3>
                  <div className="flex items-center text-muted-navy mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {space.location}
                  </div>
                  <Badge className={getTypeColor(space.type)}>{space.type}</Badge>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-1">
                    <Star className="h-4 w-4 text-vintage-gold mr-1" />
                    <span className="font-semibold">{space.rating}</span>
                  </div>
                  <div className="text-sm text-muted-navy">Rating</div>
                </div>
              </div>

              <p className="text-muted-navy mb-4">{space.description}</p>

              {/* Pricing */}
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex items-center mb-1">
                    <DollarSign className="h-4 w-4 text-sage-green mr-1" />
                    <span className="font-semibold text-sage-green">Day Pass</span>
                  </div>
                  <div className="text-xl font-bold text-travel-blue">{space.dayPass}</div>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex items-center mb-1">
                    <Users className="h-4 w-4 text-travel-blue mr-1" />
                    <span className="font-semibold text-travel-blue">Hot Desk</span>
                  </div>
                  <div className="text-xl font-bold text-travel-blue">{space.monthlyDesk}</div>
                </div>
                <div className="bg-white rounded-lg p-3 border">
                  <div className="flex items-center mb-1">
                    <Users className="h-4 w-4 text-vintage-gold mr-1" />
                    <span className="font-semibold text-vintage-gold">Private Office</span>
                  </div>
                  <div className="text-xl font-bold text-travel-blue">{space.monthlyPrivate}</div>
                </div>
              </div>

              {/* Amenities */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-travel-blue mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {space.features.map((feature: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="bg-travel-blue/10 text-travel-blue">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-travel-blue mb-2">Amenities</h4>
                  <div className="space-y-1 text-sm text-muted-navy">
                    <div className="flex items-center">
                      <Wifi className="h-3 w-3 mr-2" />
                      WiFi: {space.amenities.wifi}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-2" />
                      Hours: {space.amenities.hours}
                    </div>
                    <div className="flex items-center">
                      <Coffee className="h-3 w-3 mr-2" />
                      Coffee: {space.amenities.coffee}
                    </div>
                    <div className="flex items-center">
                      <Package className="h-3 w-3 mr-2" />
                      Other Amenities: {space.amenities.other_amenities}
                      </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-muted-navy">
                  <div className="flex items-center">
                    <Phone className="h-3 w-3 mr-1" />
                    {space.phone}
                  </div>
                </div>
                <div className="flex space-x-2">
                  {space.website && 
                   space.website !== "Local inquiry" && 
                   space.website !== "Community-based workspace" &&
                   space.website !== "Various spiritual centers" &&
                   space.website !== "Various Mall Road cafés" &&
                   space.website !== "Contact individual cafés" &&
                   space.website !== "Contact locally" &&
                   space.website !== "Local inquiry only" &&
                   !space.website.includes("Various") &&
                   !space.website.includes("Contact") &&
                   space.website.startsWith("http") && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={space.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                  <Button size="sm" asChild>
                    <a href={`tel:${space.phone}`}>
                      <Phone className="h-3 w-3 mr-1" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-vintage-gold/10 to-travel-blue/10 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-travel-blue mb-4">
            {city.name} Coworking Scene Summary
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-travel-blue">{coworkingSpaces.length}</div>
              <div className="text-sm text-muted-navy">Total Spaces</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-vintage-gold">
                {Math.min(...coworkingSpaces.map(s => parseInt(s.dayPass.replace('₹', '').replace(',', ''))))}
              </div>
              <div className="text-sm text-muted-navy">Min Day Pass (₹)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sage-green">
                {Math.round(coworkingSpaces.reduce((acc, s) => acc + s.rating, 0) / coworkingSpaces.length * 10) / 10}
              </div>
              <div className="text-sm text-muted-navy">Avg Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-travel-blue">
                {Math.min(...coworkingSpaces.map(s => parseInt(s.monthlyDesk.replace('₹', '').replace(',', ''))))}
              </div>
              <div className="text-sm text-muted-navy">Min Monthly (₹)</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
