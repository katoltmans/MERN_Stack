const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/players", {
        // get rid of deprecation messages
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to players database"))
    .catch((err) =>
        console.log(
            "Uh oh! Looks like there is trouble with the players database connection.",
            err
        )
    );
