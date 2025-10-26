import {
  pgTable,
  serial,
  integer,
  numeric,
  text,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { order } from "./order.schema";

export const orderItem = pgTable(
  "order_item",
  {
    id: serial("id").primaryKey(),
    orderId: integer("order_id")
      .notNull()
      .references(() => order.id, { onDelete: "cascade" }), // one→many link
    sku: text("sku").notNull(), // product identifier
    name: text("name").notNull(), // snapshot name
    qty: integer("qty").notNull(),
    unitPrice: numeric("unit_price", { precision: 10, scale: 2 }).notNull(),
    lineTotal: numeric("line_total", { precision: 12, scale: 2 }).notNull(),
  },
  (t) => [uniqueIndex("order_item_order_id_sku_uk").on(t.orderId, t.sku)]
);
