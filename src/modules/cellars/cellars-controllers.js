import { createCellar, getAllCellars } from "./cellars-services.js";
import { validateCellars } from "../../schemes/cellars-scheme.js";

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
		const result = validateCellars(req.body);

		if (result.error)
			return res.status(400).json({
				error: JSON.parse(result.error.message),
			});

		const data = await createCellar({ cellarObj: result.data });
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};
