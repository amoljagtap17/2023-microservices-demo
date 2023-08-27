import { body } from "express-validator";

export const productsValidators = [
  body("category").notEmpty().trim().withMessage("Category is required"),
  body("name").notEmpty().trim().withMessage("Name is required"),
  body("price").notEmpty().isNumeric().withMessage("Price is required"),
];
