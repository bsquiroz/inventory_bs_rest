import { Router } from "express";
import { initSeeders } from "../../seeders/initSeeders.js";

export const routerSeeders = Router();

routerSeeders.get("/", async (req, res) => {
	const response = await initSeeders();

	if (!response)
		return res.status(500).json({
			message: "error trying insert seeders",
		});

	res.status(200).json({
		message: "successfully insert seeders!!!",
	});
});
