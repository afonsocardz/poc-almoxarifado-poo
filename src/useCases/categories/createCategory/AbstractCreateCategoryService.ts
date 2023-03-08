import { Category } from "@prisma/client";
import { AbstractCreateCategoryRepository } from "../../../repositories/categories/AbstractCreateCategoryRepository";

export abstract class AbstractCreateCategoryService {
  constructor(
    protected createCategoryRepository: AbstractCreateCategoryRepository
  ) {}
  abstract create({ name }: Category): Promise<void>;
}
