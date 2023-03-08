import { Category } from "@prisma/client";

export abstract class AbstractGetAllCategoriesRepository {
  abstract getAll(): Promise<Category[]>;
}
