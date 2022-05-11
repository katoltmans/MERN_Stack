const Person = require("../models/person.model");

module.exports.index = (request, response) => {
    //We are exporting a key:val pair of index : function
    response.json({
        // This is where we're setting the API's response to the requesting client
        message: "Hello World",
    });
};

// Method to add a person
module.exports.createPerson = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.create(request.body) //This will use whatever the body of the client's request sends over
        .then((person) => response.json(person))
        .catch((err) => response.json(err));
};

// Method to find all people
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then((persons) => {
            console.log(persons); //console logs are optional, but they are highly recommended for trouble shooting
            response.json(persons);
        })
        .catch((err) => {
            console.log(err);
            response.json(err);
        });
};

// Method to locate a specific person
module.exports.getPerson = (request, response) => {
    Person.findOne({ _id: request.params.id })
        .then((person) => response.json(person))
        .catch((err) => response.json(err));
};

// Method to update a person
module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
    })
        .then((updatedPerson) => response.json(updatedPerson))
        .catch((err) => response.json(err));
};

// Method to delete a person
module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id }) //note: ".id" here MUST match
        // id in the corresponding route
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.json(err));
};
