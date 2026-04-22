import http from "node:http";
import "dotenv/config";
import { createApp } from "./app.js";

function main() {
  try {
    // load expresss app
    const server = http.createServer(createApp());

    server.listen(process.env.PORT, () => {
      console.log(`Server running on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

main();
