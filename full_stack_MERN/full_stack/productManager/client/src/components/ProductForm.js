import React, { useState } from "react";
import axios from "axios";
import styles from "../components/ProductForm.module.css";

const ProductForm = (props) => {
    // Bring in props from parent component
    const { products, setProducts } = props;
    // useState hooks to match database keys
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");

    //handler for when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default refresh behavior on submit
        e.preventDefault();
        // make a post request to create a new products
        axios
            .post("http://localhost:8000/api/products", {
                // shortcut syntax for document keys
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res); // track data in the console
                console.log(res.data);
                setProducts([...products, res.data]);
                setTitle("");
                setPrice(0.0);
                setDescription("");
            })
            .catch((err) => console.log("Error with the post request", err));
    };

    return (
        <form onSubmit={onSubmitHandler} className={styles.productForm}>
            <h2>Product Manager</h2>
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
                    step="0.01"
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
            <input type="submit" value="Create" className={styles.submit} />
        </form>
    );
};

export default ProductForm;
