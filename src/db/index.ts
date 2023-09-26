import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

const client = createClient({
  authToken: Bun.env.DATABASE_AUTH_TOKEN,
  url: Bun.env.DATABASE_URL!,
});

export const db = drizzle(client, { logger: true, schema });
