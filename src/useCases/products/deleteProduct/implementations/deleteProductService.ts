import { Product } from "@prisma/client";
import { AbstractDeleteProductRepository } from "../../../../repositories/products/AbstractDeleteProductRepository";
import { AbstractDeleteProductService } from "../AbstractDeleteProductService";

export class DeleteProductService extends AbstractDeleteProductService {
  constructor(deleteProductRepository: AbstractDeleteProductRepository) {
    super(deleteProductRepository);
  }
  async delete(id: number): Promise<void> {
    await this.deleteProductRepository.delete(id);
  }
}
