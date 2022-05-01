const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

// object to create a user
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.database.mongodbObjectId(),
    };
    return newUser;
};

// object to create a company
const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.companyName(),
        streetAddress: faker.address.streetAddress(true),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    };
    return newCompany;
};

//route to return a new user
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

//route to return a new company
app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

//route to return a new user and a new company
app.get("/api/user/company", (req, res) => {
    res.json({ user: createUser(), company: createCompany() });
});

// Make server listen to designated port
app.listen(port, () => {
    console.log(`server is running on: ${port}`);
});
