const mongoose = require("mongoose");

const JokeSchema = new mongoose.schema(
    {
        setup: String,
        punchline: String,
    },
    {
        timestamp: true,
    }
);

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
