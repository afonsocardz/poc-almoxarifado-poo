import { Product } from "@prisma/client";
import { AbstractCreateProductRepository } from "../../../../repositories/products/AbstractCreateProductRepository";
import { AbstractCreateProductService } from "../AbstractCreateProductService";

export class CreateProductService extends AbstractCreateProductService {
  constructor(createProductRepository: AbstractCreateProductRepository) {
    super(createProductRepository);
  }
  async create({ name, categoryId, quantity }: Product): Promise<void> {
    await this.createProductRepository.create({ name, categoryId, quantity });
  }
}
