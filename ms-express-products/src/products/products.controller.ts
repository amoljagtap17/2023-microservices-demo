import express, { NextFunction, Request, Response } from "express";
import { ProductsService } from "./products.service";

const productsController = express.Router({ caseSensitive: true });

/* productsController.get("/", async (c) => {
  res.send([]);
}); */

// Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware.
// Use router.route() to avoid duplicate route naming and thus typing errors.
productsController
  .route("/")
  .all((req, res, next) => {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(async (_req: Request, res: Response, _next: NextFunction) => {
    const products = await ProductsService.getProducts();

    res.json(products);
  })
  .put((req: Request, res: Response, next: NextFunction) => {
    next(new Error("not implemented"));
  })
  .post(async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    const newProduct = await ProductsService.addProducts(body);

    res.json(newProduct);
  })
  .delete((req: Request, res: Response, next: NextFunction) => {
    next(new Error("not implemented"));
  });

export { productsController };
