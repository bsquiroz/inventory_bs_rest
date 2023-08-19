import express from "express";
import cors from "cors";

import { config } from "../config.js";
import { db } from "./utils/db.js";
import { initModels } from "./models/init-models.js";

import { routerCellars } from "./modules/cellars/cellars-router.js";
import { routerProducts } from "./modules/products/products-router.js";
import { routerInventories } from "./modules/inventaries/inventories-router.js";
import { routerSeeders } from "./modules/seeders/seeders-router.js";

db.authenticate()
	.then(() => console.log("Database Authenticated!!!"))
	.catch((err) => console.log(err));

db.sync()
	.then(() => console.log("Database Synced!!!"))
	.catch((err) => console.log(err));

initModels();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = config.PORT;

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Welcome to api from bsquiroz /api/v1",
	});
});

app.use("/api/v1/cellars", routerCellars);
app.use("/api/v1/products", routerProducts);
app.use("/api/v1/inventories", routerInventories);
app.use("/api/v1/seeders", routerSeeders);

app.listen(PORT, () => {
	console.log(`server listen on http://localhost:${PORT}`);
});
