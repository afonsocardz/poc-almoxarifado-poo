import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { AbstractCreateProductController } from "../AbstractCreateProductController";
import { AbstractCreateProductService } from "../AbstractCreateProductService";

export class CreateProductController extends AbstractCreateProductController {
  constructor(createProductService: AbstractCreateProductService) {
    super(createProductService);
  }
  create(req: Request, res: Response): Response {
    const params = req.body as Product;

    this.createProductService.create(params);
    return res.sendStatus(201);
  }
}
