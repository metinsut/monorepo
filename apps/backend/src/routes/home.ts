import { Hono } from "hono";

const home = new Hono();

home.get("/", (c) => {
  return c.json({ title: "Hello Hono" });
});

export { home };
