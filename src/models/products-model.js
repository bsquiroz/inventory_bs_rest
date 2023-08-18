import { DataTypes } from "sequelize";
import { db } from "../utils/db.js";

export const Products = db.define("products", {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	state: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
	},
});
