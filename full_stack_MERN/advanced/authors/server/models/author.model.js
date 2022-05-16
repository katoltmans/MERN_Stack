const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author name ,ust contain at least 3 characters!"],
            maxlength: [
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
