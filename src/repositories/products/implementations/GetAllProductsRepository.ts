import { Product } from "@prisma/client";
import prisma from "../../../config/database";
import { AbstractGetAllCategoriesRepository } from "../AbstractGetAllProductsRepository";

export class GetAllCategoriesRepository extends AbstractGetAllCategoriesRepository {
  constructor() {
    super();
  }
  async getAll(): Promise<Product[]> {
    return await prisma.product.findMany({});
  }
}
