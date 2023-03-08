import { Request, Response } from "express";
import { createProductController } from "../../useCases/products/createProduct/implementations";
import { deleteProductController } from "../../useCases/products/deleteProduct/implementations";
import { getAllCategoriesController } from "../../useCases/products/getAllProduct/implementations";
import { updateProductController } from "../../useCases/products/updateProduct/implementations";

export const createProduct = (req: Request, res: Response) => {
  createProductController.create(req, res);
};

export const getAllProduct = (req: Request, res: Response) => {
  getAllCategoriesController.getAll(req, res);
};

export const deleteProduct = (req: Request, res: Response) => {
  deleteProductController.delete(req, res);
};

export const updateProduct = (req: Request, res: Response) => {
  updateProductController.update(req, res);
};
