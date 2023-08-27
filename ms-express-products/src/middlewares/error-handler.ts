import { NextFunction, Request, Response } from "express";
import { AbstractError } from "../globals/errors/abstract-error";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AbstractError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  res.status(400).json({
    errors: [{ message: "Something went wrong" }],
  });
};
