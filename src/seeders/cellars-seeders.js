import { Cellars } from "../models/cellars-model.js";

const data = [
	{
		id: "5106b1d5-d25c-4dbe-9965-cabddf87e0f6",
		name: "bodega A 1",
		userId: "1d24317e-5a63-4875-818b-6be0cf96aea7",
		state: true,
	},
	{
		id: "9ed56e50-40e6-4c88-93ea-09119d951fb7",
		name: "bodega A 2",
		userId: "27fe37ad-e1d1-4a65-8979-4bd0f41bf191",
		state: true,
	},
	{
		id: "89d524c1-1871-4acd-aa51-76a3279ab1c5",
		name: "bodega B 1",
		userId: "7222e526-1f09-492f-91c8-bdfb4cc157f4",
		state: true,
	},
	{
		id: "8e5269c5-1714-4623-98ee-939e589bc053",
		name: "bodega B 2",
		userId: "e8294ce7-59ad-4deb-b8d1-ab729397d23e",
		state: true,
	},
	{
		id: "5fa29a98-28ec-42a6-a33c-804190631af3",
		name: "bodega C 1",
		userId: "1d24317e-5a63-4875-818b-6be0cf96aea7",
		state: true,
	},
	{
		id: "a63dc8e3-2695-4af8-ab22-d0bcacce3af8",
		name: "bodega C 2",
		userId: "27fe37ad-e1d1-4a65-8979-4bd0f41bf191",
		state: true,
	},
	{
		id: "9032a571-c0bf-49f7-9c4c-4bfa26f907be",
		name: "bodega D 1",
		userId: "7222e526-1f09-492f-91c8-bdfb4cc157f4",
		state: true,
	},
	{
		id: "40eed4fd-9f90-45b8-ab77-e1b7ba61a45d",
		name: "bodega D 2",
		userId: "e8294ce7-59ad-4deb-b8d1-ab729397d23e",
		state: true,
	},
];

export const generateCellarsSeed = async () => await Cellars.bulkCreate(data);
