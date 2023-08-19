import z from "zod";

const cellarsScheme = z.object({
	name: z.string({
		invalid_type_error: "'name' title must be a string for create cellar.",
		required_error: "'name' title is required for create cellar.",
	}),
	userId: z
		.string({
			invalid_type_error:
				"'userId' title must be a string for create cellar.",
			required_error: "'userId' title is required for create cellar.",
		})
		.uuid(),
});

export const validateCellars = (obj) => cellarsScheme.safeParse(obj);
