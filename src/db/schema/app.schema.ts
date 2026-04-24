import { pgTable, uuid, varchar, timestamp, text } from "drizzle-orm/pg-core";

export const appTable = pgTable("Application", {
  id: uuid("id").primaryKey().defaultRandom(),

  applicationUrl: text("application_url"),
  redirectUrl: text("redirect_url"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});
