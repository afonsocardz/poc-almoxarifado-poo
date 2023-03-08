import { Request, Response } from "express";
import { AbstractGetAllCategoriesService } from "./AbstractGetAllCategoryService";

export abstract class AbstractGetAllCategoriesController {
  constructor(
    protected getAllCategoriesService: AbstractGetAllCategoriesService
  ) {}
  abstract getAll(req: Request, res: Response): Promise<Response>;
}
