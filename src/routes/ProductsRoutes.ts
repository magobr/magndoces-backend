import express  from "express";

import { ProductController } from "../controller/ProductController";

const ProductsRoutes = express.Router();

const Product = new ProductController;

ProductsRoutes.post("/", Product.store)

export {ProductsRoutes};