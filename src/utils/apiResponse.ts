import type { Response } from "express";

interface ApiResponseUtil<T> {
  res: Response;
  message: string;
  data?: T | null;
}

class ApiResponse {
  private static send<T>(
    res: Response,
    statusCode: number,
    message: string,
    data: T | null,
  ) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  public static OK<T>({ res, message, data = null }: ApiResponseUtil<T>) {
    return this.send(res, 200, message, data);
  }

  public static created<T>(args: ApiResponseUtil<T>) {
    return this.send(args.res, 201, args.message, args.data ?? null);
  }
}

export default ApiResponse;
