import { CustomHono } from "@/types/hono";
import { createDb } from "@/db/db";
import { test } from "@/db/schema";
import { zValidator } from "@hono/zod-validator";
import { testSchema } from "./schema";
import { eq } from "drizzle-orm";

const app = new CustomHono()
  .get("/", async (c) => {
    const db = createDb(c.env.DATABASE_URL);
    const allTests = await db.select().from(test);
    return c.json(allTests);
  })
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const db = createDb(c.env.DATABASE_URL);
    const singleTest = await db
      .select()
      .from(test)
      .where(eq(test.id, Number(id)));
    return c.json(singleTest);
  })
  .post("/", zValidator("json", testSchema), async (c) => {
    const { title, description } = c.req.valid("json");
    const db = createDb(c.env.DATABASE_URL);
    const newTest = await db
      .insert(test)
      .values({ title, description })
      .returning();
    return c.json(newTest);
  })
  .put("/:id", zValidator("json", testSchema), async (c) => {
    const id = c.req.param("id");
    const { title, description } = c.req.valid("json");
    const db = createDb(c.env.DATABASE_URL);
    const updatedTest = await db
      .update(test)
      .set({ title, description })
      .where(eq(test.id, Number(id)))
      .returning();
    return c.json(updatedTest);
  })
  .delete("/:id", async (c) => {
    const id = c.req.param("id");
    const db = createDb(c.env.DATABASE_URL);
    const deletedTest = await db
      .delete(test)
      .where(eq(test.id, Number(id)))
      .returning();
    return c.json(deletedTest);
  });

export default app;
