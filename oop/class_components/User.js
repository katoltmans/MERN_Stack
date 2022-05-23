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
        return this;
    }

    // Method for making withdrawals
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }

    // Method to display a user's account balance
    displayBalance() {
        console.log(
            "User: " +
                this.name +
                ", Balance: $" +
                this.accountBalance.toFixed(2)
        );
        return this;
    }

    // Method to transfer money
    transferMoney(amount, receiver) {
        this.accountBalance -= amount;
        receiver.accountBalance += amount;
        console.log(
            this.name +
                "'s Balance: $" +
                this.accountBalance +
                ", " +
                receiver.name +
                "'s Balance: $" +
                receiver.accountBalance
        );
        return this;
    }
}

const jake = new User("Jake Peralta", "jperalta@99.com");
const amy = new User("Amy Santiago", "asantiago@99.com");
const rosa = new User("Rosa Diaz", "rdiaz@99.com");

jake.makeDeposit(10)
    .makeDeposit(100)
    .makeDeposit(23.5)
    .makeWithdrawal(115)
    .displayBalance();

amy.makeDeposit(500)
    .makeDeposit(975)
    .makeWithdrawal(220)
    .makeWithdrawal(13.78)
    .displayBalance();

rosa.makeDeposit(500)
    .makeWithdrawal(225)
    .makeWithdrawal(215)
    .makeWithdrawal(65.89)
    .displayBalance();

amy.transferMoney(100, rosa);
