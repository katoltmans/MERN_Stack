import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
// import components
import Header from "./components/Header";
import ListView from "./views/ListView";
import AddPlayerView from "./views/AddPlayerView";
import PlayerStatus from "./components/PlayerStatus";

const App = () => {
    // declare state
    const [players, setPlayers] = useState([]);

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    {/*} add routes - remember to pass state */}
                    <Route
                        path="/players/list"
                        element={
                            <ListView
                                players={players}
                                setPlayers={setPlayers}
                            />
                        }
                        default
                    />
                    {/* default path */}
                    <Route
                        path="/players/addplayer"
                        element={
                            <AddPlayerView
                                players={players}
                                setPlayers={setPlayers}
                            />
                        }
                    />
                    {/*
                    <Route
                        path="/status/game/:num"
                        element={
                            <PlayerStatus
                                players={players}
                                setPlayers={setPlayers}
                            />
                        }
                      /> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
