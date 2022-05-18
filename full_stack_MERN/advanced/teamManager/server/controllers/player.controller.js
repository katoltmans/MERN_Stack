const Player = require("../models/player.model");

// method to create a player
module.exports.createPlayer = (req, res) => {
    console.log(req.body);
    Player.create(req.body)
        .then((newPlayer) => {
            console.log("created new player:", newPlayer);
            res.status(201).json(newPlayer);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Uh oh... unable to create a player (server)",
                error: err,
            });
        });
};

// method to find all players
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then((allPlayers) => {
            res.json(allPlayers);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Uh oh... unable to find any players (server)",
                error: err,
            });
        });
};

// method to find one player not needed -

// method to update a player
module.exports.updatePlayer = (req, res) => {
    Player.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedPlayer) => {
            res.status(202).json(updatedPlayer);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Uh oh... unable to update this player (server)",
                error: err,
            });
        });
};

// method to delete a player
module.exports.deletePlayer = (req, res) => {
    Player.findByIdAndDelete(req.params._id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Oh no... unable to delete this player...",
                error: err,
            });
        });
};
