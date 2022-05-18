import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // GET request to find all authors
        axios
            .get("http://localhost:8000/api/players")
            .then((res) => {
                console.log(res.data);
                setPlayers(res.data);
            })
            .catch((err) => {
                console.log("Error with the getAll request (client)", err);
            });
    }, []); //Remember to stop the madness with an empty array!

    const handleDelete = (playerId) => {
        axios
            .delete(`http://localhost:8000/api/players/${playerId}`)
            .then((res) => {
                console.log(res);
                setPlayers(players.filter((player) => player._id !== playerId));
            })
            .catch((err) => {
                console.log("Error with the delete request (client)", err);
            });
    };

    const sortArray = (a, b) => {
        if (a.position < b.position) {
            return -1;
        }
        if (a.position > b.position) {
            return 1;
        }
        return 0;
    };

    return (
        <div className="playerList">
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.sort(sortArray).map((player, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <Link to="/">{player.name}</Link>
                                </td>
                                <td>{player.position}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(player._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerList;
