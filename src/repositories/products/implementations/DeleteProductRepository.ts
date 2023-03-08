import prisma from "../../../config/database";
import { AbstractDeleteProductRepository } from "../AbstractDeleteProductRepository";

export class DeleteProductRepository extends AbstractDeleteProductRepository {
  constructor() {
    super();
  }

  async delete(id: number): Promise<void> {
    await prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
