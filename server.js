import { createApp } from "https://servestjs.org/@v1.1.7/mod.ts";
import { calc } from "./calc1.js";

const main = (q) => {
  return calc(q) + "\r\n";
};

const app = createApp();

app.get(/\/*/, async (req) => {
  const q = req.url.lastIndexOf("?");
  if (q < 0) {
    return;
  }
  const s = req.url.substring(q + 1);
  const body = main(s);
  const headers = new Headers({
    "Content-Type" : "text/plain",
    "Access-Control-Allow-Origin": "*",
  });
  await req.respond({ status: 200, headers, body });
});

app.listen({ port: 3001 });
