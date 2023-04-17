import express from "express";
import { getProduct, editProduct } from "../controllers/Product.js";

const router = express.Router();

router.get("/product", getProduct);
router.post("/product/edit", editProduct);

export default router;
