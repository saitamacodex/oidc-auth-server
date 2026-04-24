import express from "express";
import type { Router } from "express";
import { publickey, serviceDiscovery } from "../controllers/auth.controller.js";

const router: Router = express.Router();

// OIDC Discovery Endpoint
router.get("/.well-known/openid-configuration", serviceDiscovery);
router.get("/o/certs/jwks.json", publickey);

export default router;
