import { IProductDTO } from "./dtos/products.dto";
import { Product } from "./product.model";
import { IProduct } from "./products.interface";

export class ProductsService {
  static async getProducts(): Promise<IProduct[]> {
    const products = await Product.find({}).lean().exec();

    return products;
  }

  static async addProducts(product: IProductDTO): Promise<IProduct> {
    const newProduct = await Product.create(product);

    return newProduct;
  }
}
