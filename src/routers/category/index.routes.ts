import { Request, Response } from "express";
import { createCategoryController } from "../../useCases/categories/createCategory/implementations";

export const createCategory = (req: Request, res: Response) => {
  createCategoryController.create(req, res);
};
