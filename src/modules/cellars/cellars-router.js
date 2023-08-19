import { Router } from "express";
import { getCellars, postCellar } from "./cellars-controllers.js";

export const routerCellars = Router();

routerCellars.get("/", getCellars);
routerCellars.post("/", postCellar);
