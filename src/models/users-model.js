import { DataTypes } from "sequelize";
import { db } from "../utils/db.js";

export const Users = db.define("users", {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	photo: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	state: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
	},
});
