import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = (props) => {
    // useState hooks to match database keys
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log("product", res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log("Error loading data", err);
            });
    }, []);

    // Added allow easy navigation between components
    const navigate = useNavigate();

    //handler for when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default refresh behavior on submit
        e.preventDefault();
        // make a post request to create a new products
        axios
            .put(`http://localhost:8000/api/products/${id}`, {
                // shortcut syntax for document keys
                title,
                price,
                description,
            })
            .then((res) => {
                navigate("/");
            })
            .catch((err) => console.log("Error with the put request", err));
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <h3>Update Product</h3>
            <p>
                <label>Product Title:</label>
                <br />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </p>
            <p>
                <label>Price:</label>
                <br />
                <input
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </p>
            <p>
                <label>Description:</label>
                <br />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </p>
            <input type="submit" value="Update Product" />
        </form>
    );
};

export default UpdateProduct;
