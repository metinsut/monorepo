CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"email_verified" date,
	"password" text,
	"role" text DEFAULT 'customer',
	"created_at" timestamp,
	"updated_at" timestamp
);
