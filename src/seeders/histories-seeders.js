import { Histories } from "../models/histories-model.js";

const data = [
	{
		id: "9866c690-8885-4f73-b648-c347f73407fb",
		count: 5,
		inventoryId: "47180e06-6c2c-40ca-9f13-0dab33b7587c",
		cellarId: "5106b1d5-d25c-4dbe-9965-cabddf87e0f6",
		cellarId2: "9ed56e50-40e6-4c88-93ea-09119d951fb7",
		state: true,
	},
	{
		id: "df69c145-6cb3-4437-b51c-621772859311",
		count: 3,
		inventoryId: "df005eb9-23f5-4656-82d6-21c7278a6e8c",
		cellarId: "89d524c1-1871-4acd-aa51-76a3279ab1c5",
		cellarId2: "8e5269c5-1714-4623-98ee-939e589bc053",
		state: true,
	},
	{
		id: "47162b50-05e1-4e2e-999c-d55d544d08e4",
		count: 6,
		inventoryId: "11a555a0-c465-4ae4-8ecb-37d7555db9f1",
		cellarId: "5fa29a98-28ec-42a6-a33c-804190631af3",
		cellarId2: "a63dc8e3-2695-4af8-ab22-d0bcacce3af8",
		state: true,
	},
	{
		id: "4c3f0f93-079e-4b18-b4b8-5e5ab351c2d5",
		count: 4,
		inventoryId: "5ab938b4-795b-4698-a7c4-7914d191d1c1",
		cellarId: "9032a571-c0bf-49f7-9c4c-4bfa26f907be",
		cellarId2: "40eed4fd-9f90-45b8-ab77-e1b7ba61a45d",
		state: true,
	},
	{
		id: "9af5c1e8-196a-4926-8b68-2fa380b03ecd",
		count: 9,
		inventoryId: "b679f11c-202c-40fd-b8dc-e46028b4b0db",
		cellarId: "5106b1d5-d25c-4dbe-9965-cabddf87e0f6",
		cellarId2: "9ed56e50-40e6-4c88-93ea-09119d951fb7",
		state: true,
	},
	{
		id: "5379bd6a-ad34-4e33-8090-ac3175e04df9",
		count: 8,
		inventoryId: "0daf1201-9d6b-4c4c-b37d-3f43ca1668df",
		cellarId: "89d524c1-1871-4acd-aa51-76a3279ab1c5",
		cellarId2: "8e5269c5-1714-4623-98ee-939e589bc053",
		state: true,
	},
	{
		id: "a0b1494b-c96b-4dc0-82c7-c17ac8c569b0",
		count: 4,
		inventoryId: "6eecd447-cfcd-40fe-bd3b-f803efdfb14e",
		cellarId: "5fa29a98-28ec-42a6-a33c-804190631af3",
		cellarId2: "a63dc8e3-2695-4af8-ab22-d0bcacce3af8",
		state: true,
	},
	{
		id: "437aa34f-dbce-41b7-bb57-8e525e09a3db",
		count: 5,
		inventoryId: "c6adeb7b-3315-47d9-a4bf-1e64878a5bd4",
		cellarId: "9032a571-c0bf-49f7-9c4c-4bfa26f907be",
		cellarId2: "40eed4fd-9f90-45b8-ab77-e1b7ba61a45d",
		state: true,
	},
];

export const generateHistoriesSeed = async () =>
	await Histories.bulkCreate(data);
