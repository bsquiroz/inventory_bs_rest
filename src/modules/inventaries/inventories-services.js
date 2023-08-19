import { Inventories } from "../../models/inventories-model.js";
import { Histories } from "../../models/histories-model.js";
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

export const moveInventory = async ({ inventoryObj }) => {
	const inventoryOriginFound = await Inventories.findOne({
		where: {
			cellarId: inventoryObj.cellarIdOrigin,
			productId: inventoryObj.productId,
		},
	});

	if (!inventoryOriginFound) return false;

	if (inventoryOriginFound.count - inventoryObj.count <= 0)
		return "Unsupported quantities to be moved";

	const inventoryDestinyFound = await Inventories.findOne({
		where: {
			cellarId: inventoryObj.cellarIdDestiny,
			productId: inventoryObj.productId,
		},
	});

	if (inventoryDestinyFound) {
		const origin = await inventoryOriginFound.update({
			count: inventoryOriginFound.count - inventoryObj.count,
		});

		const destiny = await inventoryDestinyFound.update({
			count: inventoryObj.count + inventoryDestinyFound.count,
		});

		const history = await Histories.create({
			id: uuid(),
			count: inventoryObj.count,
			inventoryId: inventoryOriginFound.id,
			cellarId: inventoryOriginFound.cellarId,
			cellarId2: inventoryDestinyFound.cellarId,
			state: true,
		});

		return {
			origin,
			destiny,
			history,
		};
	}

	const origin = await inventoryOriginFound.update({
		count: inventoryOriginFound.count - inventoryObj.count,
	});

	const destiny = await Inventories.create({
		id: uuid(),
		count: inventoryObj.count,
		productId: inventoryObj.productId,
		cellarId: inventoryObj.cellarIdDestiny,
		state: true,
	});

	const history = await Histories.create({
		id: uuid(),
		count: inventoryObj.count,
		inventoryId: inventoryOriginFound.id,
		cellarId: inventoryOriginFound.cellarId,
		cellarId2: destiny.cellarId,
		state: true,
	});

	return {
		origin,
		destiny,
		history,
	};
};
