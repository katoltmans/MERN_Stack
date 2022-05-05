const express = require("express");
const app = express();
const PORT = 8000;
require("./routes/person.routes")(app); // We're importing the routes export.
// These two lines are the long-hand notation of the code above. They better show what's going on.
// const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
// personRoutes(app);     <-- invoke the function and pass in the express "app" server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
