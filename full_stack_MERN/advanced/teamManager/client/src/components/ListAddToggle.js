import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/ListAddToggle.module.css";

const ListAddToggle = (props) => {
    const { children } = props;

    return (
        <div className={styles.toggleBox}>
            <NavLink className="NavLink" to="/players/list">
                List
            </NavLink>
            <span> | </span>
            <NavLink className="NavLink" to="/players/addplayer">
                Add Player
            </NavLink>
            <div>{children}</div>
        </div>
    );
};

export default ListAddToggle;
