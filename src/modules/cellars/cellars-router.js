import { Router } from "express";
import { getCellars, postCellar, getCellar } from "./cellars-controllers.js";

export const routerCellars = Router();

routerCellars.get("/", getCellars);
routerCellars.get("/:id", getCellar);
routerCellars.post("/", postCellar);
