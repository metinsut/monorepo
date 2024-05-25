import { Hono } from "hono";

const middleWare = new Hono();

middleWare.use(async (c, next) => {
  console.log(`middleWare [${c.req.method}] ${c.req.url}`);
  await next();
});

export { middleWare };
