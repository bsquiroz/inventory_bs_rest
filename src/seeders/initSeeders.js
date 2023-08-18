import { generateUsersSeed } from "./users-seeders.js";
import { generateProductsSeed } from "./products-seeders.js";
import { generateCellarsSeed } from "./cellars-seeders.js";
import { generateInventoriesSeed } from "./inventories-seeders.js";
import { generateHistoriesSeed } from "./histories-seeders.js";

export const initSeeders = async () => {
	try {
		await generateUsersSeed();
		await generateProductsSeed();
		await generateCellarsSeed();
		await generateInventoriesSeed();
		await generateHistoriesSeed();

		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};
