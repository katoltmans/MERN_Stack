const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Player name is required!"],
            minlength: [2, "Player names must be at least 2 characters long."],
            unique: true,
        },
        position: {
            type: String,
            required: false,
            enum: [
                "pitcher",
                "catcher",
                "first baseman",
                "second baseman",
                "third baseman",
                "shortstop",
                "eft fielder",
                "center fielder",
                "right fielder",
            ],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Player", PlayerSchema);
