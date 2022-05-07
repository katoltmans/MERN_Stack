const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/pmProducts", {
        // get rid of deprecation messages
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to pmProducts database"))
    .catch((err) =>
        console.log(
            "Uh oh! Looks like there is trouble with the database connection.",
            err
        )
    );
