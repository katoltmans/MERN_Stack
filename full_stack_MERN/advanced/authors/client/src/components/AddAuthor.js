import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
    Paper,
    Container,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
} from "@material-ui/core";

const AddAuthorForm = (props) => {
    const navigate = useNavigate();
    // Bring in props from parent component
    const { authors, setAuthors } = props;
    // useState hooks to match database keys
    const [name, setName] = useState("");
    // State for errors used for validation
    const [errors, setErrors] = useState({});

    // Handler when form is submitted
    const onSubmitHandler = (e) => {
        // prevent default refresh behavior
        e.preventDefault();
        // Post request to create a new author
        axios
            .post("http://localhost:8000/api/authors", {
                name,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAuthors([...authors, res.data]);
                navigate("/");
            })
            .catch((err) => {
                console.log("Error with post request (client)", err);
                setErrors(err.response.data.errors);
                console.log("ERROR:", errors);
            });
    };
    console.log("ERROR", errors);
    return (
        <Container component={Paper}>
            <Link to="/" align="left">
                Home
            </Link>
            <h3 align="left">Add a new author:</h3>
            <form onSubmit={onSubmitHandler}>
                <FormControl>
                    <InputLabel>Name:</InputLabel>
                    <OutlinedInput
                        type="text"
                        name="name"
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

export default AddAuthorForm;
