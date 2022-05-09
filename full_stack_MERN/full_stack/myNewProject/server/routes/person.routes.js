const PersonController = require("../controllers/person.controller"); //Import the code from the controller and assign it to a variable

module.exports = (app) => {
    app.get("/api", PersonController.index);
    app.post("/api/people", PersonController.createPerson);
    app.get("/api/people", PersonController.getAllPeople); //can be the same route as POST as long as the http verb is different
};
