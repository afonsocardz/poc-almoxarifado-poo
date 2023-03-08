import { Category } from "@prisma/client";
import { AbstractDeleteCategoryRepository } from "../../../repositories/categories/AbstractDeleteCategoryRepository";

export abstract class AbstractDeleteCategoryService {
  constructor(
    protected deleteCategoryRepository: AbstractDeleteCategoryRepository
  ) {}
  abstract delete(id: number): Promise<void>;
}
