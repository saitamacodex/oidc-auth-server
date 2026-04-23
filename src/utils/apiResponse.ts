class ApiError extends Error {
  public statusCode: number;
  public error?: unknown; // ? represent optional

  constructor(statusCode: number, message: string, error?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
  }

  public static badRequest(message = "Bad Request", error?: unknown) {
    return new ApiError(400, message, error);
  }

  public static unauthorized(message = "Unauthorized") {
    return new ApiError(401, message);
  }

  public static notFound(message = "Not Found") {
    return new ApiError(404, message);
  }

  public static conflict(message = "Conflict") {
    return new ApiError(409, message);
  }

  public static forbidden(message = "Forbidden") {
    return new ApiError(403, message);
  }

  public static internalServerError(
    message = "Internal Server error",
    error?: unknown,
  ) {
    return new ApiError(500, message, error);
  }
}

export default ApiError;
