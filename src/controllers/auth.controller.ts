import AuthServerController from "../services/auth.service.js";
import type { Request, Response } from "express";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

const authService = new AuthServerController();

export const serviceDiscovery = async (req: Request, res: Response) => {
  const PORT = process.env.PORT;
  if (!PORT) {
    throw ApiError.notFound("PORT not found");
  }
  const baseUrl = `http://localhost:${PORT}`;
  const data = await authService.authServiceDiscovery(baseUrl);
  return ApiResponse.OK({
    res,
    message: "Service Discovery Fetched",
    data,
  });
};
