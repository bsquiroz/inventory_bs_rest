import { createInventories, moveInventory } from "./inventories-services.js";

export const postInventory = async (req, res) => {
	try {
		const inventoryObj = req.body;

		const data = await createInventories({ inventoryObj });

		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

export const updateInventory = async (req, res) => {
	try {
		const inventoryObj = req.body;
		const data = await moveInventory({ inventoryObj });
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};