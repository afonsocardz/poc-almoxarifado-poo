import { Request, Response } from "express";
import { AbstractCreateCategoryService } from "./AbstractCreateCategoryService";

export abstract class AbstractCreateCategoryController {
  constructor(protected createCategoryService: AbstractCreateCategoryService) {}
  abstract create(req: Request, res: Response): Response;
}
