import { Hono } from "hono";
import { db } from "../../db";
import { users } from "../../db/schema";
// import { middleWare } from './middleWare';

const user = new Hono();

// user.route('*', middleWare);

user.get("/", async (c) => {
  console.log("user");
  const allUsers = await db.select().from(users);
  return c.json({
    users: allUsers,
  });
});

export { user };
