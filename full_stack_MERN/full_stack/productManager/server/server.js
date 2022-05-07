const express = require("express");
const cors = require("cors"); //allows servers to interact with each other
const app = express();
app.use(cors()); //use cors
const PORT = 8000;

// body parser to fix body issues
app.use(express.json(), express.urlencoded({ extended: true }));

const AllProductRoutes = require("./routes/product.routes");
AllProductRoutes(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
