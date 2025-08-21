import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const cities = pgTable("cities", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  state: text("state").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  heroImage: text("hero_image").notNull(),
  latitude: decimal("latitude", { precision: 10, scale: 8 }).notNull(),
  longitude: decimal("longitude", { precision: 11, scale: 8 }).notNull(),
  population: integer("population"),
  rating: decimal("rating", { precision: 3, scale: 2 }),
  isPopular: boolean("is_popular").default(false),
  tags: jsonb("tags").$type<string[]>().default([]),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const costOfLiving = pgTable("cost_of_living", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cityId: varchar("city_id").references(() => cities.id).notNull(),
  monthlyBudgetINR: integer("monthly_budget_inr").notNull(),
  monthlyBudgetUSD: integer("monthly_budget_usd").notNull(),
  studioRentINR: integer("studio_rent_inr"),
  oneBhkRentINR: integer("one_bhk_rent_inr"),
  twoBhkRentINR: integer("two_bhk_rent_inr"),
  utilitiesINR: integer("utilities_inr"),
  groceriesINR: integer("groceries_inr"),
  eatingOutINR: integer("eating_out_inr"),
  coworkingINR: integer("coworking_inr"),
  transportINR: integer("transport_inr"),
  simDataINR: integer("sim_data_inr"),
  gymINR: integer("gym_inr"),
  coffeeINR: integer("coffee_inr"),
  entertainmentINR: integer("entertainment_inr"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const internetConnectivity = pgTable("internet_connectivity", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cityId: varchar("city_id").references(() => cities.id).notNull(),
  avgSpeedMbps: integer("avg_speed_mbps").notNull(),
  coworkingSpaces: jsonb("coworking_spaces").$type<Array<{
    name: string;
    address: string;
    pricing: string;
    speedMbps: number;
    amenities: string[];
  }>>().default([]),
  simProviders: jsonb("sim_providers").$type<Array<{
    provider: string;
    plans: Array<{
      data: string;
      validity: string;
      price: number;
    }>;
  }>>().default([]),
  wifiAvailability: text("wifi_availability"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const transportation = pgTable("transportation", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cityId: varchar("city_id").references(() => cities.id).notNull(),
  localTransport: jsonb("local_transport").$type<{
    metro: boolean;
    bus: boolean;
    autoRickshaw: boolean;
    taxi: boolean;
    bike: boolean;
  }>(),
  walkabilityScore: integer("walkability_score"),
  rideHailing: jsonb("ride_hailing").$type<string[]>().default([]),
  airports: jsonb("airports").$type<Array<{
    name: string;
    code: string;
    distance: string;
  }>>().default([]),
  trainStations: jsonb("train_stations").$type<Array<{
    name: string;
    type: string;
  }>>().default([]),
  intercityConnectivity: text("intercity_connectivity"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const climate = pgTable("climate", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cityId: varchar("city_id").references(() => cities.id).notNull(),
  avgTempCelsius: integer("avg_temp_celsius").notNull(),
  avgHumidity: integer("avg_humidity"),
  rainyMonths: jsonb("rainy_months").$type<string[]>().default([]),
  bestTimeToVisit: text("best_time_to_visit"),
  climateType: text("climate_type"),
  currentWeather: jsonb("current_weather").$type<{
    temperature: number;
    humidity: number;
    description: string;
    icon: string;
  }>(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const safety = pgTable("safety", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cityId: varchar("city_id").references(() => cities.id).notNull(),
  safetyScore: decimal("safety_score", { precision: 3, scale: 1 }).notNull(),
  womenSafetyScore: decimal("women_safety_score", { precision: 3, scale: 1 }),
  crimeRate: text("crime_rate"),
  hospitals: jsonb("hospitals").$type<Array<{
    name: string;
    address: string;
    type: string;
    emergency: boolean;
  }>>().default([]),
  emergencyNumbers: jsonb("emergency_numbers").$type<{
    police: string;
    medical: string;
    fire: string;
  }>(),
  pollutionIndex: integer("pollution_index"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const lifestyle = pgTable("lifestyle", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cityId: varchar("city_id").references(() => cities.id).notNull(),
  foodScene: jsonb("food_scene").$type<{
    specialties: string[];
    vegFriendly: boolean;
    streetFood: boolean;
    internationalCuisine: boolean;
  }>(),
  nightlife: jsonb("nightlife").$type<{
    bars: boolean;
    clubs: boolean;
    lateNightEating: boolean;
    alcoholLaws: string;
  }>(),
  fitness: jsonb("fitness").$type<{
    gyms: number;
    parks: number;
    yogaStudios: number;
    outdoorActivities: string[];
  }>(),
  culture: jsonb("culture").$type<{
    languages: string[];
    festivals: string[];
    customs: string[];
    artScene: boolean;
  }>(),
  cannabisLaws: text("cannabis_laws"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cityId: varchar("city_id").references(() => cities.id).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  date: timestamp("date").notNull(),
  venue: text("venue"),
  category: text("category"),
  isPaid: boolean("is_paid").default(false),
  price: integer("price"),
  url: text("url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const attractions = pgTable("attractions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  cityId: varchar("city_id").references(() => cities.id).notNull(),
  name: text("name").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  image: text("image"),
  rating: decimal("rating", { precision: 3, scale: 2 }),
  priceRange: text("price_range"),
  address: text("address"),
  timings: text("timings"),
  isHiddenGem: boolean("is_hidden_gem").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertCitySchema = createInsertSchema(cities).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertCostOfLivingSchema = createInsertSchema(costOfLiving).omit({
  id: true,
  updatedAt: true,
});

export const insertInternetConnectivitySchema = createInsertSchema(internetConnectivity).omit({
  id: true,
  updatedAt: true,
});

export const insertTransportationSchema = createInsertSchema(transportation).omit({
  id: true,
  updatedAt: true,
});

export const insertClimateSchema = createInsertSchema(climate).omit({
  id: true,
  updatedAt: true,
});

export const insertSafetySchema = createInsertSchema(safety).omit({
  id: true,
  updatedAt: true,
});

export const insertLifestyleSchema = createInsertSchema(lifestyle).omit({
  id: true,
  updatedAt: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
  createdAt: true,
});

export const insertAttractionSchema = createInsertSchema(attractions).omit({
  id: true,
  createdAt: true,
});

export type City = typeof cities.$inferSelect;
export type InsertCity = z.infer<typeof insertCitySchema>;
export type CostOfLiving = typeof costOfLiving.$inferSelect;
export type InsertCostOfLiving = z.infer<typeof insertCostOfLivingSchema>;
export type InternetConnectivity = typeof internetConnectivity.$inferSelect;
export type InsertInternetConnectivity = z.infer<typeof insertInternetConnectivitySchema>;
export type Transportation = typeof transportation.$inferSelect;
export type InsertTransportation = z.infer<typeof insertTransportationSchema>;
export type Climate = typeof climate.$inferSelect;
export type InsertClimate = z.infer<typeof insertClimateSchema>;
export type Safety = typeof safety.$inferSelect;
export type InsertSafety = z.infer<typeof insertSafetySchema>;
export type Lifestyle = typeof lifestyle.$inferSelect;
export type InsertLifestyle = z.infer<typeof insertLifestyleSchema>;
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Attraction = typeof attractions.$inferSelect;
export type InsertAttraction = z.infer<typeof insertAttractionSchema>;

export type CityWithDetails = City & {
  costOfLiving: CostOfLiving | null;
  internetConnectivity: InternetConnectivity | null;
  transportation: Transportation | null;
  climate: Climate | null;
  safety: Safety | null;
  lifestyle: Lifestyle | null;
  events: Event[];
  attractions: Attraction[];
};
