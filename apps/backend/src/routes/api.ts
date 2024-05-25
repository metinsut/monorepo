import { Hono } from "hono";
import { home } from "./home";
import { user } from "./user";

const api = new Hono();

api.route("/", home);
api.route("/user", user);

export { api };
