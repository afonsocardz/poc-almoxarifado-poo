import { Request, Response } from "express";
import { AbstractDeleteCategoryController } from "../AbstractDeleteCategoryController";
import { AbstractDeleteCategoryService } from "../AbstractDeleteCategoryService";

export class DeleteCategoryController extends AbstractDeleteCategoryController {
  constructor(deleteCategoryService: AbstractDeleteCategoryService) {
    super(deleteCategoryService);
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    this.deleteCategoryService.delete(+id);
    
    return res.sendStatus(204);
  }
}
