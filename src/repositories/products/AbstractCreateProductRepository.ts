import { Product } from "../../models/Product";

export abstract class AbstractCreateProductRepository {
  constructor(){}
  abstract create({ name, categoryId, quantity }: Product): Promise<void>;
}
