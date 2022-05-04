const Joke = require("../models/jokes.model");

// function to get all jokes
module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch((err) => {
            res.json({
                message: "Uo oh... there seems to be an error...",
                error: err,
            });
        });
};

// function to get a single joke
module.exports.getOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((oneJoke) => {
            res.json({ joke: oneJoke });
        })
        .catch((err) => {
            res.json({
                message: "Uo oh... there seems to be an error...",
                error: err,
            });
        });
};

// function to create a joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newlyCreatedJoke) => {
            res.json({ joke: newlyCreatedJoke });
        })
        .catch((err) => {
            res.json({
                message: "Uo oh... there seems to be an error...",
                error: err,
            });
        });
};

// function to update a joke
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke) => {
            res.json({ joke: updatedJoke });
        })
        .catch((err) => {
            res.json({
                message: "Uo oh... there seems to be an error...",
                error: err,
            });
        });
};

//function to delete a joke
module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json({
                message: "Uo oh... there seems to be an error...",
                error: err,
            });
        });
};
