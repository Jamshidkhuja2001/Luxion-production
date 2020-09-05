const Product = require("./../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      status: "Success",
      products,
    });
  } catch (err) {
    console.error(err.message);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.send({
      status: "Success",
      product: newProduct,
    });
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send(null);
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteMany = async (req, res) => {
  await Product.deleteMany();
  res.send(null);
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedUser = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(updatedUser);
  } catch (err) {
    console.error(err.message);
  }
};
