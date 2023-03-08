export class Product {
  name: string;
  quantity: number;
  categoryId: number;

  constructor(name: string, quantity: number, categoryId: number) {
    this.name = name;
    this.quantity = quantity;
    this.categoryId = categoryId;
  }
}
