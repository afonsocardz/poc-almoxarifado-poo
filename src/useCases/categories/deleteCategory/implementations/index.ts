import { DeleteCategoryRepository } from "../../../../repositories/categories/implementations/DeleteCategoryRepository";
import { DeleteCategoryController } from "./deleteCategoryController";
import { DeleteCategoryService } from "./deleteCategoryService";

const deleteCategoryRepository = new DeleteCategoryRepository();
const deleteCategoryService = new DeleteCategoryService(
  deleteCategoryRepository
);
export const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryService
);
