import { z } from "zod";

export const signInPayload = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export const signUpPayload = z.object({
  firstName: z.string().min(5).describe("Enter your first name"),
  lastName: z.string().nullable().optional(),
  email: z.email(),
  password: z.string().min(6),
});

export const adminRoutePayload = z.object({
  applicationName: z.string().describe("Enter you application name"),
  appUrl: z.url().describe("Enter your application url"),
  redirectUrl: z.url().describe("Enter you redirect url"),
});
