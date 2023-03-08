import { Request, Response } from "express";
import { AbstractDeleteCategoryService } from "./AbstractDeleteCategoryService";

export abstract class AbstractDeleteCategoryController {
  constructor(protected deleteCategoryService: AbstractDeleteCategoryService) {}
  abstract delete(req: Request, res: Response): Response;
}
