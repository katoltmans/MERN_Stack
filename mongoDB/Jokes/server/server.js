const express = require("express");
const app = express();
const PORT = 8000;

require("./config/mongoose.config");

// body parser
app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyRoutes = require("./routes/jokes.routes");
AllMyRoutes(app);

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
