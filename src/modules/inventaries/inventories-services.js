import { Inventories } from "../../models/inventories-model.js";
import { v4 as uuid } from "uuid";

export const createInventories = async ({ inventoryObj }) => {
	const foundInventory = await Inventories.findOne({
		where: {
			productId: inventoryObj.productId,
			cellarId: inventoryObj.cellarId,
		},
	});

	if (foundInventory) {
		const data = await foundInventory.update({
			count: foundInventory.count + inventoryObj.count,
		});

		return data;
	}

	const newInventory = {
		id: uuid(),
		count: inventoryObj.count,
		productId: inventoryObj.productId,
		cellarId: inventoryObj.cellarId,
		state: true,
	};

	const data = await Inventories.create(newInventory);

	return data;
};
