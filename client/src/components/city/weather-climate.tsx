import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, Droplets, Wind, Thermometer, Eye, ExternalLink, RefreshCw, Zap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Climate } from "@shared/schema";
import { getCitySpecificData } from "@/lib/city-specific-data";

interface WeatherClimateProps {
  climateData: Climate | null;
  cityName: string;
  cityId: string;
  citySlug: string;
}

export default function WeatherClimate({ climateData, cityName, cityId, citySlug }: WeatherClimateProps) {
  const cityData = getCitySpecificData(citySlug);
  // Fetch live weather data
  const { data: weatherData, isLoading: weatherLoading } = useQuery<{
    current: any;
    forecast: any[];
    lastUpdated: string;
    source: string;
  }>({
    queryKey: ["/api/weather", cityId],
    refetchInterval: 86400000, // Refresh once daily
  });

  // City-specific weather patterns - completely distinct for each city
  const getCitySpecificWeatherData = (cityName: string) => {
    const weatherByCity = {
      "Goa": {
        bestTime: {
          optimal: "November to February",
          avoid: "June to September (Monsoon)",
          shoulder: "March to May, October"
        },
        seasons: [
          {
            name: "Winter (Nov-Feb)",
            temp: "20-32°C",
            weather: "Perfect beach weather",
            rainfall: "Minimal",
            humidity: "60-70%",
            activities: ["Beach activities", "Water sports", "Outdoor coworking"]
          },
          {
            name: "Summer (Mar-May)", 
            temp: "25-35°C",
            weather: "Hot coastal climate",
            rainfall: "Occasional showers",
            humidity: "70-80%",
            activities: ["Early morning beach", "Indoor AC spaces", "Evening shacks"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "24-30°C", 
            weather: "Heavy rains, flooding",
            rainfall: "2500mm annually",
            humidity: "85-95%",
            activities: ["Indoor work", "Monsoon photography", "Ayurveda retreats"]
          },
          {
            name: "Post-Monsoon (Oct)",
            temp: "22-31°C",
            weather: "Pleasant transition",
            rainfall: "Light showers",
            humidity: "75-85%",
            activities: ["Festival season", "Nature walks", "Beach return"]
          }
        ]
      },
      "Bangalore": {
        bestTime: {
          optimal: "October to March",
          avoid: "None - year-round destination",
          shoulder: "April to September"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "15-28°C",
            weather: "Perfect for outdoor work",
            rainfall: "Minimal",
            humidity: "50-65%",
            activities: ["Outdoor coworking", "Park visits", "Rooftop events", "Trekking nearby"]
          },
          {
            name: "Summer (Mar-May)",
            temp: "20-35°C",
            weather: "Warm but pleasant",
            rainfall: "Pre-monsoon showers",
            humidity: "55-70%",
            activities: ["Mall coworking", "Indoor activities", "Evening pub crawls"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "19-29°C",
            weather: "Cool and refreshing",
            rainfall: "970mm annually",
            humidity: "70-85%",
            activities: ["Indoor coworking", "Monsoon drives", "Food delivery peak"]
          },
          {
            name: "Post-Monsoon (Oct-Nov)",
            temp: "18-28°C",
            weather: "Ideal tech city climate",
            rainfall: "Light showers",
            humidity: "60-75%",
            activities: ["Startup events", "Outdoor meetings", "Festival season"]
          }
        ]
      },
      "Pune": {
        bestTime: {
          optimal: "October to March",
          avoid: "April to June (Hot)",
          shoulder: "July to September"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "12-30°C",
            weather: "Perfect for students & professionals",
            rainfall: "Minimal",
            humidity: "45-60%",
            activities: ["Campus visits", "Outdoor coworking", "Cultural events", "Trekking"]
          },
          {
            name: "Summer (Mar-Jun)",
            temp: "22-42°C",
            weather: "Hot and dry",
            rainfall: "Minimal",
            humidity: "30-50%",
            activities: ["Air-conditioned malls", "Early morning activities", "Hill station trips"]
          },
          {
            name: "Monsoon (Jul-Sep)",
            temp: "22-32°C",
            weather: "Heavy rains, lush greenery",
            rainfall: "722mm annually",
            humidity: "75-90%",
            activities: ["Monsoon treks", "Indoor coworking", "Waterfall visits"]
          },
          {
            name: "Post-Monsoon (Oct-Nov)",
            temp: "18-32°C",
            weather: "Pleasant university town vibe",
            rainfall: "Occasional",
            humidity: "55-70%",
            activities: ["Festival celebrations", "Outdoor work", "Cafe hopping"]
          }
        ]
      },
      "Gangtok": {
        bestTime: {
          optimal: "March to May, October to December",
          avoid: "June to September (Monsoon)",
          shoulder: "January to February"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "0-15°C",
            weather: "Cold mountain air, clear skies",
            rainfall: "Minimal, some snow",
            humidity: "60-75%",
            activities: ["Mountain photography", "Monastery visits", "Hot spring trips"]
          },
          {
            name: "Spring (Mar-May)",
            temp: "10-25°C",
            weather: "Perfect Himalayan weather",
            rainfall: "Light showers",
            humidity: "65-80%",
            activities: ["Trekking", "Rhododendron blooms", "Outdoor adventure", "Clear mountain views"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "15-25°C",
            weather: "Heavy rains, landslides possible",
            rainfall: "2500mm annually",
            humidity: "80-95%",
            activities: ["Indoor meditation", "Cultural centers", "Hot tea sessions"]
          },
          {
            name: "Autumn (Oct-Nov)",
            temp: "10-22°C",
            weather: "Crystal clear mountain views",
            rainfall: "Minimal",
            humidity: "65-78%",
            activities: ["Trekking season", "Festival celebrations", "Mountain biking"]
          }
        ]
      },
      "McLeodganj": {
        bestTime: {
          optimal: "March to June, September to November",
          avoid: "December to February (Cold), July to August (Monsoon)",
          shoulder: "October, December"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "0-15°C",
            weather: "Cold Himalayan winter, snow possible",
            rainfall: "Snow and light rain",
            humidity: "55-70%",
            activities: ["Meditation retreats", "Hot chai sessions", "Spiritual practices"]
          },
          {
            name: "Spring/Summer (Mar-Jun)",
            temp: "15-30°C",
            weather: "Perfect for spiritual tourism",
            rainfall: "Occasional light showers",
            humidity: "60-75%",
            activities: ["Trekking", "Dalai Lama teachings", "Outdoor yoga", "Temple visits"]
          },
          {
            name: "Monsoon (Jul-Aug)",
            temp: "20-25°C",
            weather: "Heavy mountain rains",
            rainfall: "1500mm annually",
            humidity: "80-90%",
            activities: ["Indoor meditation", "Reading in cafes", "Spiritual discussions"]
          },
          {
            name: "Autumn (Sep-Nov)",
            temp: "10-25°C",
            weather: "Clear mountain air, spiritual vibes",
            rainfall: "Minimal",
            humidity: "65-80%",
            activities: ["Trekking season", "Festival celebrations", "Photography"]
          }
        ]
      },
      "Shillong": {
        bestTime: {
          optimal: "March to May, September to November",
          avoid: "June to August (Heavy monsoon)",
          shoulder: "December to February"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "4-18°C",
            weather: "Cool hill station, Scotland vibes",
            rainfall: "Light winter showers",
            humidity: "65-80%",
            activities: ["Music festivals", "Cozy cafe work", "Cultural events"]
          },
          {
            name: "Spring (Mar-May)",
            temp: "15-25°C",
            weather: "Pleasant Scotland of the East",
            rainfall: "Occasional spring showers",
            humidity: "70-85%",
            activities: ["Waterfall visits", "Outdoor music", "Nature photography", "Cherry blossoms"]
          },
          {
            name: "Monsoon (Jun-Aug)",
            temp: "20-25°C",
            weather: "Heavy northeastern monsoon",
            rainfall: "2200mm annually",
            humidity: "85-95%",
            activities: ["Indoor music sessions", "Coworking spaces", "Traditional performances"]
          },
          {
            name: "Autumn (Sep-Nov)",
            temp: "12-22°C",
            weather: "Clear skies, music festival season",
            rainfall: "Light post-monsoon showers",
            humidity: "75-85%",
            activities: ["Autumn festivals", "Live music venues", "Waterfall photography"]
          }
        ]
      },
      "Udaipur": {
        bestTime: {
          optimal: "October to March",
          avoid: "April to June (Extremely hot)",
          shoulder: "July to September"
        },
        seasons: [
          {
            name: "Winter (Nov-Feb)",
            temp: "10-25°C",
            weather: "Perfect royal city weather",
            rainfall: "Minimal",
            humidity: "45-60%",
            activities: ["Lake boat rides", "Palace visits", "Outdoor dining", "Heritage walks"]
          },
          {
            name: "Summer (Mar-Jun)",
            temp: "23-45°C",
            weather: "Extremely hot desert climate",
            rainfall: "Minimal",
            humidity: "25-40%",
            activities: ["Early morning lake visits", "Air-conditioned heritage hotels", "Indoor activities"]
          },
          {
            name: "Monsoon (Jul-Sep)",
            temp: "25-35°C",
            weather: "Moderate rains, lake levels rise",
            rainfall: "635mm annually",
            humidity: "70-85%",
            activities: ["Monsoon palace visits", "Indoor cultural shows", "Lake photography"]
          },
          {
            name: "Post-Monsoon (Oct)",
            temp: "20-32°C",
            weather: "Pleasant return of tourists",
            rainfall: "Occasional",
            humidity: "55-70%",
            activities: ["Festival season", "Heritage tourism", "Romantic lake evenings"]
          }
        ]
      },
      "Mumbai": {
        bestTime: {
          optimal: "October to March",
          avoid: "June to September (Heavy monsoon)",
          shoulder: "April to May"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "19-29°C",
            weather: "Pleasant coastal winter",
            rainfall: "Minimal",
            humidity: "60-75%",
            activities: ["Beach walks", "Outdoor coworking", "Street food tours", "Film city visits"]
          },
          {
            name: "Summer (Mar-May)",
            temp: "25-35°C",
            weather: "Hot and humid coastal climate",
            rainfall: "Occasional pre-monsoon showers",
            humidity: "75-85%",
            activities: ["Mall coworking", "Marine Drive evenings", "AC train commutes", "Indoor malls"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "24-30°C",
            weather: "Heavy rains, flooding in low areas",
            rainfall: "2400mm annually",
            humidity: "85-95%",
            activities: ["Indoor coworking", "Train delays expected", "Monsoon photography", "Vada pav hunting"]
          },
          {
            name: "Post-Monsoon (Oct-Nov)",
            temp: "22-32°C",
            weather: "Fresh post-rain atmosphere",
            rainfall: "Light showers",
            humidity: "70-80%",
            activities: ["Festival season", "Outdoor networking", "Gateway of India visits", "Business events"]
          }
        ]
      },
      "New Delhi": {
        bestTime: {
          optimal: "October to March",
          avoid: "May to July (Extreme heat), December to January (Cold & pollution)",
          shoulder: "April, August to September"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "5-20°C",
            weather: "Cold with dense fog and pollution",
            rainfall: "Minimal winter rains",
            humidity: "60-80%",
            activities: ["Indoor coworking", "Metro travel", "Heritage tours", "Warm food exploration"]
          },
          {
            name: "Spring (Mar-Apr)",
            temp: "15-30°C",
            weather: "Pleasant transition period",
            rainfall: "Occasional spring showers",
            humidity: "45-65%",
            activities: ["India Gate visits", "Outdoor meetings", "Garden tours", "Connaught Place walks"]
          },
          {
            name: "Summer (May-Jun)",
            temp: "30-45°C",
            weather: "Extreme heat, dust storms",
            rainfall: "Minimal",
            humidity: "30-50%",
            activities: ["Metro-connected coworking", "Mall-based work", "Early morning activities", "AC spaces only"]
          },
          {
            name: "Monsoon (Jul-Sep)",
            temp: "25-35°C",
            weather: "Moderate to heavy rains, cleaner air",
            rainfall: "790mm annually",
            humidity: "70-85%",
            activities: ["Indoor coworking", "Monsoon drives", "Cultural venues", "Government office work"]
          }
        ]
      },
      "Kolkata": {
        bestTime: {
          optimal: "October to March",
          avoid: "June to September (Monsoon), April to May (Very hot)",
          shoulder: "April, October"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "12-25°C",
            weather: "Cool and comfortable",
            rainfall: "Minimal",
            humidity: "50-70%",
            activities: ["Cultural heritage tours", "Outdoor coworking", "Howrah Bridge walks", "Adda sessions"]
          },
          {
            name: "Summer (Mar-May)",
            temp: "27-40°C",
            weather: "Hot and humid pre-monsoon",
            rainfall: "Thunderstorms common",
            humidity: "65-85%",
            activities: ["Indoor cultural spaces", "AC shopping malls", "Museums", "Literary cafes"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "26-32°C",
            weather: "Heavy rains, waterlogging",
            rainfall: "1600mm annually",
            humidity: "80-90%",
            activities: ["Indoor coworking", "Monsoon poetry sessions", "Cultural centers", "Book cafe work"]
          },
          {
            name: "Post-Monsoon (Oct-Nov)",
            temp: "20-30°C",
            weather: "Pleasant post-rain freshness",
            rainfall: "Light post-monsoon showers",
            humidity: "65-75%",
            activities: ["Durga Puja festivals", "Outdoor networking", "Ganga walks", "Cultural events"]
          }
        ]
      },
      "Alleppey": {
        bestTime: {
          optimal: "November to February",
          avoid: "June to September (Heavy monsoon)",
          shoulder: "March to May, October"
        },
        seasons: [
          {
            name: "Winter (Nov-Feb)",
            temp: "23-32°C",
            weather: "Perfect backwater weather",
            rainfall: "Minimal",
            humidity: "65-75%",
            activities: ["Houseboat work", "Backwater tours", "Beach visits", "Coconut grove walks"]
          },
          {
            name: "Summer (Mar-May)",
            temp: "25-35°C",
            weather: "Hot coastal humidity",
            rainfall: "Pre-monsoon showers",
            humidity: "75-85%",
            activities: ["Early morning houseboat work", "Shaded backwater spots", "AC accommodations", "Sunset work"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "24-30°C",
            weather: "Heavy rains transform backwaters",
            rainfall: "2800mm annually",
            humidity: "85-95%",
            activities: ["Indoor houseboat work", "Monsoon backwater photography", "Ayurveda retreats", "Covered workspace"]
          },
          {
            name: "Post-Monsoon (Oct)",
            temp: "24-32°C",
            weather: "Lush green backwater paradise",
            rainfall: "Light showers",
            humidity: "75-85%",
            activities: ["Backwater exploration", "Photography season", "Cultural programs", "Village visits"]
          }
        ]
      },
      "Varkala": {
        bestTime: {
          optimal: "November to March",
          avoid: "June to September (Heavy monsoon)",
          shoulder: "April to May, October"
        },
        seasons: [
          {
            name: "Winter (Nov-Mar)",
            temp: "22-32°C",
            weather: "Perfect cliff and beach weather",
            rainfall: "Minimal",
            humidity: "65-75%",
            activities: ["Cliff-top coworking", "Beach yoga", "Sunset work sessions", "Ayurveda treatments"]
          },
          {
            name: "Summer (Apr-May)",
            temp: "25-35°C",
            weather: "Hot coastal weather",
            rainfall: "Pre-monsoon showers",
            humidity: "75-85%",
            activities: ["Early morning beach work", "Shaded cliff cafes", "Indoor retreat spaces", "Temple visits"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "24-30°C",
            weather: "Heavy rains, rough seas",
            rainfall: "3000mm annually",
            humidity: "85-95%",
            activities: ["Indoor spiritual retreats", "Monsoon meditation", "Covered cliff cafes", "Reading retreats"]
          },
          {
            name: "Post-Monsoon (Oct)",
            temp: "24-32°C",
            weather: "Fresh coastal atmosphere",
            rainfall: "Light showers",
            humidity: "75-85%",
            activities: ["Cliff photography", "Cultural events", "Beach returns", "Sunset sessions"]
          }
        ]
      },
      "Kasol": {
        bestTime: {
          optimal: "March to June, September to November",
          avoid: "December to February (Snow), July to August (Heavy rains)",
          shoulder: "December, February"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "0-15°C",
            weather: "Snow-covered valley, freezing nights",
            rainfall: "Snow and occasional rain",
            humidity: "60-75%",
            activities: ["Indoor cafe work", "Snow photography", "Hot soup sessions", "Fireplace coworking"]
          },
          {
            name: "Spring/Summer (Mar-Jun)",
            temp: "15-30°C",
            weather: "Perfect valley weather, crystal clear views",
            rainfall: "Occasional spring showers",
            humidity: "50-70%",
            activities: ["Riverside coworking", "Trekking to villages", "Outdoor cafe work", "River-side meditation"]
          },
          {
            name: "Monsoon (Jul-Aug)",
            temp: "18-25°C",
            weather: "Heavy mountain rains, landslide risk",
            rainfall: "1200mm annually",
            humidity: "80-90%",
            activities: ["Indoor cafe work", "Cultural exchanges", "Music sessions", "Card games with nomads"]
          },
          {
            name: "Autumn (Sep-Nov)",
            temp: "10-25°C",
            weather: "Clear mountain air, perfect visibility",
            rainfall: "Light post-monsoon showers",
            humidity: "60-75%",
            activities: ["Trekking season", "Outdoor work", "Valley photography", "Harvest festivals"]
          }
        ]
      },
      "Bir": {
        bestTime: {
          optimal: "March to June, September to November",
          avoid: "December to February (Very cold), July to August (Monsoon)",
          shoulder: "February, December"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "0-18°C",
            weather: "Cold mountain winter, clear skies",
            rainfall: "Light winter rains",
            humidity: "55-70%",
            activities: ["Monastery visits", "Indoor meditation", "Tibetan language learning", "Hot tea work sessions"]
          },
          {
            name: "Spring/Summer (Mar-Jun)",
            temp: "15-32°C",
            weather: "Perfect paragliding and trekking weather",
            rainfall: "Occasional spring showers",
            humidity: "45-65%",
            activities: ["Paragliding", "Outdoor coworking", "Monastery work", "Mountain biking", "Tibetan cultural immersion"]
          },
          {
            name: "Monsoon (Jul-Aug)",
            temp: "20-28°C",
            weather: "Heavy mountain rains",
            rainfall: "1500mm annually",
            humidity: "75-85%",
            activities: ["Indoor monastery work", "Cultural learning", "Traditional crafts", "Meditation retreats"]
          },
          {
            name: "Autumn (Sep-Nov)",
            temp: "12-25°C",
            weather: "Crystal clear mountain views",
            rainfall: "Minimal",
            humidity: "50-70%",
            activities: ["Perfect paragliding season", "Outdoor work", "Trekking", "Festival celebrations"]
          }
        ]
      },
      "Dehradun": {
        bestTime: {
          optimal: "March to June, September to November",
          avoid: "July to August (Heavy monsoon), December to January (Cold)",
          shoulder: "February, December"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "5-20°C",
            weather: "Cool valley climate, some fog",
            rainfall: "Light winter showers",
            humidity: "60-75%",
            activities: ["IIT campus visits", "Indoor coworking", "Educational institutions", "Administrative work"]
          },
          {
            name: "Spring/Summer (Mar-Jun)",
            temp: "18-35°C",
            weather: "Pleasant valley summer",
            rainfall: "Pre-monsoon thunderstorms",
            humidity: "50-70%",
            activities: ["Educational networking", "Government liaison work", "Outdoor meetings", "Hill station base"]
          },
          {
            name: "Monsoon (Jul-Aug)",
            temp: "22-30°C",
            weather: "Heavy Uttarakhand monsoon",
            rainfall: "2100mm annually",
            humidity: "80-90%",
            activities: ["Indoor academic work", "Research facilities", "Library sessions", "Educational conferences"]
          },
          {
            name: "Post-Monsoon (Sep-Nov)",
            temp: "15-28°C",
            weather: "Clear valley air, perfect weather",
            rainfall: "Light showers",
            humidity: "60-75%",
            activities: ["Educational tours", "Government work", "Outdoor networking", "Valley exploration"]
          }
        ]
      },
      "Mussoorie": {
        bestTime: {
          optimal: "April to June, September to November",
          avoid: "July to August (Heavy monsoon), December to February (Very cold)",
          shoulder: "March, December"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "1-15°C",
            weather: "Cold hill station, possible snow",
            rainfall: "Light winter rain and snow",
            humidity: "60-75%",
            activities: ["Indoor heritage hotel work", "Fireplace coworking", "Colonial architecture tours", "Hot beverage sessions"]
          },
          {
            name: "Spring/Summer (Mar-Jun)",
            temp: "15-30°C",
            weather: "Perfect hill station weather",
            rainfall: "Occasional spring showers",
            humidity: "50-70%",
            activities: ["Mall Road coworking", "Mountain view work", "Colonial heritage tours", "Cable car office views"]
          },
          {
            name: "Monsoon (Jul-Aug)",
            temp: "18-25°C",
            weather: "Heavy mountain rains, landslide risk",
            rainfall: "2200mm annually",
            humidity: "80-90%",
            activities: ["Indoor heritage spaces", "Library work", "Monsoon photography", "Traditional hill culture"]
          },
          {
            name: "Autumn (Sep-Nov)",
            temp: "12-25°C",
            weather: "Clear Himalayan views, crisp air",
            rainfall: "Light post-monsoon showers",
            humidity: "60-75%",
            activities: ["Outdoor heritage walks", "Mountain photography", "Clear weather networking", "Festival season"]
          }
        ]
      },
      "Ziro": {
        bestTime: {
          optimal: "March to May, September to November",
          avoid: "June to August (Heavy monsoon), December to February (Very cold)",
          shoulder: "February, December"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "2-18°C",
            weather: "Cold tribal valley, clear mountain views",
            rainfall: "Light winter rains",
            humidity: "65-80%",
            activities: ["Cultural immersion", "Tribal art learning", "Indoor cultural centers", "Traditional craft work"]
          },
          {
            name: "Spring/Summer (Mar-May)",
            temp: "15-28°C",
            weather: "Perfect tribal valley weather",
            rainfall: "Light spring showers",
            humidity: "60-75%",
            activities: ["Rice terrace photography", "Tribal village visits", "Music festival season", "Outdoor cultural work"]
          },
          {
            name: "Monsoon (Jun-Aug)",
            temp: "20-25°C",
            weather: "Heavy northeastern monsoon",
            rainfall: "2500mm annually",
            humidity: "85-95%",
            activities: ["Indoor tribal cultural work", "Traditional music sessions", "Craft learning", "Community centers"]
          },
          {
            name: "Autumn (Sep-Nov)",
            temp: "12-24°C",
            weather: "Clear valley views, harvest season",
            rainfall: "Light showers",
            humidity: "70-85%",
            activities: ["Harvest participation", "Music festivals", "Valley photography", "Cultural documentation"]
          }
        ]
      },
      "Rishikesh": {
        bestTime: {
          optimal: "March to June, September to November",
          avoid: "July to August (Monsoon), December to January (Cold)",
          shoulder: "February, December"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "5-22°C",
            weather: "Cool spiritual weather",
            rainfall: "Light winter showers",
            humidity: "55-70%",
            activities: ["Ashram work", "Ganga meditation", "Yoga teacher training", "Spiritual retreat work"]
          },
          {
            name: "Spring/Summer (Mar-Jun)",
            temp: "20-35°C",
            weather: "Perfect for spiritual tourism",
            rainfall: "Pre-monsoon thunderstorms",
            humidity: "45-65%",
            activities: ["River rafting", "Outdoor yoga", "Ashram networking", "Adventure sports", "Ganga aarti"]
          },
          {
            name: "Monsoon (Jul-Aug)",
            temp: "24-30°C",
            weather: "Heavy Ganga valley rains",
            rainfall: "1500mm annually",
            humidity: "75-85%",
            activities: ["Indoor ashram work", "Meditation retreats", "Yoga philosophy study", "Spiritual library work"]
          },
          {
            name: "Post-Monsoon (Sep-Nov)",
            temp: "18-30°C",
            weather: "Clear mountain air, spiritual vibes",
            rainfall: "Light showers",
            humidity: "60-75%",
            activities: ["Perfect yoga season", "Ganga ceremonies", "Adventure activities", "Spiritual networking"]
          }
        ]
      },
      "Pondicherry": {
        bestTime: {
          optimal: "November to March",
          avoid: "June to September (Monsoon), April to May (Hot)",
          shoulder: "April, October"
        },
        seasons: [
          {
            name: "Winter (Nov-Mar)",
            temp: "20-30°C",
            weather: "Perfect French colonial weather",
            rainfall: "Minimal",
            humidity: "65-75%",
            activities: ["French Quarter coworking", "Beach promenade work", "Auroville visits", "Heritage cafe work"]
          },
          {
            name: "Summer (Apr-May)",
            temp: "25-38°C",
            weather: "Hot coastal summer",
            rainfall: "Pre-monsoon showers",
            humidity: "75-85%",
            activities: ["Early morning beach work", "AC heritage buildings", "Auroville workshops", "Indoor French cafes"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "25-32°C",
            weather: "Northeast monsoon rains",
            rainfall: "1200mm annually",
            humidity: "80-90%",
            activities: ["Indoor colonial spaces", "Monsoon heritage tours", "Library work", "Cultural center activities"]
          },
          {
            name: "Post-Monsoon (Oct)",
            temp: "23-32°C",
            weather: "Pleasant return of colonial charm",
            rainfall: "Occasional showers",
            humidity: "70-80%",
            activities: ["Festival season", "Beach return", "French cultural events", "Heritage walks"]
          }
        ]
      },
      "Kochi": {
        bestTime: {
          optimal: "December to March",
          avoid: "June to September (Heavy monsoon)",
          shoulder: "April to May, October to November"
        },
        seasons: [
          {
            name: "Winter (Dec-Mar)",
            temp: "23-32°C",
            weather: "Perfect port city weather",
            rainfall: "Minimal",
            humidity: "65-75%",
            activities: ["Fort Kochi heritage work", "Backwater networking", "Chinese fishing net tours", "Spice market visits"]
          },
          {
            name: "Summer (Apr-May)",
            temp: "26-36°C",
            weather: "Hot coastal humidity",
            rainfall: "Pre-monsoon thunderstorms",
            humidity: "75-85%",
            activities: ["Indoor heritage spaces", "AC malls and offices", "Early morning backwater work", "Cultural programs"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "24-30°C",
            weather: "Heavy southwest monsoon",
            rainfall: "3000mm annually",
            humidity: "85-95%",
            activities: ["Indoor heritage work", "Monsoon backwater photography", "Cultural center activities", "Kathakali performances"]
          },
          {
            name: "Post-Monsoon (Oct-Nov)",
            temp: "24-32°C",
            weather: "Fresh backwater atmosphere",
            rainfall: "Light northeast monsoon",
            humidity: "75-85%",
            activities: ["Backwater exploration", "Heritage photography", "Cultural festivals", "Business networking"]
          }
        ]
      },
      "Darjeeling": {
        bestTime: {
          optimal: "March to May, September to November",
          avoid: "June to August (Heavy monsoon), December to February (Very cold)",
          shoulder: "February, December"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "2-15°C",
            weather: "Cold mountain air, possible snow",
            rainfall: "Light winter rains",
            humidity: "65-80%",
            activities: ["Tea estate indoor work", "Heritage hotel coworking", "Hot tea sessions", "Indoor monastery visits"]
          },
          {
            name: "Spring (Mar-May)",
            temp: "10-25°C",
            weather: "Perfect tea garden weather",
            rainfall: "Light spring showers",
            humidity: "60-75%",
            activities: ["Tea garden tours", "Kanchenjunga views", "Toy train rides", "Outdoor heritage work", "Mountain photography"]
          },
          {
            name: "Monsoon (Jun-Aug)",
            temp: "15-22°C",
            weather: "Heavy mountain rains, mist-covered",
            rainfall: "2500mm annually",
            humidity: "85-95%",
            activities: ["Indoor tea estate work", "Heritage building coworking", "Monsoon photography", "Cultural center activities"]
          },
          {
            name: "Autumn (Sep-Nov)",
            temp: "8-20°C",
            weather: "Crystal clear Himalayan views",
            rainfall: "Light post-monsoon showers",
            humidity: "70-85%",
            activities: ["Best mountain photography", "Tea harvest season", "Clear weather trekking", "Festival celebrations"]
          }
        ]
      },
      "Dharamkot": {
        bestTime: {
          optimal: "March to June, September to November",
          avoid: "December to February (Snow), July to August (Monsoon)",
          shoulder: "February, December"
        },
        seasons: [
          {
            name: "Winter (Dec-Feb)",
            temp: "-2-12°C",
            weather: "Snow-covered spiritual village",
            rainfall: "Snow and light rain",
            humidity: "60-75%",
            activities: ["Indoor meditation retreats", "Tibetan philosophy study", "Hot soup sessions", "Fireplace coworking"]
          },
          {
            name: "Spring/Summer (Mar-Jun)",
            temp: "15-28°C",
            weather: "Perfect mountain spiritual weather",
            rainfall: "Occasional spring showers",
            humidity: "50-70%",
            activities: ["Outdoor meditation", "Trekking to Triund", "Spiritual networking", "Mountain view work", "Dharamshala visits"]
          },
          {
            name: "Monsoon (Jul-Aug)",
            temp: "18-24°C",
            weather: "Heavy mountain rains",
            rainfall: "1800mm annually",
            humidity: "80-90%",
            activities: ["Indoor spiritual work", "Philosophy discussions", "Reading retreats", "Covered meditation spaces"]
          },
          {
            name: "Autumn (Sep-Nov)",
            temp: "10-22°C",
            weather: "Clear mountain views, spiritual energy",
            rainfall: "Light showers",
            humidity: "60-75%",
            activities: ["Peak trekking season", "Outdoor spiritual practices", "Clear view meditation", "Festival participation"]
          }
        ]
      },
      "Tosh": {
        bestTime: {
          optimal: "April to June, September to October",
          avoid: "November to March (Heavy snow), July to August (Monsoon)",
          shoulder: "March, November"
        },
        seasons: [
          {
            name: "Winter (Nov-Mar)",
            temp: "-5-10°C",
            weather: "Heavy snow, isolated village",
            rainfall: "Heavy snow coverage",
            humidity: "65-80%",
            activities: ["Indoor guesthouse work", "Snow photography", "Fireplace sessions", "Limited village access"]
          },
          {
            name: "Spring/Summer (Apr-Jun)",
            temp: "12-25°C",
            weather: "Perfect isolated valley weather",
            rainfall: "Light spring showers",
            humidity: "55-70%",
            activities: ["Valley exploration", "River-side work", "Village immersion", "Apple orchard visits", "Basic digital detox"]
          },
          {
            name: "Monsoon (Jul-Aug)",
            temp: "15-20°C",
            weather: "Heavy mountain rains, landslide risk",
            rainfall: "1000mm annually",
            humidity: "80-90%",
            activities: ["Indoor village work", "Cultural exchanges", "Basic connectivity work", "Monsoon village life"]
          },
          {
            name: "Post-Monsoon (Sep-Oct)",
            temp: "8-20°C",
            weather: "Clear valley views before winter",
            rainfall: "Light post-monsoon showers",
            humidity: "65-75%",
            activities: ["Last outdoor work season", "Valley photography", "Harvest season participation", "Pre-winter preparation"]
          }
        ]
      },
      "Wayanad": {
        bestTime: {
          optimal: "October to May",
          avoid: "June to September (Heavy monsoon)",
          shoulder: "May, October"
        },
        seasons: [
          {
            name: "Winter (Nov-Feb)",
            temp: "18-28°C",
            weather: "Perfect plantation weather",
            rainfall: "Minimal",
            humidity: "60-75%",
            activities: ["Coffee plantation tours", "Wildlife safaris", "Outdoor coworking", "Spice garden visits", "Tribal village tours"]
          },
          {
            name: "Summer (Mar-May)",
            temp: "22-32°C",
            weather: "Warm plantation climate",
            rainfall: "Pre-monsoon showers",
            humidity: "65-80%",
            activities: ["Early morning plantation work", "Hill station coworking", "Waterfall visits", "Wildlife photography"]
          },
          {
            name: "Monsoon (Jun-Sep)",
            temp: "20-26°C",
            weather: "Heavy Western Ghats monsoon",
            rainfall: "3500mm annually",
            humidity: "85-95%",
            activities: ["Indoor plantation stays", "Monsoon waterfall photography", "Ayurveda treatments", "Cultural center work"]
          },
          {
            name: "Post-Monsoon (Oct)",
            temp: "19-29°C",
            weather: "Lush green plantation paradise",
            rainfall: "Light showers",
            humidity: "75-85%",
            activities: ["Perfect wildlife season", "Plantation photography", "Outdoor adventure", "Cultural programs"]
          }
        ]
      },
      "Jaipur": {
        bestTime: {
          optimal: "October to March",
          avoid: "April to June (Extreme heat)",
          shoulder: "July to September"
        },
        seasons: [
          {
            name: "Winter (Nov-Feb)",
            temp: "8-25°C",
            weather: "Perfect royal city weather",
            rainfall: "Minimal",
            humidity: "40-60%",
            activities: ["Palace tours", "Heritage coworking", "Outdoor markets", "Cultural events", "Camel safaris"]
          },
          {
            name: "Summer (Mar-Jun)",
            temp: "25-45°C",
            weather: "Extreme desert heat",
            rainfall: "Minimal",
            humidity: "20-40%",
            activities: ["Indoor heritage hotels", "AC palace spaces", "Early morning activities", "Mall-based coworking"]
          },
          {
            name: "Monsoon (Jul-Sep)",
            temp: "26-35°C",
            weather: "Desert monsoon, moderate rains",
            rainfall: "650mm annually",
            humidity: "60-80%",
            activities: ["Indoor palace work", "Monsoon palace photography", "Cultural center activities", "Heritage hotel coworking"]
          },
          {
            name: "Post-Monsoon (Oct)",
            temp: "20-32°C",
            weather: "Pleasant return of royal tourism",
            rainfall: "Occasional",
            humidity: "50-70%",
            activities: ["Festival season", "Heritage tourism peak", "Outdoor palace visits", "Cultural celebrations"]
          }
        ]
      }
    };
    
    return (weatherByCity as any)[cityName] || weatherByCity["Goa"];
  };

  const cityWeatherData = getCitySpecificWeatherData(cityName);

  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-3xl font-bold text-travel-blue flex items-center">
          <Cloud className="mr-3 h-8 w-8 text-vintage-gold" />
          Weather & Climate Guide
        </CardTitle>
        <p className="text-muted-navy text-lg">
          Complete weather patterns, seasonal guides, and best travel times for {cityName} with live weather updates.
        </p>
        {weatherData && (
          <div className="flex items-center space-x-4 text-sm text-muted-navy mt-4">
            <div className="flex items-center">
              <RefreshCw className="h-3 w-3 mr-1" />
              Last updated: {new Date(weatherData.lastUpdated).toLocaleDateString()}
            </div>
            <Badge variant="secondary" className="bg-sage-green/10 text-sage-green">
              {weatherData.source === "live" ? "Live data" : "Weather estimates"}
            </Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Current Weather */}
        {weatherData && (
          <div>
            <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
              <Sun className="mr-2 h-5 w-5" />
              🌤️ Current Weather in {cityName}
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-travel-blue/5 rounded-lg p-4 text-center border border-travel-blue/20">
                <Thermometer className="h-6 w-6 text-travel-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-travel-blue">{weatherData.current.temperature}°C</div>
                <div className="text-sm text-muted-navy">Temperature</div>
              </div>
              <div className="bg-sage-green/5 rounded-lg p-4 text-center border border-sage-green/20">
                <Droplets className="h-6 w-6 text-sage-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-sage-green">{weatherData.current.humidity}%</div>
                <div className="text-sm text-muted-navy">Humidity</div>
              </div>
              <div className="bg-vintage-gold/5 rounded-lg p-4 text-center border border-vintage-gold/20">
                <Wind className="h-6 w-6 text-vintage-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-vintage-gold">{weatherData.current.windSpeed} km/h</div>
                <div className="text-sm text-muted-navy">Wind Speed</div>
              </div>
              <div className="bg-terracotta/5 rounded-lg p-4 text-center border border-terracotta/20">
                <Eye className="h-6 w-6 text-terracotta mx-auto mb-2" />
                <div className="text-2xl font-bold text-terracotta">{weatherData.current.uvIndex}</div>
                <div className="text-sm text-muted-navy">UV Index</div>
              </div>
            </div>
          </div>
        )}

        {/* Best Time to Visit */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Sun className="mr-2 h-5 w-5" />
            🗓️ Best Time to Visit {cityName}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-sage-green/5 rounded-lg p-4 border border-sage-green/20">
              <h4 className="font-semibold text-sage-green mb-2">🌟 Optimal Season</h4>
              <div className="text-lg font-medium text-travel-blue mb-2">{cityWeatherData.bestTime.optimal}</div>
              <p className="text-sm text-muted-navy">Perfect weather, comfortable temperatures, ideal for all activities. Peak nomad season.</p>
            </div>
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-2">⚠️ Avoid Period</h4>
              <div className="text-lg font-medium text-travel-blue mb-2">{cityWeatherData.bestTime.avoid}</div>
              <p className="text-sm text-muted-navy">Heavy monsoons, frequent flooding, limited outdoor activities.</p>
            </div>
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-2">👍 Shoulder Season</h4>
              <div className="text-lg font-medium text-travel-blue mb-2">{cityWeatherData.bestTime.shoulder}</div>
              <p className="text-sm text-muted-navy">Good weather, fewer crowds, better accommodation rates.</p>
            </div>
          </div>
        </div>

        {/* Seasonal Breakdown */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <Cloud className="mr-2 h-5 w-5" />
            🌦️ Seasonal Weather Patterns
          </h3>
          <div className="space-y-6">
            {cityWeatherData.seasons.map((season: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-travel-blue text-lg mb-3">{season.name}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-muted-navy">Temperature:</span>
                        <div className="text-travel-blue font-semibold">{season.temp}</div>
                      </div>
                      <div>
                        <span className="font-medium text-muted-navy">Weather:</span>
                        <div className="text-travel-blue font-semibold">{season.weather}</div>
                      </div>
                      <div>
                        <span className="font-medium text-muted-navy">Rainfall:</span>
                        <div className="text-travel-blue font-semibold">{season.rainfall}</div>
                      </div>
                      <div>
                        <span className="font-medium text-muted-navy">Humidity:</span>
                        <div className="text-travel-blue font-semibold">{season.humidity}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-muted-navy mb-2 block">Recommended Activities:</span>
                    <div className="flex flex-wrap gap-2">
                      {season.activities.map((activity: string, actIndex: number) => (
                        <Badge key={actIndex} variant="secondary" className="bg-vintage-gold/10 text-vintage-gold">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Resources */}
        <div>
          <h3 className="font-semibold text-travel-blue mb-4 flex items-center">
            <ExternalLink className="mr-2 h-5 w-5" />
            🌐 Weather Resources & Live Data
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-travel-blue/5 rounded-lg p-4 border border-travel-blue/20">
              <h4 className="font-semibold text-travel-blue mb-3">Official Weather Services</h4>
              <div className="space-y-2 text-sm">
                <a href="https://mausam.imd.gov.in/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  India Meteorological Department
                </a>
                <a href="https://weather.com/en-IN/weather/today/l/Panaji+Goa+IN" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Weather.com - {cityName}
                </a>
                <a href="https://www.accuweather.com/en/in/panaji/3364890/weather-forecast/3364890" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  AccuWeather - Detailed forecasts
                </a>
              </div>
            </div>
            
            <div className="bg-vintage-gold/5 rounded-lg p-4 border border-vintage-gold/20">
              <h4 className="font-semibold text-vintage-gold mb-3">Weather Apps & Tools</h4>
              <div className="space-y-2 text-sm">
                <a href="https://www.windy.com/?goa" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Windy.com - Interactive maps
                </a>
                <a href="https://darksky.net/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Dark Sky - Hyperlocal forecasts
                </a>
                <a href="https://www.yr.no/en/forecast/daily-table/1-1271157/India/Goa/North%20Goa/Panaji" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-travel-blue hover:underline">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Yr.no - Long-range forecasts
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Climate Impact on Nomad Life */}
        {cityData && cityData.climateImpact ? (
          <div className="bg-sage-green/5 rounded-lg p-6 border-l-4 border-sage-green">
            <h4 className="font-semibold text-sage-green mb-3 flex items-center">
              <Zap className="mr-2 h-4 w-4" />
              Climate Impact on Digital Nomad Life in {cityName}
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-navy">
              <div>
                <h5 className="font-medium text-travel-blue mb-2">Working Conditions</h5>
                <ul className="space-y-1">
                  {cityData.climateImpact.workingConditions.map((condition, index) => (
                    <li key={index}>• {condition}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-travel-blue mb-2">Health & Equipment</h5>
                <ul className="space-y-1">
                  {cityData.climateImpact.healthConsiderations.map((health, index) => (
                    <li key={index}>• {health}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-travel-blue mb-2">Equipment Needs</h5>
                <ul className="space-y-1">
                  {cityData.climateImpact.equipmentNeeds.map((equipment, index) => (
                    <li key={index}>• {equipment}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-vintage-gold/10 rounded-lg">
              <p className="text-vintage-gold font-semibold">Best Months: {cityData.climateImpact.bestMonths}</p>
            </div>
          </div>
        ) : (
          <div className="bg-sage-green/5 rounded-lg p-6 border-l-4 border-sage-green">
            <h4 className="font-semibold text-sage-green mb-3 flex items-center">
              <Thermometer className="mr-2 h-4 w-4" />
              Climate Impact on Digital Nomad Life
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-navy">
              <div>
                <h5 className="font-medium text-travel-blue mb-2">Working Conditions</h5>
                <ul className="space-y-1">
                  <li>• AC costs: ₹1,500-3,000/month in summer</li>
                  <li>• Monsoon internet outages: 2-3 times/month</li>
                  <li>• Best outdoor workspaces: Nov-Feb</li>
                  <li>• Power cuts during storms: 2-4 hours</li>
                  <li>• Humidity affects electronics: use silica gel</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-travel-blue mb-2">Health & Comfort</h5>
                <ul className="space-y-1">
                  <li>• Monsoon health risks: water-borne diseases</li>
                  <li>• UV protection essential: SPF 30+ year-round</li>
                  <li>• Dehydration risk in summer: 3-4L water/day</li>
                  <li>• Mosquito season: Jun-Oct (dengue, malaria)</li>
                  <li>• Vitamin D deficiency during monsoons</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}