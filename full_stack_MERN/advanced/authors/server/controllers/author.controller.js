const Author = require("../models/author.model");

//method to create an author
module.exports.createAuthor = (req, res) => {
    console.log(req.body);
    Author.create(req.body)
        .then((newAuthor) => {
            console.log("made a new author", newAuthor);
            return res.status(201).json(newAuthor);
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json(err);
        });
    // Author.create(req.body, {
    //     //runValidators: true,
    // })
    //     .then((newAuthor) => {
    //         console.log("good response");
    //         console.log(newAuthor);
    //         return res.status(201).json(newAuthor);
    //         console.log(newAuthor);
    //     })
    //     .catch((err) => {
    //         console.log("bad response");
    //         console.log("SERVER ERROR");
    //         console.log(err);
    //         res.status(400).json({
    //             message: "Oh no... unable to create this author...",
    //             error: err,
    //         });
    //     });
};

// method to find all authors
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors);
        })
        .catch((err) => {
            res.json({
                message: "Oh no... unable to find the authors...",
                error: err,
            });
        });
};

// method to locate one specific author
module.exports.findOneAuthor = (req, res) => {
    Author.findById(req.params)
        .then((oneAuthor) => {
            res.json(oneAuthor);
        })
        .catch((err) => {
            res.json({
                message: "Oh no... unable to locate this author...",
                error: err,
            });
        });
};

// method to update an author
module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedAuthor) => {
            res.status(202).json(updatedAuthor);
        })
        .catch((err) => {
            res.status(400).json({
                message: "On no... unable to update this author...",
                error: err,
            });
        });
};

// method to delete an author
module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params._id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Oh no... unable to delete this author...",
                error: err,
            });
        });
};
