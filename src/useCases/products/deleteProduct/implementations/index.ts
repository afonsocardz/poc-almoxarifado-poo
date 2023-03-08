import { DeleteProductRepository } from "../../../../repositories/products/implementations/DeleteProductRepository";
import { DeleteProductController } from "./deleteProductController";
import { DeleteProductService } from "./deleteProductService";

const deleteProductRepository = new DeleteProductRepository();
const deleteProductService = new DeleteProductService(
  deleteProductRepository
);
export const deleteProductController = new DeleteProductController(
  deleteProductService
);
