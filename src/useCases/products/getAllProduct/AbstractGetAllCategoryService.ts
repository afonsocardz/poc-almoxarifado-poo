import { Category } from "@prisma/client";
import { AbstractGetAllCategoriesRepository } from "../../../repositories/categories/AbstractGetAllCategoriesRepository";

export abstract class AbstractGetAllCategoriesService {
  constructor(
    protected getAllCategoryRepository: AbstractGetAllCategoriesRepository
  ) {}
  abstract getAll(): Promise<Category[]>;
}
