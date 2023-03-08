import { Request, Response } from "express";
import { AbstractCreateProductService } from "./AbstractCreateProductService";

export abstract class AbstractCreateProductController {
  constructor(protected createProductService: AbstractCreateProductService) {}
  abstract create(req: Request, res: Response): Response;
}
