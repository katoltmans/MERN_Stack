const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Product must have a title!"],
            maxlength: [
                50,
                "Product names longer than 50 characters are too cumbersome!",
            ],
            unique: true,
        },
        price: {
            type: Number,
            required: [
                true,
                "Products require prices in order to turn a profit!",
            ],
        },
        description: {
            type: String,
            required: [
                true,
                "How would you describe this product? - Description required",
            ],
            maxlength: [
                200,
                "While we require a description, please keep it to 200 characters max!",
            ],
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
