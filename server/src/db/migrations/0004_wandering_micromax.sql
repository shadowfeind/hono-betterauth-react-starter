CREATE TYPE "public"."role" AS ENUM('admin', 'staff', 'user');--> statement-breakpoint
ALTER TABLE "test" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "test" DROP CONSTRAINT "test_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "role" DEFAULT 'user' NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD CONSTRAINT "test_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "test_user_id_uk" ON "test" USING btree ("user_id");