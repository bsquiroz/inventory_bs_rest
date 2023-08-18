import { Inventories } from "../models/inventories-model.js";

const data = [
	{
		id: "47180e06-6c2c-40ca-9f13-0dab33b7587c",
		count: 12,
		productId: "f5735c05-46d1-4019-bc17-677f247bc535",
		cellarId: "5106b1d5-d25c-4dbe-9965-cabddf87e0f6",
		state: true,
	},
	{
		id: "8b1bb939-61ae-4f31-af8a-a10bedde22f8",
		count: 24,
		productId: "f5735c05-46d1-4019-bc17-677f247bc535",
		cellarId: "9ed56e50-40e6-4c88-93ea-09119d951fb7",
		state: true,
	},
	{
		id: "df005eb9-23f5-4656-82d6-21c7278a6e8c",
		count: 8,
		productId: "c3e7b90c-e571-4150-825a-8d2e769dda9b",
		cellarId: "89d524c1-1871-4acd-aa51-76a3279ab1c5",
		state: true,
	},
	{
		id: "68de4151-596f-4561-b2ed-8f92c11ea6dd",
		count: 16,
		productId: "c3e7b90c-e571-4150-825a-8d2e769dda9b",
		cellarId: "8e5269c5-1714-4623-98ee-939e589bc053",
		state: true,
	},
	{
		id: "11a555a0-c465-4ae4-8ecb-37d7555db9f1",
		count: 15,
		productId: "0c47e44b-ba8e-4655-9b36-e61718d61658",
		cellarId: "5fa29a98-28ec-42a6-a33c-804190631af3",
		state: true,
	},
	{
		id: "c86d340a-5994-4875-91a5-0c160c8acd7d",
		count: 30,
		productId: "0c47e44b-ba8e-4655-9b36-e61718d61658",
		cellarId: "a63dc8e3-2695-4af8-ab22-d0bcacce3af8",
		state: true,
	},
	{
		id: "5ab938b4-795b-4698-a7c4-7914d191d1c1",
		count: 10,
		productId: "b0472a4c-85c3-41ae-b145-9d788b35e2b6",
		cellarId: "9032a571-c0bf-49f7-9c4c-4bfa26f907be",
		state: true,
	},
	{
		id: "96b7dab8-ec23-4d6b-b76c-b1918d5eec9b",
		count: 20,
		productId: "b0472a4c-85c3-41ae-b145-9d788b35e2b6",
		cellarId: "40eed4fd-9f90-45b8-ab77-e1b7ba61a45d",
		state: true,
	},
	{
		id: "b679f11c-202c-40fd-b8dc-e46028b4b0db",
		count: 16,
		productId: "9f92b389-1b00-4447-a35b-ad8d660f8a2e",
		cellarId: "5106b1d5-d25c-4dbe-9965-cabddf87e0f6",
		state: true,
	},
	{
		id: "7dd71cc1-c282-46cc-92dc-9ea3b0be6e62",
		count: 32,
		productId: "9f92b389-1b00-4447-a35b-ad8d660f8a2e",
		cellarId: "9ed56e50-40e6-4c88-93ea-09119d951fb7",
		state: true,
	},
	{
		id: "0daf1201-9d6b-4c4c-b37d-3f43ca1668df",
		count: 7,
		productId: "43a526a3-85c4-4120-b45f-750a327a83dd",
		cellarId: "89d524c1-1871-4acd-aa51-76a3279ab1c5",
		state: true,
	},
	{
		id: "edf3ab77-7cc3-400c-a909-f5501ea1a002",
		count: 14,
		productId: "43a526a3-85c4-4120-b45f-750a327a83dd",
		cellarId: "8e5269c5-1714-4623-98ee-939e589bc053",
		state: true,
	},
	{
		id: "6eecd447-cfcd-40fe-bd3b-f803efdfb14e",
		count: 6,
		productId: "d30e478a-6ebb-4186-ba05-3aaa531cfb97",
		cellarId: "5fa29a98-28ec-42a6-a33c-804190631af3",
		state: true,
	},
	{
		id: "b1fa56d1-e90a-42d9-8a8d-95a22d918db3",
		count: 12,
		productId: "d30e478a-6ebb-4186-ba05-3aaa531cfb97",
		cellarId: "a63dc8e3-2695-4af8-ab22-d0bcacce3af8",
		state: true,
	},
	{
		id: "c6adeb7b-3315-47d9-a4bf-1e64878a5bd4",
		count: 4,
		productId: "4423f31e-912b-4358-aca9-f0510088b98d",
		cellarId: "9032a571-c0bf-49f7-9c4c-4bfa26f907be",
		state: true,
	},
	{
		id: "51864a83-c4f8-4f12-b1d9-6b0973179cdd",
		count: 8,
		productId: "4423f31e-912b-4358-aca9-f0510088b98d",
		cellarId: "40eed4fd-9f90-45b8-ab77-e1b7ba61a45d",
		state: true,
	},
];

export const generateInventoriesSeed = async () =>
	await Inventories.bulkCreate(data);
