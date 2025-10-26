import {
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { user } from "./auth.schema";

export const test = pgTable(
  "test",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    // Prefer snake_case in DB; camelCase in code is fine
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    active: boolean("active").default(true),
  },
  // v0.36+ uses array form for extras
  (t) => [
    uniqueIndex("test_user_id_uk").on(t.userId), // 👈 this makes it one-to-one
  ]
);
