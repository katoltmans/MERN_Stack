const PersonController = require("../controllers/person.controller"); //Import the code from the controller and assign it to a variable

module.exports = (app) => {
    app.get("/api", PersonController.index);
    app.post("/api/people", PersonController.createPerson);
    app.get("/api/people", PersonController.getAllPeople); //can be the same route as POST as long as the http verb is different
    app.get("/api/people/:id", PersonController.getPerson);
    app.put("/api/people/:id", PersonController.updatePerson);
    app.delete("/api/people/:id", PersonController.deletePerson); //note: "id" here must match
    //the params in controller
};
