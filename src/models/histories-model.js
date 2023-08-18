import { Cellars } from "./cellars-model.js";
import { Inventories } from "./inventories-model.js";

import { DataTypes } from "sequelize";
import { db } from "../utils/db.js";

export const Histories = db.define("histories", {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
	},
	count: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	inventoryId: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			model: Inventories,
			key: "id",
		},
	},
	cellarId: {
		type: DataTypes.UUID,
		primaryKey: true,
		allowNull: false,
		references: {
			model: Cellars,
			key: "id",
		},
	},
	cellarId2: {
		type: DataTypes.UUID,
		primaryKey: true,
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
