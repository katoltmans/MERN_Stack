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
        console.log("Balance: $" + this.balance.toFixed(2));
        return this;
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

account1 = new BankAccount(500, 0.02);
account2 = new BankAccount();

account1
    .deposit(445)
    .deposit(30)
    .deposit(1234)
    .withdraw(37.2)
    .yieldInterest()
    .displayAccountInfo();

account2
    .deposit(500)
    .deposit(110)
    .withdraw(30)
    .withdraw(400)
    .withdraw(26.5)
    .withdraw(200)
    .yieldInterest()
    .displayAccountInfo();
