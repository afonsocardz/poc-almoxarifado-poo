import { Category } from "@prisma/client";
import { AbstractUpdateCategoryRepository } from "../../../../repositories/categories/AbstractUpdateCategoryRepository";
import { AbstractUpdateCategoryService } from "../AbstractUpdateCategoryService";

export class UpdateCategoryService extends AbstractUpdateCategoryService {
  constructor(updateCategoryRepository: AbstractUpdateCategoryRepository) {
    super(updateCategoryRepository);
  }

  async update(params: Partial<Category>, id: number): Promise<void> {
    this.updateCategoryRepository.update(params, id);
  }
}
