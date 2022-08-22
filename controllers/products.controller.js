const Product = require("../models/products.model");

// Create and Save a new Product
async function addProduct(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const product = await Product.create(req.body);
  res.json({
    message: "Product added successfully",
    data: product,
  });
}

// Retrieve all Products from the database.

async function Deleteproduct(req, res) {
  await products = await Product.find({});
  oiuyt
  res.json({
    message: "Products retrieved successfully",
    count: products.length,
    data: products,
  });
}

// Find a single Product with an id

// Update a Product by the id in the request

// Delete a Product with the specified id in the request\][p]

module.exports = {
  addProduct,
  getAllProducts,
  getprodutById,
  Deleteproduct,
};

