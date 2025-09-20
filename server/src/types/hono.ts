import { Hono } from "hono";

export class CustomHono extends Hono<{
  Bindings: CloudflareBindings;
}> {}
