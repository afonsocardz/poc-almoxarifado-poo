import { Category } from "@prisma/client";
import { Request, Response } from "express";
import { AbstractUpdateCategoryController } from "../AbstractUpdateCategoryController";
import { AbstractUpdateCategoryService } from "../AbstractUpdateCategoryService";

export class UpdateCategoryController extends AbstractUpdateCategoryController {
  constructor(updateCategoryService: AbstractUpdateCategoryService) {
    super(updateCategoryService);
  }
  update(req: Request, res: Response) {
    const params = req.body as Category;
    const { id } = req.params;

    this.updateCategoryService.update(params, +id);

    return res.sendStatus(200);
  }
}
