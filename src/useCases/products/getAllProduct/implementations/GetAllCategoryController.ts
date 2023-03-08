import { Request, Response } from "express";
import { AbstractGetAllCategoriesController } from "../AbstractGetAllCategoryController";
import { AbstractGetAllCategoriesService } from "../AbstractGetAllCategoryService";

export class GetAllCategoriesController extends AbstractGetAllCategoriesController {
  constructor(getAllCategoriesService: AbstractGetAllCategoriesService) {
    super(getAllCategoriesService);
  }
  async getAll(req: Request, res: Response): Promise<Response> {
    const categories = await this.getAllCategoriesService.getAll();
    return res.status(200).send(categories);
  }
}
