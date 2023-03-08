import { Category } from "@prisma/client";
import prisma from "../../../config/database";
import { AbstractUpdateCategoryRepository } from "../AbstractUpdateCategoryRepository";

export class UpdateCategoryRepository extends AbstractUpdateCategoryRepository {
  constructor() {
    super();
  }
  async update(params: Partial<Category>, id: number): Promise<void> {
    await prisma.category.update({
      where: {
        id,
      },
      data: params,
    });
  }
}
