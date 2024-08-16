import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./server/db/schema.ts",
  out: "./server/db/migrations",
  driver: "d1",
  dbCredentials: {
    wranglerConfigPath: "wrangler.toml",
    dbName: "WEBBBILO_FRONT_DB",
  },
})
