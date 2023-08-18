import { Router } from "express";
import { getProducts, postProduct } from "./products-controllers.js";

export const routerProducts = Router();

routerProducts.get("/", getProducts);
routerProducts.post("/", postProduct);
