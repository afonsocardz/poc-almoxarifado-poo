import { Category } from "@prisma/client";

export abstract class AbstractUpdateCategoryRepository {
  constructor() {}
  abstract update(params: Partial<Category>, id: number): Promise<void>;
}
