import { relations } from "drizzle-orm";
import { user } from "../auth.schema";
import { test } from "../test.schema";

export const userRelations = relations(user, ({ many }) => ({
  tests: many(test), // one user → many tests
}));

export const testRelations = relations(test, ({ one }) => ({
  user: one(user, {
    fields: [test.userId],
    references: [user.id],
  }),
}));
