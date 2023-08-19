import { Router } from "express";
import { postInventory, updateInventory } from "./inventories-controllers.js";

export const routerInventories = Router();

routerInventories.post("/", postInventory);
routerInventories.post("/move", updateInventory);
