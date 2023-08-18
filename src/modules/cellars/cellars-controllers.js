import { createCellar, getAllCellars } from "./cellars-services.js";

export const getCellers = async (req, res) => {
	try {
		const data = await getAllCellars();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

export const postCeller = async (req, res) => {
	try {
		const newUser = req.body;

		const data = await createCellar({ cellarObj: newUser });
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};
