import {
  pgTable,
  serial,
  text,
  timestamp,
  numeric,
  integer,
  boolean,
} from "drizzle-orm/pg-core";

export const order = pgTable("order", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(), // e.g., "ORD-2025-000123"
  notes: text("notes"),
  total: numeric("total", { precision: 12, scale: 2 })
    .notNull()
    .default("0.00"),
  paid: boolean("paid").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
