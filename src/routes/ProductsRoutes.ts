import express  from "express";

import { ProductController } from "../controller/ProductController";

const ProductsRoutes = express.Router();

const Product = new ProductController;

ProductsRoutes.post("/", Product.store);
ProductsRoutes.get("/", Product.find);
ProductsRoutes.get("/:id", Product.find);
ProductsRoutes.put("/:id", Product.update);
ProductsRoutes.delete("/:id", Product.delete);

export {ProductsRoutes};