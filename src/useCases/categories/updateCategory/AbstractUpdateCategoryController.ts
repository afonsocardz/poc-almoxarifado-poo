import { Request, Response } from "express";
import { AbstractUpdateCategoryService } from "./AbstractUpdateCategoryService";

export abstract class AbstractUpdateCategoryController {
  constructor(protected updateCategoryService: AbstractUpdateCategoryService) {}
  abstract update(req: Request, res: Response): Response;
}
