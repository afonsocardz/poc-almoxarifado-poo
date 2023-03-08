import { Router } from "express";
import { createCategory, deleteCategory, getAllCategory, updateCategory } from "./index.routes";

const categoryRouter = Router();

categoryRouter
  .post("/", createCategory)
  .get("/", getAllCategory)
  .delete("/:id", deleteCategory)
  .put("/:id", updateCategory);

export default categoryRouter;
