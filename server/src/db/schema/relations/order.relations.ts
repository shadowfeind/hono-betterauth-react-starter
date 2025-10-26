import { relations } from "drizzle-orm";
import { order } from "../order.schema";
import { orderItem } from "../orderItem.schema";

export const orderRelations = relations(order, ({ many }) => ({
  items: many(orderItem),
}));

export const orderItemRelations = relations(orderItem, ({ one }) => ({
  order: one(order, {
    fields: [orderItem.orderId],
    references: [order.id],
  }),
}));
