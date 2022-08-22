const express = require("express");

const {
  addProduct,
  getAllProducts,
  getprodutById,Deleteproduct
} = require("../controllers/products.controller");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/add", addProduct);
router.get("/id", getprodutById);
router.delete("/:id", this.Deleteproduct);

module.exports = router;
