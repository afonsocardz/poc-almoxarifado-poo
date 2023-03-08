import { Category } from "@prisma/client";
import prisma from "../../../config/database";
import { AbstractGetAllCategoriesRepository } from "../AbstractGetAllCategoriesRepository";

export class GetAllCategoriesRepository extends AbstractGetAllCategoriesRepository {
  constructor() {
    super();
  }
  async getAll(): Promise<Category[]> {
    return await prisma.category.findMany({});
  }
}
