import { integer, pgTable } from "drizzle-orm/pg-core";
import { product } from "./product.schema";
import { category } from "./category.schema";
import { primaryKey, index } from "drizzle-orm/pg-core";

export const productCategory = pgTable(
  "product_category",
  {
    productId: integer("product_id")
      .notNull()
      .references(() => product.id, { onDelete: "cascade" }),
    categoryId: integer("category_id")
      .notNull()
      .references(() => category.id, { onDelete: "cascade" }),
  },
  (t) => [
    // Composite primary key ensures (product_id, category_id) is unique
    primaryKey({
      name: "product_category_pk",
      columns: [t.productId, t.categoryId],
    }),

    // Helpful indexes for filtering either side
    index("product_category_product_id_idx").on(t.productId),
    index("product_category_category_id_idx").on(t.categoryId),
  ]
);
