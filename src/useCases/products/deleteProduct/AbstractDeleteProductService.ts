import { Product } from "@prisma/client";
import { AbstractDeleteProductRepository } from "../../../repositories/products/AbstractDeleteProductRepository";

export abstract class AbstractDeleteProductService {
  constructor(
    protected deleteProductRepository: AbstractDeleteProductRepository
  ) {}
  abstract delete(id: number): Promise<void>;
}
