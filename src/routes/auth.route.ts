import express from "express";
import type { Router } from "express";
import { serviceDiscovery } from "../controllers/auth.controller.js";

const router: Router = express.Router();

router.get("/.well-known/openid-configuration", serviceDiscovery);

export default router;
