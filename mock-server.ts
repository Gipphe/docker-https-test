import express from "express";
import * as fs from "fs";
import bodyParser from "body-parser";
import * as https from "https";

const KEY_PATH = process.env["KEY_PATH"];
const CRT_PATH = process.env["CRT_PATH"];

if (!KEY_PATH || !CRT_PATH) {
  console.error("Missing required env var KEY_PATH or CRT_PATH");
  process.exit(1);
}

const app = express()
  .use(bodyParser.json())
  .get("/api", (_req, res) => {
    res.send("OK");
  });

https
  .createServer(
    {
      key: fs.readFileSync(KEY_PATH),
      cert: fs.readFileSync(CRT_PATH),
    },
    app
  )
  .listen(443);
