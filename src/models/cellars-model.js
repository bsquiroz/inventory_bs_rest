import { Users } from "./users-model.js";

import { DataTypes } from "sequelize";
import { db } from "../utils/db.js";

export const Cellars = db.define("cellars", {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	userId: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			model: Users,
			key: "id",
		},
	},
	state: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
	},
});
