import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
    const { productId, successCallback } = props;

    const deleteProduct = (e) => {
        successCallback(productId);
    };

    return <button onClick={deleteProduct}>Delete</button>;
};

export default DeleteButton;
