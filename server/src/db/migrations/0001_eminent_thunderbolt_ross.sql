ALTER TABLE "test" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD COLUMN "userId" text NOT NULL;--> statement-breakpoint
ALTER TABLE "test" ADD CONSTRAINT "test_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;