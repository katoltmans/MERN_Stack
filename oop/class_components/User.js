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

    // Method for making withdrawals
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }

    // Method to display a user's account balance
    displayBalance() {
        console.log(
            "User: " +
                this.name +
                ", Balance: $" +
                this.accountBalance.toFixed(2)
        );
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
    }
}

const jake = new User("Jake Peralta", "jperalta@99.com");
const amy = new User("Amy Santiago", "asantiago@99.com");
const rosa = new User("Rosa Diaz", "rdiaz@99.com");

jake.makeDeposit(10);
jake.makeDeposit(100);
jake.makeDeposit(23.5);
jake.makeWithdrawal(115);
jake.displayBalance();

amy.makeDeposit(500);
amy.makeDeposit(975);
amy.makeWithdrawal(220);
amy.makeWithdrawal(13.78);
amy.displayBalance();

rosa.makeDeposit(500);
rosa.makeWithdrawal(225);
rosa.makeWithdrawal(215);
rosa.makeWithdrawal(65.89);
rosa.displayBalance();

amy.transferMoney(100, rosa);
