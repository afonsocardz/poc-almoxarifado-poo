import { CreateProductRepository } from "../../../../repositories/products/implementations/CreateProductRepository";
import { CreateProductController } from "./createProductController";
import { CreateProductService } from "./createProductService";

const createProductRepository = new CreateProductRepository();
const createProductService = new CreateProductService(
  createProductRepository
);
export const createProductController = new CreateProductController(
  createProductService
);
