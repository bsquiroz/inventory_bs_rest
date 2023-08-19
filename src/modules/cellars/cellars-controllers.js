import { createCellar, getAllCellars } from "./cellars-services.js";

export const getCellars = async (req, res) => {
	try {
		const data = await getAllCellars();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

export const postCellar = async (req, res) => {
	try {
		const newCellar = req.body;

		const data = await createCellar({ cellarObj: newCellar });
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};
