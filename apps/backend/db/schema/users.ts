import { serial, text, timestamp, pgTable, date } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

enum Role {
  admin = "admin",
  manager = "manager",
  customer = "customer",
  company = "company",
}

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  emailVerified: date("email_verified"),
  password: text("password"),
  role: text("role").$type<Role>().default(Role.customer),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const insertUserSchema = createInsertSchema(users);

export const selectUserSchema = createSelectSchema(users);
