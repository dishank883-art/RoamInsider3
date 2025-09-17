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
          location: "Panaji, Goa",
          type: "Premium",
          dayPass: "₹500",
          monthlyDesk: "₹8,000",
          monthlyPrivate: "₹15,000",
          features: ["High-speed WiFi", "Meeting rooms", "Events", "Cafe", "Parking"],
          rating: 4.5,
          website: "https://www.91springboard.com/",
          phone: "+91 95975 19191",
          description: "Professional coworking space with startup ecosystem and regular networking events.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Unlimited",
            aircon: "Yes",
            other_amenities: "Customized Private Suites"
          }
        },
        {
          name: "Mewo Coworking Space",
          location: "MeWo - Meetings & Co-Working, Dempo Trade Center, 002, 004 Ground Floor & 706 7th Floor, Patto, Panjim, Goa",
          type: "Professional Workspace",
          dayPass: "₹400",
          monthlyDesk: "₹6,500",
          monthlyPrivate: "₹12,000",
          features: ["Enclosed workspace", "Yoga classes", "Healthy cafe"],
          rating: 4.3,
          website: "https://mewo.co/",
          phone: "+91 81045 64129",
          description: "Unique beachside coworking with wellness focus and outdoor workspace options.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "9 AM - 9 PM",
            printers: "Yes",
            coffee: "Premium coffee",
            aircon: "Yes",
            other_amenities: "Unlimited Wifi, Community Events & Activities, Exquisite Cafe Access"
            }
        },
        {
          name: "The Coworking Space Goa",
          location: "Third floor, Midas Touch, Opp District and Sessions Court, Old Market, Shop no.1-6, Fatorda, Madgaon, Goa",
          type: "Professional",
          dayPass: "₹400",
          monthlyDesk: "₹6,500",
          monthlyPrivate: "₹12,000",
          features: ["High-Speed Internet", "Reserved Workspace", "Secure Storage", "Access to Pantry & Lounge", "Bike rental"],
          rating: 4.3,
          website: "https://thecoworkingspacegoa.com/",
          phone: "+91 91727 23630",
          description: "Unique beachside coworking with wellness focus and outdoor workspace options.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "9 AM - 7 PM",
            printers: "Yes",
            coffee: "Premium coffee",
            aircon: "Yes",
            other_amenities: "Secure & Dedicated Lockers, Fully Enclosed Office Space"
          }
        }
      ],
      "Bir": [
        {
          name: "Bir Nest Workspace",
          location: "Near Learn Well School Village Chougan, Bir, Himachal Pradesh 176077, India",
          type: "Café Coworking",
          dayPass: "₹400",
          monthlyDesk: "Connect with them",
          monthlyPrivate: "Connect with them",
          features: ["Mountain views", "Good WiFi", "Healthy food", "Quiet environment", "Power outlets"],
          rating: 4.2,
          website: "https://www.coworker.com/india/bir/bir-nest",
          phone: "NA",
          description: "Popular café with coworking-friendly environment and beautiful mountain views.",
          amenities: {
            wifi: "30+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Yes",
            coffee: "Excellent coffee and food",
            aircon: "Heating System Available",
            other_amenities: "Standing Desks, Pet Friendly, Personal Lockers, Showers, Restaurant, Free Drinking Water"      
          }
        }
      ],
      
      "Dehradun": [
        {
          name: "iKSANA Workspaces Dehradun",
          location: "IT Park: CPL-I Tower",
          type: "Premium Coworking",
          dayPass: "₹500",
          monthlyDesk: "₹6,000",
          monthlyPrivate: "Visit the Website",
          features: ["High-speed WiFi", "Meeting rooms", "Housekeeping & Maintenance", "Dedicated Helpdesk", "24x7 Security"],
          rating: 4.4,
          website: "https://www.iksana.work/",
          phone: "+91 9354064958",
          description: "Professional coworking space with startup ecosystem and networking events.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Unlimited Tea and Coffee",
            aircon: "Yes",
            other_amenities: "Power Back-Up, Serviced Cafeteria, Parking, Breakout Spaces & Lounges, A/V Equipment, Door Access control" 
          }
        },
        {
          name: "Jumpstart Coworking",
          location: "Shagun Tower 2nd floor, New Road, Dwarka Store Chowk, Dehradun, India",
          type: "Sustainable Coworking",
          dayPass: "₹500",
          monthlyDesk: "₹5,000",
          monthlyPrivate: "₹10,000",
          features: ["Highspeed WiFi", "Gaming Area", "Security Surveilance", "24/6"],
          rating: 4.1,
          website: "https://jumpstartcoworking.com/",
          phone: "+91 8193045555",
          description: "Sustainable Coworking in Your City.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "9 AM - 6 PM",
            printers: "Yes",
            coffee: "Cafeteria",
            aircon: "Yes",
            other_amenities: "First-aid, Biometric / Face Lock, Parking"
            }
        },
        {
          name: "The Circle . Work",
          location: "Rajpur Road, Dehradun, India",
          type: "Professional Coworking",
          dayPass: "₹499",
          monthlyDesk: "₹7,999",
          monthlyPrivate: "₹11,999",
          features: ["Highspeed WiFi", "Mail Access", "Housekeeping Service", "Dedicated Phoneline"],
          rating: 4.1,
          website: "https://jumpstartcoworking.com/",
          phone: "011-43099785",
          description: "Professional Coworking in Your City.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "9 AM - 6 PM",
            printers: "Yes",
            coffee: "Food and Beverages",
            aircon: "Yes",
            other_amenities: "Productive Meeting Spaces, Dedicated Circle"
            }
        },
        {
          name: "Incuspaze Office Spaces",
          location: "302, 3rd Floor, Work Food & Entertainment City (WFEC), Rajpur Rd, Clock , Tower, Dehradun, Uttarakhand 248009",
          type: "Professional Coworking", 
          dayPass: "Visit the Website",
          monthlyDesk: "Visit the Website",
          monthlyPrivate: "Visit the Website",
          features: ["High Speed Internet", "IT Support", "Lounge", "Community Manager", "Conference Room"],
          rating: 4.1,
          website: "https://www.incuspaze.com/dehradun/space-details/incuspaze-wfec",
          phone: "+91 9930662621",
          description: "Professional Coworking in Your City.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "9 AM - 8 PM",
            printers: "Yes",
            coffee: "Cafeteria & Pantry",
            aircon: "Yes",
            other_amenities: "Reception, Daily Cleaning"
          }
        }
      ],
      "Ziro": [
        {
          name: "Oops! No coworking space in Ziro",
          location: "NA",
          type: "NA",
          dayPass: "NA",
          monthlyDesk: "NA",
          monthlyPrivate: "NA",
          features: ["NA"],
          rating: 0,
          website: null, // No website available
          phone: "NA",
          description: "NA",
          amenities: {
            wifi: "NA",
            hours: "NA",
            printers: "NA",
            coffee: "NA",
            aircon: "NA",
            other_amenities: "NA"
          }
        }
      ],
      "Alleppey": [
        {
          name: "Oops! No coworking space in Alleppey",
          location: "NA",
          type: "NA",
          dayPass: "NA",
          monthlyDesk: "NA",
          monthlyPrivate: "NA",
          features: ["NA"],
          rating: 0,
          website: null, // No website available
          phone: "NA",
          description: "NA",
          amenities: {
            wifi: "NA",
            hours: "NA",
            printers: "NA",
            coffee: "NA",
            aircon: "NA",
            other_amenities: "NA"
          }
        }
      ],
      "Varkala": [
        {
          name: "Sarwaa - Kapi Coworking",
          location: "Sarwaa, Bal mahal, to, DPI Rd, opposite All India Radio Road, DPI, Vazhuthacaud, Thiruvananthapuram, Kerala 695014",
          type: "Ocean View",
          dayPass: "Contact the Team",
          monthlyDesk: "Contact the Team",
          monthlyPrivate: "Contact the Team",
          features: ["Ocean view", "Yoga classes", "Wellness focus", "Healthy cafe", "Sunset workspace"],
          rating: 4.5,
          website: "https://www.sarwaa.in/",
          phone: null, // No phone number available",
          description: "Stunning coworking with ocean views and wellness-focused community.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "7 AM - 9 PM",
            printers: "Yes",
            coffee: "Organic coffee",
            aircon: "Sea breeze + fans",
            other_amenities: "Strong Wi-Fi, Cafe, Handicraft Store"
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
          name: "Incuspaze Office Spaces",
          location: "34/195, 3rd floor NH bypass, Padivattom, Edappally, Kochi, Kerala",
          type: "Tech Hub",
          dayPass: "₹500",
          monthlyDesk: "₹6,999",
          monthlyPrivate: "₹14,000",
          features: ["IT ecosystem", "High Speed Internet", "Conference Room", "Networking events", "Modern facilities"],
          rating: 4.4,
          website: "https://www.incuspaze.com/kochi/space-details/incuspaze-oberon-mall",
          phone: "+91 993662621",
          description: "Premier tech coworking in Kerala's IT hub with strong startup ecosystem and mentorship.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Cafeteria & Pantry",
            aircon: "Central AC",
            other_amenities: "Daily Cleaning, Community Manager, Lounge"      
          }
        },
        {
          name: "Bizcospaces Kochi",
          location: "8th Floor, Infra Futura, Seaport - Airport Rd, opposite Bharat Matha College, Thrikkakara, Kakkanad, Kochi",
          type: "Heritage Coworking",
          dayPass: "₹400",
          monthlyDesk: "₹6,000",
          monthlyPrivate: "₹11,000",
          features: ["100% Electricity Backup", "Fully Managed", "Inspiring Views", "Meeting Rooms", "Tourist area"],
          rating: 4.2,
          website: "https://bizcospaces.com/",
          phone: "+91 80789 99900",
          description: "Work in colonial heritage buildings with cultural atmosphere and backwater views.",
          amenities: {
            wifi: "50+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Yes",
            coffee: "Pantry Available",
            aircon: "Yes",
            other_amenities: "Mail & Package Handling, Parking, Complimentary Tea/Coffee/Water"
          }
        }
      ],
      "Wayanad": [
        {
          name: "dewSpace Coworking",
          location: "dewSpace Building, dewSprout Building dew Road Gurukulam Road (Ooty - Mysuru Cross Road, 16/297, dew Road, Sultan Bathery",
          type: "Eco Coworking",
          dayPass: "Visit the Website",
          monthlyDesk: "Visit the Website",
          monthlyPrivate: "Visit the Website",
          features: ["High Speed Internet", "Car Parking", "Free Cloud Storage", "Kitchen"],
          rating: 4.0,
          website: "https://www.dewspace.org/",
          phone: "+91 99950 22009",
          description: "Redefining Workspaces at dewSpace Coworking.",
          amenities: {
            wifi: "40+ Mbps",
            hours: "9 AM - 8 PM",
            printers: "Basic",
            coffee: "Tea & Coffee",
            aircon: "Yes",
            other_amenities: "CRM software, Security"
          }
        }
      ],
      "Dharamkot": [
        {
          name: "Nomadgao",
          location: "Minimart, behind Radhakrishna Cafe, opposite Dharamkot, Dharamkot, Dharamshala, Himachal Pradesh",
          type: "Mountain Community",
          dayPass: "₹250",
          monthlyDesk: "₹3,000",
          monthlyPrivate: "₹5,500",
          features: ["Mountain views", "Tibetan community", "Power Backup", "Ergonomic Chairs", "Community"],
          rating: 4.1,
          website: "https://nomadgao.com/destinations/coliving-coworking-remote-work-dharamkot-dharamshala/",
          phone: "020 7117 9111",
          description: "A coliving space in Himachal offering rich mountain view rooms, a coworking space and an in-house cafe to get things done.",
          amenities: {
            wifi: "30+ Mbps",
            hours: "6 AM - 10 PM",
            printers: "Basic",
            coffee: "Tibetan butter tea and international options",
            aircon: "Yes",
            other_amenities: "Smoking Area, Laundry"
          }
        },
        {
          name: "The Void Life",
          location: "Manisha Rd, Bhagsu Nag, Dharamshala, Himachal Pradesh",
          type: "Spiritual Hub",
          dayPass: "₹300",
          monthlyDesk: "₹4,000",
          monthlyPrivate: "₹7,000",
          features: ["Dalai Lama proximity", "Spiritual teachings", "International community", "Cultural events"],
          rating: 4.9,
          website: "https://www.thevoidlife.com/ ",
          phone: "+91 6300796184",
          description: "A coliving and coworking space in the lap of Himachal.",
          amenities: {
            wifi: "35+ Mbps",
            hours: "8:30 AM - 10 PM",
            printers: "Yes",
            coffee: "Tibetan tea culture",
            aircon: "No",
            other_amenities: "Technology enabled, Yoga Sessions"
          }
        }
      ],
      "Darjeeling": [
        {
          name: "Oops! No Co-working spaces in Darjeeling.",
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
            aircon: "NA",
            other_amenities: "NA"
          }
        }
      ],
      "Mumbai": [
        {
          name: "91springboard Andheri Lotus",
          location: "Plot No. D, 5th Rd, Shree Krishna Nagar, Marol MIDC Industry Estate, Andheri East, Mumbai, Maharashtra",
          type: "Premium Business Hub",
          dayPass: "₹800",
          monthlyDesk: "₹15,000",
          monthlyPrivate: "₹25,000",
          features: ["Metro connectivity", "24/7 access", "Corporate environment", "Networking events", "Premium facilities"],
          rating: 4.6,
          website: "https://www.91springboard.com/co-working-office-space-mumbai/lotus-star-andheri-east/",
          phone: "+91 95975 19191",
          description: "Premium coworking in Mumbai's business district with excellent connectivity and corporate facilities and muliple locations in Mumbai.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Barista quality cafe",
            aircon: "Central AC",
            other_amenities: "Game Zones, Parking, Poer Backup, Daily Cleaning & Sanitization, Easy Customization, Pan India Access"
          }
        },
        {
          name: "WeWork BKC Enam Sambhav",
          location: "C - 20, G Block Rd, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra",
          type: "Global Corporate",
          dayPass: "₹1,200",
          monthlyDesk: "₹18,000",
          monthlyPrivate: "₹60,000",
          features: ["BKC location", "International brands", "Premium amenities", "Business networking", "Corporate clients"],
          rating: 4.5,
          website: "https://wework.co.in/mumbai/bkc/enam-sambhav/",
          phone: "1800 123 999 000",
          description: "Global coworking brand in Mumbai's premier business district with world-class facilities and muliple locations in Mumbai",
          amenities: {
            wifi: "300+ Mbps",
            hours: "24/7 access",
            printers: "High-end printing",
            coffee: "Premium micro-roastery",
            aircon: "Central AC",
            other_amenities: "Wellness room, Outdoor space, Coffee Bar, Mail and package handling, Parking, Bike Storage, Phone booths, Pantry, 24/7 Security, F & B market, Event Spaces"
          }
        },
        {
          name: "IndiQube Arena Jogeshwari East",
          location: "10th and 11th floor, Plot no :, 20, Jogeshwari - Vikhroli Link Rd, nr. Majas Depot, Shyam Nagar, Jogeshwari East, Mumbai, Maharashtra",
          type: "Tech Corporate",
          dayPass: "₹700",
          monthlyDesk: "₹12,000",
          monthlyPrivate: "₹22,000",
          features: ["Tech hub location", "Startup ecosystem", "Modern design", "Corporate amenities", "Event spaces"],
          rating: 4.4,
          website: "https://www.indiqube.com/",
          phone: "+91 7349282552",
          description: "Modern tech-focused coworking in Lower Parel with strong startup ecosystem and networking and multiple locations in Mumbai.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Tech cafe with snacks",
            aircon: "Central AC",
            other_amenities: "Smart Meeting Rooms, Breakout Zone, Visitor Management, Smart Cafe"
          }
        }
      ],
      "Bangalore": [
        {
          name: "91springboard Koramangala",
          location: " 3rd Floor, Padmavathi Complex, 80 Feet Rd, Koramangala 8th Block, Koramangala, Bengaluru, Karnataka",
          type: "Startup Ecosystem",
          dayPass: "₹600",
          monthlyDesk: "₹10,000",
          monthlyPrivate: "₹18,000",
          features: ["Startup hub", "Investor network", "Mentorship programs", "Perfect weather", "Tech community"],
          rating: 4.7,
          website: "https://www.91springboard.com/",
          phone: "+91 9597519191",
          description: "Premier startup coworking in Bangalore's Silicon Valley with strong tech ecosystem and mentorship.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Artisan coffee culture",
            aircon: "Naturally cool + AC",
            other_amenities: "Game Zones, Parking, Poer Backup, Daily Cleaning & Sanitization, Easy Customization, Pan India Access"
          }
        },
        {
          name: "WeWork Embassy Tech Village",
          location: "BLOCK-L, Embassy TechVillage, Outer Ring Rd, Devarabisanahalli, Bellandur, Bengaluru, Karnataka",
          type: "Tech Campus",
          dayPass: "₹800",
          monthlyDesk: "₹12,000",
          monthlyPrivate: "₹20,000",
          features: ["Tech park location", "IT companies", "Global networking", "Premium facilities", "Food courts"],
          rating: 4.5,
          website: "https://www.wework.com/",
          phone: "1800 123 999 000",
          description: "Global coworking in Bangalore's largest tech park with access to IT companies and networking.",
          amenities: {
            wifi: "300+ Mbps",
            hours: "24/7 access",
            printers: "Advanced printing",
            coffee: "International cafe brands",
            aircon: "Central AC",
            other_amenities: "Wellness room, Outdoor space, Coffee Bar, Mail and package handling, Parking, Bike Storage, Phone booths, Pantry, 24/7 Security, F & B market, Event Spaces"
          }
        },
        {
          name: "Cowrks RMZ Ecospace",
          location: " Bay Area, Cowrks 6A, Ground Floor, ECOWORLD, 6A, Outer Ring Rd, adjacent to Building, Devarabisanahalli, Bellandur, Bengaluru, Karnataka",
          type: "Corporate Tech",
          dayPass: "₹500",
          monthlyDesk: "₹8,500",
          monthlyPrivate: "₹15,000",
          features: ["Tech corridor", "Lake views", "Modern design", "Corporate networking", "Innovation labs"],
          rating: 4.3,
          website: "https://cowrks.com/",
          phone: "+91 95386 11122",
          description: "Modern coworking in Bangalore's tech corridor with lake views and innovation-focused environment.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Gourmet Beverages",
            aircon: "Central AC",
            other_amenities: "Community Experience, Exclusive Events, Office Supplies, App Access"
          }
        }
      ],
      "Pune": [
        {
          name: "91springboard Yerawada",
          location: "91Springboard, Sky Loft, CREATICITY MALL, opposite Golf Course, off Airport Road, Shastrinagar, Yerawada, Pune",
          type: "Cultural Business Hub",
          dayPass: "₹500",
          monthlyDesk: "₹8,000",
          monthlyPrivate: "₹14,000",
          features: ["Cultural district", "Startup community", "Pleasant weather", "Networking events", "Modern facilities"],
          rating: 4.5,
          website: "https://www.91springboard.com/",
          phone: "+91 95975 19191",
          description: "Premium coworking in Pune's cultural district with perfect weather and vibrant startup community.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "Cafe culture",
            aircon: "Natural breeze + AC",
            other_amenities: "Game Zones, Parking, Poer Backup, Daily Cleaning & Sanitization, Easy Customization, Pan India Access"
          }
        },
        {
          name: "IndiQube Unity Towers",
          location: "Balewadi Phata, Baner, Pune, Maharashtra",
          type: "IT Park Coworking",
          dayPass: "₹450",
          monthlyDesk: "₹7,000",
          monthlyPrivate: "₹12,000",
          features: ["IT park location", "Tech companies", "Corporate amenities", "Transportation hub", "Modern infrastructure"],
          rating: 4.3,
          website: "https://www.indiqube.com/",
          phone: "+91 7349282552",
          description: "Corporate coworking in Pune's major IT park with excellent connectivity and tech ecosystem.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "IT park food court",
            aircon: "Central AC",
            other_amenities: "Access Contro Systems, EV Charging Station, Visitor Management System"
          }
        },
        {
          name: "StartHub Cowwork Space",
          location: "2nd floor, Jewel Square mall, Koregaon Rd, near hotel taj vivanta, Koregaon Park, Pune, Maharashtra",
          type: "Community Focused",
          dayPass: "Visit The Website",
          monthlyDesk: "Visit The Website",
          monthlyPrivate: "Visit The Website",
          features: ["Community events", "Affordable pricing", "Local network", "Flexible space", "Airport proximity"],
          rating: 4.2,
          website: "https://www.starthub.in/",
          phone: "+91 79725 91804",
          description: "Community-focused coworking with affordable pricing and strong local networking opportunities.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "9:30 AM - 6:30 PM",
            printers: "Yes",
            coffee: "Local cafe partnership",
            aircon: "Yes",
            other_amenities: "Recreation Zone, Events, Customized Workplace"
          }
        }
      ],
      "New Delhi": [
        {
          name: "91springboard Gurgaon",
          location: "DLF Building No. 7A, 7A, DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana",
          type: "Corporate Financial Hub",
          dayPass: "₹700",
          monthlyDesk: "₹12,000",
          monthlyPrivate: "₹20,000",
          features: ["Financial district", "Corporate networking", "Metro connectivity", "International businesses", "Premium facilities"],
          rating: 4.4,
          website: "https://www.91springboard.com/",
          phone: "+91 95975 19191",
          description: "Premium coworking in Delhi's financial district with corporate networking and international business access.",
          amenities: {
            wifi: "200+ Mbps",
            hours: "24/7 access",
            printers: "Yes",
            coffee: "International cafe chains",
            aircon: "Central AC",
            other_amenities: "Game Zones, Parking, Poer Backup, Daily Cleaning & Sanitization, Easy Customization, Pan India Access"
          }
        },
        {
          name: "WeWork Galaxy Business Park",
          location: "1st floor, GALAXY BUSINESS PARK, WeWork, A-44 & 45, Sushil Marg, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh",
          type: "Tech Corporate",
          dayPass: "₹800",
          monthlyDesk: "₹13,000",
          monthlyPrivate: "₹22,000",
          features: ["Tech hub", "Modern design", "Global community", "Startup programs", "Innovation spaces"],
          rating: 4.3,
          website: "https://www.wework.com/",
          phone: "1800 123 999 000",
          description: "Global coworking in Delhi NCR's tech hub with innovation spaces and international community.",
          amenities: {
            wifi: "300+ Mbps",
            hours: "24/7 access",
            printers: "Advanced facilities",
            coffee: "Premium coffee culture",
            aircon: "Central AC",
            other_amenities: "Wellness room, Outdoor space, Coffee Bar, Mail and package handling, Parking, Bike Storage, Phone booths, Pantry, 24/7 Security, F & B market, Event Spaces"
          }
        },
        {
          name: "FLYP - myHQ Coworking N Block CP",
          location: "N - 57, Connaught Cir, Block N, Connaught Place, New Delhi, Delhi 110001",
          type: "Central Business District",
          dayPass: "₹600",
          monthlyDesk: "₹7,999",
          monthlyPrivate: "₹9,999",
          features: ["Central location", "Heritage area", "Government proximity", "Business networking", "Transportation hub"],
          rating: 4.1,
          website: "https://myhq.in/",
          phone: "+91 9205006361",
          description: "Central Delhi coworking in historic Connaught Place with government and business proximity.",
          amenities: {
            wifi: "150+ Mbps",
            hours: "9 AM - 9 PM",
            printers: "Yes",
            coffee: "Heritage cafe culture",
            aircon: "Central AC",
            other_amenities: "Stationery, Pantry Area, Power Backup"
          }
        }
      ],
      "Kolkata": [
        {
          name: "Spaces Park Street",
          location: "5th Floor, Prasad House, 16, Sudder St, near INDIAN MUSEUM, Fire Brigade Head Quarter, New Market Area, Dharmatala, Taltala, Kolkata, West Bengal",
          type: "Heritage Cultural",
          dayPass: "520",
          monthlyDesk: "₹15000",
          monthlyPrivate: "₹21000",
          features: ["Heritage location", "Cultural events", "Creative community", "Literature clubs", "Affordable workspace"],
          rating: 4.0,
          website: "https://ideapod.in/",
          phone: "+91 62922 99064",
          description: "Heritage coworking on famous Park Street with cultural events and creative community atmosphere.",
          amenities: {
            wifi: "80+ Mbps",
            hours: "9 AM - 9 PM",
            printers: "Basic",
            coffee: "Traditional tea culture",
            aircon: "Yes",
            other_amenities: "Reading Den, Complimentary Tea and Coffee, Unwinding Zone, Technical support, Event Space, Lockable private cabins with storage "
          }
        }
      ],
      "Jaipur": [
        {
          name: "Office Culture Coworking",
          location: "Horizon Tower, JEWEL OF INDIA, 606-607, Indra Nagar, Basant Vihar, Bajaj Nagar, Jaipur, Rajasthan",
          type: "Heritage Business",
          dayPass: "₹400",
          monthlyDesk: "₹12,000",
          monthlyPrivate: "₹48,000 (4 Seater)" ,
          features: ["Heritage city", "Handicraft industry", "Tourism business", "Royal architecture", "Cultural events"],
          rating: 4.1,
          website: "Local business centers",
          phone: "+91 9773399090",
          description: "Heritage city coworking with connections to handicraft industry and tourism business networks.",
          amenities: {
            wifi: "80+ Mbps",
            hours: "9 AM - 7 PM",
            printers: "Yes",
            coffee: "Tea / Coffee",
            aircon: "Central AC",
            other_amenities: "Conference Room, Power Backup, Ambient Music, Premium Seating"
          }
        },
        {
          name: "DAFFTAR Co-Working Space",
          location: "12, Shiv Marg, kirti Nagar, Shyam Nagar, Jaipur, Rajasthan",
          type: "Modern Heritage",
          dayPass: "Visit the Website",
          monthlyDesk: "Visit the Website",
          monthlyPrivate: "Visit the Website",
          features: ["Modern amenities", "Heritage charm", "Tourism networking", "Cultural immersion", "Affordable rates"],
          rating: 4.2,
          website: "https://dafftarcoworking.com/",
          phone: "+91 9829017924",
          description: "Modern coworking in Pink City combining heritage charm with contemporary business facilities.",
          amenities: {
            wifi: "60+ Mbps",
            hours: "8 AM - 8 PM",
            printers: "Basic",
            coffee: "Free Beverages",
            aircon: "Yes",
            other_amenities: "Free Beverages, Power Backup, Biometric, Microwave, Fridge, Dedicated Phone"
          }
        }
      ],
      "Udaipur": [
        {
          name: "Habitus Coworking Space",
          location: "Rajlaxmi Prime Building, Nakoda Complex, 5a, Hansa Palace Rd, Sector 4, Pooja Nagar, Hiran Magri, Udaipur, Rajasthan",
          type: "Royal Heritage",
          dayPass: "₹500",
          monthlyDesk: "₹7,000",
          monthlyPrivate: "₹12,000",
          features: ["High Speed Internet", "Clean and Well maintained Washrooms", "Private Working Space", "Basement Parking"],
          rating: 4.3,
          website: "https://habituscoworkingspace.com/",
          phone: "+91 81077 62795",
          description: "Stunning lake-view coworking in royal Udaipur with heritage architecture and peaceful environment.",
          amenities: {
            wifi: "70+ Mbps",
            hours: "9 AM - 9 PM",
            printers: "Yes",
            coffee: "Royal hospitality",
            aircon: "Yes",
            other_amenities: "Creative Events every weekend, Whiteboard & Stationery Facility"
          }
        },
        {
          name: "House of Words, Udaipur",
          location: "169, 2nd Floor, O road Infront of Matt Park, 169, Bhopalpura O Rd, above Cox and Kings Office, Bhupalpura, Bhopalpura, Udaipur, Rajasthan",
          type: "Heritage Tourism",
          dayPass: "₹250",
          monthlyDesk: "₹1,000",
          monthlyPrivate: "₹3,000",
          features: ["Palace proximity", "Power Backup of 8 Hours", "House Keeping", "Smoking Zone", "Courier Handling"],
          rating: 4.0,
          website: "https://bento.me/houseofwords",
          phone: "+91 73000 93590",
          description: "Heritage business center near City Palace with royal ambiance and tourism industry connections.",
          amenities: {
            wifi: "100+ Mbps",
            hours: "10 AM - 11 PM",
            printers: "Basic",
            coffee: "In-House Pantry",
            aircon: "Yes",
            other_amenities: "Creative Events every weekend, Whiteboard & Stationery Facility"
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
          name: "Ghoomakad",
          location: "McLeod Ganj, Dharamshala",
          type: "Spiritual Community",
          dayPass: "₹500",
          monthlyDesk: "₹5,000",
          monthlyPrivate: "₹7,000",
          features: ["Spiritual environment", "Dalai Lama proximity", "Community Kitchen", "Meditation spaces", "Mountain peace"],
          rating: 4.2,
          website: "https://ghoomakad.com/",
          phone: "+91 7018353651",
          description: "Unique spiritual coworking in Dalai Lama's residence with international community and meditation spaces.",
          amenities: {
            wifi: "40+ Mbps",
            hours: "24 Hrs Access of coworking space",
            printers: "Basic",
            coffee: "Tibetan tea culture",
            aircon: "Natural mountain air",
            other_amenities: "Strong Wi-Fi, Elctrical Backup, Private Mud House and Wooden Huts"
          }
        }
      ],
      "Mussoorie": [
        {
          name: "Oops! No Co-working spaces in Mussoorie.",
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
            aircon: "NA",
            other_amenities: "NA"
          }
        }
      ],
      "Shillong": [
        {
          name: "MyBranch Shillong",
          location: "2nd Floor, LP Building, Laitumkhrah Main Rd, Nongkynrih, Laitumkhrah, Shillong, Meghalaya",
          type: "Cultural Music Hub",
          dayPass: "Visit the Website",
          monthlyDesk: "Visit the Website",
          monthlyPrivate: "Visit the Website",
          features: ["Music culture", "Cultural diversity", "Pleasant climate", "Creative community", "Unique cuisine"],
          rating: 4.0,
          website: "https://www.mybranch.co.in/coworking-space-in-shillong",
          phone: "+91 84519 99506",
          description: "Cultural coworking in Northeast India's music capital with creative community and pleasant climate.",
          amenities: {
            wifi: "35+ Mbps",
            hours: "9 AM - 8 PM",
            printers: "Basic",
            coffee: "Tea and Coffee",
            aircon: "Yes",
            other_amenities: "House Keeping, IT Support Executive, Power Backup Service, Training Room"
            }
        },
        {
          name: "BISCI Shillong",
          location: "Top floor, Handers 2Compound, above HDFC Bank, Laitumkhrah, Shillong, Meghalaya",
          type: "Mountain Capital",
          dayPass: "Enquire by visiting the website",
          monthlyDesk: "Enquire by visiting the website",
          monthlyPrivate: "Enquire by visiting the website",
          features: ["Mountain views", "Clean environment", "Peaceful setting", "Tourism base", "Cultural diversity"],
          rating: 4.0,
          website: "https://bisci.io/",
          phone: "+91 60334 22944",
          description: "Mountain capital coworking with stunning Himalayan views and peaceful environment for productivity.",
          amenities: {
            wifi: "60+ Mbps",
            hours: "10 AM - 8 PM",
            printers: "Basic",
            coffee: "Tea and Coffee",
            aircon: "Yes",
            other_amenities: "Lounge, Conference Room, Balcony View, Roof Top"
          }
        }
      ],
      "Ziro Valley": [
        {
          name: "Oops! No Co-working spaces in Ziro.",
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
            aircon: "NA",
            other_amenities: "NA"
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
