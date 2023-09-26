import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  driver: "turso",

  dbCredentials: {
    authToken: process.env.DATABASE_AUTH_TOKEN,
    url: process.env.DATABASE_URL!,
  },

  verbose: true,
  strict: true,
} satisfies Config;
