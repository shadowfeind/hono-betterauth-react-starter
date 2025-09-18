import { CustomHono } from "@/types/hono";
import test from "@/features/test";
import { createDb } from "@/db/db";
import { sql } from "drizzle-orm";

const app = new CustomHono();

app.get("/health", async (c) => {
  try {
    const db = createDb(c.env.DATABASE_URL);
    await db.execute(sql`SELECT 1`);
    return c.json({ message: "Successfully connected to the database" });
  } catch (error) {
    console.error(error);
    return c.json({ message: "Failed to connect to the database" }, 500);
  }
});

app.route("/test", test);

export default app;
