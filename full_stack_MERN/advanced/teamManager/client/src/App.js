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
                        element={
                            <ListView
                                players={players}
                                setPlayers={setPlayers}
                            />
                        }
                        path="/players/list"
                        default
                    />
                    {/* default path */}
                    <Route
                        element={
                            <AddPlayerView
                                players={players}
                                setPlayers={setPlayers}
                            />
                        }
                        path="players/addplayer"
                    />
                    <Route
                        element={
                            <PlayerStatus
                                players={players}
                                setPlayers={setPlayers}
                            />
                        }
                        path="/status/game/:num"
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
