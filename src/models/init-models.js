import { Cellars } from "./cellars-model.js";
import { Histories } from "./histories-model.js";
import { Inventories } from "./inventories-model.js";
import { Products } from "./products-model.js";
import { Users } from "./users-model.js";

export const initModels = () => {
	// * User - Cellar 1 - M
	Users.hasMany(Cellars);
	Cellars.belongsTo(Users);

	// * Product - Inventary 1 - M
	Products.hasMany(Inventories);
	Inventories.belongsTo(Products);

	// * Cellar - Inventary 1 - M
	Cellars.hasMany(Inventories);
	Inventories.belongsTo(Cellars);

	// * Inventary - History 1 - M
	Inventories.hasMany(Histories);
	Histories.belongsTo(Inventories);

	// * Cellar - History 1 - M
	Cellars.hasMany(Histories);

	Histories.belongsTo(Cellars, {
		foreignKey: "cellarId",
		as: "cellarOriginId",
	});

	Histories.belongsTo(Cellars, {
		foreignKey: "cellarId2",
		as: "cellarDestinyId",
	});
};
