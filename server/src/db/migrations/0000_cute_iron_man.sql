CREATE TABLE "test" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"active" boolean DEFAULT true
);
