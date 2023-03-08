import { GetAllCategoriesRepository } from "../../../../repositories/categories/implementations/GetAllCategoriesRepository";
import { GetAllCategoriesController } from "./GetAllCategoryController";
import { GetAllCategoriesService } from "./GetAllCategoryService";

const getAllCategoriesRepository = new GetAllCategoriesRepository();
const getAllCategoriesService = new GetAllCategoriesService(
  getAllCategoriesRepository
);
export const getAllCategoriesController = new GetAllCategoriesController(getAllCategoriesService);
