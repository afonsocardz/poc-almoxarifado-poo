import { Router } from "express";
import { createCategory } from "./index.routes";

const categoryRouter = Router();

categoryRouter.post("/", createCategory);

export default categoryRouter;
