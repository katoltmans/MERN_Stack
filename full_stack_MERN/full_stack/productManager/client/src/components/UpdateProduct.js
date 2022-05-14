import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "../components/UpdateProduct.module.css";
import ProductForm from "./ProductForm";

const UpdateProduct = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log("Error loading data", err);
            });
    }, []);

    return (
        <div>
            <h3>Update Product</h3>
            {loaded && (
                <ProductForm
                    onSubmitProp={UpdateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
            )}
        </div>
    );
};

export default UpdateProduct;
