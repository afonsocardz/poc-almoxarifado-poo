import { Router } from "express";
import { createCategory, getAllCategory } from "./index.routes";

const categoryRouter = Router();

categoryRouter.post("/", createCategory).get("/", getAllCategory);

export default categoryRouter;
