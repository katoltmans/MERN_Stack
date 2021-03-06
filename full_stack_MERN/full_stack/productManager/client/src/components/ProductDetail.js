import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styles from "../components/ProductDetail.module.css";

const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + id) //Remember the slash at the end of the IP address!
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log("Error with findOneProduct request", err);
            });
    }, []);

    return (
        <div className={styles.details}>
            <div>
                <h2>{product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <Link to={`/product/edit/${product._id}`}>
                <button>Update Product</button>
            </Link>
            <Link to={`/`}>
                <button>Back to Product Manager</button>
            </Link>
        </div>
    );
};

export default ProductDetail;
