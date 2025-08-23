import type { City } from "@shared/schema";

// Static city data for deployment fallback
export const staticCitiesData: City[] = [
  {
    id: "e9eabd52-524c-4187-8656-21fa6277965c",
    name: "Mumbai",
    state: "Maharashtra",
    slug: "mumbai",
    description: "India's financial capital and entertainment hub, offering endless opportunities for digital nomads with excellent connectivity and vibrant culture.",
    heroImage: "https://images.unsplash.com/photo-1595658658481-d53ace7ced5d?w=800&h=600&fit=crop",
    latitude: "19.0760",
    longitude: "72.8777",
    population: 20400000,
    rating: "7.2",
    isPopular: true,
    tags: ["tech-hub", "startup-scene", "coastal", "finance", "bollywood", "wifi", "nightlife"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "31180e13-2267-497e-b9b8-ba9a16398dc4",
    name: "Bangalore",
    state: "Karnataka", 
    slug: "bangalore",
    description: "India's Silicon Valley with a thriving tech ecosystem, pleasant weather, and excellent infrastructure for remote workers.",
    heroImage: "https://images.unsplash.com/photo-1580060092295-dbe639fffda3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJBTkdBTE9SRXxlbnwwfHwwfHx8MA%3D%3D",
    latitude: "12.9716",
    longitude: "77.5946",
    population: 12340000,
    rating: "8.1",
    isPopular: true,
    tags: ["tech-hub", "startup-scene", "mild-climate", "coworking", "wifi", "safe"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "38cc8416-182a-4a37-b044-eebd8e6a655f",
    name: "Goa",
    state: "Goa",
    slug: "goa",
    description: "Beach paradise with a relaxed lifestyle, perfect for digital nomads seeking work-life balance with coastal charm.",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    latitude: "15.2993",
    longitude: "74.1240",
    population: 1458000,
    rating: "8.5",
    isPopular: true,
    tags: ["beaches", "relaxed", "tourism", "nightlife", "portuguese-heritage", "warm", "budget"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "b0d5b9ef-c332-4fc0-aef9-6bf616ec7ca6",
    name: "Pune",
    state: "Maharashtra",
    slug: "pune",
    description: "Educational hub with a growing IT sector, offering affordable living and excellent connectivity for remote professionals.",
    heroImage: "https://images.unsplash.com/photo-1567713420020-d97a3e772d32?w=800&h=600&fit=crop",
    latitude: "18.5204",
    longitude: "73.8567",
    population: 3100000,
    rating: "7.8",
    isPopular: true,
    tags: ["education", "it-sector", "cultural", "affordable", "budget", "wifi", "safe"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "735511ba-838c-4c57-874d-06ad39023f45",
    name: "New Delhi",
    state: "Delhi",
    slug: "new-delhi",
    description: "India's capital city offering rich history, diverse culture, and excellent connectivity for business and leisure.",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
    latitude: "28.6139",
    longitude: "77.2090",
    population: 32900000,
    rating: "6.5",
    isPopular: true,
    tags: ["capital", "history", "politics", "culture", "metro", "wifi", "foodie"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "ce6d304e-619d-4885-b025-cd7bf7ff3b47",
    name: "Alleppey",
    state: "Kerala",
    slug: "alleppey",
    description: "Venice of the East with serene backwaters, offering a peaceful environment for focused remote work.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
    latitude: "9.4981",
    longitude: "76.3388",
    population: 174000,
    rating: "8.7",
    isPopular: true,
    tags: ["backwaters", "peaceful", "nature", "houseboats", "ayurveda", "warm", "budget"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "4edbf514-aa29-40cb-8f68-541ed5b765b3",
    name: "Varkala",
    state: "Kerala",
    slug: "varkala",
    description: "Cliff-side beach town perfect for digital nomads seeking inspiration with stunning coastal views and spiritual vibes.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    latitude: "8.7379",
    longitude: "76.7066",
    population: 42000,
    rating: "8.9",
    isPopular: true,
    tags: ["beaches", "cliffs", "spiritual", "yoga", "ayurveda", "warm", "budget"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "5a920cbb-2ac0-404e-bb68-9c794f2dc320",
    name: "Kasol",
    state: "Himachal Pradesh",
    slug: "kasol",
    description: "Mini Israel in the Himalayas, perfect for digital nomads seeking mountain views and a unique cultural experience.",
    heroImage: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
    latitude: "32.0176",
    longitude: "77.3467",
    population: 1200,
    rating: "8.4",
    isPopular: true,
    tags: ["mountains", "trekking", "israeli-culture", "budget-friendly", "nature", "cold", "budget"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "8d3007a0-b646-480d-97ca-bd666ea3291f",
    name: "Udaipur",
    state: "Rajasthan",
    slug: "udaipur",
    description: "City of Lakes with royal architecture and romantic ambiance, offering inspiring workspaces for creative professionals.",
    heroImage: "https://plus.unsplash.com/premium_photo-1697730426227-9056296a0315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VURBSVBVUnxlbnwwfHwwfHx8MA%3D%3D",
    latitude: "24.5854",
    longitude: "73.7125",
    population: 475000,
    rating: "8.2",
    isPopular: true,
    tags: ["royal", "lakes", "heritage", "romantic", "architecture", "warm", "foodie"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "1a920cbb-2ac0-404e-bb68-9c794f2dc320",
    name: "Bir",
    state: "Himachal Pradesh",
    slug: "bir",
    description: "World-famous paragliding destination with Tibetan monasteries, quiet mountain life, and spectacular Himalayan views.",
    heroImage: "https://images.unsplash.com/photo-1620720970374-5b7e67e1e610?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QklSfGVufDB8fDB8fHww",
    latitude: "32.0176",
    longitude: "76.7234",
    population: 1200,
    rating: "8.4",
    isPopular: true,
    tags: ["paragliding", "mountains", "tibetan-culture", "adventure"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "2b920cbb-2ac0-404e-bb68-9c794f2dc320",
    name: "Dehradun",
    state: "Uttarakhand",
    slug: "dehradun",
    description: "Gateway to the Himalayas with excellent education infrastructure, pleasant climate, and growing tech scene.",
    heroImage: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop",
    latitude: "30.3165",
    longitude: "78.0322",
    population: 1400000,
    rating: "7.5",
    isPopular: true,
    tags: ["education-hub", "gateway-to-himalayas", "pleasant-climate", "it-sector"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "3c920cbb-2ac0-404e-bb68-9c794f2dc320",
    name: "Mussoorie",
    state: "Uttarakhand",
    slug: "mussoorie",
    description: "Queen of Hills with colonial charm, mall road culture, scenic mountain views, and inspiring writing retreats.",
    heroImage: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
    latitude: "30.4598",
    longitude: "78.0664",
    population: 30118,
    rating: "7.6",
    isPopular: true,
    tags: ["hill-station", "colonial-heritage", "scenic-views", "writing-retreats"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "4d920cbb-2ac0-404e-bb68-9c794f2dc320",
    name: "Ziro",
    state: "Arunachal Pradesh",
    slug: "ziro",
    description: "UNESCO heritage site with unique Apatani tribal culture, music festivals, and pristine mountain valleys.",
    heroImage: "https://images.unsplash.com/photo-1502780402662-acc01917482e?w=800&h=600&fit=crop",
    latitude: "27.5450",
    longitude: "93.8209",
    population: 5757,
    rating: "8.7",
    isPopular: true,
    tags: ["tribal-culture", "music-festival", "unesco-heritage", "pristine-nature"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "5e920cbb-2ac0-404e-bb68-9c794f2dc320",
    name: "Kolkata",
    state: "West Bengal",
    slug: "kolkata",
    description: "Cultural capital of India with rich literary heritage, vibrant arts scene, affordable living, and intellectual community.",
    heroImage: "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S09MS0FUQXxlbnwwfHwwfHx8MA%3D%3D",
    latitude: "22.5726",
    longitude: "88.3639",
    population: 14850000,
    rating: "7.3",
    isPopular: true,
    tags: ["cultural-capital", "literature", "arts", "intellectual-hub"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "f7b8e9d0-1234-4567-8901-234567890abc",
    name: "Tosh",
    state: "Himachal Pradesh",
    slug: "tosh",
    description: "Remote Himalayan village offering the ultimate digital nomad retreat with stunning mountain views, affordable living, and surprisingly good internet connectivity.",
    heroImage: "https://images.unsplash.com/photo-1573465679176-c3a87941baa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VE9TSHxlbnwwfHwwfHx8MA%3D%3D",
    latitude: "32.0543",
    longitude: "77.3493",
    population: 800,
    rating: "8.7",
    isPopular: false,
    tags: ["mountains", "remote", "budget", "hiking", "spiritual"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "a1b2c3d4-5678-9101-1121-314151617181",
    name: "Rishikesh",
    state: "Uttarakhand",
    slug: "rishikesh",
    description: "Yoga capital of the world with growing digital nomad infrastructure, offering spiritual atmosphere, riverside cafes, and excellent coworking spaces.",
    heroImage: "https://images.unsplash.com/photo-1713340546638-5e30e2b7b1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UklTSElLRVNIfGVufDB8fDB8fHww",
    latitude: "30.0869",
    longitude: "78.2676",
    population: 75000,
    rating: "8.3",
    isPopular: true,
    tags: ["spiritual", "yoga", "adventure", "ganges", "coworking"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "b2c3d4e5-6789-1011-1213-141516171819",
    name: "Pondicherry",
    state: "Puducherry",
    slug: "pondicherry",
    description: "French colonial charm meets digital nomad lifestyle with heritage cafes, coastal vibes, and affordable living in India's most European city.",
    heroImage: "https://images.unsplash.com/photo-1597073642928-48c0971f7ded?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UE9ORElDSEVSUll8ZW58MHx8MHx8fDA%3D",
    latitude: "11.9416",
    longitude: "79.8083",
    population: 950000,
    rating: "8.0",
    isPopular: true,
    tags: ["french-heritage", "coastal", "cafes", "cultural", "affordable"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "c3d4e5f6-7890-1112-1314-151617181920",
    name: "Kochi",
    state: "Kerala",
    slug: "kochi",
    description: "Kerala's commercial hub combining historic Fort Kochi charm with modern coworking spaces, offering digital nomads authentic South Indian culture at budget prices.",
    heroImage: "https://images.unsplash.com/photo-1590123732197-e7079d2ceb89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S09DSEl8ZW58MHx8MHx8fDA%3D",
    latitude: "9.9312",
    longitude: "76.2673",
    population: 677000,
    rating: "7.9",
    isPopular: false,
    tags: ["backwaters", "history", "seafood", "culture", "affordable"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "d4e5f6g7-8901-1213-1415-161718192021",
    name: "Wayanad",
    state: "Kerala",
    slug: "wayanad",
    description: "Mountain retreat in Kerala's Western Ghats offering tea plantations, wildlife, and peaceful work environments for nature-loving digital nomads.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    latitude: "11.6854",
    longitude: "76.1320",
    population: 817000,
    rating: "8.2",
    isPopular: false,
    tags: ["mountains", "tea-plantations", "wildlife", "nature", "peaceful"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "e5f6g7h8-9012-1314-1516-171819202122",
    name: "Dharamkot",
    state: "Himachal Pradesh",
    slug: "dharamkot",
    description: "Himalayan village above McLeod Ganj offering established digital nomad community, excellent internet, and stunning mountain views with Tibetan culture.",
    heroImage: "https://images.unsplash.com/photo-1641886915898-dd6cd6c4aaf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8REhBUkFNS09UfGVufDB8fDB8fHww",
    latitude: "32.2432",
    longitude: "76.3222",
    population: 2500,
    rating: "8.6",
    isPopular: true,
    tags: ["mountains", "tibetan-culture", "nomad-hub", "coworking", "community"],
    createdAt: null,
    updatedAt: null
  },
  {
    id: "f6g7h8i9-0123-1415-1617-181920212223",
    name: "Darjeeling",
    state: "West Bengal",
    slug: "darjeeling",
    description: "Famous hill station with tea gardens, colonial architecture, and Himalayan views, emerging as a peaceful digital nomad destination with improving connectivity.",
    heroImage: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8REFSSkVFTElOR3xlbnwwfHwwfHx8MA%3D%3D",
    latitude: "27.0360",
    longitude: "88.2627",
    population: 120000,
    rating: "7.7",
    isPopular: false,
    tags: ["hill-station", "tea-gardens", "colonial", "mountains", "peaceful"],
    createdAt: null,
    updatedAt: null
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