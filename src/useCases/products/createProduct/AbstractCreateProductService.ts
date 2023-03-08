import { Product } from "@prisma/client";
import { AbstractCreateProductRepository } from "../../../repositories/products/AbstractCreateProductRepository";

export abstract class AbstractCreateProductService {
  constructor(
    protected createProductRepository: AbstractCreateProductRepository
  ) {}
  abstract create({ name }: Product): Promise<void>;
}
