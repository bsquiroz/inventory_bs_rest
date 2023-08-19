import { createProduct, getAllProducts } from "./products-services.js";
import { validateProducts } from "../../schemes/products-scheme.js";

export const getProducts = async (req, res) => {
	try {
		const data = await getAllProducts();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};

export const postProduct = async (req, res) => {
	try {
		const result = validateProducts(req.body);

		if (result.error)
			return res.status(400).json({
				error: JSON.parse(result.error.message),
			});

		const data = await createProduct({ productObj: result.data });
		res.status(201).json(data);
	} catch (error) {
		console.log();

		if (error.name === "SequelizeUniqueConstraintError")
			return res.status(500).json({
				error: "name must be unique",
			});

		res.status(500).json({
			error: error.message,
		});
	}
};
