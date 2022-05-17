const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author name is required!"],
            minLength: [3, "Author names bust contain at least 3 characters!"],
            maxLength: [
                50,
                "We are unaware of a need for more than 50 characters. Please shorten the author name.",
            ],
            unique: true,
        },
    },
    {
        timestamp: true,
    }
);

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
