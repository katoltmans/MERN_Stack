import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../components/UpdateProduct.module.css";
import ProductForm from "./ProductForm";

const UpdateProduct = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

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

    const updateProduct = (productParam) => {
        axios.put(`http://localhost:8000/api/products/${id}`, productParam);
        navigate("/");
    };

    return (
        <div className={styles.update}>
            <h3>Update Product</h3>
            {loaded && (
                <ProductForm
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
            )}
        </div>
    );
};

export default UpdateProduct;
