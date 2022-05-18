import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    Paper,
    Container,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
} from "@material-ui/core";

const UpdateAuthor = (props) => {
    const navigate = useNavigate();
    // useState hooks to match database keys
    const [name, setName] = useState("");
    const { id } = useParams();
    // State for errors used for validation
    const [errors, setErrors] = useState({});

    // Handler when form is submitted
    useEffect(() => {
        // Get request to pre-populate form
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log("author", res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(
                    "Error with single author get request (client)",
                    err
                );
            });
    }, []);

    // Handler when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default refresh behavior
        e.preventDefault();
        // Post request to create a new author
        axios
            .put(`http://localhost:8000/api/authors/${id}`, {
                name,
            })
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                console.log("Error with put request (client)", err);
                setErrors(err.response.data.error.errors);
            });
    };

    return (
        <Container component={Paper}>
            <Link to="/" align="left">
                Home
            </Link>
            <h3 align="left">Edit this author:</h3>
            <form onSubmit={onSubmitHandler}>
                <FormControl>
                    <InputLabel>Name:</InputLabel>
                    <OutlinedInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name ? (
                        <p className="error">{errors.name.message}</p>
                    ) : null}
                </FormControl>
                <div>
                    <Link to="/" className="buttonText">
                        <Button variant="contained" color="primary">
                            Cancel
                        </Button>
                    </Link>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default UpdateAuthor;
