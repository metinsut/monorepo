import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
