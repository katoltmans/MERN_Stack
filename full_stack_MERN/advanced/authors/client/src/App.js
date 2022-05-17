import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
// Import components
import AuthorList from "./components/AuthorList";
import AddAuthorForm from "./components/AddAuthor";
import UpdateAuthor from "./components/UpdateAuthor";
// Import styling
import { AppBar, Container, Typography } from "@material-ui/core";

const App = () => {
    // Declare state
    const [authors, setAuthors] = useState([]);

    return (
        <div className="App">
            <Container maxWidth="lg">
                <AppBar position="relative">
                    <h1 align="left">Favorite Authors</h1>
                </AppBar>
                <BrowserRouter>
                    <Routes>
                        <Route
                            element={
                                <AuthorList
                                    authors={authors}
                                    setAuthors={setAuthors}
                                />
                            }
                            path="/"
                            default
                        />{" "}
                        //default path
                        <Route
                            element={
                                <AddAuthorForm
                                    authors={authors}
                                    setAuthors={setAuthors}
                                />
                            }
                            path="/author/new"
                        />
                        <Route
                            element={
                                <UpdateAuthor
                                    authors={authors}
                                    setAuthors={setAuthors}
                                />
                            }
                            path="/author/edit/:_id"
                        />
                    </Routes>
                </BrowserRouter>
            </Container>
        </div>
    );
};

export default App;
