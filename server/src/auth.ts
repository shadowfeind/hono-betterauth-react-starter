import { createDb } from "@/db/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/db/schema";
import { openAPI } from "better-auth/plugins";

export const createAuth = (env: CloudflareBindings) => {
  if (!env.DATABASE_URL) throw new Error("Missing DATABASE_URL");
  if (!env.BETTER_AUTH_SECRET) throw new Error("Missing BETTER_AUTH_SECRET");
  if (!env.BETTER_AUTH_URL) throw new Error("Missing BETTER_AUTH_URL");

  const db = createDb(env.DATABASE_URL);

  return betterAuth({
    database: drizzleAdapter(db, { provider: "pg", schema }),
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    emailAndPassword: { enabled: true },
    socialProviders: {
      github: {
        clientId: env.GITHUB_CLIENT_ID ?? "",
        clientSecret: env.GITHUB_CLIENT_SECRET ?? "",
      },
      google: {
        clientId: env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: env.GOOGLE_CLIENT_SECRET ?? "",
      },
    },
    plugins: [openAPI()],
  });
};
