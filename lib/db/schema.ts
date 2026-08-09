import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  interest: text("interest"),
  plan: text("plan").notNull().default("standard"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})
