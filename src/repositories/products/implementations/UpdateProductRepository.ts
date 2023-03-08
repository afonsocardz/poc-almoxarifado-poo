import { Product } from "@prisma/client";
import prisma from "../../../config/database";
import { AbstractUpdateProductRepository } from "../AbstractUpdateProductRepository";

export class UpdateProductRepository extends AbstractUpdateProductRepository {
  constructor() {
    super();
  }
  async update(params: Partial<Product>, id: number): Promise<void> {
    await prisma.product.update({
      where: {
        id,
      },
      data: params,
    });
  }
}
