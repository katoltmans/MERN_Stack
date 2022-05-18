const express = require("express");
const cors = require("cors");
require("./config/mongoose.config");
const app = express();
app.use(cors());
const port = 8000;

// parser to fix body issues
app.use(express.json(), express.urlencoded({ extended: true }));

// only accept origin from client
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

const AllPlayerRoutes = require("./routes/player.routes");
AllPlayerRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
