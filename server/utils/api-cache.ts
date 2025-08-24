interface CacheEntry {
  data: any;
  timestamp: number;
  expiresAt: number;
}

class ApiCache {
  private cache: Map<string, CacheEntry> = new Map();
  private readonly CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

  /**
   * Get cached data if it exists and is not expired
   */
  get(key: string): any | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    // Check if cache has expired
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    console.log(`🎯 Cache hit for ${key} - ${this.getTimeRemaining(entry.expiresAt)} remaining`);
    return entry.data;
  }

  /**
   * Set cache entry with automatic expiration
   */
  set(key: string, data: any): void {
    const now = Date.now();
    const entry: CacheEntry = {
      data,
      timestamp: now,
      expiresAt: now + this.CACHE_DURATION
    };

    this.cache.set(key, entry);
    console.log(`💾 Cached ${key} - expires in 12 hours`);
  }

  /**
   * Check if cache exists and is valid
   */
  isValid(key: string): boolean {
    const entry = this.cache.get(key);
    return entry !== undefined && Date.now() <= entry.expiresAt;
  }

  /**
   * Clear expired entries from cache
   */
  cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    // Convert entries to array to avoid TypeScript iteration issues
    const entries = Array.from(this.cache.entries());
    for (const [key, entry] of entries) {
      if (now > entry.expiresAt) {
        keysToDelete.push(key);
      }
    }

    keysToDelete.forEach(key => {
      this.cache.delete(key);
      console.log(`🗑️ Cleaned expired cache entry: ${key}`);
    });

    if (keysToDelete.length > 0) {
      console.log(`✨ Cache cleanup complete - removed ${keysToDelete.length} expired entries`);
    }
  }

  /**
   * Get cache statistics
   */
  getStats(): { totalEntries: number; validEntries: number } {
    const now = Date.now();
    const totalEntries = this.cache.size;
    const validEntries = Array.from(this.cache.values())
      .filter(entry => now <= entry.expiresAt).length;

    return { totalEntries, validEntries };
  }

  /**
   * Get human-readable time remaining until expiration
   */
  private getTimeRemaining(expiresAt: number): string {
    const remaining = expiresAt - Date.now();
    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours}h ${minutes}m`;
  }

  /**
   * Force clear all cache (for testing/admin purposes)
   */
  clear(): void {
    this.cache.clear();
    console.log("🧹 Cache cleared completely");
  }
}

// Export singleton instance
export const apiCache = new ApiCache();

// Run cleanup every hour
setInterval(() => {
  apiCache.cleanup();
}, 60 * 60 * 1000);

export default apiCache;