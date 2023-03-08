import { Product } from "@prisma/client";

export abstract class AbstractGetAllCategoriesRepository {
  abstract getAll(): Promise<Product[]>;
}
