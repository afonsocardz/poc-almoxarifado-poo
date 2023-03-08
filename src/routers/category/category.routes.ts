import { Router } from "express";
import { createCategory, deleteCategory, getAllCategory } from "./index.routes";

const categoryRouter = Router();

categoryRouter
  .post("/", createCategory)
  .get("/", getAllCategory)
  .delete("/", deleteCategory);

export default categoryRouter;
