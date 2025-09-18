// src/db.ts
import { neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";

export function createDb(url: string): NeonHttpDatabase<typeof schema> {
  const sql = neon(url); // fetch-based, Worker-safe
  return drizzle(sql, { schema, casing: "snake_case" });
}
