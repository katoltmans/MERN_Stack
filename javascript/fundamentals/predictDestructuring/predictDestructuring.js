//Problem 1 - Prediction correct
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Prediction =
//Tesla
//Mercedes
console.log(randomCar);
console.log(otherRandomCar);

//Problem 2 - Prediction INCORRECT: console.log(name) will throw "ReferenceError: name is not defined" (since name was reassigned and stop running)
const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Prediction =  INCORRECT
//null - name changed  - ACTUAL: ReferenceError: name is not defined
//Elon                  WILL NOT RUN
console.log(name);
console.log(otherName);

//Problem 3 - Prediction INCORRECT: first password will run but hashedPassword is undefined (the password was not inside the object)
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Prediction =  INCORRECT
//ReferenceError: password is not defined   ACTUAL: 12345
//Will not run                              ACTUAL: undefined
console.log(password);
console.log(hashedPassword);

//Problem 4 - Prediction correct
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Prediction =
//false
//true
console.log(first == second);
console.log(first == third);

//Problem 5 - Prediction mostly correct - I forgot the array notation
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Prediction =
//value
//151833  ACTUAL: [1, 5, 1, 8, 3, 3]
//1
//5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
