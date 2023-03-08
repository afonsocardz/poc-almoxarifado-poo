import { Request, Response } from "express";
import { AbstractDeleteProductController } from "../AbstractDeleteProductController";
import { AbstractDeleteProductService } from "../AbstractDeleteProductService";

export class DeleteProductController extends AbstractDeleteProductController {
  constructor(deleteProductService: AbstractDeleteProductService) {
    super(deleteProductService);
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    this.deleteProductService.delete(+id);
    
    return res.sendStatus(204);
  }
}
