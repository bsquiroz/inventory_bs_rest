import { createProduct, getAllProducts } from "./products-services.js";

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
		const newProduct = req.body;
		const data = await createProduct({ productObj: newProduct });
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({
			error: error.message,
		});
	}
};
