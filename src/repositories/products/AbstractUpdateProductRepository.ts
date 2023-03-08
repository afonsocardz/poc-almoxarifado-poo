import { Product } from "@prisma/client";

export abstract class AbstractUpdateProductRepository {
  constructor() {}
  abstract update(params: Partial<Product>, id: number): Promise<void>;
}
