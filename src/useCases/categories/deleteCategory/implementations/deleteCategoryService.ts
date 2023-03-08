import { Category } from "@prisma/client";
import { AbstractDeleteCategoryRepository } from "../../../../repositories/categories/AbstractDeleteCategoryRepository";
import { AbstractDeleteCategoryService } from "../AbstractDeleteCategoryService";

export class DeleteCategoryService extends AbstractDeleteCategoryService {
  constructor(deleteCategoryRepository: AbstractDeleteCategoryRepository) {
    super(deleteCategoryRepository);
  }
  async delete(id: number): Promise<void> {
    await this.deleteCategoryRepository.delete(id);
  }
}
