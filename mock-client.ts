import fetch from "node-fetch";

const server = process.env["SERVER_HOSTNAME"];

if (!server) {
  console.error("Missing required env var SERVER_HOSTNAME");
  process.exit(1);
}

fetch(`https://${server}/api`)
  .then((res) => res.text())
  .then((body) => {
    console.log(`Received ${body}`);
  });
