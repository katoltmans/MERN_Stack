const Product = require("../models/product.model");

// function to create a product
module.exports.createProduct = (req, res) => {
    console.log(req.body);
    Product.create(req.body)
        .then((newProduct) => {
            res.status(201).json(newProduct);
            console.log(newProduct);
        })
        .catch((err) => {
            res.json({
                message:
                    "Uh oh... there seems to be an error with this product...",
                error: err,
            });
        });
};

// function to find all products
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json(allProducts);
        })
        .catch((err) => {
            res.json({
                message: "Uh oh... unable to find the products...",
                error: err,
            });
        });
};

// function to locate one specific product
module.exports.findOneProduct = (req, res) => {
    Product.findById(req.params)
        .then((oneProduct) => {
            res.json({ product: oneProduct });
        })
        .catch((err) => {
            res.json({
                message: "Uh oh... unable to find this product...",
                error: err,
            });
        });
};

// function to update a product
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProduct) => {
            res.json({ product: updatedProduct });
        })
        .catch((err) => {
            res.json({
                message: "Uh oh... unable to update this product...",
                error: err,
            });
        });
};

// function to delete a product
module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params._id)
        .then((result) => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json({
                message: "Uh oh... unable to delete this product...",
                error: err,
            });
        });
};
