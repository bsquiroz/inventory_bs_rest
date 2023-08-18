import { Users } from "../models/users-model.js";

const data = [
	{
		id: "1d24317e-5a63-4875-818b-6be0cf96aea7",
		name: "john doe",
		photo: "johndoePhoto.jpg",
		state: true,
	},
	{
		id: "27fe37ad-e1d1-4a65-8979-4bd0f41bf191",
		name: "julio plus",
		photo: "julioplusPhoto.jpg",
		state: true,
	},
	{
		id: "7222e526-1f09-492f-91c8-bdfb4cc157f4",
		name: "mario casas",
		photo: "mariocasasPhoto.jpg",
		state: true,
	},
	{
		id: "e8294ce7-59ad-4deb-b8d1-ab729397d23e",
		name: "pedro picapiedras",
		photo: "pedropicapiedrasPhoto.jpg",
		state: true,
	},
];

export const generateUsersSeed = async () => await Users.bulkCreate(data);
