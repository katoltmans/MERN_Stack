const express = require("express");
require("./config/mongoose.config");
const app = express();
const PORT = 8000;

// body parser
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyRoutes = require("./routes/jokes.routes");
AllMyRoutes(app);

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
