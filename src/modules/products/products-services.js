import { Sequelize } from "sequelize";

import { Products } from "../../models/products-model.js";
import { Inventories } from "../../models/inventories-model.js";
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

export const createProduct = async ({ productObj }) => {
	const newProduct = {
		id: uuid(),
		name: productObj.name,
		description: productObj.description,
	};
	return { message: "Estas creando un product", data: newProduct };
};
