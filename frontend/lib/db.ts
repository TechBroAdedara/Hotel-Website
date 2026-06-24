import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";
import path from "path";

const dbPath =
  process.env.DATABASE_PATH ||
  path.join(process.cwd(), "data", "hotel.db");

const client = createClient({
  url: `file:${dbPath}`,
});

export const db = drizzle(client, { schema });