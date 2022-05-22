class User {
    constructor(username, emailAddress) {
        //method has 2 parameters: name & username
        this.name = username; //values passed in will set the name and email
        this.email = emailAddress;
        this.accountBalance = 0; //Account balance defaults to 0 and is not needed as a parameter
    }

    // Method for making deposits
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
}
