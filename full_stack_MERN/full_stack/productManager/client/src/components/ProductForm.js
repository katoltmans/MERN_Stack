import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
    // hooks to match
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    //handler for when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default refresh behavior on submit
        e.preventDefault();
        // make a post request to create a new product
        axios
            .post("http://localhost:8000/api/priducts", {
                // shortcut syntax for document keys
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res); // track data in the console
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Title:</label>
                <br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price:</label>
                <br />
                <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                />
            </p>
            <p>
                <label>Description:</label>
                <br />
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </p>
            <input type="submit" />
        </form>
    );
};

export default ProductForm;
