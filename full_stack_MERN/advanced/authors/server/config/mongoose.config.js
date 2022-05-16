const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/authors", {
        // get rid of deprecation messages
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to authors database"))
    .catch((err) =>
        console.log(
            "Uh oh! Looks like there is trouble with the authors database connection.",
            err
        )
    );
