import z from "zod";

const productsScheme = z.object({
	name: z.string({
		invalid_type_error:
			"'description'  must be a string for create product.",
		required_error: "'name'  is required for create product.",
	}),
	description: z.string({
		invalid_type_error:
			"'description'  must be a string for create product.",
		required_error: "'description'  is required for create product.",
	}),
});

export const validateProducts = (obj) => productsScheme.safeParse(obj);
