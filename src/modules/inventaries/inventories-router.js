import { Router } from "express";
import { postInventory } from "./inventories-controllers.js";

export const routerInventories = Router();

routerInventories.post("/", postInventory);
