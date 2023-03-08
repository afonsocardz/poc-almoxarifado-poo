import { Category } from "@prisma/client";
import { AbstractCreateCategoryRepository } from "../../../../repositories/categories/AbstractCreateCategoryRepository";
import { AbstractCreateCategoryService } from "../AbstractCreateCategoryService";

export class CreateCategoryService extends AbstractCreateCategoryService {
  constructor(createCategoryRepository: AbstractCreateCategoryRepository) {
    super(createCategoryRepository);
  }
  async create({ name }: Category): Promise<void> {
    await this.createCategoryRepository.create({ name });
  }
}
