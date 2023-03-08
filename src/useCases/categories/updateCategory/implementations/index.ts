import { UpdateCategoryRepository } from "../../../../repositories/categories/implementations/UpdateCategoryRepository";
import { UpdateCategoryController } from "./updateCategoryController";
import { UpdateCategoryService } from "./updateCategoryService";

const updateCategoryRepository = new UpdateCategoryRepository();
const updateCategoryService = new UpdateCategoryService(updateCategoryRepository);
export const updateCategoryController = new UpdateCategoryController(updateCategoryService);