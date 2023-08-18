import { Cellars } from "./cellars-model.js";
import { Products } from "./products-model.js";

import { DataTypes } from "sequelize";
import { db } from "../utils/db.js";

export const Inventories = db.define("inventories", {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
	},
	count: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	productId: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			model: Products,
			key: "id",
		},
	},
	cellarId: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			model: Cellars,
			key: "id",
		},
	},
	state: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
	},
});
