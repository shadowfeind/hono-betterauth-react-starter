import { relations } from "drizzle-orm";
import { product } from "../product.schema";
import { category } from "../category.schema";
import { productCategory } from "../productCategory.schema";

export const productRelations = relations(product, ({ many }) => ({
  categories: many(productCategory), // product → many productCategory rows
}));

export const categoryRelations = relations(category, ({ many }) => ({
  products: many(productCategory), // category → many productCategory rows
}));

export const productCategoryRelations = relations(
  productCategory,
  ({ one }) => ({
    product: one(product, {
      fields: [productCategory.productId],
      references: [product.id],
    }),
    category: one(category, {
      fields: [productCategory.categoryId],
      references: [category.id],
    }),
  })
);
