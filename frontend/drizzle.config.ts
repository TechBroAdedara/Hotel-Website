import { defineConfig } from "drizzle-kit";

const isTurso = process.env.DATABASE_URL?.startsWith("libsql://");

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dialect: isTurso ? "turso" : "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL || "file:./data/hotel.db",
    authToken: isTurso ? process.env.DATABASE_AUTH_TOKEN : undefined,
  },
});
