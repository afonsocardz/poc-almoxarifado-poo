import { Request, Response } from "express";
import { AbstractDeleteProductService } from "./AbstractDeleteProductService";

export abstract class AbstractDeleteProductController {
  constructor(protected deleteProductService: AbstractDeleteProductService) {}
  abstract delete(req: Request, res: Response): Response;
}
