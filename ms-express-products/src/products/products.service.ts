export class ProductsService {
  static products: any = [
    {
      id: 1,
      category: "shirts",
      name: "shirt1",
      price: 45,
    },
  ];

  static async getProducts() {
    return this.products;
  }

  static async addProducts(product: any) {
    this.products.push(product);

    return product;
  }
}
