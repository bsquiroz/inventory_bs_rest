import express from "express";
import cors from "cors";

import { config } from "../config.js";
import { db } from "./utils/db.js";
import { initModels } from "./models/init-models.js";

import { initSeeders } from "./seeders/initSeeders.js";

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

app.get("/api/v1/seeders", async (req, res) => {
	const response = await initSeeders();

	if (!response)
		return res.status(500).json({
			message: "vida perra, todo esta mal, mal",
		});

	res.status(200).json({
		message: "a dormir hp",
	});
});

app.listen(PORT, () => {
	console.log(`server listen on http://localhost:${PORT}`);
});
