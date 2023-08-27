import express, { NextFunction, Request, Response } from "express";
// import { validationResult } from "express-validator";
import { validateRequest } from "../../middlewares/validate-request";
import { IProductDTO } from "./dtos/products.dto";
import { ProductsService } from "./products.service";
import { productsValidators } from "./validators/products.validators";

const productsController = express.Router({ caseSensitive: true });

/* productsController.get("/", async () => {
  res.send([]);
}); */

// Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware.
// Use router.route() to avoid duplicate route naming and thus typing errors.
productsController
  .route("/")
  .all((_req: Request, _res: Response, next: NextFunction) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(async (_req: Request, res: Response, _next: NextFunction) => {
    const products = await ProductsService.getProducts();

    res.json(products);
  })
  /* .put((_req: Request, _res: Response, next: NextFunction) => {
    next(new Error("not implemented"));
  }) */
  .post(
    productsValidators,
    validateRequest,
    async (req: Request, res: Response, _next: NextFunction) => {
      /* const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } */

      const body = req.body as IProductDTO;

      const newProduct = await ProductsService.addProducts(body);

      res.json(newProduct);
    }
  );
/* .delete((_req: Request, _res: Response, next: NextFunction) => {
    next(new Error("not implemented"));
  }); */

export { productsController };
