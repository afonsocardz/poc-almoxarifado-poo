import { Category } from "@prisma/client";
import { AbstractUpdateCategoryRepository } from "../../../repositories/categories/AbstractUpdateCategoryRepository";

export abstract class AbstractUpdateCategoryService {
  constructor(
    protected updateCategoryRepository: AbstractUpdateCategoryRepository
  ) {}
  abstract update(params: Partial<Category>, id: number): Promise<void>;
}
