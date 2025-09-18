import { Hono } from "hono";

type Bindings = {
  DATABASE_URL: string;
  AUTH_SECRET: string;
};

export class CustomHono extends Hono<{
  Bindings: Bindings;
}> {}
