class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    // Method to console log the name of the Ninja instance
    sayName() {
        console.log(this.name);
        return this;
    }

    // Method to console log app 4 attributes of the Ninja instance
    showStats() {
        console.log(
            `Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`
        );
        return this;
    }

    // Method to increase Ninja instance health attribute
    drinkSake() {
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().showStats().drinkSake().showStats();
