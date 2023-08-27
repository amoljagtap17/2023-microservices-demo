import { NextFunction, Request, Response } from "express";
import { AbstractError } from "../globals/errors/abstract-error";
import { logger } from "../globals/logger";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AbstractError) {
    const errors = err.serializeErrors();

    // TODO: only save server errors to db logs
    errors.forEach((error) => {
      logger.error(
        `${err.statusCode} - ${error.message} - ${req.originalUrl} - ${req.method}`
      );
    });

    return res.status(err.statusCode).json({ errors });
  }

  logger.error(
    `500 - "Something went wrong" - ${req.originalUrl} - ${req.method}`
  );

  res.status(500).json({
    errors: [{ message: "Something went wrong" }],
  });
};
