import { Cellars } from "../../models/cellars-model.js";
import { v4 as uuid } from "uuid";

export const getAllCellars = async () => {
	const data = await Cellars.findAll({
		order: [["name", "ASC"]],
	});
	return data;
};

export const createCellar = async ({ cellarObj }) => {
	const newCellar = {
		id: uuid(),
		name: cellarObj.name,
		userId: cellarObj.userId,
		state: true,
	};

	const data = await Cellars.create(newCellar);

	return data;
};
