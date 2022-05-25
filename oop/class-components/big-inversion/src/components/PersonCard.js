import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { age: props.age };
    }

    // Method to increase person's age when the birthday button is clicked
    increaseAge = () => {
        console.log(this.state.age);
        this.setState((state, props) => ({
            age: state.age + 1,
        }));
    };

    render() {
        const { firstName, lastName, age, hairColor } = this.props;

        return (
            <div>
                <h2>
                    {lastName}, {firstName}
                </h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.increaseAge}>
                    Birthday Button for {firstName} {lastName}
                </button>
            </div>
        );
    }
}

export default PersonCard;
