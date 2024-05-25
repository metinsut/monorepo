import { Hono } from "hono";
import { api } from "./routes/api";

const app = new Hono();

app.route("/api", api);

app.onError((err, c) => {
  console.error(`Hono Error: ${err}`);
  return c.text("Custom Error Message", 500);
});

export default app;
