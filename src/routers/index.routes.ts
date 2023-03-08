import { Router } from "express";
import categoryRouter from "./category/category.routes";

const router = Router();

router.use("/products", categoryRouter);

export default router;