const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteMany,
} = require("../controllers/productController");
const { create } = require("../models/productModel");

const router = express.Router();

router.route("/luxion").get(getAllProducts).post(createProduct);
router.route("/update/:id").patch(updateProduct);
router.route("/delete/:id").delete(deleteProduct);
router.route("/deletemany/").delete(deleteMany);

module.exports = router;
