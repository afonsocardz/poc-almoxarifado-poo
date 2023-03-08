import { Category } from "../../models/Category";

export abstract class AbstractCreateCategoryRepository {
  abstract create({ name }: Category): Promise<void>;
}
