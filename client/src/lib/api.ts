import { queryClient } from "@/lib/queryClient";

// Weather API helpers
export async function fetchWeatherData(cityId: string) {
  try {
    const response = await fetch(`/api/weather/${cityId}`);
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    throw error;
  }
}

// City search helpers
export async function searchCities(query: string) {
  try {
    const response = await fetch(`/api/cities?search=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error(`Search API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to search cities:', error);
    throw error;
  }
}

// Popular cities helper
export async function fetchPopularCities() {
  try {
    const response = await fetch('/api/cities?popular=true');
    if (!response.ok) {
      throw new Error(`Popular cities API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch popular cities:', error);
    throw error;
  }
}

// City details helper
export async function fetchCityDetails(slug: string) {
  try {
    const response = await fetch(`/api/cities/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found');
      }
      throw new Error(`City details API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch city details:', error);
    throw error;
  }
}

// Events helper
export async function fetchCityEvents(cityId: string) {
  try {
    const response = await fetch(`/api/events/${cityId}`);
    if (!response.ok) {
      throw new Error(`Events API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch city events:', error);
    throw error;
  }
}

// Attractions helper
export async function fetchCityAttractions(cityId: string) {
  try {
    const response = await fetch(`/api/attractions/${cityId}`);
    if (!response.ok) {
      throw new Error(`Attractions API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch city attractions:', error);
    throw error;
  }
}

// Cache invalidation helpers
export function invalidateCityCache(slug?: string) {
  if (slug) {
    queryClient.invalidateQueries({ queryKey: ['/api/cities', slug] });
  } else {
    queryClient.invalidateQueries({ queryKey: ['/api/cities'] });
  }
}

export function invalidateWeatherCache(cityId: string) {
  queryClient.invalidateQueries({ queryKey: ['/api/weather', cityId] });
}

// Prefetch helpers for better UX
export function prefetchCityDetails(slug: string) {
  queryClient.prefetchQuery({
    queryKey: ['/api/cities', slug],
    queryFn: () => fetchCityDetails(slug),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function prefetchPopularCities() {
  queryClient.prefetchQuery({
    queryKey: ['/api/cities', 'popular=true'],
    queryFn: fetchPopularCities,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Error handling helper
export function handleApiError(error: unknown): string {
  if (error instanceof Error) {
    if (error.message.includes('404')) {
      return 'The requested resource was not found.';
    }
    if (error.message.includes('500')) {
      return 'Internal server error. Please try again later.';
    }
    if (error.message.includes('Network')) {
      return 'Network error. Please check your internet connection.';
    }
    return error.message;
  }
  return 'An unexpected error occurred.';
}

// Filter helpers
export interface CityFilters {
  minBudget?: number;
  maxBudget?: number;
  minInternetSpeed?: number;
  minSafetyScore?: number;
  tags?: string[];
  climatePreference?: 'hot' | 'cold' | 'moderate';
}

export function buildFilterQuery(filters: CityFilters): string {
  const params = new URLSearchParams();
  
  if (filters.minBudget) params.append('minBudget', filters.minBudget.toString());
  if (filters.maxBudget) params.append('maxBudget', filters.maxBudget.toString());
  if (filters.minInternetSpeed) params.append('minSpeed', filters.minInternetSpeed.toString());
  if (filters.minSafetyScore) params.append('minSafety', filters.minSafetyScore.toString());
  if (filters.tags && filters.tags.length > 0) {
    filters.tags.forEach(tag => params.append('tags', tag));
  }
  if (filters.climatePreference) params.append('climate', filters.climatePreference);
  
  return params.toString();
}

// Local storage helpers for user preferences
export function saveUserPreferences(preferences: CityFilters) {
  try {
    localStorage.setItem('roam-insider-preferences', JSON.stringify(preferences));
  } catch (error) {
    console.warn('Failed to save user preferences:', error);
  }
}

export function loadUserPreferences(): CityFilters | null {
  try {
    const saved = localStorage.getItem('roam-insider-preferences');
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.warn('Failed to load user preferences:', error);
    return null;
  }
}

// Currency conversion helper (mock implementation)
export function convertINRToUSD(inrAmount: number): number {
  const exchangeRate = 0.012; // Mock exchange rate, in real app this would come from an API
  return Math.round(inrAmount * exchangeRate);
}

export function formatCurrency(amount: number, currency: 'INR' | 'USD' = 'INR'): string {
  if (currency === 'INR') {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}
