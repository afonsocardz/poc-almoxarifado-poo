import { Category } from "@prisma/client";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { AbstractCreateCategoryController } from "../AbstractCreateCategoryController";
import { AbstractCreateCategoryService } from "../AbstractCreateCategoryService";

export class CreateCategoryController extends AbstractCreateCategoryController {
  constructor(createCategoryService: AbstractCreateCategoryService) {
    super(createCategoryService);
  }
  create(req: Request, res: Response): Response {
    const params = req.body as Category;

    this.createCategoryService.create(params);
    return res.sendStatus(201);
  }
}
