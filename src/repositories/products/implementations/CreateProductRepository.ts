import prisma from "../../../config/database";
import { Product } from "../../../models/Product";
import { AbstractCreateProductRepository } from "../AbstractCreateProductRepository";

export class CreateProductRepository extends AbstractCreateProductRepository {
  constructor() {
    super();
  }

  async create({ name, categoryId, quantity }: Product): Promise<void> {
    await prisma.product.create({
      data: {
        name,
        categoryId,
        quantity,
      },
    });
  }
}
