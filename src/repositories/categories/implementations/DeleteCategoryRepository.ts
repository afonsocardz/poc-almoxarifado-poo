import { Category } from "@prisma/client";
import prisma from "../../../config/database";
import { AbstractDeleteCategoryRepository } from "../AbstractDeleteCategoryRepository";

export class DeleteCategoryRepository extends AbstractDeleteCategoryRepository {
  constructor() {
    super();
  }

  async delete(id: number): Promise<void> {
    await prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
