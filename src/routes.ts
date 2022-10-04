import express from "express";

import { ProductsRoutes } from "./routes/ProductsRoutes";

const Routes = express.Router();

Routes.use("/products", ProductsRoutes)

export { Routes }