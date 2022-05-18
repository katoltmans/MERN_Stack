import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Container,
    Button,
} from "@material-ui/core";

const AuthorList = (props) => {
    const { authors, setAuthors } = props;

    useEffect(() => {
        // Get request to find all authors
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log("Error with the getAll request (client)", err);
            });
    }, []); //Remember to stop the madness with an empty array!

    const handleDelete = (authorId) => {
        axios
            .delete(`http://localhost:8000/api/authors/${authorId}`)
            .then((res) => {
                console.log(res);
                setAuthors(authors.filter((author) => author._id !== authorId));
            })
            .catch((err) => {
                console.log("Error with the delete request (client)", err);
            });
    };

    const sortArray = (a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    };

    return (
        <Container component={Paper}>
            <Link to="/author/new" align="left">
                Add an author
            </Link>
            <h3 align="left">We have quotes by:</h3>
            <Table className="DisplayTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Author</TableCell>
                        <TableCell>Actions Available</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {authors.sort(sortArray).map((author, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{author.name}</TableCell>
                                <TableCell>
                                    <Link
                                        to={`/author/edit/${author._id}`}
                                        className="buttonText"
                                    >
                                        <Button variant="contained">
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleDelete(author._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Container>
    );
};

export default AuthorList;
