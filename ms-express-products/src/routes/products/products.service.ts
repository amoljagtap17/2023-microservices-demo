import { IProductDTO } from "./dtos/products.dto";
import { IProduct } from "./products.interface";

export class ProductsService {
  static products: IProduct[] = [
    {
      id: 1,
      category: "shirts",
      name: "shirt1",
      price: 45,
    },
  ];

  static async getProducts(): Promise<IProduct[]> {
    return this.products;
  }

  static async addProducts(product: IProductDTO): Promise<IProduct> {
    const newProduct = { id: this.products.length + 1, ...product };

    this.products.push(newProduct);

    return newProduct;
  }
}
