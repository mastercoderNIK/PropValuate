import { pgTable, text, serial, timestamp, integer, real, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { usersTable } from "./users";

export const predictionsTable = pgTable("predictions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => usersTable.id),
  location: text("location").notNull(),
  area: real("area").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  floors: integer("floors").notNull(),
  yearBuilt: integer("year_built").notNull(),
  hasGarage: boolean("has_garage").notNull().default(false),
  hasGarden: boolean("has_garden").notNull().default(false),
  hasPool: boolean("has_pool").notNull().default(false),
  nearSchool: boolean("near_school").notNull().default(false),
  nearHospital: boolean("near_hospital").notNull().default(false),
  nearMall: boolean("near_mall").notNull().default(false),
  condition: text("condition").notNull(),
  propertyType: text("property_type").notNull(),
  modelUsed: text("model_used").notNull().default("random_forest"),
  predictedPrice: real("predicted_price").notNull(),
  linearPrice: real("linear_price").notNull(),
  ridgePrice: real("ridge_price").notNull(),
  randomForestPrice: real("random_forest_price").notNull(),
  confidenceScore: real("confidence_score").notNull(),
  priceRange: jsonb("price_range").notNull(),
  featureImportance: jsonb("feature_importance").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertPredictionSchema = createInsertSchema(predictionsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertPrediction = z.infer<typeof insertPredictionSchema>;
export type Prediction = typeof predictionsTable.$inferSelect;
