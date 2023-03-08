import prisma from "../../../config/database";
import { Category } from "../../../models/Category";
import { AbstractCreateCategoryRepository } from "../AbstractCreateCategoryRepository";

export class CreateCategotyRepository extends AbstractCreateCategoryRepository {
  constructor() {
    super();
  }

  async create({ name }: Category): Promise<void> {
    await prisma.category.create({
      data: {
        name,
      },
    });
  }
}
