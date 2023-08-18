import { Sequelize } from "sequelize";

import { Products } from "../../models/products-model.js";
import { Inventories } from "../../models/inventories-model.js";
import { Cellars } from "../../models/cellars-model.js";
import { v4 as uuid } from "uuid";

export const getAllProducts = async () => {
	const data = await Products.findAll({
		attributes: [
			"id",
			"name",
			"description",
			[
				Sequelize.fn("SUM", Sequelize.col("inventories.count")),
				"countTotal",
			],
		],
		include: [
			{
				model: Inventories,
				attributes: [],
			},
		],
		group: ["products.id"],
		order: [["countTotal", "DESC"]],
	});

	return data;
};

export const createProduct = async ({ productObj, countProduct, cellarId }) => {
	const newProduct = {
		id: uuid(),
		name: productObj.name,
		description: productObj.description,
	};

	const dataProduct = await Products(newProduct);

	const count = countProduct || 1;
	const cellar = cellarId || "5106b1d5-d25c-4dbe-9965-cabddf87e0f6";

	const newInventory = {
		id: uuid(),
		count: count,
		productId: dataProduct.id,
		cellarId: cellar.id,
		state: true,
	};

	const dataInventory = await Inventories(newInventory);

	return { product: dataProduct, inventory: dataInventory };
};
