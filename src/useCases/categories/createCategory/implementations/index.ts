import { CreateCategotyRepository } from "../../../../repositories/categories/implementations/CreateCategoryRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryService } from "./createCategoryService";

const createCategotyRepository = new CreateCategotyRepository();
const createCategoryService = new CreateCategoryService(
  createCategotyRepository
);
export const createCategoryController = new CreateCategoryController(
  createCategoryService
);
