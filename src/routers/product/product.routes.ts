import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, updateProduct } from "./index.routes";

const categoryRouter = Router();

categoryRouter
  .post("/", createProduct)
  .get("/", getAllProduct)
  .delete("/:id", deleteProduct)
  .put("/:id", updateProduct);

export default categoryRouter;
