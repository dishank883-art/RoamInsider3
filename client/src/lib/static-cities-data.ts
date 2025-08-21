import type { City } from "@shared/schema";

// Static city data for deployment that doesn't require API calls
export const staticCitiesData: City[] = [
  {
    id: "e9eabd52-524c-4187-8656-21fa6277965c",
    name: "Mumbai",
    state: "Maharashtra",
    slug: "mumbai",
    description: "India's financial capital and entertainment hub, offering endless opportunities for digital nomads with excellent connectivity and vibrant culture.",
    latitude: "19.0760",
    longitude: "72.8777",
    costOfLiving: 65000,
    internetSpeed: 85,
    safetyScore: 7.2,
    tags: ["tech-hub", "startup-scene", "coastal", "finance", "bollywood"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1595658658481-d53ace7ced5d?w=800&h=600&fit=crop"
  },
  {
    id: "31180e13-2267-497e-b9b8-ba9a16398dc4",
    name: "Bangalore",
    state: "Karnataka", 
    slug: "bangalore",
    description: "India's Silicon Valley with a thriving tech ecosystem, pleasant weather, and excellent infrastructure for remote workers.",
    latitude: "12.9716",
    longitude: "77.5946",
    costOfLiving: 55000,
    internetSpeed: 95,
    safetyScore: 8.1,
    tags: ["tech-hub", "startup-scene", "mild-climate", "coworking"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=600&fit=crop"
  },
  {
    id: "38cc8416-182a-4a37-b044-eebd8e6a655f",
    name: "Goa",
    state: "Goa",
    slug: "goa",
    description: "Beach paradise with a relaxed lifestyle, perfect for digital nomads seeking work-life balance with coastal charm.",
    latitude: "15.2993",
    longitude: "74.1240",
    costOfLiving: 45000,
    internetSpeed: 70,
    safetyScore: 8.5,
    tags: ["beaches", "relaxed", "tourism", "nightlife", "portuguese-heritage"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop"
  },
  {
    id: "b0d5b9ef-c332-4fc0-aef9-6bf616ec7ca6",
    name: "Pune",
    state: "Maharashtra",
    slug: "pune",
    description: "Educational hub with a growing IT sector, offering affordable living and excellent connectivity for remote professionals.",
    latitude: "18.5204",
    longitude: "73.8567",
    costOfLiving: 48000,
    internetSpeed: 80,
    safetyScore: 7.8,
    tags: ["education", "it-sector", "cultural", "affordable"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop"
  },
  {
    id: "735511ba-838c-4c57-874d-06ad39023f45",
    name: "New Delhi",
    state: "Delhi",
    slug: "new-delhi",
    description: "India's capital city offering rich history, diverse culture, and excellent connectivity for business and leisure.",
    latitude: "28.6139",
    longitude: "77.2090",
    costOfLiving: 58000,
    internetSpeed: 90,
    safetyScore: 6.5,
    tags: ["capital", "history", "politics", "culture", "metro"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop"
  },
  {
    id: "ce6d304e-619d-4885-b025-cd7bf7ff3b47",
    name: "Alleppey",
    state: "Kerala",
    slug: "alleppey",
    description: "Venice of the East with serene backwaters, offering a peaceful environment for focused remote work.",
    latitude: "9.4981",
    longitude: "76.3388",
    costOfLiving: 35000,
    internetSpeed: 60,
    safetyScore: 8.7,
    tags: ["backwaters", "peaceful", "nature", "houseboats", "ayurveda"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop"
  },
  {
    id: "4edbf514-aa29-40cb-8f68-541ed5b765b3",
    name: "Varkala",
    state: "Kerala",
    slug: "varkala",
    description: "Cliff-side beach town perfect for digital nomads seeking inspiration with stunning coastal views and spiritual vibes.",
    latitude: "8.7379",
    longitude: "76.7066",
    costOfLiving: 32000,
    internetSpeed: 55,
    safetyScore: 8.9,
    tags: ["beaches", "cliffs", "spiritual", "yoga", "ayurveda"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  },
  {
    id: "5a920cbb-2ac0-404e-bb68-9c794f2dc320",
    name: "Kasol",
    state: "Himachal Pradesh",
    slug: "kasol",
    description: "Mini Israel in the Himalayas, perfect for digital nomads seeking mountain views and a unique cultural experience.",
    latitude: "32.0176",
    longitude: "77.3467",
    costOfLiving: 28000,
    internetSpeed: 45,
    safetyScore: 8.4,
    tags: ["mountains", "trekking", "israeli-culture", "budget-friendly", "nature"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  },
  {
    id: "8d3007a0-b646-480d-97ca-bd666ea3291f",
    name: "Udaipur",
    state: "Rajasthan",
    slug: "udaipur",
    description: "City of Lakes with royal architecture and romantic ambiance, offering inspiring workspaces for creative professionals.",
    latitude: "24.5854",
    longitude: "73.7125",
    costOfLiving: 42000,
    internetSpeed: 65,
    safetyScore: 8.2,
    tags: ["royal", "lakes", "heritage", "romantic", "architecture"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop"
  },
  {
    id: "d52fabe7-e369-4180-a878-03ca17e5abf1",
    name: "Gangtok",
    state: "Sikkim",
    slug: "gangtok",
    description: "Mountain capital with stunning Himalayan views and peaceful Buddhist culture, ideal for focused remote work.",
    latitude: 27.3389,
    longitude: 88.6065,
    costOfLiving: 38000,
    internetSpeed: 50,
    safetyScore: 9.1,
    tags: ["mountains", "buddhist", "peaceful", "himalayas", "organic"],
    isPopular: false,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  },
  {
    id: "f8a9e2c1-4d5e-4a8b-9c7d-1e2f3a4b5c6d",
    name: "McLeodganj",
    state: "Himachal Pradesh",
    slug: "mcleodganj",
    description: "Home of the Dalai Lama with Tibetan culture and mountain serenity, perfect for mindful remote work.",
    latitude: 32.2396,
    longitude: 76.3200,
    costOfLiving: 30000,
    internetSpeed: 48,
    safetyScore: 8.8,
    tags: ["tibetan", "mountains", "spiritual", "peaceful", "meditation"],
    isPopular: false,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  },
  {
    id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
    name: "Shillong",
    state: "Meghalaya",
    slug: "shillong",
    description: "Scotland of the East with rolling hills and vibrant music culture, offering a unique work environment.",
    latitude: 25.5788,
    longitude: 91.8933,
    costOfLiving: 35000,
    internetSpeed: 55,
    safetyScore: 8.3,
    tags: ["hills", "music", "northeast", "culture", "rain"],
    isPopular: false,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  }
];

// Helper function to get city by slug
export function getCityBySlug(slug: string): City | undefined {
  return staticCitiesData.find(city => city.slug === slug);
}

// Helper function to get popular cities
export function getPopularCities(): City[] {
  return staticCitiesData.filter(city => city.isPopular);
}

// Helper function to search cities
export function searchStaticCities(query: string): City[] {
  if (!query) return staticCitiesData;
  
  const lowerQuery = query.toLowerCase();
  return staticCitiesData.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.state.toLowerCase().includes(lowerQuery) ||
    city.description.toLowerCase().includes(lowerQuery) ||
    city.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// Helper function to filter cities by tags
export function filterCitiesByTags(tags: string[]): City[] {
  if (tags.length === 0) return staticCitiesData;
  
  return staticCitiesData.filter(city =>
    city.tags?.some(tag => tags.includes(tag))
  );
}

// Helper function to get all unique tags
export function getAllTags(): string[] {
  const tags = new Set<string>();
  staticCitiesData.forEach(city => {
    city.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}