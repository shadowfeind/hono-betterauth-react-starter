import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { user } from "./auth.schema";

export const test = pgTable("test", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  active: boolean("active").default(true),
});

export type Test = typeof test.$inferSelect;
export type NewTest = typeof test.$inferInsert;
