import { Category } from "@prisma/client";

export abstract class AbstractDeleteCategoryRepository {
  constructor() {}
  abstract delete(id: number): Promise<void>;
}
