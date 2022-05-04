const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/jokes", {
        //gets rid of deprecation messages
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database"))
    .catch((err) =>
        console.log(
            "Oops! Something went wrong with the database connection.",
            err
        )
    );
