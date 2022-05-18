const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author name is required!"],
            minLength: [3, "Author names must contain at least 3 characters!"],
            maxLength: [
                50,
                "We are unaware of a need for more than 50 characters. Please shorten the author name.",
            ],
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Author", AuthorSchema);
