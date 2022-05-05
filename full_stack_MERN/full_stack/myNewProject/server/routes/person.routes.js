const PersonController = require("../controllers/person.controller"); //Import the code from the controller and assign it to a variable

module.exports = (app) => {
    app.get("/api", PersonController.index);
};
