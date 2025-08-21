// API Endpoints
export const API_ENDPOINTS = {
  CITIES: '/api/cities',
  WEATHER: '/api/weather',
  EVENTS: '/api/events',
  ATTRACTIONS: '/api/attractions',
} as const;

// Color Theme Constants
export const COLORS = {
  VINTAGE_GOLD: '#D4A574',
  TRAVEL_BLUE: '#2C5F7A',
  WARM_TERRACOTTA: '#B85450',
  SAGE_GREEN: '#87A96B',
  CREAM: '#FBF8F3',
  SUNSET_ORANGE: '#E07A5F',
  MUTED_NAVY: '#4A5568',
} as const;

// Filter Options
export const FILTER_OPTIONS = {
  BUDGET_RANGES: [
    { label: 'Budget (Under ₹30K)', value: 'budget', max: 30000 },
    { label: 'Mid-range (₹30K - ₹50K)', value: 'mid', min: 30000, max: 50000 },
    { label: 'Premium (Above ₹50K)', value: 'premium', min: 50000 },
  ],
  INTERNET_SPEEDS: [
    { label: 'Basic (10+ Mbps)', value: 10 },
    { label: 'Good (25+ Mbps)', value: 25 },
    { label: 'Excellent (50+ Mbps)', value: 50 },
  ],
  SAFETY_SCORES: [
    { label: 'Safe (6+)', value: 6 },
    { label: 'Very Safe (8+)', value: 8 },
  ],
  LIFESTYLE_PREFERENCES: [
    { id: 'tech', label: 'Tech Scene', icon: '💻' },
    { id: 'beach', label: 'Beach', icon: '🏖️' },
    { id: 'heritage', label: 'Heritage', icon: '🏛️' },
    { id: 'nightlife', label: 'Nightlife', icon: '🌃' },
    { id: 'nature', label: 'Nature', icon: '🌿' },
    { id: 'foodie', label: 'Foodie', icon: '🍽️' },
    { id: 'budget', label: 'Budget Friendly', icon: '💰' },
    { id: 'startup', label: 'Startup Hub', icon: '🚀' },
  ],
  CLIMATE_PREFERENCES: [
    { id: 'hot', label: 'Hot (25°C+)', icon: '☀️' },
    { id: 'moderate', label: 'Moderate (20-28°C)', icon: '⛅' },
    { id: 'cool', label: 'Cool (Under 25°C)', icon: '🌤️' },
  ],
} as const;

// City Categories
export const CITY_CATEGORIES = {
  POPULAR: 'Popular Destinations',
  BUDGET: 'Budget-Friendly',
  TECH_HUBS: 'Tech Hubs',
  COASTAL: 'Coastal Cities',
  HERITAGE: 'Heritage Cities',
  HILL_STATIONS: 'Hill Stations',
  METROS: 'Metro Cities',
  EMERGING: 'Emerging Destinations',
} as const;

// Experience Categories for attractions
export const EXPERIENCE_CATEGORIES = [
  { id: 'historical', name: 'Historical', icon: '🏛️', color: 'warm-terracotta' },
  { id: 'cultural', name: 'Cultural', icon: '🎭', color: 'vintage-gold' },
  { id: 'nature', name: 'Nature', icon: '🌳', color: 'sage-green' },
  { id: 'adventure', name: 'Adventure', icon: '🏔️', color: 'sunset-orange' },
  { id: 'food', name: 'Food', icon: '🍽️', color: 'travel-blue' },
  { id: 'nightlife', name: 'Nightlife', icon: '🌃', color: 'warm-terracotta' },
  { id: 'shopping', name: 'Shopping', icon: '🛍️', color: 'vintage-gold' },
  { id: 'wellness', name: 'Wellness', icon: '🧘', color: 'sage-green' },
  { id: 'religious', name: 'Religious', icon: '🕉️', color: 'travel-blue' },
  { id: 'beaches', name: 'Beaches', icon: '🏖️', color: 'sunset-orange' },
] as const;

// Transportation Types
export const TRANSPORT_TYPES = {
  METRO: { name: 'Metro', icon: '🚇' },
  BUS: { name: 'Bus', icon: '🚌' },
  AUTO_RICKSHAW: { name: 'Auto Rickshaw', icon: '🛺' },
  TAXI: { name: 'Taxi', icon: '🚕' },
  BIKE: { name: 'Bike', icon: '🏍️' },
  TRAIN: { name: 'Train', icon: '🚊' },
} as const;

// Safety Score Ratings
export const SAFETY_RATINGS = {
  EXCELLENT: { min: 8, label: 'Very Safe', color: 'sage-green' },
  GOOD: { min: 6, label: 'Safe', color: 'vintage-gold' },
  MODERATE: { min: 4, label: 'Moderate', color: 'sunset-orange' },
  POOR: { min: 0, label: 'Caution Required', color: 'warm-terracotta' },
} as const;

// Internet Speed Categories
export const INTERNET_CATEGORIES = {
  EXCELLENT: { min: 50, label: 'Excellent', color: 'sage-green' },
  GOOD: { min: 25, label: 'Good', color: 'vintage-gold' },
  FAIR: { min: 10, label: 'Fair', color: 'sunset-orange' },
  POOR: { min: 0, label: 'Poor', color: 'warm-terracotta' },
} as const;

// Temperature Categories
export const TEMPERATURE_CATEGORIES = {
  HOT: { min: 30, label: 'Hot', color: 'warm-terracotta' },
  WARM: { min: 25, label: 'Warm', color: 'sunset-orange' },
  MODERATE: { min: 20, label: 'Moderate', color: 'vintage-gold' },
  COOL: { min: 15, label: 'Cool', color: 'sage-green' },
  COLD: { min: 0, label: 'Cold', color: 'travel-blue' },
} as const;

// Pollution Index Categories
export const POLLUTION_CATEGORIES = {
  GOOD: { max: 50, label: 'Good', color: 'sage-green' },
  MODERATE: { max: 100, label: 'Moderate', color: 'vintage-gold' },
  UNHEALTHY: { max: 200, label: 'Unhealthy', color: 'sunset-orange' },
  HAZARDOUS: { max: 999, label: 'Hazardous', color: 'warm-terracotta' },
} as const;

// Emergency Contact Types
export const EMERGENCY_CONTACTS = {
  POLICE: { number: '100', icon: '👮' },
  MEDICAL: { number: '108', icon: '🚑' },
  FIRE: { number: '101', icon: '🚒' },
  WOMEN_HELPLINE: { number: '1091', icon: '👩' },
  TOURIST_HELPLINE: { number: '1363', icon: '🧳' },
} as const;

// Query Keys for React Query
export const QUERY_KEYS = {
  CITIES: 'cities',
  CITY_DETAILS: 'city-details',
  POPULAR_CITIES: 'popular-cities',
  WEATHER: 'weather',
  EVENTS: 'events',
  ATTRACTIONS: 'attractions',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'roam-insider-preferences',
  SEARCH_HISTORY: 'roam-insider-search-history',
  FAVORITE_CITIES: 'roam-insider-favorites',
} as const;

// Default Values
export const DEFAULTS = {
  CURRENCY: 'INR' as const,
  EXCHANGE_RATE_INR_TO_USD: 0.012,
  PAGINATION_LIMIT: 12,
  WEATHER_REFRESH_INTERVAL: 30 * 60 * 1000, // 30 minutes
  CACHE_STALE_TIME: 5 * 60 * 1000, // 5 minutes
} as const;

// Form Validation
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MIN_SEARCH_LENGTH: 2,
  MAX_SEARCH_LENGTH: 50,
  DEBOUNCE_DELAY: 300,
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/roaminsider',
  INSTAGRAM: 'https://instagram.com/roaminsider',
  TELEGRAM: 'https://t.me/roaminsider',
  DISCORD: 'https://discord.gg/roaminsider',
} as const;

// Navigation Menu Items
export const NAV_ITEMS = [
  { href: '/', label: 'Cities' },
  { href: '/guides', label: 'Guides' },
  { href: '/community', label: 'Community' },
  { href: '/blog', label: 'Blog' },
] as const;

// Footer Links
export const FOOTER_SECTIONS = [
  {
    title: 'Explore',
    links: [
      { label: 'All Cities', href: '/cities' },
      { label: 'Popular Destinations', href: '/popular' },
      { label: 'Hidden Gems', href: '/hidden-gems' },
      { label: 'Budget Cities', href: '/budget' },
      { label: 'Tech Hubs', href: '/tech-hubs' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'City Guides', href: '/guides' },
      { label: 'Cost Calculator', href: '/calculator' },
      { label: 'Visa Guide', href: '/visa' },
      { label: 'Safety Tips', href: '/safety' },
      { label: 'Community Forum', href: '/forum' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
] as const;

// Feature Highlights
export const FEATURES = [
  {
    title: 'Real-Time Data',
    description: 'Live updates on cost of living, internet speeds, weather, and local events.',
    icon: '📊',
    color: 'travel-blue',
  },
  {
    title: 'Local Insights',
    description: 'Insider tips from local nomads and residents who know the hidden gems.',
    icon: '👥',
    color: 'vintage-gold',
  },
  {
    title: 'Safety First',
    description: 'Comprehensive safety information including women traveler guides.',
    icon: '🛡️',
    color: 'sage-green',
  },
  {
    title: 'Cost Transparency',
    description: 'Detailed breakdown of living costs in both INR and USD.',
    icon: '💰',
    color: 'warm-terracotta',
  },
  {
    title: 'Digital Infrastructure',
    description: 'Complete coverage of coworking spaces and internet reliability.',
    icon: '📶',
    color: 'sunset-orange',
  },
  {
    title: 'Cultural Guide',
    description: 'Deep dive into local culture, customs, and etiquette.',
    icon: '❤️',
    color: 'travel-blue',
  },
] as const;
