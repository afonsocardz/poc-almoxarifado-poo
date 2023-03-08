import { Product } from "@prisma/client";

export abstract class AbstractDeleteProductRepository {
  constructor() {}
  abstract delete(id: number): Promise<void>;
}
