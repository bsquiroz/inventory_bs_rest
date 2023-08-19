import z from "zod";

const inventoriesScheme = z.object({
	count: z
		.number({
			invalid_type_error:
				"'count' must be a number for create inventory.",
			required_error: "'count' is required for create inventory.",
		})
		.positive(),
	productId: z
		.string({
			invalid_type_error:
				"'productId'  must be a string for create inventory.",
			required_error: "'productId'  is required for create inventory.",
		})
		.uuid(),
	cellarId: z
		.string({
			invalid_type_error:
				"'cellarId'  must be a string for create inventory.",
			required_error: "'cellarId'  is required for create inventory.",
		})
		.uuid(),
});

const inventoriesSchemeUpdate = z.object({
	count: z
		.number({
			invalid_type_error:
				"'count' must be a number for create inventory.",
			required_error: "'count' is required for create inventory.",
		})
		.positive(),
	productId: z
		.string({
			invalid_type_error:
				"'productId'  must be a string for create inventory.",
			required_error: "'productId'  is required for create inventory.",
		})
		.uuid(),
	cellarIdOrigin: z
		.string({
			invalid_type_error:
				"'cellarIdOrigin'  must be a string for create inventory.",
			required_error:
				"'cellarIdOrigin'  is required for create inventory.",
		})
		.uuid(),
	cellarIdDestiny: z
		.string({
			invalid_type_error:
				"'cellarIdDestiny'  must be a string for create inventory.",
			required_error:
				"'cellarIdDestiny'  is required for create inventory.",
		})
		.uuid(),
});

export const validateInventories = (obj) => inventoriesScheme.safeParse(obj);
export const validateUpdateInventories = (obj) =>
	inventoriesSchemeUpdate.safeParse(obj);
