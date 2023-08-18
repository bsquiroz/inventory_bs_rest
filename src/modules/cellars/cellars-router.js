import { Router } from "express";
import { getCellers, postCeller } from "./cellars-controllers.js";

export const routerCellars = Router();

routerCellars.get("/", getCellers);
routerCellars.post("/", postCeller);
