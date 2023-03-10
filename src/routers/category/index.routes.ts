import { Request, Response } from "express";
import { createCategoryController } from "../../useCases/categories/createCategory/implementations";
import { deleteCategoryController } from "../../useCases/categories/deleteCategory/implementations";
import { getAllCategoriesController } from "../../useCases/categories/getAllCategory/implementations";
import { updateCategoryController } from "../../useCases/categories/updateCategory/implementations";

export const createCategory = (req: Request, res: Response) => {
  createCategoryController.create(req, res);
};

export const getAllCategory = (req: Request, res: Response) => {
  getAllCategoriesController.getAll(req, res);
};

export const deleteCategory = (req: Request, res: Response) => {
  deleteCategoryController.delete(req, res);
};

export const updateCategory = (req: Request, res: Response) => {
  updateCategoryController.update(req, res);
};
