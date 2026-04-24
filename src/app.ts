import express from "express";
import type { Application } from "express";
import path from "node:path";
import authRoute from "./routes/auth.route.js";

export function createApp(): Application {
  const app = express();

  // middlewares
  app.use(express.json());
  app.use(express.static(path.resolve("public")));

  // routes
  app.get("/", (req, res) => {
    res.json({ message: "Hello from Auth Server" });
  });

  app.get("/health", (req, res) => {
    res.json({ message: "Server is healthy", healthy: true });
  });

  app.use("/api/v1/auth", authRoute);

  // error handler middleware

  return app;
}
