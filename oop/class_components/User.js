class BankAccount {
    constructor(balance, intRate) {
        this.balance = typeof balance !== "undefined" ? balance : 0;
        this.intRate = typeof intRate !== "undefined" ? intRate : 0.03;
    }

    // Method to deposit money to an account
    deposit(amount) {
        this.balance += amount;
        return this;
    }

    // Method to withdraw money from an account
    withdraw(amount) {
        if (this.balance - amount > 0) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds: Charging a $5 fee");
            this.balance -= 5;
        }
        return this;
    }

    displayAccountInfo() {
        return this.balance.toFixed(2);
    }

    yieldInterest() {
        if (this.balance > 0) {
            this.balance += this.balance * this.intRate;
        } else {
            this.balance += 0;
            console.log("Insufficient funds - no interest accrued");
        }
        return this;
    }
}

class User {
    constructor(username, emailAddress) {
        //method has 2 parameters: name & username
        this.name = username; //values passed in will set the name and email
        this.email = emailAddress;
        this.account = new BankAccount(0, 0.02);
        //this.accountBalance = 0; //Account balance defaults to 0 and is not needed as a parameter
    }

    // Method for making deposits
    makeDeposit(amount) {
        this.account.deposit(amount);
        console.log("Account balance after deposit: " + this.account.balance);
        return this;
    }

    // Method for making withdrawals
    makeWithdrawal(amount) {
        this.account.withdraw(amount);
        console.log(
            "Account balance after withdrawal: " + this.account.balance
        );
        return this;
    }

    // Method to display a user's account balance
    displayBalance() {
        console.log(
            "User: " +
                this.name +
                ", Balance: $" +
                this.account.displayAccountInfo()
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
                this.account.displayAccountInfo() +
                ", " +
                receiver.name +
                "'s Balance: $" +
                receiver.account.displayAccountInfo()
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
