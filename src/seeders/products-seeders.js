import { Products } from "../models/products-model.js";

const data = [
	{
		id: "f5735c05-46d1-4019-bc17-677f247bc535",
		name: "poducto 1",
		description: "Este es el mejor producto 1",
		state: true,
	},
	{
		id: "c3e7b90c-e571-4150-825a-8d2e769dda9b",
		name: "poducto 2",
		description: "Este es el mejor producto 2",
		state: true,
	},
	{
		id: "0c47e44b-ba8e-4655-9b36-e61718d61658",
		name: "poducto 3",
		description: "Este es el mejor producto 3",
		state: true,
	},
	{
		id: "b0472a4c-85c3-41ae-b145-9d788b35e2b6",
		name: "poducto 4",
		description: "Este es el mejor producto 4",
		state: true,
	},
	{
		id: "9f92b389-1b00-4447-a35b-ad8d660f8a2e",
		name: "poducto 5",
		description: "Este es el mejor producto 5",
		state: true,
	},
	{
		id: "43a526a3-85c4-4120-b45f-750a327a83dd",
		name: "poducto 6",
		description: "Este es el mejor producto 6",
		state: true,
	},
	{
		id: "d30e478a-6ebb-4186-ba05-3aaa531cfb97",
		name: "poducto 7",
		description: "Este es el mejor producto 7",
		state: true,
	},
	{
		id: "4423f31e-912b-4358-aca9-f0510088b98d",
		name: "poducto 8",
		description: "Este es el mejor producto 8",
		state: true,
	},
];

export const generateProductsSeed = async () => await Products.bulkCreate(data);
