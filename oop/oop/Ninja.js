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

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log(
            "Programming isn't about what you know; it's about what you can figure out."
        );
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().showStats().drinkSake().showStats();

console.log();

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
