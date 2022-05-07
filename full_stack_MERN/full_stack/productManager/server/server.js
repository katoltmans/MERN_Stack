const express = require("express");
const cors = require("cors"); //allows servers to interact with each other
require("./config/mongoose.config");
const app = express();
app.use(cors()); //use cors
const PORT = 8000;

// body parser to fix body issues
app.use(express.json(), express.urlencoded({ extended: true }));

// only accept origin from client - connect to database
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

const AllProductRoutes = require("./routes/product.routes");
AllProductRoutes(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
