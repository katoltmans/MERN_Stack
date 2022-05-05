const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/platformExample", {
        // gets rid of deprecation messages
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to platformExample database"))
    .catch((err) =>
        console.log(
            "Uh Oh! Looks like something went wrong with the database connection.",
            err
        )
    );
