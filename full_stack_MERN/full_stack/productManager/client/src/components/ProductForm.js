import React, { useState } from "react";
import styles from "../components/ProductForm.module.css";
import { useNavigate } from "react-router-dom";

const ProductForm = (props) => {
    // Bring in props from parent component
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } =
        props;
    // useState hooks to match database keys
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const navigate = useNavigate();

    //handler for when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default refresh behavior on submit
        e.preventDefault();
        // make a post request to create a new products
        onSubmitProp({ title, price, description });
        navigate("/", { replace: true });
    };

    return (
        <div>
            <p>
                <label>Product Title:</label>
                <br />
                <input
                    type="text"
                    name="title"
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
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </p>
            <p>
                <label>Description:</label>
                <br />
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </p>
            <input
                type="submit"
                onClick={onSubmitHandler}
                className={styles.submit}
            />
        </div>
    );
};

export default ProductForm;
