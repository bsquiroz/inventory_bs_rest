import { createInventories, moveInventory } from "./inventories-services.js";
import {
	validateInventories,
	validateUpdateInventories,
} from "../../schemes/inventories-scheme.js";

export const postInventory = async (req, res) => {
	try {
		const result = validateInventories(req.body);

		if (result.error)
			return res.status(400).json({
				error: JSON.parse(result.error.message),
			});

		const data = await createInventories({ inventoryObj: result.data });

		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

export const updateInventory = async (req, res) => {
	try {
		const result = validateUpdateInventories(req.body);

		if (result.error)
			return res.status(400).json({
				error: JSON.parse(result.error.message),
			});

		const data = await moveInventory({ inventoryObj: result.data });
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};
