import { Category } from "@prisma/client";
import { AbstractGetAllCategoriesRepository } from "../../../../repositories/categories/AbstractGetAllCategoriesRepository";
import { AbstractGetAllCategoriesService } from "../AbstractGetAllCategoryService";

export class GetAllCategoriesService extends AbstractGetAllCategoriesService {
  constructor(getAllCategoriesRepository: AbstractGetAllCategoriesRepository){
    super(getAllCategoriesRepository)
  }

  async getAll(): Promise<Category[]> {
    return await this.getAllCategoryRepository.getAll()
  }
}